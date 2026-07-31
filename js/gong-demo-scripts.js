const REPO = {
  name: "MagaliDrumare/Gong-Script",
  url: "https://github.com/MagaliDrumare/Gong-Script",
  branch: "main",
  blobBase: "https://github.com/MagaliDrumare/Gong-Script/blob/main",
};

const CALLS = [
  {
    id: "mcp-agents",
    title: "SensibleAI Agents - MCP Server demo",
    date: "28 Jul 2026",
    isoDate: "2026-07-28",
    customer: "GBT Travel Services UK Limited",
    product: "SensibleAI Agents",
    url: "https://us-102578.app.gong.io/call?id=1659602167804289242",
    callId: "1659602167804289242",
    durationMin: 35,
  },
  {
    id: "forecast-regency",
    title: "Sensible AI Forecast Demo for Regency Centers",
    date: "15 May 2026",
    isoDate: "2026-05-15",
    customer: "Regency Centers + Riveron",
    product: "SensibleAI Forecast",
  },
];

const SCRIPTS = [
  {
    id: "agents-positioning",
    callId: "mcp-agents",
    subject: "SensibleAI Agents Positioning & Architecture",
    file: "demo-script-sensible-ai-agents-positioning.md",
    presenter: "Jesper Gardtman",
    segment: "3:12–9:00",
    durationMin: 6,
    steps: 7,
    demoType: "Slides",
    coreMessage: "Governed agentic AI for finance — two front doors, one architecture",
  },
  {
    id: "agents-live-demo",
    callId: "mcp-agents",
    subject: "SensibleAI Agents MCP Live Demo",
    file: "demo-script-sensible-ai-agents-mcp-live-demo.md",
    presenter: "Peter Gilfillan",
    segment: "9:46–30:11",
    durationMin: 20,
    steps: 15,
    demoType: "Live product",
    coreMessage: "Finance Analyst in OneStream + MCP/Claude for governed executive self-serve",
  },
  {
    id: "forecast-positioning",
    callId: "forecast-regency",
    subject: "SensibleAI Forecast Positioning & Architecture",
    file: "demo-script-sensible-ai-forecast-positioning.md",
    presenter: "Matt DeLise",
    segment: "6:30–23:30",
    durationMin: 17,
    steps: 14,
    demoType: "Slides",
    coreMessage:
      "Apply ML where accuracy and effort gains are asymmetric — explainability wins adoption",
  },
  {
    id: "forecast-live-demo",
    callId: "forecast-regency",
    subject: "SensibleAI Forecast Live Demo",
    file: "demo-script-sensible-ai-forecast-live-demo.md",
    presenter: "Daniel Collura",
    segment: "23:30–49:00",
    durationMin: 25,
    steps: 17,
    demoType: "Live product",
    coreMessage:
      "A governed ML adjustment layer on field inputs, with visible drivers and scenarios",
  },
];

const callsNewestFirst = [...CALLS].sort((a, b) =>
  b.isoDate.localeCompare(a.isoDate),
);
const products = [...new Set(CALLS.map((c) => c.product))];
const totalSteps = SCRIPTS.reduce((sum, s) => sum + s.steps, 0);
const totalDemoMin = SCRIPTS.reduce((sum, s) => sum + s.durationMin, 0);

const segmentColors = ["green", "blue"];

let product = "all";
const collapsed = new Set();

function githubUrl(file) {
  return `${REPO.blobBase}/${file}`;
}

function callById(id) {
  return CALLS.find((c) => c.id === id);
}

function scriptsForCall(id) {
  return SCRIPTS.filter((s) => s.callId === id);
}

function minutesForCall(id) {
  return scriptsForCall(id).reduce((sum, s) => sum + s.durationMin, 0);
}

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[ch],
  );
}

function renderStats() {
  const stats = [
    { value: SCRIPTS.length, label: "Scripts ready", tone: "success" },
    { value: CALLS.length, label: "Gong calls covered" },
    { value: `${totalDemoMin} min`, label: "Captured demo time" },
    { value: totalSteps, label: "Rehearsal steps" },
  ];

  return stats
    .map(
      (stat) => `
        <div class="stat">
          <div class="stat-value${stat.tone ? ` ${stat.tone}` : ""}">${escapeHtml(stat.value)}</div>
          <div class="stat-label">${escapeHtml(stat.label)}</div>
        </div>
      `,
    )
    .join("");
}

function renderUsageBar() {
  const segments = callsNewestFirst
    .map((call, index) => {
      const width = (minutesForCall(call.id) / totalDemoMin) * 100;
      const color = segmentColors[index % segmentColors.length];
      return `<div class="usage-segment ${color}" style="width: ${width}%"></div>`;
    })
    .join("");

  const breakdown = callsNewestFirst
    .map((call) => `${escapeHtml(call.product)} ${minutesForCall(call.id)} min`)
    .join(" · ");

  return `
    <div class="usage-labels">
      <span>${totalDemoMin} min across ${CALLS.length} calls</span>
      <span>${SCRIPTS.length} scripts ready</span>
    </div>
    <div class="usage-bar">${segments}</div>
    <p class="caption">Captured demo minutes per call · ${breakdown}</p>
  `;
}

function renderRepoCard() {
  return `
    <article class="card">
      <header class="card-header">
        <span>Repository</span>
        <span class="badge">Published</span>
      </header>
      <div class="card-body">
        <div class="card-actions">
          <a href="${REPO.url}" target="_blank" rel="noopener">${escapeHtml(REPO.name)}</a>
          <span class="file-name">branch ${escapeHtml(REPO.branch)} · ${SCRIPTS.length} scripts + canvas source</span>
        </div>
        <p class="card-source">
          Static dashboard served from <code>index.html</code>; canvas source kept at
          <code>canvas/gong-demo-scripts.canvas.tsx</code>.
        </p>
      </div>
    </article>
  `;
}

function renderFilters() {
  const pills = [
    { value: "all", label: "All products" },
    ...products.map((name) => ({ value: name, label: name })),
  ];

  return pills
    .map(
      (pill) => `
        <button type="button" class="pill${product === pill.value ? " active" : ""}"
          data-product="${escapeHtml(pill.value)}">${escapeHtml(pill.label)}</button>
      `,
    )
    .join("");
}

function renderScriptCard(script) {
  const call = callById(script.callId);
  const gongLink = call.url
    ? `<a href="${call.url}" target="_blank" rel="noopener">Open Gong call</a>`
    : "";
  const source = call.url
    ? `Source: <a href="${call.url}" target="_blank" rel="noopener">${escapeHtml(call.title)}</a>, ${escapeHtml(call.date)}`
    : `Source: ${escapeHtml(call.title)}, ${escapeHtml(call.date)}`;

  return `
    <article class="card">
      <header class="card-header">
        <span>${escapeHtml(script.subject)}</span>
        <span class="badge">Ready</span>
      </header>
      <div class="card-body">
        <p class="card-message">${escapeHtml(script.coreMessage)}</p>
        <div class="card-meta">
          <span>Presenter: ${escapeHtml(script.presenter)}</span>
          <span>${script.durationMin} min · ${script.steps} steps</span>
          <span>${escapeHtml(script.demoType)}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-primary" href="${escapeHtml(script.file)}">Open script</a>
          ${gongLink}
          <a href="${githubUrl(script.file)}" target="_blank" rel="noopener">View on GitHub</a>
        </div>
        <p class="card-source">Segment ${escapeHtml(script.segment)} · ${source}</p>
      </div>
    </article>
  `;
}

function renderCallSection(call, latest) {
  const scripts = scriptsForCall(call.id);
  const isOpen = !collapsed.has(call.id);
  const meta = `${escapeHtml(call.date)}${call.durationMin ? ` · ${call.durationMin} min` : ""} · ${scripts.length}`;

  const actions = call.url
    ? `
      <div class="call-actions">
        <a class="btn btn-secondary" href="${call.url}" target="_blank" rel="noopener">Open Gong call</a>
        <span class="caption">Call ID ${escapeHtml(call.callId)}</span>
      </div>
    `
    : `<p class="call-note">Gong URL not recorded for this call — add it to enable one-click re-extraction.</p>`;

  return `
    <section class="section">
      <button type="button" class="call-header${isOpen ? " open" : ""}"
        data-call="${escapeHtml(call.id)}" aria-expanded="${isOpen}">
        <span class="chevron">›</span>
        <span>${escapeHtml(call.title)}</span>
        ${latest ? '<span class="badge latest">Latest</span>' : ""}
        <span class="call-meta">${meta}</span>
      </button>
      <div class="call-body${isOpen ? "" : " hidden"}">
        <p class="call-intro">
          ${escapeHtml(call.customer)} · ${escapeHtml(call.product)} ·
          ${minutesForCall(call.id)} min captured across ${scripts.length} scripts
        </p>
        ${actions}
        <div class="cards-grid">${scripts.map(renderScriptCard).join("")}</div>
      </div>
    </section>
  `;
}

function render() {
  const visibleCalls =
    product === "all"
      ? callsNewestFirst
      : callsNewestFirst.filter((c) => c.product === product);

  document.getElementById("stats").innerHTML = renderStats();
  document.getElementById("usage").innerHTML = renderUsageBar();
  document.getElementById("repo").innerHTML = renderRepoCard();
  document.getElementById("filters").innerHTML = renderFilters();
  document.getElementById("calls").innerHTML = visibleCalls
    .map((call) => renderCallSection(call, call.id === callsNewestFirst[0].id))
    .join("");
}

document.getElementById("filters").addEventListener("click", (event) => {
  const pill = event.target.closest(".pill");
  if (!pill) return;
  product = pill.dataset.product;
  render();
});

document.getElementById("calls").addEventListener("click", (event) => {
  const header = event.target.closest(".call-header");
  if (!header) return;
  const id = header.dataset.call;
  if (collapsed.has(id)) {
    collapsed.delete(id);
  } else {
    collapsed.add(id);
  }
  render();
});

render();
