import * as React from "react";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import PieChart from "@cloudscape-design/components/pie-chart";
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

function statusType(status: number): "success" | "error" | "warning" {
  if (status >= 500) return "error";
  if (status >= 400) return "warning";
  return "success";
}

export function AccessLogsScreen {
  const [op, setOp] = React.useState(OP_OPTIONS[0]);
  const shown = LOGS.filter((l) => op.value === "all" || l.operation === op.value);
  const okCount = LOGS.filter((l) => l.status < 400).length;
  const warnCount = LOGS.filter((l) => l.status >= 400 && l.status < 500).length;
  const errCount = LOGS.filter((l) => l.status >= 500).length;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
      <Table<LogEntry>
        items={shown}
        variant="container"
        filter={
          <Select
            selectedOption={op}
            onChange={({ detail }) => setOp(detail.selectedOption as typeof OP_OPTIONS[number])}
            options={OP_OPTIONS}
            selectedAriaLabel="선택됨"
          />
        }
        header={<Header counter={`(${shown.length})`} description="이 계정의 최근 S3 요청">최근 요청</Header>}
        columnDefinitions={[
          { id: "time", header: "시각", cell: (l) => <Box variant="samp">{l.time}</Box> },
          { id: "bucket", header: "버킷", cell: (l) => l.bucket },
          { id: "operation", header: "작업", cell: (l) => l.operation },
          { id: "requester", header: "요청자", cell: (l) => l.requester },
          { id: "status", header: "상태", cell: (l) => <StatusIndicator type={statusType(l.status)}>{l.status}</StatusIndicator> },
        ]}
      />
      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "8px", padding: "0.9rem" }}>
        <Box fontWeight="bold" margin={{ bottom: "s" }}>응답 상태 분포</Box>
        <PieChart
          data={[
            { title: "성공(2xx)", value: okCount, color: "#3fd39e" },
            { title: "클라이언트 오류(4xx)", value: warnCount, color: "#ffb020" },
            { title: "서버 오류(5xx)", value: errCount, color: "#ff5c5c" },
          ]}
          size="medium"
          hideFilter
        />
      </div>
    </div>
  );
}
