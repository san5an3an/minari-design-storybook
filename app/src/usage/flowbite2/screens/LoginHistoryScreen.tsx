import * as React from "react";
import { Badge, Card, Checkbox, Pagination, Radio, Select } from "flowbite-react";
import { LOGIN_HISTORY, type LoginEvent } from "../data";

const RESULT_COLOR: Record<LoginEvent["result"], string> = {
  성공: "success",
  실패: "failure",
};

const DAYS = ["월", "화", "수", "목", "금", "토", "일"] as const;

function LoginStats {
  const success = LOGIN_HISTORY.filter((e) => e.result === "성공").length;
  const failure = LOGIN_HISTORY.filter((e) => e.result === "실패").length;
  const suspicious = LOGIN_HISTORY.filter((e) => e.location.includes("VPN")).length;
  const items = [
    { label: "전체 시도", value: `${LOGIN_HISTORY.length}건` },
    { label: "성공", value: `${success}건` },
    { label: "실패", value: `${failure}건` },
    { label: "의심 위치", value: `${suspicious}건` },
  ];
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))" }}>
      {items.map((it) => (
        <div key={it.label} style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "10px 12px" }}>
          <div style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{it.label}</div>
          <div style={{ fontSize: "16px", fontWeight: 600 }}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}

// 요일별 로그인 시도 미니 막대그래프
function WeekdayBarChart {
  const counts = DAYS.map((d) => LOGIN_HISTORY.filter((e) => e.dayLabel === d).length);
  const max = Math.max(...counts, 1);
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-600)" }}>요일별 로그인 시도</span>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "56px", marginTop: "8px" }}>
        {DAYS.map((d, i) => (
          <div key={d} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flex: 1 }}>
            <span style={{ fontSize: "11px", color: "var(--color-gray-500)" }}>{counts[i]}</span>
            <div style={{ width: "100%", height: `${Math.max((counts[i] / max) * 40, 4)}px`, background: "var(--color-primary-400)", borderRadius: "3px" }} />
            <span style={{ fontSize: "10px", color: "var(--color-gray-500)" }}>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 성공/실패 비중 표시. WeekdayBarChart 막대와 다른 도넛 차트로 2종류 충족
function ResultDonut {
  const success = LOGIN_HISTORY.filter((e) => e.result === "성공").length;
  const failure = LOGIN_HISTORY.length - success;
  const slices = [
    { label: "성공", count: success, color: "var(--color-green-500)" },
    { label: "실패", count: failure, color: "var(--color-red-500)" },
  ];
  const total = LOGIN_HISTORY.length || 1;
  const r = 26;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px", flex: 1, minWidth: 0 }}>
      <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-gray-600)" }}>로그인 결과 비중</span>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}>
        <svg width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="로그인 결과 비중 도넛 차트">
          <circle cx="30" cy="30" r={r} fill="none" stroke="var(--color-gray-100)" strokeWidth="8" />
          {slices.map((s) => {
            const frac = s.count / total;
            const dash = frac * circumference;
            const seg = (
              <circle
                key={s.label}
                cx="30"
                cy="30"
                r={r}
                fill="none"
                stroke={s.color}
                strokeWidth="8"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 30 30)"
              >
                <title>{`${s.label} ${s.count}건`}</title>
              </circle>
            );
            offset += dash;
            return seg;
          })}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {slices.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px" }}>
              <span aria-hidden style={{ width: "7px", height: "7px", borderRadius: "50%", background: s.color, flexShrink: 0 }} />
              <span style={{ color: "var(--color-gray-600)" }}>{s.label}</span>
              <span style={{ fontWeight: 600 }}>{s.count}건 ({Math.round((s.count / total) * 100)}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const PAGE_SIZE = 4;

export function LoginHistoryScreen {
  const [resultFilter, setResultFilter] = React.useState<LoginEvent["result"] | "전체">("전체");
  const [suspiciousOnly, setSuspiciousOnly] = React.useState(false);
  const [period, setPeriod] = React.useState<"전체" | "최근3일">("전체");
  const [page, setPage] = React.useState(1);

  const OLDER_THAN_3_DAYS = ["4일 전", "5일 전"];
  const filtered = LOGIN_HISTORY.filter((e) => {
    if (suspiciousOnly && !e.location.includes("VPN")) return false;
    if (resultFilter !== "전체" && e.result !== resultFilter) return false;
    if (period === "최근3일" && OLDER_THAN_3_DAYS.includes(e.timeLabel)) return false;
    return true;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  React.useEffect( => { setPage(1); }, [resultFilter, suspiciousOnly, period]);

  return (
    <div className="flex flex-col gap-4">
      <LoginStats />
      <div className="flex flex-col gap-3 md:flex-row">
        <WeekdayBarChart />
        <ResultDonut />
      </div>

      <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
        <div className="flex flex-wrap items-center gap-3">
          <Select value={resultFilter} onChange={(e) => setResultFilter(e.target.value as LoginEvent["result"] | "전체")} sizing="sm" className="max-w-[120px]">
            <option value="전체">결과 전체</option>
            <option value="성공">성공만</option>
            <option value="실패">실패만</option>
          </Select>
          <fieldset className="flex items-center gap-3">
            <legend className="sr-only">기간</legend>
            {(["전체", "최근3일"] as const).map((p) => (
              <label key={p} className="flex items-center gap-1 text-sm">
                <Radio name="period" checked={period === p} onChange={ => setPeriod(p)} />
                {p === "전체" ? "전체 기간" : "최근 3일"}
              </label>
            ))}
          </fieldset>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox checked={suspiciousOnly} onChange={(e) => setSuspiciousOnly(e.target.checked)} />
            의심 위치만 보기
          </label>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {rows.map((e) => (
          <Card key={e.id}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
                <span style={{ fontWeight: 600 }}>{e.user}</span>
                <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{e.device} · {e.location} · {e.timeLabel}</span>
              </div>
              <Badge color={RESULT_COLOR[e.result]}>{e.result}</Badge>
            </div>
          </Card>
        ))}
        {rows.length === 0 && <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>조건에 맞는 로그인 기록이 없어요.</span>}
      </div>

      {/* 긴 목록에 Pagination 적용 */}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} showIcons />
    </div>
  );
}
