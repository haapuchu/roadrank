import { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getConditionColor, getConditionLabel, getWorkCategory } from '../data/roadData.js';
import {
  Map,
  Layers,
  Moon,
  Globe,
  MapPin,
  Navigation,
  TrafficCone,
  GitFork,
  BarChart3,
  IndianRupee,
  Search,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Eye
} from 'lucide-react';

// Coordinates for IT SEZ, Mantripukhri (Hackathon Venue)
const VENUE_COORDS = [24.84335, 93.94282];

export default function PriorityMap({ rankedRoads, isMonsoon, onSelectRoad, onNavigateTab }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const layersRef = useRef([]);
  const polylineMapRef = useRef({});
  const tileLayersRef = useRef([]);
  const venueMarkerRef = useRef(null);

  const [mapLayer, setMapLayer] = useState('condition');
  const [basemapStyle, setBasemapStyle] = useState('google'); // 'google', 'googleHybrid', 'dark', 'osm'
  const [sectorScope, setSectorScope] = useState('venue'); // 'venue' (IT SEZ Mantripukhri only) or 'all'
  const [focusedRoad, setFocusedRoad] = useState(null);

  // Filter roads by selected scope
  const displayedRoads = useMemo(() => {
    if (sectorScope === 'venue') {
      return rankedRoads.filter(r => r.is_venue_sector || r.zone === 'IT SEZ Mantripukhri');
    }
    return rankedRoads;
  }, [rankedRoads, sectorScope]);

  // Venue roads for quick-picker
  const venueRoads = useMemo(() => {
    return rankedRoads.filter(r => r.is_venue_sector || r.zone === 'IT SEZ Mantripukhri');
  }, [rankedRoads]);

  // Initialize Map
  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.remove();
      mapInstance.current = null;
    }

    const map = L.map(mapRef.current, {
      center: VENUE_COORDS,
      zoom: 15,
      zoomControl: true,
      attributionControl: true,
    });

    mapInstance.current = map;

    // Add pulsing Hackathon Venue marker
    const venueIcon = L.divIcon({
      className: 'venue-marker',
      html: `
        <div class="venue-pulse"></div>
        <div class="venue-pin" style="display:flex;align-items:center;justify-content:center;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#0b3c5d" stroke="#ffffff" stroke-width="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3" fill="#ffffff"/>
          </svg>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    const marker = L.marker(VENUE_COORDS, { icon: venueIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: var(--font-sans); padding: 4px; min-width: 220px;">
        <div style="font-size: 11px; font-weight: 800; color: #0369a1; text-transform: uppercase; letter-spacing: 0.5px;">
          IT SEZ &amp; STPI CAPITAL COMPLEX
        </div>
        <div style="font-size: 14px; font-weight: 800; color: #0b3c5d; margin: 3px 0;">
          IT SEZ Mantripukhri Sector
        </div>
        <div style="font-size: 12px; color: #475569; line-height: 1.4;">
          Mantripukhri, Imphal East, Manipur 795002
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #15803d; font-weight: 700;">
          ✓ Ground Truth OpenStreetMap Road Asset Inventory
        </div>
      </div>
    `);

    venueMarkerRef.current = marker;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update Basemap Tiles
  useEffect(() => {
    if (!mapInstance.current) return;

    tileLayersRef.current.forEach(tl => mapInstance.current.removeLayer(tl));
    tileLayersRef.current = [];

    const map = mapInstance.current;

    if (basemapStyle === 'google') {
      const google = L.tileLayer(
        'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
        { attribution: '&copy; Google Maps', maxZoom: 20 }
      ).addTo(map);
      tileLayersRef.current = [google];
    } else if (basemapStyle === 'googleHybrid') {
      const hybrid = L.tileLayer(
        'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
        { attribution: '&copy; Google Maps Satellite', maxZoom: 20 }
      ).addTo(map);
      tileLayersRef.current = [hybrid];
    } else if (basemapStyle === 'dark') {
      const base = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        { attribution: 'Tiles &copy; Esri', maxZoom: 16 }
      ).addTo(map);
      const labels = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
        { attribution: '', maxZoom: 16 }
      ).addTo(map);
      tileLayersRef.current = [base, labels];
    } else if (basemapStyle === 'osm') {
      const osm = L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '&copy; OpenStreetMap contributors', maxZoom: 19 }
      ).addTo(map);
      tileLayersRef.current = [osm];
    }
  }, [basemapStyle]);

  // Update road polylines
  useEffect(() => {
    if (!mapInstance.current) return;

    layersRef.current.forEach(l => mapInstance.current.removeLayer(l));
    layersRef.current = [];
    polylineMapRef.current = {};

    displayedRoads.forEach(road => {
      if (!road.coordinates || road.coordinates.length < 2) return;

      const latlngs = road.coordinates.map(([lng, lat]) => [lat, lng]);

      let color, weight, opacity;

      switch (mapLayer) {
        case 'condition':
          color = getConditionColor(road.current_rhi);
          weight = road.is_venue_sector ? 6 : 4;
          opacity = 0.92;
          break;

        case 'framework':
          const tier = getWorkCategory(road.current_rhi, isMonsoon, road.is_single_access_lifeline);
          color = tier.color;
          weight = tier.id === 'critical' ? 7 : tier.id === 'needed' ? 5 : 4;
          opacity = 0.92;
          break;

        case 'criticality':
          if (road.is_single_access_lifeline) {
            color = '#0284c7';
            weight = 7;
            opacity = 0.95;
          } else if (road.connects_hospital) {
            color = '#b91c1c';
            weight = 6;
            opacity = 0.9;
          } else if (road.connects_school || road.connects_market) {
            color = '#b45309';
            weight = 5;
            opacity = 0.85;
          } else {
            color = '#64748b';
            weight = 3;
            opacity = 0.6;
          }
          break;

        case 'priority':
          if (road.priority_rank <= 5) {
            color = '#b91c1c';
            weight = 7;
            opacity = 1;
          } else if (road.priority_rank <= 15) {
            color = '#c2410c';
            weight = 5.5;
            opacity = 0.9;
          } else if (road.priority_rank <= 30) {
            color = '#b45309';
            weight = 4;
            opacity = 0.8;
          } else {
            color = '#15803d';
            weight = 3;
            opacity = 0.65;
          }
          break;

        case 'budget':
          const topAllocated = rankedRoads.slice(0, 15).some(r => r.segment_id === road.segment_id);
          if (topAllocated) {
            color = '#15803d';
            weight = 6;
            opacity = 0.95;
          } else {
            color = '#64748b';
            weight = 3;
            opacity = 0.45;
          }
          break;

        default:
          color = '#0b3c5d';
          weight = 5;
          opacity = 0.85;
      }

      const polyline = L.polyline(latlngs, {
        color,
        weight,
        opacity,
        lineCap: 'round',
        lineJoin: 'round',
        dashArray: road.is_single_access_lifeline ? null : null,
      }).addTo(mapInstance.current);

      const condLabel = getConditionLabel(road.current_rhi);
      const tierInfo = getWorkCategory(road.current_rhi, isMonsoon, road.is_single_access_lifeline);

      const popupContent = `
        <div style="font-family: var(--font-sans); padding: 2px; min-width: 250px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span style="font-family: var(--font-mono); font-size:11px; font-weight:800; color:#0b3c5d; background:#e0f2fe; padding:2px 6px; border-radius:3px;">
              ${road.segment_id}
            </span>
            <span style="font-size:11px; font-weight:700; color:${getConditionColor(road.current_rhi)};">
              RHI ${road.current_rhi} (${condLabel})
            </span>
          </div>
          <div style="font-size: 13.5px; font-weight: 800; color: #0f172a; margin-bottom: 2px;">
            ${road.road_name}
          </div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 8px;">
            ${road.district} &bull; ${road.road_code} &bull; ${road.length_km} km
          </div>
          <div style="font-size: 11.5px; color: #334155; background: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 8px; border-radius: 4px; margin-bottom: 8px; line-height: 1.4;">
            <strong>Framework Tier:</strong> <span style="color:${tierInfo.color}; font-weight:700;">${tierInfo.num} ${tierInfo.title}</span><br/>
            <strong>Action:</strong> ${tierInfo.action}<br/>
            <strong>Est. Cost:</strong> ₹${road.estimated_cost_lakh.toFixed(1)} Lakh
            ${road.is_single_access_lifeline ? '<br/><strong style="color:#b91c1c">⚠️ Sole Lifeline Route</strong>' : ''}
          </div>
          <button style="width:100%; padding:6px; background:#0b3c5d; color:#ffffff; border:none; border-radius:4px; font-size:11.5px; font-weight:700; cursor:pointer;" onclick="window.__selectRoad && window.__selectRoad('${road.segment_id}')">
            Open Digital Twin Inspection Sheet
          </button>
        </div>
      `;

      polyline.bindPopup(popupContent, { maxWidth: 320 });

      polyline.on('mouseover', function() {
        this.setStyle({ weight: weight + 3, opacity: 1 });
        this.bringToFront();
      });
      polyline.on('mouseout', function() {
        this.setStyle({ weight, opacity });
      });

      layersRef.current.push(polyline);
      polylineMapRef.current[road.segment_id] = polyline;
    });
  }, [displayedRoads, mapLayer, isMonsoon, rankedRoads]);

  // Global popup click handler
  useEffect(() => {
    window.__selectRoad = (segmentId) => {
      const road = rankedRoads.find(r => r.segment_id === segmentId);
      if (road) onSelectRoad(road);
    };
    return () => { delete window.__selectRoad; };
  }, [rankedRoads, onSelectRoad]);

  const handleFlyToVenue = () => {
    if (!mapInstance.current) return;
    setSectorScope('venue');
    mapInstance.current.flyTo(VENUE_COORDS, 15, { duration: 1.0 });
  };

  const handleZoomFullState = () => {
    if (!mapInstance.current) return;
    setSectorScope('all');
    mapInstance.current.flyTo([24.8, 93.95], 9, { duration: 1.2 });
  };

  // Fly to specific road with smooth viewport scroll
  const handleFocusRoad = (road) => {
    if (!mapInstance.current || !road.coordinates || road.coordinates.length === 0) return;
    setFocusedRoad(road);

    // 1. Smoothly scroll viewport up to the map element
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // 2. Fly to road coordinates
    const midIdx = Math.floor(road.coordinates.length / 2);
    const [lng, lat] = road.coordinates[midIdx];
    mapInstance.current.flyTo([lat, lng], 16.5, { duration: 1.0 });

    // 3. Highlight polyline and open popup
    setTimeout(() => {
      const poly = polylineMapRef.current[road.segment_id];
      if (poly) {
        poly.openPopup();
        poly.setStyle({ weight: 9, color: '#0284c7', opacity: 1 });
        setTimeout(() => {
          const baseColor = getConditionColor(road.current_rhi);
          poly.setStyle({ weight: road.is_venue_sector ? 6 : 4, color: baseColor });
        }, 3000);
      }
    }, 1100);
  };

  const legendItems = {
    condition: [
      { color: '#15803d', label: 'Good (RHI ≥ 80)' },
      { color: '#b45309', label: 'Fair (RHI 60-79)' },
      { color: '#c2410c', label: 'Poor (RHI 40-59)' },
      { color: '#b91c1c', label: 'Critical (RHI < 40)' },
    ],
    framework: [
      { color: '#b91c1c', label: '① Critical Work (Restore Safety)' },
      { color: '#b45309', label: '② Needed Work (Proactive Decay Prevention)' },
      { color: '#15803d', label: '③ Desirable Work (Lifecycle Preservation)' },
    ],
    criticality: [
      { color: '#0284c7', label: 'Single-Access Lifeline Corridor' },
      { color: '#b91c1c', label: 'Connects District Hospital / PHC' },
      { color: '#b45309', label: 'Connects High School / Bazar' },
      { color: '#64748b', label: 'Standard Transit Corridor' },
    ],
    priority: [
      { color: '#b91c1c', label: 'Rank 1–5 (Highest AHP Priority)' },
      { color: '#c2410c', label: 'Rank 6–15 (Elevated Priority)' },
      { color: '#b45309', label: 'Rank 16–30 (Moderate Priority)' },
      { color: '#15803d', label: 'Rank 31+ (Routine Monitoring)' },
    ],
    budget: [
      { color: '#15803d', label: 'Funded under Current FY Budget' },
      { color: '#64748b', label: 'Deferred to Next Planning Cycle' },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* 1. STEP 1 GUIDANCE BANNER */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderLeft: '5px solid #0284c7',
        borderRadius: 'var(--radius-lg)',
        padding: '20px 24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#0284c7', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
              STEP 1 OF 4: REAL ASSET MAPPING
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0b3c5d', marginTop: '2px' }}>
              Road Survey &amp; Live GIS Inspection (IT SEZ &amp; Capital Corridors)
            </h2>
            <p style={{ fontSize: '13px', color: '#334155', maxWidth: '900px', marginTop: '4px', lineHeight: 1.5 }}>
              Below are <strong>10 real road corridors</strong> around the <strong>IT SEZ Mantripukhri Sector</strong> mapped from OpenStreetMap GPS tracklines. Click any road on the map or select from the corridor deck below to inspect pavement damage, potholes, and lifeline status.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              className="btn btn-primary"
              onClick={() => onNavigateTab('prioritisation')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', fontSize: '12.5px' }}
            >
              <span>Next: AHP Prioritisation (Step 2)</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Focused Road Active Banner */}
      {focusedRoad && (
        <div style={{
          background: '#eff6ff',
          border: '1px solid #93c5fd',
          borderRadius: 'var(--radius-sm)',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ background: '#0b3c5d', color: '#ffffff', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: 4 }}>
              FOCUSED ON MAP
            </span>
            <span style={{ fontWeight: 800, color: '#0b3c5d', fontSize: '13.5px' }}>
              {focusedRoad.road_name} ({focusedRoad.road_code})
            </span>
            <span style={{ color: '#475569', fontSize: '12px' }}>
              • RHI: <strong>{focusedRoad.current_rhi}</strong> • Length: <strong>{focusedRoad.length_km} km</strong> • Est. Cost: <strong>₹{focusedRoad.estimated_cost_lakh.toFixed(1)}L</strong>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="btn btn-primary"
              style={{ padding: '5px 12px', fontSize: '11.5px' }}
              onClick={() => onSelectRoad(focusedRoad)}
            >
              Inspect Complete Damage Dossier
            </button>
            <button
              className="btn btn-secondary"
              style={{ padding: '5px 10px', fontSize: '11.5px' }}
              onClick={() => setFocusedRoad(null)}
            >
              ✕ Clear Focus
            </button>
          </div>
        </div>
      )}

      {/* 2. INTERACTIVE GIS MAP CONTAINER */}
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', border: '1px solid #cbd5e1', boxShadow: 'var(--shadow-sm)' }}>
        <div className="map-container" ref={mapRef} style={{ height: 560 }}>
        </div>

        {/* Top Floating Controls */}
        <div style={{
          position: 'absolute',
          top: 14,
          left: 54,
          zIndex: 450,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(8px)',
          padding: '6px 10px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid #cbd5e1',
          boxShadow: 'var(--shadow-md)',
          alignItems: 'center',
          maxWidth: 'calc(100% - 70px)'
        }}>
          {/* Basemap Options */}
          <span style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginRight: 2, letterSpacing: '0.5px' }}>
            Basemap:
          </span>
          <button
            className={`map-layer-btn ${basemapStyle === 'google' ? 'active' : ''}`}
            onClick={() => setBasemapStyle('google')}
            title="Google Maps Standard"
          >
            <Map size={13} />
            <span>Google Maps</span>
          </button>
          <button
            className={`map-layer-btn ${basemapStyle === 'googleHybrid' ? 'active' : ''}`}
            onClick={() => setBasemapStyle('googleHybrid')}
            title="Google Satellite imagery"
          >
            <Layers size={13} />
            <span>Google Satellite</span>
          </button>
          <button
            className={`map-layer-btn ${basemapStyle === 'dark' ? 'active' : ''}`}
            onClick={() => setBasemapStyle('dark')}
            title="Dark GIS Canvas"
          >
            <Moon size={13} />
            <span>Dark GIS</span>
          </button>
          <button
            className={`map-layer-btn ${basemapStyle === 'osm' ? 'active' : ''}`}
            onClick={() => setBasemapStyle('osm')}
            title="OpenStreetMap Standard"
          >
            <Globe size={13} />
            <span>OSM</span>
          </button>

          <div style={{ height: 16, width: 1, background: '#cbd5e1', margin: '0 4px' }} />

          {/* Scope Filter */}
          <span style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginRight: 2, letterSpacing: '0.5px' }}>
            Scope:
          </span>
          <button
            className={`map-layer-btn ${sectorScope === 'venue' ? 'active' : ''}`}
            onClick={handleFlyToVenue}
            title="Show 10 real roads directly around IT SEZ Mantripukhri"
          >
            <MapPin size={13} />
            <span>IT SEZ Venue (10 Roads)</span>
          </button>
          <button
            className={`map-layer-btn ${sectorScope === 'all' ? 'active' : ''}`}
            onClick={handleZoomFullState}
            title="View all 60 corridors across Manipur"
          >
            <Navigation size={13} />
            <span>Statewide Network (60)</span>
          </button>
        </div>

        {/* Layer Switcher (Top Right) */}
        <div className="map-controls">
          {[
            { id: 'condition', label: 'Condition (IRC:82)', icon: TrafficCone },
            { id: 'framework', label: '3-Tier PWD Framework', icon: Layers },
            { id: 'criticality', label: 'Lifeline Criticality', icon: GitFork },
            { id: 'priority', label: 'AHP Priority Rank', icon: BarChart3 },
            { id: 'budget', label: 'Budget Sanction', icon: IndianRupee },
          ].map(layer => {
            const Icon = layer.icon;
            return (
              <button
                key={layer.id}
                className={`map-layer-btn ${mapLayer === layer.id ? 'active' : ''}`}
                onClick={() => setMapLayer(layer.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <Icon size={13} />
                <span>{layer.label}</span>
              </button>
            );
          })}
        </div>

        {/* Legend (Bottom Left) */}
        <div className="map-legend">
          <div className="map-legend-title">
            {mapLayer === 'condition' && 'Road Condition (IRC:82 Spectrum)'}
            {mapLayer === 'framework' && '3-Tier PWD Work Classification'}
            {mapLayer === 'criticality' && 'Lifeline & Hospital Criticality'}
            {mapLayer === 'priority' && 'AHP Multi-Factor Priority Ranking'}
            {mapLayer === 'budget' && 'FY Budget Sanction Status'}
          </div>
          <div className="map-legend-items">
            {(legendItems[mapLayer] || []).map((item, i) => (
              <div className="map-legend-item" key={i}>
                <div className="map-legend-line" style={{ background: item.color }} />
                {item.label}
              </div>
            ))}
          </div>
          {sectorScope === 'venue' && (
            <div style={{ marginTop: 8, paddingTop: 6, borderTop: '1px solid #e2e8f0', fontSize: 10, color: '#0284c7', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700 }}>
              <MapPin size={11} />
              <span>Centered on IT SEZ Mantripukhri Network</span>
            </div>
          )}
        </div>
      </div>

      {/* 3. MANTRIPUKHRI IT SEZ CORRIDORS QUICK-INSPECTION DECK */}
      <div className="panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0b3c5d', display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={17} style={{ color: '#0284c7' }} />
              State Asset Inventory: IT SEZ Mantripukhri Sector (10 Physical Corridors)
            </h3>
            <p style={{ fontSize: '12px', color: '#64748b' }}>
              Click "Show on Map" to fly directly to any corridor, or "Inspect Defects" to open its complete engineering dossier.
            </p>
          </div>
          <span className="badge accent">Division-I Capital Sector</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {venueRoads.map((road) => {
            const condLabel = getConditionLabel(road.current_rhi);
            const tier = getWorkCategory(road.current_rhi, isMonsoon, road.is_single_access_lifeline);
            return (
              <div key={road.segment_id} style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 8
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 800, color: '#0b3c5d', background: '#e0f2fe', padding: '1px 6px', borderRadius: 3 }}>
                      {road.segment_id}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: getConditionColor(road.current_rhi) }}>
                      RHI {road.current_rhi} ({condLabel})
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                    {road.road_name}
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: 2 }}>
                    {road.classification} &bull; {road.length_km} km &bull; Est: ₹{road.estimated_cost_lakh.toFixed(1)}L
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <span className={`badge ${tier.id}`} style={{ fontSize: '10px' }}>
                      {tier.num} {tier.title}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                  <button
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '5px 8px', fontSize: '11px', display: 'flex', justifyContent: 'center', gap: 4 }}
                    onClick={() => handleFocusRoad(road)}
                  >
                    <Eye size={12} />
                    <span>Show on Map</span>
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '5px 8px', fontSize: '11px', display: 'flex', justifyContent: 'center', gap: 4 }}
                    onClick={() => onSelectRoad(road)}
                  >
                    <span>Inspect Defects</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. BOTTOM TRANSITION BANNER TO STEP 2 */}
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
            Step 1 Complete: Physical Road Corridors Inspected
          </div>
          <div style={{ fontSize: '12px', color: '#64748b', marginTop: 2 }}>
            Now, see how our mathematical AHP algorithm calculates which roads should be repaired first without human bias.
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => onNavigateTab('prioritisation')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', fontSize: '13px', fontWeight: 700 }}
        >
          <span>Proceed to Step 2: AHP Prioritisation Engine</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
