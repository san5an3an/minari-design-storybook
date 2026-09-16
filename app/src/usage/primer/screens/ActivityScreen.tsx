import { Avatar, Timeline } from "@primer/react";
import { ACTIVITY } from "../data";

export function ActivityScreen {
  return (
    <Timeline>
      {ACTIVITY.map((item) => (
        <Timeline.Item key={item.id}>
          <Timeline.Badge>
            <Avatar src={`https://avatars.githubusercontent.com/u/${item.id.length}?s=32`} alt={item.actor} size={20} />
          </Timeline.Badge>
          <Timeline.Body>
            <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{item.actor}</span>
            {" "}
            <span style={{ color: "var(--fgColor-muted)" }}>{item.action}</span>
            {", "}
            <span style={{ color: "var(--fgColor-default)" }}>{item.target}</span>
            <div style={{ fontSize: "12px", color: "var(--fgColor-muted)", marginTop: "2px" }}>{item.timeLabel}</div>
          </Timeline.Body>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
