import * as React from "react";
import { Check } from "lucide-react";
import { FEATURED_REQUEST, REQUESTS } from "../data";

const won = (n: number | null) => (n == null ? "—" : `${n.toLocaleString}원`);

const STATUS_VARIANT: Record<string, string> = {
  대기: "slds-theme_warning",
  승인: "slds-theme_success",
  반려: "slds-theme_error",
};

const COMMENTS: { who: string; when: string; text: string }[] = [
  { who: "박도윤 (매니저)", when: "09-16 14:20", text: "고객사 규모를 고려해 20%까지는 승인 가능할 것 같습니다." },
  { who: "김서연 (요청자)", when: "09-15 09:05", text: "9월 말 갱신 계약 조건으로 할인 요청드립니다." },
];

type TabKey = "detail" | "related" | "comments";
const TABS: { key: TabKey; label: string }[] = [
  { key: "detail", label: "세부" },
  { key: "related", label: "관련 요청" },
  { key: "comments", label: "코멘트" },
];

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="slds-box slds-theme_default">
      <p className="slds-text-body_small slds-text-color_weak">{label}</p>
      <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{value}</p>
    </div>
  );
}

export function RequestDetailScreen {
  const [tab, setTab] = React.useState<TabKey>("detail");
  const steps = Array.from({ length: FEATURED_REQUEST.totalSteps }, (_, i) => i + 1);
  const relatedRequests = REQUESTS.filter(
    (r) => r.requester === FEATURED_REQUEST.requester && r.id !== FEATURED_REQUEST.id,
  );

  return (
    <div className="slds-grid slds-grid_vertical slds-grid_vertical-stretch" style={{ gap: "1rem" }}>
      {/* 루트 wrapper에 align-items: stretch 적용 */}
      <div className="slds-grid slds-wrap slds-grid_align-spread" style={{ alignItems: "center" }}>
        <div>
          <div className="slds-grid" style={{ gap: "0.5rem", alignItems: "center" }}>
            <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{FEATURED_REQUEST.type}</p>
            <span className={"slds-badge " + STATUS_VARIANT[FEATURED_REQUEST.status]}>{FEATURED_REQUEST.status}</span>
          </div>
          <p className="slds-text-body_small slds-text-color_weak">{FEATURED_REQUEST.id} · {FEATURED_REQUEST.requester} 요청 · {won(FEATURED_REQUEST.amount)}</p>
        </div>
        <div className="slds-grid" style={{ gap: "0.5rem" }}>
          <button className="slds-button slds-button_neutral">반려</button>
          <button className="slds-button slds-button_brand">승인</button>
        </div>
      </div>

      {/* 하이라이트 2, 4열만 지정 */}
      <div className="lds2-stats">
        <StatTile label="상태" value={FEATURED_REQUEST.status} />
        <StatTile label="진행 단계" value={`${FEATURED_REQUEST.step}/${FEATURED_REQUEST.totalSteps}단계`} />
        <StatTile label="제출일" value={FEATURED_REQUEST.submitted} />
        <StatTile label="마감일" value={FEATURED_REQUEST.dueDate} />
      </div>

      {/* 진행 단계, slds-pill 패턴 사용 */}
      <div className="slds-box slds-theme_default">
        <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>승인 진행 단계</p>
        <ul className="slds-grid slds-wrap" style={{ gap: "0.375rem", listStyle: "none" }} role="list" aria-label="승인 진행 단계">
          {steps.map((step) => {
            const state = step < FEATURED_REQUEST.step ? "done" : step === FEATURED_REQUEST.step ? "current" : "todo";
            return (
              <li key={step}>
                <span
                  className={"slds-pill slds-pill_bare " + (state === "current" ? "slds-theme_success" : state === "done" ? "slds-theme_shade" : "")}
                  style={state === "todo" ? { opacity: 0.55 } : undefined}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <span className="slds-pill__label" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                    {state === "done" ? <Check size={12} aria-hidden /> : null}
                    {step}단계
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
        <p className="slds-text-body_small slds-text-color_weak" style={{ marginTop: "0.75rem" }}>
          {FEATURED_REQUEST.step}/{FEATURED_REQUEST.totalSteps}단계 진행 중 · 마감 {FEATURED_REQUEST.dueDate}
        </p>
      </div>

      {/* 탭: 세부, 관련 요청, 코멘트 */}
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
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>유형</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_REQUEST.type}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>요청자</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_REQUEST.requester}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>금액</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{won(FEATURED_REQUEST.amount)}</dd>
                <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "40%" }}>제출일</dt>
                <dd className="slds-item_detail slds-truncate" style={{ width: "60%" }}>{FEATURED_REQUEST.submitted}</dd>
              </dl>
            </div>
          ) : null}

          {tab === "related" ? (
            relatedRequests.length === 0 ? (
              <p className="slds-text-body_small slds-text-color_weak">{FEATURED_REQUEST.requester}님의 다른 요청이 없어요.</p>
            ) : (
              <div className="slds-box slds-theme_default" style={{ padding: 0, overflow: "hidden" }}>
                <div className="slds-scrollable_x">
                  <table className="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped" style={{ width: "100%" }}>
                    <thead>
                      <tr className="slds-line-height_reset">
                        <th scope="col">요청 ID</th>
                        <th scope="col">유형</th>
                        <th scope="col">금액</th>
                        <th scope="col">상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      {relatedRequests.map((r) => (
                        <tr key={r.id}>
                          <th scope="row">{r.id}</th>
                          <td>{r.type}</td>
                          <td>{won(r.amount)}</td>
                          <td><span className={"slds-badge " + STATUS_VARIANT[r.status]}>{r.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          ) : null}

          {tab === "comments" ? (
            <div className="slds-box slds-theme_default">
              <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>승인자 코멘트</p>
              {/* slds-feed 대신 .slds-media 패턴으로 변경. 아바타는 이니셜로 표시 */}
              <ul style={{ listStyle: "none" }}>
                {COMMENTS.map((c) => (
                  <li
                    key={c.who + c.when}
                    className="slds-media slds-media_center"
                    style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}
                  >
                    <div className="slds-media__figure">
                      <span
                        className="slds-avatar slds-avatar_circle slds-avatar_small"
                        style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}
                      >
                        <abbr className="slds-avatar__initials" title={c.who}>{c.who[0]}</abbr>
                      </span>
                    </div>
                    <div className="slds-media__body">
                      <p className="slds-text-body_regular" style={{ fontWeight: 600 }}>{c.who} <span className="slds-text-body_small slds-text-color_weak">{c.when}</span></p>
                      <p className="slds-text-body_regular">{c.text}</p>
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
