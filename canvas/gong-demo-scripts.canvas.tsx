import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CollapsibleSection,
  Grid,
  H1,
  H2,
  Link,
  Pill,
  Row,
  Stack,
  Stat,
  Text,
  UsageBar,
  useCanvasAction,
  useCanvasState,
} from "cursor/canvas";

interface GongCall {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  /** Sortable form of `date`, newest call surfaces first. */
  readonly isoDate: string;
  readonly customer: string;
  readonly product: string;
  readonly url?: string;
  readonly callId?: string;
  readonly durationMin?: number;
}

interface DemoScript {
  readonly id: string;
  readonly callId: string;
  readonly subject: string;
  readonly file: string;
  readonly presenter: string;
  readonly segment: string;
  readonly durationMin: number;
  readonly steps: number;
  readonly demoType: string;
  readonly coreMessage: string;
}

const REPO = {
  name: "MagaliDrumare/Gong-Script",
  url: "https://github.com/MagaliDrumare/Gong-Script",
  branch: "main",
  blobBase: "https://github.com/MagaliDrumare/Gong-Script/blob/main",
};

const CALLS: readonly GongCall[] = [
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

const SCRIPTS: readonly DemoScript[] = [
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
    coreMessage: "Apply ML where accuracy and effort gains are asymmetric — explainability wins adoption",
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
    coreMessage: "A governed ML adjustment layer on field inputs, with visible drivers and scenarios",
  },
];

const callsNewestFirst = [...CALLS].sort((a, b) =>
  b.isoDate.localeCompare(a.isoDate),
);
const products = [...new Set(CALLS.map((c) => c.product))];
const totalSteps = SCRIPTS.reduce((sum, s) => sum + s.steps, 0);
const totalDemoMin = SCRIPTS.reduce((sum, s) => sum + s.durationMin, 0);

const usageColors = ["green", "blue"] as const;

function githubUrl(file: string): string {
  return `${REPO.blobBase}/${file}`;
}

function callById(id: string): GongCall {
  return CALLS.find((c) => c.id === id)!;
}

function scriptsForCall(id: string): DemoScript[] {
  return SCRIPTS.filter((s) => s.callId === id);
}

function minutesForCall(id: string): number {
  return scriptsForCall(id).reduce((sum, s) => sum + s.durationMin, 0);
}

function ScriptCard({ script }: { script: DemoScript }) {
  const dispatch = useCanvasAction();
  const call = callById(script.callId);

  return (
    <Card>
      <CardHeader trailing={<Pill active>Ready</Pill>}>{script.subject}</CardHeader>
      <CardBody>
        <Stack gap={10}>
          <Text size="small" tone="secondary">
            {script.coreMessage}
          </Text>
          <Row gap={16} wrap>
            <Text size="small" tone="tertiary">
              Presenter: {script.presenter}
            </Text>
            <Text size="small" tone="tertiary">
              {script.durationMin} min · {script.steps} steps
            </Text>
            <Text size="small" tone="tertiary">
              {script.demoType}
            </Text>
          </Row>
          <Row gap={8} wrap>
            <Button
              variant="primary"
              onClick={() => dispatch({ type: "openFile", path: script.file })}
            >
              Open script
            </Button>
            {call.url ? <Link href={call.url}>Open Gong call</Link> : null}
            <Link href={githubUrl(script.file)}>View on GitHub</Link>
          </Row>
          <Text size="small" tone="quaternary">
            Segment {script.segment} ·{" "}
            {call.url ? (
              <>
                Source: <Link href={call.url}>{call.title}</Link>, {call.date}
              </>
            ) : (
              <>
                Source: {call.title}, {call.date}
              </>
            )}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

function CallSection({ call, latest }: { call: GongCall; latest: boolean }) {
  const dispatch = useCanvasAction();
  const scripts = scriptsForCall(call.id);

  return (
    <CollapsibleSection
      title={call.title}
      count={scripts.length}
      defaultOpen
      trailing={
        <Row gap={8} align="center">
          {latest ? <Pill size="sm" active>Latest</Pill> : null}
          <Text size="small" tone="tertiary">
            {call.date}
            {call.durationMin ? ` · ${call.durationMin} min` : ""}
          </Text>
        </Row>
      }
    >
      <Stack gap={12}>
        <Text size="small" tone="secondary">
          {call.customer} · {call.product} · {minutesForCall(call.id)} min captured
          across {scripts.length} scripts
        </Text>
        {call.url ? (
          <Row gap={8} wrap align="center">
            <Button
              variant="secondary"
              onClick={() =>
                dispatch({
                  type: "newComposerChat",
                  userPrompt:
                    "Extract demo scripts from this Gong call using the gong-demo-script skill: " +
                    call.url,
                })
              }
            >
              Re-run extraction
            </Button>
            <Text size="small" tone="tertiary">
              Call ID {call.callId}
            </Text>
          </Row>
        ) : (
          <Text size="small" tone="quaternary" italic>
            Gong URL not recorded for this call — add it to enable one-click re-extraction.
          </Text>
        )}
        <Grid columns={2} gap={12}>
          {scripts.map((script) => (
            <div key={script.id}>
              <ScriptCard script={script} />
            </div>
          ))}
        </Grid>
      </Stack>
    </CollapsibleSection>
  );
}

export default function GongDemoScriptsCanvas() {
  const [product, setProduct] = useCanvasState<string>("product", "all");

  const visibleCalls =
    product === "all"
      ? callsNewestFirst
      : callsNewestFirst.filter((c) => c.product === product);

  return (
    <Stack gap={20} style={{ padding: 20, maxWidth: 960 }}>
      <Stack gap={6}>
        <H1>Gong Demo Script Library</H1>
        <Text tone="secondary">
          Enablement scripts extracted from Gong demo calls — one markdown file per subject demoed.
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value={String(SCRIPTS.length)} label="Scripts ready" tone="success" />
        <Stat value={String(CALLS.length)} label="Gong calls covered" />
        <Stat value={`${totalDemoMin} min`} label="Captured demo time" />
        <Stat value={String(totalSteps)} label="Rehearsal steps" />
      </Grid>

      <Stack gap={6}>
        <UsageBar
          total={totalDemoMin}
          topLeftLabel={`${totalDemoMin} min across ${CALLS.length} calls`}
          topRightLabel={`${SCRIPTS.length} scripts ready`}
          segments={callsNewestFirst.map((call, index) => ({
            id: call.id,
            value: minutesForCall(call.id),
            color: usageColors[index % usageColors.length],
          }))}
        />
        <Text size="small" tone="quaternary">
          Captured demo minutes per call ·{" "}
          {callsNewestFirst
            .map((c) => `${c.product} ${minutesForCall(c.id)} min`)
            .join(" · ")}
        </Text>
      </Stack>

      <Card>
        <CardHeader trailing={<Pill active>Published</Pill>}>Repository</CardHeader>
        <CardBody>
          <Stack gap={8}>
            <Row gap={12} wrap align="center">
              <Link href={REPO.url}>{REPO.name}</Link>
              <Text size="small" tone="tertiary">
                branch {REPO.branch} · {SCRIPTS.length} scripts + canvas source
              </Text>
            </Row>
            <Text size="small" tone="quaternary">
              Static dashboard served from `index.html`; canvas source kept at
              `canvas/gong-demo-scripts.canvas.tsx`.
            </Text>
          </Stack>
        </CardBody>
      </Card>

      <Row gap={8} wrap>
        <Pill active={product === "all"} onClick={() => setProduct("all")}>
          All products
        </Pill>
        {products.map((name) => (
          <div key={name}>
            <Pill active={product === name} onClick={() => setProduct(name)}>
              {name}
            </Pill>
          </div>
        ))}
      </Row>

      <Stack gap={8}>
        <H2>Calls and scripts</H2>
        {visibleCalls.map((call) => (
          <div key={call.id}>
            <CallSection
              call={call}
              latest={call.id === callsNewestFirst[0]!.id}
            />
          </div>
        ))}
      </Stack>
    </Stack>
  );
}
