import { useState, useMemo, useEffect } from 'react';
import { getConditionColor, getConditionLabel, getWorkCategory } from '../data/roadData.js';
import { simulateDeterioration } from '../engines/prioritizationEngine.js';
import {
  Ruler,
  Building2,
  Search,
  Scale,
  Lightbulb,
  AlertTriangle,
  IndianRupee,
  Clock,
  Printer,
  CheckCircle2,
  Compass,
  Layers,
  CloudRain,
  ShieldAlert
} from 'lucide-react';

export default function RoadDetailModal({ road, isMonsoon, onClose }) {
  const [simDays, setSimDays] = useState(90);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const tier = useMemo(() => {
    return getWorkCategory(road.current_rhi, isMonsoon, road.is_single_access_lifeline);
  }, [road, isMonsoon]);

  const simulation = useMemo(() => {
    return simulateDeterioration(road, simDays, isMonsoon);
  }, [road, simDays, isMonsoon]);

  const conditionColor = getConditionColor(road.current_rhi);
  const conditionLabel = getConditionLabel(road.current_rhi);

  return (
    <div className="road-detail-overlay" onClick={onClose}>
      <div className="road-detail-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="road-detail-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span className="road-detail-id">{road.segment_id}</span>
            <div>
              <div className="road-detail-title">
                {road.road_name} ({road.road_code})
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                {road.district} District &bull; {road.division} &bull; {road.classification}
              </div>
            </div>
            <div style={{ marginLeft: 12, display: 'flex', gap: 8 }}>
              <span className="badge" style={{ background: 'var(--accent-primary-glow)', color: 'var(--accent-primary)', fontWeight: 700 }}>
                AHP Rank #{road.priority_rank}
              </span>
              <span className={`badge ${conditionLabel.toLowerCase()}`}>
                RHI {road.current_rhi} ({conditionLabel})
              </span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="road-detail-body">
          {/* Statutory Framework Alignment Banner */}
          <div style={{
            background: tier.bg,
            border: `1px solid ${tier.border}`,
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: tier.color }}>{tier.num}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: tier.color }}>{tier.title}: {tier.subtitle}</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-primary)', marginTop: 4 }}>
                {tier.description}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Statutory Action Protocol
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: tier.color }}>
                {tier.action}
              </div>
            </div>
          </div>

          {/* Grid of Technical Specs and Scores */}
          <div className="detail-grid">
            {/* Section 1: Corridor Physical Asset Specs */}
            <div className="detail-section">
              <div className="detail-section-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Ruler size={16} style={{ color: '#38bdf8' }} />
                <span>Physical Corridor Asset Specifications</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Segment Length</span>
                <span className="detail-value">{road.length_km} km</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Carriageway Width</span>
                <span className="detail-value">{road.surface_width_m} m ({road.lane_count} Lanes)</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Pavement Type</span>
                <span className="detail-value">{road.pavement_type}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Terrain Topography</span>
                <span className="detail-value">{road.terrain_type}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Average Daily Traffic (AADT)</span>
                <span className="detail-value">{road.aadt_traffic.toLocaleString()} PCU</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Heavy Commercial Vehicle %</span>
                <span className="detail-value">{road.heavy_vehicle_pct}%</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Last Major Maintenance</span>
                <span className="detail-value">{road.last_major_maintenance} ({road.last_treatment_type})</span>
              </div>
            </div>

            {/* Section 2: Public Connectivity & Lifeline Impact */}
            <div className="detail-section">
              <div className="detail-section-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Building2 size={16} style={{ color: '#f59e0b' }} />
                <span>Public Connectivity &amp; Criticality Analysis</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Population Served</span>
                <span className="detail-value">{road.population_served.toLocaleString()} residents</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Connected Settlements</span>
                <span className="detail-value">{road.connected_villages_count} villages</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Detour Distance if Closed</span>
                <span className="detail-value" style={{ color: road.detour_distance_km > 30 ? 'var(--status-critical)' : 'inherit' }}>
                  {road.detour_distance_km} km detour
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Single-Access Lifeline</span>
                <span className="detail-value">
                  {road.is_single_access_lifeline ? (
                    <span className="badge lifeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Compass size={11} /> Sole Lifeline Arterial
                    </span>
                  ) : (
                    <span style={{ color: 'var(--text-muted)' }}>Alternate Network Exists</span>
                  )}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Network Centrality Score</span>
                <span className="detail-value">{road.network_centrality_score}/100</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Critical Facilities Connected</span>
                <div className="facility-badges">
                  {road.connects_hospital && <span className="facility-badge">District Hospital / PHC</span>}
                  {road.connects_school && <span className="facility-badge">High School / College</span>}
                  {road.connects_market && <span className="facility-badge">Central Bazar / Mandi</span>}
                  {!road.connects_hospital && !road.connects_school && !road.connects_market && (
                    <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Local agricultural transit</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Defect Breakdown (DDP) */}
          <div className="detail-section" style={{ marginBottom: 20 }}>
            <div className="detail-section-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Search size={16} style={{ color: '#38bdf8' }} />
              <span>Automated Defect Survey (Defect Deduct Points: DDP)</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 10 }}>
              {road.defects && road.defects.length > 0 ? (
                road.defects.map((def, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: 'var(--radius-sm)',
                    padding: 12
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, textTransform: 'capitalize', color: 'var(--text-primary)' }}>
                        {def.type.replace('_', ' ')}
                      </span>
                      <span className={`badge ${def.severity === 'Severe' || def.severity === 'Critical' ? 'critical' : def.severity === 'High' ? 'poor' : 'fair'}`}>
                        {def.severity}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 8 }}>
                      Count: <strong>{def.count}</strong> | Area: <strong>{def.area_sqm} m²</strong>
                      {def.depth_cm && <> | Depth: <strong>{def.depth_cm} cm</strong></>}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                      AI Detection Confidence: {(def.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                  No high-severity defects recorded in recent drone photogrammetry survey.
                </div>
              )}
            </div>
          </div>

          {/* Section 4: AHP Multi-Attribute Priority Breakdown */}
          {road.priority && (
            <div className="explain-card" style={{ marginBottom: 20 }}>
              <div className="explain-title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Scale size={18} style={{ color: '#f59e0b' }} />
                <span>Multi-Attribute AHP Priority Score: {road.priority.totalScore} / 100</span>
                <span className="badge accent" style={{ marginLeft: 8 }}>
                  Rank #{road.priority_rank} Statewide
                </span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 16 }}>
                Synthesized using Saaty&apos;s Eigenvector method across 6 peer-reviewed decision criteria ({isMonsoon ? 'Pre-Monsoon Disaster Mode Active' : 'Standard Baseline Mode'}).
              </p>

              {road.priority.breakdown.map((b) => (
                <div key={b.criterion} className="explain-bar-row">
                  <div className="explain-bar-label" style={{ textTransform: 'capitalize' }}>
                    {b.criterion} ({Math.round(b.weight * 100)}%)
                  </div>
                  <div className="explain-bar-track">
                    <div
                      className="explain-bar-fill"
                      style={{
                        width: `${Math.min(100, b.score)}%`,
                        background: b.score > 70 ? 'var(--status-critical)' : b.score > 40 ? 'var(--status-poor)' : 'var(--status-good)'
                      }}
                    />
                  </div>
                  <div className="explain-bar-value">{b.score}</div>
                </div>
              ))}

              <div className="explain-reasons">
                <div style={{ fontWeight: 700, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 8 }}>
                  AI Explainability Rationale (GFR-2017)
                </div>
                <div className="explain-reason">
                  <span className="explain-reason-icon" style={{ display: 'inline-flex', alignItems: 'center' }}><Lightbulb size={13} /></span>
                  <span>
                    <strong>Condition Factor:</strong> Current RHI is {road.current_rhi}/100, representing a defect penalty of {road.priority.scores.condition} pts.
                  </span>
                </div>
                {road.is_single_access_lifeline && (
                  <div className="explain-reason">
                    <span className="explain-reason-icon" style={{ color: 'var(--status-critical)', display: 'inline-flex', alignItems: 'center' }}><AlertTriangle size={13} /></span>
                    <span>
                      <strong>Lifeline Vulnerability:</strong> Zero alternate detour exists for {road.population_served.toLocaleString()} inhabitants.
                    </span>
                  </div>
                )}
                {road.connects_hospital && (
                  <div className="explain-reason">
                    <span className="explain-reason-icon" style={{ display: 'inline-flex', alignItems: 'center' }}><Building2 size={13} /></span>
                    <span>
                      <strong>Healthcare Access:</strong> Urgent ambulance transit artery for {road.district} District Hospital.
                    </span>
                  </div>
                )}
                <div className="explain-reason">
                  <span className="explain-reason-icon" style={{ display: 'inline-flex', alignItems: 'center' }}><IndianRupee size={13} /></span>
                  <span>
                    <strong>Economic Efficiency:</strong> Recommended intervention &quot;{road.recommended_treatment.name}&quot; at ₹{road.estimated_cost_lakh.toFixed(1)}L prevents an estimated 2.4x escalation in full reconstruction costs.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Section 5: Deterioration Simulation */}
          <div className="sim-slider-container">
            <div className="sim-slider-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Clock size={16} style={{ color: '#06b6d4' }} />
              <span>Deterioration Simulation (Markov-Weibull Decay Model)</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
              Simulate pavement degradation and compound financial escalation if funding is delayed.
            </p>

            <div style={{ margin: '14px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                <span>Delay Window: {simDays} Days</span>
                <span style={{ color: isMonsoon ? '#06b6d4' : 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  {isMonsoon ? <><CloudRain size={13} /> Monsoon Acceleration (2.15x Rate)</> : 'Normal Weather Decay'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="365"
                step="15"
                value={simDays}
                onChange={(e) => setSimDays(parseInt(e.target.value))}
                className="sim-slider"
              />
              <div className="sim-markers">
                <span>0 Days (Today)</span>
                <span>90 Days (Quarterly)</span>
                <span>180 Days (6 Months)</span>
                <span>365 Days (1 Year)</span>
              </div>
            </div>

            <div className="sim-results">
              <div className="sim-result-card">
                <div className="sim-result-label">Projected RHI</div>
                <div className="sim-result-value" style={{ color: getConditionColor(simulation.projectedRHI) }}>
                  {simulation.projectedRHI}
                </div>
                <div className="sim-result-unit">Original: {road.current_rhi}</div>
              </div>

              <div className="sim-result-card">
                <div className="sim-result-label">Failure Probability</div>
                <div className="sim-result-value" style={{ color: simulation.failureProbability > 50 ? 'var(--status-critical)' : 'var(--status-fair)' }}>
                  {simulation.failureProbability}%
                </div>
                <div className="sim-result-unit">Collapse risk</div>
              </div>

              <div className="sim-result-card">
                <div className="sim-result-label">Cost Today vs Delayed</div>
                <div className="sim-result-value">
                  ₹{simulation.costNowLakh.toFixed(1)}L 
                  <span style={{ fontSize: 14, color: 'var(--status-critical)' }}> &rarr; ₹{simulation.costDelayedLakh.toFixed(1)}L</span>
                </div>
                <div className="sim-result-unit">Estimated outlay</div>
              </div>

              <div className="sim-result-card">
                <div className="sim-result-label">Avoided Cost If Repaired Now</div>
                <div className="sim-result-value" style={{ color: 'var(--status-good)' }}>
                  ₹{simulation.avoidedCostLakh.toFixed(1)}L
                </div>
                <div className="sim-result-unit">Savings / Escalation avoided</div>
              </div>
            </div>
          </div>

          {/* Section 6: Recommended Treatment Sanction Plan */}
          <div style={{
            marginTop: 20,
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 20,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16
          }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Recommended Engineering Intervention
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{road.recommended_treatment.name}</span>
                <span className="badge good">+{road.recommended_treatment.rhiImprovement} RHI Boost</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>
                Estimated Outlay: <strong style={{ color: 'var(--text-primary)' }}>₹{road.estimated_cost_lakh.toFixed(1)} Lakh</strong> &bull; 
                Design Life: <strong>{road.recommended_treatment.lifespanYears} Years</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  window.print();
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <Printer size={14} />
                <span>Export Dossier (Print)</span>
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  alert(`Administrative Approval for ${road.segment_id} (${road.road_name}) drafted for Sanction under ₹${road.estimated_cost_lakh.toFixed(1)}L.`);
                  onClose();
                }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <CheckCircle2 size={14} />
                <span>Draft Work Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
