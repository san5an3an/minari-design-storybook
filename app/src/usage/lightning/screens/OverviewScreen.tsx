import { Check } from "lucide-react";
import {
  Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { DEALS, FEATURED_DEAL, STAGES, STAGE_SHARE, WEEKLY_PIPELINE } from "../data";

const DONUT_COLORS = [
  "var(--component-chart-series-1)",
  "var(--component-chart-series-2)",
  "var(--component-chart-series-3)",
  "var(--component-chart-series-4)",
];

const won = (n: number) => `${Math.round(n / 10000).toLocaleString}만원`;

function StatTile({ label, value, help }: { label: string; value: string; help?: string }) {
  return (
    <div className="slds-box slds-theme_default">
      <p className="slds-text-body_small slds-text-color_weak">{label}</p>
      <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{value}</p>
      {help ? <p className="slds-text-body_small slds-text-color_weak">{help}</p> : null}
    </div>
  );
}

export function OverviewScreen {
  const totalAmount = DEALS.reduce((sum, d) => sum + d.amount, 0);
  const closingThisMonth = DEALS.filter((d) => d.closeDate.startsWith("2026-09")).length;
  const avgDeal = Math.round(totalAmount / DEALS.length);
  const won2 = DEALS.filter((d) => d.stage === "완료").length;
  const winRate = Math.round((won2 / DEALS.length) * 100);
  const currentStageIndex = STAGES.indexOf(FEATURED_DEAL.stage);

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      {/* 히어로 */}
      <div
        className="slds-box"
        style={{
          background: "linear-gradient(135deg, var(--semantic-bg-brand-strong), var(--semantic-bg-brand-default))",
          color: "var(--semantic-fg-on-brand-default)",
          borderRadius: "var(--semantic-radius-container)",
          padding: "1.5rem",
        }}
      >
        <p className="slds-text-heading_medium" style={{ color: "inherit" }}>
          이번 달 파이프라인 {won(totalAmount)}, {closingThisMonth}건이 이번 달 마감 예정이에요
        </p>
        <p className="slds-text-body_regular" style={{ color: "inherit", opacity: 0.85 }}>
          가장 유력한 딜부터 확인해 보세요.
        </p>
      </div>

      {/* 통계카드 2 또는 4열만 사용. flex면 카드 하나가 다음 줄에 홀로 남음 */}
      <div className="lds1-stats">
        <StatTile label="총 파이프라인" value={won(totalAmount)} help={`딜 ${DEALS.length}건`} />
        <StatTile label="이번 달 마감 예정" value={`${closingThisMonth}건`} help="9월 기준" />
        <StatTile label="평균 계약 규모" value={won(avgDeal)} help="딜당 평균" />
        <StatTile label="승률" value={`${winRate}%`} help={`완료 ${won2}건`} />
      </div>

      {/* 단계 칩. Path 대신 대표 딜의 단계 표시 */}
      <div className="slds-box slds-theme_default">
        <p className="slds-text-body_small slds-text-color_weak" style={{ marginBottom: "0.5rem" }}>
          주요 딜, {FEATURED_DEAL.account} ({won(FEATURED_DEAL.amount)})
        </p>
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
      </div>

      {/* 차트 2종 */}
      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        <div className="slds-box slds-theme_default" style={{ flex: "2 1 20rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.75rem" }}>최근 7주 파이프라인 추이(백만원)</p>
          <div style={{ height: "10rem" }}>
            <ResponsiveContainer>
              <LineChart data={WEEKLY_PIPELINE}>
                <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} width={28} />
                <Tooltip />
                {/* isAnimationActive={false} 지정, 도형이 중간에 얼어붙을 수 있음 */}
                <Line type="monotone" dataKey="amount" stroke="var(--component-chart-series-1)" strokeWidth={2} dot isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slds-box slds-theme_default" style={{ flex: "1 1 14rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.75rem" }}>단계별 금액 비중</p>
          <div style={{ height: "10rem" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={STAGE_SHARE} dataKey="value" nameKey="name" innerRadius="55%" outerRadius="85%" paddingAngle={2} isAnimationActive={false}>
                  {STAGE_SHARE.map((_, i) => (
                    <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 넓은 테이블, 딜 목록 */}
      <div className="slds-box slds-theme_default" style={{ padding: 0, overflow: "hidden" }}>
        <table className="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
          <thead>
            <tr className="slds-line-height_reset">
              <th scope="col">Opportunity</th>
              <th scope="col">담당자</th>
              <th scope="col">단계</th>
              <th scope="col">금액</th>
              <th scope="col">마감일</th>
              <th scope="col">확률</th>
            </tr>
          </thead>
          <tbody>
            {DEALS.map((d) => (
              <tr key={d.id}>
                <th scope="row"><a href="#" onClick={(e) => e.preventDefault}>{d.account}</a></th>
                <td>{d.owner}</td>
                <td><span className="slds-badge">{d.stage}</span></td>
                <td>{won(d.amount)}</td>
                <td>{d.closeDate}</td>
                <td>{d.probability}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
