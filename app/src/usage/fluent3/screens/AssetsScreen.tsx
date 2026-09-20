import * as React from "react";
import {
  Badge, Body1, Button, Caption1, Card, Checkbox, createTableColumn, DataGrid, DataGridBody,
  DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, Input, Menu, MenuButton,
  MenuItem, MenuList, MenuPopover, MenuTrigger, MessageBar, MessageBarBody, MessageBarTitle,
  ProgressBar, Switch, type TableColumnDefinition,
} from "@fluentui/react-components";
import {
  ArrowSortRegular, BoxRegular, HistoryRegular, LaptopRegular, PersonRegular, WrenchRegular,
} from "@fluentui/react-icons";
import { ASSETS, REQUESTS, type Asset } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Asset["status"], "success" | "informative" | "warning"> = {
  "사용 중": "success",
  "창고 대기": "informative",
  "수리 중": "warning",
};

type StatTone = "brand" | "success" | "warning" | "danger";
interface AssetStat {
  label: string; value: string; tone: StatTone; ratio: number;
  icon: React.ComponentType<{ fontSize?: number }>;
}
const ASSET_STATS: readonly AssetStat[] = [
  { label: "전체 자산", value: `${ASSETS.length}대`, tone: "brand", ratio: 1, icon: LaptopRegular },
  {
    label: "배정된 자산", value: `${ASSETS.filter((a) => a.currentHolder).length}대`, tone: "success",
    ratio: ASSETS.filter((a) => a.currentHolder).length / ASSETS.length, icon: PersonRegular,
  },
  {
    label: "수리 중", value: `${ASSETS.filter((a) => a.status === "수리 중").length}대`, tone: "warning",
    ratio: ASSETS.filter((a) => a.status === "수리 중").length / ASSETS.length, icon: WrenchRegular,
  },
  {
    label: "대기 요청", value: `${REQUESTS.filter((r) => r.status === "대기").length}건`, tone: "danger",
    ratio: REQUESTS.filter((r) => r.status === "대기").length / REQUESTS.length, icon: BoxRegular,
  },
];

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
  danger: "var(--colorPaletteRedBackground3)",
};

// color는 danger 대신 error만 허용
const PROGRESS_COLOR: Record<StatTone, "brand" | "success" | "warning" | "error"> = {
  brand: "brand", success: "success", warning: "warning", danger: "error",
};

// 통계 카드 4요소: 아이콘 배지, 라벨, 숫자, 진행바
function AssetStatCard({ stat }: { stat: AssetStat }) {
  const Icon = stat.icon;
  const tone = TONE_VAR[stat.tone];
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <span
          aria-hidden
          style={{
            alignItems: "center", background: tone, borderRadius: "8px",
            color: "white", display: "flex", flexShrink: 0, height: "28px", justifyContent: "center", width: "28px",
          }}
        >
          <Icon fontSize={14} />
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{stat.label}</Caption1>
          <Body1 style={{ fontSize: "16px", fontWeight: 600 }}>{stat.value}</Body1>
        </div>
      </div>
      <ProgressBar value={stat.ratio} thickness="medium" color={PROGRESS_COLOR[stat.tone]} />
    </Card>
  );
}

// 분류별 분포를 SVG 미니 막대그래프로 표시
function CategoryBarChart {
  const counts = new Map<string, number>;
  for (const a of ASSETS) counts.set(a.category, (counts.get(a.category) ?? 0) + 1);
  const data = [...counts.entries].map(([label, value]) => ({ label, value }));
  const max = Math.max(...data.map((d) => d.value), 1);
  const w = 260;
  const h = 90;
  const barW = w / data.length - 10;
  return (
    <Card style={{ padding: "14px", flex: 1, minWidth: "220px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>분류별 보유 대수</Body1>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} aria-hidden>
        {data.map((d, i) => {
          const barH = (d.value / max) * (h - 22);
          const x = i * (w / data.length) + 5;
          return (
            <g key={d.label}>
              <rect x={x} y={h - 16 - barH} width={barW} height={barH} fill="var(--colorBrandBackground)" rx={3} />
              <text x={x + barW / 2} y={h - 4} fontSize="8.5" textAnchor="middle" fill="var(--colorNeutralForeground3)">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Card>
  );
}

// 상태 분포 도넛 차트, CategoryBarChart 막대와 다른 차트 종류
function StatusDonutChart {
  const counts: Record<Asset["status"], number> = { "사용 중": 0, "창고 대기": 0, "수리 중": 0 };
  for (const a of ASSETS) counts[a.status] += 1;
  const total = ASSETS.length;
  const COLORS: Record<Asset["status"], string> = {
    "사용 중": "var(--colorPaletteGreenForeground2)",
    "창고 대기": "var(--colorNeutralForeground3)",
    "수리 중": "var(--colorPaletteYellowForeground2)",
  };
  const order: Asset["status"][] = ["사용 중", "창고 대기", "수리 중"];
  const r = 34;
  const c = 2 * Math.PI * r;
  let offset = 0;
  const segments = order.map((status) => {
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
          {order.map((status) => (
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

// 최근 배정 변경. 각 자산의 마지막 할당 이력을 한 행씩 표시
function RecentActivityList {
  const rows = ASSETS
    .filter((a) => a.history.length > 0)
    .map((a) => ({ asset: a, last: a.history[a.history.length - 1] }));
  return (
    <Card style={{ padding: "14px", flex: 1, minWidth: "220px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
        <HistoryRegular fontSize={16} />
        <Body1 style={{ fontWeight: 600 }}>최근 배정 변경</Body1>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {rows.map(({ asset, last }) => (
          <div key={asset.id} style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
            <Caption1 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {last.assignee} · {asset.name}
            </Caption1>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", flexShrink: 0 }}>
              {last.fromLabel} ~ {last.toLabel}
            </Caption1>
          </div>
        ))}
      </div>
    </Card>
  );
}

const CATEGORIES = ["전체", ...new Set(ASSETS.map((a) => a.category))];
const PAGE_SIZE = 5;

type SortKey = "name" | "status";
const SORT_LABEL: Record<SortKey, string> = { name: "이름순", status: "상태순" };

export function AssetsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [category, setCategory] = React.useState("전체");
  const [assignedOnly, setAssignedOnly] = React.useState(false);
  const [repairOnly, setRepairOnly] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [sortKey, setSortKey] = React.useState<SortKey>("name");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const filtered = React.useMemo( => {
    let list = category === "전체" ? ASSETS : ASSETS.filter((a) => a.category === category);
    if (assignedOnly) list = list.filter((a) => a.currentHolder);
    if (repairOnly) list = list.filter((a) => a.status === "수리 중");
    if (query) list = list.filter((a) => a.name.includes(query) || a.serial.includes(query));
    return list
      .slice
      .sort((a, b) => (sortKey === "name" ? a.name.localeCompare(b.name) : a.status.localeCompare(b.status)));
  }, [category, assignedOnly, repairOnly, query, sortKey]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const columns: TableColumnDefinition<Asset>[] = [
    createTableColumn<Asset>({
      columnId: "name",
      renderHeaderCell:  => "자산",
      renderCell: (a) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
          <span
            aria-hidden
            style={{
              alignItems: "center", background: "var(--colorNeutralBackground3)", borderRadius: "50%",
              display: "flex", flexShrink: 0, height: "24px", justifyContent: "center", width: "24px",
            }}
          >
            <LaptopRegular fontSize={13} />
          </span>
          <Body1 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.name}</Body1>
        </div>
      ),
    }),
    createTableColumn<Asset>({ columnId: "serial", renderHeaderCell:  => "시리얼", renderCell: (a) => a.serial }),
    createTableColumn<Asset>({ columnId: "category", renderHeaderCell:  => "분류", renderCell: (a) => a.category }),
    createTableColumn<Asset>({ columnId: "holder", renderHeaderCell:  => "사용자", renderCell: (a) => a.currentHolder ?? "미배정" }),
    createTableColumn<Asset>({
      columnId: "status",
      renderHeaderCell:  => "상태",
      renderCell: (a) => <Badge color={STATUS_COLOR[a.status]} appearance="filled">{a.status}</Badge>,
    }),
  ];

  const pending = REQUESTS.filter((r) => r.status === "대기").length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {pending > 0 ? (
        <MessageBar intent="warning">
          <MessageBarBody>
            <MessageBarTitle>승인 대기 중인 요청이 {pending}건 있어요</MessageBarTitle>
            "요청 현황" 탭에서 확인해 주세요.
          </MessageBarBody>
        </MessageBar>
      ) : null}
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
        {ASSET_STATS.map((s) => (
          <AssetStatCard key={s.label} stat={s} />
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {CATEGORIES.map((c) => {
          const count = c === "전체" ? ASSETS.length : ASSETS.filter((a) => a.category === c).length;
          return (
            <Button
              key={c}
              size="small"
              shape="circular"
              appearance={category === c ? "primary" : "outline"}
              onClick={ => { setCategory(c); setPage(0); }}
            >
              {c} {count}
            </Button>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
        <Input
          value={query}
          onChange={(_, data) => { setQuery(data.value); setPage(0); }}
          placeholder="이름·시리얼 검색"
          aria-label="자산 검색"
          style={{ minWidth: "180px" }}
        />
        <Switch
          checked={assignedOnly}
          onChange={(e) => { setAssignedOnly(e.target.checked); setPage(0); }}
          label="배정된 자산만"
        />
        <Checkbox
          checked={repairOnly}
          onChange={(_, data) => { setRepairOnly(Boolean(data.checked)); setPage(0); }}
          label="수리 중만"
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
              <MenuItem onClick={ => setSortKey("name")}>이름순</MenuItem>
              <MenuItem onClick={ => setSortKey("status")}>상태순</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      {paged.length === 0 ? (
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>조건에 맞는 자산이 없어요.</Caption1>
      ) : (
        <DataGrid
          items={paged}
          columns={columns}
          getRowId={(a) => a.id}
          resizableColumns
          columnSizingOptions={{
            name: { minWidth: 170, idealWidth: 210 },
            serial: { minWidth: 92, idealWidth: 100 },
            category: { minWidth: 64, idealWidth: 72 },
            holder: { minWidth: 72, idealWidth: 84 },
            status: { minWidth: 84, idealWidth: 92 },
          }}
          style={{ minWidth: "520px" }}
        >
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell}</DataGridHeaderCell>}
            </DataGridRow>
          </DataGridHeader>
          <DataGridBody<Asset>>
            {({ item, rowId }) => (
              <DataGridRow<Asset> key={rowId} onClick={ => open(item.id)} style={{ cursor: "pointer" }}>
                {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
              </DataGridRow>
            )}
          </DataGridBody>
        </DataGrid>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {filtered.length === 0 ? 0 : page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, filtered.length)} 표시 중 · 전체 {filtered.length}건
        </Caption1>
        <Button size="small" disabled={page === 0} onClick={ => setPage((p) => p - 1)}>이전</Button>
        <Button size="small" disabled={page >= pageCount - 1} onClick={ => setPage((p) => p + 1)}>다음</Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <CategoryBarChart />
        <StatusDonutChart />
        <RecentActivityList />
      </div>
    </div>
  );
}
