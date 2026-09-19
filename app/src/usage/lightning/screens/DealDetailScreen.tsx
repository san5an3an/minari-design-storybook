import { Check } from "lucide-react";
import { FEATURED_DEAL, STAGES } from "../data";

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

const ACTIVITIES: { time: string; title: string; who: string }[] = [
  { time: "09-16", title: "제안서 발송", who: "김서연" },
  { time: "09-11", title: "예산 담당자 미팅 확정", who: "김서연" },
  { time: "09-04", title: "1차 데모 진행", who: "박도윤" },
  { time: "08-28", title: "요구사항 인터뷰", who: "김서연" },
];

export function DealDetailScreen {
  const currentStageIndex = STAGES.indexOf(FEATURED_DEAL.stage);

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      <div className="slds-grid slds-wrap slds-grid_align-spread" style={{ alignItems: "center" }}>
        <div>
          <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{FEATURED_DEAL.account}</p>
          <p className="slds-text-body_small slds-text-color_weak">{FEATURED_DEAL.id} · 담당 {FEATURED_DEAL.owner}</p>
        </div>
        <button className="slds-button slds-button_brand">딜 편집</button>
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

      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        <article className="slds-tile slds-box slds-theme_default" style={{ flex: "1 1 16rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>핵심 정보</p>
          <dl className="slds-list_horizontal slds-wrap">
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>금액</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{won(FEATURED_DEAL.amount)}</dd>
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>마감 예정일</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_DEAL.closeDate}</dd>
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>확률</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_DEAL.probability}%</dd>
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>담당자</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_DEAL.owner}</dd>
          </dl>
        </article>

        <div className="slds-box slds-theme_default" style={{ flex: "2 1 20rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>활동 타임라인</p>
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
      </div>
    </div>
  );
}
