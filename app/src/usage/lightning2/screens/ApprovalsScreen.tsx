import * as React from "react";
import { Search } from "lucide-react";
import { REQUESTS } from "../data";

const won = (n: number | null) => (n == null ? "—" : `${n.toLocaleString}원`);

const STATUS_VARIANT: Record<string, string> = {
  대기: "slds-theme_warning",
  승인: "slds-theme_success",
  반려: "slds-theme_error",
};

export function ApprovalsScreen {
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<"전체" | "대기" | "승인" | "반려">("전체");

  const pending = REQUESTS.filter((r) => r.status === "대기");
  const dueSoon = pending.filter((r) => r.dueDate <= "2026-09-19");
  const approvedCount = REQUESTS.filter((r) => r.status === "승인").length;
  const approvalRate = Math.round((approvedCount / REQUESTS.length) * 100);
  const avgSteps = Math.round((REQUESTS.reduce((s, r) => s + r.totalSteps, 0) / REQUESTS.length) * 10) / 10;

  const filtered = REQUESTS.filter(
    (r) =>
      (statusFilter === "전체" || r.status === statusFilter)
      && (query.trim === "" || r.id.includes(query) || r.requester.includes(query) || r.type.includes(query)),
  );

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      {/* 통계카드 2 또는 4열만 사용. flex면 2x2로 접혀 우측 절반이 빈 채로 남음 */}
      <div className="lds2-stats">
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">대기중</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{pending.length}건</p>
        </div>
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">오늘 마감</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{dueSoon.length}건</p>
        </div>
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">이번 주 승인율</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{approvalRate}%</p>
        </div>
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">평균 단계 수</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{avgSteps}단계</p>
        </div>
      </div>

      <div className="slds-grid slds-wrap" style={{ gap: "0.75rem", alignItems: "center" }}>
        <div className="slds-form-element" style={{ maxWidth: "16rem" }}>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
            <Search className="slds-input__icon slds-input__icon_left" size={14} aria-hidden />
            <input
              type="text" className="slds-input" placeholder="요청 ID·요청자·유형 검색"
              value={query} onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="slds-grid slds-wrap" style={{ gap: "0.5rem" }}>
          <button
            type="button"
            className={"slds-badge " + (statusFilter === "전체" ? "slds-theme_default" : "slds-badge_lightest")}
            style={{ border: 0, cursor: "pointer" }}
            onClick={ => setStatusFilter("전체")}
          >
            전체 {REQUESTS.length}
          </button>
          {(["대기", "승인", "반려"] as const).map((s) => (
            <button
              key={s}
              type="button"
              className={"slds-badge " + (statusFilter === s ? STATUS_VARIANT[s] : "slds-badge_lightest")}
              style={{ border: 0, cursor: "pointer" }}
              onClick={ => setStatusFilter(s)}
            >
              {s} {REQUESTS.filter((r) => r.status === s).length}
            </button>
          ))}
        </div>
      </div>

      <div className="slds-box slds-theme_default" style={{ padding: 0, overflow: "hidden" }}>
        <p className="slds-text-body_small slds-text-color_weak" style={{ padding: "0.625rem 0.75rem 0" }}>
          {filtered.length} / {REQUESTS.length}건 표시
        </p>
        <table className="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
          <thead>
            <tr className="slds-line-height_reset">
              <th scope="col">요청 ID</th>
              <th scope="col">유형</th>
              <th scope="col">요청자</th>
              <th scope="col">금액</th>
              <th scope="col">제출일</th>
              <th scope="col">마감일</th>
              <th scope="col">단계</th>
              <th scope="col">상태</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id}>
                <th scope="row">{r.id}</th>
                <td>{r.type}</td>
                <td>
                  <span
                    className="slds-avatar slds-avatar_circle slds-avatar_x-small"
                    style={{ marginRight: "0.375rem", background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}
                  >
                    <abbr className="slds-avatar__initials" title={r.requester}>{r.requester[0]}</abbr>
                  </span>
                  {r.requester}
                </td>
                <td>{won(r.amount)}</td>
                <td>{r.submitted}</td>
                <td>{r.dueDate}</td>
                <td>{r.step}/{r.totalSteps}</td>
                <td><span className={"slds-badge " + STATUS_VARIANT[r.status]}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
