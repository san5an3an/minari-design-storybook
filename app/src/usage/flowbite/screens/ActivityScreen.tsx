import {
  Badge, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle,
} from "flowbite-react";
import { DEAL_ACTIVITY } from "../data";

export function ActivityScreen {
  return (
    <Timeline>
      {DEAL_ACTIVITY.map((item) => (
        <TimelineItem key={item.id}>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>{item.timeLabel}</TimelineTime>
            <TimelineTitle>{item.customer}</TimelineTitle>
            <TimelineBody>
              <span style={{ color: "var(--color-gray-500)" }}>{item.actor}</span>
              {", "}
              <Badge color="gray" className="inline-flex">{item.fromStage}</Badge>
              {" → "}
              <Badge color="success" className="inline-flex">{item.toStage}</Badge>
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
