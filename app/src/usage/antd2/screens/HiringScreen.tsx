import * as React from "react";
import { Card, Col, Row, Statistic, Steps, Table, Tag } from "antd";
import { CANDIDATES, HIRING_STAGES, stageCount, type Candidate } from "../data";

const STAGE_TAG: Record<Candidate["stage"], string> = {
  "서류 심사": "default",
  "1차 면접": "blue",
  "2차 면접": "geekblue",
  오퍼: "gold",
};

export function HiringScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Card size="small">
        <Steps
          size="small"
          current={2}
          items={HIRING_STAGES.map((label) => ({ title: label }))}
        />
      </Card>
      <Row gutter={12}>
        {HIRING_STAGES.slice(0, 4).map((stage) => (
          <Col key={stage} flex={1}>
            <Card size="small">
              <Statistic title={stage} value={stageCount(stage)} suffix="명" />
            </Card>
          </Col>
        ))}
      </Row>
      <Table<Candidate>
        rowKey="id"
        dataSource={CANDIDATES}
        pagination={false}
        columns={[
          { title: "이름", dataIndex: "name" },
          { title: "직무", dataIndex: "role" },
          {
            title: "단계",
            dataIndex: "stage",
            render: (stage: Candidate["stage"]) => <Tag color={STAGE_TAG[stage]}>{stage}</Tag>,
          },
          { title: "지원일", dataIndex: "appliedLabel" },
        ]}
      />
    </div>
  );
}
