import { ACCOUNTS } from "../data";

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

const TIER_BADGE: Record<string, string> = {
  Enterprise: "slds-theme_success",
  Growth: "slds-theme_warning",
  Startup: "slds-theme_default",
};

export function AccountsScreen {
  const totalArr = ACCOUNTS.reduce((sum, a) => sum + a.arr, 0);
  const avgHealth = Math.round(ACCOUNTS.reduce((sum, a) => sum + a.healthScore, 0) / ACCOUNTS.length);
  const atRisk = ACCOUNTS.filter((a) => a.healthScore < 65).length;
  const enterpriseCount = ACCOUNTS.filter((a) => a.tier === "Enterprise").length;

  return (
    <div className="slds-grid slds-grid_vertical slds-grid_vertical-stretch" style={{ gap: "1rem" }}>
      {/* slds-wrap을 .slds-grid_vertical-stretch로 변경. 쏠림 막기 */}
      {/* 통계카드 2 또는 4열만 사용. flex면 카드 하나가 다음 줄에 홀로 남음 */}
      <div className="lds3-stats">
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">총 ARR</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{won(totalArr)}</p>
        </div>
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">거래처 수</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{ACCOUNTS.length}곳</p>
        </div>
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">평균 헬스 스코어</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{avgHealth}점</p>
        </div>
        <div className="slds-box slds-theme_default">
          <p className="slds-text-body_small slds-text-color_weak">위험 거래처</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{atRisk}곳</p>
        </div>
      </div>

      <p className="slds-text-body_small slds-text-color_weak">Enterprise {enterpriseCount}곳 포함, 전체 {ACCOUNTS.length}곳</p>

      <div className="slds-grid slds-wrap" style={{ gap: "0.75rem" }}>
        {ACCOUNTS.map((a) => (
          <article key={a.id} className="slds-tile slds-box slds-theme_default slds-hint-parent" style={{ flex: "1 1 14rem", minWidth: "14rem" }}>
            <div className="slds-grid slds-grid_align-spread" style={{ alignItems: "center" }}>
              <h3 className="slds-tile__title slds-truncate">
                <a href="#" onClick={(e) => e.preventDefault}>{a.name}</a>
              </h3>
              <span className={"slds-badge " + TIER_BADGE[a.tier]}>{a.tier}</span>
            </div>
            <div className="slds-tile__detail">
              <dl className="slds-list_horizontal slds-wrap">
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>산업</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{a.industry}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>ARR</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{won(a.arr)}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>담당자</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{a.owner}</dd>
              </dl>
            </div>
            <div className="slds-progress-bar slds-progress-bar_circular" style={{ marginTop: "0.5rem" }}>
              <span className="slds-progress-bar__value" style={{ width: `${a.healthScore}%` }}>
                <span className="slds-assistive-text">헬스 스코어 {a.healthScore}</span>
              </span>
            </div>
            <p className="slds-text-body_small slds-text-color_weak" style={{ marginTop: "0.25rem" }}>헬스 {a.healthScore}점</p>
          </article>
        ))}
      </div>
    </div>
  );
}
