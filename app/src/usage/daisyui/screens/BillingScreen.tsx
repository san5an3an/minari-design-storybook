import * as React from "react";
import { Gauge, Wallet } from "lucide-react";

const INVOICES = [
  { id: "INV-2026-09", amount: "₩49,000", status: "결제 완료" },
  { id: "INV-2026-08", amount: "₩49,000", status: "결제 완료" },
  { id: "INV-2026-07", amount: "₩39,000", status: "환불" },
] as const;

export function BillingScreen {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="d-stats shadow">
        <div className="d-stat">
          <div className="d-stat-figure text-primary">
            <Wallet size={28} aria-hidden />
          </div>
          <div className="d-stat-title">현재 요금제</div>
          <div className="d-stat-value text-primary">Pro</div>
          <div className="d-stat-desc">다음 결제 10월 1일</div>
        </div>
        <div className="d-stat">
          <div className="d-stat-figure text-secondary">
            <Gauge size={28} aria-hidden />
          </div>
          <div className="d-stat-title">이번 달 사용량</div>
          <div className="d-stat-value">82%</div>
          <div className="d-stat-desc">10,000건 중 8,200건</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="d-table">
          <thead>
            <tr>
              <th>청구서</th>
              <th>금액</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {INVOICES.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.amount}</td>
                <td>
                  <span className={`d-badge ${row.status === "환불" ? "d-badge-warning" : "d-badge-success"}`}>
                    {row.status}
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
