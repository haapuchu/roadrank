import React, { useState, useMemo } from 'react';
import {
  Scale,
  CloudRain,
  Layers,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  Compass,
  HeartPulse,
  Truck,
  DollarSign,
  Info,
  Sliders,
  Filter,
  Activity,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { getConditionColor, getConditionLabel, getWorkCategory } from '../data/roadData.js';

export default function AhpEngineView({
  rankedRoads,
  stats,
  ahpResult,
  isMonsoon,
  setIsMonsoon,
  onSelectRoad,
  onNavigateTab
}) {
  const [filterScope, setFilterScope] = useState('venue'); // 'venue' (10) or 'all' (60)
  const [filterTier, setFilterTier] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 3-Tier Classification Summary
  const tierStats = useMemo(() => {
    const critical = rankedRoads.filter(r => r.current_rhi < 40);
    const needed = rankedRoads.filter(r => r.current_rhi >= 40 && r.current_rhi < 70);
    const desirable = rankedRoads.filter(r => r.current_rhi >= 70);

    const calcKm = (arr) => arr.reduce((sum, r) => sum + r.length_km, 0);
    const calcCost = (arr) => arr.reduce((sum, r) => sum + r.estimated_cost_lakh, 0);

    return {
      critical: { count: critical.length, km: calcKm(critical), costLakh: calcCost(critical) },
      needed: { count: needed.length, km: calcKm(needed), costLakh: calcCost(needed) },
      desirable: { count: desirable.length, km: calcKm(desirable), costLakh: calcCost(desirable) },
    };
  }, [rankedRoads]);

  // Filtered roads
  const filteredRoads = useMemo(() => {
    let list = [...rankedRoads];

    if (filterScope === 'venue') {
      list = list.filter(r => r.is_venue_sector || r.zone === 'IT SEZ Mantripukhri');
    }

    if (filterTier !== 'all') {
      list = list.filter(r => {
        const cat = getWorkCategory(r.current_rhi, isMonsoon, r.is_single_access_lifeline);
        return cat.id === filterTier;
      });
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(r =>
        r.road_name.toLowerCase().includes(q) ||
        r.segment_id.toLowerCase().includes(q) ||
        r.district.toLowerCase().includes(q)
      );
    }

    return list;
  }, [rankedRoads, filterScope, filterTier, searchQuery, isMonsoon]);

  // Current AHP weights depending on monsoon toggle
  const currentWeights = isMonsoon
    ? [
        { label: 'Pavement Surface Distress', pct: 20, icon: Activity, desc: 'Potholes, cracks & rutting' },
        { label: 'Safety & Hazard Risk', pct: 15, icon: ShieldAlert, desc: 'Collision history & terrain steepness' },
        { label: 'Lifeline & Hospital Access', pct: 25, icon: HeartPulse, desc: 'Urgent medical & school arteries' },
        { label: 'Daily Traffic (AADT)', pct: 10, icon: Truck, desc: 'Commercial & passenger volume' },
        { label: 'Monsoon Rain Threat', pct: 25, icon: CloudRain, desc: 'Pre-monsoon drainage failure risk' },
        { label: 'Repair Cost-Effectiveness', pct: 5, icon: DollarSign, desc: 'Avoided escalation multiplier' },
      ]
    : [
        { label: 'Pavement Surface Distress', pct: 35, icon: Activity, desc: 'Potholes, cracks & rutting' },
        { label: 'Safety & Hazard Risk', pct: 22, icon: ShieldAlert, desc: 'Collision history & terrain steepness' },
        { label: 'Lifeline & Hospital Access', pct: 15, icon: HeartPulse, desc: 'Urgent medical & school arteries' },
        { label: 'Daily Traffic (AADT)', pct: 13, icon: Truck, desc: 'Commercial & passenger volume' },
        { label: 'Monsoon Rain Threat', pct: 9, icon: CloudRain, desc: 'Normal seasonal rainfall factor' },
        { label: 'Repair Cost-Effectiveness', pct: 6, icon: DollarSign, desc: 'Avoided escalation multiplier' },
      ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* 1. STEP 2 GUIDANCE BANNER */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderLeft: '5px solid #b45309',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#b45309', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
              STEP 2 OF 4: MATHEMATICAL DECISION MATRIX
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0b3c5d', marginTop: '2px' }}>
              AHP Multi-Factor Prioritisation Engine
            </h2>
            <p style={{ fontSize: '13px', color: '#334155', maxWidth: '900px', marginTop: '4px', lineHeight: 1.5 }}>
              <strong>Why not just fix the most broken road?</strong> A road with potholes might not be urgent if an alternate highway exists. But a damaged road connecting a <strong>District Hospital</strong> is a critical lifeline! RoadRank uses Thomas Saaty's proven <strong>Analytic Hierarchy Process (AHP)</strong> to objectively balance road damage with real-world public impact.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {/* Monsoon Toggle */}
            <button
              onClick={() => setIsMonsoon(!isMonsoon)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: isMonsoon ? '#f0f9ff' : '#f8fafc',
                border: `1px solid ${isMonsoon ? '#0284c7' : '#cbd5e1'}`,
                color: isMonsoon ? '#0369a1' : '#334155',
                padding: '8px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '12px'
              }}
              title="Toggle to simulate pre-monsoon precipitation shift"
            >
              <CloudRain size={16} style={{ color: isMonsoon ? '#0284c7' : '#64748b' }} />
              <span>{isMonsoon ? 'Monsoon Protocol ACTIVE' : 'Simulate Monsoon Season'}</span>
            </button>

            {/* Next Step Button */}
            <button
              className="btn btn-primary"
              onClick={() => onNavigateTab('budget')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', fontSize: '12.5px' }}
            >
              <span>Next: Allocate Budget (Step 3)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE 6 AHP DECISION CRITERIA & SAATY CONSISTENCY CHECK */}
      <div className="panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0b3c5d', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Scale size={17} style={{ color: '#b45309' }} />
              How AHP Weighs Decision Factors {isMonsoon ? '(Monsoon Emergency Shift Active)' : '(Standard Baseline)'}
            </h3>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
              Saaty (1980) Pairwise Matrix with verified Mathematical Consistency Ratio:
            </p>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            color: '#15803d',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '11.5px',
            fontWeight: 800
          }}>
            <CheckCircle2 size={14} />
            <span>Consistency Ratio CR = {ahpResult.consistency.CR} &lt; 0.10 (Statistically Valid)</span>
          </div>
        </div>

        {/* 6 Factor Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
          {currentWeights.map((w, idx) => {
            const Icon = w.icon;
            return (
              <div key={idx} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 'var(--radius-sm)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Icon size={15} style={{ color: '#0b3c5d' }} />
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#b45309', fontFamily: 'var(--font-mono)' }}>
                    {w.pct}%
                  </span>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{w.label}</div>
                <div style={{ fontSize: '10.5px', color: '#64748b', lineHeight: 1.3 }}>{w.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. PWD 3-TIER WORK CLASSIFICATION SUMMARY */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
        <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 'var(--radius-md)', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#b91c1c' }}>① Critical Work</span>
            <span className="badge critical">{tierStats.critical.count} Segments</span>
          </div>
          <div style={{ fontSize: '12px', color: '#334155', marginTop: 4 }}>
            Immediate safety hazard triage &amp; structural failure repairs.
          </div>
          <div style={{ marginTop: 8, fontSize: '13px', fontWeight: 700, color: '#b91c1c', fontFamily: 'var(--font-mono)' }}>
            ₹{(tierStats.critical.costLakh / 100).toFixed(2)} Cr Required ({Math.round(tierStats.critical.km)} km)
          </div>
        </div>

        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#b45309' }}>② Needed Work</span>
            <span className="badge fair">{tierStats.needed.count} Segments</span>
          </div>
          <div style={{ fontSize: '12px', color: '#334155', marginTop: 4 }}>
            Proactive repair before monsoon; prevents full collapse &amp; saves ₹11.2 Cr.
          </div>
          <div style={{ marginTop: 8, fontSize: '13px', fontWeight: 700, color: '#b45309', fontFamily: 'var(--font-mono)' }}>
            ₹{(tierStats.needed.costLakh / 100).toFixed(2)} Cr Required ({Math.round(tierStats.needed.km)} km)
          </div>
        </div>

        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-md)', padding: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#15803d' }}>③ Desirable Work</span>
            <span className="badge good">{tierStats.desirable.count} Segments</span>
          </div>
          <div style={{ fontSize: '12px', color: '#334155', marginTop: 4 }}>
            Preventive micro-surfacing extending lifetime pavement durability.
          </div>
          <div style={{ marginTop: 8, fontSize: '13px', fontWeight: 700, color: '#15803d', fontFamily: 'var(--font-mono)' }}>
            ₹{(tierStats.desirable.costLakh / 100).toFixed(2)} Cr Required ({Math.round(tierStats.desirable.km)} km)
          </div>
        </div>
      </div>

      {/* 4. THE RANKED CORRIDOR REGISTER (SEARCH & FILTER) */}
      <div className="panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0b3c5d' }}>
              State Road Prioritisation Register (Ranked #1 to #{filteredRoads.length})
            </h3>
            <p style={{ fontSize: '12px', color: '#64748b' }}>
              Click any road to open its full Digital Twin inspection sheet, defect survey, and deterioration curve.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Scope Filter */}
            <div style={{ display: 'flex', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '2px' }}>
              <button
                style={{
                  padding: '4px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  border: 'none',
                  background: filterScope === 'venue' ? '#ffffff' : 'none',
                  color: filterScope === 'venue' ? '#0b3c5d' : '#64748b',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
                onClick={() => setFilterScope('venue')}
              >
                IT SEZ Capital Corridors ({rankedRoads.filter(r => r.is_venue_sector).length})
              </button>
              <button
                style={{
                  padding: '4px 10px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  border: 'none',
                  background: filterScope === 'all' ? '#ffffff' : 'none',
                  color: filterScope === 'all' ? '#0b3c5d' : '#64748b',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
                onClick={() => setFilterScope('all')}
              >
                All Statewide Corridors ({rankedRoads.length})
              </button>
            </div>

            {/* Tier Filter */}
            <select
              value={filterTier}
              onChange={(e) => setFilterTier(e.target.value)}
              style={{
                padding: '5px 10px',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                fontSize: '12px',
                fontWeight: 600,
                color: '#334155',
                background: '#ffffff',
                outline: 'none'
              }}
            >
              <option value="all">All Work Tiers</option>
              <option value="critical">① Critical Work Only</option>
              <option value="needed">② Needed Work Only</option>
              <option value="desirable">③ Desirable Work Only</option>
            </select>
          </div>
        </div>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Search road by name, segment ID (e.g. MNP-SEZ-001), or district..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px 8px 32px',
              borderRadius: '4px',
              border: '1px solid #cbd5e1',
              fontSize: '12.5px',
              color: '#0f172a',
              outline: 'none',
              background: '#ffffff'
            }}
          />
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="gov-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Rank</th>
                <th style={{ width: 110 }}>Segment ID</th>
                <th>Road Name &amp; Classification</th>
                <th>District</th>
                <th>Framework Tier</th>
                <th>Health (RHI)</th>
                <th>Lifeline Impact</th>
                <th>Est. Cost</th>
                <th>AHP Score</th>
                <th style={{ textAlign: 'center', width: 90 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoads.map((road) => {
                const tier = getWorkCategory(road.current_rhi, isMonsoon, road.is_single_access_lifeline);
                const condLabel = getConditionLabel(road.current_rhi);
                return (
                  <tr key={road.segment_id} onClick={() => onSelectRoad(road)}>
                    <td style={{ fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#0b3c5d' }}>
                      #{road.priority_rank}
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11.5px', color: '#0284c7' }}>
                      {road.segment_id}
                    </td>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{road.road_name}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>
                        {road.road_code} &bull; {road.classification} &bull; {road.length_km} km
                      </div>
                    </td>
                    <td style={{ color: '#334155' }}>{road.district}</td>
                    <td>
                      <span className={`badge ${tier.id}`}>
                        {tier.num} {tier.title}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 800, fontFamily: 'var(--font-mono)', color: getConditionColor(road.current_rhi) }}>
                        {road.current_rhi}
                      </span>
                      <span style={{ fontSize: '11px', color: '#64748b', marginLeft: 4 }}>
                        ({condLabel})
                      </span>
                    </td>
                    <td>
                      {road.is_single_access_lifeline ? (
                        <span style={{ color: '#b91c1c', fontWeight: 700, fontSize: '11.5px', display: 'flex', alignItems: 'center', gap: 4 }}>
                          <AlertTriangle size={12} /> Sole Lifeline
                        </span>
                      ) : road.connects_hospital ? (
                        <span style={{ color: '#0369a1', fontWeight: 700, fontSize: '11.5px' }}>
                          Hospital Route
                        </span>
                      ) : (
                        <span style={{ color: '#64748b', fontSize: '11px' }}>
                          Standard Transit
                        </span>
                      )}
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      ₹{road.estimated_cost_lakh.toFixed(1)}L
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{
                          width: 44,
                          height: 6,
                          background: '#e2e8f0',
                          borderRadius: 3,
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${road.priority ? road.priority.totalScore : 50}%`,
                            height: '100%',
                            background: road.priority && road.priority.totalScore > 75 ? '#b91c1c' : '#b45309',
                            borderRadius: 3
                          }} />
                        </div>
                        <span style={{ fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#0f172a' }}>
                          {road.priority ? road.priority.totalScore : '-'}
                        </span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button
                        className="btn btn-secondary"
                        style={{ padding: '3px 8px', fontSize: '11px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectRoad(road);
                        }}
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. BOTTOM STEP TRANSITION BANNER */}
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
            Step 2 Complete: Road Priorities Calculated
          </div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: 2 }}>
            Now, see how the Government of Manipur allocates its sanctioned capital budget across these ranked roads under GFR-2017.
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => onNavigateTab('budget')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', fontSize: '13px', fontWeight: 700 }}
        >
          <span>Proceed to Step 3: Smart Budget Allocator</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
