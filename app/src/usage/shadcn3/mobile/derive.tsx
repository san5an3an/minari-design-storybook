import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { CATEGORY_BUDGET } from "../data";
import type { Transaction } from "../data";
import { won } from "../screens/OverviewScreen";

export type AlertTone = "danger" | "warning" | "brand" | "success";

export interface AlertSpec {
  tone: AlertTone;
  icon: ReactNode;
  title: string;
  detail: string;
}

export interface CategoryRow {
  category: string;
  items: Transaction[];
  // 이 분류의 지출 합계 저장. 수입은 0 으로 계산함
  expenseTotal: number;
  // 전체 지출 대비 이 분류의 비율(%) 저장
  share: number;
}

const sum = (rows: readonly Transaction[]) => rows.reduce((s, t) => s + t.amount, 0);

export function totals(transactions: readonly Transaction[]) {
  const expenses = transactions.filter((t) => t.kind === "지출");
  return {
    expenses,
    income: sum(transactions.filter((t) => t.kind === "수입")),
    expense: sum(expenses),
  };
}

export function categoryRows(transactions: readonly Transaction[]): CategoryRow[] {
  const { expense } = totals(transactions);
  return Array.from(new Set(transactions.map((t) => t.category))).map((category) => {
    const items = transactions.filter((t) => t.category === category);
    const expenseTotal = sum(items.filter((t) => t.kind === "지출"));
    return { category, items, expenseTotal, share: expense > 0 ? Math.round((expenseTotal / expense) * 100) : 0 };
  });
}

// 예산 70% 이상 쓴 분류 계산. 앱 바 알림 배지 수와 Popover 목록에 사용함
export function urgentCategories(transactions: readonly Transaction[]) {
  return Object.entries(CATEGORY_BUDGET)
    .map(([category, budget]) => {
      const spent = sum(transactions.filter((t) => t.category === category && t.kind === "지출"));
      return { category, pct: Math.round((spent / budget) * 100) };
    })
    .filter((c) => c.pct >= 70);
}

// 개요 화면의 예산 알림 목록 생성. 초과, 임박 분류와 최대 단건 지출, 수입 현황을 실제 거래에서 계산함
export function buildAlerts(transactions: readonly Transaction[]): AlertSpec[] {
  const { expenses, income, expense } = totals(transactions);
  const alerts: AlertSpec[] = [];
  for (const c of categoryRows(transactions)) {
    const budget = CATEGORY_BUDGET[c.category];
    if (!budget || c.expenseTotal === 0) continue;
    const pct = Math.round((c.expenseTotal / budget) * 100);
    if (pct >= 100) {
      alerts.push({ tone: "danger", icon: <AlertTriangle size={14} aria-hidden />, title: `${c.category} 예산 초과 · ${pct}%`, detail: `${won(c.expenseTotal)} / ${won(budget)}` });
    } else if (pct >= 70) {
      alerts.push({ tone: "warning", icon: <AlertTriangle size={14} aria-hidden />, title: `${c.category} 예산 ${pct}% 도달`, detail: `${won(c.expenseTotal)} / ${won(budget)}` });
    }
  }
  const biggest = [...expenses].sort((a, b) => b.amount - a.amount)[0];
  if (biggest) {
    alerts.push({ tone: "brand", icon: <Info size={14} aria-hidden />, title: `고액 지출 감지 · ${biggest.title}`, detail: `${biggest.date} · ${won(biggest.amount)}` });
  }
  if (income > 0) {
    alerts.push({ tone: "success", icon: <CheckCircle2 size={14} aria-hidden />, title: "이번 달 수입 순항 중", detail: `누적 ${won(income)} · 지출 대비 ${Math.round((income / Math.max(expense, 1)) * 100)}%` });
  }
  return alerts;
}
