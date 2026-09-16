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
];

export interface EnrolledCourse {
  courseId: string;
  progressPercent: number;
  lastWatchedLabel: string;
}

export const ENROLLED: EnrolledCourse[] = [
  { courseId: "co1", progressPercent: 50, lastWatchedLabel: "2일 전" },
  { courseId: "co3", progressPercent: 20, lastWatchedLabel: "오늘" },
];

export interface PaymentRecord {
  id: string;
  courseTitle: string;
  amount: number;
  dateLabel: string;
  method: string;
}

export const PAYMENTS: PaymentRecord[] = [
  { id: "pay1", courseTitle: "실전 타이포그래피 가이드", amount: 88000, dateLabel: "2026-08-02", method: "카드 결제" },
  { id: "pay2", courseTitle: "리액트로 짓는 대시보드", amount: 132000, dateLabel: "2026-09-01", method: "카드 결제" },
];
