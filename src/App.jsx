import { useState, useMemo, useCallback, useEffect } from 'react';
import { ROAD_SEGMENTS, AHP_CRITERIA } from './data/roadData.js';
import { rankAllRoads } from './engines/prioritizationEngine.js';
import { performAHP } from './engines/ahpEngine.js';
import { ProblemProposal } from './components/ProblemProposal.jsx';
import Dashboard from './components/Dashboard.jsx';
import PriorityMap from './components/PriorityMap.jsx';
import AhpEngineView from './components/AhpEngineView.jsx';
import RoadIntelligence from './components/RoadIntelligence.jsx';
import BudgetOptimizer from './components/BudgetOptimizer.jsx';
import AuditHub from './components/AuditHub.jsx';
import RoadDetailModal from './components/RoadDetailModal.jsx';
import {
  FileText,
  LayoutDashboard,
  Map,
  Layers,
  Sliders,
  ShieldCheck,
  CloudRain,
  AlertTriangle,
  ArrowRight,
  Sun,
  Moon,
  Volume2,
  Database,
  Radio,
  CheckCircle2,
  UserCheck,
  ChevronRight
} from 'lucide-react';

const TABS = [
  { id: 'overview', label: 'Problem & Solution', icon: FileText, badge: 'PWD-03' },
  { id: 'map', label: 'Step 1: GIS Map', icon: Map, badge: '10 Corridors' },
  { id: 'prioritisation', label: 'Step 2: AHP Prioritisation', icon: Sliders, badge: 'CR = 0.041' },
  { id: 'budget', label: 'Step 3: Budget Allocator', icon: Layers, badge: 'GFR-2017' },
  { id: 'audit', label: 'Step 4: Sanctions & Audit', icon: ShieldCheck, badge: 'CAG Trail' },
  { id: 'dashboard', label: 'Analytics Dashboard', icon: LayoutDashboard },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonsoon, setIsMonsoon] = useState(false);
  const [selectedRoad, setSelectedRoad] = useState(null);
  const [auditLog, setAuditLog] = useState([]);
  const [fontSize, setFontSize] = useState('normal'); // 'small' | 'normal' | 'large'
  const [highContrast, setHighContrast] = useState(false);
  const [viewMode, setViewMode] = useState('engineering'); // 'engineering' | 'executive'

  // Apply font size and contrast to root html
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.setAttribute('data-theme', 'high-contrast');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [highContrast]);

  // Compute AHP analysis
  const ahpResult = useMemo(() => {
    return performAHP(AHP_CRITERIA.pairwiseMatrix, AHP_CRITERIA.names);
  }, []);

  // Rank all roads using prioritization engine
  const rankedRoads = useMemo(() => {
    return rankAllRoads(ROAD_SEGMENTS, isMonsoon);
  }, [isMonsoon]);

  // Network statistics
  const stats = useMemo(() => {
    const total = rankedRoads.length;
    const critical = rankedRoads.filter(r => r.current_rhi < 40).length;
    const poor = rankedRoads.filter(r => r.current_rhi >= 40 && r.current_rhi < 60).length;
    const fair = rankedRoads.filter(r => r.current_rhi >= 60 && r.current_rhi < 80).length;
    const good = rankedRoads.filter(r => r.current_rhi >= 80).length;
    const totalKm = rankedRoads.reduce((sum, r) => sum + r.length_km, 0);
    const atRiskKm = rankedRoads.filter(r => r.current_rhi < 60).reduce((sum, r) => sum + r.length_km, 0);
    const monsoonLifelines = rankedRoads.filter(r => r.is_single_access_lifeline && r.current_rhi < 60).length;
    const totalCostRequired = rankedRoads.reduce((sum, r) => sum + r.estimated_cost_lakh, 0);

    return { total, critical, poor, fair, good, totalKm, atRiskKm, monsoonLifelines, totalCostRequired };
  }, [rankedRoads]);

  const handleSelectRoad = useCallback((road) => {
    setSelectedRoad(road);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedRoad(null);
  }, []);

  const handleAddAuditLog = useCallback((entry) => {
    setAuditLog(prev => [entry, ...prev]);
  }, []);

  return (
    <div id="roadrank-app">
      {/* 0. OFFICIAL GOVERNMENT OF INDIA & MANIPUR TRICOLOR BAND */}
      <div className="gov-top-tricolor-band" />

      {/* 1. OFFICIAL GOVERNMENT UTILITY & ACCESSIBILITY STRIP (GIGW 3.0 COMPLIANT) */}
      <div className="gov-utility-strip">
        <div className="gov-utility-left">
          <span className="gov-name-en">GOVERNMENT OF MANIPUR</span>
          <span className="gov-pipe">|</span>
          <span className="gov-portal-tag">DEPARTMENT OF INFORMATION TECHNOLOGY & PUBLIC WORKS DEPARTMENT</span>
          <span className="gov-pipe">|</span>
          <span className="gov-challenge-pill" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534' }}>
            STATE HIGHWAYS &amp; MAJOR DISTRICT ROADS • DIVISION-I (IMPHAL)
          </span>
        </div>

        <div className="gov-utility-right">
          <a href="#main-content" className="gov-util-link">Skip to Main Content</a>
          <span className="gov-pipe">|</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer' }} title="Screen Reader Accessibility under GIGW 3.0 Guidelines">
            <Volume2 size={12} />
            <span>Screen Reader Access</span>
          </span>
          <span className="gov-pipe">|</span>
          
          {/* Text Resizer */}
          <div className="gov-text-resizer">
            <button
              className={`btn-resizer ${fontSize === 'small' ? 'active' : ''}`}
              title="Decrease Font Size"
              onClick={() => setFontSize('small')}
            >
              A-
            </button>
            <button
              className={`btn-resizer ${fontSize === 'normal' ? 'active' : ''}`}
              title="Standard Font Size"
              onClick={() => setFontSize('normal')}
            >
              A
            </button>
            <button
              className={`btn-resizer ${fontSize === 'large' ? 'active' : ''}`}
              title="Increase Font Size"
              onClick={() => setFontSize('large')}
            >
              A+
            </button>
          </div>

          <span className="gov-pipe">|</span>
          {/* High Contrast Mode */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            style={{
              background: highContrast ? '#f59e0b' : 'rgba(0, 0, 0, 0.06)',
              color: highContrast ? '#000000' : 'inherit',
              border: '1px solid #cbd5e1',
              borderRadius: 4,
              padding: '2px 8px',
              fontSize: 10.5,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4
            }}
            title="Toggle High Contrast Mode"
          >
            {highContrast ? <Sun size={11} /> : <Moon size={11} />}
            <span>Contrast</span>
          </button>

          <span className="gov-pipe">|</span>
          <span>Language: <strong>English</strong></span>
          <span className="gov-pipe">|</span>
          <span>Helpdesk: <strong>0385-2451199</strong></span>
          <span className="gov-pipe">|</span>
          <span className="gov-compliance-badge">IRC:82-2023 • GFR-2017</span>
        </div>
      </div>

      {/* 2. MAIN GOVERNMENT INSTITUTIONAL HEADER (CRISP WHITE NIC PORTAL STYLE) */}
      <header className="gov-main-header" id="main-content">
        <div className="gov-identity-block">
          <div className="emblem-wrapper" title="Government of Manipur Official Kangla Sha Emblem">
            <img src="/manipur_emblem.png" alt="Government of Manipur Emblem" className="emblem-img" />
          </div>
          <div className="gov-title-stack">
            <div className="gov-dept-title">GOVERNMENT OF MANIPUR</div>
            <div className="gov-subdept-title">Department of Information Technology &amp; Public Works Department</div>
            <div className="gov-portal-heading">
              <span className="gov-portal-name">ROADRANK</span>
              <span className="gov-portal-badge">State Decision Support System (SDSS)</span>
            </div>
          </div>
        </div>

        {/* Center: Official Division Mandate Plaque */}
        <div className="gov-official-plaque">
          <div className="plaque-badge">
            PUBLIC WORKS DEPARTMENT • ROADS &amp; BRIDGES DIVISION
          </div>
          <div className="plaque-title">
            State Road Network Asset Management &amp; Automated Prioritisation Portal
          </div>
          <div className="plaque-sub">
            Mandated Statutory Decision Support under IRC:82-2023 Guidelines &amp; GFR-2017 Rules
          </div>
        </div>

        {/* Right: Officer Profile & Operational Controls */}
        <div className="gov-header-actions">
          {/* Official Monsoon Protocol Switch */}
          <button
            className={`monsoon-toggle ${isMonsoon ? 'active' : ''}`}
            onClick={() => setIsMonsoon(!isMonsoon)}
            title="Toggle IRC:82 Pre-Monsoon Emergency Deterioration Protocol (+25% drainage & lifeline weighting)"
          >
            <div className="monsoon-toggle-badge">
              <CloudRain size={16} style={{ color: isMonsoon ? '#0284c7' : '#64748b' }} />
              <div className="monsoon-toggle-label">
                <span>Pre-Monsoon Protocol</span>
                <span className="monsoon-toggle-status" style={{ color: isMonsoon ? '#0284c7' : '#64748b' }}>
                  {isMonsoon ? '● ACTIVE (RAIN STRESS)' : '○ STANDARD (DRY SEASON)'}
                </span>
              </div>
            </div>
            <div className="toggle-switch" />
          </button>

          {/* PWD Division Pill */}
          <div className="gov-user-pill">
            <div className="user-avatar" title="Executive Engineer, PWD Division-I">
              EE
            </div>
            <div>
              <div className="user-role-text">Executive Engineer</div>
              <div className="user-role-div">Division-I, Imphal</div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PRIMARY GOVERNMENT NAVIGATION BAR (DEEP NAVY NIC BAR) */}
      <nav className="gov-primary-nav" aria-label="Primary Navigation">
        <div className="nav-tabs">
          {TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`nav-tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="tab-badge">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. OFFICIAL STATUTORY NOTIFICATION BULLETIN */}
      <div className="gov-notice-bulletin">
        <div className="notice-bulletin-content">
          <AlertTriangle size={15} style={{ color: '#b45309', flexShrink: 0 }} />
          <span>
            <strong>STATUTORY NOTIFICATION:</strong> Road Condition &amp; Damage Index generated under Indian Roads Congress (IRC:82-2023). 10 lifelines in Mantripukhri IT SEZ sector evaluated for maintenance prioritisation and capital fund allocation under GFR-2017 Rule 144.
          </span>
        </div>
        <button
          onClick={() => setActiveTab('prioritisation')}
          className="btn-notice-action"
        >
          <span>View Priority Queue ({stats.critical} Critical)</span>
          <ArrowRight size={12} />
        </button>
      </div>

      {/* 5. GUIDED 4-STEP DECISION INTELLIGENCE PIPELINE STEPPER */}
      <div className="gov-workflow-stepper-container">
        <div className="gov-workflow-stepper">
          <div className="stepper-label">
            <span className="stepper-badge">STATUTORY PIPELINE</span>
            <span className="stepper-sub">4-Step Decision Flow:</span>
          </div>

          <div className="stepper-steps">
            {[
              { id: 'map', num: '1', title: 'GIS Map & Survey', sub: '10 Mantripukhri Corridors' },
              { id: 'prioritisation', num: '2', title: 'AHP Prioritisation', sub: 'Saaty Multi-Criteria' },
              { id: 'budget', num: '3', title: 'Smart Budget Allocator', sub: 'GFR-2017 Optimization' },
              { id: 'audit', num: '4', title: 'Sanctions & CAG Audit', sub: 'Cryptographic Trail' }
            ].map((step, idx) => {
              const stepIds = ['map', 'prioritisation', 'budget', 'audit'];
              const currentStepIdx = stepIds.indexOf(activeTab);
              const isActive = activeTab === step.id;
              const isPast = currentStepIdx > idx;

              return (
                <button
                  key={step.id}
                  className={`stepper-step-btn ${isActive ? 'active' : ''} ${isPast ? 'completed' : ''}`}
                  onClick={() => setActiveTab(step.id)}
                  title={`Step ${step.num}: ${step.title}`}
                >
                  <span className="step-circle">{isPast ? '✓' : step.num}</span>
                  <div className="step-text">
                    <span className="step-title">{step.title}</span>
                    <span className="step-subtitle">{step.sub}</span>
                  </div>
                  {idx < 3 && <span className="step-arrow">➔</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. MAIN CONTENT AREA */}
      <main className="main-content">
        {(activeTab === 'overview' || activeTab === 'problem') && (
          <ProblemProposal
            onNavigateTab={(targetTab) => setActiveTab(targetTab)}
          />
        )}
        {activeTab === 'map' && (
          <PriorityMap
            rankedRoads={rankedRoads}
            isMonsoon={isMonsoon}
            onSelectRoad={handleSelectRoad}
            onNavigateTab={(targetTab) => setActiveTab(targetTab)}
          />
        )}
        {activeTab === 'prioritisation' && (
          <AhpEngineView
            rankedRoads={rankedRoads}
            stats={stats}
            ahpResult={ahpResult}
            isMonsoon={isMonsoon}
            setIsMonsoon={setIsMonsoon}
            onSelectRoad={handleSelectRoad}
            onNavigateTab={(targetTab) => setActiveTab(targetTab)}
          />
        )}
        {activeTab === 'budget' && (
          <BudgetOptimizer
            rankedRoads={rankedRoads}
            isMonsoon={isMonsoon}
            onSelectRoad={handleSelectRoad}
            onNavigateTab={(targetTab) => setActiveTab(targetTab)}
          />
        )}
        {activeTab === 'audit' && (
          <AuditHub
            rankedRoads={rankedRoads}
            auditLog={auditLog}
            onAddAuditLog={handleAddAuditLog}
            onSelectRoad={handleSelectRoad}
            onNavigateTab={(targetTab) => setActiveTab(targetTab)}
          />
        )}
        {activeTab === 'dashboard' && (
          <Dashboard
            rankedRoads={rankedRoads}
            stats={stats}
            ahpResult={ahpResult}
            isMonsoon={isMonsoon}
            onSelectRoad={handleSelectRoad}
          />
        )}
        {activeTab === 'intelligence' && (
          <RoadIntelligence
            rankedRoads={rankedRoads}
            onSelectRoad={handleSelectRoad}
          />
        )}
      </main>

      {/* 8. OFFICIAL GOVERNMENT COMPLIANCE FOOTER */}
      <footer className="gov-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontWeight: 700, color: '#f1f5f9' }}>Government of Manipur</span>
          <span>•</span>
          <span>Department of Information Technology (DIT)</span>
          <span>•</span>
          <span>Public Works Department (PWD)</span>
          <span>•</span>
          <span>Manipur Technology Innovation Foundation (MTIF)</span>
        </div>
        <div>
          Designed in accordance with <strong>Guidelines for Indian Government Websites (GIGW 3.0)</strong> and Indian Roads Congress <strong>(IRC:82-2015)</strong> standards.
        </div>
        <div style={{ color: '#475569', fontSize: 10, fontFamily: 'var(--font-mono)', marginTop: 2 }}>
          PORTAL VERSION: IDSS-MRIM-v2.6.4 • GFR-2017 STATUTORY COMPLIANCE SEAL • ALL DATA PROVENANCE CRYPTOGRAPHICALLY SECURED
        </div>
      </footer>

      {/* Road Detail Modal */}
      {selectedRoad && (
        <RoadDetailModal
          road={selectedRoad}
          isMonsoon={isMonsoon}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}
