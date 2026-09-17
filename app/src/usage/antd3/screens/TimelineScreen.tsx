import { Card, Col, Row, Space, Statistic, Timeline, Typography } from "antd";
import { PROJECTS, TIMELINE_EVENTS } from "../data";

export function TimelineScreen {
  const byColor = TIMELINE_EVENTS.reduce(
    (acc, e) => ({ ...acc, [e.color]: (acc[e.color] ?? 0) + 1 }),
    {} as Record<string, number>,
  );

  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      {/* 통계카드로 여백 채우기 */}
      <Row gutter={12}>
        <Col flex={1}>
          <Card size="small"><Statistic title="전체 활동" value={TIMELINE_EVENTS.length} suffix="건" /></Card>
        </Col>
        <Col flex={1}>
          <Card size="small"><Statistic title="완료 표시" value={byColor.green ?? 0} suffix="건" /></Card>
        </Col>
        <Col flex={1}>
          <Card size="small"><Statistic title="지연 표시" value={byColor.red ?? 0} suffix="건" /></Card>
        </Col>
        <Col flex={1}>
          <Card size="small"><Statistic title="추적 프로젝트" value={PROJECTS.length} suffix="개" /></Card>
        </Col>
      </Row>

      <Card size="small">
        <Timeline
          items={TIMELINE_EVENTS.map((event) => ({
            color: event.color,
            content: (
              <>
                <Typography.Text>{event.label}</Typography.Text>
                <br />
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>{event.timeLabel}</Typography.Text>
              </>
            ),
          }))}
        />
      </Card>
    </Space>
  );
}
