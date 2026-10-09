// ============================================================
// ROADRANK - Prioritization Engine
// Computes multi-attribute priority scores with AHP weights
// ============================================================

import { TERRAIN_FACTORS, TREATMENTS } from '../data/roadData.js';
import { getNormalWeights, getMonsoonWeights } from './ahpEngine.js';

/**
 * Calculate Road Health Index from defects (DDP method)
 */
export function calculateRHI(road) {
  // Already pre-calculated in dataset, but this shows the method
  return road.current_rhi;
}

/**
 * Condition Defect Score: S_condition = 100 - RHI
 */
function conditionScore(road) {
  return 100 - road.current_rhi;
}

/**
 * Public Connectivity Impact Score (PCIS)
 * Evaluates how critical this road is for public access
 */
function publicImpactScore(road) {
  const popFactor = 30 * Math.log10(road.population_served / 500 + 1);
  const hospitalBonus = road.connects_hospital ? 25 : 0;
  const schoolBonus = road.connects_school ? 15 : 0;
  const marketBonus = road.connects_market ? 15 : 0;
  const lifelineBonus = road.is_single_access_lifeline ? 15 : 0;
  
  return Math.min(100, popFactor + hospitalBonus + schoolBonus + marketBonus + lifelineBonus);
}

/**
 * Network Criticality Score
 * Evaluates detour penalty and isolation risk
 */
function networkScore(road) {
  const detourFactor = 40 * Math.min(1.0, road.detour_distance_km / 30);
  const centralityFactor = 35 * (road.network_centrality_score / 100);
  const noAlternate = road.is_single_access_lifeline ? 25 : 0;
  
  return Math.min(100, detourFactor + centralityFactor + noAlternate);
}

/**
 * Deterioration Risk Score (90-day failure probability)
 */
function deteriorationRiskScore(road, isMonsoon = false) {
  const terrainFactor = TERRAIN_FACTORS[road.terrain_type] || 1.0;
  const monsoonFactor = isMonsoon ? 2.15 : 1.0;
  
  // Base decay rate
  const lambda0 = 0.0012;
  const lambda = lambda0 
    * (1 + 0.35 * road.aadt_traffic / 5000) 
    * (1 + 0.25 * road.heavy_vehicle_pct / 15) 
    * terrainFactor 
    * monsoonFactor;
  
  // Projected RHI at 90 days
  const rhi90 = road.current_rhi * Math.exp(-lambda * 90);
  
  // Failure probability (sigmoid around RHI=40)
  const pFailure = 1 / (1 + Math.exp((rhi90 - 40) / 6.5));
  
  return Math.min(100, 100 * pFailure * (isMonsoon ? 1.3 : 1.0));
}

/**
 * Climate vulnerability score
 */
function climateScore(road, isMonsoon = false) {
  const terrainRisk = {
    'Valley': 20,
    'Rolling': 40,
    'Hilly': 65,
    'Steep Escarpment': 90
  };
  
  let score = terrainRisk[road.terrain_type] || 30;
  if (isMonsoon) score = Math.min(100, score * 1.5);
  return score;
}

/**
 * Maintenance Gap Score
 */
function maintenanceGapScore(road) {
  const now = new Date();
  const lastMaint = new Date(road.last_major_maintenance);
  const yearsSince = (now - lastMaint) / (365.25 * 24 * 60 * 60 * 1000);
  
  return Math.min(100, (yearsSince / 5.0) * 100);
}

/**
 * Economic efficiency score (cost of delay)
 */
function economicScore(road) {
  // Higher score = more urgent economic case
  const treatment = getRecommendedTreatment(road);
  const costNow = treatment.costPerKmLakh * road.length_km;
  const costDelay = costNow * (1 + 2.4 * Math.pow(1 - road.current_rhi / 100, 2));
  const delayCostRatio = (costDelay - costNow) / costNow;
  
  return Math.min(100, delayCostRatio * 50);
}

/**
 * Main priority calculation using AHP weights
 */
export function calculatePriority(road, isMonsoon = false) {
  const weights = isMonsoon ? getMonsoonWeights() : getNormalWeights();
  
  const scores = {
    condition: conditionScore(road),
    safety: publicImpactScore(road),
    connectivity: networkScore(road),
    traffic: deteriorationRiskScore(road, isMonsoon),
    climate: climateScore(road, isMonsoon),
    cost: economicScore(road)
  };
  
  const totalScore = 
    weights.condition * scores.condition +
    weights.safety * scores.safety +
    weights.connectivity * scores.connectivity +
    weights.traffic * scores.traffic +
    weights.climate * scores.climate +
    weights.cost * scores.cost;
  
  return {
    totalScore: Math.round(totalScore * 100) / 100,
    scores,
    weights,
    breakdown: Object.entries(scores).map(([key, value]) => ({
      criterion: key,
      score: Math.round(value * 100) / 100,
      weight: weights[key],
      weighted: Math.round(value * weights[key] * 100) / 100
    }))
  };
}

/**
 * Rank all roads by priority
 */
export function rankAllRoads(roads, isMonsoon = false) {
  const prioritized = roads.map(road => {
    const priority = calculatePriority(road, isMonsoon);
    const treatment = getRecommendedTreatment(road);
    const costEstimate = treatment.costPerKmLakh * road.length_km;
    
    return {
      ...road,
      priority,
      recommended_treatment: treatment,
      estimated_cost_lakh: Math.round(costEstimate * 100) / 100
    };
  });
  
  // Sort descending by total score
  prioritized.sort((a, b) => b.priority.totalScore - a.priority.totalScore);
  
  // Assign ranks
  prioritized.forEach((road, index) => {
    road.priority_rank = index + 1;
  });
  
  return prioritized;
}

/**
 * Get recommended treatment based on RHI
 */
export function getRecommendedTreatment(road) {
  const rhi = road.current_rhi;
  
  if (rhi >= 80) return TREATMENTS.monitor;
  if (rhi >= 60) return TREATMENTS.crackSeal;
  if (rhi >= 50) return TREATMENTS.slurrySeal;
  if (rhi >= 40) return TREATMENTS.thinOverlay;
  if (rhi >= 25) return TREATMENTS.resurfacing;
  return TREATMENTS.reconstruction;
}

/**
 * Simulate deterioration over time
 */
export function simulateDeterioration(road, days, isMonsoon = false) {
  const terrainFactor = TERRAIN_FACTORS[road.terrain_type] || 1.0;
  const monsoonFactor = isMonsoon ? 2.15 : 1.0;
  
  const lambda0 = 0.0012;
  const lambda = lambda0 
    * (1 + 0.35 * road.aadt_traffic / 5000) 
    * (1 + 0.25 * road.heavy_vehicle_pct / 15) 
    * terrainFactor 
    * monsoonFactor;
  
  const projectedRHI = Math.max(5, road.current_rhi * Math.exp(-lambda * days));
  const pFailure = 1 / (1 + Math.exp((projectedRHI - 40) / 6.5));
  
  // Cost today
  const treatmentNow = getRecommendedTreatment(road);
  const costNow = treatmentNow.costPerKmLakh * road.length_km;
  
  // Cost if delayed
  const futureRoad = { ...road, current_rhi: projectedRHI };
  const treatmentFuture = getRecommendedTreatment(futureRoad);
  const costFuture = treatmentFuture.costPerKmLakh * road.length_km * 
    (1 + 2.4 * Math.pow(1 - projectedRHI / road.current_rhi, 2));
  
  return {
    days,
    projectedRHI: Math.round(projectedRHI * 10) / 10,
    failureProbability: Math.round(pFailure * 1000) / 10,
    costNowLakh: Math.round(costNow * 100) / 100,
    costDelayedLakh: Math.round(costFuture * 100) / 100,
    avoidedCostLakh: Math.round((costFuture - costNow) * 100) / 100,
    treatmentNow: treatmentNow.name,
    treatmentDelayed: treatmentFuture.name
  };
}

/**
 * Budget Optimizer (Greedy Knapsack)
 */
export function optimizeBudget(rankedRoads, budgetLakh, strategy = 'balanced') {
  let candidates = [...rankedRoads];
  
  // Re-sort based on strategy
  switch (strategy) {
    case 'safety':
      candidates.sort((a, b) => {
        const scoreA = a.priority.scores.condition * 0.5 + a.priority.scores.safety * 0.5;
        const scoreB = b.priority.scores.condition * 0.5 + b.priority.scores.safety * 0.5;
        return scoreB - scoreA;
      });
      break;
    case 'connectivity':
      candidates.sort((a, b) => {
        const scoreA = a.priority.scores.connectivity * 0.6 + a.priority.scores.safety * 0.4;
        const scoreB = b.priority.scores.connectivity * 0.6 + b.priority.scores.safety * 0.4;
        return scoreB - scoreA;
      });
      break;
    case 'efficiency':
      candidates.sort((a, b) => {
        const effA = a.priority.totalScore / (a.estimated_cost_lakh || 1);
        const effB = b.priority.totalScore / (b.estimated_cost_lakh || 1);
        return effB - effA;
      });
      break;
    default: // balanced - use existing priority ranking
      break;
  }
  
  let remainingBudget = budgetLakh;
  const selected = [];
  const skipped = [];
  let totalPopulation = 0;
  let totalKm = 0;
  let totalAvoidedCost = 0;
  let lifelinesPreserved = 0;
  
  for (const road of candidates) {
    if (road.estimated_cost_lakh <= remainingBudget) {
      remainingBudget -= road.estimated_cost_lakh;
      selected.push(road);
      totalPopulation += road.population_served;
      totalKm += road.length_km;
      
      // Calculate avoided future cost
      const sim = simulateDeterioration(road, 180);
      totalAvoidedCost += sim.avoidedCostLakh;
      
      if (road.is_single_access_lifeline) lifelinesPreserved++;
    } else {
      skipped.push(road);
    }
  }
  
  return {
    selected,
    skipped,
    totalCostLakh: Math.round((budgetLakh - remainingBudget) * 100) / 100,
    budgetUtilization: Math.round(((budgetLakh - remainingBudget) / budgetLakh) * 1000) / 10,
    remainingBudgetLakh: Math.round(remainingBudget * 100) / 100,
    totalPopulationProtected: totalPopulation,
    totalKmPreserved: Math.round(totalKm * 10) / 10,
    totalAvoidedCostLakh: Math.round(totalAvoidedCost * 100) / 100,
    lifelinesPreserved,
    roi: Math.round((totalAvoidedCost / (budgetLakh - remainingBudget || 1)) * 100) / 100,
    segmentsSelected: selected.length
  };
}
