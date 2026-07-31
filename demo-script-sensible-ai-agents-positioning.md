# Demo Script — SensibleAI Agents Positioning & Architecture

**Source:** SensibleAI Agents - MCP Server demo, 28 Jul 2026 · Presenter: Jesper Gardtman, Sales Specialist, AI · Segment: ~3:12–9:00 (~6 min)
**Audience on source call:** GBT Travel Services UK Limited (CFO, VP Finance, Finance Transformation, SME Finance Director) — adapt the hooks to your audience.

## At a glance
- **What you demo:** The *why* behind SensibleAI Agents — governed agentic AI for finance, the cost of ungoverned AI, extensible agent capabilities, and the “two front doors” architecture ending with MCP as the extension point to Claude and other LLMs.
- **Core value message:** Finance teams need **governed** agentic AI inside OneStream — not shadow AI in spreadsheets and chatbots — with a deliberate architecture that keeps the core platform performant and extensible.
- **Demo environment needed:** Positioning slide deck (titles below); no live product required until handoff to the live demo.

## Argumentation structure
1. **Pain** — Finance is under pressure to adopt AI, but ungoverned tools (standalone chatbots, copy-paste into Claude) create audit risk, inconsistent answers, and no tie-back to the system of record.
2. **Status quo cost** — “Ungoverned AI comes with a tax”: rework, reconciliation, governance gaps, and IT concern about performance impact on the core OneStream app.
3. **Capability** — SensibleAI Agents run as a governed layer on OneStream: pre-built finance agents, extensible by design, reachable from inside OneStream *or* via MCP from external AI clients like Claude.
4. **Proof** — Slide narrative (governed vs. ungoverned, two front doors, MCP extension slide) plus the architecture answer on agent infrastructure isolation.
5. **Differentiator** — Agents are provisioned on **separate infrastructure** so they do not slow the native OneStream application; governance and data access stay within OneStream’s security model.
6. **Payoff** — Customer teams can safely pilot agents on scoped cubes [adapt: customer named two cubes for their POC] and extend the same governed data access to Claude via MCP for VP-level self-serve analysis.

## Setup / positioning (the opening 1–2 minutes)

*[After customer context from account team — on this call Shivi noted the POC scope: agents on two cubes, testing cloud connector + MCP + finance agent.]*

"And Shivi, do you think it'd be helpful to just on a slide, summarize what the agents do before we head into the demo, or is the team prepped on the background?"

*[If they want the overview, continue with slides. If prepped, skip to architecture/MCP slide and hand off faster.]*

"On speaking to [adapt: your steering committee], we agreed we'd run the agents only on [adapt: N cubes] — which is why we've included the right people from the business — so they can see how the cloud connector would work, how the MCP connection would work, and how the finance agent works at a high level."

## Demo flow

| # | On screen (what to show/click) | Talk track (what to say) |
|---|---|---|
| 1 | Title / opening slide | "Thanks everyone — today we're going to show you the latest on our Agents and how they work through MCP to Claude and the rest of your AI stack." |
| 2 | **Governed agentic AI, built for finance.** | "We built SensibleAI Agents specifically for finance workflows — not a generic chatbot bolted onto ERP. Everything I'll show you is designed around close, reporting, analysis, and the way finance teams actually work in OneStream." |
| 3 | **Ungoverned AI comes with a tax.** | "The alternative — and what we see in a lot of organizations today — is ungoverned AI: analysts copying data into ChatGPT or Claude, building one-off prompts, getting answers that can't be audited or tied back to the cube. That comes with a tax — reconciliation, risk, and IT pushback. We want to give you the speed of AI *without* that tax." |
| 4 | **Agent capabilities, extensible by design.** | "Out of the box you get finance-oriented agents — analysis, reporting, search — but the platform is extensible. You're not locked into a fixed set of use cases. You can scope agents to the cubes, workflows, and audiences that matter for your organization." |
| 5 | **Two front doors. One architecture.** | "Architecturally, think of two front doors into the same governed layer. Door one: your finance users inside OneStream — business processes, scheduled analysis, cube views. Door two: external AI clients — in your case Claude — connecting through MCP. Same data, same governance, two entry points." |
| 6 | **Extending OneStream's Finance Agentic Layer with MCP.** | "MCP — Model Context Protocol — is how we expose OneStream context and tools to Claude safely. Your VPs can ask questions in Claude; Claude calls back to OneStream for governed data and actions. We'll show that live in a minute — Peter will drive the demo environment." |
| 7 | Pause on architecture slide; take questions | "So I think that's enough theory essentially, and I'll let Peter show it to you live. Any questions before we go into the demo?" |

## Key messages to land
- Governed agentic AI **built for finance** — not generic GenAI.
- **Ungoverned AI comes with a tax** — audit, rework, and risk.
- **Two front doors, one architecture** — OneStream UI + MCP to Claude.
- Agents run on **provisioned additional infrastructure** — "they don't impact the performance of the core application."
- POC scope can be deliberate: [adapt: "two cubes"] + cloud connector + MCP + finance agent.

## Live Q&A inside this segment

> **Q (Shivi Jain):** "Do we need to worry about any slowdown to our native OneStream app?"
> **A (Jesper Gardtman):** "We provision additional infrastructure that the agents run on — so they don't impact the performance of the core application."

## Transition out

"Perfect — Peter, over to you for the live walkthrough."
