const GONG_CALL = {
  title: "SensibleAI Agents - MCP Server demo",
  date: "28 Jul 2026",
  durationMin: 35,
  customer: "GBT Travel Services UK Limited",
  url: "https://us-102578.app.gong.io/call?id=1659602167804289242",
};

const SCRIPTS = [
  {
    id: "positioning",
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
    id: "live-demo",
    subject: "SensibleAI Agents MCP Live Demo",
    file: "demo-script-sensible-ai-agents-mcp-live-demo.md",
    presenter: "Peter Gilfillan",
    segment: "9:46–30:11",
    durationMin: 20,
    steps: 15,
    demoType: "Live product",
    coreMessage: "Finance Analyst in OneStream + MCP/Claude for governed executive self-serve",
  },
];

const lastScripts = [...SCRIPTS].reverse();
const totalSteps = SCRIPTS.reduce((sum, s) => sum + s.steps, 0);
const totalDemoMin = SCRIPTS.reduce((sum, s) => sum + s.durationMin, 0);

let filter = "all";

function renderScriptCard(script) {
  return `
    <article class="card">
      <header class="card-header">
        <span>${script.subject}</span>
        <span class="badge">Ready</span>
      </header>
      <div class="card-body">
        <p class="card-message">${script.coreMessage}</p>
        <div class="card-meta">
          <span>Presenter: ${script.presenter}</span>
          <span>${script.durationMin} min · ${script.steps} steps</span>
          <span>${script.demoType}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-primary" href="${script.file}">Open script</a>
          <a href="${GONG_CALL.url}" target="_blank" rel="noopener">Open Gong call</a>
          <span class="file-name">${script.file}</span>
        </div>
        <p class="card-source">
          Segment ${script.segment} · Source:
          <a href="${GONG_CALL.url}" target="_blank" rel="noopener">${GONG_CALL.title}</a>, ${GONG_CALL.date}
        </p>
      </div>
    </article>
  `;
}

function renderCards(scripts) {
  return scripts.map(renderScriptCard).join("");
}

function updateView() {
  const callSection = document.getElementById("call-section");
  const lastSection = document.getElementById("last-section");

  callSection.classList.toggle("hidden-section", filter === "completed");
  lastSection.classList.toggle("hidden-section", filter === "completed");

  document.querySelectorAll(".pill").forEach((pill) => {
    pill.classList.toggle("active", pill.dataset.filter === filter);
  });
}

document.getElementById("call-cards").innerHTML = renderCards(SCRIPTS);
document.getElementById("last-cards").innerHTML = renderCards(lastScripts);

document.querySelectorAll(".pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    filter = pill.dataset.filter;
    updateView();
  });
});

const callToggle = document.getElementById("call-toggle");
const callBody = document.getElementById("call-body");

callToggle.addEventListener("click", () => {
  callToggle.classList.toggle("open");
  callBody.classList.toggle("hidden");
});

updateView();
