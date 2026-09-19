import { FEATURED_REQUEST } from "../data";

const won = (n: number | null) => (n == null ? "—" : `${n.toLocaleString}원`);

const COMMENTS: { who: string; when: string; text: string }[] = [
  { who: "박도윤 (매니저)", when: "09-16 14:20", text: "고객사 규모를 고려해 20%까지는 승인 가능할 것 같습니다." },
  { who: "김서연 (요청자)", when: "09-15 09:05", text: "9월 말 갱신 계약 조건으로 할인 요청드립니다." },
];

export function RequestDetailScreen {
  const steps = Array.from({ length: FEATURED_REQUEST.totalSteps }, (_, i) => i + 1);

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      <div className="slds-grid slds-wrap slds-grid_align-spread" style={{ alignItems: "center" }}>
        <div>
          <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{FEATURED_REQUEST.type}</p>
          <p className="slds-text-body_small slds-text-color_weak">{FEATURED_REQUEST.id} · {FEATURED_REQUEST.requester} 요청 · {won(FEATURED_REQUEST.amount)}</p>
        </div>
        <div className="slds-grid" style={{ gap: "0.5rem" }}>
          <button className="slds-button slds-button_neutral">반려</button>
          <button className="slds-button slds-button_brand">승인</button>
        </div>
      </div>

      <div className="slds-box slds-theme_default">
        <div className="slds-progress">
          <ol className="slds-progress__list">
            {steps.map((step) => (
              <li
                key={step}
                className={
                  "slds-progress__item " +
                  (step < FEATURED_REQUEST.step ? "slds-is-completed" : step === FEATURED_REQUEST.step ? "slds-is-active" : "")
                }
              >
                {step < FEATURED_REQUEST.step ? (
                  <div className="slds-progress__marker slds-progress__marker_icon" title={`단계 ${step} - 완료`}>
                    <svg className="slds-icon slds-icon_xx-small" aria-hidden="true">
                      <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#success" />
                    </svg>
                    <span className="slds-assistive-text">단계 {step} - 완료</span>
                  </div>
                ) : (
                  <div className="slds-progress__marker" title={`단계 ${step}`}>
                    <span className="slds-assistive-text">단계 {step}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
        <p className="slds-text-body_small slds-text-color_weak" style={{ marginTop: "0.75rem" }}>
          {FEATURED_REQUEST.step}/{FEATURED_REQUEST.totalSteps}단계 진행 중 · 마감 {FEATURED_REQUEST.dueDate}
        </p>
      </div>

      <div className="slds-box slds-theme_default">
        <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>승인자 코멘트</p>
        <ul className="slds-feed">
          {COMMENTS.map((c) => (
            <li key={c.who + c.when} style={{ display: "flex", gap: "0.625rem", padding: "0.5rem 0", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}>
              <span className="slds-avatar slds-avatar_circle slds-avatar_small" style={{ flexShrink: 0 }}>
                <img alt={c.who} src="/assets/images/avatar2.jpg" title={c.who} />
              </span>
              <div>
                <p className="slds-text-body_regular" style={{ fontWeight: 600 }}>{c.who} <span className="slds-text-body_small slds-text-color_weak">{c.when}</span></p>
                <p className="slds-text-body_regular">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
