"use client";
import * as React from "react";
import { Breadcrumbs, Button, Card, Chip, ToggleButton, ToggleButtonGroup, Tooltip, toast } from "@heroui/react";
import { MEETUPS, type Meetup } from "../data";

function MeetupDetail({ meetup, onBack }: { meetup: Meetup; onBack:  => void }) {
  const full = meetup.seatsLeft === 0;
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs>
        <Breadcrumbs.Item onPress={onBack}>모임</Breadcrumbs.Item>
        <Breadcrumbs.Item>{meetup.title}</Breadcrumbs.Item>
      </Breadcrumbs>
      <Button className="self-start" onPress={onBack} variant="secondary">← 목록으로</Button>
      <div
        className="h-32 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url("${meetup.image}")` }}
        aria-hidden
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">{meetup.title}</span>
          <Chip color="accent">{meetup.category}</Chip>
        </div>
        <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
        <span className="text-sm opacity-70">호스트: {meetup.host}</span>
      </div>
      <p className="text-sm">{meetup.description}</p>
      <Button
        variant="primary"
        className="self-start"
        isDisabled={full}
        onPress={ => toast.success(`${meetup.title} 참가 신청 완료`)}
      >
        {full ? "마감되었습니다" : `참가 신청 (${meetup.seatsLeft}자리 남음)`}
      </Button>
    </div>
  );
}

export function MeetupsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string>("all");
  const selected = MEETUPS.find((m) => m.id === selectedId) ?? null;

  if (selected) {
    return <MeetupDetail meetup={selected} onBack={ => setSelectedId(null)} />;
  }

  const categories = Array.from(new Set(MEETUPS.map((m) => m.category)));
  const visible = category === "all" ? MEETUPS : MEETUPS.filter((m) => m.category === category);
  const openSeats = MEETUPS.reduce((sum, m) => sum + m.seatsLeft, 0);

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">이번 달</span>
          <span className="text-lg font-semibold">{MEETUPS.length}건</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">남은 자리</span>
          <span className="text-lg font-semibold" style={{ color: "var(--semantic-fg-success-default)" }}>{openSeats}석</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">마감 임박</span>
          <span className="text-lg font-semibold" style={{ color: "var(--semantic-fg-danger-default)" }}>
            {MEETUPS.filter((m) => m.seatsLeft > 0 && m.seatsLeft <= 2).length}건
          </span>
        </Card>
      </div>

      <ToggleButtonGroup
        selectedKeys={[category]}
        selectionMode="single"
        onSelectionChange={(keys) => {
          const next = Array.from(keys as Set<string>)[0];
          if (next) setCategory(next);
        }}
      >
        <ToggleButton id="all">전체</ToggleButton>
        {categories.map((c) => (
          <ToggleButton key={c} id={c}>{c}</ToggleButton>
        ))}
      </ToggleButtonGroup>

      {visible.map((meetup) => (
        <Card
          key={meetup.id}
          className="cursor-pointer flex-row items-center gap-3 p-3"
          onClick={ => setSelectedId(meetup.id)}
        >
          <div
            className="size-14 shrink-0 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url("${meetup.image}")` }}
            aria-hidden
          />
          <div className="flex flex-1 flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{meetup.title}</span>
              <Chip color="accent" size="sm">{meetup.category}</Chip>
            </div>
            <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
          </div>
          <Tooltip delay={0}>
            <span className="text-xs opacity-60 shrink-0">
              {meetup.seatsLeft === 0 ? "마감" : `${meetup.seatsLeft}자리`}
            </span>
            <Tooltip.Content>
              <p>호스트: {meetup.host}</p>
            </Tooltip.Content>
          </Tooltip>
        </Card>
      ))}
    </div>
  );
}
