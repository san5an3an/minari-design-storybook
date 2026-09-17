import * as React from "react";
import { Label, Select, TextInput } from "@primer/react";
import { Search } from "lucide-react";
import { DOWNLOAD_STATS, PACKAGES } from "../data";
import type { ScreenProps } from "../screens";

function PackageStats {
  const totalDownloads = PACKAGES.reduce((sum, p) => sum + p.weeklyDownloads, 0);
  const licenses = new Set(PACKAGES.map((p) => p.license)).size;
  const topTrend = Math.max(...DOWNLOAD_STATS.map((d) => d.trendPercent));
  const stats = [
    { label: "전체 패키지", value: String(PACKAGES.length), tone: "var(--fgColor-default)" },
    { label: "총 주간 다운로드", value: totalDownloads.toLocaleString("ko-KR"), tone: "var(--fgColor-accent)" },
    { label: "최고 증감", value: `+${topTrend}%`, tone: "var(--fgColor-success)" },
    { label: "라이선스 종류", value: String(licenses), tone: "var(--fgColor-neutral)" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        marginBottom: "16px",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{ border: "1px solid var(--borderColor-default)", borderRadius: "6px", padding: "12px 14px" }}
        >
          <div style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{s.label}</div>
          <div style={{ fontSize: "22px", fontWeight: 600, color: s.tone }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

type SortKey = "downloads" | "name";

export function PackagesScreen({ onNavigate, onSelect }: ScreenProps) {
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("downloads");

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  const rows = PACKAGES
    .filter((p) => query.trim === "" || p.name.includes(query))
    .sort((a, b) => (sort === "downloads" ? b.weeklyDownloads - a.weeklyDownloads : a.name.localeCompare(b.name)));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PackageStats />
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <TextInput
          leadingVisual={Search}
          placeholder="패키지 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="small"
        />
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          size="small"
          aria-label="정렬"
        >
          <Select.Option value="downloads">다운로드 순</Select.Option>
          <Select.Option value="name">이름 순</Select.Option>
        </Select>
      </div>
      {rows.map((p) => (
        <div
          key={p.id}
          onClick={ => open(p.id)}
          role="button"
          tabIndex={0}
          style={{
            display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 4px",
            borderBottom: "1px solid var(--borderColor-muted)", cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontWeight: 600, color: "var(--fgColor-accent)" }}>{p.name}</span>
              <Label>{p.latestVersion}</Label>
              <Label variant="secondary">{p.license}</Label>
            </div>
            <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{p.description}</span>
          </div>
          <span style={{ fontSize: "12px", color: "var(--fgColor-muted)", whiteSpace: "nowrap" }}>
            주간 {p.weeklyDownloads.toLocaleString("ko-KR")}회
          </span>
        </div>
      ))}
    </div>
  );
}
