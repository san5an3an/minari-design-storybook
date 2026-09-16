import { Card, Col, Progress, Row, Space, Statistic, Typography } from "antd";
import { PROJECTS, TEAM_REPORTS } from "../data";

export function ReportsScreen {
  const totalDone = TEAM_REPORTS.reduce((sum, t) => sum + t.completedTasks, 0);
  const totalTasks = TEAM_REPORTS.reduce((sum, t) => sum + t.totalTasks, 0);
  const delayed = PROJECTS.filter((p) => p.status === "지연").length;

  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <Row gutter={12}>
        <Col flex={1}>
          <Card size="small"><Statistic title="전체 과업 완료율" value={Math.round((totalDone / totalTasks) * 100)} suffix="%" /></Card>
        </Col>
        <Col flex={1}>
          <Card size="small"><Statistic title="진행 중 프로젝트" value={PROJECTS.filter((p) => p.status === "진행중").length} suffix="건" /></Card>
        </Col>
        <Col flex={1}>
          <Card size="small">
            <Statistic
              title="지연 프로젝트"
              value={delayed}
              suffix="건"
              styles={delayed > 0 ? { content: { color: "var(--semantic-fg-danger-default, #cf1322)" } } : undefined}
            />
          </Card>
        </Col>
      </Row>
      <Card size="small" title="팀별 완료율">
        <Space orientation="vertical" size={16} style={{ display: "flex" }}>
          {TEAM_REPORTS.map((t) => (
            <div key={t.team}>
              <Space style={{ justifyContent: "space-between", display: "flex", marginBlockEnd: 4 }}>
                <Typography.Text>{t.team}</Typography.Text>
                <Typography.Text type="secondary">{t.completedTasks}/{t.totalTasks}</Typography.Text>
              </Space>
              <Progress percent={Math.round((t.completedTasks / t.totalTasks) * 100)} />
            </div>
          ))}
        </Space>
      </Card>
    </Space>
  );
}
