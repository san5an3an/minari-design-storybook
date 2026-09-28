import * as React from "react";
import { Check } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ARR_TREND, CONTACTS, FEATURED_ACCOUNT, type Account } from "../data";

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

const TIER_ORDER: Account["tier"][] = ["Startup", "Growth", "Enterprise"];

const ACTIVITIES: { time: string; title: string }[] = [
  { time: "09-16", title: "분기 정기 점검 콜" },
  { time: "09-09", title: "갱신 계약서 초안 발송" },
  { time: "08-27", title: "신규 기능 온보딩 세션" },
];

type TabKey = "detail" | "contacts" | "activity";
const TABS: { key: TabKey; label: string }[] = [
  { key: "detail", label: "세부" },
  { key: "contacts", label: "연락처" },
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

export function AccountDetailScreen {
  const [tab, setTab] = React.useState<TabKey>("detail");
  const contacts = CONTACTS.filter((c) => c.accountId === FEATURED_ACCOUNT.id);
  const currentTierIndex = TIER_ORDER.indexOf(FEATURED_ACCOUNT.tier);

  return (
    <div className="slds-grid slds-grid_vertical slds-grid_vertical-stretch" style={{ gap: "1rem" }}>
      {/* 루트 wrapper에 align-items: stretch 적용 */}
      <div className="slds-grid slds-wrap slds-grid_align-spread" style={{ alignItems: "center" }}>
        <div>
          <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{FEATURED_ACCOUNT.name}</p>
          <p className="slds-text-body_small slds-text-color_weak">{FEATURED_ACCOUNT.industry} · {FEATURED_ACCOUNT.tier} · 담당 {FEATURED_ACCOUNT.owner}</p>
        </div>
        <button className="slds-button slds-button_brand">활동 기록</button>
      </div>

      {/* 하이라이트 2, 4열만 지정 */}
      <div className="lds3-stats">
        <StatTile label="ARR" value={won(FEATURED_ACCOUNT.arr)} />
        <StatTile label="헬스 스코어" value={`${FEATURED_ACCOUNT.healthScore}점`} />
        <StatTile label="산업" value={FEATURED_ACCOUNT.industry} />
        <StatTile label="등급" value={FEATURED_ACCOUNT.tier} />
      </div>

      {/* Path 대체, 등급을 성장 단계로 표시 */}
      <ul className="slds-grid slds-wrap" style={{ gap: "0.375rem", listStyle: "none" }} role="list" aria-label="거래처 성장 단계">
        {TIER_ORDER.map((tier, i) => {
          const state = i < currentTierIndex ? "done" : i === currentTierIndex ? "current" : "todo";
          return (
            <li key={tier}>
              <span
                className={"slds-pill slds-pill_bare " + (state === "current" ? "slds-theme_success" : state === "done" ? "slds-theme_shade" : "")}
                style={state === "todo" ? { opacity: 0.55 } : undefined}
                aria-current={state === "current" ? "step" : undefined}
              >
                <span className="slds-pill__label" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                  {state === "done" ? <Check size={12} aria-hidden /> : null}
                  {tier}
                </span>
              </span>
            </li>
          );
        })}
      </ul>

      {/* 탭: 세부, 연락처, 활동 */}
      <div className="slds-tabs_default">
        <ul className="slds-tabs_default__nav" role="tablist">
          {TABS.map((t) => (
            <li key={t.key} className={"slds-tabs_default__item" + (t.key === tab ? " slds-is-active" : "")} title={t.label} role="presentation">
              <a className="slds-tabs_default__link" href="#" role="tab" onClick={(e) => { e.preventDefault; setTab(t.key); }}>
                {t.label}{t.key === "contacts" ? ` (${contacts.length})` : ""}
              </a>
            </li>
          ))}
        </ul>

        <div className="slds-tabs_default__content" role="tabpanel">
          {tab === "detail" ? (
            <div className="slds-box slds-theme_default">
              <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.75rem" }}>ARR 추이(백만원)</p>
              <div style={{ height: "10rem" }}>
                <ResponsiveContainer>
                  <LineChart data={ARR_TREND}>
                    {/* tick={{style:{fontSize}}} 사용. SVG 속성이라 명시도가 0임 */}
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ style: { fontSize: 11 } }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ style: { fontSize: 11 } }} width={28} />
                    <Tooltip />
                    {/* 폭 확정 후 Line 렌더링. path 길이로 애니메이션을 계산하는 구조임 */}
                    <Line type="monotone" dataKey="arr" stroke="var(--component-chart-series-2)" strokeWidth={2} dot isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : null}

          {tab === "contacts" ? (
            contacts.length === 0 ? (
              <p className="slds-text-body_small slds-text-color_weak">이 거래처에 연결된 연락처가 없어요.</p>
            ) : (
              <div className="slds-box slds-theme_default">
                {contacts.map((c) => (
                  <div key={c.id} className="slds-grid" style={{ gap: "0.5rem", alignItems: "center", padding: "0.375rem 0" }}>
                    {/* 깨진 이미지 대신 이니셜 표시 */}
                    <span
                      className="slds-avatar slds-avatar_circle slds-avatar_x-small"
                      style={{ background: "var(--semantic-bg-brand-subtle)", color: "var(--semantic-fg-brand-default)" }}
                    >
                      <abbr className="slds-avatar__initials" title={c.name}>{c.name[0]}</abbr>
                    </span>
                    <div>
                      <p className="slds-text-body_regular">{c.name}</p>
                      <p className="slds-text-body_small slds-text-color_weak">{c.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : null}

          {tab === "activity" ? (
            <div className="slds-box slds-theme_default">
              <ul>
                {ACTIVITIES.map((a) => (
                  <li key={a.time} className="slds-grid slds-grid_align-spread" style={{ padding: "0.375rem 0", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}>
                    <span className="slds-text-body_regular">{a.title}</span>
                    <span className="slds-text-body_small slds-text-color_weak">{a.time}</span>
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
