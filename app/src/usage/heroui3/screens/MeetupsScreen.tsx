"use client";
import * as React from "react";
import { Button, Card, Chip } from "@heroui/react";
import { MEETUPS, type Meetup } from "../data";

function MeetupDetail({ meetup, onBack }: { meetup: Meetup; onBack:  => void }) {
  const full = meetup.seatsLeft === 0;
  return (
    <div className="flex flex-col gap-4">
      <Button className="self-start" onPress={onBack} variant="secondary">← 목록으로</Button>
      <div className="h-32 rounded-lg" style={{ background: meetup.colorToken }} aria-hidden />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">{meetup.title}</span>
          <Chip color="accent">{meetup.category}</Chip>
        </div>
        <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
        <span className="text-sm opacity-70">호스트: {meetup.host}</span>
      </div>
      <p className="text-sm">{meetup.description}</p>
      <Button variant="primary" className="self-start" isDisabled={full}>
        {full ? "마감되었습니다" : `참가 신청 (${meetup.seatsLeft}자리 남음)`}
      </Button>
    </div>
  );
}

export function MeetupsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = MEETUPS.find((m) => m.id === selectedId) ?? null;

  if (selected) {
    return <MeetupDetail meetup={selected} onBack={ => setSelectedId(null)} />;
  }

  return (
    <div className="flex flex-col gap-3">
      {MEETUPS.map((meetup) => (
        <Card
          key={meetup.id}
          className="cursor-pointer flex-row items-center gap-3 p-3"
          onClick={ => setSelectedId(meetup.id)}
        >
          <div className="size-14 shrink-0 rounded-md" style={{ background: meetup.colorToken }} aria-hidden />
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{meetup.title}</span>
              <Chip color="accent" size="sm">{meetup.category}</Chip>
            </div>
            <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
          </div>
          <span className="text-xs opacity-60 shrink-0">
            {meetup.seatsLeft === 0 ? "마감" : `${meetup.seatsLeft}자리`}
          </span>
        </Card>
      ))}
    </div>
  );
}
