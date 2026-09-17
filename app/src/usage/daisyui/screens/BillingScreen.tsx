import * as React from "react";
import { Gauge, Wallet } from "lucide-react";

const INVOICES = [
  { id: "INV-2026-09", amount: "₩49,000", status: "결제 완료" },
  { id: "INV-2026-08", amount: "₩49,000", status: "결제 완료" },
  { id: "INV-2026-07", amount: "₩39,000", status: "환불" },
  { id: "INV-2026-06", amount: "₩39,000", status: "결제 완료" },
  { id: "INV-2026-05", amount: "₩39,000", status: "결제 완료" },
  { id: "INV-2026-04", amount: "₩29,000", status: "결제 완료" },
] as const;

const USAGE = [
  { label: "API 호출", used: 8200, total: 10000 },
  { label: "저장 공간", used: 42, total: 100 },
  { label: "팀 시트", used: 6, total: 10 },
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
          <div className="d-stat-figure text-primary">
            <Gauge size={28} aria-hidden />
          </div>
          <div className="d-stat-title">이번 달 사용량</div>
          <div className="d-stat-value">82%</div>
          <div className="d-stat-desc">10,000건 중 8,200건</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
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

        <div className="d-card bg-base-100 shadow">
          <div className="d-card-body">
            <span style={{ fontWeight: 600 }}>항목별 사용량</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
              {USAGE.map((u) => (
                <div key={u.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", marginBottom: "0.25rem" }}>
                    <span>{u.label}</span>
                    <span className="opacity-60">{u.used.toLocaleString} / {u.total.toLocaleString}</span>
                  </div>
                  <progress className="d-progress d-progress-primary w-full" value={u.used} max={u.total} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
