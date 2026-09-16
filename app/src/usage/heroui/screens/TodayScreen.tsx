"use client";

import * as React from "react";
import { Card, Checkbox, Label, ProgressBar } from "@heroui/react";

interface Habit {
  id: string;
  label: string;
  hint: string;
}

const HABITS: Habit[] = [
  { id: "water", label: "물 8잔 마시기", hint: "하루 목표량" },
  { id: "walk", label: "20분 걷기", hint: "점심 시간 추천" },
  { id: "read", label: "책 10쪽 읽기", hint: "자기 전" },
  { id: "journal", label: "하루 기록 한 줄", hint: "무엇이든 좋다" },
  { id: "sleep", label: "자정 전에 눕기", hint: "다음 날을 위해" },
];

export function TodayScreen {
  const [done, setDone] = React.useState<Set<string>>( => new Set(["water"]));

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const percent = Math.round((done.size / HABITS.length) * 100);

  return (
    <div className="flex flex-col gap-4">
      <ProgressBar aria-label="오늘 진행률" className="w-full" value={percent}>
        <div className="flex items-center justify-between">
          <Label>오늘 진행률</Label>
          <ProgressBar.Output />
        </div>
        <ProgressBar.Track>
          <ProgressBar.Fill />
        </ProgressBar.Track>
      </ProgressBar>

      <Card className="gap-0 divide-y p-0">
        {HABITS.map((habit) => (
          <div key={habit.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <Checkbox
              isSelected={done.has(habit.id)}
              onChange={ => toggle(habit.id)}
            >
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <span className="flex flex-col">
                  <span>{habit.label}</span>
                  <span className="text-xs opacity-60">{habit.hint}</span>
                </span>
              </Checkbox.Content>
            </Checkbox>
          </div>
        ))}
      </Card>
    </div>
  );
}
