"use client";
import * as React from "react";
import { Avatar, Button, Card, Chip, Modal, Radio, RadioGroup } from "@heroui/react";
import { Bar, BarChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { HOSTS, MEETUPS, type Host } from "../data";

function HostProfileModal({ host, isOpen, onOpenChange }: { host: Host | null; isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const upcoming = host ? MEETUPS.filter((m) => m.host === host.name) : [];
  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-[400px]">
          <Modal.CloseTrigger />
          {host ? (
            <>
              <Modal.Header>
                <Avatar size="lg">
                  <Avatar.Fallback>{host.name.slice(0, 1)}</Avatar.Fallback>
                </Avatar>
                <Modal.Heading>{host.name}</Modal.Heading>
                <p className="mt-1 text-sm opacity-70">{host.bio}</p>
              </Modal.Header>
              <Modal.Body className="flex flex-col gap-3">
                <div className="flex gap-4 text-sm">
                  <span>⭐ {host.rating.toFixed(1)}</span>
                  <span className="opacity-70">후기 {host.reviewCount}개</span>
                  <span className="opacity-70">모임 {host.meetupCount}회 진행</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {host.tags.map((tag) => (
                    <Chip key={tag} color="default" size="sm">{tag}</Chip>
                  ))}
                </div>
                {upcoming.length > 0 ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">이 호스트가 여는 모임</span>
                    {upcoming.map((m) => (
                      <div key={m.id} className="flex items-center justify-between gap-2 text-sm">
                        <span className="truncate">{m.title}</span>
                        <span className="shrink-0 opacity-60">{m.dateLabel}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Modal.Body>
              <Modal.Footer>
                <Button slot="close" className="w-full" variant="secondary">닫기</Button>
              </Modal.Footer>
            </>
          ) : null}
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}

export function HostsScreen {
  const [sort, setSort] = React.useState<"count" | "name">("count");
  const [profileHost, setProfileHost] = React.useState<Host | null>(null);
  const totalMeetups = HOSTS.reduce((sum, h) => sum + h.meetupCount, 0);
  const totalReviews = HOSTS.reduce((sum, h) => sum + h.reviewCount, 0);
  const avgRating = HOSTS.reduce((sum, h) => sum + h.rating, 0) / HOSTS.length;
  const sorted = [...HOSTS].sort((a, b) =>
    sort === "count" ? b.meetupCount - a.meetupCount : a.name.localeCompare(b.name),
  );
  const chartData = [...HOSTS].sort((a, b) => b.meetupCount - a.meetupCount).map((h) => ({ name: h.name, value: h.meetupCount }));

  return (
    <div className="flex flex-col gap-3">
      {/* 통계카드로 여백 채우기. 2장에서 4장으로 확장하기 */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">활동 호스트</span>
          <span className="text-lg font-semibold">{HOSTS.length}명</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">누적 모임</span>
          <span className="text-lg font-semibold">{totalMeetups}회</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">평균 평점</span>
          <span className="text-lg font-semibold">⭐ {avgRating.toFixed(1)}</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">누적 후기</span>
          <span className="text-lg font-semibold">{totalReviews}개</span>
        </Card>
      </div>

      <div className="flex flex-col gap-2 rounded-lg border p-3" style={{ borderColor: "var(--semantic-border-neutral-subtle)" }}>
        <span className="text-sm font-medium">호스트별 진행 모임 수</span>
        <div style={{ inlineSize: "100%", blockSize: 140 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ style: { fontSize: 11 } }} />
              <RechartsTooltip formatter={(v) => [`${v}회`, "진행 모임"]} />
              <Bar dataKey="value" fill="var(--semantic-bg-brand-default)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <RadioGroup orientation="horizontal" value={sort} onChange={(v) => setSort(v as "count" | "name")}>
        <Radio value="count">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            모임 많은 순
          </Radio.Content>
        </Radio>
        <Radio value="name">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            이름순
          </Radio.Content>
        </Radio>
      </RadioGroup>

      {sorted.map((host) => (
        <Card key={host.id} className="flex-row items-start gap-3">
          <Avatar>
            <Avatar.Fallback>{host.name.slice(0, 1)}</Avatar.Fallback>
          </Avatar>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{host.name}</span>
              <span className="text-xs opacity-60">⭐ {host.rating.toFixed(1)} · 후기 {host.reviewCount}개</span>
            </div>
            <span className="text-sm opacity-70">{host.bio}</span>
            <div className="flex flex-wrap items-center gap-1 pt-1">
              {host.tags.map((tag) => (
                <Chip key={tag} color="default" size="sm">{tag}</Chip>
              ))}
              <Button
                className="ms-auto"
                variant="tertiary"
                size="sm"
                onPress={ => setProfileHost(host)}
              >
                호스트 프로필
              </Button>
            </div>
          </div>
        </Card>
      ))}

      <HostProfileModal host={profileHost} isOpen={profileHost !== null} onOpenChange={(open) => !open && setProfileHost(null)} />
    </div>
  );
}
