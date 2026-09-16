import * as React from "react";
import Table from "@cloudscape-design/components/table";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";

interface Instance {
  id: string;
  type: string;
  status: "running" | "stopped" | "pending";
  region: string;
  launched: string;
}

const INSTANCES: Instance[] = [
  { id: "i-0a1b2c3d", type: "m6g.large", status: "running", region: "ap-northeast-2", launched: "2026-09-01" },
  { id: "i-0e4f5g6h", type: "t3.medium", status: "running", region: "ap-northeast-2", launched: "2026-09-03" },
  { id: "i-0i7j8k9l", type: "c6i.xlarge", status: "stopped", region: "ap-northeast-2", launched: "2026-08-22" },
  { id: "i-0m1n2o3p", type: "m6g.large", status: "pending", region: "ap-northeast-2", launched: "2026-09-15" },
  { id: "i-0q4r5s6t", type: "r6g.large", status: "running", region: "ap-northeast-1", launched: "2026-08-30" },
];

const STATUS_TYPE: Record<Instance["status"], "success" | "stopped" | "pending"> = {
  running: "success",
  stopped: "stopped",
  pending: "pending",
};

export function InstancesScreen {
  return (
    <Table<Instance>
      items={INSTANCES}
      variant="container"
      header={
        <Header counter={`(${INSTANCES.length})`} description="이 계정에 떠 있는 인스턴스 목록">
          인스턴스
        </Header>
      }
      columnDefinitions={[
        { id: "id", header: "인스턴스 ID", cell: (i) => <Box variant="samp">{i.id}</Box> },
        { id: "type", header: "유형", cell: (i) => i.type },
        {
          id: "status",
          header: "상태",
          cell: (i) => <StatusIndicator type={STATUS_TYPE[i.status]}>{i.status}</StatusIndicator>,
        },
        { id: "region", header: "리전", cell: (i) => i.region },
        { id: "launched", header: "시작일", cell: (i) => i.launched },
      ]}
    />
  );
}
