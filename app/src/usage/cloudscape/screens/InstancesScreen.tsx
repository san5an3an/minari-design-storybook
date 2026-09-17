import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import Select from "@cloudscape-design/components/select";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";

interface Instance {
  id: string;
  type: string;
  status: "running" | "stopped" | "pending";
  region: string;
  launched: string;
  cpu: number;
}

const INSTANCES: Instance[] = [
  { id: "i-0a1b2c3d", type: "m6g.large", status: "running", region: "ap-northeast-2", launched: "2026-09-01", cpu: 34 },
  { id: "i-0e4f5g6h", type: "t3.medium", status: "running", region: "ap-northeast-2", launched: "2026-09-03", cpu: 12 },
  { id: "i-0i7j8k9l", type: "c6i.xlarge", status: "stopped", region: "ap-northeast-2", launched: "2026-08-22", cpu: 0 },
  { id: "i-0m1n2o3p", type: "m6g.large", status: "pending", region: "ap-northeast-2", launched: "2026-09-15", cpu: 0 },
  { id: "i-0q4r5s6t", type: "r6g.large", status: "running", region: "ap-northeast-1", launched: "2026-08-30", cpu: 61 },
  { id: "i-0u8v9w0x", type: "t3.small", status: "running", region: "ap-northeast-2", launched: "2026-09-10", cpu: 8 },
  { id: "i-0y1z2a3b", type: "m6g.xlarge", status: "running", region: "ap-northeast-2", launched: "2026-07-18", cpu: 47 },
  { id: "i-0c4d5e6f", type: "c6i.large", status: "stopped", region: "ap-northeast-1", launched: "2026-06-05", cpu: 0 },
  { id: "i-0g7h8i9j", type: "r6g.xlarge", status: "running", region: "ap-northeast-2", launched: "2026-09-12", cpu: 72 },
  { id: "i-0k1l2m3n", type: "t3.medium", status: "running", region: "ap-northeast-2", launched: "2026-09-14", cpu: 19 },
  { id: "i-0o4p5q6r", type: "m6g.large", status: "pending", region: "ap-northeast-1", launched: "2026-09-16", cpu: 0 },
  { id: "i-0s7t8u9v", type: "c6i.xlarge", status: "running", region: "ap-northeast-2", launched: "2026-05-29", cpu: 55 },
];

const STATUS_TYPE: Record<Instance["status"], "success" | "stopped" | "pending"> = {
  running: "success",
  stopped: "stopped",
  pending: "pending",
};

const REGION_OPTIONS = [
  { label: "전체 리전", value: "all" },
  { label: "ap-northeast-2", value: "ap-northeast-2" },
  { label: "ap-northeast-1", value: "ap-northeast-1" },
];

const PAGE_SIZE = 6;

export function InstancesScreen {
  const [query, setQuery] = React.useState("");
  const [region, setRegion] = React.useState(REGION_OPTIONS[0]);
  const [page, setPage] = React.useState(1);

  const filtered = INSTANCES.filter(
    (i) => (region.value === "all" || i.region === region.value) && i.id.includes(query),
  );
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const shown = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="cloudscape-dark-scope" style={{ colorScheme: "dark", background: "#0b1622", borderRadius: "8px", padding: "1.25rem" }}>
      <div style={{ background: "#14233a", border: "1px solid #223349", borderRadius: "8px", padding: "0.9rem" }}>
        <Table<Instance>
          items={shown}
          variant="embedded"
          filter={
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <TextFilter
                filteringText={query}
                onChange={({ detail }) => { setQuery(detail.filteringText); setPage(1); }}
                filteringPlaceholder="인스턴스 ID로 찾기"
                countText={`${filtered.length}개 일치`}
              />
              <Select
                selectedOption={region}
                onChange={({ detail }) => { setRegion(detail.selectedOption as typeof REGION_OPTIONS[number]); setPage(1); }}
                options={REGION_OPTIONS}
                selectedAriaLabel="선택됨"
              />
            </div>
          }
          pagination={<Pagination currentPageIndex={page} pagesCount={pages} onChange={({ detail }) => setPage(detail.currentPageIndex)} />}
          header={
            <Header counter={`(${INSTANCES.length})`} description="이 계정에 떠 있는 인스턴스 목록">
              인스턴스
            </Header>
          }
          columnDefinitions={[
            { id: "id", header: "인스턴스 ID", cell: (i) => <Box variant="samp">{i.id}</Box> },
            { id: "type", header: "유형", cell: (i) => <Badge color="grey">{i.type}</Badge> },
            { id: "status", header: "상태", cell: (i) => <StatusIndicator type={STATUS_TYPE[i.status]}>{i.status}</StatusIndicator> },
            { id: "cpu", header: "CPU", cell: (i) => `${i.cpu}%` },
            { id: "region", header: "리전", cell: (i) => i.region },
            { id: "launched", header: "시작일", cell: (i) => i.launched },
          ]}
        />
      </div>
    </div>
  );
}
