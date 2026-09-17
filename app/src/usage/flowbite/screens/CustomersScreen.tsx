import * as React from "react";
import {
  Badge, Dropdown, DropdownItem, Table, TableBody, TableCell, TableHead, TableHeadCell,
  TableRow, TextInput, Tooltip,
} from "flowbite-react";
import { CUSTOMERS, REVIEWS, type CustomerItem } from "../data";

const STATUS_BADGE: Record<CustomerItem["status"], { color: string; label: string }> = {
  active: { color: "success", label: "활성" },
  trial: { color: "info", label: "체험" },
  churned: { color: "gray", label: "해지" },
};

const won = (n: number) => (n === 0 ? "-" : `${n.toLocaleString("ko-KR")}원`);

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=60";

// 고객 목록 상단 인사 배너, 짙은 영역에 글자 배치. flowbite 변수만 사용
function CustomersHero {
  const activeCount = CUSTOMERS.filter((c) => c.status === "active").length;
  return (
    <div
      style={{
        alignItems: "flex-start",
        backgroundImage:
          `linear-gradient(120deg, color-mix(in oklch, var(--color-primary-700) 90%, black) 0%, `
          + `color-mix(in oklch, var(--color-primary-600) 75%, black) 70%), url("${HERO_IMAGE}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "flex-end",
        minHeight: "144px",
        padding: "20px",
      }}
    >
      <span style={{ fontWeight: 600, fontSize: "18px" }}>
        좋은 아침이에요 👋 오늘 영업 현황을 확인해요
      </span>
      <span style={{ opacity: 0.85, fontSize: "14px" }}>
        활성 고객 {activeCount}곳이 지금 서비스를 쓰고 있어요.
      </span>
    </div>
  );
}

function Sparkline({ data, color }: { data: readonly number[]; color: string }) {
  const w = 72;
  const h = 28;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / span) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h} aria-hidden style={{ display: "block" }}>
      <polyline points={points} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type StatTone = "primary" | "green" | "yellow" | "red";
interface CrmStat {
  label: string; value: string; delta: string; up: boolean; tone: StatTone; trend: readonly number[];
}
const CRM_STATS: readonly CrmStat[] = [
  { label: "총 MRR", value: `${(CUSTOMERS.reduce((s, c) => s + c.mrr, 0) / 10000).toLocaleString("ko-KR")}만원`, delta: "+8%", up: true, tone: "primary", trend: [820, 850, 870, 900, 930, 950, 956] },
  { label: "활성 고객", value: `${CUSTOMERS.filter((c) => c.status === "active").length}곳`, delta: "+1곳", up: true, tone: "green", trend: [3, 3, 4, 4, 4, 4, 4] },
  { label: "체험 중", value: `${CUSTOMERS.filter((c) => c.status === "trial").length}곳`, delta: "0곳", up: true, tone: "yellow", trend: [1, 1, 1, 1, 1, 1, 1] },
  { label: "평균 리뷰 점수", value: `${(REVIEWS.reduce((s, r) => s + r.score, 0) / REVIEWS.length).toFixed(1)}점`, delta: "-0.1점", up: false, tone: "red", trend: [4.4, 4.4, 4.3, 4.3, 4.3, 4.25, 4.25] },
];

const TONE_HEX: Record<StatTone, string> = {
  primary: "var(--color-primary-600)",
  green: "var(--color-green-600)",
  yellow: "var(--color-yellow-500)",
  red: "var(--color-red-600)",
};

function CrmStatCard({ stat }: { stat: CrmStat }) {
  const tone = TONE_HEX[stat.tone];
  const trendColor = stat.up ? "var(--color-green-600)" : "var(--color-red-600)";
  return (
    <div
      style={{
        border: "1px solid var(--color-gray-200)",
        borderRadius: "8px",
        padding: "14px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span
            aria-hidden
            style={{
              alignItems: "center", background: tone, borderRadius: "50%",
              color: "white", display: "flex", height: "28px", justifyContent: "center", width: "28px", fontSize: "13px", fontWeight: 700,
            }}
          >
            {stat.label[0]}
          </span>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{stat.label}</span>
          <span style={{ fontSize: "18px", fontWeight: 600 }}>{stat.value}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
          <Badge color={stat.up ? "success" : "failure"}>{stat.delta}</Badge>
          <Sparkline data={stat.trend} color={trendColor} />
        </div>
      </div>
    </div>
  );
}

export function CustomersScreen {
  const [query, setQuery] = React.useState("");
  const rows = CUSTOMERS.filter(
    (c) => query.trim === "" || c.name.includes(query) || c.company.includes(query),
  );

  return (
    <div className="flex flex-col gap-4">
      <CustomersHero />
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {CRM_STATS.map((s) => (
          <CrmStatCard key={s.label} stat={s} />
        ))}
      </div>
      <TextInput
        type="search"
        placeholder="고객·회사 검색"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-xs"
      />
      <div className="overflow-x-auto">
      <Table style={{ minWidth: "560px" }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>고객</TableHeadCell>
            <TableHeadCell>회사</TableHeadCell>
            <TableHeadCell>요금제</TableHeadCell>
            <TableHeadCell>월 매출</TableHeadCell>
            <TableHeadCell>상태</TableHeadCell>
            <TableHeadCell><span className="sr-only">동작</span></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {rows.map((c) => {
            const badge = STATUS_BADGE[c.status];
            return (
              <TableRow key={c.id}>
                <TableCell className="font-medium">{c.name}</TableCell>
                <TableCell>{c.company}</TableCell>
                <TableCell>{c.plan}</TableCell>
                <TableCell>{won(c.mrr)}</TableCell>
                <TableCell>
                  <Tooltip content={`고객 상태: ${badge.label}`}>
                    <Badge color={badge.color}>{badge.label}</Badge>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Dropdown label="" dismissOnClick inline renderTrigger={ => (
                    <button type="button" aria-label={`${c.name} 더보기`} className="text-gray-500 hover:text-gray-700">⋯</button>
                  )}>
                    <DropdownItem>상세 보기</DropdownItem>
                    <DropdownItem>메모 추가</DropdownItem>
                  </Dropdown>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>
    </div>
  );
}
