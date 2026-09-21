import dayjs, { type Dayjs } from "dayjs";
// 로케일 등록만 수행. dayjs 세번째 인자가 전역 미적용 등록 옵션임
import "dayjs/locale/ko";

export const TODAY = "2026-09-20";
export const today = : Dayjs => dayjs(TODAY);

// 요일 포함 날짜 형식
export const dayLabel = (iso: string): string => dayjs(iso).locale("ko").format("M월 D일 (dd)");
// 요일 없는 날짜 형식
export const shortDayLabel = (iso: string): string => dayjs(iso).format("M월 D일");

// 구성원

export type EmployeeStatus = "재직" | "온보딩" | "휴직";
export type Department = "디자인" | "엔지니어링" | "세일즈" | "인사" | "마케팅" | "재무";

export const DEPARTMENTS: Department[] = ["디자인", "엔지니어링", "세일즈", "인사", "마케팅", "재무"];
export const LOCATIONS = ["서울", "부산", "대전", "원격"] as const;
export const EMPLOYMENT_TYPES = ["정규직", "계약직"] as const;

export interface Employee {
  // 사번, 화면에 그대로 보이는 식별자
  id: string;
  name: string;
  role: string;
  department: Department;
  status: EmployeeStatus;
  location: (typeof LOCATIONS)[number];
  employment: (typeof EMPLOYMENT_TYPES)[number];
  email: string;
  // ISO 날짜
  joined: string;
  manager: string;
  // 현재 온보딩 단계 0-기준 번호. ONBOARDING_STEPS.length면 완료
  onboardingStep: number;
  leaveTotal: number;
  leaveUsed: number;
  // 휴직일 때만 복귀 예정일 ISO 형식 사용
  returnOn?: string;
}

export const ONBOARDING_STEPS = ["서류 제출", "장비 지급", "팀 소개", "완료"];

export const EMPLOYEES: Employee[] = [
  { id: "E-1001", name: "김서연", role: "프로덕트 디자이너", department: "디자인", status: "재직", location: "서울", employment: "정규직", email: "seoyeon.kim@example.com", joined: "2023-03-02", manager: "문채원", onboardingStep: 4, leaveTotal: 15, leaveUsed: 9 },
  { id: "E-1002", name: "박도윤", role: "백엔드 엔지니어", department: "엔지니어링", status: "온보딩", location: "서울", employment: "정규직", email: "doyoon.park@example.com", joined: "2026-09-01", manager: "오민재", onboardingStep: 1, leaveTotal: 4, leaveUsed: 0 },
  { id: "E-1003", name: "이하은", role: "세일즈 매니저", department: "세일즈", status: "재직", location: "부산", employment: "정규직", email: "haeun.lee@example.com", joined: "2021-11-15", manager: "황보람", onboardingStep: 4, leaveTotal: 17, leaveUsed: 6 },
  { id: "E-1004", name: "최지훈", role: "프런트엔드 엔지니어", department: "엔지니어링", status: "온보딩", location: "원격", employment: "정규직", email: "jihoon.choi@example.com", joined: "2026-08-25", manager: "오민재", onboardingStep: 2, leaveTotal: 4, leaveUsed: 1 },
  { id: "E-1005", name: "정예린", role: "인사 담당자", department: "인사", status: "휴직", location: "서울", employment: "정규직", email: "yerin.jung@example.com", joined: "2022-05-10", manager: "황보람", onboardingStep: 4, leaveTotal: 16, leaveUsed: 12, returnOn: "2027-01-04" },
  { id: "E-1006", name: "한지민", role: "QA 엔지니어", department: "엔지니어링", status: "재직", location: "대전", employment: "정규직", email: "jimin.han@example.com", joined: "2024-01-20", manager: "오민재", onboardingStep: 4, leaveTotal: 15, leaveUsed: 4 },
  { id: "E-1007", name: "오민재", role: "엔지니어링 리드", department: "엔지니어링", status: "재직", location: "서울", employment: "정규직", email: "minjae.oh@example.com", joined: "2019-06-03", manager: "황보람", onboardingStep: 4, leaveTotal: 18, leaveUsed: 10 },
  { id: "E-1008", name: "문채원", role: "디자인 리드", department: "디자인", status: "재직", location: "서울", employment: "정규직", email: "chaewon.moon@example.com", joined: "2020-02-17", manager: "황보람", onboardingStep: 4, leaveTotal: 18, leaveUsed: 7 },
  { id: "E-1009", name: "서준영", role: "데이터 분석가", department: "엔지니어링", status: "재직", location: "원격", employment: "정규직", email: "junyoung.seo@example.com", joined: "2022-09-05", manager: "오민재", onboardingStep: 4, leaveTotal: 16, leaveUsed: 11 },
  { id: "E-1010", name: "남궁현", role: "마케팅 매니저", department: "마케팅", status: "재직", location: "서울", employment: "정규직", email: "hyun.namgung@example.com", joined: "2023-07-10", manager: "황보람", onboardingStep: 4, leaveTotal: 15, leaveUsed: 3 },
  { id: "E-1011", name: "배수아", role: "콘텐츠 마케터", department: "마케팅", status: "온보딩", location: "서울", employment: "계약직", email: "sua.bae@example.com", joined: "2026-09-08", manager: "남궁현", onboardingStep: 0, leaveTotal: 4, leaveUsed: 0 },
  { id: "E-1012", name: "임태호", role: "재무 담당자", department: "재무", status: "재직", location: "서울", employment: "정규직", email: "taeho.lim@example.com", joined: "2021-04-01", manager: "황보람", onboardingStep: 4, leaveTotal: 17, leaveUsed: 13 },
  { id: "E-1013", name: "권나래", role: "세일즈 매니저", department: "세일즈", status: "재직", location: "부산", employment: "정규직", email: "narae.kwon@example.com", joined: "2024-05-13", manager: "이하은", onboardingStep: 4, leaveTotal: 15, leaveUsed: 8 },
  { id: "E-1014", name: "황보람", role: "피플 파트너", department: "인사", status: "재직", location: "서울", employment: "정규직", email: "boram.hwang@example.com", joined: "2020-10-05", manager: "—", onboardingStep: 4, leaveTotal: 18, leaveUsed: 5 },
];

// 근속 기간. 3년 6개월, 19일 형식
export function tenureLabel(joined: string): string {
  const months = today.diff(dayjs(joined), "month");
  if (months < 1) return `${Math.max(0, today.diff(dayjs(joined), "day"))}일`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (years === 0) return `${rest}개월`;
  return rest === 0 ? `${years}년` : `${years}년 ${rest}개월`;
}

export const leaveLeft = (e: Employee): number => Math.max(0, e.leaveTotal - e.leaveUsed);

// 온보딩 진행률(%), 완료 단계를 전체 단계로 나눈 값
export const onboardingPercent = (e: Employee): number =>
  Math.round((Math.min(e.onboardingStep, ONBOARDING_STEPS.length) / ONBOARDING_STEPS.length) * 100);

// 휴가

export type LeaveType = "연차" | "병가" | "경조사";
export type LeaveStatus = "대기" | "승인" | "반려";
export const LEAVE_TYPES: LeaveType[] = ["연차", "병가", "경조사"];

export interface LeaveRequest {
  id: string;
  employeeId: string;
  type: LeaveType;
  // ISO 형식 시작일과 종료일
  start: string;
  end: string;
  reason: string;
  status: LeaveStatus;
  // 상대 시각 표시. 2시간 전, 어제 17:40 형식이며 목업이라 텍스트 고정
  requestedLabel: string;
}

export const LEAVE_REQUESTS: LeaveRequest[] = [
  { id: "LV-212", employeeId: "E-1001", type: "연차", start: "2026-09-22", end: "2026-09-24", reason: "가족 여행", status: "대기", requestedLabel: "2시간 전" },
  { id: "LV-211", employeeId: "E-1006", type: "병가", start: "2026-09-21", end: "2026-09-21", reason: "병원 진료", status: "대기", requestedLabel: "오늘 08:12" },
  { id: "LV-210", employeeId: "E-1003", type: "경조사", start: "2026-09-28", end: "2026-09-30", reason: "동생 결혼식", status: "대기", requestedLabel: "어제 17:40" },
  { id: "LV-209", employeeId: "E-1009", type: "연차", start: "2026-09-25", end: "2026-09-25", reason: "개인 사정", status: "대기", requestedLabel: "어제 11:05" },
  { id: "LV-208", employeeId: "E-1012", type: "연차", start: "2026-09-23", end: "2026-09-25", reason: "분기 결산 뒤 휴식", status: "승인", requestedLabel: "9월 15일" },
  { id: "LV-207", employeeId: "E-1007", type: "연차", start: "2026-09-14", end: "2026-09-16", reason: "이사", status: "승인", requestedLabel: "9월 7일" },
  { id: "LV-206", employeeId: "E-1010", type: "연차", start: "2026-09-18", end: "2026-09-18", reason: "개인 사정", status: "승인", requestedLabel: "9월 11일" },
  { id: "LV-205", employeeId: "E-1004", type: "연차", start: "2026-09-10", end: "2026-09-10", reason: "은행 업무", status: "승인", requestedLabel: "9월 3일" },
  { id: "LV-204", employeeId: "E-1013", type: "병가", start: "2026-09-08", end: "2026-09-09", reason: "독감", status: "승인", requestedLabel: "9월 8일" },
  { id: "LV-203", employeeId: "E-1008", type: "연차", start: "2026-09-29", end: "2026-10-02", reason: "장기 휴가", status: "반려", requestedLabel: "9월 12일" },
  { id: "LV-202", employeeId: "E-1014", type: "경조사", start: "2026-09-04", end: "2026-09-04", reason: "조부상", status: "승인", requestedLabel: "9월 3일" },
];

const isWeekend = (d: Dayjs): boolean => d.day === 0 || d.day === 6;

// 휴가가 덮는 근무일 목록, 주말 제외 ISO 형식
export function leaveDates(leave: Pick<LeaveRequest, "start" | "end">): string[] {
  const out: string[] = [];
  const end = dayjs(leave.end);
  for (let d = dayjs(leave.start); !d.isAfter(end, "day"); d = d.add(1, "day")) {
    if (!isWeekend(d)) out.push(d.format("YYYY-MM-DD"));
  }
  return out;
}

export const leaveDays = (leave: Pick<LeaveRequest, "start" | "end">): number => leaveDates(leave).length;

export function leaveRangeLabel(leave: Pick<LeaveRequest, "start" | "end">): string {
  return leave.start === leave.end
    ? dayLabel(leave.start)
    : `${shortDayLabel(leave.start)} ~ ${shortDayLabel(leave.end)}`;
}

// 해당 날짜의 휴가 목록. 반려 제외, 승인과 대기만 표시
export function leavesOn(leaves: LeaveRequest[], iso: string): LeaveRequest[] {
  return leaves.filter((l) => l.status !== "반려" && leaveDates(l).includes(iso));
}

// 채용

export const HIRING_STAGES = ["서류 심사", "1차 면접", "2차 면접", "오퍼", "입사"] as const;
export type HiringStage = (typeof HIRING_STAGES)[number];

export interface Position {
  id: string;
  title: string;
  department: Department;
  // 채용 담당자 이름
  owner: string;
  headcount: number;
  // 공고 마감일, ISO 형식
  closesOn: string;
}

export const POSITIONS: Position[] = [
  { id: "JOB-31", title: "시니어 백엔드 엔지니어", department: "엔지니어링", owner: "오민재", headcount: 2, closesOn: "2026-10-02" },
  { id: "JOB-30", title: "프로덕트 디자이너", department: "디자인", owner: "문채원", headcount: 1, closesOn: "2026-09-26" },
  { id: "JOB-29", title: "데이터 분석가", department: "엔지니어링", owner: "서준영", headcount: 1, closesOn: "2026-10-16" },
  { id: "JOB-28", title: "프런트엔드 엔지니어", department: "엔지니어링", owner: "오민재", headcount: 1, closesOn: "2026-10-09" },
  { id: "JOB-27", title: "세일즈 매니저", department: "세일즈", owner: "이하은", headcount: 2, closesOn: "2026-09-30" },
];

export type CandidateSource = "직접 지원" | "사내 추천" | "채용 사이트" | "헤드헌터";

export interface CandidateEvent {
  kind: "면접" | "회신 기한" | "입사 예정";
  label: string;
  // ISO 날짜시각
  at: string;
  mode?: "화상" | "대면";
  interviewer?: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  positionId: string;
  stage: HiringStage;
  // 전형에서 탈락한 후보자. 단계는 탈락한 시점에 고정
  rejected?: boolean;
  // ISO 날짜
  applied: string;
  // 면접관 평균 평점. 0.5 단위
  rating: number;
  experienceYears: number;
  currentCompany: string;
  source: CandidateSource;
  next?: CandidateEvent;
  // 면접관 메모, 최신순 정렬
  notes: { by: string; at: string; text: string }[];
}

export const CANDIDATES: Candidate[] = [
  { id: "CAND-318", name: "오세현", email: "sehyun.oh@example.com", positionId: "JOB-31", stage: "2차 면접", applied: "2026-08-20", rating: 4.5, experienceYears: 8, currentCompany: "핀테크 스타트업", source: "사내 추천", next: { kind: "면접", label: "2차 면접 · 시스템 설계", at: "2026-09-22T14:00", mode: "화상", interviewer: "오민재" }, notes: [{ by: "오민재", at: "2026-09-11", text: "결제 시스템 장애 대응 경험이 구체적이에요. 설계 면접에서 트레이드오프 설명을 더 들어 보고 싶어요." }, { by: "서준영", at: "2026-09-04", text: "코딩 테스트 상위권. 테스트 코드까지 챙겼어요." }] },
  { id: "CAND-317", name: "강나은", email: "naeun.kang@example.com", positionId: "JOB-30", stage: "오퍼", applied: "2026-08-12", rating: 5, experienceYears: 6, currentCompany: "커머스 플랫폼", source: "직접 지원", next: { kind: "회신 기한", label: "오퍼 회신 기한", at: "2026-09-24T18:00" }, notes: [{ by: "문채원", at: "2026-09-15", text: "포트폴리오의 디자인 시스템 이관 사례가 우리 상황과 거의 같아요. 바로 오퍼 진행." }, { by: "김서연", at: "2026-09-02", text: "과제 발표가 명료했고 피드백을 받아들이는 태도가 좋았어요." }] },
  { id: "CAND-316", name: "윤태양", email: "taeyang.yoon@example.com", positionId: "JOB-29", stage: "1차 면접", applied: "2026-09-01", rating: 3.5, experienceYears: 3, currentCompany: "리서치 회사", source: "채용 사이트", next: { kind: "면접", label: "1차 면접 · 실무", at: "2026-09-23T10:30", mode: "대면", interviewer: "서준영" }, notes: [{ by: "서준영", at: "2026-09-09", text: "SQL 은 탄탄해요. 실험 설계 경험은 면접에서 확인이 필요해요." }] },
  { id: "CAND-315", name: "임수아", email: "sua.lim@example.com", positionId: "JOB-28", stage: "서류 심사", applied: "2026-09-10", rating: 0, experienceYears: 2, currentCompany: "에이전시", source: "채용 사이트", notes: [] },
  { id: "CAND-314", name: "배준호", email: "junho.bae@example.com", positionId: "JOB-27", stage: "1차 면접", applied: "2026-09-05", rating: 4, experienceYears: 5, currentCompany: "SaaS 영업팀", source: "헤드헌터", next: { kind: "면접", label: "1차 면접 · 실무", at: "2026-09-21T16:00", mode: "화상", interviewer: "이하은" }, notes: [{ by: "이하은", at: "2026-09-12", text: "엔터프라이즈 계약 경험이 많아요. 부산 근무 가능 여부를 확인해야 해요." }] },
  { id: "CAND-313", name: "조하린", email: "harin.cho@example.com", positionId: "JOB-31", stage: "서류 심사", applied: "2026-09-14", rating: 0, experienceYears: 7, currentCompany: "게임 회사", source: "직접 지원", notes: [] },
  { id: "CAND-312", name: "유승우", email: "seungwoo.yu@example.com", positionId: "JOB-31", stage: "1차 면접", applied: "2026-09-02", rating: 3, experienceYears: 9, currentCompany: "SI 업체", source: "채용 사이트", next: { kind: "면접", label: "1차 면접 · 실무", at: "2026-09-24T11:00", mode: "화상", interviewer: "오민재" }, notes: [{ by: "오민재", at: "2026-09-10", text: "경력은 길지만 최근 3년은 관리 업무 위주였어요. 코드 리뷰 과제로 확인할게요." }] },
  { id: "CAND-311", name: "신예원", email: "yewon.shin@example.com", positionId: "JOB-30", stage: "2차 면접", applied: "2026-08-18", rating: 4, experienceYears: 4, currentCompany: "핀테크 스타트업", source: "사내 추천", next: { kind: "면접", label: "2차 면접 · 컬처핏", at: "2026-09-25T15:00", mode: "대면", interviewer: "문채원" }, notes: [{ by: "문채원", at: "2026-09-08", text: "모션 작업물이 인상적이에요. 협업 방식은 2차에서 더 물어볼게요." }] },
  { id: "CAND-310", name: "곽도현", email: "dohyun.kwak@example.com", positionId: "JOB-28", stage: "서류 심사", applied: "2026-09-16", rating: 0, experienceYears: 4, currentCompany: "미디어 회사", source: "직접 지원", notes: [] },
  { id: "CAND-309", name: "채유나", email: "yuna.chae@example.com", positionId: "JOB-27", stage: "오퍼", applied: "2026-08-05", rating: 4.5, experienceYears: 6, currentCompany: "물류 스타트업", source: "헤드헌터", next: { kind: "회신 기한", label: "오퍼 회신 기한", at: "2026-09-22T18:00" }, notes: [{ by: "이하은", at: "2026-09-14", text: "연봉 협의가 마무리 단계예요. 입사일은 10월 중순 희망." }] },
  { id: "CAND-308", name: "표지석", email: "jiseok.pyo@example.com", positionId: "JOB-29", stage: "서류 심사", applied: "2026-09-17", rating: 0, experienceYears: 1, currentCompany: "대학원", source: "채용 사이트", notes: [] },
  { id: "CAND-307", name: "길은채", email: "eunchae.gil@example.com", positionId: "JOB-27", stage: "입사", applied: "2026-07-28", rating: 5, experienceYears: 7, currentCompany: "핀테크 영업팀", source: "사내 추천", next: { kind: "입사 예정", label: "입사 예정", at: "2026-10-01T09:30" }, notes: [{ by: "이하은", at: "2026-09-01", text: "오퍼 수락. 10월 1일 입사로 확정했어요." }] },
  { id: "CAND-306", name: "마동규", email: "donggyu.ma@example.com", positionId: "JOB-31", stage: "1차 면접", rejected: true, applied: "2026-08-10", rating: 2, experienceYears: 5, currentCompany: "통신사", source: "채용 사이트", notes: [{ by: "오민재", at: "2026-08-27", text: "분산 시스템 기초 질문에서 막혔어요. 이번 공고와는 맞지 않아요." }] },
  { id: "CAND-305", name: "하윤서", email: "yunseo.ha@example.com", positionId: "JOB-28", stage: "1차 면접", applied: "2026-09-08", rating: 3.5, experienceYears: 3, currentCompany: "에듀테크", source: "직접 지원", next: { kind: "면접", label: "1차 면접 · 실무", at: "2026-09-25T17:00", mode: "화상", interviewer: "최지훈" }, notes: [{ by: "오민재", at: "2026-09-15", text: "접근성 개선 사례가 좋아요. 상태 관리 설계를 더 물어봐 주세요." }] },
];

export const positionOf = (c: Candidate): Position | undefined => POSITIONS.find((p) => p.id === c.positionId);

export const isActive = (c: Candidate): boolean => !c.rejected && c.stage !== "입사";

export const stageCount = (candidates: Candidate[], stage: HiringStage): number =>
  candidates.filter((c) => !c.rejected && c.stage === stage).length;

// 다음 단계. 마지막 단계면 null
export function nextStage(stage: HiringStage): HiringStage | null {
  const i = HIRING_STAGES.indexOf(stage);
  return i >= 0 && i < HIRING_STAGES.length - 1 ? HIRING_STAGES[i + 1] : null;
}

// 마감까지 남은 날짜, D-6, 오늘 마감 등 표시
export function ddayLabel(iso: string): string {
  const diff = dayjs(iso).startOf("day").diff(today.startOf("day"), "day");
  if (diff < 0) return "마감";
  return diff === 0 ? "오늘 마감" : `D-${diff}`;
}

export const daysUntil = (iso: string): number => dayjs(iso).startOf("day").diff(today.startOf("day"), "day");

// 최근 8주 주간 지원자 수. 후보자 지원일 기준 집계, 주 시작 월요일
export function weeklyApplicants(candidates: Candidate[]): { week: string; count: number }[] {
  // dayjs day는 일요일=0, 월요일 시작으로 변환
  const mondayOf = (d: Dayjs): Dayjs => d.subtract((d.day + 6) % 7, "day").startOf("day");
  const last = mondayOf(today);
  return Array.from({ length: 8 }, (_, i) => {
    const start = last.subtract(7 * (7 - i), "day");
    const end = start.add(7, "day");
    const count = candidates.filter((c) => {
      const a = dayjs(c.applied);
      return !a.isBefore(start) && a.isBefore(end);
    }).length;
    return { week: start.format("M/D"), count };
  });
}
