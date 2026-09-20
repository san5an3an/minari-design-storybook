// 문항 유형

export type QuestionType =
  | "short" // 단답형 Input
  | "long" // 장문형 Textarea
  | "single" // 객관식 단일선택, RadioGroup
  | "multi" // 복수 선택 체크박스, CheckboxGroup
  | "scale" // Slider 척도
  | "number" // 숫자 입력 필드
  | "select" // Select 드롭다운
  | "date"; // 날짜, Calendar와 Popover 조합

export interface ScaleConfig {
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
}

export interface NumberConfig {
  min: number;
  max: number;
  unit: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  required: boolean;
  options?: string[]; // single · multi · select
  scale?: ScaleConfig; // scale
  numberRange?: NumberConfig; // number
}

// 설문

export type SurveyStatus = "초안" | "진행중" | "마감";
export type Visibility = "전체공개" | "링크공개" | "비공개";

export interface Owner {
  name: string;
  role: string;
  email: string;
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  status: SurveyStatus;
  category: string;
  createdAt: string;
  deadline: string;
  targetResponses: number;
  owner: Owner;
  questions: Question[];
  tags: string[];
  visibility: Visibility;
  allowAnonymous: boolean;
  notifyOnResponse: boolean;
  accessCodeEnabled: boolean;
  accessCode: string;
}

export const CATEGORIES: readonly string[] = ["조직문화", "제품피드백", "이벤트", "복지", "교육", "고객경험", "기타"];

export const TAG_SUGGESTIONS: readonly string[] = ["익명", "필수설문", "경영진공유", "월간", "분기", "실험적", "전사공지"];

// 문항 유형 메타는 편집기 팔레트, 배지, 분석 헤더가 공유하는 단일 출처

export interface QuestionTypeMeta {
  type: QuestionType;
  label: string;
  hint: string;
}

export const QUESTION_TYPE_META: readonly QuestionTypeMeta[] = [
  { type: "short", label: "단답형", hint: "한 줄 텍스트 답변" },
  { type: "long", label: "장문형", hint: "여러 줄 텍스트 답변" },
  { type: "single", label: "객관식(단일선택)", hint: "옵션 중 하나만 선택" },
  { type: "multi", label: "체크박스(복수선택)", hint: "옵션 여러 개 선택 가능" },
  { type: "scale", label: "척도", hint: "1~5 등 범위 안에서 평가" },
  { type: "number", label: "숫자", hint: "숫자 값 입력" },
  { type: "select", label: "드롭다운", hint: "목록에서 하나 선택" },
  { type: "date", label: "날짜", hint: "달력에서 날짜 선택" },
];

export function questionTypeMeta(type: QuestionType): QuestionTypeMeta {
  return QUESTION_TYPE_META.find((m) => m.type === type) ?? QUESTION_TYPE_META[0];
}

// 새 문항 선택 시 기본값
export function createDefaultQuestion(type: QuestionType): Question {
  const id = `q-new-${Math.random.toString(36).slice(2, 8)}`;
  switch (type) {
    case "short":
      return { id, type, title: "새 단답형 질문", required: false };
    case "long":
      return { id, type, title: "새 장문형 질문", required: false };
    case "single":
      return { id, type, title: "새 객관식 질문", required: false, options: ["옵션 1", "옵션 2"] };
    case "multi":
      return { id, type, title: "새 체크박스 질문", required: false, options: ["옵션 1", "옵션 2"] };
    case "scale":
      return { id, type, title: "새 척도 질문", required: false, scale: { min: 1, max: 5, minLabel: "매우 불만족", maxLabel: "매우 만족" } };
    case "number":
      return { id, type, title: "새 숫자 질문", required: false, numberRange: { min: 0, max: 100, unit: "" } };
    case "select":
      return { id, type, title: "새 드롭다운 질문", required: false, options: ["옵션 1", "옵션 2"] };
    case "date":
      return { id, type, title: "새 날짜 질문", required: false };
  }
}

// 설문 생성기가 순환 사용하는 고정 문항 10개 풀. s1~s3은 전용 문항 사용

const QUESTION_POOL: readonly Omit<Question, "id">[] = [
  { type: "short", title: "이 설문에 대한 한 줄 소감을 적어주세요", required: false },
  { type: "long", title: "자유롭게 의견을 남겨주세요", required: false },
  { type: "single", title: "소속 부서를 선택해주세요", required: true, options: ["개발", "디자인", "마케팅", "운영", "기타"] },
  { type: "multi", title: "관심 있는 주제를 모두 선택해주세요", required: false, options: ["복지", "교육", "문화", "환경", "기술"] },
  { type: "scale", title: "전반적인 만족도를 평가해주세요", required: true, scale: { min: 1, max: 5, minLabel: "매우 불만족", maxLabel: "매우 만족" } },
  { type: "number", title: "예상 참여 가능 인원은 몇 명인가요?", required: false, numberRange: { min: 0, max: 100, unit: "명" } },
  { type: "select", title: "선호하는 시간대를 선택해주세요", required: false, options: ["오전", "오후", "저녁", "무관"] },
  { type: "date", title: "참여 가능한 날짜를 선택해주세요", required: false },
  { type: "single", title: "참여 의향이 있으신가요?", required: true, options: ["예", "아니오", "고민 중"] },
  { type: "short", title: "추가로 필요한 지원이 있다면 적어주세요", required: false },
];

function genQuestions(surveyId: string, count: number, offset: number): Question[] {
  const out: Question[] = [];
  for (let i = 0; i < count; i += 1) {
    const template = QUESTION_POOL[(i + offset) % QUESTION_POOL.length];
    out.push({ ...template, id: `${surveyId}-q${i + 1}` });
  }
  return out;
}

// s1: "9월 사내 문화 만족도 조사". 8문항, 문항 유형 8종을 전부 한 번씩 사용

const S1_QUESTIONS: readonly Question[] = [
  { id: "s1-q1", type: "single", title: "가장 만족스러운 사내 제도는 무엇인가요?", required: true, options: ["유연근무제", "리프레시 휴가", "사내 동호회 지원", "교육비 지원", "기타"] },
  { id: "s1-q2", type: "multi", title: "다음 중 자주 이용하는 사내 복지를 모두 선택해주세요", required: true, options: ["카페테리아", "헬스장", "심리상담", "도서구입비", "경조사비"] },
  { id: "s1-q3", type: "scale", title: "동료와의 협업 만족도를 평가해주세요", required: true, scale: { min: 1, max: 5, minLabel: "매우 불만족", maxLabel: "매우 만족" } },
  { id: "s1-q4", type: "number", title: "최근 3개월 내 초과근무 시간은 총 몇 시간인가요?", required: true, numberRange: { min: 0, max: 200, unit: "시간" } },
  { id: "s1-q5", type: "select", title: "선호하는 사내 공지 채널을 선택해주세요", required: false, options: ["이메일", "슬랙", "사내 게시판", "문자(SMS)"] },
  { id: "s1-q6", type: "date", title: "가장 최근에 휴가를 사용한 날짜는 언제인가요?", required: false },
  { id: "s1-q7", type: "short", title: "팀 문화에서 가장 자랑스러운 점을 한 줄로 적어주세요", required: true },
  { id: "s1-q8", type: "long", title: "팀 문화 개선을 위한 자유 의견을 남겨주세요", description: "익명으로 집계돼요.", required: false },
];

// s2: "신규 사이드 프로젝트 아이디어 공모". 4문항

const S2_QUESTIONS: readonly Question[] = [
  { id: "s2-q1", type: "single", title: "아이디어의 유형은 무엇인가요?", required: true, options: ["신규 서비스", "내부 도구", "프로세스 개선", "기타"] },
  { id: "s2-q2", type: "scale", title: "실현 가능성을 스스로 평가해주세요", required: true, scale: { min: 1, max: 5, minLabel: "낮음", maxLabel: "높음" } },
  { id: "s2-q3", type: "short", title: "아이디어 제목을 적어주세요", required: true },
  { id: "s2-q4", type: "long", title: "아이디어를 3줄 이내로 설명해주세요", required: true },
];

// s3: "리모트 근무 정책 개선 설문". 4문항

const S3_QUESTIONS: readonly Question[] = [
  { id: "s3-q1", type: "single", title: "선호하는 근무 형태는 무엇인가요?", required: true, options: ["완전 원격", "주 2~3회 출근", "완전 출근"] },
  { id: "s3-q2", type: "scale", title: "현재 원격근무 지원 수준에 얼마나 만족하시나요?", required: true, scale: { min: 1, max: 5, minLabel: "매우 불만족", maxLabel: "매우 만족" } },
  { id: "s3-q3", type: "select", title: "가장 필요한 지원을 선택해주세요", required: false, options: ["장비 지원", "화상회의 툴", "협업 프로세스", "커뮤니케이션"] },
  { id: "s3-q4", type: "short", title: "새 정책에 바라는 점을 한 줄로 적어주세요", required: false },
];

// 설문 목록 16건, 페이지당 8건, 총 2페이지

function owner(name: string, role: string, email: string): Owner {
  return { name, role, email };
}

export const SURVEYS: Survey[] = [
  {
    id: "s1", title: "9월 사내 문화 만족도 조사", description: "조직문화팀이 매월 진행하는 정기 만족도 조사예요.",
    status: "진행중", category: "조직문화", createdAt: "9월 1일", deadline: "9월 30일", targetResponses: 40,
    owner: owner("박서연", "조직문화팀", "seoyeon.park@forms.example"), questions: [...S1_QUESTIONS],
    tags: ["익명", "월간"], visibility: "전체공개", allowAnonymous: true, notifyOnResponse: true,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s2", title: "신규 사이드 프로젝트 아이디어 공모", description: "4분기 사내 해커톤에 앞서 아이디어를 모아요.",
    status: "진행중", category: "이벤트", createdAt: "9월 5일", deadline: "10월 10일", targetResponses: 30,
    owner: owner("김하늘", "프로덕트팀", "haneul.kim@forms.example"), questions: [...S2_QUESTIONS],
    tags: ["분기", "실험적"], visibility: "링크공개", allowAnonymous: false, notifyOnResponse: true,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s3", title: "리모트 근무 정책 개선 설문", description: "내년 근무 정책 개편을 위한 의견 수렴이에요.",
    status: "마감", category: "조직문화", createdAt: "8월 1일", deadline: "8월 31일", targetResponses: 50,
    owner: owner("이도윤", "인사팀", "doyoon.lee@forms.example"), questions: [...S3_QUESTIONS],
    tags: ["경영진공유", "전사공지"], visibility: "전체공개", allowAnonymous: true, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s4", title: "4분기 오프사이트 장소 투표", description: "팀 전체가 함께할 오프사이트 장소를 골라주세요.",
    status: "진행중", category: "이벤트", createdAt: "9월 15일", deadline: "9월 25일", targetResponses: 20,
    owner: owner("최민지", "운영팀", "minji.choi@forms.example"), questions: genQuestions("s4", 3, 6),
    tags: ["월간"], visibility: "링크공개", allowAnonymous: false, notifyOnResponse: true,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s5", title: "사내 카페 메뉴 선호도 조사", description: "10월 리뉴얼 예정인 사내 카페 메뉴 의견을 모아요.",
    status: "진행중", category: "복지", createdAt: "9월 10일", deadline: "9월 28일", targetResponses: 60,
    owner: owner("정우진", "복지팀", "woojin.jung@forms.example"), questions: genQuestions("s5", 4, 2),
    tags: [], visibility: "전체공개", allowAnonymous: true, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s6", title: "신입사원 온보딩 경험 피드백", description: "최근 입사한 동료들의 온보딩 경험을 들어봐요.",
    status: "마감", category: "교육", createdAt: "8월 5일", deadline: "8월 20일", targetResponses: 15,
    owner: owner("한소율", "인사팀", "soyul.han@forms.example"), questions: genQuestions("s6", 5, 0),
    tags: ["익명"], visibility: "비공개", allowAnonymous: true, notifyOnResponse: true,
    accessCodeEnabled: true, accessCode: "3719",
  },
  {
    id: "s7", title: "사내 도서 추천 설문", description: "다음 분기 사내 도서관에 들일 책을 추천해주세요.",
    status: "진행중", category: "교육", createdAt: "9월 12일", deadline: "10월 5일", targetResponses: 25,
    owner: owner("윤지호", "교육팀", "jiho.yoon@forms.example"), questions: genQuestions("s7", 2, 8),
    tags: ["실험적"], visibility: "전체공개", allowAnonymous: false, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s8", title: "디자인 시스템 사용성 피드백", description: "새 컴포넌트 라이브러리를 써본 소감을 알려주세요.",
    status: "진행중", category: "제품피드백", createdAt: "9월 8일", deadline: "9월 22일", targetResponses: 35,
    owner: owner("임채원", "디자인팀", "chaewon.lim@forms.example"), questions: genQuestions("s8", 4, 4),
    tags: ["필수설문"], visibility: "링크공개", allowAnonymous: false, notifyOnResponse: true,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s9", title: "재택근무 장비 지원 신청", description: "재택근무 장비 지원 신청과 만족도를 함께 받아요.",
    status: "마감", category: "복지", createdAt: "7월 20일", deadline: "8월 10일", targetResponses: 45,
    owner: owner("서지안", "총무팀", "jian.seo@forms.example"), questions: genQuestions("s9", 3, 5),
    tags: [], visibility: "전체공개", allowAnonymous: false, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s10", title: "팀빌딩 만족도 조사", description: "이번 분기 팀빌딩 행사 만족도를 확인해요.",
    status: "마감", category: "이벤트", createdAt: "8월 25일", deadline: "9월 3일", targetResponses: 30,
    owner: owner("강은우", "운영팀", "eunwoo.kang@forms.example"), questions: genQuestions("s10", 2, 3),
    tags: ["분기"], visibility: "전체공개", allowAnonymous: true, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s11", title: "신규 복지제도 수요 조사", description: "내년 신설을 검토 중인 복지제도 수요를 파악해요.",
    status: "초안", category: "복지", createdAt: "9월 19일", deadline: "10월 20일", targetResponses: 50,
    owner: owner("조유나", "복지팀", "yuna.jo@forms.example"), questions: genQuestions("s11", 3, 1),
    tags: ["경영진공유"], visibility: "비공개", allowAnonymous: false, notifyOnResponse: true,
    accessCodeEnabled: true, accessCode: "5820",
  },
  {
    id: "s12", title: "고객 지원 만족도(CSAT) 조사", description: "고객 문의 응대 만족도를 상시로 받아요.",
    status: "진행중", category: "고객경험", createdAt: "9월 1일", deadline: "12월 31일", targetResponses: 200,
    owner: owner("신태양", "고객지원팀", "taeyang.shin@forms.example"), questions: genQuestions("s12", 3, 7),
    tags: ["필수설문"], visibility: "링크공개", allowAnonymous: true, notifyOnResponse: true,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s13", title: "사무실 좌석 배치 개편 의견 수렴", description: "아직 문항을 만들지 않은 초안 설문이에요.",
    status: "초안", category: "기타", createdAt: "9월 20일", deadline: "10월 15일", targetResponses: 40,
    owner: owner("오지훈", "총무팀", "jihoon.oh@forms.example"), questions: [],
    tags: [], visibility: "비공개", allowAnonymous: false, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s14", title: "연말 행사 참석 여부 조사", description: "연말 행사 참석 인원을 미리 파악해요.",
    status: "진행중", category: "이벤트", createdAt: "9월 18일", deadline: "11월 1일", targetResponses: 80,
    owner: owner("배수아", "운영팀", "sua.bae@forms.example"), questions: genQuestions("s14", 3, 9),
    tags: ["전사공지"], visibility: "전체공개", allowAnonymous: false, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s15", title: "사내 교육 프로그램 수요조사", description: "다음 학기 사내 교육 커리큘럼 수요를 조사했어요.",
    status: "마감", category: "교육", createdAt: "7월 1일", deadline: "7월 15일", targetResponses: 60,
    owner: owner("홍시우", "교육팀", "siwoo.hong@forms.example"), questions: genQuestions("s15", 4, 0),
    tags: ["월간"], visibility: "전체공개", allowAnonymous: true, notifyOnResponse: false,
    accessCodeEnabled: false, accessCode: "",
  },
  {
    id: "s16", title: "협업툴 전환 의견 조사", description: "협업툴 전환을 검토하며 사전 의견을 모으는 초안이에요.",
    status: "초안", category: "제품피드백", createdAt: "9월 20일", deadline: "10월 30일", targetResponses: 70,
    owner: owner("남주원", "IT팀", "juwon.nam@forms.example"), questions: genQuestions("s16", 2, 5),
    tags: [], visibility: "링크공개", allowAnonymous: false, notifyOnResponse: true,
    accessCodeEnabled: false, accessCode: "",
  },
];

// 응답자 이름 풀, 최대 32명

const NAMES: readonly string[] = [
  "김하늘", "박서연", "이도윤", "최민지", "정우진", "한소율", "윤지호", "임채원",
  "서지안", "강은우", "조유나", "신태양", "오지훈", "배수아", "홍시우", "남주원",
  "문가은", "백승민", "류하준", "노은지", "권도현", "안소민", "황준서", "송지유",
  "유하람", "전예은", "곽민서", "심재현", "나윤슬", "표건우", "설아름", "감동혁",
];

// 응답

export interface Respondent {
  name: string;
  initial: string;
}

export interface Response {
  id: string;
  surveyId: string;
  respondent: Respondent;
  daysAgo: number; // 0 = 오늘
  completionSec: number;
  answers: Record<string, string | string[] | number>;
}

// 압축 행. 질문 순서대로 답 + 응답자 인덱스 + 경과일 + 소요초로 구성
interface CompactRow {
  n: number; // NAMES 인덱스
  d: number; // daysAgo
  t: number; // completionSec
  a: (string | string[] | number)[]; // 질문 순서에 맞춘 답
}

function toResponses(surveyId: string, questions: readonly Question[], rows: readonly CompactRow[]): Response[] {
  return rows.map((row, i) => {
    const answers: Record<string, string | string[] | number> = {};
    questions.forEach((q, qi) => {
      if (row.a[qi] !== undefined) answers[q.id] = row.a[qi];
    });
    const name = NAMES[row.n % NAMES.length];
    return {
      id: `${surveyId}-r${i + 1}`,
      surveyId,
      respondent: { name, initial: name[0] },
      daysAgo: row.d,
      completionSec: row.t,
      answers,
    };
  });
}

// single,multi[],scale,number,select,date,short,long
const S1_ROWS: readonly CompactRow[] = [
  { n: 0, d: 0, t: 210, a: ["유연근무제", ["카페테리아", "도서구입비"], 5, 6, "슬랙", "8월 3일", "동료들이 서로 배려하는 분위기예요", "회식 강요가 없어서 좋아요. 다만 신규 입사자 온보딩 자료가 더 있으면 좋겠어요."] },
  { n: 1, d: 0, t: 185, a: ["리프레시 휴가", ["헬스장"], 4, 12, "이메일", "8월 20일", "휴가를 눈치 안 보고 쓸 수 있어요", "리프레시 휴가 신청 절차를 간소화해주세요."] },
  { n: 2, d: 1, t: 260, a: ["유연근무제", ["카페테리아", "심리상담", "경조사비"], 4, 3, "슬랙", "7월 15일", "출퇴근 시간을 자유롭게 조절할 수 있어요", "" ] },
  { n: 3, d: 1, t: 150, a: ["교육비 지원", ["도서구입비"], 3, 20, "사내 게시판", "6월 28일", "성장을 지원하는 문화가 좋아요", "교육비 지원 한도를 상향해주세요."] },
  { n: 4, d: 1, t: 300, a: ["동호회 지원", ["카페테리아", "헬스장"], 5, 8, "슬랙", "9월 2일", "사내 동호회가 활발해요", "동호회 활동비 정산이 조금 늦어요."] },
  { n: 5, d: 2, t: 175, a: ["유연근무제", ["카페테리아"], 2, 32, "이메일", "5월 10일", "재택과 출근을 섞어 쓸 수 있어요", "초과근무가 많은 팀은 별도 보상이 필요해 보여요."] },
  { n: 6, d: 2, t: 220, a: ["리프레시 휴가", ["도서구입비", "경조사비"], 4, 5, "슬랙", "8월 29일", "쉼을 존중해주는 회사예요", ""] },
  { n: 7, d: 2, t: 190, a: ["유연근무제", ["카페테리아", "헬스장", "도서구입비"], 5, 0, "사내 게시판", "9월 10일", "동료 간 신뢰가 높아요", "협업툴 알림이 너무 많아요. 정리가 필요해요."] },
  { n: 8, d: 3, t: 240, a: ["기타", ["심리상담"], 3, 15, "슬랙", "4월 22일", "심리상담 지원이 든든해요", ""] },
  { n: 9, d: 3, t: 205, a: ["유연근무제", ["카페테리아", "도서구입비"], 4, 9, "이메일", "8월 5일", "자율적인 분위기가 마음에 들어요", "회의 없는 날을 늘려주세요."] },
  { n: 10, d: 3, t: 165, a: ["교육비 지원", ["헬스장", "경조사비"], 3, 18, "슬랙", "7월 1일", "배움을 응원하는 문화예요", ""] },
  { n: 11, d: 4, t: 280, a: ["리프레시 휴가", ["카페테리아"], 5, 4, "사내 게시판", "9월 8일", "번아웃 없이 일할 수 있어요", "리프레시 휴가를 반차로도 나눠 쓸 수 있으면 좋겠어요."] },
  { n: 12, d: 4, t: 195, a: ["동호회 지원", ["헬스장", "도서구입비"], 4, 22, "슬랙", "6월 14일", "동료들과 취미를 나눌 수 있어요", ""] },
  { n: 13, d: 4, t: 230, a: ["유연근무제", ["카페테리아", "심리상담"], 3, 11, "이메일", "8월 18일", "일과 삶의 균형이 잡혀가요", "초과근무 기록 방식이 헷갈려요."] },
  { n: 14, d: 5, t: 170, a: ["유연근무제", ["도서구입비"], 5, 2, "슬랙", "9월 5일", "믿고 맡겨주는 문화가 좋아요", ""] },
  { n: 15, d: 5, t: 250, a: ["리프레시 휴가", ["카페테리아", "헬스장", "경조사비"], 4, 27, "사내 게시판", "5월 30일", "쉬어야 할 때 확실히 쉴 수 있어요", "장기 근속자 리프레시 휴가를 늘려주세요."] },
  { n: 16, d: 5, t: 200, a: ["기타", ["심리상담", "도서구입비"], 2, 40, "슬랙", "3월 12일", "부서 간 소통이 아쉬워요", "부서 간 협업 프로세스를 정리해주세요."] },
  { n: 17, d: 6, t: 215, a: ["교육비 지원", ["카페테리아"], 4, 7, "이메일", "8월 25일", "성장 기회가 많아요", ""] },
  { n: 18, d: 6, t: 180, a: ["유연근무제", ["헬스장", "경조사비"], 5, 13, "슬랙", "9월 1일", "구성원을 존중하는 회사예요", "사내 카페 좌석이 부족해요."] },
  { n: 19, d: 7, t: 260, a: ["동호회 지원", ["카페테리아", "도서구입비"], 3, 24, "사내 게시판", "7월 22일", "동호회로 팀 밖 동료도 알게 됐어요", ""] },
  { n: 20, d: 7, t: 190, a: ["유연근무제", ["카페테리아", "심리상담", "도서구입비"], 4, 16, "슬랙", "8월 12일", "자유로운 분위기가 자랑이에요", "회의실 예약이 자주 겹쳐요."] },
  { n: 21, d: 8, t: 235, a: ["리프레시 휴가", ["헬스장"], 5, 1, "이메일", "9월 15일", "번아웃 관리가 잘 돼요", ""] },
  { n: 22, d: 9, t: 155, a: ["유연근무제", ["카페테리아", "경조사비"], 3, 28, "슬랙", "6월 3일", "수평적인 분위기가 좋아요", "직급 간 격차가 아직 남아있어요."] },
  { n: 23, d: 11, t: 245, a: ["교육비 지원", ["도서구입비", "심리상담"], 4, 10, "사내 게시판", "8월 30일", "배우고 싶은 걸 지원받을 수 있어요", ""] },
];

// s2 응답 16건: [single, scale, short, long]
const S2_ROWS: readonly CompactRow[] = [
  { n: 3, d: 0, t: 140, a: ["신규 서비스", 4, "사내 헬스 챌린지 매칭 서비스", "동료와 운동 목표를 공유하고 서로 응원할 수 있는 사내 서비스예요."] },
  { n: 5, d: 0, t: 190, a: ["내부 도구", 5, "회의록 자동 요약 봇", "회의 녹음을 넣으면 요약과 액션 아이템을 뽑아주는 슬랙 봇이에요."] },
  { n: 7, d: 1, t: 120, a: ["프로세스 개선", 3, "휴가 신청 원클릭화", "결재선을 자동으로 태워주는 휴가 신청 플로우예요."] },
  { n: 9, d: 1, t: 210, a: ["신규 서비스", 4, "신입 온보딩 챗봇", "자주 묻는 질문에 답해주는 온보딩 전용 챗봇이에요."] },
  { n: 11, d: 2, t: 175, a: ["내부 도구", 3, "디자인 토큰 검증기", "PR에서 하드코딩 색상을 자동으로 잡아주는 린터예요."] },
  { n: 13, d: 2, t: 160, a: ["기타", 2, "사내 굿즈 스토어", "포인트로 사내 굿즈를 살 수 있는 미니 스토어예요."] },
  { n: 15, d: 3, t: 230, a: ["프로세스 개선", 4, "코드리뷰 로테이션 자동화", "리뷰어를 공정하게 자동 배정해주는 도구예요."] },
  { n: 17, d: 3, t: 145, a: ["신규 서비스", 5, "사내 세미나 매칭 플랫폼", "관심 주제로 세미나를 열고 참가자를 모으는 플랫폼이에요."] },
  { n: 19, d: 4, t: 200, a: ["내부 도구", 4, "장애 대응 타임라인 봇", "인시던트 발생 시 타임라인을 자동 기록하는 봇이에요."] },
  { n: 21, d: 4, t: 130, a: ["프로세스 개선", 3, "회의실 스마트 예약", "빈 회의실을 자동으로 추천해주는 예약 시스템이에요."] },
  { n: 0, d: 5, t: 185, a: ["신규 서비스", 5, "사내 캐리어 코칭 매칭", "선배 구성원과 커리어 상담을 매칭하는 서비스예요."] },
  { n: 2, d: 6, t: 165, a: ["기타", 3, "사내 분실물 게시판", "사내에서 분실물을 등록하고 찾는 작은 게시판이에요."] },
  { n: 4, d: 6, t: 220, a: ["내부 도구", 4, "배포 체크리스트 자동화", "배포 전 체크리스트를 자동으로 검증해주는 도구예요."] },
  { n: 6, d: 7, t: 150, a: ["프로세스 개선", 2, "출장 정산 간소화", "영수증 사진만 올리면 정산이 끝나는 플로우예요."] },
  { n: 8, d: 8, t: 195, a: ["신규 서비스", 4, "사내 스터디 매칭", "같은 관심사 스터디원을 모아주는 매칭 서비스예요."] },
  { n: 10, d: 10, t: 175, a: ["내부 도구", 5, "API 문서 자동 생성기", "코드 주석에서 API 문서를 자동으로 뽑아주는 도구예요."] },
];

// s3 응답 8건: [single, scale, select, short]
const S3_ROWS: readonly CompactRow[] = [
  { n: 12, d: 2, t: 110, a: ["완전 원격", 3, "장비 지원", "모니터·의자 지원을 더 넉넉하게 해주세요."] },
  { n: 14, d: 3, t: 95, a: ["주 2~3회 출근", 4, "화상회의 툴", "화상회의 끊김이 잦아 개선이 필요해요."] },
  { n: 16, d: 4, t: 130, a: ["완전 원격", 2, "협업 프로세스", "비동기 커뮤니케이션 가이드가 있으면 좋겠어요."] },
  { n: 18, d: 5, t: 105, a: ["주 2~3회 출근", 5, "커뮤니케이션", "지금 수준으로도 충분히 만족해요."] },
  { n: 20, d: 8, t: 150, a: ["완전 출근", 3, "장비 지원", "사무실 회의실 방음이 아쉬워요."] },
  { n: 22, d: 10, t: 120, a: ["완전 원격", 4, "화상회의 툴", "화상 배경 정책이 좀 더 자유로우면 좋겠어요."] },
  { n: 24, d: 14, t: 140, a: ["주 2~3회 출근", 3, "협업 프로세스", "출근일 일정 공유가 더 잘 됐으면 해요."] },
  { n: 26, d: 20, t: 100, a: ["완전 원격", 4, "커뮤니케이션", "지금 정책 그대로 유지해주셨으면 해요."] },
];

export const RESPONSES_BY_SURVEY: Readonly<Record<string, readonly Response[]>> = {
  s1: toResponses("s1", S1_QUESTIONS, S1_ROWS),
  s2: toResponses("s2", S2_QUESTIONS, S2_ROWS),
  s3: toResponses("s3", S3_QUESTIONS, S3_ROWS),
};

// 테스트 응답 추가 시 순환 사용할 고정 예비 응답 풀
const EXTRA_ROWS: Readonly<Record<string, readonly CompactRow[]>> = {
  s1: [
    { n: 27, d: 0, t: 188, a: ["유연근무제", ["카페테리아", "헬스장"], 4, 6, "슬랙", "9월 18일", "새로 온 팀원도 잘 적응하고 있어요", "환영해주셔서 감사해요."] },
    { n: 28, d: 0, t: 205, a: ["리프레시 휴가", ["도서구입비"], 5, 3, "이메일", "9월 19일", "쉴 때 확실히 쉬어요", ""] },
  ],
  s2: [
    { n: 29, d: 0, t: 168, a: ["신규 서비스", 4, "사내 카풀 매칭", "출퇴근길이 비슷한 동료를 매칭해주는 서비스예요."] },
  ],
  s3: [
    { n: 30, d: 0, t: 118, a: ["완전 원격", 4, "화상회의 툴", "지금도 충분히 만족스러워요."] },
  ],
};

const EXTRA_QUESTIONS: Readonly<Record<string, readonly Question[]>> = { s1: S1_QUESTIONS, s2: S2_QUESTIONS, s3: S3_QUESTIONS };

export const EXTRA_RESPONSES_BY_SURVEY: Readonly<Record<string, readonly Response[]>> = Object.fromEntries(
  Object.entries(EXTRA_ROWS).map(([surveyId, rows]): [string, Response[]] => [surveyId, toResponses(surveyId, EXTRA_QUESTIONS[surveyId] ?? [], rows)]),
);

// 표시용 헬퍼

export function formatDaysAgo(daysAgo: number): string {
  if (daysAgo === 0) return "오늘";
  if (daysAgo === 1) return "1일 전";
  return `${daysAgo}일 전`;
}

export function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m > 0 ? `${m}분 ${s}초` : `${s}초`;
}

export function surveyById(surveys: readonly Survey[], id: string | undefined): Survey {
  return surveys.find((s) => s.id === id) ?? surveys[0];
}

// 응답 수는 저장하지 않고 RESPONSES_BY_SURVEY 에서 항상 계산. 별도 저장 시 값이 어긋날 수 있음
export function responseCountOf(surveyId: string): number {
  return RESPONSES_BY_SURVEY[surveyId]?.length ?? 0;
}
