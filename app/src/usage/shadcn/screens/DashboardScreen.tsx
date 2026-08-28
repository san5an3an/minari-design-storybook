import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
// 사이드바, 메뉴, 아바타 등 앱 셸 중복 요소 제거, 화면은 내용만 표시
import { Settings2, TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Chart } from "../../../bases/shadcn/Chart";
import { Checkbox } from "../../../bases/shadcn/Checkbox";
import { Pagination } from "../../../bases/shadcn/Pagination";
import { Popover } from "../../../bases/shadcn/Popover";
import { Segmented } from "../../../bases/shadcn/Segmented";
import { Select } from "../../../bases/shadcn/Select";
import { Table } from "../../../bases/shadcn/Table";
import { Tabs } from "../../../bases/shadcn/Tabs";
import { useIsWide } from "../useIsWide";

interface StatSpec {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  headline: string;
  note: string;
}

// 카드 4장 구성 동일. 숫자, 증감, 두 줄 꼬리표 위치까지 같음
const STATS: readonly StatSpec[] = [
  {
    label: "총 매출",
    value: "₩1,250,000",
    delta: "+12.5%",
    up: true,
    headline: "이번 달 올라가는 중",
    note: "최근 6개월 방문자 기준",
  },
  {
    label: "신규 고객",
    value: "1,234",
    delta: "-20%",
    up: false,
    headline: "이번 기간 20% 내려감",
    note: "유입을 들여다볼 때",
  },
  {
    label: "활성 계정",
    value: "45,678",
    delta: "+12.5%",
    up: true,
    headline: "잔존이 탄탄함",
    note: "관여도가 목표를 넘음",
  },
  {
    label: "성장률",
    value: "4.5%",
    delta: "+4.5%",
    up: true,
    headline: "꾸준히 오르는 중",
    note: "성장 전망에 부합",
  },
];

// 기간 선택기가 자르는 원본 데이터. 90일치를 두고 30일, 7일로 분할
const VISITS = [
  { date: "04-24", 데스크톱: 387, 모바일: 290 },
  { date: "04-27", 데스크톱: 383, 모바일: 420 },
  { date: "04-30", 데스크톱: 454, 모바일: 380 },
  { date: "05-03", 데스크톱: 247, 모바일: 190 },
  { date: "05-06", 데스크톱: 498, 모바일: 520 },
  { date: "05-09", 데스크톱: 227, 모바일: 180 },
  { date: "05-12", 데스크톱: 197, 모바일: 240 },
  { date: "05-15", 데스크톱: 473, 모바일: 380 },
  { date: "05-18", 데스크톱: 315, 모바일: 350 },
  { date: "05-21", 데스크톱: 82, 모바일: 140 },
  { date: "05-24", 데스크톱: 294, 모바일: 220 },
  { date: "05-27", 데스크톱: 420, 모바일: 460 },
  { date: "05-30", 데스크톱: 340, 모바일: 280 },
  { date: "06-02", 데스크톱: 470, 모바일: 410 },
  { date: "06-05", 데스크톱: 88, 모바일: 140 },
  { date: "06-08", 데스크톱: 385, 모바일: 320 },
  { date: "06-11", 데스크톱: 92, 모바일: 150 },
  { date: "06-14", 데스크톱: 426, 모바일: 380 },
  { date: "06-17", 데스크톱: 475, 모바일: 520 },
  { date: "06-20", 데스크톱: 408, 모바일: 450 },
  { date: "06-23", 데스크톱: 480, 모바일: 530 },
  { date: "06-26", 데스크톱: 434, 모바일: 380 },
  { date: "06-29", 데스크톱: 103, 모바일: 160 },
  { date: "06-30", 데스크톱: 446, 모바일: 400 },
] as const;

// 기간표. 값이 끝에서 몇 개인지를 나타내며 날짜 계산은 화면에서 하지 않음
const RANGES: Record<string, { label: string; take: number }> = {
  "90d": { label: "최근 3개월", take: VISITS.length },
  "30d": { label: "최근 30일", take: 10 },
  "7d": { label: "최근 7일", take: 3 },
};

const CHART_CONFIG = {
  데스크톱: { label: "데스크톱", color: "var(--component-chart-series-1)" },
  모바일: { label: "모바일", color: "var(--component-chart-series-2)" },
};

interface DocRow {
  title: string;
  kind: string;
  status: "진행 중" | "완료";
  target: number;
  limit: number;
  reviewer: string;
}

// data.json 앞 8줄의 상태, 목표, 한도, 검토자 4축, 원본과 일치
const DOCS: readonly DocRow[] = [
  { title: "표지", kind: "표지", status: "진행 중", target: 18, limit: 5, reviewer: "김도현" },
  { title: "목차", kind: "목차", status: "완료", target: 29, limit: 24, reviewer: "김도현" },
  { title: "요약", kind: "서술", status: "완료", target: 10, limit: 13, reviewer: "김도현" },
  { title: "기술 접근", kind: "서술", status: "완료", target: 27, limit: 23, reviewer: "박서연" },
  { title: "설계", kind: "서술", status: "진행 중", target: 2, limit: 16, reviewer: "박서연" },
  { title: "역량", kind: "서술", status: "진행 중", target: 20, limit: 8, reviewer: "미배정" },
  { title: "기존 시스템 연동", kind: "서술", status: "진행 중", target: 19, limit: 21, reviewer: "미배정" },
  { title: "혁신과 강점", kind: "서술", status: "완료", target: 25, limit: 26, reviewer: "미배정" },
];

const COLUMNS = ["헤더", "구획 유형", "상태", "목표", "한도", "검토자"] as const;
type ColumnName = (typeof COLUMNS)[number];

// 열 이름별 렌더링 내용 매핑 테이블
const CELL: Record<ColumnName, (d: DocRow) => React.ReactNode> = {
  헤더: (d) => d.title,
  "구획 유형": (d) => (
    <Badge variant="outline" tone="neutral">
      {d.kind}
    </Badge>
  ),
  상태: (d) => (
    <Badge variant="subtle" tone={d.status === "완료" ? "success" : "neutral"}>
      {d.status}
    </Badge>
  ),
  목표: (d) => <span className="tabular-nums">{d.target}</span>,
  한도: (d) => <span className="tabular-nums">{d.limit}</span>,
  검토자: (d) => d.reviewer,
};

function StatCard({ spec }: { spec: StatSpec }) {
  const Trend = spec.up ? TrendingUp : TrendingDown;
  return (
    <Card
      title={spec.label}
      action={
        <Badge variant="outline" tone="neutral" icon={<Trend size={14} aria-hidden />}>
          {spec.delta}
        </Badge>
      }
      footer={
        <div className="flex flex-col gap-1">
          <span
            className="flex items-center gap-2"
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body-sm)",
            }}
          >
            {spec.headline}
            <Trend size={14} aria-hidden />
          </span>
          <span
            style={{
              color: "var(--semantic-fg-neutral-subtle)",
              fontSize: "var(--semantic-text-caption)",
            }}
          >
            {spec.note}
          </span>
        </div>
      }
    >
      <span
        className="block tabular-nums"
        style={{
          color: "var(--semantic-fg-neutral-default)",
          fontSize: "var(--semantic-text-heading-lg)",
          letterSpacing: "var(--semantic-tracking-heading-lg)",
          lineHeight: "var(--semantic-line-height-tight)",
        }}
      >
        {spec.value}
      </span>
    </Card>
  );
}

// 기간 선택기가 있는 면적 그래프. 넓으면 Segmented, 좁으면 Select
function VisitsCard {
  const [range, setRange] = React.useState("90d");
  const wide = useIsWide(1024);
  const rows = VISITS.slice(-RANGES[range].take);

  return (
    <Card
      title="총 방문자"
      description={RANGES[range].label}
      action={
        wide ? (
          <Segmented
            value={[range]}
            onValueChange={(v) => {
              // 빈 배열 허용
              if (v.length) setRange(v[0]);
            }}
          >
            {Object.entries(RANGES).map(([key, r]) => (
              <Segmented.Item key={key} value={key}>
                {r.label}
              </Segmented.Item>
            ))}
          </Segmented>
        ) : (
          <Select
            aria-label="기간 고르기"
            size="sm"
            value={range}
            onValueChange={setRange}
            items={Object.fromEntries(
              Object.entries(RANGES).map(([key, r]) => [key, r.label]),
            )}
          />
        )
      }
    >
      <Chart config={CHART_CONFIG} className="aspect-auto h-[15.625rem] w-full">
        <AreaChart data={rows as unknown as Record<string, unknown>[]}>
          <defs>
            {/* 상단 진하고 하단으로 갈수록 옅어지는 그라데이션 */}
            {(["데스크톱", "모바일"] as const).map((key) => (
              <linearGradient key={key} id={`fill-${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`var(--color-${key})`} stopOpacity={0.9} />
                <stop offset="95%" stopColor={`var(--color-${key})`} stopOpacity={0.1} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} minTickGap={24} />
          <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator="dot" />} />
          {/* 스택형 차트, 두 계열 합이 총 방문자 수 */}
          <Area
            dataKey="모바일"
            type="natural"
            stackId="a"
            fill="url(#fill-모바일)"
            stroke="var(--color-모바일)"
          />
          <Area
            dataKey="데스크톱"
            type="natural"
            stackId="a"
            fill="url(#fill-데스크톱)"
            stroke="var(--color-데스크톱)"
          />
        </AreaChart>
      </Chart>
    </Card>
  );
}

// 문서 표 렌더링. 선택 셀, 상태 배지, 페이지네이션 포함, 넘치면 내부 스크롤 처리
function DocsTable({ shown }: { shown: readonly string[] }) {
  const [page, setPage] = React.useState(1);
  const [picked, setPicked] = React.useState<readonly string[]>([]);
  const allOn = picked.length === DOCS.length;

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-x-auto">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>
                <Checkbox
                  aria-label="모두 고르기"
                  checked={allOn}
                  indeterminate={picked.length > 0 && !allOn}
                  onCheckedChange={(on) =>
                    setPicked(on ? DOCS.map((d) => d.title) : [])
                  }
                />
              </Table.Head>
              {shown.map((c) => (
                <Table.Head key={c}>{c}</Table.Head>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {DOCS.map((d) => (
              <Table.Row key={d.title}>
                <Table.Cell>
                  <Checkbox
                    aria-label={`${d.title} 고르기`}
                    checked={picked.includes(d.title)}
                    onCheckedChange={(on) =>
                      setPicked((prev) =>
                        on ? [...prev, d.title] : prev.filter((t) => t !== d.title),
                      )
                    }
                  />
                </Table.Cell>
                {shown.map((c) => (
                  <Table.Cell key={c}>{CELL[c as ColumnName](d)}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span
          style={{
            color: "var(--semantic-fg-neutral-subtle)",
            fontSize: "var(--semantic-text-body-sm)",
          }}
        >
          {DOCS.length}줄 가운데 {picked.length}줄 골랐어요
        </span>
        <Pagination page={page} total={7} onPage={setPage} />
      </div>
    </div>
  );
}

// 미구현 탭 위치, 고장과 구분 위해 플레이스홀더 추가
function Placeholder {
  return (
    <div
      className="flex min-h-40 items-center justify-center"
      style={{
        border: "var(--semantic-border-width-default) dashed var(--semantic-border-neutral-default)",
        borderRadius: "var(--semantic-radius-container)",
        color: "var(--semantic-fg-neutral-subtle)",
        fontSize: "var(--semantic-text-body-sm)",
      }}
    >
      이 종류는 아직 비어 있어요
    </div>
  );
}

export function DashboardScreen {
  const [hidden, setHidden] = React.useState<readonly string[]>([]);
  const shown = COLUMNS.filter((c) => !hidden.includes(c));

  return (
    <div className="flex flex-col gap-6">
        {/* 지표 4개. 원본 기준 @xl은 2열, @5xl은 4열임 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} spec={s} />
          ))}
        </div>

        <VisitsCard />

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* ActionItemSpec은 checked 표시만, 클릭값 반환 불가. Menu 미사용 */}
            <Popover
              align="start"
              trigger={
                <Button variant="outline">
                  <Settings2 size={14} aria-hidden />
                  열 고르기
                </Button>
              }
            >
              <div className="flex min-w-40 flex-col gap-1">
                {COLUMNS.map((c) => (
                  <label
                    key={c}
                    className="flex cursor-pointer items-center gap-2 px-1 py-1.5"
                    style={{
                      fontSize: "var(--semantic-text-body-sm)",
                      color: "var(--semantic-fg-neutral-default)",
                    }}
                  >
                    <Checkbox
                      checked={!hidden.includes(c)}
                      onCheckedChange={(on) =>
                        setHidden((prev) =>
                          on ? prev.filter((h) => h !== c) : [...prev, c],
                        )
                      }
                    />
                    {c}
                  </label>
                ))}
              </div>
            </Popover>
            <Button variant="solid" tone="brand">
              구획 더하기
            </Button>
          </div>

          {/* 원본 네 가지 경우 그대로 유지 */}
          <Tabs
            defaultValue="outline"
            items={[
              { value: "outline", label: "개요", content: <DocsTable shown={shown} /> },
              {
                value: "past",
                label: (
                  <span className="flex items-center gap-2">
                    지난 성과
                    <Badge variant="subtle" tone="neutral">3</Badge>
                  </span>
                ),
                content: <Placeholder />,
              },
              {
                value: "people",
                label: (
                  <span className="flex items-center gap-2">
                    핵심 인력
                    <Badge variant="subtle" tone="neutral">2</Badge>
                  </span>
                ),
                content: <Placeholder />,
              },
              { value: "focus", label: "중점 문서", content: <Placeholder /> },
            ]}
          />
      </div>
    </div>
  );
}
