export type ProjectStatus = "진행중" | "검토중" | "완료";

export type ProjectCategory = "프로덕트" | "디자인" | "플랫폼" | "품질";

export interface Project {
  id: string;
  // 사람이 티켓에서 부르는 이름, 화면 전체에서 이 코드로 지칭
  code: string;
  name: string;
  description: string;
  category: ProjectCategory;
  // 현재 진행 중인 스프린트
  sprint: string;
  status: ProjectStatus;
  progressPct: number;
  dueDate: string;
  // 마감까지 남은 일수. 오늘 날짜를 고정값으로 계산한 값임
  daysLeft: number;
  memberIds: readonly string[];
  // 리드 담당자 한 명의 이름을 카드, 표에 표시
  leadId: string;
  tasksTotal: number;
  tasksDone: number;
  openIssues: number;
  weeklyProgress: readonly number[];
  updatedAt: string;
}

export const PROJECTS: readonly Project[] = [
  { id: "p1", code: "PRJ-114", name: "모바일 앱 리뉴얼", description: "온보딩·결제 플로우 재설계", category: "프로덕트", sprint: "Sprint 24", status: "진행중", progressPct: 68, dueDate: "10-02", daysLeft: 12, memberIds: ["m1", "m2", "m3"], leadId: "m1", tasksTotal: 24, tasksDone: 16, openIssues: 5, weeklyProgress: [12, 20, 35, 48, 55, 68], updatedAt: "12분 전" },
  { id: "p2", code: "PRJ-098", name: "브랜드 가이드 2.0", description: "로고·타이포·컬러 시스템 갱신", category: "디자인", sprint: "Sprint 24", status: "검토중", progressPct: 92, dueDate: "09-22", daysLeft: 2, memberIds: ["m2", "m4"], leadId: "m2", tasksTotal: 15, tasksDone: 14, openIssues: 1, weeklyProgress: [40, 55, 70, 80, 88, 92], updatedAt: "1시간 전" },
  { id: "p3", code: "PRJ-120", name: "고객 포털 v3", description: "셀프서비스 티켓·청구 화면", category: "프로덕트", sprint: "Sprint 25", status: "진행중", progressPct: 34, dueDate: "10-20", daysLeft: 30, memberIds: ["m1", "m3", "m5"], leadId: "m3", tasksTotal: 30, tasksDone: 10, openIssues: 9, weeklyProgress: [5, 10, 15, 22, 28, 34], updatedAt: "3시간 전" },
  { id: "p4", code: "PRJ-087", name: "데이터 마이그레이션", description: "레거시 DB → 신규 스키마 이전", category: "플랫폼", sprint: "Sprint 23", status: "완료", progressPct: 100, dueDate: "09-10", daysLeft: -10, memberIds: ["m3", "m5"], leadId: "m5", tasksTotal: 12, tasksDone: 12, openIssues: 0, weeklyProgress: [60, 75, 85, 92, 98, 100], updatedAt: "어제" },
  { id: "p5", code: "PRJ-131", name: "접근성 감사", description: "WCAG AA 전수 점검 및 수정", category: "품질", sprint: "Sprint 25", status: "진행중", progressPct: 51, dueDate: "10-08", daysLeft: 18, memberIds: ["m4", "m1"], leadId: "m4", tasksTotal: 18, tasksDone: 9, openIssues: 7, weeklyProgress: [10, 18, 26, 34, 42, 51], updatedAt: "어제" },
  { id: "p6", code: "PRJ-135", name: "API 문서 정비", description: "OpenAPI 스펙 재작성", category: "플랫폼", sprint: "Sprint 25", status: "진행중", progressPct: 22, dueDate: "10-25", daysLeft: 35, memberIds: ["m5"], leadId: "m5", tasksTotal: 20, tasksDone: 4, openIssues: 3, weeklyProgress: [2, 6, 10, 14, 18, 22], updatedAt: "2일 전" },
];

export type TaskPriority = "높음" | "보통" | "낮음";

export interface Task {
  id: string;
  // 이슈 번호, 목록 제목 앞에 표시
  code: string;
  title: string;
  done: boolean;
  assigneeId: string;
  priority: TaskPriority;
  // 마감일, 월-일 형식. 지난 날짜는 빨간색으로 표시
  due: string;
}

export const PROJECT_TASKS: Record<string, readonly Task[]> = {
  p1: [
    { id: "t1", code: "IS-412", title: "온보딩 와이어프레임 확정", done: true, assigneeId: "m1", priority: "높음", due: "09-14" },
    { id: "t2", code: "IS-418", title: "결제 API 연동", done: true, assigneeId: "m2", priority: "높음", due: "09-18" },
    { id: "t3", code: "IS-425", title: "다크모드 QA", done: false, assigneeId: "m3", priority: "보통", due: "09-26" },
    { id: "t4", code: "IS-431", title: "앱스토어 스크린샷 제작", done: false, assigneeId: "m2", priority: "낮음", due: "09-30" },
    { id: "t5", code: "IS-436", title: "결제 실패 리트라이 정책", done: false, assigneeId: "m1", priority: "높음", due: "09-24" },
  ],
  p3: [
    { id: "t6", code: "IS-501", title: "티켓 목록 화면 설계", done: true, assigneeId: "m1", priority: "보통", due: "09-16" },
    { id: "t7", code: "IS-507", title: "청구 내역 API", done: false, assigneeId: "m5", priority: "높음", due: "10-02" },
    { id: "t8", code: "IS-509", title: "권한 모델 정의", done: false, assigneeId: "m3", priority: "높음", due: "10-06" },
    { id: "t9", code: "IS-515", title: "티켓 첨부 업로드", done: false, assigneeId: "m5", priority: "낮음", due: "10-14" },
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

// 통계카드 스파크라인용 6주 추세, 카드마다 한 줄 고정값
export const STAT_TRENDS: Record<"active" | "due" | "members" | "completion", readonly number[]> = {
  active: [3, 4, 4, 5, 5, 5],
  due: [3, 2, 3, 1, 2, 1],
  members: [4, 4, 5, 5, 5, 5],
  completion: [4, 6, 8, 11, 14, 17],
};

// 우측 레일 최근 활동 목록, 시각은 고정 문자열
export interface ActivityItem {
  id: string;
  memberId: string;
  action: string;
  target: string;
  at: string;
}

export const RECENT_ACTIVITY: readonly ActivityItem[] = [
  { id: "a1", memberId: "m2", action: "검토 요청", target: "PRJ-098 · 컬러 토큰 확정", at: "12분 전" },
  { id: "a2", memberId: "m1", action: "작업 완료", target: "IS-412 온보딩 와이어프레임", at: "1시간 전" },
  { id: "a3", memberId: "m5", action: "댓글 3개", target: "PRJ-135 OpenAPI 스펙", at: "3시간 전" },
  { id: "a4", memberId: "m3", action: "스키마 이전 종료", target: "PRJ-087 · 12/12 작업", at: "어제 17:40" },
  { id: "a5", memberId: "m4", action: "이슈 등록", target: "IS-552 대비 4.5:1 미달", at: "어제 11:02" },
];

// 프로젝트 상세 주차 라벨. weeklyProgress 6개와 매칭
export const PROGRESS_WEEK_LABELS: readonly string[] = ["6주 전", "5주 전", "4주 전", "3주 전", "지난주", "이번주"];
