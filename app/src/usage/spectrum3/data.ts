export type ProjectStatus = "진행중" | "검토중" | "완료";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  progressPct: number;
  dueDate: string;
  memberIds: readonly string[];
  tasksTotal: number;
  tasksDone: number;
  weeklyProgress: readonly number[];
}

export const PROJECTS: readonly Project[] = [
  { id: "p1", name: "모바일 앱 리뉴얼", description: "온보딩·결제 플로우 재설계", status: "진행중", progressPct: 68, dueDate: "10-02", memberIds: ["m1", "m2", "m3"], tasksTotal: 24, tasksDone: 16, weeklyProgress: [12, 20, 35, 48, 55, 68] },
  { id: "p2", name: "브랜드 가이드 2.0", description: "로고·타이포·컬러 시스템 갱신", status: "검토중", progressPct: 92, dueDate: "09-22", memberIds: ["m2", "m4"], tasksTotal: 15, tasksDone: 14, weeklyProgress: [40, 55, 70, 80, 88, 92] },
  { id: "p3", name: "고객 포털 v3", description: "셀프서비스 티켓·청구 화면", status: "진행중", progressPct: 34, dueDate: "10-20", memberIds: ["m1", "m3", "m5"], tasksTotal: 30, tasksDone: 10, weeklyProgress: [5, 10, 15, 22, 28, 34] },
  { id: "p4", name: "데이터 마이그레이션", description: "레거시 DB → 신규 스키마 이전", status: "완료", progressPct: 100, dueDate: "09-10", memberIds: ["m3", "m5"], tasksTotal: 12, tasksDone: 12, weeklyProgress: [60, 75, 85, 92, 98, 100] },
  { id: "p5", name: "접근성 감사", description: "WCAG AA 전수 점검 및 수정", status: "진행중", progressPct: 51, dueDate: "10-08", memberIds: ["m4", "m1"], tasksTotal: 18, tasksDone: 9, weeklyProgress: [10, 18, 26, 34, 42, 51] },
  { id: "p6", name: "API 문서 정비", description: "OpenAPI 스펙 재작성", status: "진행중", progressPct: 22, dueDate: "10-25", memberIds: ["m5"], tasksTotal: 20, tasksDone: 4, weeklyProgress: [2, 6, 10, 14, 18, 22] },
];

export interface Task {
  id: string;
  title: string;
  done: boolean;
  assigneeId: string;
}

export const PROJECT_TASKS: Record<string, readonly Task[]> = {
  p1: [
    { id: "t1", title: "온보딩 와이어프레임 확정", done: true, assigneeId: "m1" },
    { id: "t2", title: "결제 API 연동", done: true, assigneeId: "m2" },
    { id: "t3", title: "다크모드 QA", done: false, assigneeId: "m3" },
    { id: "t4", title: "앱스토어 스크린샷 제작", done: false, assigneeId: "m2" },
  ],
  p3: [
    { id: "t5", title: "티켓 목록 화면 설계", done: true, assigneeId: "m1" },
    { id: "t6", title: "청구 내역 API", done: false, assigneeId: "m5" },
    { id: "t7", title: "권한 모델 정의", done: false, assigneeId: "m3" },
  ],
};

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarSeed: string;
  workloadPct: number;
  available: boolean;
  projectCount: number;
}

export const TEAM: readonly TeamMember[] = [
  { id: "m1", name: "한지우", role: "PM", avatarSeed: "HJ2", workloadPct: 82, available: true, projectCount: 3 },
  { id: "m2", name: "박서연", role: "디자이너", avatarSeed: "PS2", workloadPct: 64, available: true, projectCount: 2 },
  { id: "m3", name: "이도윤", role: "엔지니어", avatarSeed: "LD2", workloadPct: 95, available: false, projectCount: 4 },
  { id: "m4", name: "최민지", role: "엔지니어", avatarSeed: "CM2", workloadPct: 48, available: true, projectCount: 2 },
  { id: "m5", name: "정하은", role: "엔지니어", avatarSeed: "JH2", workloadPct: 71, available: true, projectCount: 3 },
];

// 홈 화면 미니 막대그래프 2개, 이번 달 완료 작업 수와 팀별 부하
export const TASKS_COMPLETED_BY_WEEK: readonly { label: string; value: number }[] = [
  { label: "1주", value: 14 }, { label: "2주", value: 19 }, { label: "3주", value: 11 }, { label: "4주", value: 23 },
];
