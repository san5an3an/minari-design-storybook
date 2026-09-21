"use client";

import * as React from "react";
import {
  Button, Card, Checkbox, Input, Label, Modal, ProgressBar, ProgressCircle, TextArea, TextField,
} from "@heroui/react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { Plus } from "lucide-react";

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

// ①은 6일 평균 달성률 고정값. 오늘 실시간 percent 붙여 7구간 생성
const PAST_WEEK_COMPLETION: readonly number[] = [60, 80, 100, 100, 100, 100];
const PAST_WEEK_LABELS: readonly string[] = ["6일 전", "5일 전", "4일 전", "3일 전", "2일 전", "어제"];

interface HabitDraft {
  label: string;
  hint: string;
}

function AddHabitModal({
  isOpen,
  onOpenChange,
  onSubmit,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (draft: HabitDraft) => void;
}) {
  const [draft, setDraft] = React.useState<HabitDraft>({ label: "", hint: "" });
  const canSubmit = draft.label.trim !== "";

  // 열 때마다 이전 입력값 초기화. 닫았다 다시 열면 빈 폼 상태여야 하는 구조임
  React.useEffect( => {
    if (isOpen) setDraft({ label: "", hint: "" });
  }, [isOpen]);

  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-[360px]">
          <Modal.CloseTrigger />
          <Modal.Header>
            {/* className은 HeroUI 공식 예제 문자열만 사용, 새 유틸리티 클래스 금지 */}
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <Plus size={18} />
            </Modal.Icon>
            <Modal.Heading>새 습관 추가</Modal.Heading>
          </Modal.Header>
          <Modal.Body className="flex flex-col gap-3">
            <TextField value={draft.label} onChange={(v) => setDraft((d) => ({ ...d, label: v }))} name="habit-label">
              <Label>습관 이름</Label>
              <Input placeholder="예: 스트레칭 5분" />
            </TextField>
            <TextField value={draft.hint} onChange={(v) => setDraft((d) => ({ ...d, hint: v }))} name="habit-hint">
              <Label>힌트(선택)</Label>
              <Input placeholder="예: 아침에 일어나서" />
            </TextField>
          </Modal.Body>
          <Modal.Footer>
            <Button slot="close" variant="secondary">취소</Button>
            <Button
              variant="primary"
              isDisabled={!canSubmit}
              onPress={ => {
                onSubmit(draft);
                onOpenChange(false);
              }}
            >
              추가
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}

export function TodayScreen {
  const [habits, setHabits] = React.useState<Habit[]>(HABITS);
  const [done, setDone] = React.useState<Set<string>>( => new Set(["water"]));
  const [memo, setMemo] = React.useState("");
  const [addOpen, setAddOpen] = React.useState(false);

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const addHabit = (draft: HabitDraft) => {
    const label = draft.label.trim;
    if (label === "") return;
    setHabits((prev) => [...prev, { id: `habit-${Date.now}`, label, hint: draft.hint.trim || "직접 추가한 습관" }]);
  };

  const percent = Math.round((done.size / habits.length) * 100);
  const remaining = habits.length - done.size;
  const next = habits.find((h) => !done.has(h.id));

  // ①, ② 계산은 과거 6일 고정과 오늘 실시간을 합친 배열을 차트, 평균, 스트릭에 사용
  const weekChartData = React.useMemo(
     => [
      ...PAST_WEEK_COMPLETION.map((value, i) => ({ label: PAST_WEEK_LABELS[i], value, isToday: false })),
      { label: "오늘", value: percent, isToday: true },
    ],
    [percent],
  );
  const weeklyAverage = Math.round(
    (PAST_WEEK_COMPLETION.reduce((s, v) => s + v, 0) + percent) / (PAST_WEEK_COMPLETION.length + 1),
  );
  const trailingStreak = React.useMemo( => {
    let n = 0;
    for (let i = PAST_WEEK_COMPLETION.length - 1; i >= 0; i--) {
      if (PAST_WEEK_COMPLETION[i] >= 100) n++;
      else break;
    }
    return n;
  }, []);
  const streakMessage =
    percent === 100
      ? `오늘까지 연속 ${trailingStreak + 1}일째 100% 달성 중이에요!`
      : trailingStreak > 0
        ? `연속 ${trailingStreak}일째 100% 달성 중. 오늘 마치면 ${trailingStreak + 1}일째예요.`
        : "오늘부터 다시 연속 기록을 시작해봐요.";

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

      <div className="flex flex-wrap gap-3">
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">완료</span>
          <span className="text-2xl font-semibold">{done.size} / {habits.length}</span>
        </Card>
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">남음</span>
          <span className="text-2xl font-semibold">{remaining}개</span>
        </Card>
        <Card className="flex-1 gap-1 p-3" style={{ minWidth: "8rem" }}>
          <span className="text-xs opacity-60">다음 할 일</span>
          <span className="text-sm font-medium">{next ? next.label : "오늘 목표 완료! 🎉"}</span>
        </Card>
      </div>

      <Card className="gap-3 p-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">이번 주 달성 흐름</span>
          <span className="text-xs opacity-60">{streakMessage}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div style={{ flex: "1 1 12rem", minWidth: "12rem", inlineSize: "100%", blockSize: 96 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekChartData} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  tick={{ style: { fontSize: 10 } }}
                />
                <YAxis hide domain={[0, 100]} />
                <RechartsTooltip formatter={(v) => [`${v}%`, "달성률"]} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                  {weekChartData.map((d) => (
                    <Cell
                      key={d.label}
                      fill={d.isToday ? "var(--semantic-bg-brand-default)" : "var(--semantic-bg-brand-subtle)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col items-center gap-1" style={{ flex: "0 0 auto" }}>
            <ProgressCircle
              aria-label="이번 주 평균 달성률"
              value={weeklyAverage}
              size="lg"
              color={weeklyAverage >= 80 ? "success" : weeklyAverage >= 50 ? "accent" : "warning"}
            >
              <ProgressCircle.Track>
                <ProgressCircle.TrackCircle />
                <ProgressCircle.FillCircle />
              </ProgressCircle.Track>
            </ProgressCircle>
            <Label className="text-sm font-semibold">{weeklyAverage}%</Label>
            <span className="text-xs opacity-60">주간 평균</span>
          </div>
        </div>
      </Card>

      <Card className="gap-2 p-3">
        <TextField value={memo} onChange={setMemo} name="today-memo">
          <Label className="text-sm font-medium">오늘의 메모</Label>
          <TextArea rows={2} placeholder="오늘 하루는 어땠나요? 짧게 남겨보세요." />
        </TextField>
      </Card>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">오늘의 습관</span>
        <Button size="sm" variant="secondary" onPress={ => setAddOpen(true)}>
          <Plus size={14} />
          습관 추가
        </Button>
      </div>
      <Card className="gap-0 divide-y p-0">
        {habits.map((habit) => (
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

      <AddHabitModal isOpen={addOpen} onOpenChange={setAddOpen} onSubmit={addHabit} />
    </div>
  );
}
