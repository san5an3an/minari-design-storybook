import * as React from "react";
import {
  Avatar, Button, Descriptions, Space, Steps, Table, Tag, Typography,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { EMPLOYEES, ONBOARDING_STEPS, type Employee } from "../data";

const STATUS_COLOR: Record<Employee["status"], string> = {
  재직: "success",
  온보딩: "processing",
  휴직: "default",
};

function EmployeeDetail({ employee, onBack }: { employee: Employee; onBack:  => void }) {
  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <Button icon={<ArrowLeftOutlined />} onClick={onBack} style={{ alignSelf: "flex-start" }}>
        목록으로
      </Button>
      <Space size={12} align="center">
        <Avatar size={48}>{employee.name.slice(0, 1)}</Avatar>
        <Space orientation="vertical" size={0}>
          <Typography.Title level={4} style={{ margin: 0 }}>{employee.name}</Typography.Title>
          <Typography.Text type="secondary">{employee.role} · {employee.department}</Typography.Text>
        </Space>
      </Space>
      <Descriptions bordered size="small" column={2}>
        <Descriptions.Item label="상태">
          <Tag color={STATUS_COLOR[employee.status]}>{employee.status}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="근무지">{employee.location}</Descriptions.Item>
        <Descriptions.Item label="이메일">{employee.email}</Descriptions.Item>
        <Descriptions.Item label="입사일">{employee.joinedLabel}</Descriptions.Item>
      </Descriptions>
      {employee.status === "온보딩" ? (
        <div>
          <Typography.Text strong>온보딩 진행</Typography.Text>
          <Steps
            size="small"
            current={employee.onboardingStep}
            items={ONBOARDING_STEPS.map((label) => ({ title: label }))}
            style={{ marginTop: 12 }}
          />
        </div>
      ) : null}
    </Space>
  );
}

export function PeopleScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = EMPLOYEES.find((e) => e.id === selectedId) ?? null;

  if (selected) {
    return <EmployeeDetail employee={selected} onBack={ => setSelectedId(null)} />;
  }

  return (
    <Table<Employee>
      rowKey="id"
      dataSource={EMPLOYEES}
      pagination={false}
      onRow={(record) => ({
        onClick:  => setSelectedId(record.id),
        style: { cursor: "pointer" },
      })}
      columns={[
        {
          title: "이름",
          dataIndex: "name",
          render: (name: string) => (
            <Space size={8}>
              <Avatar size="small">{name.slice(0, 1)}</Avatar>
              {name}
            </Space>
          ),
        },
        { title: "직무", dataIndex: "role" },
        { title: "부서", dataIndex: "department" },
        { title: "근무지", dataIndex: "location" },
        {
          title: "상태",
          dataIndex: "status",
          render: (status: Employee["status"]) => (
            <Tag color={STATUS_COLOR[status]}>{status}</Tag>
          ),
        },
      ]}
    />
  );
}
