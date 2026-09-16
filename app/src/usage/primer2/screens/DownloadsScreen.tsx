import { DOWNLOAD_STATS } from "../data";

export function DownloadsScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {DOWNLOAD_STATS.map((s) => (
        <div key={s.packageName} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 4px", borderBottom: "1px solid var(--borderColor-muted)" }}>
          <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{s.packageName}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px" }}>{s.weeklyDownloads.toLocaleString("ko-KR")}회/주</span>
            <span style={{ fontSize: "13px", color: s.trendPercent >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
              {s.trendPercent >= 0 ? "▲" : "▼"} {Math.abs(s.trendPercent)}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
