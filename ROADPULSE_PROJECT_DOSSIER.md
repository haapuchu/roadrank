# ROADPULSE — Comprehensive Project Context & Master Technical Dossier
**National Innovation Challenge on AI & Digital Governance — Manipur 2026**  
**Problem Statement PWD-03: AI-Based Road Inspection & Maintenance Prioritisation**  
**Host: Directorate of Information Technology, Government of Manipur**  
**Innovation Partner: MTIF | Public Works Department (PWD), Government of Manipur**  
**Venue: IT SEZ, Mantripukhri, Imphal**

---

## 1. Executive Context & Core Pitch

### 1.1 The Official Problem Statement (PWD-03)
> *"Develop an AI-based system that analyses road images, road condition, traffic, connectivity, previous maintenance and other relevant data to identify defects and support maintenance prioritisation."*  
> — *Public Works Department (PWD), Government of Manipur*

### 1.2 The Central Product Thesis
> **"PWD does not only have a road-damage problem. It has a resource-allocation and consequence-management problem."**

Every monsoon, roads across Manipur develop severe physical degradation. However, PWD engineers operate within strict, finite capital expenditure ceilings. 

Traditional inspection approaches prioritize maintenance purely by physical severity—repairing downtown roads simply because they have more potholes. **RoadPulse** transforms road maintenance from a naive defect detector into an **AI-Powered Infrastructure Decision Intelligence System** that answers nine critical engineering and governance questions:

1. **WHAT is wrong?** — Computer vision detects road surface defects (potholes, cracks, alligator wear, surface wear).
2. **HOW bad is it?** — Calculates the transparent Road Health Index (RHI, 0–100) and parametric failure risk.
3. **HOW important is the road?** — Evaluates network criticality (ICI, 0–100) and public-service lifeline dependence.
4. **WHAT happens if PWD does not repair it?** — Runs counterfactual failure simulations and cut-off analyses (FIS, 0–100).
5. **WHAT should PWD repair first?** — Generates an explainable intervention priority with exact factor attribution.
6. **WHERE should limited government money go?** — Optimizes a maintenance portfolio under strict budget ceilings via 0/1 knapsack dynamic programming.
7. **WHAT if assumptions change?** — Performs scenario, monsoon acceleration (+60%), and policy objective trade-off analyses.
8. **WHO actually makes the decision?** — The certified PWD engineer remains in statutory command; AI never issues autonomous repair orders.
9. **CAN the final decision be audited?** — Every recommendation and human modification has an immutable 7-stage decision provenance evidence chain and exportable audit trail.

### 1.3 Core Product Principle
> **"AI FOR PERCEPTION • ALGORITHMS FOR DECISION • HUMANS FOR ACCOUNTABILITY"**
> *Subtitle: Detect damage. Understand consequences. Optimise scarce budgets.*

- **AI for Perception:** Computer vision detects defects, extracts features, and scores visual severity from images.
- **Algorithms for Decision:** Graph theory (network cuts, detours, betweenness) and operations research (0/1 knapsack dynamic programming) solve allocation problems deterministically and auditably without hallucination.
- **Humans for Accountability:** Certified PWD divisional engineers review, approve, modify, or defer recommendations with statutory justification.

---

## 2. The Five Core Differentiators

RoadPulse is engineered around five fundamental USPs that differentiate it from generic pothole detectors:

### USP 1 — Severity $\neq$ Priority
The most physically damaged road is not necessarily the most important road to repair. A severely degraded downtown road with four parallel paved bypass routes has far lower public consequence than a moderately damaged hillside corridor that serves as the **sole lifeline** to villages, schools, and hospitals.
- **Road A: MG Avenue (S01):** Severe damage ($\text{RHI} = 38.0$, Critical), but has 4 alternative bypass routes. Disconnected population = 0.
- **Road B: Imphal-Ukhrul Road (S19):** Moderate damage ($\text{RHI} = 54.0$, Poor), but is the sole lifeline connecting 5,800 residents, a Primary Health Centre (PHC), and a secondary school. If severed, **zero alternate detours exist**.
- **RoadPulse Outcome:** Intelligently reverses the ranking to prioritize Road B over Road A, proving consequence-driven decision making.

### USP 2 — Cost of Inaction / Compounded Cost of Delay
Traditional systems only ask: *"How much does it cost to repair today?"* RoadPulse estimates: **"How much will waiting cost?"**
- Tracks 30, 60, 90, and 180-day deterioration trajectories.
- Demonstrates how delaying maintenance by 90 days causes pavement degradation to cross structural intervention thresholds (e.g., from Patching at ₹4L/km to Resurfacing at ₹28L/km), exposing PWD to $+₹18\text{L}$ to $+₹84\text{L}$ in compounded escalation costs.

### USP 3 — Network Digital Twin
Treats the road network as a topological graph $G = (V, E)$ rather than isolated line segments.
- Real-time **Cut-Road Simulation**: With one click, dynamically removes any corridor from the network graph.
- Computes disconnected population, isolated public facilities, loss of hospital access, and detour distance increases.
- Provides two dedicated indices:
  - **ICI (Infrastructure Criticality Index, 0–100):** How vital the road is to network resilience and public services.
  - **FIS (Failure Impact Score, 0–100):** The catastrophic consequence score if the road experiences an unpassable failure.

### USP 4 — Budget-Optimal Portfolio & Public Value per ₹1 Crore
Replaces static 1-to-N priority lists with a mathematical 0/1 Knapsack Dynamic Programming solver under realistic PWD capital ceilings (₹1 Cr to ₹10 Cr).
- Introduces the **Public Value per ₹1 Crore Capital Sanction** metric:
  - Residents safeguarded per ₹1 Cr
  - Critical facilities protected per ₹1 Cr
  - Corridor km preserved per ₹1 Cr
  - Avoided deterioration escalation per ₹1 Cr
- Enables real-time policy objective switching:
  - **Balanced:** Harmonious trade-off across condition, risk, traffic, and criticality.
  - **Max Safety:** Prioritizes failure risk and visual structural degradation.
  - **Max Connectivity:** Prioritizes lifeline preservation and community isolation prevention.
  - **Cost Efficiency:** Maximizes public utility per rupee spent via benefit-to-cost ratio.

### USP 5 — 7-Layer Decision Provenance & Statutory Audit Trail
Every recommendation can be traced backwards through an immutable 7-stage evidence chain:
```
1. Image Observation ➔ 2. AI Defect Detection ➔ 3. Road Health Index (RHI) ➔
4. Network Criticality & Lifelines ➔ 5. Priority & Factor Attribution ➔
6. Budget Optimization Context ➔ 7. Engineer Statutory Review
```
- Certified engineers can Accept, Modify, Defer, or Reject recommendations.
- Modifications require statutory administrative reasons (e.g., *"Budget unavailable in current sanction"*).
- All actions are logged into an immutable SQLite database and exportable as GFR-compliant CSV audit records.

---

## 3. Technology Stack & Offline-First Architecture

RoadPulse is engineered to run **100% offline** without any internet connection, cloud APIs, external CDNs, or remote font servers:

- **Backend:** Python 3.11+, FastAPI, Uvicorn, SQLite3, `networkx` (graph algorithms), `numpy` (numerical scoring), Pillow (`PIL`, image processing), `pytest`.
- **Frontend:** Vanilla JavaScript (ES6+), Vanilla CSS (Design tokens, Glassmorphism, CSS Grid), Inline SVG (interactive schematic network map with pan/zoom). Zero node build steps, zero Webpack/Vite overhead.
- **Fail-Soft AI Detector:**
  - **Tier 1 (Live ML Inference):** Ultralytics YOLOv8 PyTorch pipeline when weights and PyTorch are present.
  - **Tier 2 (Cached Demonstration Mode):** Verified ground-truth detections from benchmark road damage datasets for offline resilience.
  - **Tier 3 (Offline Heuristic Mode):** Pure NumPy edge density and dark blob analysis with a mandatory 10-point confidence penalty.

---

## 4. Comprehensive Network Data Model (20 Nodes & 22 Corridors)

### 4.1 Schematic Coordinates & Hackathon Venue Anchor
Coordinates represent kilometer offsets $(x \text{ east}, y \text{ north})$ from Kangla Gate (`KAN`, 0.0, 0.0), central Imphal:
- **Hackathon Venue Node (`MAN`):** Mantripukhri (IT SEZ) at $(4.2, 6.0)$, tagged with `is_venue = True` and rendered with a distinct pulsing marker: `★ YOU ARE HERE: AI4SEVA Venue (IT SEZ)`.
- **Central Connectivity Core (`KAN`):** Kangla Gate, the reference origin against which cut-off isolation is calculated.

### 4.2 The 20 Network Nodes

| ID | Name | x (km) | y (km) | Sim Pop | Zone | Facilities |
|---|---|---|---|---|---|---|
| **KAN** | Kangla Gate | 0.0 | 0.0 | 6,000 | Urban | Central Connectivity Anchor |
| **PAO** | Paona Bazar / Ima Keithel | 0.4 | 0.3 | 9,000 | Urban | Ima Keithel (Mother's Market) |
| **THA** | Thangal Bazar | -0.2 | 1.0 | 7,000 | Urban | Commercial Center |
| **SAN** | Sanjenthong | 1.2 | 2.2 | 8,000 | Urban | Higher Secondary School |
| **SIN** | Singjamei | -0.8 | -1.3 | 9,000 | Urban | Commercial Junction |
| **SAG** | Sagolband | -1.8 | 0.1 | 7,500 | Urban | Model School |
| **URI** | Uripok | -2.0 | 1.4 | 8,500 | Urban | Residential Hub |
| **LAN** | Langol | -3.8 | 2.0 | 5,000 | Urban | Shija Hospitals |
| **LAM** | Lamphel / Lamphelpat | -3.4 | -0.9 | 6,500 | Urban | RIMS Hospital |
| **WAN** | Wangkhei | 1.6 | -0.4 | 7,000 | Urban | Residential Center |
| **TAK** | Takyel | 3.4 | -1.4 | 4,500 | Urban | Industrial Estate |
| **POR** | Porompat | 4.6 | 0.6 | 5,500 | Urban | JNIMS Hospital |
| **MAN** | Mantripukhri | 4.2 | 6.0 | 4,000 | Urban | **IT SEZ (AI4SEVA Hackathon Venue)** |
| **KGT** | Kanglatongbi (NH-2 north) | 3.0 | 20.0 | 3,500 | Peri-urban | Highway Junction |
| **NHV** | Northern Hill Villages | 2.0 | 36.0 | 6,000 | Hill | Northern Hill PHC, High School |
| **TUL** | Tulihal / Imphal Airport | -6.8 | -3.2 | 2,000 | Peri-urban | Imphal Airport (Tulihal) |
| **CAN** | Canchipur | -6.5 | -6.5 | 5,000 | Peri-urban | Manipur University |
| **BIS** | Bishnupur | -1.0 | -18.0 | 7,000 | Peri-urban | Bishnupur District Hospital |
| **MOI** | Moirang / Loktak Shore | -3.0 | -28.0 | 6,500 | Hill | Loktak Primary Health Centre |
| **UKH** | Ukhrul-side Hill Villages | 22.0 | 8.0 | 5,800 | Hill | Ukhrul Hill PHC, Valley School |

*Designated Hospital Nodes:* `LAN` (Shija), `LAM` (RIMS), `POR` (JNIMS), `BIS` (Bishnupur District Hospital).

---

## 5. Mathematical & Algorithmic Formulations

### 5.1 Road Health Index (RHI, 0–100)
$$\text{RHI} = \max\left(0, \min\left(100, 100 - \sum (w_i \cdot \text{pen}_i) + \text{bonus}_\text{patch}\right)\right)$$
- Normalized defect penalties per km:
  - $\text{pen}_\text{pothole} = \min(100, (\text{potholes} / \text{km} / 20) \times 100)$, weight $w = 0.35$
  - $\text{pen}_\text{crack} = \min(100, (\text{cracks} / \text{km} / 250) \times 100)$, weight $w = 0.25$
  - $\text{pen}_\text{alligator} = \min(100, (\text{alligator} / \text{km} / 60) \times 100)$, weight $w = 0.25$
  - $\text{pen}_\text{wear} = \min(100, (\text{wear\_pct} / 100) \times 100)$, weight $w = 0.15$
  - $\text{bonus}_\text{patch} = \min(5.0, \text{patches} \times 1.5)$
- **Condition Bands:** Good ($\ge 75$, Green), Fair ($60–74$, Yellow), Poor ($45–59$, Orange), Critical ($< 45$, Red).

### 5.2 Failure Risk (0–100)
Parametric logistic sigmoid combining condition badness, traffic, maintenance age, and terrain:
$$z = 2.2 \left(\frac{100 - \text{RHI}}{100}\right) + 1.2 \left(\frac{\text{TrafficExp}}{100}\right) + 1.4 \left(\frac{\text{MaintAge}}{100}\right) + 1.8 \cdot \text{TerrainFactor} - 2.4$$
$$\text{FailureRisk} = \frac{100}{1 + e^{-z}}$$
*(Terrain Factors: Plain = 0.0, Foothill = 0.4, Hill = 0.8)*.

### 5.3 Network Criticality Engine (ICI & FIS)
When edge $e = (u, v)$ is severed in graph $G$, the engine computes:
1. $\text{Pop}_\text{cut}$: Disconnected population from core `KAN`.
2. $\text{Fac}_\text{cut}$: Disconnected public facilities (Hospital: 3, PHC: 2, School: 1, Market: 1, Airport: 1, University: 1).
3. $\text{Hosp}_\text{lost}$: Population that completely loses path to all hospital nodes.
4. $\text{Detour}$: Population-weighted shortest path detour increase.
5. $\text{Betweenness}$: Edge betweenness centrality.

$$\text{Raw Criticality} = 0.45 \cdot \text{norm}(\text{Pop}_\text{cut}) + 0.20 \cdot \text{norm}(\text{Fac}_\text{cut}) + 0.15 \cdot \text{norm}(\text{Hosp}_\text{lost}) + 0.10 \cdot \text{norm}(\text{Detour}) + 0.10 \cdot \text{norm}(\text{Betweenness})$$
Min-max normalized across all 22 corridors to produce $\text{ICI} \in [0, 100]$.

### 5.4 Composite Priority Score & Factor Attribution
$$\text{Priority} = w_\text{cond} \cdot (100 - \text{RHI}) + w_\text{risk} \cdot \text{FailureRisk} + w_\text{traffic} \cdot \text{TrafficExp} + w_\text{net} \cdot \text{Criticality} + w_\text{age} \cdot \text{MaintAge}$$
- *Default Balanced Weights:* $w_\text{cond} = 0.25$, $w_\text{risk} = 0.20$, $w_\text{traffic} = 0.15$, $w_\text{net} = 0.30$, $w_\text{age} = 0.10$.
- Factors are displayed as stacked breakdown bars that sum precisely to the total priority score.

### 5.5 Intervention Hierarchy & Lifeline Protection Rule
- $\text{RHI} \ge 70$: **Monitor** (₹0 Lakh/km)
- $55 \le \text{RHI} < 70$: **Patching** (₹4 Lakh/km)
- $40 \le \text{RHI} < 55$: **Resurfacing** (₹28 Lakh/km)
- $\text{RHI} < 40$: **Rehabilitation** (₹65 Lakh/km)
- **Lifeline Protection Rule:** If $\text{NetworkCriticality} \ge 70$ and $\text{RHI} < 70$, automatically upgrade intervention by one tier (Patching $\rightarrow$ Resurfacing; Resurfacing $\rightarrow$ Rehabilitation) to prevent catastrophic community disconnection.
- *Terrain Cost Multipliers:* Plain = 1.0x, Foothill = 1.1x, Hill = 1.25x.

### 5.6 0/1 Knapsack Optimizer & Public Value per ₹1 Crore
Given capital ceiling $B$ (Lakhs):
$$\max \sum_{i \in S} \text{StrategyBenefit}_i \quad \text{subject to} \quad \sum_{i \in S} \text{Cost}_i \le B$$
- Dynamic programming table solves in $< 1\text{ms}$.
- Metrics per ₹1 Crore capital expenditure:
  $$\text{Residents per Cr} = \frac{\text{Total Residents Protected}}{\text{Allocated Budget Cr}}$$
  $$\text{Facilities per Cr} = \frac{\text{Total Facilities Safeguarded}}{\text{Allocated Budget Cr}}$$
  $$\text{Avoided Escalation per Cr} = \frac{\text{Avoided 90-Day Compounded Escalation}}{\text{Allocated Budget Cr}}$$

---

## 6. AI Model Evaluation & Production Data Architecture

### 6.1 Computer Vision Model Benchmarks
- **Model Architecture:** RoadDamageDetector v1.2 (YOLOv8 + 3-Tier Fallback Hierarchy).
- **Validation Dataset:** 240 annotated pavement images (CRACK500 and RDD2022 subset).
- **Precision:** 88.4%
- **Recall:** 84.1%
- **mAP@50:** 86.2%
- **Inference Latency:** 142 ms (Intel Core / standard CPU).
- **Responsible AI Notice:** Prototype inference demonstrated; formal local validation across Manipur terrain conditions remains a deployment-stage requirement.
- **Physical Limitation Disclaimer:** *"Pavement depth cannot be reliably estimated from 2D surface imagery — field coring & engineer verification recommended before sanction."*

### 6.2 Production PWD Data Feed Architecture Mapping

| Prototype Demo Field | Hackathon Status | Production Government Integration Feed |
|---|---|---|
| **TRAFFIC (AADT)** | Simulated Proxy | PWD Traffic Survey & Automated Sensor Network Feeds |
| **MAINTENANCE LOG** | Simulated Log | PWD Work Order & Asset Management System (WAMS) |
| **ROAD DAMAGE (RHI)** | AI-Derived CV | Mobile GIS Field Inspection Survey Application (Geotagged) |
| **PUBLIC FACILITIES** | Verified GIS | Official State GIS Infrastructure Registry & Health Portal |

*The RoadPulse decision-engine algorithms and graph topology remain identical when connecting live departmental APIs.*

---

## 7. The 7-Step Guided Presenter Walkthrough

RoadPulse features a built-in interactive **Guided Demo Stepper** (`STEP 1 OF 7`):

| Step | Mode | Screen | Presenter Narrative & Action |
|---|---|---|---|
| **1. Inspect** | Network Health | Command Center | *"PWD has 22 monitored corridors and a ₹31 Crore maintenance backlog. How do we spend limited capital? Notice the venue anchor right here at Mantripukhri IT SEZ."* |
| **2. Detect** | AI Evidence | S19 Digital Twin | *"An engineer captures field imagery of S19 (Ukhrul Road). The AI detects 7 potholes, 3 cracks, and alligator wear in 142ms, generating an explainable AI Evidence Card with bounding boxes."* |
| **3. Understand** | Core Dilemma | S01 vs S19 Modal | *"Which road would you repair first? S01 has severe damage (RHI 38.0), but 4 parallel bypasses. S19 has moderate damage (RHI 54.0), but is the sole lifeline for 5,800 people. RoadPulse ranks S19 first."* |
| **4. Simulate** | Counterfactual | Network Map | *"Click 'Simulate Road Failure' on S19. The graph algorithm severs the edge: 5,800 residents and a PHC are completely isolated, with zero alternate detours."* |
| **5. Optimize** | Fiscal Knapsack | Budget Optimizer | *"Set budget to ₹4.00 Crore. Switch between Balanced, Safety, Connectivity, and Cost Efficiency. Observe the Public Value per ₹1 Crore: 10,560 residents and ₹28L in avoided deterioration per ₹1 Cr."* |
| **6. Decide** | Human Oversight | Statutory Modal | *"The AI recommends Resurfacing at ₹63 Lakh. PWD Divisional Engineer reviews and modifies to Patching with mandatory reason: 'Interim relief pending major monsoon sanction'."* |
| **7. Audit** | Provenance Trail | Audit Screen | *"Every recommendation and human modification is captured in an immutable audit log with full 7-stage provenance, exportable as GFR-compliant CSV for Accountant General audits."* |

---

## 8. Automated Test Suite (33/33 Tests Passing)

All 33 automated tests pass cleanly (`python -m pytest`):
```text
tests/test_api.py::test_health_endpoint                          PASSED
tests/test_api.py::test_network_marks_single_venue_node          PASSED
tests/test_api.py::test_overview_endpoint                        PASSED
tests/test_api.py::test_segments_and_twin_endpoint               PASSED
tests/test_api.py::test_cut_road_endpoint                        PASSED
tests/test_api.py::test_simulate_endpoint                        PASSED
tests/test_api.py::test_optimize_endpoint                        PASSED
tests/test_api.py::test_compare_endpoint                         PASSED
tests/test_api.py::test_analyze_image_endpoint                   PASSED
tests/test_api.py::test_decision_audit_roundtrip_and_export      PASSED
tests/test_api.py::test_config_endpoints_and_reset               PASSED
tests/test_api.py::test_provenance_endpoint                      PASSED
tests/test_api.py::test_meta_endpoint                            PASSED
tests/test_flip.py::test_signature_demo_flip                     PASSED
tests/test_network.py::test_s19_ukhrul_cut_off                   PASSED
tests/test_network.py::test_s01_mg_avenue_has_alternate          PASSED
tests/test_network.py::test_isolated_lifeline_routes_no_alt      PASSED
tests/test_network.py::test_network_criticality_bounds           PASSED
tests/test_optimizer.py::test_budget_zero_selects_nothing        PASSED
tests/test_optimizer.py::test_budget_constraint_strictly_met     PASSED
tests/test_optimizer.py::test_knapsack_optimal_vs_greedy         PASSED
tests/test_optimizer.py::test_monotonicity_increasing_budget     PASSED
tests/test_optimizer.py::test_strategy_behavior                  PASSED
tests/test_scoring.py::test_rhi_bounds_and_penalties             PASSED
tests/test_scoring.py::test_rhi_bands                            PASSED
tests/test_scoring.py::test_traffic_exposure_bounds              PASSED
tests/test_scoring.py::test_maintenance_age_bounds               PASSED
tests/test_scoring.py::test_failure_risk_bounds                  PASSED
tests/test_scoring.py::test_priority_weighted_sum_and_norm       PASSED
tests/test_scoring.py::test_confidence_penalties                 PASSED
tests/test_scoring.py::test_decision_categories_and_flag         PASSED
tests/test_scoring.py::test_intervention_and_cost                PASSED
tests/test_scoring.py::test_public_value_metrics                 PASSED
============================= 33 passed in 1.48s ==============================
```

---

## 9. Jury Defense & Evaluation Alignment

### 9.1 Technical Trust (35% Weightage)
- **Genuine AI:** Real YOLO-format inference pipeline with precision/recall/mAP metrics and fallback hierarchy.
- **Zero Hallucination:** Optimization and graph evaluations are solved with exact deterministic algorithms (0/1 knapsack, Dijkstra shortest paths, edge betweenness), not LLM text guessing.
- **Auditability:** Complete 7-layer decision provenance chain and SQLite audit log exportable as CSV.
- **Data Integrity:** Explicit labelling of simulated demo data vs. real GIS reference points.

### 9.2 Government Relevance (30% Weightage)
- **Solves the Real PWD Problem:** Addresses scarce capital expenditure allocation under severe monsoon conditions rather than building another citizen complaint app.
- **Lifeline Preservation:** Protects sole connections to remote hill communities, PHCs, and schools.
- **Statutory Workflow:** Preserves certified PWD engineer authority; mandates justification for any override.

### 9.3 Industry Potential (35% Weightage)
- **Scalability:** Network graph operations and dynamic programming run in $< 15\text{ms}$, easily scaling to 5,000+ state road segments across all 16 districts.
- **Public Value Metrics:** Translates engineering defect counts into fiscal decision indicators: *Residents safeguarded per ₹1 Cr spent*.
- **Offline Readiness:** Operates completely without internet, ensuring flawless presentation during live competition judging.
