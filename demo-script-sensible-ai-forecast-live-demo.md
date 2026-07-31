# Demo Script — SensibleAI Forecast Live Demo

**Source:** Sensible AI Forecast Demo for Regency Centers, 15 May 2026 · Presenter: Daniel Collura, AI Solution Consultant (Matt DeLise for MLOps / implementation Q&A) · Segment: ~23:30–49:00 (~25 min)
**Audience on source call:** Regency Centers + Riveron — adapt cube/dimension names, Maple/base-rent workflow, and external data sources to your prospect.

## At a glance
- **What you demo:** Live SensibleAI Forecast workspace — forecast setup for a REIT-style use case, model insights (seasonality, feature ranking), external data library (GDP, weather, traffic), explainability charts (landscaping vs. traffic), and scenario modeling (sales discount → unit sales and gross margin impact).
- **Core value message:** SensibleAI doesn't replace [adapt: Maple/field input] — it adds a **governed ML layer** that adjusts top-line forecasts using historical trends and external drivers, with full transparency into what moved the prediction and what-if scenarios without spreadsheet doubling.
- **Demo environment needed:** OneStream demo tenant with SensibleAI Forecast project loaded (retail/location-style dataset in recording); sample features: GDP, weather, traffic [Placer on call], CPI; scenario example: 25% sales discount.

## Argumentation structure
1. **Pain** — Top-line rent/revenue comes from field systems ([adapt: Maple]) but finance knows historical trends and external drivers mean the field number isn't always right; quarterly forecast too coarse to act.
2. **Status quo cost** — Manual adjustment layers in spreadsheets; no objective test of CPI, weather, seasonality; scenario what-ifs double effort.
3. **Capability** — SensibleAI sits as adjustment layer on imported targets; models train at granular intersections; feature ranking shows true corollaries; scenarios propagate to full P&L.
4. **Proof** — Live base-rent storyline Meghan validated ("exactly what I was thinking"); landscaping/traffic explainability; discount scenario: **117,000 → 121,000** unit sales with lower gross margin.
5. **Differentiator** — Shows external data sources and metric scores; supports custom features (landscaping work orders); retrain on demand — not opaque MLOps black box.
6. **Payoff** — Customer can scope subset of accounts (opex, captive portfolio, base rent) without full consolidation tie-out for initial ML history [adapt: Regency 2024–2025 now, three years by 2026].

## Setup / positioning (the opening 1–2 minutes)

*[Matt completes Key Concepts slides and hands off after Meghan's "what does it take to stand up" question gets a brief answer. Daniel shares screen on SensibleAI Forecast demo project.]*

"That being said — how frequent is your forecast today? Is it monthly, quarterly?"

*[Customer: quarterly today, moving to monthly in OneStream. Use that to frame granularity value.]*

"Over time we can work on building out the different drivers and applying AI on top of that to do your P&L calculations."

## Demo flow

| # | On screen (what to show/click) | Talk track (what to say) |
|---|---|---|
| 1 | Open SensibleAI Forecast project / workspace | "Let me show you what this looks like in practice — starting with how targets come in and where the ML layer sits." |
| 2 | Show target load from operational system ([adapt: Maple / field entry]) | "Think about base rent — top-line items coming in from [adapt: Maple], giving you what the field put in. Then there's a **layer on top** where SensibleAI says: actually it needs to be adjusted because of what we've experienced in historical trends or other variables." |
| 3 | Walk through forecast output vs. raw input | "This is exactly the pattern Meghan described — we're not replacing the field; we're adding a governed adjustment informed by the model." |
| 4 | Navigate to **model insights** / seasonality views | "These are things you can start to understand about your business — dive into the numbers — what are **actual true seasonal patterns** the model is recognizing?" |
| 5 | **Model arena** view — algorithms per intersection | "Any questions on this? Otherwise I'll cover a little bit more on the model arena up here — where the system ran the algorithms and picked best fit per intersection." |
| 6 | Show **metric score** (error measure) | "The metric score — it doesn't matter if you were under or over — it's measuring the amount of error between the prediction and the training or testing set. **The lower the number, the better.**" |
| 7 | Feature ranking / weighting chart | "By adding different features and testing them — seeing which ones weight and rank highest — it helps you understand **true corollaries** and what's actually causing increases or decreases in sales." |
| 8 | **External data library** — list sources (GDP, weather, traffic, etc.) | "Does it show what external data the model is using? Yes — here's the library. Traffic might come from [adapt: Placer]; GDP from standard macro feeds — you can see exactly what's in play." |
| 9 | Customer example: CPI + weather for opex | *[Meghan: "If we wanted CPI as an influencer for operating expense growth — region, account, line item, historical average, but consider CPI, winter weather, seasonality — it would take all of those and give us a projection."]* "Exactly — you'd configure those as features for the targets you care about." |
| 10 | Historical weather impact | "Will it take historical weather into consideration when looking backward at how that impacted historical amounts? **Yes.** Snow, landscaping seasons — anything you have data for." |
| 11 | Custom internal feature example (landscaping work orders) | "If you have work-order data where you're doing landscaping at properties — nothing stopping you from building another project, dropping that data in, and testing if it's correlated." |
| 12 | **Explainability chart** — landscaping vs. traffic | "When we're doing landscaping, we can see a couple periods where landscaping is actually **dragging traffic down** — people don't want to come in because there's work in front of the store. But later you pick up an **uptick** because it looks nicer. That's the kind of insight that's hidden in Excel." |
| 13 | Event analysis — Q2 sales event | "Our Q2 sales event didn't really bring anything up this month — the model helps you see that objectively instead of debating from gut feel." |
| 14 | Open **scenario modeling** | "Let me flip to a scenario snapshot — say we run a **25 percent sales discount**." |
| 15 | Show scenario results: unit sales + margin | "By offering a sales discount, we increased unit sales from **117,000 to 121,000** — but gross margin overall was lower because we lowered prices. Full P&L impact in one place." |
| 16 | Close scenario section | "It reduces the doubling of effort around testing hypothetical scenarios — finance as strategic advisor on what's going to have the biggest impact." |
| 17 | Pause for MLOps / retraining question | "Any questions? I think that covers about everything in the core workflow." |

## Key messages to land
- SensibleAI sits as an **adjustment layer** on top of field/operational inputs ([adapt: Maple]), not a replacement.
- **Seasonality** and **feature ranking** surfaced automatically — not hidden spreadsheet logic.
- **Metric score** = error vs. train/test set; lower is better (customization question — largely standard in SensibleAI).
- **External data sources are visible** — GDP, weather, traffic, CPI, etc.
- **Custom features** (landscaping work orders) testable via project wizard.
- Explainability shows **time-delayed effects** (landscaping ↓ traffic short-term, ↑ later).
- Scenario: **25% discount → 117k to 121k units**, gross margin down — full P&L propagation.
- Retraining: if accuracy drifts, **click a button** to kick off retraining [Matt] — can centralize from a controller/IT perspective.

## Live Q&A inside this segment

> **Q (Sumit Kumar):** "What is the metric score — is that MAPE? Can we customize it?"
> **A (Daniel Collura):** "It measures error between prediction and training/testing set — lower is better. Largely part of SensibleAI out of the box."

> **Q (Sumit Kumar):** "Does it show external data sources?"
> **A (Daniel Collura):** "Yes — let me jump over to the feature library and show you."

> **Q (Meghan Dones):** "Will it consider historical weather when looking backward?"
> **A (Daniel Collura):** "Yes."

> **Q (Sumit Kumar):** "Is training user-defined or continuous MLOps pipeline?"
> **A (Matt DeLise):** "If I'm drifting — getting less accurate — I click a button to kick off retraining. We can share what to think about for centralized controller/IT governance."

> **Q (Meghan Dones):** "This is in line with my expectations — how do we set this up in design? We only have 2024 and 2025; 2026 gets us to three years."
> **A (Matt DeLise + team):** Acknowledge design-phase embedding with [adapt: Riveron]; historical load is one-time exercise; subset of accounts (opex lines) may suffice without full consolidation tie-out.

> **Q (Jill Caffey):** "Pulling historical data is a massive undertaking — data validation, mapping adjustments. Can we load to another dimension just for ML, not variance analysis, with less stringent validation?"
> **A (Matt DeLise / Jill / Elvie):** Yes — often a **smaller subset** (expense line items), not full balance sheet tie-out; different validation bar for ML training vs. consolidation.

> **Q (Sumit Kumar):** "Transactional data lives in JDE — OneStream is consolidated level?"
> **A (Meghan Dones):** "We're not going to have transactional level data except cash receipts/AR — unit-level into OneStream is what we'd forecast in this phase."

## Transition out

"Coming out of this session, if other questions come up, we're happy to get back on the phone. Jessica — we'll connect at Splash next week on use cases and take steps to help you get moving as quickly and easily with this capability."

*[Meghan: "Appreciate the time — this was great."]*
