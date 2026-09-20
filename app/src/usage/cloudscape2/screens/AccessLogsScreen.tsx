import * as React from "react";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import PieChart from "@cloudscape-design/components/pie-chart";
import Popover from "@cloudscape-design/components/popover";
import Select from "@cloudscape-design/components/select";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";

interface LogEntry { time: string; bucket: string; operation: string; requester: string; status: number }

const LOGS: LogEntry[] = [
  { time: "13:42:01", bucket: "cobalt-user-uploads", operation: "GET.OBJECT", requester: "svc-web", status: 200 },
  { time: "13:41:58", bucket: "cobalt-app-assets", operation: "PUT.OBJECT", requester: "svc-cdn", status: 200 },
  { time: "13:41:40", bucket: "cobalt-backup-archive", operation: "LIST.OBJECTS", requester: "svc-backup", status: 200 },
  { time: "13:40:12", bucket: "cobalt-user-uploads", operation: "GET.OBJECT", requester: "svc-web", status: 403 },
  { time: "13:39:55", bucket: "cobalt-logs-raw", operation: "PUT.OBJECT", requester: "svc-logger", status: 200 },
  { time: "13:38:30", bucket: "cobalt-cdn-cache", operation: "GET.OBJECT", requester: "svc-cdn", status: 200 },
  { time: "13:37:12", bucket: "cobalt-video-transcodes", operation: "PUT.OBJECT", requester: "svc-transcoder", status: 500 },
  { time: "13:36:48", bucket: "cobalt-invoices", operation: "GET.OBJECT", requester: "svc-billing", status: 200 },
  { time: "13:35:20", bucket: "cobalt-user-uploads", operation: "DELETE.OBJECT", requester: "svc-web", status: 200 },
  { time: "13:34:05", bucket: "cobalt-ml-datasets", operation: "LIST.OBJECTS", requester: "svc-ml-pipeline", status: 200 },
  { time: "13:33:41", bucket: "cobalt-static-site", operation: "GET.OBJECT", requester: "anonymous", status: 403 },
  { time: "13:32:10", bucket: "cobalt-partner-exports", operation: "PUT.OBJECT", requester: "svc-export", status: 200 },
];

const OP_OPTIONS = [
  { label: "전체 작업", value: "all" },
  { label: "GET.OBJECT", value: "GET.OBJECT" },
  { label: "PUT.OBJECT", value: "PUT.OBJECT" },
  { label: "DELETE.OBJECT", value: "DELETE.OBJECT" },
  { label: "LIST.OBJECTS", value: "LIST.OBJECTS" },
];

// 컨테이너 임계값 56rem(896px), 표 폭과 도넛 셀 최소 폭 합산
const LAYOUT_CSS = `
.cs2-logs { container-type: inline-size; container-name: cs2logs; }
.cs2-logs-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
.cs2-logs-summary { order: -1; }
@container cs2logs (min-width: 56rem) {
  .cs2-logs-grid { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); align-items: start; }
  .cs2-logs-summary { order: 0; }
}
`;

function statusType(status: number): "success" | "error" | "warning" {
  if (status >= 500) return "error";
  if (status >= 400) return "warning";
  return "success";
}

const PAGE_SIZE = 8;

export function AccessLogsScreen {
  const [op, setOp] = React.useState(OP_OPTIONS[0]);
  const [page, setPage] = React.useState(1);
  const shown = LOGS.filter((l) => op.value === "all" || l.operation === op.value);
  const pages = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const paged = shown.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const okCount = LOGS.filter((l) => l.status < 400).length;
  const warnCount = LOGS.filter((l) => l.status >= 400 && l.status < 500).length;
  const errCount = LOGS.filter((l) => l.status >= 500).length;

  return (
    <div className="cs2-logs">
      <style>{LAYOUT_CSS}</style>
      <div className="cs2-logs-grid">
        <Table<LogEntry>
          items={paged}
          variant="container"
          filter={
            <Select
              selectedOption={op}
              onChange={({ detail }) => { setOp(detail.selectedOption as typeof OP_OPTIONS[number]); setPage(1); }}
              options={OP_OPTIONS}
              selectedAriaLabel="선택됨"
            />
          }
          pagination={<Pagination currentPageIndex={page} pagesCount={pages} onChange={({ detail }) => setPage(detail.currentPageIndex)} />}
          header={<Header counter={`(${shown.length})`} description="이 계정의 최근 S3 요청">최근 요청</Header>}
          columnDefinitions={[
            { id: "time", header: "시각", cell: (l) => <Box variant="samp">{l.time}</Box> },
            { id: "bucket", header: "버킷", cell: (l) => l.bucket },
            { id: "operation", header: "작업", cell: (l) => l.operation },
            { id: "requester", header: "요청자", cell: (l) => l.requester },
            { id: "status", header: "상태", cell: (l) => <StatusIndicator type={statusType(l.status)}>{l.status}</StatusIndicator> },
          ]}
        />
        <div
          className="cs2-logs-summary"
          style={{
            border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            borderRadius: "var(--semantic-radius-container)",
            padding: "0.9rem",
            minWidth: 0,
          }}
        >
          <Box fontWeight="bold" margin={{ bottom: "s" }}>
            응답 상태 분포{" "}
            <Popover
              triggerType="text"
              header="HTTP 상태 코드"
              content="2xx는 성공, 4xx는 요청 오류(권한·존재하지 않는 객체 등), 5xx는 서버 측 오류예요."
            >
              정보
            </Popover>
          </Box>
          <PieChart
            variant="donut"
            innerMetricValue={String(LOGS.length)}
            innerMetricDescription="요청"
            data={[
              { title: "성공(2xx)", value: okCount, color: "var(--semantic-bg-success-default)" },
              { title: "클라이언트 오류(4xx)", value: warnCount, color: "var(--semantic-bg-warning-default)" },
              { title: "서버 오류(5xx)", value: errCount, color: "var(--semantic-bg-danger-default)" },
            ]}
            size="small"
            hideFilter
          />
        </div>
      </div>
    </div>
  );
}
