import * as React from "react";
import { Search } from "lucide-react";
import { DEALS, STAGES } from "../data";

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

export function PipelineScreen {
  const [query, setQuery] = React.useState("");
  const [stageFilter, setStageFilter] = React.useState<typeof STAGES[number] | "전체">("전체");

  const byOwner = new Map<string, { count: number; amount: number }>;
  for (const d of DEALS) {
    const cur = byOwner.get(d.owner) ?? { count: 0, amount: 0 };
    cur.count += 1;
    cur.amount += d.amount;
    byOwner.set(d.owner, cur);
  }

  const filtered = DEALS.filter(
    (d) =>
      (stageFilter === "전체" || d.stage === stageFilter)
      && (query.trim === "" || d.account.includes(query) || d.id.includes(query) || d.owner.includes(query)),
  );

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      {/* 검색 필드와 단계 칩 토글 필터 */}
      <div className="slds-grid slds-wrap" style={{ gap: "0.75rem", alignItems: "center" }}>
        <div className="slds-form-element" style={{ maxWidth: "16rem" }}>
          <div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
            <Search className="slds-input__icon slds-input__icon_left" size={14} aria-hidden />
            <input
              type="text" className="slds-input" placeholder="거래처·ID·담당자 검색"
              value={query} onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="slds-grid slds-wrap" style={{ gap: "0.5rem" }}>
          <button
            type="button"
            className={"slds-badge " + (stageFilter === "전체" ? "slds-theme_default" : "slds-badge_lightest")}
            style={{ border: 0, cursor: "pointer" }}
            onClick={ => setStageFilter("전체")}
          >
            전체 {DEALS.length}
          </button>
          {STAGES.map((stage) => (
            <button
              key={stage}
              type="button"
              className={"slds-badge " + (stageFilter === stage ? "slds-theme_success" : "slds-badge_lightest")}
              style={{ border: 0, cursor: "pointer" }}
              onClick={ => setStageFilter(stage)}
            >
              {stage} {DEALS.filter((d) => d.stage === stage).length}
            </button>
          ))}
        </div>
      </div>

      {/* 담당자별 요약 */}
      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        {[...byOwner.entries].map(([owner, s]) => (
          <div key={owner} className="slds-box slds-theme_default" style={{ flex: "1 1 10rem", minWidth: "10rem" }}>
            <p className="slds-text-body_small slds-text-color_weak">{owner}</p>
            <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{won(s.amount)}</p>
            <p className="slds-text-body_small slds-text-color_weak">{s.count}건 담당</p>
          </div>
        ))}
      </div>

      {/* 딜 목록 표. 검색과 단계 필터 반영 */}
      <div className="slds-box slds-theme_default" style={{ padding: 0, overflow: "hidden" }}>
        <p className="slds-text-body_small slds-text-color_weak" style={{ padding: "0.625rem 0.75rem 0" }}>
          {filtered.length} / {DEALS.length}건 표시
        </p>
        <table className="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
          <thead>
            <tr className="slds-line-height_reset">
              <th scope="col">Opportunity ID</th>
              <th scope="col">거래처</th>
              <th scope="col">담당자</th>
              <th scope="col">단계</th>
              <th scope="col">금액</th>
              <th scope="col">마감일</th>
              <th scope="col">확률</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <th scope="row"><a href="#" onClick={(e) => e.preventDefault}>{d.account}</a></th>
                <td>{d.owner}</td>
                <td><span className="slds-badge">{d.stage}</span></td>
                <td>{won(d.amount)}</td>
                <td>{d.closeDate}</td>
                <td>
                  <div className="slds-progress-bar" style={{ width: "4rem" }}>
                    <span className="slds-progress-bar__value" style={{ width: `${d.probability}%` }}>
                      <span className="slds-assistive-text">진행률 {d.probability}%</span>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
