// ============================================================
// ROADPULSE - AHP Engine (Analytic Hierarchy Process)
// Implements full eigenvector-based AHP with consistency check
// ============================================================

/**
 * Calculate AHP weights from a pairwise comparison matrix
 * Uses the geometric mean method (Row Geometric Mean Method)
 * which is equivalent to the eigenvector method for consistent matrices
 */
export function calculateAHPWeights(matrix) {
  const n = matrix.length;
  
  // Step 1: Calculate geometric mean of each row
  const geometricMeans = matrix.map(row => {
    const product = row.reduce((acc, val) => acc * val, 1);
    return Math.pow(product, 1 / n);
  });
  
  // Step 2: Normalize geometric means to get weights
  const sum = geometricMeans.reduce((acc, val) => acc + val, 0);
  const weights = geometricMeans.map(gm => gm / sum);
  
  return weights;
}

/**
 * Calculate Consistency Ratio (CR) for the AHP matrix
 * CR < 0.10 is considered acceptable
 */
export function calculateConsistencyRatio(matrix, weights) {
  const n = matrix.length;
  
  // Random Index table (Saaty)
  const RI = [0, 0, 0.58, 0.90, 1.12, 1.24, 1.32, 1.41, 1.45, 1.49];
  
  if (n <= 2) return 0; // Always consistent for 1 or 2 criteria
  
  // Step 1: Calculate Aw (matrix × weight vector)
  const Aw = matrix.map(row => 
    row.reduce((sum, val, j) => sum + val * weights[j], 0)
  );
  
  // Step 2: Calculate λmax (principal eigenvalue)
  const lambdaValues = Aw.map((aw, i) => aw / weights[i]);
  const lambdaMax = lambdaValues.reduce((sum, val) => sum + val, 0) / n;
  
  // Step 3: Calculate CI and CR
  const CI = (lambdaMax - n) / (n - 1);
  const CR = CI / RI[n];
  
  return {
    lambdaMax: Math.round(lambdaMax * 1000) / 1000,
    CI: Math.round(CI * 1000) / 1000,
    CR: Math.round(CR * 1000) / 1000,
    isConsistent: CR < 0.10
  };
}

/**
 * Full AHP analysis: compute weights + consistency from pairwise matrix
 */
export function performAHP(pairwiseMatrix, criteriaNames) {
  const weights = calculateAHPWeights(pairwiseMatrix);
  const consistency = calculateConsistencyRatio(pairwiseMatrix, weights);
  
  return {
    criteria: criteriaNames,
    weights: weights,
    weightMap: criteriaNames.reduce((map, name, i) => {
      map[name] = Math.round(weights[i] * 1000) / 1000;
      return map;
    }, {}),
    consistency
  };
}

/**
 * Pre-Monsoon mode: dynamically re-weight AHP priorities
 * Boosts climate vulnerability & network criticality
 */
export function getMonsoonWeights() {
  return {
    condition: 0.20,
    safety: 0.15,
    connectivity: 0.25,
    traffic: 0.10,
    climate: 0.25,
    cost: 0.05
  };
}

export function getNormalWeights() {
  return {
    condition: 0.35,
    safety: 0.22,
    connectivity: 0.15,
    traffic: 0.13,
    climate: 0.09,
    cost: 0.06
  };
}
