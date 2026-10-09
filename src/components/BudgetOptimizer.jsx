import { useState, useMemo } from 'react';
import { optimizeBudget } from '../engines/prioritizationEngine.js';
import { getConditionColor, getConditionLabel, getWorkCategory } from '../data/roadData.js';
import {
  Scale,
  ShieldAlert,
  Compass,
  TrendingUp,
  Printer,
  Download,
  CheckCircle2,
  AlertTriangle,
  Layers,
  FileCheck2,
  Calendar,
  Building,
  ArrowRight
} from 'lucide-react';

export default function BudgetOptimizer({ rankedRoads, isMonsoon, onSelectRoad, onNavigateTab }) {
  const [budgetCr, setBudgetCr] = useState(15.0);
  const [strategy, setStrategy] = useState('balanced');

  const budgetLakh = useMemo(() => budgetCr * 100, [budgetCr]);

  const optimization = useMemo(() => {
    return optimizeBudget(rankedRoads, budgetLakh, strategy);
  }, [rankedRoads, budgetLakh, strategy]);

  // Breakdown by 3-Tier Framework (Critical / Needed / Desirable)
  const tierBreakdown = useMemo(() => {
    const counts = { critical: 0, needed: 0, desirable: 0 };
    const costs = { critical: 0, needed: 0, desirable: 0 };

    optimization.selected.forEach(r => {
      const tier = getWorkCategory(r.current_rhi, isMonsoon, r.is_single_access_lifeline);
      counts[tier.id] = (counts[tier.id] || 0) + 1;
      costs[tier.id] = (costs[tier.id] || 0) + r.estimated_cost_lakh;
    });

    return { counts, costs };
  }, [optimization.selected, isMonsoon]);

  const handlePrintSanction = () => {
    window.print();
  };

  const handleExportCSV = () => {
    const headers = ["Priority_Rank", "Segment_ID", "Road_Name", "Road_Code", "District", "RHI", "Length_KM", "Estimated_Cost_Lakh", "Framework_Tier"];
    const rows = optimization.selected.map(r => {
      const tier = getWorkCategory(r.current_rhi, isMonsoon, r.is_single_access_lifeline);
      return [
        r.priority_rank,
        r.segment_id,
        `"${r.road_name}"`,
        r.road_code,
        r.district,
        r.current_rhi,
        r.length_km,
        r.estimated_cost_lakh.toFixed(1),
        `"${tier.title}"`
      ];
    });
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `PWD_Manipur_Sanction_Schedule_FY2026_${budgetCr}Cr.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* 1. STEP 3 GUIDANCE BANNER */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderLeft: '5px solid #15803d',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#15803d', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
              STEP 3 OF 4: FISCAL DECISION INTELLIGENCE
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0b3c5d', marginTop: '2px' }}>
              Smart Budget Allocator (GFR-2017 Rule 144)
            </h2>
            <p style={{ fontSize: '13px', color: '#334155', maxWidth: '900px', marginTop: '4px', lineHeight: 1.5 }}>
              The state cannot afford to repair all 60 roads at once (Total needed: ₹38.0 Cr). With a fixed budget envelope (e.g. ₹15.0 Cr), RoadRank automatically picks the exact combination of roads that <strong>protects the most citizens</strong> and <strong>saves ₹11.2 Cr in future reconstruction costs</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="btn btn-primary"
              onClick={() => onNavigateTab && onNavigateTab('audit')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', fontSize: '12.5px' }}
            >
              <span>Next: Sanctions &amp; Audit (Step 4)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Top Controls */}
      <div className="panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <FileCheck2 size={18} style={{ color: '#b45309' }} />
              State Capital Budget Envelope &amp; Optimization Policy
            </h3>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
              Adjust the slider or pick a statutory policy to see which roads are approved vs deferred in real time.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="btn btn-secondary"
              onClick={handleExportCSV}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '7px 14px' }}
              title="Download CSV allocation schedule"
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>
            <button
              className="btn btn-primary"
              onClick={handlePrintSanction}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '7px 14px' }}
              title="Print official Administrative Approval sanction schedule"
            >
              <Printer size={14} />
              <span>Print Sanction Memo</span>
            </button>
          </div>
        </div>

        <div className="budget-controls">
          <div className="budget-slider-wrap">
            <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Available Capital Budget Envelope (FY 2026-27 Allocation)
            </label>
            <div className="budget-amount">
              ₹{budgetCr.toFixed(1)} <span style={{ fontSize: 14, color: '#94a3b8' }}>Crore (₹{budgetLakh.toLocaleString()} Lakh)</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="0.5"
              value={budgetCr}
              onChange={(e) => setBudgetCr(parseFloat(e.target.value))}
              className="sim-slider"
            />
            <div className="sim-markers">
              <span>₹2 Cr (Triage Only)</span>
              <span>₹15 Cr (Standard Plan)</span>
              <span>₹30 Cr (Comprehensive)</span>
              <span>₹50 Cr (State Modernization)</span>
            </div>
          </div>

          <div style={{ minWidth: 280 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Statutory Optimization Policy
            </label>
            <div className="strategy-btns">
              <button
                className={`strategy-btn ${strategy === 'balanced' ? 'active' : ''}`}
                onClick={() => setStrategy('balanced')}
                title="AHP multi-criteria balanced matrix weights"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <Scale size={13} />
                <span>AHP Balanced</span>
              </button>
              <button
                className={`strategy-btn ${strategy === 'safety' ? 'active' : ''}`}
                onClick={() => setStrategy('safety')}
                title="Strict focus on restoring safety & severe hazards"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <ShieldAlert size={13} />
                <span>Critical Safety First</span>
              </button>
              <button
                className={`strategy-btn ${strategy === 'connectivity' ? 'active' : ''}`}
                onClick={() => setStrategy('connectivity')}
                title="Protect single-access lifelines & detours"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <Compass size={13} />
                <span>Lifeline Access</span>
              </button>
              <button
                className={`strategy-btn ${strategy === 'efficiency' ? 'active' : ''}`}
                onClick={() => setStrategy('efficiency')}
                title="Maximize avoided lifecycle cost per rupee spent"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <TrendingUp size={13} />
                <span>Cost Efficiency ROI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Impact Metric Cards */}
        <div className="budget-summary">
          <div className="budget-summary-card">
            <div className="budget-summary-label">Budget Allocated</div>
            <div className="budget-summary-value accent">
              ₹{(optimization.totalCostLakh / 100).toFixed(2)} Cr
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              {optimization.budgetUtilization}% utilized (₹{(optimization.remainingBudgetLakh / 100).toFixed(2)} Cr left)
            </div>
          </div>

          <div className="budget-summary-card">
            <div className="budget-summary-label">Funded Segments</div>
            <div className="budget-summary-value good">
              {optimization.segmentsSelected} <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>/ {rankedRoads.length}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              {optimization.skipped.length} deferred to next cycle
            </div>
          </div>

          <div className="budget-summary-card">
            <div className="budget-summary-label">Road Length Protected</div>
            <div className="budget-summary-value">
              {optimization.totalKmPreserved} km
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              {Math.round((optimization.totalKmPreserved / rankedRoads.reduce((s, r) => s + r.length_km, 0)) * 100)}% of state corridor length
            </div>
          </div>

          <div className="budget-summary-card">
            <div className="budget-summary-label">Beneficiary Population</div>
            <div className="budget-summary-value">
              {(optimization.totalPopulationProtected / 1000).toFixed(1)}k
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              {optimization.lifelinesPreserved} single-access lifelines saved
            </div>
          </div>

          <div className="budget-summary-card">
            <div className="budget-summary-label">Avoided Cost (180-Day Delay)</div>
            <div className="budget-summary-value good">
              ₹{(optimization.totalAvoidedCostLakh / 100).toFixed(2)} Cr
            </div>
            <div style={{ fontSize: 11, color: 'var(--status-good)', marginTop: 4, fontWeight: 700 }}>
              Public ROI Multiplier: {optimization.roi}x
            </div>
          </div>
        </div>

        {/* 3-Tier PWD Framework Alignment Banner */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '14px 18px',
          marginTop: 12
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0b3c5d', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Layers size={15} style={{ color: '#b45309' }} />
            <span>3-TIER PWD WORK ALLOCATION BREAKDOWN (IRC:82-2023 FRAMEWORK ALIGNMENT)</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--status-critical)', fontWeight: 800, fontSize: 13 }}>① Critical Work</span>
                <span className="badge critical">{tierBreakdown.counts.critical || 0} segments</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '4px 0' }}>Urgent repairs &amp; safety restoration</div>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#ef4444' }}>
                ₹{((tierBreakdown.costs.critical || 0) / 100).toFixed(2)} Cr
              </div>
            </div>

            <div style={{ background: 'rgba(234, 179, 8, 0.08)', border: '1px solid rgba(234, 179, 8, 0.3)', borderRadius: 'var(--radius-sm)', padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--status-fair)', fontWeight: 800, fontSize: 13 }}>② Needed Work</span>
                <span className="badge fair">{tierBreakdown.counts.needed || 0} segments</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '4px 0' }}>Proactive fixes to stop short-term decay</div>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#eab308' }}>
                ₹{((tierBreakdown.costs.needed || 0) / 100).toFixed(2)} Cr
              </div>
            </div>

            <div style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: 'var(--radius-sm)', padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--status-good)', fontWeight: 800, fontSize: 13 }}>③ Desirable Work</span>
                <span className="badge good">{tierBreakdown.counts.desirable || 0} segments</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '4px 0' }}>Proactive measures to lower lifecycle cost</div>
              <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#22c55e' }}>
                ₹{((tierBreakdown.costs.desirable || 0) / 100).toFixed(2)} Cr
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Approved / Funded vs Deferred / At Risk */}
      <div className="panels-grid">
        {/* Approved Projects */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title" style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={17} style={{ color: '#22c55e' }} />
              <span>Sanctioned Repair Schedule ({optimization.selected.length})</span>
            </div>
            <span className="badge good">Administrative Approval (AA) Recommended</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 14 }}>
            Optimized within the statutory allocation envelope. Click any row to inspect digital twin parameters.
          </p>

          <div className="table-container" style={{ maxHeight: 440 }}>
            <table className="data-table">
              <colgroup>
                <col style={{ width: '55px' }} />
                <col style={{ minWidth: '200px' }} />
                <col style={{ width: '95px' }} />
                <col style={{ width: '155px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '100px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>Rank</th>
                  <th>Road Corridor</th>
                  <th style={{ textAlign: 'center' }}>RHI</th>
                  <th>Recommended Treatment</th>
                  <th style={{ textAlign: 'right' }}>Length</th>
                  <th style={{ textAlign: 'right' }}>Sanction (₹L)</th>
                  <th style={{ textAlign: 'center' }}>Statutory Priority Tier</th>
                </tr>
              </thead>
              <tbody>
                {optimization.selected.map((road) => {
                  const condColor = getConditionColor(road.current_rhi);
                  const tier = getWorkCategory(road.current_rhi, isMonsoon, road.is_single_access_lifeline);
                  return (
                    <tr key={road.segment_id} onClick={() => onSelectRoad(road)}>
                      <td style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                          #{road.priority_rank}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '12.5px', lineHeight: 1.3 }}>{road.road_name}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', marginTop: 2 }}>
                          {road.road_code} &bull; {road.district}
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`badge ${getConditionLabel(road.current_rhi).toLowerCase()}`} style={{ whiteSpace: 'nowrap', fontWeight: 800 }}>
                          {road.current_rhi} ({getConditionLabel(road.current_rhi)})
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>
                          {road.recommended_treatment.name}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#475569' }}>
                        {road.length_km} km
                      </td>
                      <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '12.5px', color: '#0f172a' }}>
                        ₹{road.estimated_cost_lakh.toFixed(1)}L
                      </td>
                      <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: 4,
                          background: tier.bg,
                          color: tier.color,
                          border: `1px solid ${tier.border}`,
                          display: 'inline-block',
                          whiteSpace: 'nowrap'
                        }}>
                          {tier.num} {tier.title}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deferred Projects */}
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title" style={{ color: '#b45309', display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertTriangle size={17} style={{ color: '#b45309' }} />
              <span>Deferred Maintenance Backlog ({optimization.skipped.length})</span>
            </div>
            <span className="badge fair">Requires Supplementary Grant</span>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 14 }}>
            Corridors excluded due to fiscal cap. PWD engineers should monitor for accelerated monsoon structural degradation.
          </p>

          <div className="table-container" style={{ maxHeight: 440 }}>
            <table className="data-table">
              <colgroup>
                <col style={{ width: '55px' }} />
                <col style={{ minWidth: '220px' }} />
                <col style={{ width: '95px' }} />
                <col style={{ width: '110px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>Rank</th>
                  <th>Road Corridor</th>
                  <th style={{ textAlign: 'center' }}>RHI</th>
                  <th style={{ textAlign: 'right' }}>Shortfall (₹L)</th>
                  <th style={{ textAlign: 'right' }}>180d Escalation Risk</th>
                </tr>
              </thead>
              <tbody>
                {optimization.skipped.map((road) => {
                  const condColor = getConditionColor(road.current_rhi);
                  return (
                    <tr key={road.segment_id} onClick={() => onSelectRoad(road)}>
                      <td style={{ textAlign: 'center' }}>
                        <span style={{ fontWeight: 800, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                          #{road.priority_rank}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '12.5px', lineHeight: 1.3 }}>{road.road_name}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', marginTop: 2 }}>
                          {road.road_code} &bull; {road.district}
                        </div>
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span className={`badge ${getConditionLabel(road.current_rhi).toLowerCase()}`} style={{ whiteSpace: 'nowrap', fontWeight: 800 }}>
                          {road.current_rhi} ({getConditionLabel(road.current_rhi)})
                        </span>
                      </td>
                      <td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ef4444', fontSize: '12.5px' }}>
                        ₹{road.estimated_cost_lakh.toFixed(1)}L
                      </td>
                      <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                        <span style={{ color: '#c2410c', fontSize: '11.5px', fontWeight: 700 }}>
                          +{Math.round(road.estimated_cost_lakh * 0.45)}L (+45%)
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM STEP 4 TRANSITION BANNER */}
      <div style={{
        background: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
      }}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0b3c5d' }}>
            Step 3 Complete: Budget Envelope Allocated ({optimization.segmentsSelected} Roads Funded)
          </div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: 2 }}>
            Now, formalize administrative approvals, generate the official PWD Sanction Memo, and inspect the CAG audit log.
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => onNavigateTab && onNavigateTab('audit')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', fontSize: '13px', fontWeight: 700 }}
        >
          <span>Proceed to Step 4: Sanctions &amp; Audit Trail</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
