import * as React from "react";
import { Avatar, Button, Card, Progress, Space, Tag, Typography, theme } from "antd";
import { ArrowLeftOutlined, CheckCircleFilled, ClockCircleOutlined } from "@ant-design/icons";
import { PROJECTS, type Project } from "../data";

const STATUS_TAG: Record<Project["status"], string> = {
  진행중: "processing",
  지연: "error",
  완료: "success",
};

function ProjectDetail({ project, onBack }: { project: Project; onBack:  => void }) {
  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <Button icon={<ArrowLeftOutlined />} onClick={onBack} style={{ alignSelf: "flex-start" }}>
        목록으로
      </Button>
      <Space orientation="vertical" size={4}>
        <Space size={8}>
          <Typography.Title level={4} style={{ margin: 0 }}>{project.name}</Typography.Title>
          <Tag color={STATUS_TAG[project.status]}>{project.status}</Tag>
        </Space>
        <Typography.Text type="secondary">{project.summary}</Typography.Text>
      </Space>
      <Card size="small">
        <Space orientation="vertical" size={8} style={{ display: "flex" }}>
          <Space style={{ justifyContent: "space-between", display: "flex" }}>
            <Typography.Text>담당: {project.team}</Typography.Text>
            <Typography.Text type="secondary">{project.dueLabel}</Typography.Text>
          </Space>
          <Progress percent={project.progress} status={project.status === "지연" ? "exception" : undefined} />
        </Space>
      </Card>
      <Card size="small" title="마일스톤">
        <Space orientation="vertical" size={10} style={{ display: "flex" }}>
          {project.milestones.map((m) => (
            <Space key={m.label} size={8}>
              {m.done ? (
                <CheckCircleFilled style={{ color: "var(--semantic-fg-success-default, #52c41a)" }} />
              ) : (
                <ClockCircleOutlined style={{ color: "var(--semantic-fg-neutral-subtle, #999)" }} />
              )}
              <Typography.Text type={m.done ? "secondary" : undefined}>
                {m.label}
              </Typography.Text>
            </Space>
          ))}
        </Space>
      </Card>
    </Space>
  );
}

export function ProjectsScreen {
  const { token } = theme.useToken;
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = PROJECTS.find((p) => p.id === selectedId) ?? null;

  if (selected) {
    return <ProjectDetail project={selected} onBack={ => setSelectedId(null)} />;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
      {PROJECTS.map((project) => (
        <Card
          key={project.id}
          hoverable
          size="small"
          onClick={ => setSelectedId(project.id)}
          style={{ cursor: "pointer" }}
        >
          <Space orientation="vertical" size={8} style={{ display: "flex" }}>
            <Space style={{ justifyContent: "space-between", display: "flex" }}>
              <Typography.Text strong>{project.name}</Typography.Text>
              <Tag color={STATUS_TAG[project.status]}>{project.status}</Tag>
            </Space>
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
              {project.summary}
            </Typography.Text>
            <Progress percent={project.progress} size="small" status={project.status === "지연" ? "exception" : undefined} />
            <Space size={6}>
              <Avatar size={20} style={{ fontSize: 11 }}>{project.team.slice(0, 1)}</Avatar>
              <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                {project.team} · {project.dueLabel}
              </Typography.Text>
            </Space>
          </Space>
        </Card>
      ))}
    </div>
  );
}
