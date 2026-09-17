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
  // 표지 사진. Unsplash 무료 라이선스, 서가 분위기 대체 이미지
  coverUrl: string;
}

export const BOOKS: Book[] = [
  {
    id: "bk-101", title: "클린 코드", author: "로버트 마틴", isbn: "978-89-6626-097-6",
    category: "컴퓨터", status: "대출중", borrower: "김도윤", dueLabel: "9월 20일",
    loans: [
      { borrower: "김도윤", timeLabel: "9월 6일", action: "대출" },
    ],
    coverUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-102", title: "미드나잇 라이브러리", author: "매트 헤이그", isbn: "978-89-329-2145-3",
    category: "소설", status: "연체", borrower: "이서연", dueLabel: "9월 10일(지남)",
    loans: [
      { borrower: "이서연", timeLabel: "8월 27일", action: "대출" },
      { borrower: "이서연", timeLabel: "9월 3일", action: "연장" },
    ],
    coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-103", title: "코스모스", author: "칼 세이건", isbn: "978-89-8371-166-8",
    category: "과학", status: "대출가능",
    loans: [
      { borrower: "박지훈", timeLabel: "8월 12일", action: "대출" },
      { borrower: "박지훈", timeLabel: "8월 26일", action: "반납" },
    ],
    coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-104", title: "사피엔스", author: "유발 하라리", isbn: "978-89-509-6567-3",
    category: "인문", status: "대출가능",
    loans: [
      { borrower: "최민서", timeLabel: "7월 30일", action: "대출" },
      { borrower: "최민서", timeLabel: "8월 13일", action: "반납" },
    ],
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-105", title: "달러구트 꿈 백화점", author: "이미예", isbn: "978-11-9091-901-9",
    category: "소설", status: "대출중", borrower: "정하은", dueLabel: "9월 22일",
    loans: [{ borrower: "정하은", timeLabel: "9월 8일", action: "대출" }],
    coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-106", title: "노르웨이의 숲", author: "무라카미 하루키", isbn: "978-89-546-0246-4",
    category: "소설", status: "연체", borrower: "최민서", dueLabel: "9월 5일(지남)",
    loans: [
      { borrower: "최민서", timeLabel: "8월 20일", action: "대출" },
    ],
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-107", title: "총, 균, 쇠", author: "재레드 다이아몬드", isbn: "978-89-546-0663-9",
    category: "인문", status: "연체", borrower: "박지훈", dueLabel: "9월 8일(지남)",
    loans: [
      { borrower: "박지훈", timeLabel: "8월 22일", action: "대출" },
    ],
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-108", title: "파친코", author: "이민진", isbn: "978-89-374-3147-6",
    category: "소설", status: "대출가능",
    loans: [],
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-109", title: "이기적 유전자", author: "리처드 도킨스", isbn: "978-89-8371-497-3",
    category: "과학", status: "대출중", borrower: "오지호", dueLabel: "9월 25일",
    loans: [{ borrower: "오지호", timeLabel: "9월 11일", action: "대출" }],
    coverUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-110", title: "아몬드", author: "손원평", isbn: "978-89-5605-706-1",
    category: "소설", status: "대출가능",
    loans: [{ borrower: "윤아름", timeLabel: "6월 20일", action: "대출" }, { borrower: "윤아름", timeLabel: "6월 27일", action: "반납" }],
    coverUrl: "https://images.unsplash.com/photo-1521123845560-14093637aa7d?auto=format&fit=crop&w=400&h=560&q=60",
  },
  {
    id: "bk-111", title: "코드 컴플리트", author: "스티브 맥코넬", isbn: "978-89-6626-024-2",
    category: "컴퓨터", status: "대출가능",
    loans: [{ borrower: "장서윤", timeLabel: "5월 15일", action: "대출" }, { borrower: "장서윤", timeLabel: "5월 29일", action: "반납" }],
    coverUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&h=560&q=60",
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
  { bookId: "bk-106", title: "노르웨이의 숲", borrower: "최민서", dueLabel: "9월 5일", daysLate: 11 },
  { bookId: "bk-107", title: "총, 균, 쇠", borrower: "박지훈", dueLabel: "9월 8일", daysLate: 8 },
];
