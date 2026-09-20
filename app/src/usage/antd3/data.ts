export type TeamName = "결제팀" | "플랫폼팀" | "검색팀" | "디자인시스템팀" | "그로스팀";

export const TEAMS: readonly TeamName[] = ["결제팀", "플랫폼팀", "검색팀", "디자인시스템팀", "그로스팀"];

export interface Member {
  id: string;
  name: string;
  role: string;
  team: TeamName;
}

export const MEMBERS: readonly Member[] = [
  { id: "m1", name: "김서윤", role: "PM", team: "결제팀" },
  { id: "m2", name: "박도현", role: "백엔드", team: "결제팀" },
  { id: "m3", name: "이하린", role: "프론트엔드", team: "결제팀" },
  { id: "m4", name: "정우진", role: "PM", team: "플랫폼팀" },
  { id: "m5", name: "최민서", role: "백엔드", team: "플랫폼팀" },
  { id: "m6", name: "한지우", role: "iOS", team: "플랫폼팀" },
  { id: "m7", name: "오세훈", role: "검색 엔지니어", team: "검색팀" },
  { id: "m8", name: "윤채원", role: "데이터 분석", team: "검색팀" },
  { id: "m9", name: "강다은", role: "프로덕트 디자이너", team: "디자인시스템팀" },
  { id: "m10", name: "임준호", role: "프론트엔드", team: "디자인시스템팀" },
  { id: "m11", name: "송예린", role: "그로스 PM", team: "그로스팀" },
  { id: "m12", name: "배현우", role: "QA", team: "플랫폼팀" },
];

const MEMBER_BY_ID = new Map(MEMBERS.map((m) => [m.id, m]));

// 없는 id는 조용히 빈 값 처리하지 않음. 오타가 즉시 드러나지 않으면 고쳐지지 않음
export function memberOf(id: string): Member {
  const found = MEMBER_BY_ID.get(id);
  if (!found) throw new Error(`antd3/data: 없는 구성원 id "${id}"`);
  return found;
}

// 목업을 보는 사용자. 상단 바 아바타와 새 프로젝트 기본 담당자로 사용
export const CURRENT_USER_ID = "m1";

export type TaskStatus = "할 일" | "진행중" | "검토" | "완료";
export const TASK_STATUSES: readonly TaskStatus[] = ["할 일", "진행중", "검토", "완료"];

export type MilestoneKey = "spec" | "design" | "build" | "qa";

export interface Milestone {
  key: MilestoneKey;
  label: string;
  dateLabel: string;
}

export interface Task {
  id: string;
  title: string;
  assigneeId: string;
  status: TaskStatus;
  dueLabel: string;
  milestone: MilestoneKey;
}

export type Priority = "높음" | "보통" | "낮음";
export type ProjectStatus = "진행중" | "지연" | "완료";
export const PROJECT_STATUSES: readonly ProjectStatus[] = ["진행중", "지연", "완료"];

export interface Project {
  id: string;
  name: string;
  summary: string;
  team: TeamName;
  ownerId: string;
  memberIds: readonly string[];
  priority: Priority;
  startLabel: string;
  dueLabel: string;
  // 마감까지 남은 일수
  dueInDays: number;
  updatedLabel: string;
  milestones: readonly Milestone[];
  tasks: readonly Task[];
  // 최근 6주 주간 완료 과업 수, 오래된 주부터 이번 주 순. 상세 화면 추이 그림에서 사용
  weeklyDone: readonly number[];
}

// 마일스톤 이름은 프로젝트 공통, 날짜만 다르게 지정. 새 프로젝트도 이 틀 재사용
export const stages = (spec: string, design: string, build: string, qa: string): Milestone[] => [
  { key: "spec", label: "요구사항 확정", dateLabel: spec },
  { key: "design", label: "디자인 리뷰", dateLabel: design },
  { key: "build", label: "개발", dateLabel: build },
  { key: "qa", label: "QA·배포", dateLabel: qa },
];

const task = (
  id: string, title: string, assigneeId: string, status: TaskStatus, dueLabel: string, milestone: MilestoneKey,
): Task => ({ id, title, assigneeId, status, dueLabel, milestone });

export const PROJECTS: readonly Project[] = [
  {
    id: "PRJ-114",
    name: "결제 리뉴얼",
    summary: "체크아웃 플로우를 3단계에서 1단계로 줄여요.",
    team: "결제팀",
    ownerId: "m1",
    memberIds: ["m1", "m2", "m3", "m9", "m12"],
    priority: "높음",
    startLabel: "8월 18일",
    dueLabel: "10월 3일",
    dueInDays: 13,
    updatedLabel: "12분 전",
    milestones: stages("8월 22일", "9월 12일", "9월 26일", "10월 3일"),
    tasks: [
      task("T-1401", "결제 단계 축소 요구사항 정리", "m1", "완료", "8월 21일", "spec"),
      task("T-1402", "PG사 단일 호출 가능 여부 확인", "m2", "완료", "8월 22일", "spec"),
      task("T-1405", "1단계 체크아웃 시안", "m9", "완료", "9월 5일", "design"),
      task("T-1408", "디자인 리뷰 반영", "m9", "완료", "9월 12일", "design"),
      task("T-1411", "결제 API 통합 엔드포인트", "m2", "완료", "9월 18일", "build"),
      task("T-1412", "체크아웃 화면 구현", "m3", "진행중", "9월 24일", "build"),
      task("T-1415", "실패 결제 재시도 로직", "m2", "검토", "9월 25일", "build"),
      task("T-1420", "결제 회귀 테스트", "m12", "할 일", "10월 1일", "qa"),
    ],
    weeklyDone: [0, 1, 1, 1, 1, 1],
  },
  {
    id: "PRJ-109",
    name: "알림 센터",
    summary: "이메일·푸시·인앱 알림을 한 설정 화면으로 모아요.",
    team: "플랫폼팀",
    ownerId: "m4",
    memberIds: ["m4", "m5", "m6", "m9", "m12"],
    priority: "높음",
    startLabel: "8월 11일",
    dueLabel: "9월 14일",
    dueInDays: -6,
    updatedLabel: "어제 17:40",
    milestones: stages("8월 29일", "9월 5일", "9월 12일", "9월 14일"),
    tasks: [
      task("T-0901", "알림 채널 현황 조사", "m4", "완료", "8월 22일", "spec"),
      task("T-0902", "알림 설정 요구사항 확정", "m4", "완료", "8월 29일", "spec"),
      task("T-0905", "설정 화면 시안", "m9", "검토", "9월 5일", "design"),
      task("T-0908", "알림 발송 큐 설계", "m5", "진행중", "9월 10일", "build"),
      task("T-0911", "iOS 푸시 권한 흐름", "m6", "할 일", "9월 12일", "build"),
      task("T-0915", "채널별 수신 거부 QA", "m12", "할 일", "9월 14일", "qa"),
    ],
    weeklyDone: [0, 0, 1, 1, 0, 0],
  },
  {
    id: "PRJ-101",
    name: "검색 개선",
    summary: "오타를 허용하는 검색과 최근 검색어 저장.",
    team: "검색팀",
    ownerId: "m7",
    memberIds: ["m7", "m8", "m10"],
    priority: "보통",
    startLabel: "7월 28일",
    dueLabel: "9월 8일",
    dueInDays: -12,
    updatedLabel: "9월 8일",
    milestones: stages("8월 1일", "8월 12일", "9월 1일", "9월 8일"),
    tasks: [
      task("T-0301", "검색 로그 분석", "m8", "완료", "7월 31일", "spec"),
      task("T-0303", "오타 허용 범위 정의", "m7", "완료", "8월 1일", "spec"),
      task("T-0306", "최근 검색어 UI", "m10", "완료", "8월 12일", "design"),
      task("T-0309", "퍼지 매칭 색인", "m7", "완료", "8월 26일", "build"),
      task("T-0312", "최근 검색어 저장 API", "m7", "완료", "9월 1일", "build"),
      task("T-0316", "검색 품질 회귀 테스트", "m8", "완료", "9월 8일", "qa"),
    ],
    weeklyDone: [1, 1, 1, 2, 0, 0],
  },
  {
    id: "PRJ-117",
    name: "다크 모드",
    summary: "전체 화면에 다크 테마를 적용해요.",
    team: "디자인시스템팀",
    ownerId: "m9",
    memberIds: ["m9", "m10", "m3"],
    priority: "보통",
    startLabel: "8월 25일",
    dueLabel: "11월 1일",
    dueInDays: 42,
    updatedLabel: "3시간 전",
    milestones: stages("9월 15일", "10월 2일", "10월 24일", "11월 1일"),
    tasks: [
      task("T-1701", "다크 팔레트 요구사항 확정", "m9", "완료", "9월 15일", "spec"),
      task("T-1704", "시맨틱 색 토큰 다크 값 정의", "m9", "진행중", "9월 26일", "design"),
      task("T-1706", "컴포넌트별 대비 점검", "m10", "할 일", "10월 2일", "design"),
      task("T-1710", "테마 전환 토글 구현", "m10", "할 일", "10월 10일", "build"),
      task("T-1713", "화면별 다크 적용", "m3", "할 일", "10월 24일", "build"),
      task("T-1718", "다크 모드 시각 회귀 테스트", "m10", "할 일", "10월 31일", "qa"),
    ],
    weeklyDone: [0, 0, 0, 0, 1, 0],
  },
  {
    id: "PRJ-120",
    name: "온보딩 개편",
    summary: "가입 뒤 첫 5분 안에 핵심 기능까지 닿게 해요.",
    team: "그로스팀",
    ownerId: "m11",
    memberIds: ["m11", "m3", "m9", "m8"],
    priority: "높음",
    startLabel: "8월 4일",
    dueLabel: "9월 26일",
    dueInDays: 6,
    updatedLabel: "40분 전",
    milestones: stages("8월 8일", "8월 22일", "9월 19일", "9월 26일"),
    tasks: [
      task("T-2001", "이탈 구간 데이터 분석", "m8", "완료", "8월 7일", "spec"),
      task("T-2002", "온보딩 목표 지표 합의", "m11", "완료", "8월 8일", "spec"),
      task("T-2005", "3단계 온보딩 시안", "m9", "완료", "8월 22일", "design"),
      task("T-2009", "체크리스트 위젯 구현", "m3", "완료", "9월 9일", "build"),
      task("T-2011", "샘플 데이터 자동 생성", "m3", "완료", "9월 17일", "build"),
      task("T-2014", "A/B 실험 설정", "m11", "진행중", "9월 23일", "qa"),
      task("T-2016", "온보딩 완료율 대시보드", "m8", "검토", "9월 25일", "qa"),
    ],
    weeklyDone: [1, 0, 1, 1, 1, 1],
  },
  {
    id: "PRJ-112",
    name: "정산 자동화",
    summary: "월말 정산 대사를 수작업에서 배치로 옮겨요.",
    team: "결제팀",
    ownerId: "m2",
    memberIds: ["m2", "m1", "m8"],
    priority: "보통",
    startLabel: "8월 25일",
    dueLabel: "10월 17일",
    dueInDays: 27,
    updatedLabel: "어제 11:05",
    milestones: stages("9월 2일", "9월 9일", "10월 8일", "10월 17일"),
    tasks: [
      task("T-1201", "정산 항목·예외 목록 정리", "m1", "완료", "8월 29일", "spec"),
      task("T-1202", "대사 규칙 확정", "m2", "완료", "9월 2일", "spec"),
      task("T-1205", "정산 리포트 화면 시안", "m1", "완료", "9월 9일", "design"),
      task("T-1208", "일 단위 대사 배치", "m2", "진행중", "9월 30일", "build"),
      task("T-1210", "불일치 알림 발송", "m2", "할 일", "10월 6일", "build"),
      task("T-1213", "정산 리포트 API", "m8", "할 일", "10월 8일", "build"),
      task("T-1217", "9월분 병행 검증", "m1", "할 일", "10월 15일", "qa"),
    ],
    weeklyDone: [0, 1, 1, 1, 0, 0],
  },
  {
    id: "PRJ-098",
    name: "접근성 점검",
    summary: "핵심 화면 12개의 키보드·스크린리더 동선을 고쳐요.",
    team: "디자인시스템팀",
    ownerId: "m10",
    memberIds: ["m10", "m9", "m12"],
    priority: "낮음",
    startLabel: "7월 21일",
    dueLabel: "8월 29일",
    dueInDays: -22,
    updatedLabel: "8월 29일",
    milestones: stages("7월 25일", "8월 1일", "8월 22일", "8월 29일"),
    tasks: [
      task("T-0101", "점검 대상 화면 선정", "m10", "완료", "7월 25일", "spec"),
      task("T-0103", "대체 텍스트·라벨 기준 정리", "m9", "완료", "8월 1일", "design"),
      task("T-0106", "포커스 순서 수정", "m10", "완료", "8월 14일", "build"),
      task("T-0108", "색 대비 미달 항목 수정", "m10", "완료", "8월 22일", "build"),
      task("T-0111", "스크린리더 시나리오 테스트", "m12", "완료", "8월 29일", "qa"),
    ],
    weeklyDone: [2, 1, 0, 0, 0, 0],
  },
  {
    id: "PRJ-123",
    name: "모바일 앱 성능",
    summary: "첫 화면 로딩을 3.2초에서 1.5초로 줄여요.",
    team: "플랫폼팀",
    ownerId: "m6",
    memberIds: ["m6", "m4", "m5", "m9", "m12"],
    priority: "높음",
    startLabel: "9월 1일",
    dueLabel: "9월 24일",
    dueInDays: 4,
    updatedLabel: "2시간 전",
    milestones: stages("9월 4일", "9월 8일", "9월 19일", "9월 24일"),
    tasks: [
      task("T-2301", "로딩 구간별 측정", "m6", "완료", "9월 3일", "spec"),
      task("T-2302", "성능 목표치 합의", "m4", "완료", "9월 4일", "spec"),
      task("T-2305", "스켈레톤 화면 시안", "m9", "진행중", "9월 8일", "design"),
      task("T-2308", "이미지 지연 로딩", "m6", "진행중", "9월 15일", "build"),
      task("T-2310", "초기 API 호출 병합", "m5", "할 일", "9월 17일", "build"),
      task("T-2312", "번들 분할", "m6", "할 일", "9월 19일", "build"),
      task("T-2315", "저사양 기기 회귀 테스트", "m12", "할 일", "9월 23일", "qa"),
    ],
    weeklyDone: [0, 0, 0, 2, 0, 0],
  },
];

export const doneCount = (tasks: readonly Task[]) => tasks.filter((t) => t.status === "완료").length;

export const progressOf = (tasks: readonly Task[]) =>
  tasks.length === 0 ? 0 : Math.round((doneCount(tasks) / tasks.length) * 100);

// 상태는 저장하지 않고 계산: 전부 완료면 완료, 마감 초과 잔여면 지연, 그 외는 진행중으로 판별
export function statusOf(project: Pick<Project, "dueInDays">, tasks: readonly Task[]): ProjectStatus {
  if (tasks.length > 0 && doneCount(tasks) === tasks.length) return "완료";
  return project.dueInDays < 0 ? "지연" : "진행중";
}

// 마일스톤 완료 여부. 과업 없는 단계는 미완료로 판정
export function milestoneDone(tasks: readonly Task[], key: MilestoneKey): boolean {
  const own = tasks.filter((t) => t.milestone === key);
  return own.length > 0 && own.every((t) => t.status === "완료");
}

// 마감 상태 문구 렌더링. 남은 날짜는 고정 기준일로 계산
export function dueBadge(project: Pick<Project, "dueInDays">, status: ProjectStatus): string {
  if (status === "완료") return "완료";
  if (project.dueInDays < 0) return `${Math.abs(project.dueInDays)}일 지남`;
  if (project.dueInDays === 0) return "오늘 마감";
  return `D-${project.dueInDays}`;
}

// 목업의 오늘 기준값. 새 프로젝트 마감일의 dueInDays 계산 기준
export const TODAY_ISO = "2026-09-20";

// 마감 7일 이내 미완료 항목. 마감 임박 목록과 위험 신호에 공통 사용
export const DUE_SOON_DAYS = 7;

export type EventKind = "완료" | "승인" | "지연" | "착수" | "코멘트" | "배포";
export const EVENT_KINDS: readonly EventKind[] = ["완료", "승인", "지연", "착수", "코멘트", "배포"];

// 날짜 그룹 정렬, 최근순부터 배치해 타임라인 구간 구분
export type EventGroup = "오늘" | "어제" | "이번 주" | "지난주" | "그 이전";
export const EVENT_GROUPS: readonly EventGroup[] = ["오늘", "어제", "이번 주", "지난주", "그 이전"];

export interface TimelineEvent {
  id: string;
  projectId: string;
  kind: EventKind;
  actorId: string;
  text: string;
  timeLabel: string;
  group: EventGroup;
}

// 피드 항목에 프로젝트, 사람, 유형 속성 지정
export const TIMELINE_EVENTS: readonly TimelineEvent[] = [
  { id: "e24", projectId: "PRJ-114", kind: "코멘트", actorId: "m12", text: "실패 결제 재시도. 3회 제한 케이스를 테스트 계획에 넣었어요", timeLabel: "12분 전", group: "오늘" },
  { id: "e23", projectId: "PRJ-120", kind: "착수", actorId: "m11", text: "A/B 실험 설정을 시작했어요", timeLabel: "40분 전", group: "오늘" },
  { id: "e22", projectId: "PRJ-123", kind: "코멘트", actorId: "m6", text: "이미지 지연 로딩 적용 뒤 첫 화면 2.4초까지 내려왔어요", timeLabel: "2시간 전", group: "오늘" },
  { id: "e21", projectId: "PRJ-117", kind: "착수", actorId: "m9", text: "시맨틱 색 토큰 다크 값 정의를 시작했어요", timeLabel: "3시간 전", group: "오늘" },
  { id: "e20", projectId: "PRJ-109", kind: "지연", actorId: "m4", text: "일정 지연 보고. 발송 큐 설계가 길어져 마감을 넘겼어요", timeLabel: "어제 17:40", group: "어제" },
  { id: "e19", projectId: "PRJ-112", kind: "착수", actorId: "m2", text: "일 단위 대사 배치 개발에 들어갔어요", timeLabel: "어제 11:05", group: "어제" },
  { id: "e18", projectId: "PRJ-114", kind: "완료", actorId: "m2", text: "결제 API 통합 엔드포인트를 끝냈어요", timeLabel: "9월 18일", group: "이번 주" },
  { id: "e17", projectId: "PRJ-120", kind: "완료", actorId: "m3", text: "샘플 데이터 자동 생성을 끝냈어요", timeLabel: "9월 17일", group: "이번 주" },
  { id: "e16", projectId: "PRJ-114", kind: "착수", actorId: "m3", text: "체크아웃 화면 구현을 시작했어요", timeLabel: "9월 16일", group: "이번 주" },
  { id: "e15", projectId: "PRJ-117", kind: "승인", actorId: "m9", text: "다크 팔레트 요구사항이 확정됐어요", timeLabel: "9월 15일", group: "이번 주" },
  { id: "e14", projectId: "PRJ-109", kind: "지연", actorId: "m4", text: "마감(9월 14일)을 넘겼어요. 남은 과업 4건", timeLabel: "9월 14일", group: "이번 주" },
  { id: "e13", projectId: "PRJ-114", kind: "승인", actorId: "m1", text: "디자인 리뷰를 승인했어요", timeLabel: "9월 12일", group: "지난주" },
  { id: "e12", projectId: "PRJ-112", kind: "승인", actorId: "m1", text: "정산 리포트 화면 시안을 승인했어요", timeLabel: "9월 9일", group: "지난주" },
  { id: "e11", projectId: "PRJ-120", kind: "완료", actorId: "m3", text: "체크리스트 위젯 구현을 끝냈어요", timeLabel: "9월 9일", group: "지난주" },
  { id: "e10", projectId: "PRJ-101", kind: "배포", actorId: "m7", text: "QA 통과, 전체 사용자에게 배포했어요", timeLabel: "9월 8일", group: "지난주" },
  { id: "e09", projectId: "PRJ-123", kind: "승인", actorId: "m4", text: "성능 목표치(첫 화면 1.5초)를 합의했어요", timeLabel: "9월 4일", group: "그 이전" },
  { id: "e08", projectId: "PRJ-101", kind: "착수", actorId: "m8", text: "최근 검색어 저장 QA를 시작했어요", timeLabel: "9월 3일", group: "그 이전" },
  { id: "e07", projectId: "PRJ-098", kind: "배포", actorId: "m10", text: "접근성 수정 12개 화면을 배포했어요", timeLabel: "8월 29일", group: "그 이전" },
  { id: "e06", projectId: "PRJ-109", kind: "승인", actorId: "m4", text: "알림 설정 요구사항이 확정됐어요", timeLabel: "8월 29일", group: "그 이전" },
  { id: "e05", projectId: "PRJ-117", kind: "착수", actorId: "m9", text: "킥오프 미팅을 열었어요", timeLabel: "8월 25일", group: "그 이전" },
];

export interface WeeklyFlow {
  week: string;
  // 해당 주 신규 과업
  created: number;
  // 해당 주 완료 과업
  done: number;
  // 착수부터 완료까지 평균 소요일
  leadDays: number;
}

// 최근 12주, 오래된 주부터 이번 주 순. 기간 선택기가 끝에서 일부 셀 제거
export const WEEKLY_FLOW: readonly WeeklyFlow[] = [
  { week: "7월 1주", created: 5, done: 2, leadDays: 7.4 },
  { week: "7월 2주", created: 4, done: 3, leadDays: 7.1 },
  { week: "7월 3주", created: 6, done: 3, leadDays: 6.8 },
  { week: "7월 4주", created: 5, done: 4, leadDays: 6.9 },
  { week: "8월 1주", created: 7, done: 4, leadDays: 6.2 },
  { week: "8월 2주", created: 5, done: 5, leadDays: 6.0 },
  { week: "8월 3주", created: 6, done: 4, leadDays: 6.4 },
  { week: "8월 4주", created: 8, done: 6, leadDays: 5.7 },
  { week: "9월 1주", created: 7, done: 5, leadDays: 5.9 },
  { week: "9월 2주", created: 4, done: 6, leadDays: 5.2 },
  { week: "9월 3주", created: 5, done: 4, leadDays: 5.5 },
  { week: "9월 4주", created: 3, done: 3, leadDays: 5.1 },
];
