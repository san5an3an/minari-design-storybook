import { Card, Timeline, Typography } from "antd";
import { TIMELINE_EVENTS } from "../data";

export function TimelineScreen {
  return (
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
  );
}
