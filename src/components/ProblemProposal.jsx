import React from 'react';
import {
  Shield,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
  MapPin,
  Cpu,
  AlertTriangle,
  Layers,
  Target,
  Scale,
  Landmark,
  ExternalLink,
  Compass,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  AlertOctagon
} from 'lucide-react';

export function ProblemProposal({ onNavigateTab }) {
  return (
    <div className="gov-proposal-container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      
      {/* 1. EXECUTIVE PITCH BANNER */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderTop: '5px solid #0b3c5d',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 32px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#fffbeb',
            border: '1px solid #fde68a',
            color: '#b45309',
            padding: '3px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 800
          }}>
            <Award size={13} />
            NATIONAL INNOVATION CHALLENGE ON AI & DIGITAL GOVERNANCE – MANIPUR
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#f0f9ff',
            border: '1px solid #bae6fd',
            color: '#0369a1',
            padding: '3px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700
          }}>
            <Target size={13} />
            FOCUS PROBLEM: PWD-03 (GOVERNMENT-SIDE)
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            color: '#15803d',
            padding: '3px 10px',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700
          }}>
            <Shield size={13} />
            GFR-2017 & IRC:82 COMPLIANT
          </span>
        </div>

        <h1 style={{
          fontSize: '26px',
          fontWeight: 800,
          color: '#0b3c5d',
          lineHeight: 1.3,
          marginBottom: '10px'
        }}>
          AI-Based Road Inspection & Maintenance Prioritisation (RoadRank)
        </h1>

        <p style={{
          fontSize: '14.5px',
          color: '#334155',
          lineHeight: 1.6,
          maxWidth: '1080px',
          marginBottom: '20px'
        }}>
          A practical Decision Support System built for the <strong>Public Works Department (PWD), Government of Manipur</strong> with the <strong>Department of Information Technology (DIT)</strong>. It helps government engineers make fair, data-backed decisions on which roads to repair first, prevents expensive road collapses, and ensures every rupee of the state budget is spent with 100% public accountability.
        </p>

        {/* 4 Core Impact Numbers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          paddingTop: '18px',
          borderTop: '1px solid #e2e8f0'
        }}>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '14px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#b45309', fontFamily: 'var(--font-mono)' }}>10 Venue Roads</div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>Real GIS Mapping</div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Traced around IT SEZ Mantripukhri</div>
          </div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '14px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#15803d', fontFamily: 'var(--font-mono)' }}>₹11.20 Cr Saved</div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>Avoided Reconstructions</div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Fixing roads before full collapse</div>
          </div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '14px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#0284c7', fontFamily: 'var(--font-mono)' }}>CR = 0.041 &lt; 0.10</div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>AHP Mathematical Rigour</div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Saaty (1980) verified consistency</div>
          </div>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '14px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#7c3aed', fontFamily: 'var(--font-mono)' }}>100% GFR-2017</div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>Audit Ready</div>
            <div style={{ fontSize: '11.5px', color: '#64748b' }}>Every allocation logged for CAG review</div>
          </div>
        </div>
      </div>

      {/* 2. SIDE-BY-SIDE: THE PROBLEM VS OUR SOLUTION */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0b3c5d', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Scale size={18} style={{ color: '#b45309' }} />
          The Core PWD Dilemma: Why Conventional Road Maintenance Fails
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
          {/* Left: Current Problem */}
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fca5a5',
            borderRadius: 'var(--radius-md)',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertTriangle size={18} style={{ color: '#b91c1c' }} />
              <h3 style={{ fontSize: '14.5px', fontWeight: 800, color: '#991b1b' }}>
                CURRENT REALITY: "WORST-FIRST" REPAIRS
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '12.5px', color: '#334155' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#b91c1c', fontWeight: 800 }}>✗</span>
                <span><strong>Waiting for Total Collapse:</strong> PWD only allocates budget when a road breaks down completely. Full reconstruction costs ₹80–120 Lakh/km.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#b91c1c', fontWeight: 800 }}>✗</span>
                <span><strong>Subjective &amp; Political Bias:</strong> Repair requests are prioritized based on complaints rather than traffic, hospital routes, or public necessity.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#b91c1c', fontWeight: 800 }}>✗</span>
                <span><strong>Monsoon Disaster Isolation:</strong> When heavy rains hit Manipur, hill roads with poor drainage fail without warning, cutting off hospitals and schools.</span>
              </li>
            </ul>
          </div>

          {/* Right: RoadRank Solution */}
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #86efac',
            borderRadius: 'var(--radius-md)',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={18} style={{ color: '#15803d' }} />
              <h3 style={{ fontSize: '14.5px', fontWeight: 800, color: '#166534' }}>
                ROADRANK SOLUTION: MULTI-CRITERIA DECISION INTELLIGENCE
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '12.5px', color: '#334155' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span>
                <span><strong>Proactive 3-Tier Classification:</strong> Saves ₹11.2 Cr by fixing "Needed Work" roads early (₹15–25L/km) before they degrade into multi-crore rebuilds.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span>
                <span><strong>Mathematical AHP Prioritisation:</strong> Balances road surface damage with hospital transit, daily traffic, school access, and detours (CR &lt; 0.10).</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ color: '#15803d', fontWeight: 800 }}>✓</span>
                <span><strong>Dynamic Monsoon Preparedness:</strong> 1-click weather switch elevates drainage risks and lifeline hill corridors ahead of seasonal rains.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. THE 4-STEP WALKTHROUGH PIPELINE (INTENTIONAL GUIDED ACTIONS) */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0b3c5d', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Layers size={18} style={{ color: '#0284c7' }} />
            How RoadRank Works: The 4-Step Decision Pipeline
          </h2>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: 2 }}>
            Judges can test each step in order or jump directly to any stage below:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {/* Step 1 Card */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderTop: '3px solid #0284c7',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  STEP 1
                </span>
                <span className="badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>GIS Verified</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
                Map &amp; Road Survey
              </h3>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, marginBottom: 14 }}>
                Explore 10 real road corridors around IT SEZ Mantripukhri mapped onto real Google Maps. View road damage, potholes, and cracks with traffic-light color coding.
              </p>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '12px', padding: '8px 12px', display: 'flex', justifyContent: 'center', gap: 6 }}
              onClick={() => onNavigateTab('map')}
            >
              <span>Explore Step 1: Map</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Step 2 Card */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderTop: '3px solid #b45309',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  STEP 2
                </span>
                <span className="badge" style={{ background: '#fef3c7', color: '#b45309' }}>AHP Algorithm</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
                AHP Prioritisation Engine
              </h3>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, marginBottom: 14 }}>
                See how Saaty's proven AHP algorithm ranks roads from #1 to #60. Balances structural distress against traffic, hospital access, single-access lifelines, and rainfall.
              </p>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '12px', padding: '8px 12px', display: 'flex', justifyContent: 'center', gap: 6 }}
              onClick={() => onNavigateTab('prioritisation')}
            >
              <span>Explore Step 2: AHP</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Step 3 Card */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderTop: '3px solid #15803d',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  STEP 3
                </span>
                <span className="badge" style={{ background: '#dcfce7', color: '#15803d' }}>GFR-2017 Rule 144</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
                Smart Budget Allocator
              </h3>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, marginBottom: 14 }}>
                Move the budget slider (e.g. ₹15 Cr) and watch RoadRank automatically select the optimal mix of roads to fund, maximizing public safety and preventing costly damage.
              </p>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '12px', padding: '8px 12px', display: 'flex', justifyContent: 'center', gap: 6 }}
              onClick={() => onNavigateTab('budget')}
            >
              <span>Explore Step 3: Budget</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Step 4 Card */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderTop: '3px solid #7c3aed',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  STEP 4
                </span>
                <span className="badge" style={{ background: '#f5f3ff', color: '#7c3aed' }}>CAG Ready</span>
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
                Work Orders &amp; Audit Trail
              </h3>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, marginBottom: 14 }}>
                Print an authentic Administrative Approval (AA) Sanction Memo with 1 click. Every prioritization decision and engineer override is logged for CAG transparency.
              </p>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '12px', padding: '8px 12px', display: 'flex', justifyContent: 'center', gap: 6 }}
              onClick={() => onNavigateTab('audit')}
            >
              <span>Explore Step 4: Audit</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. THE 3 CORE PILLARS OF ROADRANK GOVTECH ARCHITECTURE */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: 'var(--radius-lg)',
        padding: '24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0b3c5d', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Landmark size={18} style={{ color: '#0b3c5d' }} />
          Institutional Mandate: The 3 Core Pillars of RoadRank Architecture
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 14 }}>
          <div style={{ background: '#f8fafc', border: '1px solid #bae6fd', borderRadius: 'var(--radius-md)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#0369a1' }}>1. TECHNICAL TRUST</span>
              <span className="badge" style={{ background: '#e0f2fe', color: '#0369a1' }}>35% Weight</span>
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
              Deterministic, scientifically validated algorithms. Analytic Hierarchy Process (AHP) with mathematical consistency check (CR = 0.041), real OpenStreetMap road vectors, and non-linear deterioration curves. Zero black-box guesswork.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#b45309' }}>2. GOVERNMENT RELEVANCE</span>
              <span className="badge" style={{ background: '#fef3c7', color: '#b45309' }}>30% Weight</span>
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
              Built specifically around Manipur's reality: single-access hill lifelines, monsoon flood damage, and PWD's official 3-Tier Classification framework (Critical, Needed, Desirable). Solves exact pain points of Executive Engineers.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #ddd6fe', borderRadius: 'var(--radius-md)', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#7c3aed' }}>3. INDUSTRY SCALABILITY</span>
              <span className="badge" style={{ background: '#f5f3ff', color: '#7c3aed' }}>35% Weight</span>
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
              Enterprise GovTech ready for statewide rollout across all 16 districts. Complies with General Financial Rules (GFR-2017), generates standard Work Order memos, and integrates with PMGSY / MoRTH workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
