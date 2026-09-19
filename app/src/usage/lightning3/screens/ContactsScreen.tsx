import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ACCOUNTS, CONTACTS, TIER_SHARE } from "../data";

const DONUT_COLORS = [
  "var(--component-chart-series-1)",
  "var(--component-chart-series-3)",
  "var(--component-chart-series-5)",
];

export function ContactsScreen {
  const accountName = (id: string) => ACCOUNTS.find((a) => a.id === id)?.name ?? id;

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        <div className="slds-box slds-theme_default" style={{ flex: "1 1 9rem" }}>
          <p className="slds-text-body_small slds-text-color_weak">전체 연락처</p>
          <p className="slds-text-heading_large" style={{ fontWeight: 600 }}>{CONTACTS.length}명</p>
        </div>
        <div className="slds-box slds-theme_default" style={{ flex: "2 1 16rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>거래처 등급 비중</p>
          <div style={{ height: "6rem" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={TIER_SHARE} dataKey="value" nameKey="name" innerRadius="50%" outerRadius="85%" paddingAngle={2}>
                  {TIER_SHARE.map((_, i) => (
                    <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="slds-box slds-theme_default" style={{ padding: 0, overflow: "hidden" }}>
        <table className="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
          <thead>
            <tr className="slds-line-height_reset">
              <th scope="col">이름</th>
              <th scope="col">직함</th>
              <th scope="col">거래처</th>
              <th scope="col">이메일</th>
              <th scope="col">최근 활동</th>
            </tr>
          </thead>
          <tbody>
            {CONTACTS.map((c) => (
              <tr key={c.id}>
                <th scope="row">
                  <span className="slds-avatar slds-avatar_circle slds-avatar_x-small" style={{ marginRight: "0.375rem" }}>
                    <img alt={c.name} src="/assets/images/avatar2.jpg" title={c.name} />
                  </span>
                  {c.name}
                </th>
                <td>{c.title}</td>
                <td><a href="#" onClick={(e) => e.preventDefault}>{accountName(c.accountId)}</a></td>
                <td>{c.email}</td>
                <td>{c.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
