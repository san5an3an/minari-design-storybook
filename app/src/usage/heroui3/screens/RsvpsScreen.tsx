import { Card, Chip } from "@heroui/react";
import { MEETUPS, MY_RSVPS } from "../data";

export function RsvpsScreen {
  const rows = MY_RSVPS.map((rsvp) => ({
    rsvp,
    meetup: MEETUPS.find((m) => m.id === rsvp.meetupId),
  })).filter((r): r is { rsvp: (typeof MY_RSVPS)[number]; meetup: NonNullable<(typeof r)["meetup"]> } => !!r.meetup);

  if (rows.length === 0) {
    return <p className="text-sm opacity-70">신청한 모임이 없습니다.</p>;
  }

  return (
    <Card className="gap-0 divide-y p-0">
      {rows.map(({ rsvp, meetup }) => (
        <div key={meetup.id} className="flex items-center gap-3 px-4 py-3">
          <div className="size-10 shrink-0 rounded-md" style={{ background: meetup.colorToken }} aria-hidden />
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium">{meetup.title}</span>
            <span className="text-sm opacity-70">{meetup.dateLabel}</span>
          </div>
          <Chip color={rsvp.status === "확정" ? "success" : "warning"}>{rsvp.status}</Chip>
        </div>
      ))}
    </Card>
  );
}
