import {
  Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { REQUESTS, STATUS_SHARE, WEEKLY_APPROVALS } from "../data";

const won = (n: number | null) => (n == null ? "—" : `${n.toLocaleString}원`);

const DONUT_COLORS = [
  "var(--component-chart-series-3)",
  "var(--component-chart-series-1)",
  "var(--component-chart-series-4)",
];

export function HistoryScreen {
  const decided = REQUESTS.filter((r) => r.status !== "대기");

  return (
    <div className="slds-grid slds-wrap slds-grid_vertical" style={{ gap: "1rem" }}>
      <div className="slds-grid slds-wrap" style={{ gap: "1rem" }}>
        <div className="slds-box slds-theme_default" style={{ flex: "2 1 20rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.75rem" }}>주간 승인/반려 추이</p>
          <div style={{ height: "10rem" }}>
            <ResponsiveContainer>
              <BarChart data={WEEKLY_APPROVALS}>
                <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} width={24} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="approved" name="승인" fill="var(--component-chart-series-1)" radius={[3, 3, 0, 0]} />
                <Bar dataKey="rejected" name="반려" fill="var(--component-chart-series-4)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slds-box slds-theme_default" style={{ flex: "1 1 14rem" }}>
          <p className="slds-text-body_small" style={{ fontWeight: 600, marginBottom: "0.75rem" }}>상태 비중</p>
          <div style={{ height: "10rem" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={STATUS_SHARE} dataKey="value" nameKey="name" innerRadius="55%" outerRadius="85%" paddingAngle={2}>
                  {STATUS_SHARE.map((_, i) => (
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
              <th scope="col">요청 ID</th>
              <th scope="col">유형</th>
              <th scope="col">요청자</th>
              <th scope="col">금액</th>
              <th scope="col">처리 결과</th>
            </tr>
          </thead>
          <tbody>
            {decided.map((r) => (
              <tr key={r.id}>
                <th scope="row">{r.id}</th>
                <td>{r.type}</td>
                <td>{r.requester}</td>
                <td>{won(r.amount)}</td>
                <td>
                  <span className={"slds-badge " + (r.status === "승인" ? "slds-theme_success" : "slds-theme_error")}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
