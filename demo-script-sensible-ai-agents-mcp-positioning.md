# Demo Script — SensibleAI Agents & MCP Server Positioning

**Source:** Allied Universal - OneStream Agents / MCP Server, 30 Jul 2026 · Presenter: David Respaldiza, Sales Specialist, AI · Segment: ~9:30–32:00 (~22 min)
**Audience on source call:** Allied Universal (VP Finance & BI, Office of the CFO) + Riveron partner — adapt CFO dashboard pain, version constraints, and BI stack references to your prospect.

## At a glance
- **What you demo:** The architecture story for SensibleAI Agents — native Finance Analyst agents inside OneStream vs. extending via **MCP Server** to Claude and other LLM clients — with governance, hallucination risk addressed, and Cox Enterprises proof.
- **Core value message:** Connect Claude (or any MCP client) to OneStream data **in a governed fashion** — not shadow AI — while native agents handle repeatable finance workflows without rebuilding dashboards from scratch every time.
- **Demo environment needed:** Slide deck (`Agentic AI in OneStream`, `Trusted secure unified AI`, `Finance Analyst - Native Agents`, `MCP: The intelligence layer`, `Native agents or MCP?`, `Agents in Action`); no live product until handoff.

## Argumentation structure
1. **Pain** — CFO wants executive dashboards now; current reporting takes **3–10 minutes per filter**; legacy BI (CXO, Domo) sets responsiveness expectations OneStream hasn't met yet.
2. **Status quo cost** — AI prototyping in Claude/Domo doesn't produce curated, repeatable, performant reports; non-deterministic NLQ creates quality risk for executives who won't validate dimensionality.
3. **Capability** — MCP Server (GA at Splash) connects external AI to governed OneStream data; native Finance Analyst agents provide embedded, standardized analysis inside the platform.
4. **Proof** — Cox Enterprises: **40,000+ hours** saved, **20+ FTE** equivalent across contract review, revenue recognition, and dynamic reporting/variance Q&A; typical implementation ~**10 weeks**.
5. **Differentiator** — Governed connection vs. exporting data to Claude; agents ground answers in cube data — not Google — when configured with analysis automation (shown in live demo).
6. **Payoff** — Executive dashboarding without always building net-new OneStream dashboards; power users get variance analysis in clicks, not Excel — while [adapt: implementation partner] designs for 9.3+ agent readiness.

## Setup / positioning (the opening 1–2 minutes)

*[Lee Stearns sets context: Allied uses Claude; urgent need is CFO dashboarding/executive reporting; MCP may circumvent building many dashboards. Israel notes CFO Tim expects CXO-level responsiveness — "I want my data now" — while production is still on [adapt: 8.5] moving to [adapt: 9.3]. Mike joins: urgent item is dashboarding; team has Domo with MCP cloud connection already.]*

"Nice to meet you — I'm David Respaldiza, I lead our SensibleAI practice for the region. Been at OneStream eight-plus years, much of that in the planning and consolidation components you're rolling out. Happy to talk through how agents and MCP might complement the work you're doing — especially around the reporting and executive visibility questions Lee mentioned."

"For the next hour, Dan and I will spend most of our time in the product. You'll see more at Splash, but today we're focused on **Agents and MCP** — and specifically how this might help with dashboarding and executive reporting without you having to build everything twice."

## Demo flow

| # | On screen (what to show/click) | Talk track (what to say) |
|---|---|---|
| 1 | **Agentic AI in OneStream** — portfolio overview | "OneStream's AI strategy is unified — Forecast, Agents, Studio — but not every finance problem needs the same tool. Today is agents: governed automation and analysis for the office of the CFO." |
| 2 | **Trusted, secure and unified AI** | "Everything I'll show sits inside the same security and governance model as your OneStream application — critical when your CFO is asking for data now but can't afford wrong answers." |
| 3 | **Agent capabilities, extensible by design** | "Agents aren't one-size-fits-all. You can scope them to the cubes, workflows, and audiences that matter — and extend over time as you move to [adapt: 9.3] and stabilize performance." |
| 4 | **Finance Analyst — Native Agents** | "Native agents like Finance Analyst live **inside** OneStream — embedded views, standardized reports, recurring analysis. This is the path when you want performant, repeatable dashboards, not a one-off Claude chart." |
| 5 | **MCP: The intelligence layer for agents** | "We announced MCP Server as **generally available at Splash this year**. MCP allows you to connect agentic AI solutions you already use — Claude, and others — to **express, visualize, and analyze OneStream data in a governed fashion**. You're already using MCP with Domo; same concept, system of record is OneStream." |
| 6 | **Native agents or MCP?** | "Two paths, one architecture. **Native agents** for curated, embedded, repeatable workflows — executive dashboards that don't rebuild differently for user A vs. user B. **MCP** for exploratory analysis in Claude where power users and eventually executives ask questions in natural language — but answers pull from governed data, not a spreadsheet upload." |
| 7 | **Agents in Action** — use case tiles | "Use cases we see: dynamic reporting and variance Q&A, contract/revenue recognition review, executive dashboarding. We'll show Finance Analyst live — including how we address the hallucination concern Mike raised." |
| 8 | Pause — check understanding | "I'll pause — is this making sense? Then I'll take Mike's questions on data accuracy and dashboard repeatability head-on." |

## Key messages to land
- MCP Server is **GA** — connects external LLMs to OneStream **in a governed fashion**.
- **Native agents vs. MCP** — repeatable embedded reporting vs. flexible NLQ in Claude; not either/or.
- Hallucination/accuracy is the #1 finance concern with probabilistic models — must be addressed in design (grounding, skill files, power-user vs. CFO access patterns).
- Cox reference: **40,000+ hours** saved, **20+ FTE** equivalent, three use cases including dynamic reporting/variance.
- Typical agent project ~**10 weeks** (configuration, environment learning, skill setup).
- Agents **won't fix foundational OneStream performance/cube design** — they connect to data as it exists today.
- Commercial note: Claude credits + OneStream agent usage — separate conversation (control tower / token model).

## Live Q&A inside this segment

> **Q (Mike Zierhut):** "How do we make sure natural language querying is the truth? AI isn't deterministic — same question, different answers an hour later."
> **A (David Respaldiza):** "Let's start with hallucinations and data accuracy — that's a huge risk for every finance team with LLM-powered solutions. [Walk through governance: grounded data access, skill files, native agent drill-down vs. raw LLM — detailed answer spans ~21:44–26:38, largely slide-supported in recording.] Setup and training in a typical **10-week** project is where we learn your environment and constrain answers to your cubes and dimensions."

> **Q (Mike Zierhut):** "Claude can spin up a dashboard fast — but we need it performant and as a standard OneStream report, not different every time. We prototype in AI, then port to Domo."
> **A (David Respaldiza):** "That's exactly the native agent path — embedded HTML or OneStream native reporting, standardized, not rebuilt per user. MCP/Claude for exploration; OneStream for curated production dashboards."

> **Q (Mike Zierhut):** "Dashboards take 3–10 minutes to filter today — is this performant?"
> **A (David Respaldiza):** "Understood — that's the architecture problem William's team is tackling. Agents inherit cube performance; we'll show embedded views designed for responsiveness, but foundational tuning still matters."

> **Q (Mike Zierhut):** "Double spend — Claude credits plus OneStream credits?"
> **A (Lee/David):** "Valid question — we'll cover control tower and commercial model in a dedicated session; saving token specifics for that conversation."

## Transition out

"Perfect — let me hand to Daniel. He'll show Finance Analyst live, including dashboards and how analysis automation plans address the variance and repeatability questions. Then we'll wrap with next steps."
