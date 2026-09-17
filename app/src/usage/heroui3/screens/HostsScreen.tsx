"use client";
import * as React from "react";
import { Avatar, Card, Chip, Link, Radio, RadioGroup } from "@heroui/react";
import { HOSTS } from "../data";

export function HostsScreen {
  const [sort, setSort] = React.useState<"count" | "name">("count");
  const totalMeetups = HOSTS.reduce((sum, h) => sum + h.meetupCount, 0);
  const sorted = [...HOSTS].sort((a, b) =>
    sort === "count" ? b.meetupCount - a.meetupCount : a.name.localeCompare(b.name),
  );

  return (
    <div className="flex flex-col gap-3">
      {/* 통계카드로 여백 채우기 */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">활동 호스트</span>
          <span className="text-lg font-semibold">{HOSTS.length}명</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">누적 모임</span>
          <span className="text-lg font-semibold">{totalMeetups}회</span>
        </Card>
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
              <span className="text-xs opacity-60">모임 {host.meetupCount}회 진행</span>
            </div>
            <span className="text-sm opacity-70">{host.bio}</span>
            <div className="flex flex-wrap items-center gap-1 pt-1">
              {host.tags.map((tag) => (
                <Chip key={tag} color="default" size="sm">{tag}</Chip>
              ))}
              <Link className="ms-auto text-xs" href="#">호스트 프로필</Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
