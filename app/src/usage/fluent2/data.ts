export interface TicketMessage {
  author: string;
  text: string;
  timeLabel: string;
}

export interface Ticket {
  id: string;
  subject: string;
  requester: string;
  priority: "긴급" | "보통" | "낮음";
  status: "열림" | "진행 중" | "해결됨";
  category: string;
  createdLabel: string;
  messages: TicketMessage[];
}

export const TICKETS: Ticket[] = [
  {
    id: "tk1", subject: "VPN 연결이 자꾸 끊겨요", requester: "김하늘", priority: "긴급", status: "진행 중",
    category: "네트워크", createdLabel: "2시간 전",
    messages: [
      { author: "김하늘", text: "집에서 VPN 연결하면 10분마다 끊겨요.", timeLabel: "2시간 전" },
      { author: "IT팀 박서준", text: "클라이언트 버전 확인 부탁드려요.", timeLabel: "1시간 전" },
      { author: "김하늘", text: "3.2.1 버전이에요.", timeLabel: "50분 전" },
    ],
  },
  {
    id: "tk2", subject: "모니터 두 대째 화면이 안 나와요", requester: "이도윤", priority: "보통", status: "열림",
    category: "하드웨어", createdLabel: "어제",
    messages: [
      { author: "이도윤", text: "듀얼 모니터 중 오른쪽이 안 켜져요.", timeLabel: "어제" },
    ],
  },
  {
    id: "tk3", subject: "그룹웨어 비밀번호 초기화 요청", requester: "최유진", priority: "보통", status: "해결됨",
    category: "계정", createdLabel: "3일 전",
    messages: [
      { author: "최유진", text: "비밀번호를 까먹었어요.", timeLabel: "3일 전" },
      { author: "IT팀 박서준", text: "임시 비밀번호 발송했어요. 로그인 후 변경해 주세요.", timeLabel: "3일 전" },
      { author: "최유진", text: "변경 완료했어요, 감사합니다.", timeLabel: "3일 전" },
    ],
  },
  {
    id: "tk4", subject: "회의실 예약 시스템 접속 안 됨", requester: "한소율", priority: "낮음", status: "열림",
    category: "소프트웨어", createdLabel: "5일 전",
    messages: [
      { author: "한소율", text: "사내 예약 시스템에 로그인이 안 돼요.", timeLabel: "5일 전" },
    ],
  },
];

export interface KbArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
}

export const KB_ARTICLES: KbArticle[] = [
  { id: "kb1", title: "VPN 클라이언트 재설치 방법", category: "네트워크", summary: "연결이 반복적으로 끊길 때 클라이언트를 지우고 다시 설치하는 절차." },
  { id: "kb2", title: "모니터 인식 안 될 때 확인 순서", category: "하드웨어", summary: "케이블·포트·드라이버 순서로 점검하는 체크리스트." },
  { id: "kb3", title: "그룹웨어 계정 잠금 해제", category: "계정", summary: "5회 이상 로그인 실패 시 잠기는 계정을 스스로 푸는 법." },
];
