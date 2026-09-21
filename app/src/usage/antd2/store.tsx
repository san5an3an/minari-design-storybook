import * as React from "react";
import {
  CANDIDATES, EMPLOYEES, LEAVE_REQUESTS, leaveDays,
  type Candidate, type Employee, type HiringStage, type LeaveRequest,
} from "./data";

export interface HrState {
  employees: Employee[];
  leaves: LeaveRequest[];
  candidates: Candidate[];
  openEmployeeId: string | null;
}

export type HrAction =
  | { type: "employee/add"; employee: Employee }
  | { type: "employee/open"; id: string | null }
  | { type: "leave/add"; leave: LeaveRequest }
  | { type: "leave/resolve"; id: string; status: "승인" | "반려" }
  | { type: "candidate/add"; candidate: Candidate }
  | { type: "candidate/move"; id: string; stage: HiringStage }
  | { type: "candidate/reject"; id: string };

const INITIAL: HrState = {
  employees: EMPLOYEES,
  leaves: LEAVE_REQUESTS,
  candidates: CANDIDATES,
  openEmployeeId: null,
};

function reducer(state: HrState, action: HrAction): HrState {
  switch (action.type) {
    case "employee/add":
      return { ...state, employees: [action.employee, ...state.employees] };
    case "employee/open":
      return { ...state, openEmployeeId: action.id };
    case "leave/add":
      return { ...state, leaves: [action.leave, ...state.leaves] };
    case "leave/resolve": {
      const leave = state.leaves.find((l) => l.id === action.id);
      if (!leave || leave.status !== "대기") return state;
      return {
        ...state,
        leaves: state.leaves.map((l) => (l.id === action.id ? { ...l, status: action.status } : l)),
        // 연차 승인 시 잔여 연차 감소, 병가 경조사는 차감 대상에서 제외
        employees: action.status === "승인" && leave.type === "연차"
          ? state.employees.map((e) =>
            e.id === leave.employeeId ? { ...e, leaveUsed: Math.min(e.leaveTotal, e.leaveUsed + leaveDays(leave)) } : e)
          : state.employees,
      };
    }
    case "candidate/add":
      return { ...state, candidates: [action.candidate, ...state.candidates] };
    case "candidate/move":
      return {
        ...state,
        candidates: state.candidates.map((c) =>
          // 단계가 바뀌면 이전 단계의 일정 next 는 유효하지 않아 함께 제거
          c.id === action.id ? { ...c, stage: action.stage, next: undefined } : c),
      };
    case "candidate/reject":
      return {
        ...state,
        candidates: state.candidates.map((c) =>
          c.id === action.id ? { ...c, rejected: true, next: undefined } : c),
      };
    default:
      return state;
  }
}

interface HrContextValue {
  state: HrState;
  dispatch: React.Dispatch<HrAction>;
  // 다른 탭으로 이동. 알림, 검색처럼 화면 밖에서 시작하는 흐름에 사용
  navigate: (screenKey: string) => void;
}

const HrContext = React.createContext<HrContextValue | null>(null);

export function HrProvider({ navigate, children }: { navigate: (screenKey: string) => void; children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL);
  const value = React.useMemo( => ({ state, dispatch, navigate }), [state, navigate]);
  return <HrContext.Provider value={value}>{children}</HrContext.Provider>;
}

export function useHr: HrContextValue {
  const value = React.useContext(HrContext);
  if (!value) throw new Error("useHr 는 HrProvider 안에서만 쓸 수 있어요.");
  return value;
}

// 다음 식별자. E-1014 형식 중 최댓값 + 1, 접두사는 유지
export function nextId(ids: string[], prefix: string): string {
  const max = ids.reduce((m, id) => {
    const n = Number(id.slice(prefix.length));
    return Number.isFinite(n) && n > m ? n : m;
  }, 0);
  return `${prefix}${max + 1}`;
}
