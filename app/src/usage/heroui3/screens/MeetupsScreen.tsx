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

  const closingSoon = MEETUPS.filter((m) => m.seatsLeft > 0 && m.seatsLeft <= 2).length;
  const full = MEETUPS.filter((m) => m.seatsLeft === 0).length;
  const categoryCount = new Set(MEETUPS.map((m) => m.category)).size;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-3">
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">전체 모임</span>
          <span className="text-2xl font-semibold">{MEETUPS.length}개</span>
        </Card>
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">마감임박(2자리 이하)</span>
          <span className="text-2xl font-semibold">{closingSoon}개</span>
        </Card>
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">마감</span>
          <span className="text-2xl font-semibold">{full}개</span>
        </Card>
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">카테고리</span>
          <span className="text-2xl font-semibold">{categoryCount}종</span>
        </Card>
      </div>
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
    </div>
  );
}
