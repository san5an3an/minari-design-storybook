import { Chip, Table } from "@heroui/react";

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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {STREAKS.map((s) => (
          <Chip key={s.label} color="accent">
            {s.label} · {s.days}일 연속
          </Chip>
        ))}
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
    </div>
  );
}
