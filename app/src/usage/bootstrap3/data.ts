export interface LoanEntry {
  borrower: string;
  timeLabel: string;
  action: "대출" | "반납" | "연장";
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  status: "대출가능" | "대출중" | "연체";
  borrower?: string;
  dueLabel?: string;
  loans: LoanEntry[];
}

export const BOOKS: Book[] = [
  {
    id: "bk-101", title: "클린 코드", author: "로버트 마틴", isbn: "978-89-6626-097-6",
    category: "컴퓨터", status: "대출중", borrower: "김도윤", dueLabel: "9월 20일",
    loans: [
      { borrower: "김도윤", timeLabel: "9월 6일", action: "대출" },
    ],
  },
  {
    id: "bk-102", title: "미드나잇 라이브러리", author: "매트 헤이그", isbn: "978-89-329-2145-3",
    category: "소설", status: "연체", borrower: "이서연", dueLabel: "9월 10일(지남)",
    loans: [
      { borrower: "이서연", timeLabel: "8월 27일", action: "대출" },
      { borrower: "이서연", timeLabel: "9월 3일", action: "연장" },
    ],
  },
  {
    id: "bk-103", title: "코스모스", author: "칼 세이건", isbn: "978-89-8371-166-8",
    category: "과학", status: "대출가능",
    loans: [
      { borrower: "박지훈", timeLabel: "8월 12일", action: "대출" },
      { borrower: "박지훈", timeLabel: "8월 26일", action: "반납" },
    ],
  },
  {
    id: "bk-104", title: "사피엔스", author: "유발 하라리", isbn: "978-89-509-6567-3",
    category: "인문", status: "대출가능",
    loans: [
      { borrower: "최민서", timeLabel: "7월 30일", action: "대출" },
      { borrower: "최민서", timeLabel: "8월 13일", action: "반납" },
    ],
  },
  {
    id: "bk-105", title: "달러구트 꿈 백화점", author: "이미예", isbn: "978-11-9091-901-9",
    category: "소설", status: "대출중", borrower: "정하은", dueLabel: "9월 22일",
    loans: [{ borrower: "정하은", timeLabel: "9월 8일", action: "대출" }],
  },
];

export interface OverdueItem {
  bookId: string;
  title: string;
  borrower: string;
  dueLabel: string;
  daysLate: number;
}

export const OVERDUE: OverdueItem[] = [
  { bookId: "bk-102", title: "미드나잇 라이브러리", borrower: "이서연", dueLabel: "9월 10일", daysLate: 6 },
];
