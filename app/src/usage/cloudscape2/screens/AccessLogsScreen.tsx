import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";

interface LogEntry {
  time: string;
  bucket: string;
  operation: string;
  requester: string;
  status: number;
}

const LOGS: LogEntry[] = [
  { time: "13:42:01", bucket: "cobalt-user-uploads", operation: "GET.OBJECT", requester: "svc-web", status: 200 },
  { time: "13:41:58", bucket: "cobalt-app-assets", operation: "PUT.OBJECT", requester: "svc-cdn", status: 200 },
  { time: "13:41:40", bucket: "cobalt-backup-archive", operation: "LIST.OBJECTS", requester: "svc-backup", status: 200 },
  { time: "13:40:12", bucket: "cobalt-user-uploads", operation: "GET.OBJECT", requester: "svc-web", status: 403 },
];

export function AccessLogsScreen {
  return (
    <Table<LogEntry>
      items={LOGS}
      variant="container"
      header={<Header counter={`(${LOGS.length})`}>최근 요청</Header>}
      columnDefinitions={[
        { id: "time", header: "시각", cell: (l) => <Box variant="samp">{l.time}</Box> },
        { id: "bucket", header: "버킷", cell: (l) => l.bucket },
        { id: "operation", header: "작업", cell: (l) => l.operation },
        { id: "requester", header: "요청자", cell: (l) => l.requester },
        { id: "status", header: "상태", cell: (l) => l.status },
      ]}
    />
  );
}
