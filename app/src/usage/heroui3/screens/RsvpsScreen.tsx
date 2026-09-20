"use client";
import * as React from "react";
import { Accordion, AlertDialog, Button, Card, Chip, Meter, Table } from "@heroui/react";
import { ATTENDANCE_HISTORY, MEETUPS } from "../data";
import type { ScreenProps } from "../screens";
import { thumbStyle } from "../thumb";

export function RsvpsScreen({ rsvps, onCancelRsvp }: ScreenProps) {
  const [cancelId, setCancelId] = React.useState<string | null>(null);
  const rows = rsvps
    .map((rsvp) => ({ rsvp, meetup: MEETUPS.find((m) => m.id === rsvp.meetupId) }))
    .filter((r): r is { rsvp: (typeof rsvps)[number]; meetup: NonNullable<(typeof r)["meetup"]> } => !!r.meetup);

  const others = MEETUPS.filter((m) => !rsvps.some((r) => r.meetupId === m.id));

  return (
    <div className="flex flex-col gap-4">
      {rows.length === 0 ? (
        <p className="text-sm opacity-70">신청한 모임이 없습니다. 「모임」 탭에서 참가 신청을 해보세요.</p>
      ) : (
        <Card className="gap-0 divide-y p-0">
          {rows.map(({ rsvp, meetup }) => (
            <div key={meetup.id} className="flex items-center gap-3 px-4 py-3">
              <div className="size-10 shrink-0 rounded-md bg-cover bg-center" style={thumbStyle(meetup)} aria-hidden />
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-sm font-medium">{meetup.title}</span>
                <span className="text-sm opacity-70">{meetup.dateLabel}</span>
                <Meter
                  aria-label={`${meetup.title} 신청 진행 상태`}
                  size="sm"
                  className="mt-0.5 w-full max-w-40"
                  value={rsvp.status === "확정" ? 100 : 50}
                  color={rsvp.status === "확정" ? "success" : "warning"}
                >
                  <Meter.Track>
                    <Meter.Fill />
                  </Meter.Track>
                </Meter>
              </div>
              <Chip color={rsvp.status === "확정" ? "success" : "warning"}>{rsvp.status}</Chip>
              <Button variant="tertiary" size="sm" onPress={ => setCancelId(meetup.id)}>취소</Button>
            </div>
          ))}
        </Card>
      )}

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
              <Button
                slot="close"
                variant="secondary"
                onPress={ => {
                  if (cancelId) onCancelRsvp(cancelId);
                }}
              >
                신청 취소
              </Button>
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
                <div className="size-10 shrink-0 rounded-md bg-cover bg-center" style={thumbStyle(meetup)} aria-hidden />
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

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">참여 이력</span>
        <Table variant="secondary">
          <Table.ScrollContainer>
            <Table.Content aria-label="지난 모임 참여 이력" className="min-w-[360px]">
              <Table.Header>
                <Table.Column isRowHeader>모임</Table.Column>
                <Table.Column>일자</Table.Column>
                <Table.Column>내 평점</Table.Column>
              </Table.Header>
              <Table.Body>
                {ATTENDANCE_HISTORY.map((record) => (
                  <Table.Row key={record.id}>
                    <Table.Cell>{record.title}</Table.Cell>
                    <Table.Cell>{record.dateLabel}</Table.Cell>
                    <Table.Cell>{"⭐".repeat(record.myRating)}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>

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
