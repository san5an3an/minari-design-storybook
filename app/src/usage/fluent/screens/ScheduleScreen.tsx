import { Avatar, AvatarGroup, AvatarGroupItem, Body1, Caption1 } from "@fluentui/react-components";
import { MEETINGS, type MeetingItem } from "../data";

const COLOR_VAR: Record<MeetingItem["color"], string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorStatusSuccessBackground3)",
  warning: "var(--colorStatusWarningBackground3)",
  info: "var(--colorNeutralForeground3)",
};

function MeetingRow({ meeting }: { meeting: MeetingItem }) {
  const names = Array.from({ length: meeting.attendees }, (_, i) => `참석자 ${i + 1}`);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px 14px",
        borderRadius: "var(--borderRadiusMedium)",
        borderInlineStart: `3px solid ${COLOR_VAR[meeting.color]}`,
        background: "var(--colorNeutralBackground2)",
      }}
    >
      <Caption1 style={{ width: "48px", flexShrink: 0, color: "var(--colorNeutralForeground3)" }}>
        {meeting.time}
      </Caption1>
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
        <Body1 style={{ fontWeight: 600 }}>{meeting.title}</Body1>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {meeting.room} · {meeting.attendees}명
        </Caption1>
      </div>
      <AvatarGroup size={24}>
        {names.slice(0, 3).map((n) => (
          <AvatarGroupItem key={n} name={n} />
        ))}
        {meeting.attendees > 3 ? (
          <Avatar name={`+${meeting.attendees - 3}`} size={24} color="colorful" />
        ) : null}
      </AvatarGroup>
    </div>
  );
}

export function ScheduleScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {MEETINGS.map((m) => (
        <MeetingRow key={m.id} meeting={m} />
      ))}
    </div>
  );
}
