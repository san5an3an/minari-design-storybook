export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: "입문" | "중급" | "심화";
  price: number;
  rating: number;
  students: number;
  lessons: { title: string; minutes: number; done: boolean }[];
}

export const COURSES: Course[] = [
  {
    id: "co1", title: "실전 타이포그래피 가이드", instructor: "김하늘", category: "디자인",
    level: "중급", price: 88000, rating: 4.8, students: 1204,
    lessons: [
      { title: "글자 크기 스케일 정하기", minutes: 18, done: true },
      { title: "줄 간격과 자간", minutes: 22, done: true },
      { title: "가변 폭 서체 다루기", minutes: 26, done: false },
      { title: "실습: 랜딩 페이지 타이틀", minutes: 31, done: false },
    ],
  },
  {
    id: "co2", title: "처음 시작하는 색채 이론", instructor: "박서준", category: "디자인",
    level: "입문", price: 0, rating: 4.6, students: 3320,
    lessons: [
      { title: "색상·채도·명도", minutes: 15, done: false },
      { title: "보색과 배색", minutes: 20, done: false },
      { title: "접근성과 대비", minutes: 24, done: false },
    ],
  },
  {
    id: "co3", title: "리액트로 짓는 대시보드", instructor: "이도윤", category: "개발",
    level: "심화", price: 132000, rating: 4.9, students: 890,
    lessons: [
      { title: "차트 라이브러리 고르기", minutes: 19, done: true },
      { title: "실시간 데이터 바인딩", minutes: 34, done: false },
      { title: "성능 최적화", minutes: 28, done: false },
      { title: "다크 모드 대응", minutes: 21, done: false },
      { title: "배포와 모니터링", minutes: 25, done: false },
    ],
  },
  {
    id: "co4", title: "제품 사진 조명 기초", instructor: "최유진", category: "사진",
    level: "입문", price: 45000, rating: 4.5, students: 610,
    lessons: [
      { title: "자연광 vs 인공광", minutes: 17, done: false },
      { title: "반사판 활용법", minutes: 14, done: false },
    ],
  },
  {
    // 같은 강사 강좌 2개 이상 확보용 두 번째 강좌
    id: "co5", title: "브랜드 로고타입 만들기", instructor: "김하늘", category: "디자인",
    level: "심화", price: 96000, rating: 4.7, students: 742,
    lessons: [
      { title: "레터마크 vs 워드마크", minutes: 16, done: false },
      { title: "곡선과 그리드 정렬", minutes: 24, done: false },
      { title: "벡터로 다듬기", minutes: 20, done: false },
    ],
  },
];

export interface EnrolledCourse {
  courseId: string;
  progressPercent: number;
  lastWatchedLabel: string;
  // 최근순 정렬값, 작을수록 최근이며 0은 오늘. 표시용 필드는 정렬에 쓸 수 없음
  daysSinceWatched: number;
}

// 수강 목록 확장. co5 포함해야 CourseDetailScreen 강좌 토글 2건 표시
export const ENROLLED: EnrolledCourse[] = [
  { courseId: "co1", progressPercent: 50, lastWatchedLabel: "2일 전", daysSinceWatched: 2 },
  { courseId: "co3", progressPercent: 20, lastWatchedLabel: "오늘", daysSinceWatched: 0 },
  { courseId: "co5", progressPercent: 75, lastWatchedLabel: "1일 전", daysSinceWatched: 1 },
  { courseId: "co2", progressPercent: 10, lastWatchedLabel: "4일 전", daysSinceWatched: 4 },
];

export interface PaymentRecord {
  id: string;
  courseTitle: string;
  amount: number;
  dateLabel: string;
  method: string;
}

// 결제수단 최소 세 종류 사용. 하나뿐이면 파이차트가 조각 하나로 의미 없음
export const PAYMENTS: PaymentRecord[] = [
  { id: "pay1", courseTitle: "실전 타이포그래피 가이드", amount: 88000, dateLabel: "2026-08-02", method: "카드 결제" },
  { id: "pay2", courseTitle: "리액트로 짓는 대시보드", amount: 132000, dateLabel: "2026-09-01", method: "카드 결제" },
  { id: "pay3", courseTitle: "브랜드 로고타입 만들기", amount: 96000, dateLabel: "2026-08-14", method: "카카오페이" },
  { id: "pay4", courseTitle: "제품 사진 조명 기초", amount: 45000, dateLabel: "2026-07-28", method: "무통장입금" },
  { id: "pay5", courseTitle: "실전 타이포그래피 가이드", amount: 88000, dateLabel: "2026-06-11", method: "카카오페이" },
];

export interface CourseReview {
  id: string;
  courseId: string;
  author: string;
  rating: number;
  comment: string;
  dateLabel: string;
}

export const COURSE_REVIEWS: CourseReview[] = [
  { id: "cr1", courseId: "co1", author: "정우진", rating: 5, comment: "실무에서 바로 쓸 수 있는 타이포그래피 기준이 정리돼서 좋았어요.", dateLabel: "3일 전" },
  { id: "cr2", courseId: "co1", author: "한소민", rating: 4, comment: "가변 폭 서체 파트가 어려웠지만 설명이 꼼꼼해요.", dateLabel: "1주 전" },
  { id: "cr3", courseId: "co1", author: "배지훈", rating: 5, comment: "랜딩 페이지 실습이 특히 도움됐습니다.", dateLabel: "2주 전" },
  { id: "cr4", courseId: "co2", author: "윤아름", rating: 5, comment: "색채 이론을 처음 배우는데도 쉽게 따라갔어요.", dateLabel: "5일 전" },
  { id: "cr5", courseId: "co2", author: "장현수", rating: 4, comment: "접근성 파트가 실무에 바로 적용할 만해요.", dateLabel: "2주 전" },
  { id: "cr6", courseId: "co3", author: "오세진", rating: 5, comment: "실시간 데이터 바인딩 예제가 특히 좋았어요.", dateLabel: "4일 전" },
  { id: "cr7", courseId: "co3", author: "김도영", rating: 5, comment: "성능 최적화 강의는 이 강좌가 최고예요.", dateLabel: "1주 전" },
  { id: "cr8", courseId: "co4", author: "임수빈", rating: 4, comment: "반사판 활용법을 보고 바로 촬영에 적용했어요.", dateLabel: "6일 전" },
  { id: "cr9", courseId: "co5", author: "최다은", rating: 5, comment: "레터마크와 워드마크 차이를 명확히 알게 됐어요.", dateLabel: "1주 전" },
];
