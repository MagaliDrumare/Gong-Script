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

type ScriptStatus = "completed" | "planned";

interface DemoScript {
  readonly id: string;
  readonly subject: string;
  readonly status: ScriptStatus;
  readonly file?: string;
  readonly gongCall: string;
  readonly gongUrl?: string;
  readonly gongDate?: string;
  readonly presenter?: string;
  readonly segment?: string;
  readonly durationMin: number;
  readonly steps: number;
  readonly demoType: string;
  readonly coreMessage: string;
}

const GONG_CALL = {
  title: "SensibleAI Agents - MCP Server demo",
  date: "28 Jul 2026",
  durationMin: 35,
  customer: "GBT Travel Services UK Limited",
  url: "https://us-102578.app.gong.io/call?id=1659602167804289242",
};

const SCRIPTS: readonly DemoScript[] = [
  {
    id: "positioning",
    subject: "SensibleAI Agents Positioning & Architecture",
    status: "completed",
    file: "demo-script-sensible-ai-agents-positioning.md",
    gongCall: GONG_CALL.title,
    gongUrl: GONG_CALL.url,
    gongDate: GONG_CALL.date,
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
    status: "completed",
    file: "demo-script-sensible-ai-agents-mcp-live-demo.md",
    gongCall: GONG_CALL.title,
    gongUrl: GONG_CALL.url,
    gongDate: GONG_CALL.date,
    presenter: "Peter Gilfillan",
    segment: "9:46–30:11",
    durationMin: 20,
    steps: 15,
    demoType: "Live product",
    coreMessage: "Finance Analyst in OneStream + MCP/Claude for governed executive self-serve",
  },
];

const completed = SCRIPTS.filter((s) => s.status === "completed");
const lastScripts = [...completed].reverse();
const totalSteps = completed.reduce((sum, s) => sum + s.steps, 0);
const totalDemoMin = completed.reduce((sum, s) => sum + s.durationMin, 0);

type Filter = "all" | "completed";

function statusLabel(status: ScriptStatus): string {
  return status === "completed" ? "Ready" : "Planned";
}

function ScriptCard({ script }: { script: DemoScript }) {
  const dispatch = useCanvasAction();
  const isDone = script.status === "completed";

  return (
    <Card>
      <CardHeader trailing={<Pill active={isDone}>{statusLabel(script.status)}</Pill>}>
        {script.subject}
      </CardHeader>
      <CardBody>
        <Stack gap={10}>
          <Text size="small" tone="secondary">
            {script.coreMessage}
          </Text>
          <Row gap={16} wrap>
            {script.presenter ? (
              <Text size="small" tone="tertiary">
                Presenter: {script.presenter}
              </Text>
            ) : null}
            {script.durationMin > 0 ? (
              <Text size="small" tone="tertiary">
                {script.durationMin} min · {script.steps} steps
              </Text>
            ) : null}
            <Text size="small" tone="tertiary">
              {script.demoType}
            </Text>
          </Row>
          {script.file ? (
            <Row gap={8} wrap>
              <Button
                variant="primary"
                onClick={() =>
                  dispatch({ type: "openFile", path: script.file! })
                }
              >
                Open script
              </Button>
              {script.gongUrl ? (
                <Link href={script.gongUrl}>Open Gong call</Link>
              ) : null}
              <Text size="small" tone="quaternary">
                {script.file}
              </Text>
            </Row>
          ) : (
            <Text size="small" tone="tertiary" italic>
              Paste a Gong URL in chat with the gong-demo-script skill to generate this script.
            </Text>
          )}
          {script.segment ? (
            <Text size="small" tone="quaternary">
              Segment {script.segment} ·{" "}
              {script.gongUrl ? (
                <>
                  Source:{" "}
                  <Link href={script.gongUrl}>{script.gongCall}</Link>
                  {script.gongDate ? `, ${script.gongDate}` : null}
                </>
              ) : (
                <>Source: {script.gongCall}{script.gongDate ? `, ${script.gongDate}` : null}</>
              )}
            </Text>
          ) : null}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function GongDemoScriptsCanvas() {
  const dispatch = useCanvasAction();
  const [filter, setFilter] = useCanvasState<Filter>("filter", "all");

  return (
    <Stack gap={20} style={{ padding: 20, maxWidth: 960 }}>
      <Stack gap={6}>
        <H1>Gong Demo Script Library</H1>
        <Text tone="secondary">
          Enablement scripts extracted from Gong demo calls — one markdown file per subject demoed.
        </Text>
      </Stack>

      <Grid columns={3} gap={12}>
        <Stat value={String(completed.length)} label="Scripts ready" tone="success" />
        <Stat value={`${totalDemoMin} min`} label="Captured demo time" />
        <Stat value={String(totalSteps)} label="Rehearsal steps" />
      </Grid>

      <Stack gap={6}>
        <UsageBar
          total={completed.length}
          topLeftLabel={`${completed.length} scripts extracted`}
          topRightLabel="100% ready"
          segments={[{ id: "completed", value: completed.length, color: "green" }]}
        />
        <Text size="small" tone="quaternary">
          Source: OneStreamBlog workspace · Gong demo script pipeline · Jul 2026
        </Text>
      </Stack>

      <Row gap={8} wrap>
        <Pill active={filter === "all"} onClick={() => setFilter("all")}>
          All scripts
        </Pill>
        <Pill active={filter === "completed"} onClick={() => setFilter("completed")}>
          Ready
        </Pill>
      </Row>

      <CollapsibleSection
        title={GONG_CALL.title}
        count={completed.length}
        defaultOpen
        trailing={
          <Text size="small" tone="tertiary">
            {GONG_CALL.date} · {GONG_CALL.durationMin} min
          </Text>
        }
      >
        <Stack gap={12}>
          <Text size="small" tone="secondary">
            {GONG_CALL.customer} · {completed.length} scripts extracted from this call
          </Text>
          <Row gap={8}>
            <Button
              variant="secondary"
              onClick={() =>
                dispatch({
                  type: "newComposerChat",
                  userPrompt:
                    "Extract demo scripts from this Gong call using the gong-demo-script skill: " +
                    GONG_CALL.url,
                })
              }
            >
              Re-run extraction
            </Button>
            <Text size="small" tone="tertiary">
              Call ID 1659602167804289242
            </Text>
          </Row>
          <Grid columns={2} gap={12}>
            <ScriptCard script={completed[0]!} />
            <ScriptCard script={completed[1]!} />
          </Grid>
        </Stack>
      </CollapsibleSection>

      {filter !== "completed" ? (
        <Stack gap={8}>
          <H2>Last scripts</H2>
          <Text size="small" tone="tertiary">
            Most recently extracted from Gong · {GONG_CALL.date}
          </Text>
          <Stack gap={12}>
            <ScriptCard script={lastScripts[0]!} />
            <ScriptCard script={lastScripts[1]!} />
          </Stack>
        </Stack>
      ) : null}
    </Stack>
  );
}
