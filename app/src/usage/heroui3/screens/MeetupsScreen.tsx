"use client";
import * as React from "react";
import { Alert, Button, Card, Chip, Label, Meter, Modal, Popover, Tag, TagGroup, toast } from "@heroui/react";
import { CalendarCheck } from "lucide-react";
import { HOSTS, MEETUPS, type Meetup } from "../data";
import type { ScreenProps } from "../screens";
import { thumbStyle } from "../thumb";

function HostQuickInfo({ hostName }: { hostName: string }) {
  const host = HOSTS.find((h) => h.name === hostName);
  return (
    <Popover>
      <Popover.Trigger aria-label={`${hostName} 호스트 소개 보기`}>
        <span
          className="cursor-pointer text-sm underline decoration-dotted"
          style={{ color: "var(--semantic-fg-neutral-subtle)", textUnderlineOffset: "2px" }}
        >
          호스트: {hostName}
        </span>
      </Popover.Trigger>
      <Popover.Content className="max-w-64">
        <Popover.Dialog>
          <Popover.Arrow />
          <Popover.Heading>{hostName}</Popover.Heading>
          {host ? (
            <>
              <p className="mt-1.5 text-sm opacity-70">{host.bio}</p>
              <p className="mt-2 text-xs opacity-60">
                ⭐ {host.rating.toFixed(1)} · 후기 {host.reviewCount}개 · 모임 {host.meetupCount}회 진행
              </p>
            </>
          ) : (
            <p className="mt-1.5 text-sm opacity-70">호스트 정보를 찾을 수 없어요.</p>
          )}
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}

function MeetupDetail({
  meetup,
  rsvped,
  onBack,
  onRsvp,
}: {
  meetup: Meetup;
  rsvped: boolean;
  onBack:  => void;
  onRsvp: (meetupId: string) => void;
}) {
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const full = meetup.seatsLeft === 0;
  const registered = meetup.capacity - meetup.seatsLeft;
  const fillPct = Math.round((registered / meetup.capacity) * 100);

  return (
    <div className="flex flex-col gap-4">
      <Button className="self-start" onPress={onBack} variant="secondary">← 목록으로</Button>
      <div className="h-32 rounded-lg bg-cover bg-center" style={thumbStyle(meetup)} aria-hidden />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">{meetup.title}</span>
          <Chip color="accent">{meetup.category}</Chip>
        </div>
        <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
        <HostQuickInfo hostName={meetup.host} />
      </div>
      <p className="text-sm">{meetup.description}</p>

      <Meter
        aria-label="정원 충족률"
        value={registered}
        maxValue={meetup.capacity}
        color={full ? "danger" : fillPct >= 80 ? "warning" : "accent"}
      >
        <div className="flex items-center justify-between">
          <Label className="text-sm">정원 {registered}/{meetup.capacity}명</Label>
          <Meter.Output />
        </div>
        <Meter.Track>
          <Meter.Fill />
        </Meter.Track>
      </Meter>

      {rsvped ? (
        <Chip color="success">신청 완료. 「내 예약」에서 확인하세요</Chip>
      ) : (
        <Button variant="primary" className="self-start" isDisabled={full} onPress={ => setConfirmOpen(true)}>
          {full ? "마감되었습니다" : `참가 신청 (${meetup.seatsLeft}자리 남음)`}
        </Button>
      )}

      <Modal.Backdrop isOpen={confirmOpen} onOpenChange={setConfirmOpen}>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              {/* 지어낸 유틸리티 대신 공식 예제 문자열 사용 */}
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CalendarCheck size={18} />
              </Modal.Icon>
              <Modal.Heading>이 모임에 참가 신청할까요?</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p className="text-sm">{meetup.title} · {meetup.dateLabel}</p>
              <p className="mt-1 text-sm opacity-70">신청 후에는 「내 예약」에서 확정 여부를 확인할 수 있어요.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">취소</Button>
              <Button
                slot="close"
                variant="primary"
                onPress={ => {
                  onRsvp(meetup.id);
                  toast.success("참가 신청을 보냈어요");
                }}
              >
                신청하기
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </div>
  );
}

export function MeetupsScreen({ rsvps, onRsvp }: ScreenProps) {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string>("all");
  const selected = MEETUPS.find((m) => m.id === selectedId) ?? null;

  if (selected) {
    return (
      <MeetupDetail
        meetup={selected}
        rsvped={rsvps.some((r) => r.meetupId === selected.id)}
        onBack={ => setSelectedId(null)}
        onRsvp={onRsvp}
      />
    );
  }

  const closingSoon = MEETUPS.filter((m) => m.seatsLeft > 0 && m.seatsLeft <= 2).length;
  const full = MEETUPS.filter((m) => m.seatsLeft === 0).length;
  const categories = Array.from(new Set(MEETUPS.map((m) => m.category)));
  const categoryCount = categories.length;
  const visible = category === "all" ? MEETUPS : MEETUPS.filter((m) => m.category === category);

  return (
    <div className="flex flex-col gap-4">
      {closingSoon > 0 ? (
        <Alert status="warning">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>마감 임박 {closingSoon}건</Alert.Title>
            <Alert.Description>남은 자리가 2개 이하인 모임이 있어요. 서둘러 신청해보세요.</Alert.Description>
          </Alert.Content>
        </Alert>
      ) : null}

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

      <TagGroup aria-label="카테고리 필터" selectionMode="single" selectedKeys={new Set([category])} onSelectionChange={(keys) => {
        const [first] = Array.from(keys);
        setCategory(first ? String(first) : "all");
      }}>
        <TagGroup.List>
          <Tag id="all">전체</Tag>
          {categories.map((c) => (
            <Tag key={c} id={c}>{c}</Tag>
          ))}
        </TagGroup.List>
      </TagGroup>

      <div className="flex flex-col gap-3">
        {visible.map((meetup) => {
          const registered = meetup.capacity - meetup.seatsLeft;
          const fillPct = Math.round((registered / meetup.capacity) * 100);
          return (
            <Card
              key={meetup.id}
              className="cursor-pointer flex-row items-center gap-3 p-3"
              onClick={ => setSelectedId(meetup.id)}
            >
              <div className="size-14 shrink-0 rounded-md bg-cover bg-center" style={thumbStyle(meetup)} aria-hidden />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{meetup.title}</span>
                  <Chip color="accent" size="sm">{meetup.category}</Chip>
                </div>
                <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
                <Meter
                  aria-label={`${meetup.title} 정원 충족률`}
                  size="sm"
                  value={registered}
                  maxValue={meetup.capacity}
                  className="mt-0.5 w-full"
                  color={meetup.seatsLeft === 0 ? "danger" : fillPct >= 80 ? "warning" : "accent"}
                >
                  <Meter.Track>
                    <Meter.Fill />
                  </Meter.Track>
                </Meter>
              </div>
              <span className="text-xs opacity-60 shrink-0">
                {meetup.seatsLeft === 0 ? "마감" : `${meetup.seatsLeft}자리`}
              </span>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
