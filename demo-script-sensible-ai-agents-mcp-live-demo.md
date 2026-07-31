# Demo Script — SensibleAI Agents MCP Live Demo

**Source:** SensibleAI Agents - MCP Server demo, 28 Jul 2026 · Presenter: Peter Gilfillan, Sr AI Solution Consultant (Jesper Gardtman for architecture/licensing Q&A) · Segment: ~9:46–30:11 (~20 min)
**Audience on source call:** GBT Travel Services UK Limited — adapt cube names, variance examples, and executive report titles to your prospect's data.

## At a glance
- **What you demo:** Live Finance Analyst agent in OneStream (cube view, variance drill-down), workflow embedding via scheduled analysis plans, MCP/Claude architecture for context and external access, then PowerPoint connector + live dashboards/visualizations in Claude.
- **Core value message:** Finance users get AI-driven analysis **inside** governed OneStream workflows today, while executives can ask questions and build presentations in Claude against the **same** governed data via MCP — without a separate licensing gate for every query pattern.
- **Demo environment needed:** OneStream demo tenant with Finance Analyst agent enabled; sample cube view (R&D / product-line variance storyline on call); Claude connected via MCP; PowerPoint connector sample deck (Monthly Product Review, Executive Summary, Product Line Scorecard, Revenue Trend slides were shown).

## Argumentation structure
1. **Pain** — Month-end and business reviews require hours of manual variance explanation, deck building, and ad hoc analysis; leaders want answers in natural language without waiting on FP&A.
2. **Status quo cost** — Copy-paste into Claude loses governance; building every dashboard and slide manually in OneStream + PowerPoint doesn't scale for VP self-serve.
3. **Capability** — Finance Analyst agent explains variances from the cube, supports drill-down (including XF GetCell), embeds in business processes / scheduled analysis plans; MCP extends the same context to Claude for decks and visualizations.
4. **Proof** — Live RD variance question; workflow/scheduled analysis example; PowerPoint connector producing executive slides; live period toggle on dashboards in Claude.
5. **Differentiator** — Context and hierarchy live in OneStream (e.g., chart of accounts); Claude prompts for a monthly business review stay in Claude while **data access** stays governed through OneStream — not a free-form export.
6. **Payoff** — VP group can self-serve in Claude with question templates [adapt: customer planned to share templates]; FP&A keeps control of cubes, agents, and infrastructure separation from core app performance.

## Setup / positioning (the opening 1–2 minutes)

*[Jesper hands off after theory slides. Confirm no blocking questions, then share screen on OneStream demo workspace — not the slide deck.]*

"Alright — I'm going to show you how this looks in practice. We'll start inside OneStream with the Finance Analyst, then connect the dots to Claude and MCP, and finish with how teams are using the PowerPoint connector and dashboards for executive reporting."

## Demo flow

| # | On screen (what to show/click) | Talk track (what to say) |
|---|---|---|
| 1 | Open **Finance Analyst** workspace / agent entry point in OneStream | "This is the Finance Analyst experience inside OneStream — same governed data your team already trusts, but with an agent that can interpret variances and guide analysis." |
| 2 | Show **Finance Analyst Cube View** (period vs. prior period) | "Here's our cube view — [adapt: product line / RD / entity] — with actuals vs. plan or prior year. This is the system of record; the agent isn't hallucinating numbers from a spreadsheet." |
| 3 | Highlight a variance cell (e.g., RD line item) | "We have the standard functionality where we could drill down from here or see the individual cell point of view — maybe the XF GetCell formula — so you can always reconcile what the agent is looking at." |
| 4 | Prompt the agent: *"What is the biggest driver of that RD variance?"* (or equivalent) | "Let me ask the question the way a finance leader would: 'What is the biggest driver of that RD variance?' — and as that runs through, I want to pause really quickly and see if there were any questions so far on what we are seeing." |
| 5 | Show agent response / explanation on screen | *[Walk through the agent's narrative of drivers — tie each point back to drillable cells. Pause for reactions.]* |
| 6 | Navigate to **business process / scheduled analysis** configuration (exact menu path varies by release) | "This is a great example of where we see things following around workflows within OneStream — business processes that enable users to have a starting point on where they begin an analysis using these scheduled analysis plans within OneStream. You're not starting from a blank chat every month-end." |
| 7 | Explain embedding for month-end / forecast workflows | "For month-end or forecast, you can embed the agent at the step where analysis begins — same cube, same period, same prompts — so the process changes from 'export and explain in email' to 'open the process and the agent already knows the context.'" |
| 8 | Switch to architecture diagram or whiteboard — **OneStream ↔ MCP ↔ Claude** | "George asked the right question on context — if you're OneStream plus Claude, where is the learning stored? The chart of accounts hierarchy, your mappings, your agent configuration — that lives in OneStream. Claude is the interface; OneStream is the governed brain." |
| 9 | Clarify Claude prompt vs. OneStream context | "If you're preparing a monthly business review through a Claude connection — that prompt stays in Claude. What doesn't leave your governance model is **how** Claude gets data: through MCP back to OneStream, not a CSV on someone's laptop." |
| 10 | Show MCP connection / Claude session querying OneStream (browser on Claude) | "But if you are processing things out on Claude, MCP sits between your Claude session and OneStream — because that's where the content is being originated from. Does that make sense?" |
| 11 | **PowerPoint connector** — generate or open deck | "I know how much this means to finance teams out there that are required to produce a multitude of presentations on a pretty regular cadence — so let me pause there. Any takeaways or questions?" |
| 12 | Show generated slides: **Monthly Product Review**, **Executive Summary – YTD**, **Product Line Scorecard**, **Revenue Trend** | "These are the kinds of outputs we're seeing — executive summary, scorecard, trend views — populated from OneStream through the connector, not manually refreshed slide by slide." |
| 13 | Show **live dashboard** in Claude — change period | "Jerome asked about self-serve dashboards — you can create nomenclature and update it monthly once you have your structure. And it's still a live version — users can change the period and it's updated, right?" |
| 14 | Show Claude-created visualization | "But I feel like it's much more powerful with Claude's ability to create visualizations like this — charts and views you'd never hand-build in a static deck." |
| 15 | Wrap live demo; open floor for licensing / implementation | "Happy to go deeper on any of these threads — cubes, question templates, or how long it takes to train agents for your hierarchies." |

## Key messages to land
- Finance Analyst works on **real cube views** with drill-down and XF GetCell traceability.
- Natural-language variance questions ("biggest driver of RD variance") produce **governed**, reconcilable answers.
- **Scheduled analysis plans / business processes** embed agents into month-end and forecast — not one-off chats.
- **Context and hierarchy** (chart of accounts, agent training) live in OneStream; Claude MCP prompts stay in Claude but data access is governed.
- **PowerPoint connector** automates executive decks (MBR, scorecard, trends) for teams that live in presentations.
- **Dashboards in Claude** can be live — period changes refresh governed data.
- OneStream does **not** gate MCP/Claude queries on a specific interactive vs. view-only license type — "we don't make a distinction as to what specific OneStream user license is" for this access pattern [confirm current SKU policy with product before customer-facing commit].
- Reference customer: **Howden** uses finance agent + search [adapt or verify reference eligibility].

## Live Q&A inside this segment

> **Q (George Anderson-Brown):** "As you think about month-end or forecast workflows — where have you seen this done well, and what does it change vs. today?"
> **A (Peter Gilfillan):** "We see it around workflows and business processes — scheduled analysis plans give users a starting point for analysis inside OneStream instead of ad hoc exports."

> **Q (George Anderson-Brown):** "Do you always have to be in OneStream — user license vs. business partner without access?"
> **A:** "For the governed agent path inside OneStream, yes — licensed users in the platform. MCP extends access patterns for those you've provisioned on the Claude side, but data still flows through OneStream governance."

> **Q (George Anderson-Brown):** "Where is context / learning stored for OneStream + Claude? Example: chart of accounts hierarchy; does an MBR prompt stay in Claude?"
> **A (Peter Gilfillan + Jesper):** Context and hierarchy are configured in OneStream for the finance agent. Claude holds the conversation; MCP governs data retrieval. MBR prompts stay in Claude; OneStream supplies governed context.

> **Q (Jerome Gandriaux):** "Can you say more about self-serve dashboards and monthly nomenclature updates?"
> **A (Peter Gilfillan):** Show live dashboard with period toggle; explain template/nomenclature pattern once structure is defined.

> **Q (Satyapal Rawat):** "To create this dashboard, do you need a pre-built cube view or will the agent create on the fly?"
> **A:** *[Confirm in your environment — demo implied existing cube views; clarify agent can work with configured views and Claude can visualize on top.]*

> **Q (Satyapal Rawat):** "Does querying from Claude require an interactive OneStream license?"
> **A (Jesper Gardtman):** "We don't make a distinction as to what specific OneStream user license is."

> **Q (James Flynn):** "How long does it take to train agents and get them up to speed?"
> **A (Jesper/Peter):** *[Not fully answered on call — prepare your implementation benchmark; offer follow-up workshop.]*

> **Q (George Anderson-Brown):** "Do you have anyone live today we could speak with?"
> **A (Jesper Gardtman):** "Absolutely, we can set that up." [Reference Howden for finance agent on call.]

## Transition out

"Great questions — Jon, anything else from the team before we wrap?"

*[Jon closes: feel free to contact us directly or through your account contact.]*
