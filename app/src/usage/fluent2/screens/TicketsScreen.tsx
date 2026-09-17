import * as React from "react";
import {
  Badge, Body1, Button, Caption1, Card, Checkbox, createTableColumn, DataGrid, DataGridBody,
  DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, Divider, Drawer, DrawerBody,
  DrawerHeader, DrawerHeaderTitle, Dropdown, Field, Input, Menu, MenuButton, MenuItem, MenuList,
  MenuPopover, MenuTrigger, Option, Persona, Popover, PopoverSurface, PopoverTrigger,
  TeachingPopover, TeachingPopoverBody, TeachingPopoverSurface, TeachingPopoverTitle,
  TeachingPopoverTrigger, Textarea, Toast, ToastBody, Toaster, ToastTitle, Tooltip, useId,
  useToastController, type TableColumnDefinition,
} from "@fluentui/react-components";
import {
  AddRegular, AlertRegular, ArrowSortRegular, CheckmarkCircleRegular, ClockRegular,
  DismissRegular, TicketDiagonalRegular,
} from "@fluentui/react-icons";
import { elapsedHours, SLA_HOURS, TICKETS, type Ticket } from "../data";
import type { ScreenProps } from "../screens";

const PRIORITY_COLOR: Record<Ticket["priority"], "danger" | "warning" | "informative"> = {
  긴급: "danger",
  보통: "warning",
  낮음: "informative",
};
const STATUS_COLOR: Record<Ticket["status"], "danger" | "warning" | "success"> = {
  열림: "danger",
  "진행 중": "warning",
  해결됨: "success",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60";

// 티켓 목록 인사 배너, 하단 그라디언트 처리. open prop으로 신규 티켓 반영하기
function TicketsHero({ open }: { open: number }) {
  return (
    <div
      style={{
        alignItems: "flex-start",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, `
          + `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "flex-end",
        minHeight: "144px",
        padding: "20px",
      }}
    >
      <Body1 style={{ color: "white", fontWeight: 600, fontSize: "18px" }}>
        IT팀입니다 👋 오늘도 문의를 하나씩 풀어볼까요
      </Body1>
      <Caption1 style={{ color: "white", opacity: 0.85 }}>
        지금 열려 있는 티켓이 {open}건 있어요.
      </Caption1>
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

type StatTone = "brand" | "success" | "warning" | "danger";
interface DeskStat {
  label: string; value: string; delta: string; up: boolean; tone: StatTone;
  icon: React.ComponentType<{ fontSize?: number }>; trend: readonly number[];
}
const DESK_STATS: readonly DeskStat[] = [
  { label: "열린 티켓", value: `${TICKETS.filter((t) => t.status !== "해결됨").length}건`, delta: "-1건", up: true, tone: "brand", icon: TicketDiagonalRegular, trend: [5, 5, 4, 4, 3, 3, 3] },
  { label: "긴급 티켓", value: `${TICKETS.filter((t) => t.priority === "긴급").length}건`, delta: "+1건", up: false, tone: "danger", icon: AlertRegular, trend: [0, 0, 1, 1, 1, 1, 1] },
  { label: "평균 응답시간", value: "42분", delta: "-8분", up: true, tone: "warning", icon: ClockRegular, trend: [56, 52, 50, 48, 45, 44, 42] },
  { label: "이번 주 해결", value: "12건", delta: "+3건", up: true, tone: "success", icon: CheckmarkCircleRegular, trend: [6, 7, 8, 9, 10, 11, 12] },
];

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
  danger: "var(--colorPaletteRedBackground3)",
};

function DeskStatCard({ stat }: { stat: DeskStat }) {
  const Icon = stat.icon;
  const tone = TONE_VAR[stat.tone];
  return (
    <Card style={{ padding: "14px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span
            aria-hidden
            style={{
              alignItems: "center", background: tone, borderRadius: "50%",
              color: "white", display: "flex", height: "28px", justifyContent: "center", width: "28px",
            }}
          >
            <Icon fontSize={14} />
          </span>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{stat.label}</Caption1>
          <Body1 style={{ fontSize: "18px", fontWeight: 600 }}>{stat.value}</Body1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
          <Badge color={stat.up ? "success" : "danger"} appearance="tint">
            {stat.delta}
          </Badge>
          <Sparkline data={stat.trend} color={stat.up ? "var(--colorPaletteGreenForeground2)" : "var(--colorPaletteRedForeground2)"} />
        </div>
      </div>
    </Card>
  );
}

// 라인차트, 순수 SVG 사용. Fluent는 자체 차트 패키지가 없음
const WEEK_INTAKE = [2, 3, 1, 4, 2, 3, TICKETS.length] as const;
function IntakeLineChart {
  const w = 480;
  const h = 120;
  const max = Math.max(...WEEK_INTAKE, 1);
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const points = WEEK_INTAKE.map((v, i) => {
    const x = (i / (WEEK_INTAKE.length - 1)) * (w - 20) + 10;
    const y = h - 24 - (v / max) * (h - 40);
    return { x, y, v };
  });
  const line = points.map((p) => `${p.x},${p.y}`).join(" ");
  return (
    <Card style={{ padding: "14px", flex: 2, minWidth: "260px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>이번 주 접수 추이</Body1>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: "block" }}>
        <polyline points={line} fill="none" stroke="var(--colorBrandBackground)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={3.5} fill="var(--colorBrandBackground)" />
            <text x={p.x} y={h - 6} fontSize="10" textAnchor="middle" fill="var(--colorNeutralForeground3)">{days[i]}</text>
          </g>
        ))}
      </svg>
    </Card>
  );
}

// 도넛차트. 상태 분포 표시
function StatusDonutChart({ tickets }: { tickets: readonly Ticket[] }) {
  const counts: Record<Ticket["status"], number> = { 열림: 0, "진행 중": 0, 해결됨: 0 };
  for (const t of tickets) counts[t.status] += 1;
  const total = tickets.length;
  const COLORS: Record<Ticket["status"], string> = {
    열림: "var(--colorPaletteRedForeground2)",
    "진행 중": "var(--colorPaletteYellowForeground2)",
    해결됨: "var(--colorPaletteGreenForeground2)",
  };
  const r = 34;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const segments = (Object.keys(counts) as Ticket["status"][]).map((status) => {
    const ratio = total === 0 ? 0 : counts[status] / total;
    const seg = { status, dash: ratio * c, offset };
    offset += ratio * c;
    return seg;
  });
  return (
    <Card style={{ padding: "14px", flex: 1, minWidth: "200px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>상태 분포</Body1>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
          <g transform="translate(44,44) rotate(-90)">
            <circle r={r} fill="none" stroke="var(--colorNeutralStroke2)" strokeWidth={12} />
            {segments.map((s) => (
              <circle
                key={s.status} r={r} fill="none" stroke={COLORS[s.status]} strokeWidth={12}
                strokeDasharray={`${s.dash} ${c - s.dash}`} strokeDashoffset={-s.offset}
              />
            ))}
          </g>
          <text x="44" y="48" textAnchor="middle" fontSize="16" fontWeight={700} fill="var(--colorNeutralForeground1)">{total}</text>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {(Object.keys(counts) as Ticket["status"][]).map((status) => (
            <div key={status} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS[status], display: "inline-block" }} />
              <Caption1>{status} {counts[status]}</Caption1>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

// 마감일 리스트, SLA 임박 티켓
function SlaDeadlineList({ tickets }: { tickets: readonly Ticket[] }) {
  const upcoming = tickets
    .filter((t) => t.status !== "해결됨")
    .map((t) => {
      const target = SLA_HOURS[t.priority];
      const elapsed = elapsedHours(t.createdLabel);
      return { ticket: t, remain: target - elapsed, target };
    })
    .sort((a, b) => a.remain - b.remain);

  if (upcoming.length === 0) return null;

  return (
    <Card style={{ padding: "14px" }}>
      {/* 카드 의미 TeachingPopover로 최초 1회 안내. 닫으면 세션 동안 재노출 차단 */}
      <TeachingPopover>
        <TeachingPopoverTrigger disableButtonEnhancement>
          <Body1 style={{ fontWeight: 600, marginBottom: "8px", cursor: "pointer", display: "inline-block" }}>
            SLA 임박 순
          </Body1>
        </TeachingPopoverTrigger>
        <TeachingPopoverSurface>
          <TeachingPopoverTitle>SLA 임박 순이란?</TeachingPopoverTitle>
          <TeachingPopoverBody>
            우선순위별 목표 응답시간까지 얼마나 남았는지, 가장 급한 티켓부터 보여줘요.
          </TeachingPopoverBody>
        </TeachingPopoverSurface>
      </TeachingPopover>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {upcoming.map(({ ticket, remain, target }) => (
          <div key={ticket.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
            <Caption1 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
              {ticket.subject}
            </Caption1>
            {/* Popover 클릭 시 SLA 목표, 우선순위 표시 */}
            <Popover>
              <PopoverTrigger disableButtonEnhancement>
                <button
                  aria-label={`${ticket.subject} SLA 상세`}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <Badge
                    appearance="tint"
                    color={remain <= 0 ? "danger" : remain <= 4 ? "warning" : "informative"}
                    size="small"
                  >
                    {remain <= 0 ? "목표 초과" : `${remain}시간 남음`}
                  </Badge>
                </button>
              </PopoverTrigger>
              <PopoverSurface>
                <Caption1 style={{ display: "block" }}>{ticket.priority} 우선순위 · 목표 {target}시간</Caption1>
                <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block" }}>{ticket.requester} · {ticket.createdLabel}</Caption1>
              </PopoverSurface>
            </Popover>
          </div>
        ))}
      </div>
    </Card>
  );
}

const PRIORITY_RANK: Record<Ticket["priority"], number> = { 긴급: 0, 보통: 1, 낮음: 2 };
type SortKey = "priority" | "recent";
const SORT_LABEL: Record<SortKey, string> = { priority: "우선순위순", recent: "최신순" };

export function TicketsScreen({ onNavigate, onSelect, tickets: ticketsProp, onCreateTicket }: ScreenProps) {
  // Dashboard가 내려주는 tickets가 단일 진실, 없으면 모듈 상수로 대체하기
  const tickets = ticketsProp ?? TICKETS;
  const [category, setCategory] = React.useState("전체");
  const [query, setQuery] = React.useState("");
  const [urgentOnly, setUrgentOnly] = React.useState(false);
  const [sortKey, setSortKey] = React.useState<SortKey>("recent");

  // 새 티켓 접수 폼
  const [createOpen, setCreateOpen] = React.useState(false);
  const [newSubject, setNewSubject] = React.useState("");
  const [newRequester, setNewRequester] = React.useState("");
  const [newCategory, setNewCategory] = React.useState<string>(TICKETS[0]?.category ?? "");
  const [newPriority, setNewPriority] = React.useState<Ticket["priority"]>("보통");
  const [newBody, setNewBody] = React.useState("");

  const toasterId = useId("tickets-toaster");
  const { dispatchToast } = useToastController(toasterId);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const categories = ["전체", ...new Set(tickets.map((t) => t.category))];
  const createCategories = [...new Set(tickets.map((t) => t.category))];
  const openCount = tickets.filter((t) => t.status !== "해결됨").length;

  const submitTicket =  => {
    if (!newSubject.trim || !newRequester.trim) return;
    const id = `tk${tickets.length + 1}-${Date.now.toString(36)}`;
    const ticket: Ticket = {
      id,
      subject: newSubject.trim,
      requester: newRequester.trim,
      priority: newPriority,
      status: "열림",
      category: newCategory || "기타",
      createdLabel: "방금",
      messages: newBody.trim ? [{ author: newRequester.trim, text: newBody.trim, timeLabel: "방금" }] : [],
    };
    onCreateTicket?.(ticket);
    setCreateOpen(false);
    setNewSubject("");
    setNewRequester("");
    setNewBody("");
    dispatchToast(
      <Toast>
        <ToastTitle>티켓을 접수했어요</ToastTitle>
        <ToastBody>IT팀이 확인하는 대로 처리해요.</ToastBody>
      </Toast>,
      { intent: "success" },
    );
  };

  const rows = tickets
    .filter((t) => {
      if (category !== "전체" && t.category !== category) return false;
      if (urgentOnly && t.priority !== "긴급") return false;
      if (query && !t.subject.includes(query) && !t.requester.includes(query)) return false;
      return true;
    })
    .slice
    .sort((a, b) => (sortKey === "priority" ? PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] : 0));

  const columns: TableColumnDefinition<Ticket>[] = [
    createTableColumn<Ticket>({
      columnId: "requester",
      renderHeaderCell:  => "요청자",
      renderCell: (t) => <Persona name={t.requester} secondaryText={t.category} avatar={{ color: "colorful" }} size="small" />,
    }),
    createTableColumn<Ticket>({ columnId: "subject", renderHeaderCell:  => "제목", renderCell: (t) => t.subject }),
    createTableColumn<Ticket>({
      columnId: "priority",
      renderHeaderCell:  => "우선순위",
      renderCell: (t) => (
        <Tooltip content={`우선순위: ${t.priority}`} relationship="label">
          <Badge color={PRIORITY_COLOR[t.priority]} appearance="tint">{t.priority}</Badge>
        </Tooltip>
      ),
    }),
    createTableColumn<Ticket>({
      columnId: "status",
      renderHeaderCell:  => "상태",
      renderCell: (t) => <Badge color={STATUS_COLOR[t.status]} appearance="filled">{t.status}</Badge>,
    }),
    createTableColumn<Ticket>({
      columnId: "createdLabel",
      renderHeaderCell:  => "접수",
      renderCell: (t) => <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{t.createdLabel}</Caption1>,
    }),
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toaster toasterId={toasterId} />
      <TicketsHero open={openCount} />
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {DESK_STATS.map((s) => (
          <DeskStatCard key={s.label} stat={s} />
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <IntakeLineChart />
        <StatusDonutChart tickets={tickets} />
      </div>

      <SlaDeadlineList tickets={tickets} />

      {/* 필터 행. Dropdown, Input, Checkbox 등 폼 컨트롤과 티켓 접수 버튼 배치 */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
        <Dropdown
          value={category}
          selectedOptions={[category]}
          onOptionSelect={(_, data) => setCategory(data.optionValue ?? "전체")}
          style={{ minWidth: "160px" }}
          aria-label="분류 거르기"
        >
          {categories.map((c) => (
            <Option key={c} value={c}>{c}</Option>
          ))}
        </Dropdown>
        <Input
          value={query}
          onChange={(_, data) => setQuery(data.value)}
          placeholder="제목·요청자 검색"
          aria-label="티켓 검색"
          style={{ minWidth: "180px" }}
        />
        <Checkbox
          checked={urgentOnly}
          onChange={(_, data) => setUrgentOnly(Boolean(data.checked))}
          label="긴급만 보기"
        />
        {/* MenuButton으로 정렬 기준 선택 */}
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton icon={<ArrowSortRegular />} appearance="subtle">
              {SORT_LABEL[sortKey]}
            </MenuButton>
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem onClick={ => setSortKey("recent")}>최신순</MenuItem>
              <MenuItem onClick={ => setSortKey("priority")}>우선순위순</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Button
          appearance="primary"
          icon={<AddRegular />}
          style={{ marginInlineStart: "auto" }}
          onClick={ => setCreateOpen(true)}
        >
          새 티켓 접수
        </Button>
      </div>

      {/* 넓은 테이블, 카드 목록 대신 DataGrid 사용 */}
      {rows.length === 0 ? (
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>조건에 맞는 티켓이 없어요.</Caption1>
      ) : (
        <DataGrid items={rows} columns={columns} getRowId={(t) => t.id} style={{ minWidth: "560px" }}>
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Ticket>>
            {({ item, rowId }) => (
              <DataGridRow<Ticket> key={rowId} onClick={ => open(item.id)} style={{ cursor: "pointer" }}>
                {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      )}
      {rows.length > 0 ? (
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          <Badge appearance="tint" size="small">{rows.length}건</Badge> 표시 중 · 전체 {tickets.length}건
        </Caption1>
      ) : null}

      {/* OverlayDrawer로 신규 티켓 접수 폼 구현 */}
      <Drawer type="overlay" separator open={createOpen} onOpenChange={(_, data) => setCreateOpen(data.open)} position="end">
        <DrawerHeader>
          <DrawerHeaderTitle
            action={<Button appearance="subtle" aria-label="닫기" icon={<DismissRegular />} onClick={ => setCreateOpen(false)} />}
          >
            새 티켓 접수
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Field label="제목" required>
              <Input value={newSubject} onChange={(_, data) => setNewSubject(data.value)} placeholder="예: 사내 메신저 로그인이 안 돼요" />
            </Field>
            <Field label="요청자" required>
              <Input value={newRequester} onChange={(_, data) => setNewRequester(data.value)} placeholder="이름" />
            </Field>
            <Field label="분류">
              <Dropdown
                value={newCategory}
                selectedOptions={[newCategory]}
                onOptionSelect={(_, data) => setNewCategory(data.optionValue ?? createCategories[0])}
              >
                {createCategories.map((c) => (
                  <Option key={c} value={c}>{c}</Option>
                ))}
              </Dropdown>
            </Field>
            <Field label="우선순위">
              <Dropdown
                value={newPriority}
                selectedOptions={[newPriority]}
                onOptionSelect={(_, data) => setNewPriority((data.optionValue as Ticket["priority"]) ?? "보통")}
              >
                {(["긴급", "보통", "낮음"] as Ticket["priority"][]).map((p) => (
                  <Option key={p} value={p}>{p}</Option>
                ))}
              </Dropdown>
            </Field>
            <Field label="상황 설명">
              <Textarea value={newBody} onChange={(_, data) => setNewBody(data.value)} placeholder="무엇이 문제인지 알려 주세요" resize="vertical" rows={5} />
            </Field>
            <Divider />
            <Button appearance="primary" onClick={submitTicket} disabled={!newSubject.trim || !newRequester.trim}>
              접수하기
            </Button>
          </div>
        </DrawerBody>
      </Drawer>
    </div>
  );
}
