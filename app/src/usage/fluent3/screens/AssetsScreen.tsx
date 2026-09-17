import * as React from "react";
import {
  Badge, Body1, Button, Caption1, Card, createTableColumn, DataGrid, DataGridBody,
  DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, MessageBar, MessageBarBody,
  MessageBarTitle, Switch, type TableColumnDefinition,
} from "@fluentui/react-components";
import {
  BoxRegular, LaptopRegular, PersonRegular, WrenchRegular,
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
  label: string; value: string; tone: StatTone;
  icon: React.ComponentType<{ fontSize?: number }>;
}
const ASSET_STATS: readonly AssetStat[] = [
  { label: "전체 자산", value: `${ASSETS.length}대`, tone: "brand", icon: LaptopRegular },
  { label: "배정된 자산", value: `${ASSETS.filter((a) => a.currentHolder).length}대`, tone: "success", icon: PersonRegular },
  { label: "수리 중", value: `${ASSETS.filter((a) => a.status === "수리 중").length}대`, tone: "warning", icon: WrenchRegular },
  { label: "대기 요청", value: `${REQUESTS.filter((r) => r.status === "대기").length}건`, tone: "danger", icon: BoxRegular },
];

const TONE_VAR: Record<StatTone, string> = {
  brand: "var(--colorBrandBackground)",
  success: "var(--colorPaletteGreenBackground3)",
  warning: "var(--colorPaletteYellowBackground3)",
  danger: "var(--colorPaletteRedBackground3)",
};

function AssetStatCard({ stat }: { stat: AssetStat }) {
  const Icon = stat.icon;
  const tone = TONE_VAR[stat.tone];
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
    </Card>
  );
}

const CATEGORIES = ["전체", ...new Set(ASSETS.map((a) => a.category))];
const PAGE_SIZE = 3;

export function AssetsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [category, setCategory] = React.useState("전체");
  const [assignedOnly, setAssignedOnly] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const filtered = React.useMemo( => {
    const byCategory = category === "전체" ? ASSETS : ASSETS.filter((a) => a.category === category);
    return assignedOnly ? byCategory.filter((a) => a.currentHolder) : byCategory;
  }, [category, assignedOnly]);
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

      <Switch
        checked={assignedOnly}
        onChange={(e) => { setAssignedOnly(e.target.checked); setPage(0); }}
        label="배정된 자산만"
      />

      <DataGrid items={paged} columns={columns} getRowId={(a) => a.id} style={{ minWidth: "520px" }}>
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

      <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {page + 1} / {pageCount} 쪽 · {filtered.length}건
        </Caption1>
        <Button size="small" disabled={page === 0} onClick={ => setPage((p) => p - 1)}>이전</Button>
        <Button size="small" disabled={page >= pageCount - 1} onClick={ => setPage((p) => p + 1)}>다음</Button>
      </div>
    </div>
  );
}
