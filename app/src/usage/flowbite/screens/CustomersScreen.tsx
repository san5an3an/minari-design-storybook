import * as React from "react";
import {
  Alert, Badge, Button, ButtonGroup, ClipboardWithIcon, Datepicker, Dropdown, DropdownItem, HR, Label,
  Modal, ModalBody, ModalFooter, ModalHeader, Select, Table,
  TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Tooltip,
} from "flowbite-react";
import { MapPin, Phone, Sparkles, Video } from "lucide-react";
import { CUSTOMERS, REVIEWS, UPCOMING_MEETINGS, type CustomerItem, type UpcomingMeeting } from "../data";
import type { ScreenProps } from "../screens";

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

// 2단 왼쪽, MRR 추이 라인차트 표시
function MrrTrendChart {
  const [range, setRange] = React.useState<"주간" | "월간">("주간");
  const trend = [820, 850, 870, 900, 930, 950, 956];
  const w = 100;
  const h = 64;
  const min = Math.min(...trend);
  const max = Math.max(...trend);
  const span = max - min || 1;
  const points = trend.map((v, i) => `${(i / (trend.length - 1)) * w},${h - ((v - min) / span) * h}`).join(" ");
  const areaPoints = `0,${h} ${points} ${w},${h}`;
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", flex: 1, minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600 }}>{range} MRR 추이</span>
        <div className="flex items-center gap-2">
          {/* ButtonGroup으로 기간 토글하기 */}
          <ButtonGroup>
            <Button size="xs" color={range === "주간" ? "default" : "light"} onClick={ => setRange("주간")}>주간</Button>
            <Button size="xs" color={range === "월간" ? "default" : "light"} onClick={ => setRange("월간")}>월간</Button>
          </ButtonGroup>
          <Badge color="success">+8%</Badge>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100" preserveAspectRatio="none" aria-hidden>
        <polygon points={areaPoints} fill="var(--color-primary-100)" />
        <polyline points={points} fill="none" stroke="var(--color-primary-600)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--color-gray-500)" }}>
        <span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span><span>일</span>
      </div>
    </div>
  );
}

// 2단 가운데, 요금제별 매출 비중 도넛 차트 표시. 선형 MrrTrendChart와 다른 두 번째 차트 종류
function PlanMixDonut {
  const PLAN_ORDER = ["Enterprise", "Growth", "Starter"] as const;
  const COLOR: Record<(typeof PLAN_ORDER)[number], string> = {
    Enterprise: "var(--color-primary-600)",
    Growth: "var(--color-green-500)",
    Starter: "var(--color-yellow-400)",
  };
  const byPlan = PLAN_ORDER.map((plan) => ({
    plan,
    total: CUSTOMERS.filter((c) => c.plan === plan).reduce((s, c) => s + c.mrr, 0),
  }));
  const grandTotal = byPlan.reduce((s, p) => s + p.total, 0) || 1;
  const r = 28;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "10px", display: "block" }}>요금제별 매출 비중</span>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label="요금제별 매출 비중 도넛 차트">
          <circle cx="36" cy="36" r={r} fill="none" stroke="var(--color-gray-100)" strokeWidth="10" />
          {byPlan.map((p) => {
            const frac = p.total / grandTotal;
            const dash = frac * circumference;
            const seg = (
              <circle
                key={p.plan}
                cx="36"
                cy="36"
                r={r}
                fill="none"
                stroke={COLOR[p.plan]}
                strokeWidth="10"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 36 36)"
              >
                <title>{`${p.plan} ${Math.round(frac * 100)}%`}</title>
              </circle>
            );
            offset += dash;
            return seg;
          })}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {byPlan.map((p) => (
            <div key={p.plan} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
              <span aria-hidden style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLOR[p.plan], flexShrink: 0 }} />
              <span style={{ color: "var(--color-gray-600)", flex: 1 }}>{p.plan}</span>
              <span style={{ fontWeight: 600 }}>{Math.round((p.total / grandTotal) * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CHANNEL_ICON: Record<UpcomingMeeting["channel"], typeof Video> = { 화상: Video, 방문: MapPin, 전화: Phone };

// 2단 오른쪽, 예정 미팅 예약 리스트
function UpcomingMeetingsList {
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "16px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "13px", fontWeight: 600 }}>다가오는 미팅</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
        {UPCOMING_MEETINGS.map((m) => {
          const Icon = CHANNEL_ICON[m.channel];
          return (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                aria-hidden
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "var(--color-primary-50)", color: "var(--color-primary-600)", flexShrink: 0,
                }}
              >
                <Icon size={14} />
              </span>
              <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: "13px", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.customer}</span>
                <span style={{ fontSize: "12px", color: "var(--color-gray-500)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.topic}</span>
              </div>
              <span style={{ fontSize: "12px", color: "var(--color-gray-500)", flexShrink: 0 }}>{m.timeLabel}</span>
            </div>
          );
        })}
      </div>
      {/* Datepicker로 미팅 예약일 선택하기 */}
      <div style={{ marginTop: "12px", paddingTop: "10px", borderTop: "1px solid var(--color-gray-100)" }}>
        <span style={{ fontSize: "12px", color: "var(--color-gray-500)", marginBottom: "6px", display: "block" }}>새 미팅 예약</span>
        <div className="flex items-center gap-2">
          <Datepicker language="ko-KR" labelTodayButton="오늘" labelClearButton="지우기" className="flex-1" />
          <Button size="sm">예약</Button>
        </div>
      </div>
    </div>
  );
}

// AI 위젯. 영업 인사이트 한 줄 제안
function AiInsightWidget {
  return (
    <Alert color="warning" icon={Sparkles}>
      <span style={{ fontWeight: 600 }}>AI 인사이트. </span>
      마포상사는 이번 달 결제가 완료됐고 갱신일이 가까워요. 지금 연락하면 Enterprise 업셀 성공률이 높아요.
    </Alert>
  );
}

const EMPTY_DRAFT = { name: "", company: "", plan: "Starter" as CustomerItem["plan"] };

export function CustomersScreen({ onNavigate, onSelect, customers: customersProp, onRegisterCustomer }: ScreenProps) {
  const [query, setQuery] = React.useState("");
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [draft, setDraft] = React.useState(EMPTY_DRAFT);

  // Dashboard 고객 목록을 기준으로 제공, 없으면 정적 CUSTOMERS로 대체하기
  const customers = customersProp ?? CUSTOMERS;

  const rows = customers.filter(
    (c) => query.trim === "" || c.name.includes(query) || c.company.includes(query),
  );

  const openDetail = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const registerCustomer =  => {
    if (!draft.name.trim || !draft.company.trim) return;
    const next: CustomerItem = {
      id: `c${Date.now}`,
      name: draft.name.trim,
      company: draft.company.trim,
      plan: draft.plan,
      mrr: 0,
      status: "trial",
    };
    onRegisterCustomer?.(next);
    setDraft(EMPTY_DRAFT);
    setRegisterOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <CustomersHero />
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {CRM_STATS.map((s) => (
          <CrmStatCard key={s.label} stat={s} />
        ))}
      </div>
      {/* HR로 통계 카드 그룹과 2단 섹션 구분하기 */}
      <HR />
      {/* 3단 구성: 선형차트, 도넛차트, 예약 리스트. 차트 2종류 동시 노출 */}
      <div className="flex flex-col gap-3 md:flex-row">
        <MrrTrendChart />
        <PlanMixDonut />
        <UpcomingMeetingsList />
      </div>
      <AiInsightWidget />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <TextInput
          type="search"
          placeholder="고객·회사 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xs"
        />
        {/* 고객 생성 기능 추가. CRM에 해당 기능 없음 */}
        <Button size="sm" onClick={ => setRegisterOpen(true)}>+ 새 고객 등록</Button>
      </div>
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
              <TableRow key={c.id} onClick={ => openDetail(c.id)} style={{ cursor: "pointer" }}>
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
                  <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation}>
                    {/* ClipboardWithIcon으로 지원팀 문의용 고객 ID 복사하기 */}
                    <Tooltip content="고객 ID 복사">
                      <ClipboardWithIcon valueToCopy={c.id} />
                    </Tooltip>
                    <Dropdown label="" dismissOnClick inline renderTrigger={ => (
                      <button type="button" aria-label={`${c.name} 더보기`} className="text-gray-500 hover:text-gray-700">⋯</button>
                    )}>
                      <DropdownItem onClick={ => openDetail(c.id)}>상세 보기</DropdownItem>
                      <DropdownItem onClick={ => openDetail(c.id)}>메모 추가</DropdownItem>
                    </Dropdown>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </div>

      <Modal show={registerOpen} onClose={ => setRegisterOpen(false)} size="sm">
        <ModalHeader>새 고객 등록</ModalHeader>
        <ModalBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>
              <Label htmlFor="new-customer-name">담당자 이름</Label>
              <TextInput
                id="new-customer-name"
                value={draft.name}
                onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                placeholder="예: 김하늘"
              />
            </div>
            <div>
              <Label htmlFor="new-customer-company">회사</Label>
              <TextInput
                id="new-customer-company"
                value={draft.company}
                onChange={(e) => setDraft((d) => ({ ...d, company: e.target.value }))}
                placeholder="예: 마포상사"
              />
            </div>
            <div>
              <Label htmlFor="new-customer-plan">요금제</Label>
              <Select
                id="new-customer-plan"
                value={draft.plan}
                onChange={(e) => setDraft((d) => ({ ...d, plan: e.target.value as CustomerItem["plan"] }))}
              >
                <option value="Starter">Starter</option>
                <option value="Growth">Growth</option>
                <option value="Enterprise">Enterprise</option>
              </Select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={registerCustomer} disabled={!draft.name.trim || !draft.company.trim}>등록</Button>
          <Button color="light" onClick={ => setRegisterOpen(false)}>취소</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
