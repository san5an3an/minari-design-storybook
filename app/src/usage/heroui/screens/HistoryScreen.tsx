"use client";
import * as React from "react";
import { Chip, Label, ListBox, Pagination, Select, Table } from "@heroui/react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

const ROWS: { habit: string; done: boolean[] }[] = [
  { habit: "물 8잔 마시기", done: [true, true, true, false, true, true, true] },
  { habit: "20분 걷기", done: [true, false, true, true, true, false, true] },
  { habit: "책 10쪽 읽기", done: [true, true, true, true, true, true, false] },
  { habit: "하루 기록 한 줄", done: [false, true, false, true, false, true, true] },
  { habit: "자정 전에 눕기", done: [true, true, false, true, true, true, true] },
];

const STREAKS = [
  { label: "책 10쪽 읽기", days: 6 },
  { label: "물 8잔 마시기", days: 4 },
  { label: "자정 전에 눕기", days: 3 },
];

export function HistoryScreen {
  const [range, setRange] = React.useState("week");
  const [week, setWeek] = React.useState(1);
  const totalWeeks = 3;
  const chartData = ROWS.map((row) => ({
    name: row.habit,
    value: Math.round((row.done.filter(Boolean).length / row.done.length) * 100),
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        {STREAKS.map((s) => (
          <Chip key={s.label} color="accent">
            {s.label} · {s.days}일 연속
          </Chip>
        ))}
        <Select
          className="ms-auto w-36"
          selectedKey={range}
          onSelectionChange={(key) => setRange(String(key))}
        >
          <Label className="sr-only">기간</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="week" textValue="최근 7일">
                최근 7일
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="month" textValue="최근 30일">
                최근 30일
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="quarter" textValue="최근 90일">
                최근 90일
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="지난 7일 완료표" className="min-w-[520px]">
            <Table.Header>
              <Table.Column isRowHeader>습관</Table.Column>
              {DAYS.map((d) => (
                <Table.Column key={d}>{d}</Table.Column>
              ))}
            </Table.Header>
            <Table.Body>
              {ROWS.map((row) => (
                <Table.Row key={row.habit}>
                  <Table.Cell>{row.habit}</Table.Cell>
                  {row.done.map((ok, i) => (
                    <Table.Cell key={DAYS[i]}>
                      <span aria-label={ok ? "완료" : "미완료"} className={ok ? "" : "opacity-30"}>
                        {ok ? "✓" : "–"}
                      </span>
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      <Pagination className="justify-end">
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous isDisabled={week === 1} onPress={ => setWeek((w) => w - 1)}>
              <Pagination.PreviousIcon />
              <span>이전 주</span>
            </Pagination.Previous>
          </Pagination.Item>
          {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((w) => (
            <Pagination.Item key={w}>
              <Pagination.Link isActive={w === week} onPress={ => setWeek(w)}>
                {w}주차
              </Pagination.Link>
            </Pagination.Item>
          ))}
          <Pagination.Item>
            <Pagination.Next isDisabled={week === totalWeeks} onPress={ => setWeek((w) => w + 1)}>
              <span>다음 주</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>

      {/* 습관별 완료율 표시 */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium">습관별 완료율(7일)</span>
        <div className="rounded-lg border p-3" style={{ borderColor: "var(--semantic-border-neutral-subtle)" }}>
          <div style={{ inlineSize: "100%", blockSize: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={110} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="value" fill="var(--semantic-bg-brand-default)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
