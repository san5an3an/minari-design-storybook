import * as React from "react";
import { Dropdown, OverflowMenu, OverflowMenuItem, Search, Tag, Tile } from "@carbon/react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SUPPLIERS } from "../data";

// Tile 목록에 검색 Search, 카테고리 필터, 통계카드, 리드타임 차트 추가

export function SuppliersScreen {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("전체");
  const categories = ["전체", ...new Set(SUPPLIERS.map((s) => s.category))];
  const rows = SUPPLIERS.filter(
    (s) => (category === "전체" || s.category === category) && (query === "" || s.name.includes(query)),
  );
  const avgRating = SUPPLIERS.reduce((sum, s) => sum + s.rating, 0) / SUPPLIERS.length;
  const avgLeadTime = SUPPLIERS.reduce((sum, s) => sum + s.leadTimeDays, 0) / SUPPLIERS.length;
  const leadTimeData = SUPPLIERS.map((s) => ({ name: s.name, value: s.leadTimeDays }));

  return (
    <div className="flex flex-col gap-4">
      {/* 통계카드로 여백 채우기 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>거래 업체</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{SUPPLIERS.length}곳</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>평균 평점</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>★ {avgRating.toFixed(1)}</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>평균 리드타임</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{avgLeadTime.toFixed(0)}일</div></Tile>
      </div>

      <div className="flex items-end gap-4" style={{ flexWrap: "wrap" }}>
        <Search
          id="supplier-search" labelText="공급업체 검색" placeholder="업체명으로 찾기"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <Dropdown
          id="supplier-category" titleText="카테고리" label={category}
          items={categories} selectedItem={category}
          onChange={(e: { selectedItem: string }) => setCategory(e.selectedItem)}
        />
      </div>

    <div className="flex flex-col gap-2">
      {rows.map((s) => (
        <Tile key={s.name}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span style={{ fontWeight: 600 }}>{s.name}</span>
              <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>{s.category} · 리드타임 {s.leadTimeDays}일</span>
            </div>
            <div className="flex items-center gap-2">
              {s.activeOrders > 0 ? (
                <Tag size="sm" type="blue">진행 {s.activeOrders}건</Tag>
              ) : null}
              <span style={{ fontWeight: 600 }}>★ {s.rating.toFixed(1)}</span>
              {/* 업체 행 메뉴 */}
              <OverflowMenu size="sm" flipped aria-label={`${s.name} 메뉴`}>
                <OverflowMenuItem itemText="발주 생성" />
                <OverflowMenuItem itemText="연락처 보기" />
              </OverflowMenu>
            </div>
          </div>
        </Tile>
      ))}
    </div>

      {/* 리드타임 비교. 레이아웃 여백 채우기 */}
      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>업체별 리드타임(일)</div>
        <div style={{ inlineSize: "100%", blockSize: 120 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leadTimeData} layout="vertical" margin={{ left: 8 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={80} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="var(--component-chart-series-2)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Tile>
    </div>
  );
}
