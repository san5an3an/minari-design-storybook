"use client";

import * as React from "react";
import { Badge, Card, Checkbox, Meter, Popover, Table, ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { Info } from "lucide-react";

interface Habit {
  id: string;
  label: string;
  hint: string;
  category: string;
  streak: number;
  timeOfDay: string;
}

const HABITS: Habit[] = [
  { id: "water", label: "물 8잔 마시기", hint: "하루 목표량", category: "건강", streak: 4, timeOfDay: "종일" },
  { id: "walk", label: "20분 걷기", hint: "점심 시간 추천", category: "운동", streak: 2, timeOfDay: "오후" },
  { id: "read", label: "책 10쪽 읽기", hint: "자기 전", category: "성장", streak: 6, timeOfDay: "저녁" },
  { id: "journal", label: "하루 기록 한 줄", hint: "무엇이든 좋다", category: "성장", streak: 1, timeOfDay: "저녁" },
  { id: "sleep", label: "자정 전에 눕기", hint: "다음 날을 위해", category: "건강", streak: 3, timeOfDay: "밤" },
];

const FILTERS = [
  { key: "today", label: "오늘" },
  { key: "week", label: "이번 주" },
  { key: "month", label: "이번 달" },
];

export function TodayScreen {
  const [done, setDone] = React.useState<Set<string>>( => new Set(["water"]));
  const [range, setRange] = React.useState<string>("today");

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const percent = Math.round((done.size / HABITS.length) * 100);
  const bestStreak = Math.max(...HABITS.map((h) => h.streak));
  const avgStreak = (HABITS.reduce((s, h) => s + h.streak, 0) / HABITS.length).toFixed(1);

  return (
    <div className="flex flex-col gap-4">
      <ToggleButtonGroup
        selectedKeys={[range]}
        selectionMode="single"
        onSelectionChange={(keys) => {
          const next = Array.from(keys as Set<string>)[0];
          if (next) setRange(next);
        }}
      >
        {FILTERS.map((f) => (
          <ToggleButton key={f.key} id={f.key}>
            {f.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">오늘 진행률</span>
          <Meter aria-label="오늘 진행률" className="w-full" value={percent}>
            <Meter.Output />
            <Meter.Track>
              <Meter.Fill />
            </Meter.Track>
          </Meter>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">완료</span>
          <span className="text-lg font-semibold">{done.size}/{HABITS.length}</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">최고 연속</span>
          <span className="text-lg font-semibold" style={{ color: "var(--semantic-fg-success-default)" }}>{bestStreak}일</span>
        </Card>
        <Card className="items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">평균 연속</span>
          <span className="text-lg font-semibold">{avgStreak}일</span>
        </Card>
      </div>

      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="오늘의 습관" className="min-w-[560px]">
            <Table.Header>
              <Table.Column isRowHeader>습관</Table.Column>
              <Table.Column>분류</Table.Column>
              <Table.Column>시간대</Table.Column>
              <Table.Column>연속</Table.Column>
              <Table.Column>완료</Table.Column>
            </Table.Header>
            <Table.Body>
              {HABITS.map((habit) => (
                <Table.Row key={habit.id}>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{habit.label}</span>
                      <Popover>
                        <button type="button" aria-label={`${habit.label} 안내`} className="opacity-60 hover:opacity-100">
                          <Info className="size-3.5" />
                        </button>
                        <Popover.Content className="max-w-56">
                          <Popover.Dialog>
                            <p className="text-xs">{habit.hint}</p>
                          </Popover.Dialog>
                        </Popover.Content>
                      </Popover>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge
                      color={
                        habit.category === "건강" ? "success" : habit.category === "운동" ? "warning" : "accent"
                      }
                      size="sm"
                    >
                      {habit.category}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>{habit.timeOfDay}</Table.Cell>
                  <Table.Cell>{habit.streak}일</Table.Cell>
                  <Table.Cell>
                    <Checkbox isSelected={done.has(habit.id)} onChange={ => toggle(habit.id)}>
                      <Checkbox.Content>
                        <Checkbox.Control>
                          <Checkbox.Indicator />
                        </Checkbox.Control>
                      </Checkbox.Content>
                    </Checkbox>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
