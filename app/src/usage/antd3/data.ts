export interface Milestone {
  label: string;
  done: boolean;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  team: string;
  status: "진행중" | "지연" | "완료";
  progress: number;
  dueLabel: string;
  milestones: Milestone[];
}

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "결제 리뉴얼",
    summary: "체크아웃 플로우를 3단계에서 1단계로 단축.",
    team: "결제팀",
    status: "진행중",
    progress: 62,
    dueLabel: "10월 3일",
    milestones: [
      { label: "요구사항 확정", done: true },
      { label: "디자인 리뷰", done: true },
      { label: "개발", done: false },
      { label: "QA", done: false },
    ],
  },
  {
    id: "p2",
    name: "알림 센터",
    summary: "이메일·푸시·인앱 알림을 한 설정 화면으로 모음.",
    team: "플랫폼팀",
    status: "지연",
    progress: 34,
    dueLabel: "9월 20일 (지연)",
    milestones: [
      { label: "요구사항 확정", done: true },
      { label: "디자인 리뷰", done: false },
      { label: "개발", done: false },
      { label: "QA", done: false },
    ],
  },
  {
    id: "p3",
    name: "검색 개선",
    summary: "오타 허용 검색과 최근 검색어 저장.",
    team: "검색팀",
    status: "완료",
    progress: 100,
    dueLabel: "9월 8일 완료",
    milestones: [
      { label: "요구사항 확정", done: true },
      { label: "디자인 리뷰", done: true },
      { label: "개발", done: true },
      { label: "QA", done: true },
    ],
  },
  {
    id: "p4",
    name: "다크 모드",
    summary: "전체 화면에 다크 테마를 적용.",
    team: "디자인시스템팀",
    status: "진행중",
    progress: 18,
    dueLabel: "11월 1일",
    milestones: [
      { label: "요구사항 확정", done: true },
      { label: "디자인 리뷰", done: false },
      { label: "개발", done: false },
      { label: "QA", done: false },
    ],
  },
];

export interface TimelineEvent {
  id: string;
  color: "green" | "blue" | "red" | "gray";
  label: string;
  timeLabel: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { id: "t1", color: "green", label: "검색 개선, QA 통과, 배포 완료", timeLabel: "9월 8일" },
  { id: "t2", color: "blue", label: "결제 리뉴얼, 디자인 리뷰 승인", timeLabel: "9월 12일" },
  { id: "t3", color: "red", label: "알림 센터, 일정 지연 보고", timeLabel: "9월 14일" },
  { id: "t4", color: "blue", label: "다크 모드, 요구사항 확정", timeLabel: "9월 15일" },
  { id: "t5", color: "gray", label: "결제 리뉴얼, 개발 착수", timeLabel: "9월 16일" },
];

export interface TeamReport {
  team: string;
  completedTasks: number;
  totalTasks: number;
}

export const TEAM_REPORTS: TeamReport[] = [
  { team: "결제팀", completedTasks: 18, totalTasks: 29 },
  { team: "플랫폼팀", completedTasks: 7, totalTasks: 21 },
  { team: "검색팀", completedTasks: 24, totalTasks: 24 },
  { team: "디자인시스템팀", completedTasks: 3, totalTasks: 16 },
];
