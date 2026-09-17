import * as React from "react";
import { Breadcrumb, BreadcrumbItem, Button, Select, SelectItem, Tag, Tile, Toggle } from "@carbon/react";
import { ArrowLeft } from "@carbon/icons-react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { INSPECTIONS, type Inspection } from "../data";

// 검사자 필터 Select와 재검사만 보기 Toggle 추가
const INSPECTORS = [...new Set(INSPECTIONS.map((i) => i.inspector))];

type TagColor = "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray";

const RESULT_TAG: Record<Inspection["result"], TagColor> = {
  합격: "green",
  불합격: "red",
  재검사: "magenta",
};

// 비주얼 업그레이드로 필터 칩, 개수 배지, 통계카드 4개를 목록 위에 추가
const RESULT_FILTERS = ["전체", "합격", "불합격", "재검사"] as const;

function InspectionDetail({ item, onBack }: { item: Inspection; onBack:  => void }) {
  return (
    <div className="flex flex-col gap-4">
      {/* 상세 화면 네비게이션 */}
      <Breadcrumb noTrailingSlash>
        <BreadcrumbItem href="#" onClick={(e: React.MouseEvent) => { e.preventDefault; onBack; }}>
          검사 항목
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>{item.lot}</BreadcrumbItem>
      </Breadcrumb>
      <Button kind="ghost" size="sm" renderIcon={ArrowLeft} onClick={onBack} style={{ alignSelf: "flex-start" }}>
        목록으로
      </Button>
      <Tile>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span style={{ fontWeight: 600 }}>{item.lot}</span>
            <Tag size="sm" type={RESULT_TAG[item.result]}>{item.result}</Tag>
          </div>
          <span>{item.product}</span>
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>
            검사자: {item.inspector} · {item.dateLabel}
          </span>
        </div>
      </Tile>
      <Tile>
        <span style={{ fontWeight: 600, fontSize: "0.8125rem" }}>비고</span>
        <p style={{ marginTop: 4 }}>{item.note}</p>
      </Tile>
    </div>
  );
}

export function InspectionsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [filter, setFilter] = React.useState<(typeof RESULT_FILTERS)[number]>("전체");
  const [inspector, setInspector] = React.useState("전체");
  const [onlyRecheck, setOnlyRecheck] = React.useState(false);
  const selected = INSPECTIONS.find((i) => i.id === selectedId) ?? null;

  if (selected) {
    return <InspectionDetail item={selected} onBack={ => setSelectedId(null)} />;
  }

  const counts = {
    전체: INSPECTIONS.length,
    합격: INSPECTIONS.filter((i) => i.result === "합격").length,
    불합격: INSPECTIONS.filter((i) => i.result === "불합격").length,
    재검사: INSPECTIONS.filter((i) => i.result === "재검사").length,
  } as const;
  const rows = INSPECTIONS.filter(
    (i) =>
      (filter === "전체" || i.result === filter) &&
      (inspector === "전체" || i.inspector === inspector) &&
      (!onlyRecheck || i.result === "재검사"),
  );

  return (
    <div className="flex flex-col gap-4">
      {/* 검사자 Select 필터와 재검사만 보기 Toggle 컨트롤 추가 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
        <Select id="inspector-filter" labelText="검사자" value={inspector} onChange={(e) => setInspector(e.target.value)}>
          <SelectItem value="전체" text="전체" />
          {INSPECTORS.map((n) => <SelectItem key={n} value={n} text={n} />)}
        </Select>
        <Toggle
          id="only-recheck" labelText="재검사만 보기" labelA="꺼짐" labelB="켜짐"
          toggled={onlyRecheck} onToggle={setOnlyRecheck}
        />
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))" }}>
        {(Object.keys(counts) as (typeof RESULT_FILTERS)[number][]).map((k) => (
          <Tile key={k}>
            <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>{k}</div>
            <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{counts[k]}건</div>
          </Tile>
        ))}
      </div>

      {/* 필터 칩 개수 배지 */}
      <div className="flex gap-2">
        {RESULT_FILTERS.map((f) => (
          <Button
            key={f} kind={filter === f ? "primary" : "tertiary"} size="sm"
            onClick={ => setFilter(f)}
          >
            {f} ({counts[f]})
          </Button>
        ))}
      </div>

    <div className="flex flex-col gap-2">
      {rows.map((item) => (
        <Tile
          key={item.id}
          className="cursor-pointer"
          onClick={ => setSelectedId(item.id)}
        >
          <div className="flex items-center gap-3">
            <Tag size="sm" type={RESULT_TAG[item.result]}>{item.result}</Tag>
            <span style={{ fontWeight: 600 }}>{item.lot}</span>
            <span style={{ flex: 1, fontSize: "0.8125rem", opacity: 0.7 }}>{item.product}</span>
            <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{item.dateLabel}</span>
          </div>
        </Tile>
      ))}
    </div>

      {/* 결과 분포, 여백 채우기용 */}
      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>결과 분포</div>
        <div style={{ inlineSize: "100%", blockSize: 100 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={(["합격", "불합격", "재검사"] as const).map((k) => ({ name: k, value: counts[k] }))}
              layout="vertical" margin={{ left: 8 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={56} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Tile>
    </div>
  );
}
