# Demo Script — Finance Analyst Agent & Analysis Automation

**Source:** Allied Universal - OneStream Agents / MCP Server, 30 Jul 2026 · Presenter: Daniel Collura, AI Solution Consultant (David Respaldiza for wrap-up) · Segment: ~32:00–51:00 + ~53:00–60:00 (~25 min)
**Audience on source call:** Allied Universal — adapt cube names, dashboard examples, and Domo workflow references to your prospect.

## At a glance
- **What you demo:** Finance Analyst in OneStream — executive-style dashboards/cube views, variance analysis with **grounded** multi-dimensional drill (not Google hallucination), and **analysis automation plans** for recurring FP&A work.
- **Core value message:** Power users stop rebuilding Quick Views and Excel math — standard variance analysis with period toggles in clicks — while the agent drills into **your cube data** to explain why revenue or margin moved.
- **Demo environment needed:** OneStream demo tenant with Finance Analyst enabled; sample **Finance Analyst Cube View**; analysis automation plan configured for revenue/gross margin variance drill scenario.

## Argumentation structure
1. **Pain** — Analysts prototype dashboards in AI, then manually port to Domo; CFO can't prompt safely; variance analysis is Excel-heavy and backward-looking.
2. **Status quo cost** — 3–10 minute dashboard filters; non-repeatable AI outputs; variance reports answered with gut feel or external search.
3. **Capability** — Embedded dashboards in OneStream; agent pulls subsequent cube slices automatically; scheduled/event-triggered analysis plans.
4. **Proof** — Live dashboard "on par" with what Allied wants to build; drill from division → product → customer/region; Cox-style efficiency Mike explicitly resonated with.
5. **Differentiator** — Grounding: agent won't "go look on Google" for why Allied has a variance — it finds anomalies in **actual data** at lower granularity.
6. **Payoff** — Recurring analysis plans give time back to FP&A, financial reporting, and accounting — automate the "where did this variance come from?" work.

## Setup / positioning (the opening 1–2 minutes)

*[David completes positioning and Mike's accuracy/performance concerns. Daniel shares screen on demo workspace — not slides. Confirm Mike's Domo prototyping workflow.]*

"You mentioned your team prototypes dashboards with AI, then standardizes into Domo for hosting — power users doing that today. Let me show what it looks like when the curated, performant version lives **inside** OneStream with the agent doing the variance legwork."

## Demo flow

| # | On screen (what to show/click) | Talk track (what to say) |
|---|---|---|
| 1 | Open **Finance Analyst** / agent workspace in OneStream | "This is Finance Analyst — native agent inside the platform, connected to your governed cubes." |
| 2 | Show **Finance Analyst Cube View** — executive dashboard layout | "Is this kind of on par with the dashboards you all were thinking about building? [adapt: Allied parallel-thread POC requirements]" |
| 3 | Navigate embedded dashboard — period/scenario selectors if shown | "The goal is embedded and standardized — HTML embedded view or native OneStream reporting — **not** rebuilding something slightly different for user A versus user B every time." |
| 4 | Show variance at summary level (revenue / gross margin) | "Start top of house — material variance at the division level. Without automation, someone exports this and starts slicing in Excel." |
| 5 | Trigger agent variance analysis — drill path | "We take it steps further — letting the agent make subsequent pulls within your cubes to explain what it's seeing. For revenue or gross margin variances: drill by **product** — if nothing stands out, keep drilling into **customers**, **regions**." |
| 6 | Show grounded explanation output | "This takes away the hallucinations you'd see if you handed a variance report to a generic agent — it might say 'that's a variance' and go look on **Google** for why Allied has a variance. **This** grounds the reason in your data — an anomaly at lower granularity is why you see the variance here." |
| 7 | Mention roadmap: relational / stage tables | "We're continuing to build this out — relational data tables, stage tables — so the agent can pull more reasons from across the platform, not just the cube view you started from." |
| 8 | Show analysis output summary panel | "This gives you top-level answers you can validate, drill further, and shift from always backward-looking fire drills to understanding where you're going." |
| 9 | Navigate to **Analysis Automation Plans** (exact menu path varies) | "David mentioned we'd show this in about three minutes — this is where recurring work gets automated." |
| 10 | Configure or show existing plan — time-based or event trigger | "Set up a plan that kicks off on a schedule or when an event happens — variance analysis, report refresh, dimension updates — the work your FP&A and reporting teams do manually today." |
| 11 | Tie back to Cox / time savings narrative | "Same pattern as the Cox story — dynamic reporting questions every day: 'update this report with these dimensions,' 'why did revenue move?' — automated instead of inbox-driven." |
| 12 | Pause for reaction | "Being able to do standard variance analysis — click a button, change the month or comparison point, boom — versus Quick Views and Excel math. Does this resonate with how your power users work today?" |

## Key messages to land
- Embedded dashboards can match what customer is trying to build — **standardized**, not one-off Claude charts.
- Variance drill is **multi-step and automatic**: division → product → customer/region.
- Answers are **grounded in OneStream data**, not external LLM guesswork ("won't go look on Google").
- Roadmap: **relational and stage tables** for richer variance explanations.
- **Analysis automation plans** = recurring/time- or event-triggered agent work → time back to FP&A, reporting, accounting.
- CFO-safe pattern: power users prompt with dimensionality knowledge; executives consume **curated** outputs [adapt: Tim / CFO persona].
- Agents inherit existing cube performance — won't fix 8.5/9.3 architecture debt alone.

## Live Q&A inside this segment

> **Q (Mike Zierhut):** "We prototype in AI, then move to Domo — is that the model you expect?"
> **A (Daniel Collura):** "Today that's your workflow — we're showing the path to host inside OneStream so you don't have to port. Domo MCP experience helps for Claude connectivity; native agents for production dashboards."

> **Q (Mike Zierhut):** "CFO doesn't know our dimensionality — I'm concerned about prompting."
> **A (Daniel/David):** "Agreed — curated dashboards and automation plans for executives; Claude/MCP for analysts who know the model. Don't open unconstrained NLQ to the CFO day one."

> **Q (Mike Zierhut):** "Slideware is great — I want to see it in our environment. Prototype or full decision?"
> **A (Lee/David):** "Let's align with William and the AI team on next steps — likely POC in your environment after commercial session. You can still want this even if 9.3 migration limits near-term adoption."

> **Q (Mike Zierhut):** "Claude credits + OneStream credits — double spend?"
> **A (David Respaldiza):** "Deferred to dedicated 30-minute commercial review — control tower and token assumptions."

> **Q (Mike Zierhut):** "Can this replace fixing our OneStream performance problems?"
> **A (David Respaldiza):** "No — if you have foundational cube/setup issues, agents connect to that data as it exists. William's work on performance is parallel, not replaced by agents — though AI may help architect solutions too."

## Transition out

"I know you'll want more on implementation, configuration, and cost — if it was free, you'd probably do it tomorrow. Does this give you good ideas for how to leverage agent capability?"

*[Mike: "No brainer" pending commercial discussions; align with William on whether to raise in next meeting; Lee to schedule commercial deep-dive.]*

"Coming out of Splash and your session with the broader team, we'll take steps to help you get moving as quickly as possible. Reach out anytime."
