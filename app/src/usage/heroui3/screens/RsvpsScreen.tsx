"use client";
import * as React from "react";
import { Accordion, AlertDialog, Button, Card, Chip } from "@heroui/react";
import { MEETUPS, MY_RSVPS } from "../data";

// 아직 미신청 나머지 모임을 다가오는 다른 모임으로 이어서 표시
export function RsvpsScreen {
  const [cancelId, setCancelId] = React.useState<string | null>(null);
  const rows = MY_RSVPS.map((rsvp) => ({
    rsvp,
    meetup: MEETUPS.find((m) => m.id === rsvp.meetupId),
  })).filter((r): r is { rsvp: (typeof MY_RSVPS)[number]; meetup: NonNullable<(typeof r)["meetup"]> } => !!r.meetup);

  const others = MEETUPS.filter((m) => !MY_RSVPS.some((r) => r.meetupId === m.id));

  if (rows.length === 0) {
    return <p className="text-sm opacity-70">신청한 모임이 없습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="gap-0 divide-y p-0">
        {rows.map(({ rsvp, meetup }) => (
          <div key={meetup.id} className="flex items-center gap-3 px-4 py-3">
            <div className="size-10 shrink-0 rounded-md" style={{ background: meetup.colorToken }} aria-hidden />
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium">{meetup.title}</span>
              <span className="text-sm opacity-70">{meetup.dateLabel}</span>
            </div>
            <Chip color={rsvp.status === "확정" ? "success" : "warning"}>{rsvp.status}</Chip>
            <Button variant="tertiary" size="sm" onPress={ => setCancelId(meetup.id)}>취소</Button>
          </div>
        ))}
      </Card>

      <AlertDialog.Backdrop isOpen={cancelId !== null} onOpenChange={(open) => !open && setCancelId(null)}>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>신청을 취소할까요?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>모임 24시간 전까지는 전액 환불돼요. 당일 취소는 호스트에게 직접 문의해 주세요.</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">돌아가기</Button>
              <Button slot="close" variant="secondary">신청 취소</Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>

      {others.length > 0 ? (
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">다가오는 다른 모임</span>
          <Card className="gap-0 divide-y p-0">
            {others.map((meetup) => (
              <div key={meetup.id} className="flex items-center gap-3 px-4 py-3">
                <div className="size-10 shrink-0 rounded-md" style={{ background: meetup.colorToken }} aria-hidden />
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">{meetup.title}</span>
                  <span className="text-sm opacity-70">{meetup.dateLabel} · {meetup.location}</span>
                </div>
                <Chip color={meetup.seatsLeft > 0 ? "default" : "danger"}>
                  {meetup.seatsLeft > 0 ? `남은 자리 ${meetup.seatsLeft}` : "마감"}
                </Chip>
              </div>
            ))}
          </Card>
        </div>
      ) : null}

      <Accordion className="w-full">
        <Accordion.Item>
          <Accordion.Heading>
            <Accordion.Trigger>
              취소·환불 안내
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="flex flex-col gap-1 text-sm opacity-80">
              <p>모임 시작 24시간 전까지는 전액 환불됩니다.</p>
              <p>당일 취소는 호스트에게 직접 문의해 주세요.</p>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
