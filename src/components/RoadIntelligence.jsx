import { useState, useMemo } from 'react';
import { getConditionColor, getConditionLabel, getWorkCategory } from '../data/roadData.js';
import {
  Search,
  Filter,
  Download,
  MapPin,
  Compass,
  Layers,
  ArrowUpDown
} from 'lucide-react';

export default function RoadIntelligence({ rankedRoads, onSelectRoad }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSector, setFilterSector] = useState('all');
  const [filterTier, setFilterTier] = useState('all');
  const [filterCondition, setFilterCondition] = useState('all');
  const [filterClassification, setFilterClassification] = useState('all');
  const [sortBy, setSortBy] = useState('priority');

  const filteredRoads = useMemo(() => {
    let result = [...rankedRoads];

    // Filter by Sector (Venue vs All)
    if (filterSector === 'venue') {
      result = result.filter(r => r.is_venue_sector || r.zone === 'IT SEZ Mantripukhri');
    }

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r =>
        r.road_name.toLowerCase().includes(q) ||
        r.segment_id.toLowerCase().includes(q) ||
        r.district.toLowerCase().includes(q) ||
        r.road_code.toLowerCase().includes(q)
      );
    }

    // Filter by 3-Tier Framework
    if (filterTier !== 'all') {
      result = result.filter(r => {
        const cat = getWorkCategory(r.current_rhi, false, r.is_single_access_lifeline);
        return cat.id === filterTier;
      });
    }

    // Filter by condition
    if (filterCondition !== 'all') {
      switch (filterCondition) {
        case 'critical': result = result.filter(r => r.current_rhi < 40); break;
        case 'poor': result = result.filter(r => r.current_rhi >= 40 && r.current_rhi < 60); break;
        case 'fair': result = result.filter(r => r.current_rhi >= 60 && r.current_rhi < 80); break;
        case 'good': result = result.filter(r => r.current_rhi >= 80); break;
      }
    }

    // Filter by classification
    if (filterClassification !== 'all') {
      result = result.filter(r => r.classification === filterClassification);
    }

    // Sort
    switch (sortBy) {
      case 'priority': result.sort((a, b) => a.priority_rank - b.priority_rank); break;
      case 'rhi_asc': result.sort((a, b) => a.current_rhi - b.current_rhi); break;
      case 'rhi_desc': result.sort((a, b) => b.current_rhi - a.current_rhi); break;
      case 'cost': result.sort((a, b) => b.estimated_cost_lakh - a.estimated_cost_lakh); break;
      case 'traffic': result.sort((a, b) => b.aadt_traffic - a.aadt_traffic); break;
    }

    return result;
  }, [rankedRoads, searchQuery, filterTier, filterCondition, filterClassification, sortBy]);

  const handleExportCSV = () => {
    const headers = ["Rank", "Segment_ID", "Road_Name", "Road_Code", "District", "Classification", "RHI", "Condition", "Length_KM", "AADT", "Estimated_Cost_Lakh", "Framework_Tier"];
    const rows = filteredRoads.map(r => {
      const tier = getWorkCategory(r.current_rhi, false, r.is_single_access_lifeline);
      return [
        r.priority_rank,
        r.segment_id,
        `"${r.road_name}"`,
        r.road_code,
        r.district,
        r.classification,
        r.current_rhi,
        getConditionLabel(r.current_rhi),
        r.length_km,
        r.aadt_traffic,
        r.estimated_cost_lakh.toFixed(1),
        `"${tier.title}"`
      ];
    });
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `PWD_Manipur_Asset_Inventory_${new Date().toISOString().substring(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Search and Filters */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 260, position: 'relative' }}>
          <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Search corridors by name, segment ID, district, or PWD road code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 14px 9px 36px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              fontSize: 13,
              fontFamily: 'var(--font-sans)',
              outline: 'none'
            }}
          />
        </div>

        <select
          value={filterSector}
          onChange={(e) => setFilterSector(e.target.value)}
          style={{
            padding: '9px 12px',
            background: filterSector === 'venue' ? 'rgba(2, 132, 199, 0.2)' : 'var(--bg-glass)',
            border: `1px solid ${filterSector === 'venue' ? '#0284c7' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-sm)',
            color: filterSector === 'venue' ? '#38bdf8' : 'var(--text-primary)',
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          <option value="all">All Sectors (Statewide Network)</option>
          <option value="venue">IT SEZ Mantripukhri Venue Network</option>
        </select>

        <select
          value={filterTier}
          onChange={(e) => setFilterTier(e.target.value)}
          style={{
            padding: '9px 12px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Work Tiers</option>
          <option value="critical">① Critical Work (Safety Triage)</option>
          <option value="needed">② Needed Work (Decay Prevention)</option>
          <option value="desirable">③ Desirable Work (Lifecycle Cost)</option>
        </select>

        <select
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
          style={{
            padding: '9px 12px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Conditions (RHI)</option>
          <option value="critical">Critical (RHI &lt; 40)</option>
          <option value="poor">Poor (RHI 40-59)</option>
          <option value="fair">Fair (RHI 60-79)</option>
          <option value="good">Good (RHI ≥ 80)</option>
        </select>

        <select
          value={filterClassification}
          onChange={(e) => setFilterClassification(e.target.value)}
          style={{
            padding: '9px 12px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="all">All Classifications</option>
          <option value="NH">National Highway (NH)</option>
          <option value="SH">State Highway (SH)</option>
          <option value="MDR">Major District Road (MDR)</option>
          <option value="ODR">Other District Road (ODR)</option>
          <option value="VR">Village Road (VR)</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: '9px 12px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="priority">Sort: AHP Priority Rank</option>
          <option value="rhi_asc">Sort: Worst Condition First</option>
          <option value="rhi_desc">Sort: Best Condition First</option>
          <option value="cost">Sort: Highest Cost First</option>
          <option value="traffic">Sort: Highest Traffic First</option>
        </select>

        <button
          className="btn btn-secondary"
          onClick={handleExportCSV}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '9px 14px' }}
          title="Export CSV Asset Schedule"
        >
          <Download size={14} />
          <span>Export Inventory</span>
        </button>
      </div>

      {/* Results Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--text-muted)' }}>
        <span>Showing <strong>{filteredRoads.length}</strong> of <strong>{rankedRoads.length}</strong> corridor segments</span>
        <span>Click any row to open official Digital Twin Engineering Sheet</span>
      </div>

      {/* Road Table */}
      <div className="table-container" style={{ maxHeight: 'calc(100vh - 280px)' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Segment ID</th>
              <th>Road / Corridor Name</th>
              <th>District</th>
              <th>Class</th>
              <th>Framework Tier</th>
              <th>RHI</th>
              <th>Condition</th>
              <th>Length</th>
              <th>AADT</th>
              <th>Recommended Treatment</th>
              <th>Est. Cost</th>
              <th>AHP Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoads.map(road => {
              const condLabel = getConditionLabel(road.current_rhi);
              const condColor = getConditionColor(road.current_rhi);
              const status = road.current_rhi < 40 ? 'critical' : road.current_rhi < 60 ? 'poor' : road.current_rhi < 80 ? 'fair' : 'good';
              const tier = getWorkCategory(road.current_rhi, false, road.is_single_access_lifeline);

              return (
                <tr key={road.segment_id} onClick={() => onSelectRoad(road)}>
                  <td>
                    <span className={`priority-rank ${status}`} style={{ width: 28, height: 28, fontSize: 12 }}>
                      #{road.priority_rank}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-primary)', fontWeight: 700 }}>
                    {road.segment_id}
                  </td>
                  <td>
                    <div style={{ maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: road.is_venue_sector ? 700 : 600 }}>
                      {road.road_name}
                    </div>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 3 }}>
                      {road.is_venue_sector && (
                        <span style={{ fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 4, background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                          <MapPin size={10} /> Venue Sector
                        </span>
                      )}
                      {road.is_single_access_lifeline && (
                        <span className="badge lifeline" style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                          <Compass size={10} /> Lifeline
                        </span>
                      )}
                    </div>
                  </td>
                  <td style={{ fontSize: 12 }}>{road.district}</td>
                  <td>
                    <span className="badge accent">{road.classification}</span>
                  </td>
                  <td>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 4,
                      background: tier.bg,
                      color: tier.color,
                      border: `1px solid ${tier.border}`,
                      whiteSpace: 'nowrap'
                    }}>
                      {tier.num} {tier.title.split(' ')[0]}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: condColor }}>
                    {road.current_rhi}
                  </td>
                  <td>
                    <span className={`badge ${status}`}>{condLabel}</span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{road.length_km} km</td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>{road.aadt_traffic.toLocaleString()}</td>
                  <td style={{ fontSize: 12 }}>
                    {road.recommended_treatment.name}
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700 }}>
                    ₹{road.estimated_cost_lakh.toFixed(0)}L
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: condColor }}>
                    {road.priority.totalScore}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
