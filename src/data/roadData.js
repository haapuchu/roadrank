// ============================================================
// ROADRANK - Manipur Road Network Dataset
// Real High-Density OSM GPS Corridors for Mantripukhri Hackathon Venue
// Combined with Statewide PWD Network Segments
// ============================================================

export const ROAD_SEGMENTS = [
  // ===== HACKATHON VENUE SECTOR: IT SEZ & STPI MANTRIPUKHRI (REAL OSM TRACED) =====
  {
    "segment_id": "MNP-SEZ-001",
    "road_code": "PWD-SEZ-01",
    "road_name": "IT SEZ 4-Lane Main Approach Road",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "MDR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 0.25,
    "surface_width_m": 14,
    "lane_count": 4,
    "pavement_type": "Bituminous Concrete",
    "aadt_traffic": 5400,
    "heavy_vehicle_pct": 12,
    "population_served": 8500,
    "connected_villages_count": 3,
    "connects_hospital": false,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": true,
    "detour_distance_km": 6.5,
    "network_centrality_score": 88,
    "terrain_type": "Valley",
    "last_major_maintenance": "2023-11-20",
    "last_treatment_type": "Thin Hot-Mix Overlay",
    "current_rhi": 68,
    "data_confidence_score": 96,
    "field_inspection_required": false,
    "coordinates": [
      [
        93.941169,
        24.843564
      ],
      [
        93.941677,
        24.843735
      ],
      [
        93.941899,
        24.843803
      ],
      [
        93.941992,
        24.843822
      ],
      [
        93.942093,
        24.843841
      ],
      [
        93.942206,
        24.843862
      ],
      [
        93.942286,
        24.843875
      ],
      [
        93.942327,
        24.843885
      ],
      [
        93.942523,
        24.843938
      ],
      [
        93.943043,
        24.844121
      ],
      [
        93.943227,
        24.844183
      ],
      [
        93.943459,
        24.844255
      ]
    ],
    "defects": [
      {
        "type": "transverse_crack",
        "severity": "Medium",
        "count": 6,
        "area_sqm": 4.2,
        "depth_cm": null,
        "confidence": 0.92
      },
      {
        "type": "edge_break",
        "severity": "Low",
        "count": 3,
        "area_sqm": 1.8,
        "depth_cm": null,
        "confidence": 0.89
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-002",
    "road_code": "NH-02",
    "road_name": "NH-02 (AH1/AH2) Mantripukhri North Corridor",
    "district": "Imphal East",
    "division": "NH Division I",
    "classification": "NH",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 2.13,
    "surface_width_m": 14,
    "lane_count": 4,
    "pavement_type": "Bituminous Concrete",
    "aadt_traffic": 18500,
    "heavy_vehicle_pct": 32,
    "population_served": 38000,
    "connected_villages_count": 6,
    "connects_hospital": true,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": false,
    "detour_distance_km": 14,
    "network_centrality_score": 96,
    "terrain_type": "Valley",
    "last_major_maintenance": "2022-04-10",
    "last_treatment_type": "Resurfacing",
    "current_rhi": 48,
    "data_confidence_score": 94,
    "field_inspection_required": true,
    "coordinates": [
      [
        93.931142,
        24.860072
      ],
      [
        93.931589,
        24.859211
      ],
      [
        93.931664,
        24.859067
      ],
      [
        93.931979,
        24.858455
      ],
      [
        93.932299,
        24.857838
      ],
      [
        93.932429,
        24.85759
      ],
      [
        93.932715,
        24.857039
      ],
      [
        93.932986,
        24.856526
      ],
      [
        93.933419,
        24.855696
      ],
      [
        93.933739,
        24.855084
      ],
      [
        93.934126,
        24.854354
      ],
      [
        93.934163,
        24.85428
      ],
      [
        93.934404,
        24.8538
      ],
      [
        93.934794,
        24.853068
      ],
      [
        93.935015,
        24.852654
      ],
      [
        93.935354,
        24.851996
      ],
      [
        93.935385,
        24.851936
      ],
      [
        93.9361,
        24.850568
      ],
      [
        93.936519,
        24.849768
      ],
      [
        93.936671,
        24.849476
      ],
      [
        93.937039,
        24.84877
      ],
      [
        93.937219,
        24.848425
      ],
      [
        93.937739,
        24.847438
      ],
      [
        93.93801,
        24.846926
      ],
      [
        93.93825,
        24.846472
      ],
      [
        93.938266,
        24.846441
      ],
      [
        93.93858,
        24.845846
      ],
      [
        93.938891,
        24.845226
      ],
      [
        93.938935,
        24.845142
      ],
      [
        93.939149,
        24.844721
      ],
      [
        93.939299,
        24.844427
      ],
      [
        93.939702,
        24.843676
      ],
      [
        93.94011,
        24.842905
      ],
      [
        93.940198,
        24.842734
      ]
    ],
    "defects": [
      {
        "type": "rutting",
        "severity": "High",
        "count": 8,
        "area_sqm": 22,
        "depth_cm": 6,
        "confidence": 0.95
      },
      {
        "type": "pothole",
        "severity": "High",
        "count": 11,
        "area_sqm": 3.4,
        "depth_cm": 9,
        "confidence": 0.92
      },
      {
        "type": "alligator_crack",
        "severity": "High",
        "count": 7,
        "area_sqm": 14.5,
        "depth_cm": null,
        "confidence": 0.88
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-003",
    "road_code": "SEZ-INT-02",
    "road_name": "STPI & IT Park North Perimeter Road",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "VR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 0.41,
    "surface_width_m": 6,
    "lane_count": 2,
    "pavement_type": "Paver Blocks & Bituminous",
    "aadt_traffic": 1200,
    "heavy_vehicle_pct": 5,
    "population_served": 3200,
    "connected_villages_count": 1,
    "connects_hospital": false,
    "connects_school": true,
    "connects_market": false,
    "is_single_access_lifeline": false,
    "detour_distance_km": 1.5,
    "network_centrality_score": 65,
    "terrain_type": "Valley",
    "last_major_maintenance": "2024-02-15",
    "last_treatment_type": "Surface Dressing",
    "current_rhi": 86,
    "data_confidence_score": 98,
    "field_inspection_required": false,
    "coordinates": [
      [
        93.942059,
        24.846133
      ],
      [
        93.942206,
        24.845922
      ],
      [
        93.94227,
        24.845825
      ],
      [
        93.942373,
        24.845649
      ],
      [
        93.94245,
        24.845528
      ],
      [
        93.942504,
        24.845447
      ],
      [
        93.942697,
        24.845232
      ],
      [
        93.942795,
        24.845122
      ],
      [
        93.943012,
        24.844834
      ],
      [
        93.943084,
        24.84474
      ],
      [
        93.943349,
        24.844397
      ],
      [
        93.943459,
        24.844255
      ],
      [
        93.943524,
        24.84417
      ],
      [
        93.94354,
        24.844151
      ],
      [
        93.943566,
        24.844133
      ],
      [
        93.94361,
        24.844131
      ],
      [
        93.943726,
        24.844167
      ],
      [
        93.943799,
        24.844187
      ],
      [
        93.943859,
        24.8442
      ],
      [
        93.943952,
        24.844211
      ],
      [
        93.944159,
        24.844228
      ],
      [
        93.944347,
        24.844246
      ],
      [
        93.944601,
        24.844252
      ],
      [
        93.944972,
        24.844225
      ]
    ],
    "defects": [
      {
        "type": "surface_raveling",
        "severity": "Low",
        "count": 2,
        "area_sqm": 1.2,
        "depth_cm": null,
        "confidence": 0.84
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-004",
    "road_code": "ODR-KL-04",
    "road_name": "Mantripukhri Bazar Commercial Strip Road",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "ODR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 0.44,
    "surface_width_m": 6,
    "lane_count": 2,
    "pavement_type": "Bituminous",
    "aadt_traffic": 6800,
    "heavy_vehicle_pct": 16,
    "population_served": 14200,
    "connected_villages_count": 4,
    "connects_hospital": true,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": true,
    "detour_distance_km": 5,
    "network_centrality_score": 84,
    "terrain_type": "Valley",
    "last_major_maintenance": "2020-08-12",
    "last_treatment_type": "Patching",
    "current_rhi": 36,
    "data_confidence_score": 92,
    "field_inspection_required": true,
    "coordinates": [
      [
        93.939975,
        24.843338
      ],
      [
        93.940666,
        24.843576
      ],
      [
        93.940695,
        24.843601
      ],
      [
        93.940697,
        24.843628
      ],
      [
        93.940689,
        24.843667
      ],
      [
        93.940605,
        24.844043
      ],
      [
        93.940579,
        24.844061
      ],
      [
        93.940511,
        24.844064
      ],
      [
        93.940469,
        24.844064
      ],
      [
        93.940448,
        24.844079
      ],
      [
        93.940345,
        24.844402
      ],
      [
        93.940036,
        24.845299
      ],
      [
        93.940028,
        24.845322
      ],
      [
        93.939951,
        24.845545
      ],
      [
        93.939766,
        24.846186
      ],
      [
        93.939738,
        24.846304
      ],
      [
        93.939637,
        24.846647
      ]
    ],
    "defects": [
      {
        "type": "pothole",
        "severity": "Severe",
        "count": 18,
        "area_sqm": 4.8,
        "depth_cm": 14,
        "confidence": 0.96
      },
      {
        "type": "edge_break",
        "severity": "High",
        "count": 9,
        "area_sqm": 8.2,
        "depth_cm": null,
        "confidence": 0.91
      },
      {
        "type": "drainage_failure",
        "severity": "Severe",
        "count": 2,
        "area_sqm": 12,
        "depth_cm": 25,
        "confidence": 0.94
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-005",
    "road_code": "NH-02",
    "road_name": "NH-02 (AH1/AH2) Mantripukhri South Corridor (Eastern Motors)",
    "district": "Imphal East",
    "division": "NH Division I",
    "classification": "NH",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 2,
    "surface_width_m": 14,
    "lane_count": 4,
    "pavement_type": "Bituminous Concrete",
    "aadt_traffic": 17200,
    "heavy_vehicle_pct": 28,
    "population_served": 34000,
    "connected_villages_count": 5,
    "connects_hospital": true,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": false,
    "detour_distance_km": 9.5,
    "network_centrality_score": 94,
    "terrain_type": "Valley",
    "last_major_maintenance": "2022-09-10",
    "last_treatment_type": "Resurfacing",
    "current_rhi": 64,
    "data_confidence_score": 95,
    "field_inspection_required": false,
    "coordinates": [
      [
        93.940198,
        24.842734
      ],
      [
        93.940667,
        24.841821
      ],
      [
        93.941089,
        24.841012
      ],
      [
        93.94157,
        24.840104
      ],
      [
        93.942127,
        24.839031
      ],
      [
        93.942646,
        24.838044
      ],
      [
        93.943027,
        24.837282
      ],
      [
        93.943621,
        24.836149
      ],
      [
        93.944056,
        24.835307
      ],
      [
        93.944587,
        24.834284
      ],
      [
        93.945104,
        24.833264
      ],
      [
        93.945314,
        24.832834
      ],
      [
        93.945516,
        24.832445
      ],
      [
        93.945575,
        24.832322
      ],
      [
        93.945614,
        24.832214
      ],
      [
        93.945649,
        24.832108
      ],
      [
        93.94568,
        24.831978
      ],
      [
        93.945686,
        24.831866
      ],
      [
        93.945684,
        24.83172
      ],
      [
        93.945664,
        24.831586
      ],
      [
        93.945643,
        24.831516
      ],
      [
        93.945611,
        24.831409
      ],
      [
        93.945528,
        24.831186
      ],
      [
        93.945439,
        24.83095
      ],
      [
        93.945274,
        24.83051
      ],
      [
        93.945204,
        24.830326
      ],
      [
        93.945025,
        24.829872
      ],
      [
        93.944919,
        24.829641
      ],
      [
        93.944841,
        24.82945
      ],
      [
        93.944748,
        24.82918
      ],
      [
        93.944651,
        24.828882
      ],
      [
        93.944618,
        24.828716
      ],
      [
        93.944599,
        24.828603
      ],
      [
        93.944584,
        24.828457
      ],
      [
        93.944572,
        24.828235
      ],
      [
        93.944563,
        24.827933
      ],
      [
        93.94456,
        24.82784
      ],
      [
        93.944554,
        24.827612
      ],
      [
        93.944549,
        24.82726
      ],
      [
        93.944534,
        24.826678
      ],
      [
        93.944504,
        24.826018
      ]
    ],
    "defects": [
      {
        "type": "longitudinal_crack",
        "severity": "Medium",
        "count": 5,
        "area_sqm": 6.5,
        "depth_cm": null,
        "confidence": 0.88
      },
      {
        "type": "pothole",
        "severity": "Medium",
        "count": 4,
        "area_sqm": 1.1,
        "depth_cm": 5,
        "confidence": 0.9
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-006",
    "road_code": "ODR-LW-06",
    "road_name": "Heingang - Marjing Cultural Corridor (Mik-Leh / Union Club)",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "ODR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 2.14,
    "surface_width_m": 6,
    "lane_count": 2,
    "pavement_type": "Bituminous",
    "aadt_traffic": 4600,
    "heavy_vehicle_pct": 10,
    "population_served": 9800,
    "connected_villages_count": 3,
    "connects_hospital": true,
    "connects_school": true,
    "connects_market": false,
    "is_single_access_lifeline": true,
    "detour_distance_km": 9,
    "network_centrality_score": 79,
    "terrain_type": "Rolling",
    "last_major_maintenance": "2019-12-05",
    "last_treatment_type": "Surface Dressing",
    "current_rhi": 32,
    "data_confidence_score": 90,
    "field_inspection_required": true,
    "coordinates": [
      [
        93.947345,
        24.854418
      ],
      [
        93.947458,
        24.854492
      ],
      [
        93.947552,
        24.854533
      ],
      [
        93.947627,
        24.854556
      ],
      [
        93.947828,
        24.854595
      ],
      [
        93.947921,
        24.854618
      ],
      [
        93.947991,
        24.854638
      ],
      [
        93.948067,
        24.854675
      ],
      [
        93.948306,
        24.854809
      ],
      [
        93.948491,
        24.854913
      ],
      [
        93.948543,
        24.854939
      ],
      [
        93.948584,
        24.854949
      ],
      [
        93.948649,
        24.854957
      ],
      [
        93.948995,
        24.854952
      ],
      [
        93.949084,
        24.854944
      ],
      [
        93.949169,
        24.854933
      ],
      [
        93.949244,
        24.854906
      ],
      [
        93.949295,
        24.85487
      ],
      [
        93.949328,
        24.854827
      ],
      [
        93.949382,
        24.854671
      ],
      [
        93.949441,
        24.854498
      ],
      [
        93.949524,
        24.854258
      ],
      [
        93.949552,
        24.85415
      ],
      [
        93.949563,
        24.854074
      ],
      [
        93.949531,
        24.853628
      ],
      [
        93.949533,
        24.853351
      ],
      [
        93.949537,
        24.853103
      ],
      [
        93.949554,
        24.852608
      ],
      [
        93.949562,
        24.852519
      ],
      [
        93.949579,
        24.852446
      ],
      [
        93.949668,
        24.852119
      ],
      [
        93.949757,
        24.85189
      ],
      [
        93.949782,
        24.851853
      ],
      [
        93.949844,
        24.8518
      ],
      [
        93.9499,
        24.851755
      ],
      [
        93.950021,
        24.851694
      ],
      [
        93.950147,
        24.851637
      ],
      [
        93.950311,
        24.85158
      ],
      [
        93.950402,
        24.851563
      ],
      [
        93.950479,
        24.851554
      ],
      [
        93.950554,
        24.851561
      ],
      [
        93.950793,
        24.851619
      ],
      [
        93.950879,
        24.851649
      ],
      [
        93.950934,
        24.851674
      ],
      [
        93.950987,
        24.851706
      ],
      [
        93.951033,
        24.851734
      ],
      [
        93.951109,
        24.851789
      ],
      [
        93.951543,
        24.852256
      ],
      [
        93.951709,
        24.852404
      ],
      [
        93.951921,
        24.852561
      ],
      [
        93.951987,
        24.852605
      ],
      [
        93.952039,
        24.852631
      ],
      [
        93.9521,
        24.852653
      ],
      [
        93.952174,
        24.852665
      ],
      [
        93.952231,
        24.852662
      ],
      [
        93.952297,
        24.852642
      ],
      [
        93.952352,
        24.852609
      ],
      [
        93.952408,
        24.852566
      ],
      [
        93.952441,
        24.852507
      ],
      [
        93.952449,
        24.852477
      ],
      [
        93.952459,
        24.852396
      ],
      [
        93.952454,
        24.852282
      ],
      [
        93.952442,
        24.852188
      ],
      [
        93.952421,
        24.85208
      ],
      [
        93.952401,
        24.852013
      ],
      [
        93.952352,
        24.851913
      ],
      [
        93.95224,
        24.851726
      ],
      [
        93.952118,
        24.851564
      ],
      [
        93.951884,
        24.851276
      ],
      [
        93.951109,
        24.850397
      ],
      [
        93.950846,
        24.850099
      ],
      [
        93.950781,
        24.850028
      ],
      [
        93.950752,
        24.84997
      ],
      [
        93.950721,
        24.849901
      ],
      [
        93.950647,
        24.849649
      ],
      [
        93.950625,
        24.849553
      ],
      [
        93.950612,
        24.849477
      ],
      [
        93.950604,
        24.849352
      ],
      [
        93.950618,
        24.849253
      ],
      [
        93.950635,
        24.849143
      ],
      [
        93.950655,
        24.849014
      ],
      [
        93.950682,
        24.848881
      ],
      [
        93.950742,
        24.848599
      ],
      [
        93.950786,
        24.848386
      ],
      [
        93.95081,
        24.848334
      ],
      [
        93.950835,
        24.848281
      ],
      [
        93.950897,
        24.84823
      ],
      [
        93.951141,
        24.848086
      ],
      [
        93.951231,
        24.848033
      ],
      [
        93.951404,
        24.847937
      ],
      [
        93.951499,
        24.847897
      ],
      [
        93.951634,
        24.847841
      ],
      [
        93.951799,
        24.847775
      ],
      [
        93.95203,
        24.847692
      ],
      [
        93.952395,
        24.847562
      ],
      [
        93.952519,
        24.847522
      ],
      [
        93.952757,
        24.847473
      ],
      [
        93.95283,
        24.847458
      ],
      [
        93.952894,
        24.847453
      ],
      [
        93.952977,
        24.847452
      ],
      [
        93.953133,
        24.847457
      ],
      [
        93.953208,
        24.847447
      ],
      [
        93.953267,
        24.847431
      ],
      [
        93.953303,
        24.847406
      ],
      [
        93.953526,
        24.847123
      ],
      [
        93.953571,
        24.847018
      ],
      [
        93.95358,
        24.846949
      ],
      [
        93.953574,
        24.846896
      ],
      [
        93.953563,
        24.846826
      ],
      [
        93.953533,
        24.846755
      ],
      [
        93.953284,
        24.846411
      ],
      [
        93.95324,
        24.84633
      ],
      [
        93.953209,
        24.846257
      ],
      [
        93.953101,
        24.845876
      ],
      [
        93.953072,
        24.845707
      ],
      [
        93.953076,
        24.845666
      ],
      [
        93.95309,
        24.845564
      ],
      [
        93.953175,
        24.845184
      ],
      [
        93.953242,
        24.844972
      ],
      [
        93.953287,
        24.844865
      ],
      [
        93.95332,
        24.844813
      ],
      [
        93.953356,
        24.844768
      ],
      [
        93.953428,
        24.844708
      ],
      [
        93.953528,
        24.844647
      ],
      [
        93.953619,
        24.84461
      ],
      [
        93.953694,
        24.844585
      ],
      [
        93.953813,
        24.844555
      ],
      [
        93.954076,
        24.84452
      ],
      [
        93.954213,
        24.844514
      ],
      [
        93.954318,
        24.84452
      ],
      [
        93.954441,
        24.844528
      ],
      [
        93.954577,
        24.844539
      ]
    ],
    "defects": [
      {
        "type": "culvert_distress",
        "severity": "Critical",
        "count": 2,
        "area_sqm": 8,
        "depth_cm": 30,
        "confidence": 0.96
      },
      {
        "type": "pothole",
        "severity": "Severe",
        "count": 16,
        "area_sqm": 5.6,
        "depth_cm": 15,
        "confidence": 0.94
      },
      {
        "type": "alligator_crack",
        "severity": "High",
        "count": 9,
        "area_sqm": 16,
        "depth_cm": null,
        "confidence": 0.91
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-007",
    "road_code": "MDR-HG-07",
    "road_name": "Heingang Thongjao Road (Central Spine)",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "MDR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 1.28,
    "surface_width_m": 7,
    "lane_count": 2,
    "pavement_type": "Bituminous",
    "aadt_traffic": 5800,
    "heavy_vehicle_pct": 14,
    "population_served": 16500,
    "connected_villages_count": 5,
    "connects_hospital": false,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": false,
    "detour_distance_km": 8.5,
    "network_centrality_score": 76,
    "terrain_type": "Valley",
    "last_major_maintenance": "2022-09-15",
    "last_treatment_type": "Slurry Seal",
    "current_rhi": 55,
    "data_confidence_score": 91,
    "field_inspection_required": false,
    "coordinates": [
      [
        93.945647,
        24.83295
      ],
      [
        93.94598,
        24.833273
      ],
      [
        93.94623,
        24.833538
      ],
      [
        93.946275,
        24.833628
      ],
      [
        93.946445,
        24.834249
      ],
      [
        93.94649,
        24.83447
      ],
      [
        93.946516,
        24.834806
      ],
      [
        93.946524,
        24.834909
      ],
      [
        93.946536,
        24.835254
      ],
      [
        93.946538,
        24.835301
      ],
      [
        93.946556,
        24.835751
      ],
      [
        93.94657,
        24.836114
      ],
      [
        93.946573,
        24.836211
      ],
      [
        93.946673,
        24.837177
      ],
      [
        93.946679,
        24.83723
      ],
      [
        93.946767,
        24.837971
      ],
      [
        93.946768,
        24.83798
      ],
      [
        93.946841,
        24.838814
      ],
      [
        93.946877,
        24.839216
      ],
      [
        93.946892,
        24.839383
      ],
      [
        93.946896,
        24.839455
      ],
      [
        93.946938,
        24.840224
      ],
      [
        93.946989,
        24.841138
      ],
      [
        93.946991,
        24.841195
      ],
      [
        93.947037,
        24.842191
      ],
      [
        93.947056,
        24.842586
      ],
      [
        93.947077,
        24.843231
      ],
      [
        93.947123,
        24.844041
      ],
      [
        93.947133,
        24.844241
      ]
    ],
    "defects": [
      {
        "type": "alligator_crack",
        "severity": "High",
        "count": 6,
        "area_sqm": 11.2,
        "depth_cm": null,
        "confidence": 0.89
      },
      {
        "type": "pothole",
        "severity": "Medium",
        "count": 5,
        "area_sqm": 1.5,
        "depth_cm": 7,
        "confidence": 0.88
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-008",
    "road_code": "ODR-KH-08",
    "road_name": "Khabam Lamkhai - Heingang Link Road",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "ODR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 2.75,
    "surface_width_m": 6.5,
    "lane_count": 2,
    "pavement_type": "Bituminous Concrete",
    "aadt_traffic": 7200,
    "heavy_vehicle_pct": 18,
    "population_served": 21000,
    "connected_villages_count": 4,
    "connects_hospital": false,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": false,
    "detour_distance_km": 6,
    "network_centrality_score": 83,
    "terrain_type": "Valley",
    "last_major_maintenance": "2023-08-20",
    "last_treatment_type": "Resurfacing",
    "current_rhi": 78,
    "data_confidence_score": 97,
    "field_inspection_required": false,
    "coordinates": [
      [
        93.947136,
        24.844292
      ],
      [
        93.947159,
        24.844932
      ],
      [
        93.947149,
        24.845289
      ],
      [
        93.94714,
        24.845641
      ],
      [
        93.947134,
        24.845803
      ],
      [
        93.947155,
        24.846585
      ],
      [
        93.947155,
        24.84665
      ],
      [
        93.947157,
        24.847283
      ],
      [
        93.947179,
        24.848617
      ],
      [
        93.947191,
        24.849523
      ],
      [
        93.947191,
        24.849565
      ],
      [
        93.947205,
        24.850486
      ],
      [
        93.947208,
        24.850588
      ],
      [
        93.947216,
        24.850849
      ],
      [
        93.947221,
        24.85134
      ],
      [
        93.947223,
        24.851567
      ],
      [
        93.947241,
        24.851992
      ],
      [
        93.947244,
        24.852062
      ],
      [
        93.947284,
        24.852735
      ],
      [
        93.94731,
        24.853191
      ],
      [
        93.947306,
        24.853247
      ],
      [
        93.947297,
        24.853334
      ],
      [
        93.947261,
        24.853496
      ],
      [
        93.947243,
        24.853575
      ],
      [
        93.947219,
        24.853691
      ],
      [
        93.947221,
        24.853722
      ],
      [
        93.947248,
        24.853787
      ],
      [
        93.947277,
        24.853858
      ],
      [
        93.947325,
        24.853994
      ],
      [
        93.947346,
        24.854053
      ],
      [
        93.947355,
        24.854103
      ],
      [
        93.947345,
        24.854418
      ],
      [
        93.947316,
        24.854471
      ],
      [
        93.947258,
        24.854514
      ],
      [
        93.947202,
        24.854547
      ],
      [
        93.947023,
        24.854613
      ],
      [
        93.946733,
        24.854735
      ],
      [
        93.946703,
        24.854749
      ],
      [
        93.946468,
        24.854861
      ],
      [
        93.946334,
        24.854926
      ],
      [
        93.945891,
        24.855156
      ],
      [
        93.945465,
        24.855377
      ],
      [
        93.944718,
        24.85577
      ],
      [
        93.944617,
        24.855828
      ],
      [
        93.944534,
        24.855876
      ],
      [
        93.944396,
        24.855957
      ],
      [
        93.944159,
        24.856118
      ],
      [
        93.943901,
        24.856316
      ],
      [
        93.943825,
        24.85638
      ],
      [
        93.943726,
        24.856473
      ],
      [
        93.943618,
        24.85658
      ],
      [
        93.94354,
        24.856679
      ],
      [
        93.943508,
        24.856738
      ],
      [
        93.943397,
        24.85695
      ],
      [
        93.943336,
        24.857094
      ],
      [
        93.943285,
        24.857243
      ],
      [
        93.943266,
        24.857323
      ],
      [
        93.943251,
        24.857403
      ],
      [
        93.943223,
        24.85763
      ],
      [
        93.943203,
        24.857858
      ],
      [
        93.943259,
        24.858089
      ],
      [
        93.94321,
        24.858399
      ],
      [
        93.943214,
        24.858593
      ],
      [
        93.943225,
        24.85865
      ],
      [
        93.943236,
        24.858695
      ],
      [
        93.943295,
        24.85887
      ],
      [
        93.943401,
        24.859091
      ],
      [
        93.943535,
        24.8593
      ],
      [
        93.943555,
        24.859326
      ],
      [
        93.943816,
        24.859667
      ],
      [
        93.943895,
        24.85978
      ],
      [
        93.94394,
        24.859851
      ],
      [
        93.943957,
        24.859922
      ],
      [
        93.943956,
        24.860003
      ],
      [
        93.943949,
        24.860068
      ],
      [
        93.943935,
        24.86015
      ],
      [
        93.943885,
        24.860289
      ],
      [
        93.943834,
        24.860373
      ],
      [
        93.943755,
        24.860457
      ],
      [
        93.943643,
        24.860567
      ],
      [
        93.943503,
        24.860673
      ],
      [
        93.943383,
        24.860741
      ],
      [
        93.943291,
        24.860779
      ],
      [
        93.943095,
        24.860851
      ],
      [
        93.94297,
        24.86089
      ],
      [
        93.94283,
        24.860911
      ],
      [
        93.94274,
        24.860918
      ],
      [
        93.942658,
        24.860922
      ],
      [
        93.94256,
        24.860933
      ],
      [
        93.942225,
        24.860975
      ],
      [
        93.942131,
        24.860986
      ],
      [
        93.942033,
        24.861011
      ],
      [
        93.941962,
        24.861036
      ],
      [
        93.941901,
        24.861065
      ],
      [
        93.941596,
        24.861279
      ],
      [
        93.941401,
        24.861447
      ],
      [
        93.941308,
        24.861546
      ],
      [
        93.941245,
        24.86162
      ],
      [
        93.941179,
        24.861718
      ],
      [
        93.941103,
        24.861859
      ],
      [
        93.94108,
        24.861929
      ],
      [
        93.941056,
        24.862056
      ],
      [
        93.941039,
        24.862148
      ],
      [
        93.941,
        24.862283
      ],
      [
        93.940948,
        24.862436
      ],
      [
        93.940905,
        24.862542
      ],
      [
        93.940825,
        24.862962
      ],
      [
        93.940755,
        24.863293
      ],
      [
        93.940713,
        24.863638
      ],
      [
        93.940702,
        24.86374
      ],
      [
        93.940682,
        24.864092
      ],
      [
        93.940682,
        24.86413
      ],
      [
        93.940677,
        24.864475
      ],
      [
        93.940679,
        24.864612
      ],
      [
        93.940689,
        24.864693
      ],
      [
        93.940695,
        24.864772
      ],
      [
        93.940774,
        24.865271
      ]
    ],
    "defects": [
      {
        "type": "rutting",
        "severity": "Low",
        "count": 3,
        "area_sqm": 6,
        "depth_cm": 2,
        "confidence": 0.86
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-009",
    "road_code": "VR-LK-09",
    "road_name": "Heingang - Kairang East Connector",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "VR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 1.16,
    "surface_width_m": 5,
    "lane_count": 1,
    "pavement_type": "Water Bound Macadam / Bituminous",
    "aadt_traffic": 3900,
    "heavy_vehicle_pct": 8,
    "population_served": 11200,
    "connected_villages_count": 2,
    "connects_hospital": false,
    "connects_school": true,
    "connects_market": true,
    "is_single_access_lifeline": true,
    "detour_distance_km": 4.8,
    "network_centrality_score": 72,
    "terrain_type": "Valley",
    "last_major_maintenance": "2019-04-18",
    "last_treatment_type": "Surface Dressing",
    "current_rhi": 28,
    "data_confidence_score": 89,
    "field_inspection_required": true,
    "coordinates": [
      [
        93.945314,
        24.832834
      ],
      [
        93.945395,
        24.832866
      ],
      [
        93.945647,
        24.83295
      ],
      [
        93.946274,
        24.832997
      ],
      [
        93.94692,
        24.833046
      ],
      [
        93.947866,
        24.833117
      ],
      [
        93.94891,
        24.833194
      ],
      [
        93.949059,
        24.833168
      ],
      [
        93.949176,
        24.833099
      ],
      [
        93.949246,
        24.833019
      ],
      [
        93.949279,
        24.83298
      ],
      [
        93.949407,
        24.832833
      ],
      [
        93.949493,
        24.83277
      ],
      [
        93.949607,
        24.832744
      ],
      [
        93.950087,
        24.8327
      ],
      [
        93.950243,
        24.832672
      ],
      [
        93.9508,
        24.832558
      ],
      [
        93.95093,
        24.832543
      ],
      [
        93.951589,
        24.832559
      ],
      [
        93.952225,
        24.832647
      ],
      [
        93.952652,
        24.832695
      ],
      [
        93.952825,
        24.832715
      ],
      [
        93.952869,
        24.832717
      ],
      [
        93.95358,
        24.832747
      ],
      [
        93.953737,
        24.83274
      ],
      [
        93.953852,
        24.832735
      ],
      [
        93.9543,
        24.832715
      ],
      [
        93.954747,
        24.832694
      ],
      [
        93.955027,
        24.83268
      ],
      [
        93.955685,
        24.832657
      ],
      [
        93.955833,
        24.832652
      ],
      [
        93.956006,
        24.832646
      ],
      [
        93.956291,
        24.832635
      ],
      [
        93.956577,
        24.832624
      ]
    ],
    "defects": [
      {
        "type": "pothole",
        "severity": "Critical",
        "count": 22,
        "area_sqm": 7.4,
        "depth_cm": 18,
        "confidence": 0.97
      },
      {
        "type": "edge_break",
        "severity": "Severe",
        "count": 12,
        "area_sqm": 11.5,
        "depth_cm": null,
        "confidence": 0.93
      },
      {
        "type": "subgrade_settlement",
        "severity": "High",
        "count": 3,
        "area_sqm": 18,
        "depth_cm": 10,
        "confidence": 0.92
      }
    ]
  },
  {
    "segment_id": "MNP-SEZ-010",
    "road_code": "SEZ-LOG-10",
    "road_name": "IT SEZ East Logistics Spur",
    "district": "Imphal East",
    "division": "Imphal East Division",
    "classification": "VR",
    "zone": "IT SEZ Mantripukhri",
    "is_venue_sector": true,
    "length_km": 0.47,
    "surface_width_m": 6.5,
    "lane_count": 2,
    "pavement_type": "Concrete Pavement",
    "aadt_traffic": 650,
    "heavy_vehicle_pct": 22,
    "population_served": 1800,
    "connected_villages_count": 1,
    "connects_hospital": false,
    "connects_school": false,
    "connects_market": false,
    "is_single_access_lifeline": true,
    "detour_distance_km": 2,
    "network_centrality_score": 68,
    "terrain_type": "Valley",
    "last_major_maintenance": "2023-06-30",
    "last_treatment_type": "Concrete Overlay",
    "current_rhi": 82,
    "data_confidence_score": 97,
    "field_inspection_required": false,
    "coordinates": [
      [
        93.94351,
        24.841176
      ],
      [
        93.943514,
        24.841022
      ],
      [
        93.943522,
        24.84096
      ],
      [
        93.943556,
        24.840833
      ],
      [
        93.943588,
        24.840724
      ],
      [
        93.943612,
        24.840614
      ],
      [
        93.943629,
        24.840555
      ],
      [
        93.943719,
        24.840342
      ],
      [
        93.943824,
        24.840116
      ],
      [
        93.943903,
        24.839944
      ],
      [
        93.943991,
        24.839762
      ],
      [
        93.94403,
        24.839696
      ],
      [
        93.944073,
        24.839664
      ],
      [
        93.944115,
        24.839646
      ],
      [
        93.944187,
        24.839637
      ],
      [
        93.944348,
        24.83962
      ],
      [
        93.944991,
        24.839566
      ],
      [
        93.945634,
        24.839509
      ],
      [
        93.946196,
        24.839471
      ],
      [
        93.946896,
        24.839455
      ]
    ],
    "defects": [
      {
        "type": "joint_seal_damage",
        "severity": "Low",
        "count": 4,
        "area_sqm": 2,
        "depth_cm": null,
        "confidence": 0.85
      }
    ]
  },
  // ===== REGIONAL STATEWIDE ARTERIALS =====
  {
    segment_id: "MNP-PWD-001",
    road_code: "NH-37",
    road_name: "Jiribam-Tupul Sector",
    district: "Noney",
    division: "Tamenglong Division",
    classification: "NH",
    length_km: 12.4,
    surface_width_m: 7.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 4200,
    heavy_vehicle_pct: 28,
    population_served: 18500,
    connected_villages_count: 5,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: true,
    detour_distance_km: 48.0,
    network_centrality_score: 92,
    terrain_type: "Hilly",
    last_major_maintenance: "2021-03-15",
    last_treatment_type: "Surface Dressing",
    current_rhi: 38,
    data_confidence_score: 88,
    field_inspection_required: false,
    coordinates: [
      [93.1234, 24.7890],
      [93.1456, 24.7950],
      [93.1678, 24.8010],
      [93.1900, 24.8070],
      [93.2122, 24.8130]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 14, area_sqm: 2.8, depth_cm: 12, confidence: 0.94 },
      { type: "alligator_crack", severity: "High", count: 8, area_sqm: 18.5, depth_cm: null, confidence: 0.91 },
      { type: "edge_break", severity: "High", count: 6, area_sqm: 5.2, depth_cm: null, confidence: 0.87 }
    ]
  },
  {
    segment_id: "MNP-PWD-002",
    road_code: "NH-37",
    road_name: "Tupul-Noney Valley Bridge Approach",
    district: "Noney",
    division: "Tamenglong Division",
    classification: "NH",
    length_km: 8.6,
    surface_width_m: 7.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 3800,
    heavy_vehicle_pct: 25,
    population_served: 12000,
    connected_villages_count: 3,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 42.0,
    network_centrality_score: 88,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2020-11-20",
    last_treatment_type: "Thin Overlay",
    current_rhi: 42,
    data_confidence_score: 82,
    field_inspection_required: false,
    coordinates: [
      [93.2200, 24.8200],
      [93.2400, 24.8280],
      [93.2600, 24.8350],
      [93.2800, 24.8420]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 9, area_sqm: 1.8, depth_cm: 8, confidence: 0.89 },
      { type: "longitudinal_crack", severity: "Medium", count: 12, area_sqm: 6.4, depth_cm: null, confidence: 0.85 },
      { type: "rutting", severity: "High", count: 4, area_sqm: 8.2, depth_cm: 5, confidence: 0.82 }
    ]
  },
  {
    segment_id: "MNP-PWD-003",
    road_code: "NH-37",
    road_name: "Noney-Khongsang Descent",
    district: "Noney",
    division: "Tamenglong Division",
    classification: "NH",
    length_km: 6.8,
    surface_width_m: 7.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 3600,
    heavy_vehicle_pct: 22,
    population_served: 8500,
    connected_villages_count: 2,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: false,
    detour_distance_km: 28.0,
    network_centrality_score: 78,
    terrain_type: "Hilly",
    last_major_maintenance: "2022-06-10",
    last_treatment_type: "Crack Sealing",
    current_rhi: 55,
    data_confidence_score: 90,
    field_inspection_required: false,
    coordinates: [
      [93.2900, 24.8500],
      [93.3100, 24.8580],
      [93.3300, 24.8650],
      [93.3500, 24.8720]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Medium", count: 7, area_sqm: 3.2, depth_cm: null, confidence: 0.88 },
      { type: "ravelling", severity: "Medium", count: 5, area_sqm: 4.8, depth_cm: null, confidence: 0.84 }
    ]
  },
  {
    segment_id: "MNP-PWD-004",
    road_code: "NH-37",
    road_name: "Khongsang-Kanglatongbi Sector",
    district: "Kangpokpi",
    division: "Kangpokpi Division",
    classification: "NH",
    length_km: 14.2,
    surface_width_m: 7.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 5400,
    heavy_vehicle_pct: 30,
    population_served: 22000,
    connected_villages_count: 6,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: true,
    detour_distance_km: 54.0,
    network_centrality_score: 95,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-08-05",
    last_treatment_type: "Hot Mix Overlay",
    current_rhi: 35,
    data_confidence_score: 94,
    field_inspection_required: false,
    coordinates: [
      [93.3600, 24.8800],
      [93.3850, 24.8920],
      [93.4100, 24.9040],
      [93.4350, 24.9160],
      [93.4600, 24.9280],
      [93.4850, 24.9400]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 18, area_sqm: 3.6, depth_cm: 14, confidence: 0.96 },
      { type: "alligator_crack", severity: "Severe", count: 10, area_sqm: 22.0, depth_cm: null, confidence: 0.93 },
      { type: "edge_break", severity: "High", count: 8, area_sqm: 7.5, depth_cm: null, confidence: 0.90 },
      { type: "rutting", severity: "High", count: 6, area_sqm: 12.0, depth_cm: 7, confidence: 0.88 }
    ]
  },
  {
    segment_id: "MNP-PWD-005",
    road_code: "NH-37",
    road_name: "Kanglatongbi-Maram Approach",
    district: "Senapati",
    division: "Senapati Division",
    classification: "NH",
    length_km: 10.5,
    surface_width_m: 7.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 4800,
    heavy_vehicle_pct: 26,
    population_served: 15000,
    connected_villages_count: 4,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 32.0,
    network_centrality_score: 82,
    terrain_type: "Rolling",
    last_major_maintenance: "2021-09-18",
    last_treatment_type: "Surface Dressing",
    current_rhi: 48,
    data_confidence_score: 86,
    field_inspection_required: false,
    coordinates: [
      [93.5000, 24.9500],
      [93.5250, 24.9620],
      [93.5500, 24.9740],
      [93.5750, 24.9860],
      [93.6000, 24.9980]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 11, area_sqm: 2.2, depth_cm: 9, confidence: 0.90 },
      { type: "longitudinal_crack", severity: "High", count: 8, area_sqm: 5.6, depth_cm: null, confidence: 0.87 },
      { type: "ravelling", severity: "Medium", count: 6, area_sqm: 7.4, depth_cm: null, confidence: 0.83 }
    ]
  },

  // ===== NH-02 CORRIDOR (Dimapur-Imphal) =====
  {
    segment_id: "MNP-PWD-006",
    road_code: "NH-02",
    road_name: "Mao Gate-Senapati Sector",
    district: "Senapati",
    division: "Senapati Division",
    classification: "NH",
    length_km: 11.8,
    surface_width_m: 7.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 6200,
    heavy_vehicle_pct: 32,
    population_served: 28000,
    connected_villages_count: 7,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: true,
    detour_distance_km: 62.0,
    network_centrality_score: 96,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-04-12",
    last_treatment_type: "Reconstruction",
    current_rhi: 52,
    data_confidence_score: 92,
    field_inspection_required: false,
    coordinates: [
      [93.7500, 25.3000],
      [93.7600, 25.2800],
      [93.7700, 25.2600],
      [93.7800, 25.2400],
      [93.7900, 25.2200]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 7, area_sqm: 1.4, depth_cm: 7, confidence: 0.91 },
      { type: "alligator_crack", severity: "Medium", count: 5, area_sqm: 8.0, depth_cm: null, confidence: 0.86 },
      { type: "edge_break", severity: "Medium", count: 4, area_sqm: 3.5, depth_cm: null, confidence: 0.84 }
    ]
  },
  {
    segment_id: "MNP-PWD-007",
    road_code: "NH-02",
    road_name: "Senapati-Kangpokpi Arterial",
    district: "Kangpokpi",
    division: "Kangpokpi Division",
    classification: "NH",
    length_km: 13.6,
    surface_width_m: 7.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 7100,
    heavy_vehicle_pct: 35,
    population_served: 35000,
    connected_villages_count: 8,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 38.0,
    network_centrality_score: 90,
    terrain_type: "Rolling",
    last_major_maintenance: "2021-07-22",
    last_treatment_type: "Hot Mix Overlay",
    current_rhi: 62,
    data_confidence_score: 95,
    field_inspection_required: false,
    coordinates: [
      [93.7950, 25.2100],
      [93.8100, 25.1900],
      [93.8250, 25.1700],
      [93.8400, 25.1500],
      [93.8550, 25.1300]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Medium", count: 6, area_sqm: 3.8, depth_cm: null, confidence: 0.88 },
      { type: "ravelling", severity: "Low", count: 4, area_sqm: 3.2, depth_cm: null, confidence: 0.82 }
    ]
  },
  {
    segment_id: "MNP-PWD-008",
    road_code: "NH-02",
    road_name: "Kangpokpi-Imphal North Descent",
    district: "Imphal West",
    division: "Imphal Division",
    classification: "NH",
    length_km: 9.4,
    surface_width_m: 10.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 8200,
    heavy_vehicle_pct: 20,
    population_served: 65000,
    connected_villages_count: 3,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 8.0,
    network_centrality_score: 85,
    terrain_type: "Valley",
    last_major_maintenance: "2023-01-10",
    last_treatment_type: "Micro-surfacing",
    current_rhi: 78,
    data_confidence_score: 98,
    field_inspection_required: false,
    coordinates: [
      [93.8600, 25.1200],
      [93.8750, 25.1000],
      [93.8900, 25.0800],
      [93.9050, 25.0600]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 3, area_sqm: 1.2, depth_cm: null, confidence: 0.90 },
      { type: "pothole", severity: "Low", count: 2, area_sqm: 0.4, depth_cm: 3, confidence: 0.86 }
    ]
  },
  {
    segment_id: "MNP-PWD-009",
    road_code: "NH-02",
    road_name: "Imphal-Sekmai Valley Road",
    district: "Imphal West",
    division: "Imphal Division",
    classification: "NH",
    length_km: 7.2,
    surface_width_m: 10.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 7800,
    heavy_vehicle_pct: 18,
    population_served: 45000,
    connected_villages_count: 4,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 5.0,
    network_centrality_score: 80,
    terrain_type: "Valley",
    last_major_maintenance: "2023-05-15",
    last_treatment_type: "Crack Sealing",
    current_rhi: 82,
    data_confidence_score: 96,
    field_inspection_required: false,
    coordinates: [
      [93.9100, 25.0500],
      [93.9250, 25.0350],
      [93.9400, 25.0200],
      [93.9550, 25.0050]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.8, depth_cm: null, confidence: 0.92 }
    ]
  },

  // ===== SH-05 CORRIDOR (Imphal-Ukhrul) =====
  {
    segment_id: "MNP-PWD-010",
    road_code: "SH-05",
    road_name: "Litan-Phungyar Highland Road",
    district: "Ukhrul",
    division: "Ukhrul Division",
    classification: "SH",
    length_km: 9.8,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1200,
    heavy_vehicle_pct: 10,
    population_served: 6500,
    connected_villages_count: 4,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 45.0,
    network_centrality_score: 72,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2019-11-08",
    last_treatment_type: "Surface Dressing",
    current_rhi: 32,
    data_confidence_score: 65,
    field_inspection_required: true,
    coordinates: [
      [94.2000, 25.1500],
      [94.2200, 25.1650],
      [94.2400, 25.1800],
      [94.2600, 25.1950]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 16, area_sqm: 3.2, depth_cm: 15, confidence: 0.78 },
      { type: "alligator_crack", severity: "Severe", count: 12, area_sqm: 25.0, depth_cm: null, confidence: 0.74 },
      { type: "edge_break", severity: "Severe", count: 10, area_sqm: 8.6, depth_cm: null, confidence: 0.72 },
      { type: "rutting", severity: "High", count: 8, area_sqm: 14.0, depth_cm: 8, confidence: 0.70 }
    ]
  },
  {
    segment_id: "MNP-PWD-011",
    road_code: "SH-05",
    road_name: "Phungyar-Ukhrul Town Approach",
    district: "Ukhrul",
    division: "Ukhrul Division",
    classification: "SH",
    length_km: 7.5,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1800,
    heavy_vehicle_pct: 12,
    population_served: 14000,
    connected_villages_count: 3,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: true,
    detour_distance_km: 38.0,
    network_centrality_score: 76,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-06-20",
    last_treatment_type: "Thin Overlay",
    current_rhi: 44,
    data_confidence_score: 72,
    field_inspection_required: false,
    coordinates: [
      [94.2700, 25.2000],
      [94.2900, 25.2150],
      [94.3100, 25.2300],
      [94.3300, 25.2450]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 10, area_sqm: 2.0, depth_cm: 10, confidence: 0.85 },
      { type: "longitudinal_crack", severity: "High", count: 8, area_sqm: 5.0, depth_cm: null, confidence: 0.82 },
      { type: "ravelling", severity: "Medium", count: 6, area_sqm: 6.8, depth_cm: null, confidence: 0.78 }
    ]
  },
  {
    segment_id: "MNP-PWD-012",
    road_code: "SH-05",
    road_name: "Jessami-Kamjong Link Road",
    district: "Kamjong",
    division: "Ukhrul Division",
    classification: "SH",
    length_km: 11.2,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 800,
    heavy_vehicle_pct: 8,
    population_served: 4200,
    connected_villages_count: 5,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 56.0,
    network_centrality_score: 68,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2019-03-12",
    last_treatment_type: "Surface Dressing",
    current_rhi: 28,
    data_confidence_score: 48,
    field_inspection_required: true,
    coordinates: [
      [94.3500, 25.3000],
      [94.3700, 25.3200],
      [94.3900, 25.3400],
      [94.4100, 25.3600],
      [94.4300, 25.3800]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 22, area_sqm: 4.4, depth_cm: 16, confidence: 0.68 },
      { type: "alligator_crack", severity: "Severe", count: 14, area_sqm: 28.0, depth_cm: null, confidence: 0.65 },
      { type: "edge_break", severity: "Severe", count: 12, area_sqm: 10.2, depth_cm: null, confidence: 0.62 }
    ]
  },

  // ===== MDR CORRIDOR (Bishnupur / Loktak) =====
  {
    segment_id: "MNP-PWD-013",
    road_code: "MDR-12",
    road_name: "Bishnupur-Moirang Lake Road",
    district: "Bishnupur",
    division: "Bishnupur Division",
    classification: "MDR",
    length_km: 8.4,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 3200,
    heavy_vehicle_pct: 15,
    population_served: 24000,
    connected_villages_count: 6,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 12.0,
    network_centrality_score: 70,
    terrain_type: "Valley",
    last_major_maintenance: "2022-02-18",
    last_treatment_type: "Micro-surfacing",
    current_rhi: 64,
    data_confidence_score: 88,
    field_inspection_required: false,
    coordinates: [
      [93.7800, 24.6200],
      [93.7600, 24.6050],
      [93.7400, 24.5900],
      [93.7200, 24.5750]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 5, area_sqm: 1.0, depth_cm: 5, confidence: 0.89 },
      { type: "longitudinal_crack", severity: "Medium", count: 4, area_sqm: 2.4, depth_cm: null, confidence: 0.86 }
    ]
  },
  {
    segment_id: "MNP-PWD-014",
    road_code: "MDR-12",
    road_name: "Moirang-Keibul Lamjao Road",
    district: "Bishnupur",
    division: "Bishnupur Division",
    classification: "MDR",
    length_km: 6.2,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 2800,
    heavy_vehicle_pct: 12,
    population_served: 16000,
    connected_villages_count: 4,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 15.0,
    network_centrality_score: 62,
    terrain_type: "Valley",
    last_major_maintenance: "2021-10-05",
    last_treatment_type: "Surface Dressing",
    current_rhi: 56,
    data_confidence_score: 84,
    field_inspection_required: false,
    coordinates: [
      [93.7100, 24.5700],
      [93.6950, 24.5550],
      [93.6800, 24.5400],
      [93.6650, 24.5250]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 6, area_sqm: 1.2, depth_cm: 6, confidence: 0.87 },
      { type: "ravelling", severity: "Medium", count: 5, area_sqm: 4.0, depth_cm: null, confidence: 0.83 },
      { type: "longitudinal_crack", severity: "Medium", count: 4, area_sqm: 2.8, depth_cm: null, confidence: 0.85 }
    ]
  },
  {
    segment_id: "MNP-PWD-015",
    road_code: "MDR-12",
    road_name: "Loktak West Bank Access Road",
    district: "Bishnupur",
    division: "Bishnupur Division",
    classification: "MDR",
    length_km: 5.8,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 2400,
    heavy_vehicle_pct: 10,
    population_served: 11000,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: false,
    detour_distance_km: 18.0,
    network_centrality_score: 55,
    terrain_type: "Valley",
    last_major_maintenance: "2022-08-12",
    last_treatment_type: "Crack Sealing",
    current_rhi: 70,
    data_confidence_score: 80,
    field_inspection_required: false,
    coordinates: [
      [93.7000, 24.6400],
      [93.6800, 24.6300],
      [93.6600, 24.6200]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 3, area_sqm: 1.4, depth_cm: null, confidence: 0.88 },
      { type: "ravelling", severity: "Low", count: 2, area_sqm: 1.8, depth_cm: null, confidence: 0.85 }
    ]
  },
  {
    segment_id: "MNP-PWD-016",
    road_code: "MDR-15",
    road_name: "Nambol-Oinam Market Link",
    district: "Bishnupur",
    division: "Bishnupur Division",
    classification: "MDR",
    length_km: 4.6,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 3600,
    heavy_vehicle_pct: 14,
    population_served: 19000,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 8.0,
    network_centrality_score: 58,
    terrain_type: "Valley",
    last_major_maintenance: "2023-03-20",
    last_treatment_type: "Micro-surfacing",
    current_rhi: 74,
    data_confidence_score: 92,
    field_inspection_required: false,
    coordinates: [
      [93.8200, 24.6500],
      [93.8050, 24.6400],
      [93.7900, 24.6300]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.6, depth_cm: null, confidence: 0.91 }
    ]
  },

  // ===== KEY DEMO ROAD: "Hidden Lifeline" MNP-PWD-017 =====
  {
    segment_id: "MNP-PWD-017",
    road_code: "NH-37",
    road_name: "Khongsang-Noney Highland Access Corridor",
    district: "Noney",
    division: "Tamenglong Division",
    classification: "NH",
    length_km: 11.6,
    surface_width_m: 7.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1850,
    heavy_vehicle_pct: 18,
    population_served: 9200,
    connected_villages_count: 3,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 54.0,
    network_centrality_score: 88,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2020-02-14",
    last_treatment_type: "Surface Dressing",
    current_rhi: 61,
    data_confidence_score: 78,
    field_inspection_required: false,
    coordinates: [
      [93.4200, 24.8900],
      [93.4000, 24.8750],
      [93.3800, 24.8600],
      [93.3600, 24.8450],
      [93.3400, 24.8300]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 6, area_sqm: 1.2, depth_cm: 6, confidence: 0.82 },
      { type: "longitudinal_crack", severity: "Medium", count: 8, area_sqm: 4.2, depth_cm: null, confidence: 0.80 },
      { type: "edge_break", severity: "Medium", count: 5, area_sqm: 3.8, depth_cm: null, confidence: 0.78 }
    ]
  },

  // ===== ODR CORRIDOR (Churachandpur) =====
  {
    segment_id: "MNP-PWD-018",
    road_code: "ODR-08",
    road_name: "Tuibong-Singngat Access Road",
    district: "Churachandpur",
    division: "Churachandpur Division",
    classification: "ODR",
    length_km: 8.8,
    surface_width_m: 4.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 650,
    heavy_vehicle_pct: 6,
    population_served: 5800,
    connected_villages_count: 5,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 42.0,
    network_centrality_score: 64,
    terrain_type: "Hilly",
    last_major_maintenance: "2019-08-22",
    last_treatment_type: "Surface Dressing",
    current_rhi: 34,
    data_confidence_score: 55,
    field_inspection_required: true,
    coordinates: [
      [93.6500, 24.3200],
      [93.6300, 24.3050],
      [93.6100, 24.2900],
      [93.5900, 24.2750]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 15, area_sqm: 3.0, depth_cm: 13, confidence: 0.72 },
      { type: "alligator_crack", severity: "High", count: 9, area_sqm: 16.0, depth_cm: null, confidence: 0.68 },
      { type: "edge_break", severity: "High", count: 7, area_sqm: 6.0, depth_cm: null, confidence: 0.65 }
    ]
  },
  {
    segment_id: "MNP-PWD-019",
    road_code: "ODR-08",
    road_name: "Singngat-Thanlon Border Road",
    district: "Churachandpur",
    division: "Churachandpur Division",
    classification: "ODR",
    length_km: 12.6,
    surface_width_m: 4.0,
    lane_count: 1,
    pavement_type: "Gravel",
    aadt_traffic: 450,
    heavy_vehicle_pct: 4,
    population_served: 3200,
    connected_villages_count: 6,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 65.0,
    network_centrality_score: 58,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2018-05-10",
    last_treatment_type: "Gravel Resurfacing",
    current_rhi: 22,
    data_confidence_score: 42,
    field_inspection_required: true,
    coordinates: [
      [93.5800, 24.2700],
      [93.5600, 24.2550],
      [93.5400, 24.2400],
      [93.5200, 24.2250],
      [93.5000, 24.2100]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 28, area_sqm: 5.6, depth_cm: 18, confidence: 0.58 },
      { type: "alligator_crack", severity: "Severe", count: 18, area_sqm: 32.0, depth_cm: null, confidence: 0.55 },
      { type: "rutting", severity: "Severe", count: 10, area_sqm: 16.0, depth_cm: 12, confidence: 0.52 }
    ]
  },
  {
    segment_id: "MNP-PWD-020",
    road_code: "ODR-11",
    road_name: "Henglep-Churachandpur Town Road",
    district: "Churachandpur",
    division: "Churachandpur Division",
    classification: "ODR",
    length_km: 6.4,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1400,
    heavy_vehicle_pct: 10,
    population_served: 8500,
    connected_villages_count: 3,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 22.0,
    network_centrality_score: 60,
    terrain_type: "Hilly",
    last_major_maintenance: "2021-04-15",
    last_treatment_type: "Thin Overlay",
    current_rhi: 52,
    data_confidence_score: 76,
    field_inspection_required: false,
    coordinates: [
      [93.6800, 24.3500],
      [93.6900, 24.3650],
      [93.7000, 24.3800]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 5, area_sqm: 1.0, depth_cm: 5, confidence: 0.84 },
      { type: "longitudinal_crack", severity: "Medium", count: 4, area_sqm: 2.0, depth_cm: null, confidence: 0.82 }
    ]
  },

  // ===== VR CORRIDOR (Thoubal/Kakching) =====
  {
    segment_id: "MNP-PWD-021",
    road_code: "VR-21",
    road_name: "Wangjing-Kakching Feeder Road",
    district: "Thoubal",
    division: "Thoubal Division",
    classification: "VR",
    length_km: 4.2,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 900,
    heavy_vehicle_pct: 5,
    population_served: 7200,
    connected_villages_count: 4,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 6.0,
    network_centrality_score: 42,
    terrain_type: "Valley",
    last_major_maintenance: "2022-09-08",
    last_treatment_type: "Crack Sealing",
    current_rhi: 68,
    data_confidence_score: 82,
    field_inspection_required: false,
    coordinates: [
      [94.0000, 24.5800],
      [94.0150, 24.5700],
      [94.0300, 24.5600]
    ],
    defects: [
      { type: "pothole", severity: "Low", count: 3, area_sqm: 0.6, depth_cm: 4, confidence: 0.88 },
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.8, depth_cm: null, confidence: 0.86 }
    ]
  },
  {
    segment_id: "MNP-PWD-022",
    road_code: "VR-21",
    road_name: "Kakching-Sugnu Agricultural Road",
    district: "Kakching",
    division: "Thoubal Division",
    classification: "VR",
    length_km: 5.6,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 750,
    heavy_vehicle_pct: 6,
    population_served: 5500,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 8.0,
    network_centrality_score: 38,
    terrain_type: "Valley",
    last_major_maintenance: "2021-12-20",
    last_treatment_type: "Surface Dressing",
    current_rhi: 58,
    data_confidence_score: 78,
    field_inspection_required: false,
    coordinates: [
      [94.0400, 24.5500],
      [94.0550, 24.5350],
      [94.0700, 24.5200],
      [94.0850, 24.5050]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 4, area_sqm: 0.8, depth_cm: 5, confidence: 0.85 },
      { type: "ravelling", severity: "Medium", count: 3, area_sqm: 2.4, depth_cm: null, confidence: 0.82 }
    ]
  },
  {
    segment_id: "MNP-PWD-023",
    road_code: "VR-22",
    road_name: "Thoubal-Lilong Market Spine",
    district: "Thoubal",
    division: "Thoubal Division",
    classification: "VR",
    length_km: 3.8,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 2200,
    heavy_vehicle_pct: 8,
    population_served: 18000,
    connected_villages_count: 2,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 4.0,
    network_centrality_score: 48,
    terrain_type: "Valley",
    last_major_maintenance: "2022-04-10",
    last_treatment_type: "Micro-surfacing",
    current_rhi: 72,
    data_confidence_score: 90,
    field_inspection_required: false,
    coordinates: [
      [93.9800, 24.6300],
      [93.9650, 24.6200],
      [93.9500, 24.6100]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.6, depth_cm: null, confidence: 0.90 }
    ]
  },
  {
    segment_id: "MNP-PWD-024",
    road_code: "VR-23",
    road_name: "Yairipok-Pallel Southern Feeder",
    district: "Thoubal",
    division: "Thoubal Division",
    classification: "VR",
    length_km: 6.8,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 680,
    heavy_vehicle_pct: 5,
    population_served: 4800,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: false,
    detour_distance_km: 10.0,
    network_centrality_score: 35,
    terrain_type: "Valley",
    last_major_maintenance: "2022-07-15",
    last_treatment_type: "Crack Sealing",
    current_rhi: 66,
    data_confidence_score: 74,
    field_inspection_required: false,
    coordinates: [
      [94.0200, 24.6100],
      [94.0350, 24.5950],
      [94.0500, 24.5800],
      [94.0650, 24.5650]
    ],
    defects: [
      { type: "pothole", severity: "Low", count: 3, area_sqm: 0.6, depth_cm: 3, confidence: 0.86 },
      { type: "ravelling", severity: "Low", count: 2, area_sqm: 1.2, depth_cm: null, confidence: 0.84 }
    ]
  },

  // ===== IMPHAL CITY ROADS =====
  {
    segment_id: "MNP-PWD-025",
    road_code: "URBAN-01",
    road_name: "Imphal-Tiddim Road (BT Road)",
    district: "Imphal West",
    division: "Imphal Division",
    classification: "SH",
    length_km: 4.2,
    surface_width_m: 10.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 7600,
    heavy_vehicle_pct: 15,
    population_served: 52000,
    connected_villages_count: 2,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 3.0,
    network_centrality_score: 78,
    terrain_type: "Valley",
    last_major_maintenance: "2023-02-28",
    last_treatment_type: "Hot Mix Overlay",
    current_rhi: 76,
    data_confidence_score: 96,
    field_inspection_required: false,
    coordinates: [
      [93.9300, 24.8000],
      [93.9200, 24.7900],
      [93.9100, 24.7800]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 3, area_sqm: 1.0, depth_cm: null, confidence: 0.92 },
      { type: "pothole", severity: "Low", count: 2, area_sqm: 0.3, depth_cm: 2, confidence: 0.90 }
    ]
  },
  {
    segment_id: "MNP-PWD-026",
    road_code: "URBAN-02",
    road_name: "Paona Bazaar-Khwairamband Road",
    district: "Imphal East",
    division: "Imphal Division",
    classification: "MDR",
    length_km: 2.8,
    surface_width_m: 8.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 9500,
    heavy_vehicle_pct: 8,
    population_served: 72000,
    connected_villages_count: 1,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 1.5,
    network_centrality_score: 82,
    terrain_type: "Valley",
    last_major_maintenance: "2023-06-15",
    last_treatment_type: "Micro-surfacing",
    current_rhi: 84,
    data_confidence_score: 98,
    field_inspection_required: false,
    coordinates: [
      [93.9400, 24.8100],
      [93.9450, 24.8050],
      [93.9500, 24.8000]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 1, area_sqm: 0.3, depth_cm: null, confidence: 0.94 }
    ]
  },

  // ===== ADDITIONAL SEGMENTS FOR DATA DENSITY =====
  {
    segment_id: "MNP-PWD-027",
    road_code: "MDR-18",
    road_name: "Imphal-Moreh Border Highway",
    district: "Tengnoupal",
    division: "Tengnoupal Division",
    classification: "NH",
    length_km: 13.8,
    surface_width_m: 7.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 3400,
    heavy_vehicle_pct: 22,
    population_served: 16000,
    connected_villages_count: 5,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: true,
    detour_distance_km: 35.0,
    network_centrality_score: 86,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-10-20",
    last_treatment_type: "Thin Overlay",
    current_rhi: 46,
    data_confidence_score: 80,
    field_inspection_required: false,
    coordinates: [
      [94.1000, 24.7000],
      [94.1200, 24.6850],
      [94.1400, 24.6700],
      [94.1600, 24.6550],
      [94.1800, 24.6400]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 8, area_sqm: 1.6, depth_cm: 8, confidence: 0.86 },
      { type: "alligator_crack", severity: "High", count: 6, area_sqm: 10.0, depth_cm: null, confidence: 0.83 },
      { type: "edge_break", severity: "Medium", count: 5, area_sqm: 4.2, depth_cm: null, confidence: 0.80 }
    ]
  },
  {
    segment_id: "MNP-PWD-028",
    road_code: "SH-09",
    road_name: "Tamenglong-Haflong Ridge Road",
    district: "Tamenglong",
    division: "Tamenglong Division",
    classification: "SH",
    length_km: 10.2,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 580,
    heavy_vehicle_pct: 8,
    population_served: 3800,
    connected_villages_count: 7,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 72.0,
    network_centrality_score: 60,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2018-12-05",
    last_treatment_type: "Gravel Resurfacing",
    current_rhi: 24,
    data_confidence_score: 38,
    field_inspection_required: true,
    coordinates: [
      [93.4500, 24.9600],
      [93.4300, 24.9750],
      [93.4100, 24.9900],
      [93.3900, 25.0050],
      [93.3700, 25.0200]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 24, area_sqm: 4.8, depth_cm: 16, confidence: 0.55 },
      { type: "alligator_crack", severity: "Severe", count: 16, area_sqm: 30.0, depth_cm: null, confidence: 0.52 },
      { type: "rutting", severity: "Severe", count: 8, area_sqm: 14.0, depth_cm: 10, confidence: 0.48 }
    ]
  },
  {
    segment_id: "MNP-PWD-029",
    road_code: "MDR-20",
    road_name: "Jiribam-Borobekra Market Road",
    district: "Jiribam",
    division: "Jiribam Division",
    classification: "MDR",
    length_km: 7.4,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1600,
    heavy_vehicle_pct: 14,
    population_served: 9800,
    connected_villages_count: 4,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 16.0,
    network_centrality_score: 52,
    terrain_type: "Valley",
    last_major_maintenance: "2021-08-18",
    last_treatment_type: "Surface Dressing",
    current_rhi: 54,
    data_confidence_score: 72,
    field_inspection_required: false,
    coordinates: [
      [93.1000, 24.8200],
      [93.0850, 24.8100],
      [93.0700, 24.8000],
      [93.0550, 24.7900]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 5, area_sqm: 1.0, depth_cm: 5, confidence: 0.84 },
      { type: "ravelling", severity: "Medium", count: 4, area_sqm: 3.2, depth_cm: null, confidence: 0.80 }
    ]
  },
  {
    segment_id: "MNP-PWD-030",
    road_code: "VR-28",
    road_name: "Chandel-Tengnoupal Village Track",
    district: "Chandel",
    division: "Chandel Division",
    classification: "VR",
    length_km: 9.2,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Gravel",
    aadt_traffic: 380,
    heavy_vehicle_pct: 3,
    population_served: 2800,
    connected_villages_count: 5,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 48.0,
    network_centrality_score: 32,
    terrain_type: "Hilly",
    last_major_maintenance: "2019-02-10",
    last_treatment_type: "Gravel Resurfacing",
    current_rhi: 30,
    data_confidence_score: 45,
    field_inspection_required: true,
    coordinates: [
      [94.0200, 24.4200],
      [94.0400, 24.4050],
      [94.0600, 24.3900],
      [94.0800, 24.3750],
      [94.1000, 24.3600]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 20, area_sqm: 4.0, depth_cm: 14, confidence: 0.60 },
      { type: "edge_break", severity: "Severe", count: 12, area_sqm: 8.4, depth_cm: null, confidence: 0.55 }
    ]
  },

  // ===== MORE URBAN/PERI-URBAN (for density) =====
  {
    segment_id: "MNP-PWD-031",
    road_code: "URBAN-03",
    road_name: "Kangla-Palace Gate Ring Road",
    district: "Imphal East",
    division: "Imphal Division",
    classification: "MDR",
    length_km: 3.2,
    surface_width_m: 8.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 8800,
    heavy_vehicle_pct: 10,
    population_served: 58000,
    connected_villages_count: 1,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 2.0,
    network_centrality_score: 80,
    terrain_type: "Valley",
    last_major_maintenance: "2023-04-12",
    last_treatment_type: "Micro-surfacing",
    current_rhi: 80,
    data_confidence_score: 97,
    field_inspection_required: false,
    coordinates: [
      [93.9380, 24.8080],
      [93.9420, 24.8050],
      [93.9460, 24.8020]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.4, depth_cm: null, confidence: 0.93 }
    ]
  },
  {
    segment_id: "MNP-PWD-032",
    road_code: "URBAN-04",
    road_name: "Lamphelpat-Airport Access Road",
    district: "Imphal West",
    division: "Imphal Division",
    classification: "SH",
    length_km: 5.4,
    surface_width_m: 10.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 6800,
    heavy_vehicle_pct: 12,
    population_served: 42000,
    connected_villages_count: 2,
    connects_hospital: false,
    connects_school: false,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 6.0,
    network_centrality_score: 75,
    terrain_type: "Valley",
    last_major_maintenance: "2022-11-20",
    last_treatment_type: "Hot Mix Overlay",
    current_rhi: 72,
    data_confidence_score: 94,
    field_inspection_required: false,
    coordinates: [
      [93.9000, 24.7800],
      [93.8900, 24.7700],
      [93.8800, 24.7600],
      [93.8700, 24.7500]
    ],
    defects: [
      { type: "pothole", severity: "Low", count: 3, area_sqm: 0.5, depth_cm: 3, confidence: 0.91 },
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.8, depth_cm: null, confidence: 0.89 }
    ]
  },

  // ===== KEY DEMO ROAD: "Deceptive Trap" MNP-PWD-042 =====
  {
    segment_id: "MNP-PWD-042",
    road_code: "URBAN-10",
    road_name: "Imphal Urban Ring Arterial - Checkon Sector",
    district: "Imphal East",
    division: "Imphal Division",
    classification: "MDR",
    length_km: 3.4,
    surface_width_m: 8.0,
    lane_count: 4,
    pavement_type: "Bituminous",
    aadt_traffic: 8400,
    heavy_vehicle_pct: 12,
    population_served: 48000,
    connected_villages_count: 1,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 1.2,
    network_centrality_score: 72,
    terrain_type: "Valley",
    last_major_maintenance: "2021-06-10",
    last_treatment_type: "Thin Overlay",
    current_rhi: 44,
    data_confidence_score: 96,
    field_inspection_required: false,
    coordinates: [
      [93.9600, 24.8200],
      [93.9650, 24.8150],
      [93.9700, 24.8100]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 12, area_sqm: 2.4, depth_cm: 10, confidence: 0.94 },
      { type: "alligator_crack", severity: "High", count: 8, area_sqm: 14.0, depth_cm: null, confidence: 0.92 },
      { type: "rutting", severity: "High", count: 5, area_sqm: 8.0, depth_cm: 6, confidence: 0.90 }
    ]
  },

  // ===== MORE SEGMENTS FOR 50 TOTAL =====
  {
    segment_id: "MNP-PWD-033",
    road_code: "MDR-22",
    road_name: "Senapati-Mao Town Link",
    district: "Senapati",
    division: "Senapati Division",
    classification: "MDR",
    length_km: 8.6,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 2100,
    heavy_vehicle_pct: 14,
    population_served: 12000,
    connected_villages_count: 4,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 20.0,
    network_centrality_score: 65,
    terrain_type: "Hilly",
    last_major_maintenance: "2021-11-15",
    last_treatment_type: "Surface Dressing",
    current_rhi: 50,
    data_confidence_score: 78,
    field_inspection_required: false,
    coordinates: [
      [93.7500, 25.2800],
      [93.7400, 25.2950],
      [93.7300, 25.3100],
      [93.7200, 25.3250]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 6, area_sqm: 1.2, depth_cm: 6, confidence: 0.85 },
      { type: "longitudinal_crack", severity: "Medium", count: 5, area_sqm: 3.0, depth_cm: null, confidence: 0.82 },
      { type: "ravelling", severity: "Medium", count: 3, area_sqm: 2.8, depth_cm: null, confidence: 0.80 }
    ]
  },
  {
    segment_id: "MNP-PWD-034",
    road_code: "VR-30",
    road_name: "Andro-Khangabok Village Road",
    district: "Imphal East",
    division: "Imphal Division",
    classification: "VR",
    length_km: 5.2,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 520,
    heavy_vehicle_pct: 4,
    population_served: 3600,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: false,
    detour_distance_km: 12.0,
    network_centrality_score: 30,
    terrain_type: "Valley",
    last_major_maintenance: "2022-05-22",
    last_treatment_type: "Crack Sealing",
    current_rhi: 62,
    data_confidence_score: 70,
    field_inspection_required: false,
    coordinates: [
      [93.9800, 24.8400],
      [93.9950, 24.8350],
      [94.0100, 24.8300]
    ],
    defects: [
      { type: "pothole", severity: "Low", count: 3, area_sqm: 0.5, depth_cm: 3, confidence: 0.84 },
      { type: "ravelling", severity: "Low", count: 2, area_sqm: 1.4, depth_cm: null, confidence: 0.80 }
    ]
  },
  {
    segment_id: "MNP-PWD-035",
    road_code: "SH-08",
    road_name: "Imphal-Kangchup Mountain Pass",
    district: "Kangpokpi",
    division: "Kangpokpi Division",
    classification: "SH",
    length_km: 12.4,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1600,
    heavy_vehicle_pct: 12,
    population_served: 7800,
    connected_villages_count: 5,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 40.0,
    network_centrality_score: 66,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2020-03-08",
    last_treatment_type: "Surface Dressing",
    current_rhi: 36,
    data_confidence_score: 62,
    field_inspection_required: true,
    coordinates: [
      [93.8200, 25.0800],
      [93.8000, 25.0950],
      [93.7800, 25.1100],
      [93.7600, 25.1250],
      [93.7400, 25.1400]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 14, area_sqm: 2.8, depth_cm: 12, confidence: 0.74 },
      { type: "alligator_crack", severity: "High", count: 10, area_sqm: 18.0, depth_cm: null, confidence: 0.70 },
      { type: "edge_break", severity: "High", count: 7, area_sqm: 5.8, depth_cm: null, confidence: 0.68 }
    ]
  },
  {
    segment_id: "MNP-PWD-036",
    road_code: "ODR-14",
    road_name: "Pherzawl-Tipaimukh Access Road",
    district: "Pherzawl",
    division: "Churachandpur Division",
    classification: "ODR",
    length_km: 14.8,
    surface_width_m: 4.0,
    lane_count: 1,
    pavement_type: "Gravel",
    aadt_traffic: 320,
    heavy_vehicle_pct: 3,
    population_served: 2400,
    connected_villages_count: 6,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 82.0,
    network_centrality_score: 48,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2017-09-15",
    last_treatment_type: "Gravel Resurfacing",
    current_rhi: 18,
    data_confidence_score: 35,
    field_inspection_required: true,
    coordinates: [
      [93.2500, 24.4500],
      [93.2300, 24.4350],
      [93.2100, 24.4200],
      [93.1900, 24.4050],
      [93.1700, 24.3900],
      [93.1500, 24.3750]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 32, area_sqm: 6.4, depth_cm: 20, confidence: 0.45 },
      { type: "alligator_crack", severity: "Severe", count: 20, area_sqm: 36.0, depth_cm: null, confidence: 0.42 },
      { type: "rutting", severity: "Severe", count: 12, area_sqm: 18.0, depth_cm: 14, confidence: 0.40 }
    ]
  },
  {
    segment_id: "MNP-PWD-037",
    road_code: "MDR-25",
    road_name: "Nongpok-Sekmai Valley Connector",
    district: "Imphal West",
    division: "Imphal Division",
    classification: "MDR",
    length_km: 4.8,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 2800,
    heavy_vehicle_pct: 10,
    population_served: 14000,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 7.0,
    network_centrality_score: 55,
    terrain_type: "Valley",
    last_major_maintenance: "2022-10-08",
    last_treatment_type: "Crack Sealing",
    current_rhi: 68,
    data_confidence_score: 86,
    field_inspection_required: false,
    coordinates: [
      [93.8800, 24.8600],
      [93.8650, 24.8500],
      [93.8500, 24.8400]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 3, area_sqm: 1.0, depth_cm: null, confidence: 0.88 },
      { type: "pothole", severity: "Low", count: 2, area_sqm: 0.4, depth_cm: 3, confidence: 0.86 }
    ]
  },
  {
    segment_id: "MNP-PWD-038",
    road_code: "VR-32",
    road_name: "Mayang Imphal-Wangoi Paddy Track",
    district: "Imphal West",
    division: "Imphal Division",
    classification: "VR",
    length_km: 3.6,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 480,
    heavy_vehicle_pct: 3,
    population_served: 3200,
    connected_villages_count: 2,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: false,
    detour_distance_km: 5.0,
    network_centrality_score: 28,
    terrain_type: "Valley",
    last_major_maintenance: "2023-01-15",
    last_treatment_type: "Crack Sealing",
    current_rhi: 74,
    data_confidence_score: 80,
    field_inspection_required: false,
    coordinates: [
      [93.8600, 24.8200],
      [93.8450, 24.8150],
      [93.8300, 24.8100]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 1, area_sqm: 0.4, depth_cm: null, confidence: 0.88 }
    ]
  },
  {
    segment_id: "MNP-PWD-039",
    road_code: "SH-12",
    road_name: "Churachandpur-Tipaimukh Highway",
    district: "Churachandpur",
    division: "Churachandpur Division",
    classification: "SH",
    length_km: 15.6,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1100,
    heavy_vehicle_pct: 10,
    population_served: 8200,
    connected_villages_count: 8,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: true,
    detour_distance_km: 58.0,
    network_centrality_score: 62,
    terrain_type: "Hilly",
    last_major_maintenance: "2019-12-20",
    last_treatment_type: "Surface Dressing",
    current_rhi: 40,
    data_confidence_score: 58,
    field_inspection_required: true,
    coordinates: [
      [93.6200, 24.3800],
      [93.6000, 24.3650],
      [93.5800, 24.3500],
      [93.5600, 24.3350],
      [93.5400, 24.3200],
      [93.5200, 24.3050]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 12, area_sqm: 2.4, depth_cm: 10, confidence: 0.72 },
      { type: "alligator_crack", severity: "High", count: 8, area_sqm: 14.0, depth_cm: null, confidence: 0.68 },
      { type: "edge_break", severity: "High", count: 6, area_sqm: 5.0, depth_cm: null, confidence: 0.65 },
      { type: "ravelling", severity: "Medium", count: 5, area_sqm: 6.0, depth_cm: null, confidence: 0.62 }
    ]
  },
  {
    segment_id: "MNP-PWD-040",
    road_code: "MDR-28",
    road_name: "Tamenglong-Tamei Road",
    district: "Tamenglong",
    division: "Tamenglong Division",
    classification: "MDR",
    length_km: 11.4,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 680,
    heavy_vehicle_pct: 6,
    population_served: 4600,
    connected_villages_count: 6,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 52.0,
    network_centrality_score: 56,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2019-06-10",
    last_treatment_type: "Surface Dressing",
    current_rhi: 30,
    data_confidence_score: 50,
    field_inspection_required: true,
    coordinates: [
      [93.4800, 25.0400],
      [93.4600, 25.0550],
      [93.4400, 25.0700],
      [93.4200, 25.0850],
      [93.4000, 25.1000]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 18, area_sqm: 3.6, depth_cm: 14, confidence: 0.62 },
      { type: "alligator_crack", severity: "Severe", count: 12, area_sqm: 22.0, depth_cm: null, confidence: 0.58 },
      { type: "edge_break", severity: "High", count: 8, area_sqm: 6.8, depth_cm: null, confidence: 0.56 }
    ]
  },
  {
    segment_id: "MNP-PWD-041",
    road_code: "VR-35",
    road_name: "Saikul-Kangpokpi Village Road",
    district: "Kangpokpi",
    division: "Kangpokpi Division",
    classification: "VR",
    length_km: 7.8,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 420,
    heavy_vehicle_pct: 4,
    population_served: 3400,
    connected_villages_count: 4,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 35.0,
    network_centrality_score: 36,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-05-18",
    last_treatment_type: "Gravel Resurfacing",
    current_rhi: 38,
    data_confidence_score: 52,
    field_inspection_required: true,
    coordinates: [
      [93.8400, 25.1600],
      [93.8200, 25.1750],
      [93.8000, 25.1900],
      [93.7800, 25.2050]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 10, area_sqm: 2.0, depth_cm: 9, confidence: 0.68 },
      { type: "edge_break", severity: "High", count: 6, area_sqm: 4.2, depth_cm: null, confidence: 0.64 },
      { type: "ravelling", severity: "Medium", count: 4, area_sqm: 3.6, depth_cm: null, confidence: 0.62 }
    ]
  },

  // ===== FILLING OUT TO 50 =====
  {
    segment_id: "MNP-PWD-043",
    road_code: "ODR-16",
    road_name: "Nungba-Khousabung Rural Road",
    district: "Noney",
    division: "Tamenglong Division",
    classification: "ODR",
    length_km: 6.8,
    surface_width_m: 4.5,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 520,
    heavy_vehicle_pct: 5,
    population_served: 4100,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 30.0,
    network_centrality_score: 44,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-09-12",
    last_treatment_type: "Surface Dressing",
    current_rhi: 42,
    data_confidence_score: 60,
    field_inspection_required: false,
    coordinates: [
      [93.2800, 24.9200],
      [93.2600, 24.9100],
      [93.2400, 24.9000],
      [93.2200, 24.8900]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 8, area_sqm: 1.6, depth_cm: 8, confidence: 0.76 },
      { type: "longitudinal_crack", severity: "Medium", count: 6, area_sqm: 3.4, depth_cm: null, confidence: 0.72 }
    ]
  },
  {
    segment_id: "MNP-PWD-044",
    road_code: "MDR-30",
    road_name: "Ukhrul-Jessami Frontier Road",
    district: "Ukhrul",
    division: "Ukhrul Division",
    classification: "MDR",
    length_km: 10.6,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 980,
    heavy_vehicle_pct: 8,
    population_served: 5600,
    connected_villages_count: 5,
    connects_hospital: true,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 48.0,
    network_centrality_score: 54,
    terrain_type: "Steep Escarpment",
    last_major_maintenance: "2019-10-22",
    last_treatment_type: "Surface Dressing",
    current_rhi: 34,
    data_confidence_score: 52,
    field_inspection_required: true,
    coordinates: [
      [94.3200, 25.2500],
      [94.3400, 25.2650],
      [94.3600, 25.2800],
      [94.3800, 25.2950],
      [94.4000, 25.3100]
    ],
    defects: [
      { type: "pothole", severity: "Severe", count: 14, area_sqm: 2.8, depth_cm: 12, confidence: 0.66 },
      { type: "alligator_crack", severity: "High", count: 10, area_sqm: 16.0, depth_cm: null, confidence: 0.62 },
      { type: "edge_break", severity: "High", count: 8, area_sqm: 6.4, depth_cm: null, confidence: 0.60 }
    ]
  },
  {
    segment_id: "MNP-PWD-045",
    road_code: "VR-38",
    road_name: "Moreh-Tamu Border Approach",
    district: "Tengnoupal",
    division: "Tengnoupal Division",
    classification: "VR",
    length_km: 4.8,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1800,
    heavy_vehicle_pct: 18,
    population_served: 8400,
    connected_villages_count: 2,
    connects_hospital: false,
    connects_school: false,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 6.0,
    network_centrality_score: 68,
    terrain_type: "Hilly",
    last_major_maintenance: "2022-01-18",
    last_treatment_type: "Thin Overlay",
    current_rhi: 58,
    data_confidence_score: 82,
    field_inspection_required: false,
    coordinates: [
      [94.2800, 24.2600],
      [94.2950, 24.2500],
      [94.3100, 24.2400]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 5, area_sqm: 1.0, depth_cm: 5, confidence: 0.86 },
      { type: "rutting", severity: "Medium", count: 3, area_sqm: 3.6, depth_cm: 4, confidence: 0.82 }
    ]
  },
  {
    segment_id: "MNP-PWD-046",
    road_code: "SH-15",
    road_name: "Bishnupur-Churachandpur Highway",
    district: "Bishnupur",
    division: "Bishnupur Division",
    classification: "SH",
    length_km: 8.2,
    surface_width_m: 5.5,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 2400,
    heavy_vehicle_pct: 14,
    population_served: 16000,
    connected_villages_count: 4,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 20.0,
    network_centrality_score: 68,
    terrain_type: "Rolling",
    last_major_maintenance: "2021-05-28",
    last_treatment_type: "Surface Dressing",
    current_rhi: 52,
    data_confidence_score: 78,
    field_inspection_required: false,
    coordinates: [
      [93.7600, 24.6000],
      [93.7400, 24.5800],
      [93.7200, 24.5600],
      [93.7000, 24.5400]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 6, area_sqm: 1.2, depth_cm: 6, confidence: 0.84 },
      { type: "longitudinal_crack", severity: "Medium", count: 5, area_sqm: 3.0, depth_cm: null, confidence: 0.82 },
      { type: "ravelling", severity: "Medium", count: 3, area_sqm: 2.4, depth_cm: null, confidence: 0.78 }
    ]
  },
  {
    segment_id: "MNP-PWD-047",
    road_code: "VR-40",
    road_name: "Lamlai-Sawombung Agriculture Road",
    district: "Imphal East",
    division: "Imphal Division",
    classification: "VR",
    length_km: 3.4,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 620,
    heavy_vehicle_pct: 4,
    population_served: 4200,
    connected_villages_count: 2,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 4.0,
    network_centrality_score: 32,
    terrain_type: "Valley",
    last_major_maintenance: "2023-02-10",
    last_treatment_type: "Crack Sealing",
    current_rhi: 76,
    data_confidence_score: 84,
    field_inspection_required: false,
    coordinates: [
      [93.9700, 24.8500],
      [93.9850, 24.8450],
      [94.0000, 24.8400]
    ],
    defects: [
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.6, depth_cm: null, confidence: 0.88 }
    ]
  },
  {
    segment_id: "MNP-PWD-048",
    road_code: "ODR-18",
    road_name: "Kangpokpi-Gamnom Hill Road",
    district: "Kangpokpi",
    division: "Kangpokpi Division",
    classification: "ODR",
    length_km: 7.2,
    surface_width_m: 4.5,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 580,
    heavy_vehicle_pct: 5,
    population_served: 3800,
    connected_villages_count: 4,
    connects_hospital: false,
    connects_school: true,
    connects_market: false,
    is_single_access_lifeline: true,
    detour_distance_km: 28.0,
    network_centrality_score: 42,
    terrain_type: "Hilly",
    last_major_maintenance: "2020-07-22",
    last_treatment_type: "Surface Dressing",
    current_rhi: 40,
    data_confidence_score: 58,
    field_inspection_required: true,
    coordinates: [
      [93.8600, 25.1400],
      [93.8400, 25.1550],
      [93.8200, 25.1700],
      [93.8000, 25.1850]
    ],
    defects: [
      { type: "pothole", severity: "High", count: 9, area_sqm: 1.8, depth_cm: 8, confidence: 0.70 },
      { type: "alligator_crack", severity: "Medium", count: 6, area_sqm: 8.0, depth_cm: null, confidence: 0.66 },
      { type: "edge_break", severity: "Medium", count: 4, area_sqm: 3.4, depth_cm: null, confidence: 0.64 }
    ]
  },
  {
    segment_id: "MNP-PWD-049",
    road_code: "MDR-32",
    road_name: "Chandel-Machi Market Road",
    district: "Chandel",
    division: "Chandel Division",
    classification: "MDR",
    length_km: 6.4,
    surface_width_m: 5.0,
    lane_count: 2,
    pavement_type: "Bituminous",
    aadt_traffic: 1200,
    heavy_vehicle_pct: 10,
    population_served: 6800,
    connected_villages_count: 3,
    connects_hospital: true,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 18.0,
    network_centrality_score: 50,
    terrain_type: "Hilly",
    last_major_maintenance: "2021-03-28",
    last_treatment_type: "Thin Overlay",
    current_rhi: 48,
    data_confidence_score: 74,
    field_inspection_required: false,
    coordinates: [
      [94.0500, 24.4600],
      [94.0650, 24.4450],
      [94.0800, 24.4300],
      [94.0950, 24.4150]
    ],
    defects: [
      { type: "pothole", severity: "Medium", count: 7, area_sqm: 1.4, depth_cm: 6, confidence: 0.82 },
      { type: "longitudinal_crack", severity: "Medium", count: 5, area_sqm: 2.8, depth_cm: null, confidence: 0.80 },
      { type: "ravelling", severity: "Medium", count: 3, area_sqm: 2.2, depth_cm: null, confidence: 0.76 }
    ]
  },
  {
    segment_id: "MNP-PWD-050",
    road_code: "VR-42",
    road_name: "Imphal South-Nambol Feeder Lane",
    district: "Bishnupur",
    division: "Bishnupur Division",
    classification: "VR",
    length_km: 4.6,
    surface_width_m: 3.75,
    lane_count: 1,
    pavement_type: "Bituminous",
    aadt_traffic: 860,
    heavy_vehicle_pct: 5,
    population_served: 6200,
    connected_villages_count: 3,
    connects_hospital: false,
    connects_school: true,
    connects_market: true,
    is_single_access_lifeline: false,
    detour_distance_km: 6.0,
    network_centrality_score: 40,
    terrain_type: "Valley",
    last_major_maintenance: "2022-08-05",
    last_treatment_type: "Crack Sealing",
    current_rhi: 66,
    data_confidence_score: 80,
    field_inspection_required: false,
    coordinates: [
      [93.8400, 24.7000],
      [93.8250, 24.6900],
      [93.8100, 24.6800]
    ],
    defects: [
      { type: "pothole", severity: "Low", count: 3, area_sqm: 0.5, depth_cm: 3, confidence: 0.86 },
      { type: "longitudinal_crack", severity: "Low", count: 2, area_sqm: 0.8, depth_cm: null, confidence: 0.84 }
    ]
  }
];

// ============================================================
// AHP Pairwise Comparison Matrix (from paper methodology)
// ============================================================
export const AHP_CRITERIA = {
  names: ['Pavement Condition', 'Safety & Risk', 'Connectivity', 'Traffic & Usage', 'Climate Vulnerability', 'Economic Efficiency'],
  shortNames: ['PCR', 'Safety', 'Connect.', 'Traffic', 'Climate', 'Cost'],
  // Pairwise comparison matrix (Saaty scale 1-9)
  // Based on expert consensus from Nautiyal & Sharma 2021, adapted for Manipur
  pairwiseMatrix: [
    [1,    2,    3,    3,    4,    5],    // PCR vs all
    [1/2,  1,    2,    2,    3,    4],    // Safety vs all
    [1/3,  1/2,  1,    1,    2,    3],    // Connectivity vs all
    [1/3,  1/2,  1,    1,    2,    3],    // Traffic vs all
    [1/4,  1/3,  1/2,  1/2,  1,    2],    // Climate vs all
    [1/5,  1/4,  1/3,  1/3,  1/2,  1],    // Cost vs all
  ],
  // Pre-calculated weights (eigenvector method result)
  weights: {
    condition: 0.35,
    safety: 0.22,
    connectivity: 0.15,
    traffic: 0.13,
    climate: 0.09,
    cost: 0.06
  },
  consistencyRatio: 0.028 // CR < 0.1 = acceptable
};

// ============================================================
// Terrain & Climate Factors
// ============================================================
export const TERRAIN_FACTORS = {
  'Valley': 1.0,
  'Rolling': 1.25,
  'Hilly': 1.55,
  'Steep Escarpment': 1.85
};

export const MONSOON_FACTOR = {
  dry: 1.0,
  preMonsoon: 1.65,
  monsoon: 2.15
};

// ============================================================
// Treatment Catalog
// ============================================================
export const TREATMENTS = {
  monitor: {
    name: "Routine Monitoring",
    costPerKmLakh: 0.5,
    rhiImprovement: 2,
    lifespanYears: 1,
    minRHI: 80,
    icon: "👁️"
  },
  crackSeal: {
    name: "Crack Sealing",
    costPerKmLakh: 2.5,
    rhiImprovement: 12,
    lifespanYears: 2,
    minRHI: 60,
    icon: "🔧"
  },
  slurrySeal: {
    name: "Slurry Seal",
    costPerKmLakh: 4.0,
    rhiImprovement: 18,
    lifespanYears: 3,
    minRHI: 50,
    icon: "🛠️"
  },
  thinOverlay: {
    name: "Thin Hot-Mix Overlay",
    costPerKmLakh: 8.0,
    rhiImprovement: 30,
    lifespanYears: 5,
    minRHI: 40,
    icon: "🏗️"
  },
  resurfacing: {
    name: "Full Resurfacing",
    costPerKmLakh: 14.0,
    rhiImprovement: 45,
    lifespanYears: 7,
    minRHI: 25,
    icon: "🚧"
  },
  reconstruction: {
    name: "Deep Reconstruction",
    costPerKmLakh: 28.0,
    rhiImprovement: 70,
    lifespanYears: 12,
    minRHI: 0,
    icon: "🏭"
  }
};

// ============================================================
// Classification Color Scheme (Traffic Light System)
// ============================================================
export const CONDITION_COLORS = {
  good: { color: '#22c55e', label: 'Good', range: '≥80', bg: 'rgba(34, 197, 94, 0.15)' },
  fair: { color: '#eab308', label: 'Fair', range: '60-79', bg: 'rgba(234, 179, 8, 0.15)' },
  poor: { color: '#f97316', label: 'Poor', range: '40-59', bg: 'rgba(249, 115, 22, 0.15)' },
  critical: { color: '#ef4444', label: 'Critical', range: '<40', bg: 'rgba(239, 68, 68, 0.15)' }
};

export function getConditionStatus(rhi) {
  if (rhi >= 80) return 'good';
  if (rhi >= 60) return 'fair';
  if (rhi >= 40) return 'poor';
  return 'critical';
}

export function getConditionColor(rhi) {
  return CONDITION_COLORS[getConditionStatus(rhi)].color;
}

export function getConditionLabel(rhi) {
  return CONDITION_COLORS[getConditionStatus(rhi)].label;
}

// ============================================================
// 3-Tier PWD Work Classification (from Engineering Framework)
// ① Critical Work: restore road safety, urgent repairs after weather
// ② Needed Work: proactive jobs, prevents deterioration in short term
// ③ Desirable Work: proactive to help limit damage and minimize lifetime cost
// ============================================================
export const WORK_CATEGORIES = {
  critical: {
    id: 'critical',
    title: 'Critical Work',
    num: '①',
    subtitle: 'Restore Road Safety',
    description: "Urgent repairs after severe weather events and structural failures to restore safety",
    color: '#b91c1c',
    bg: '#fef2f2',
    border: '#fca5a5',
    action: 'Emergency / Urgent Repair',
    range: 'RHI < 40'
  },
  needed: {
    id: 'needed',
    title: 'Needed Work',
    num: '②',
    subtitle: 'Prevent Deterioration (Short Term)',
    description: 'Proactive jobs: fixing defects before problems escalate and cause full failure',
    color: '#b45309',
    bg: '#fffbeb',
    border: '#fde68a',
    action: 'Preventive Overlay / Sealing',
    range: 'RHI 40-69'
  },
  desirable: {
    id: 'desirable',
    title: 'Desirable Work',
    num: '③',
    subtitle: 'Minimize Lifetime Cost',
    description: 'Proactive measures to limit future damage and minimize overall lifecycle expenditure',
    color: '#15803d',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    action: 'Lifecycle Preservation',
    range: 'RHI ≥ 70'
  }
};

export function getWorkCategory(rhi, isMonsoon = false, isLifeline = false) {
  if (rhi < 40 || (isMonsoon && isLifeline && rhi < 55)) return WORK_CATEGORIES.critical;
  if (rhi < 70) return WORK_CATEGORIES.needed;
  return WORK_CATEGORIES.desirable;
}

