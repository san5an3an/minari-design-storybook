import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ARR_TREND, CONTACTS, FEATURED_ACCOUNT } from "../data";

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

const ACTIVITIES: { time: string; title: string }[] = [
  { time: "09-16", title: "분기 정기 점검 콜" },
  { time: "09-09", title: "갱신 계약서 초안 발송" },
  { time: "08-27", title: "신규 기능 온보딩 세션" },
];

export function AccountDetailScreen {
  const contacts = CONTACTS.filter((c) => c.accountId === FEATURED_ACCOUNT.id);

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      <div className="slds-grid slds-wrap slds-grid_align-spread" style={{ alignItems: "center" }}>
        <div>
          <p className="slds-text-heading_medium" style={{ fontWeight: 600 }}>{FEATURED_ACCOUNT.name}</p>
          <p className="slds-text-body_small slds-text-color_weak">{FEATURED_ACCOUNT.industry} · {FEATURED_ACCOUNT.tier} · 담당 {FEATURED_ACCOUNT.owner}</p>
        </div>
        <button className="slds-button slds-button_brand">활동 기록</button>
      </div>

      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        <article className="slds-tile slds-box slds-theme_default" style={{ flex: "1 1 14rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>핵심 정보</p>
          <dl className="slds-list_horizontal slds-wrap">
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "45%" }}>ARR</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "55%" }}>{won(FEATURED_ACCOUNT.arr)}</dd>
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "45%" }}>헬스 스코어</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "55%" }}>{FEATURED_ACCOUNT.healthScore}점</dd>
            <dt className="slds-item_label slds-text-color_weak slds-truncate" style={{ width: "45%" }}>산업</dt>
            <dd className="slds-item_detail slds-truncate" style={{ width: "55%" }}>{FEATURED_ACCOUNT.industry}</dd>
          </dl>
        </article>

        <div className="slds-box slds-theme_default" style={{ flex: "2 1 20rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.75rem" }}>ARR 추이(백만원)</p>
          <div style={{ height: "9rem" }}>
            <ResponsiveContainer>
              <LineChart data={ARR_TREND}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} width={28} />
                <Tooltip />
                {/* 폭 확정 후 Line 렌더링. path 길이로 애니메이션을 계산하는 구조임 */}
                <Line type="monotone" dataKey="arr" stroke="var(--component-chart-series-2)" strokeWidth={2} dot isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        <div className="slds-box slds-theme_default" style={{ flex: "1 1 14rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>연락처</p>
          {contacts.map((c) => (
            <div key={c.id} className="slds-grid" style={{ gap: "0.5rem", alignItems: "center", padding: "0.375rem 0" }}>
              <span className="slds-avatar slds-avatar_circle slds-avatar_x-small">
                <img alt={c.name} src="/assets/images/avatar1.jpg" title={c.name} />
              </span>
              <div>
                <p className="slds-text-body_regular">{c.name}</p>
                <p className="slds-text-body_small slds-text-color_weak">{c.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slds-box slds-theme_default" style={{ flex: "2 1 18rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>최근 활동</p>
          <ul>
            {ACTIVITIES.map((a) => (
              <li key={a.time} className="slds-grid slds-grid_align-spread" style={{ padding: "0.375rem 0", borderBottom: "1px solid var(--semantic-border-neutral-subtle)" }}>
                <span className="slds-text-body_regular">{a.title}</span>
                <span className="slds-text-body_small slds-text-color_weak">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
