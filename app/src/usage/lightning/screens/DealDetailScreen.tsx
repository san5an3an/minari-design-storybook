import * as React from "react";
import { Check } from "lucide-react";
import { DEALS, FEATURED_DEAL, STAGES } from "../data";

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

const ACTIVITIES: { time: string; title: string; who: string }[] = [
  { time: "09-16", title: "제안서 발송", who: "김서연" },
  { time: "09-11", title: "예산 담당자 미팅 확정", who: "김서연" },
  { time: "09-04", title: "1차 데모 진행", who: "박도윤" },
  { time: "08-28", title: "요구사항 인터뷰", who: "김서연" },
];

type TabKey = "detail" | "related" | "activity";
const TABS: { key: TabKey; label: string }[] = [
  { key: "detail", label: "세부" },
  { key: "related", label: "관련 딜" },
  { key: "activity", label: "활동" },
];

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="slds-box slds-theme_default">
      <p className="slds-text-body_small slds-text-color_weak">{label}</p>
      <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{value}</p>
    </div>
  );
}

export function DealDetailScreen {
  const [tab, setTab] = React.useState<TabKey>("detail");
  const currentStageIndex = STAGES.indexOf(FEATURED_DEAL.stage);
  const relatedDeals = DEALS.filter((d) => d.owner === FEATURED_DEAL.owner && d.id !== FEATURED_DEAL.id);

  return (
    <div className="slds-grid slds-grid_vertical slds-grid_vertical-stretch" style={{ gap: "1rem" }}>
      {/* 루트 wrapper에 align-items: stretch 적용 */}
      <div className="slds-grid slds-wrap slds-grid_align-spread" style={{ alignItems: "center" }}>
        <div>
          <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{FEATURED_DEAL.account}</p>
          <p className="slds-text-body_small slds-text-color_weak">{FEATURED_DEAL.id} · 담당 {FEATURED_DEAL.owner}</p>
        </div>
        <button className="slds-button slds-button_brand">딜 편집</button>
      </div>

      {/* 하이라이트 2, 4열만 지정. flex면 670px에서 3+1로 넘칠 수 있음 */}
      <div className="lds1-stats">
        <StatTile label="금액" value={won(FEATURED_DEAL.amount)} />
        <StatTile label="마감 예정일" value={FEATURED_DEAL.closeDate} />
        <StatTile label="확률" value={`${FEATURED_DEAL.probability}%`} />
        <StatTile label="담당자" value={FEATURED_DEAL.owner} />
      </div>

      <ul className="slds-grid slds-wrap" style={{ gap: "0.375rem", listStyle: "none" }} role="list" aria-label="딜 단계 진행">
        {STAGES.map((stage, i) => {
          const state = i < currentStageIndex ? "done" : i === currentStageIndex ? "current" : "todo";
          return (
            <li key={stage}>
              <span
                className={"slds-pill slds-pill_bare " + (state === "current" ? "slds-theme_success" : state === "done" ? "slds-theme_shade" : "")}
                style={state === "todo" ? { opacity: 0.55 } : undefined}
                aria-current={state === "current" ? "step" : undefined}
              >
                <span className="slds-pill__label" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                  {state === "done" ? <Check size={12} aria-hidden /> : null}
                  {stage}
                </span>
              </span>
            </li>
          );
        })}
      </ul>

      {/* 탭: 세부, 관련 딜, 활동 */}
      <div className="slds-tabs_default">
        <ul className="slds-tabs_default__nav" role="tablist">
          {TABS.map((t) => (
            <li key={t.key} className={"slds-tabs_default__item" + (t.key === tab ? " slds-is-active" : "")} title={t.label} role="presentation">
              <a className="slds-tabs_default__link" href="#" role="tab" onClick={(e) => { e.preventDefault; setTab(t.key); }}>
                {t.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="slds-tabs_default__content" role="tabpanel">
          {tab === "detail" ? (
            <div className="slds-box slds-theme_default">
              <dl className="slds-list_horizontal slds-wrap">
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>거래처</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_DEAL.account}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>Opportunity ID</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_DEAL.id}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>현재 단계</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_DEAL.stage}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>최근 업데이트</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{ACTIVITIES[0].title} · {ACTIVITIES[0].time}</dd>
              </dl>
            </div>
          ) : null}

          {tab === "related" ? (
            relatedDeals.length === 0 ? (
              <p className="slds-text-body_small slds-text-color_weak">{FEATURED_DEAL.owner}님이 담당하는 다른 딜이 없어요.</p>
            ) : (
              <div className="slds-box slds-theme_default" style={{ padding: 0, overflow: "hidden" }}>
                <div className="slds-scrollable_x">
                  <table className="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped" style={{ width: "100%" }}>
                    <thead>
                      <tr className="slds-line-height_reset">
                        <th scope="col">Opportunity</th>
                        <th scope="col">단계</th>
                        <th scope="col">금액</th>
                        <th scope="col">마감일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {relatedDeals.map((d) => (
                        <tr key={d.id}>
                          <th scope="row">{d.account}</th>
                          <td><span className="slds-badge">{d.stage}</span></td>
                          <td>{won(d.amount)}</td>
                          <td>{d.closeDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : null}

          {tab === "activity" ? (
            <div className="slds-box slds-theme_default">
              <ul style={{ listStyle: "none" }}>
                {ACTIVITIES.map((a) => (
                  <li
                    key={a.time + a.title}
                    className="slds-media slds-media_center"
                    style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}
                  >
                    <div className="slds-media__figure">
                      <span
                        className="slds-avatar slds-avatar_circle slds-avatar_small"
                        style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}
                      >
                        <abbr className="slds-avatar__initials" title={a.who}>{a.who[0]}</abbr>
                      </span>
                    </div>
                    <div className="slds-media__body">
                      <p className="slds-text-body_regular">{a.title}</p>
                      <p className="slds-text-body_small slds-text-color_weak">{a.who} · {a.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
