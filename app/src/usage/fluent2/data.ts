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
  {
    id: "tk5", subject: "프린터 용지 걸림 반복", requester: "정민재", priority: "낮음", status: "열림",
    category: "하드웨어", createdLabel: "6시간 전",
    messages: [
      { author: "정민재", text: "3층 프린터가 계속 용지 걸림이 나요.", timeLabel: "6시간 전" },
    ],
  },
  {
    id: "tk6", subject: "메일 계정 용량 초과 경고", requester: "오세훈", priority: "보통", status: "진행 중",
    category: "계정", createdLabel: "3시간 전",
    messages: [
      { author: "오세훈", text: "메일 용량이 다 차서 수신이 안 돼요.", timeLabel: "3시간 전" },
      { author: "IT팀 박서준", text: "오래된 첨부파일 정리 도와드릴게요.", timeLabel: "2시간 전" },
    ],
  },
  {
    id: "tk7", subject: "사내 위키 편집 권한 요청", requester: "김하늘", priority: "낮음", status: "해결됨",
    category: "계정", createdLabel: "2일 전",
    messages: [
      { author: "김하늘", text: "위키 문서 편집 권한을 받고 싶어요.", timeLabel: "2일 전" },
      { author: "IT팀 박서준", text: "권한 부여했어요.", timeLabel: "2일 전" },
    ],
  },
  {
    id: "tk8", subject: "노트북 부팅 속도 저하", requester: "최유진", priority: "보통", status: "진행 중",
    category: "하드웨어", createdLabel: "1일 전",
    messages: [
      { author: "최유진", text: "부팅에 5분 넘게 걸려요.", timeLabel: "1일 전" },
      { author: "IT팀 박서준", text: "디스크 정리 원격으로 도와드릴게요.", timeLabel: "1일 전" },
    ],
  },
  {
    id: "tk9", subject: "사내 메신저 알림이 안 와요", requester: "이도윤", priority: "보통", status: "열림",
    category: "소프트웨어", createdLabel: "4시간 전",
    messages: [
      { author: "이도윤", text: "메신저 데스크톱 알림이 하나도 안 떠요.", timeLabel: "4시간 전" },
    ],
  },
  {
    id: "tk10", subject: "VPN 접속 권한 추가 요청", requester: "한소율", priority: "긴급", status: "열림",
    category: "네트워크", createdLabel: "1시간 전",
    messages: [
      { author: "한소율", text: "재택 근무 중인데 VPN 접속 권한이 없다고 나와요.", timeLabel: "1시간 전" },
    ],
  },
];

// SLA 목표 시간, 티켓 목록과 상세 화면 양쪽에서 사용
export const SLA_HOURS: Record<Ticket["priority"], number> = { 긴급: 4, 보통: 24, 낮음: 72 };

export function elapsedHours(createdLabel: string): number {
  const hourMatch = /(\d+)시간 전/.exec(createdLabel);
  if (hourMatch) return Number(hourMatch[1]);
  const dayMatch = /(\d+)일 전/.exec(createdLabel);
  if (dayMatch) return Number(dayMatch[1]) * 24;
  if (createdLabel === "어제") return 24;
  return 0;
}

export interface KbArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  // Accordion 본문 영역, 목록에는 summary 한 줄만 표시
  steps: readonly string[];
  views: number;
}

export const KB_ARTICLES: KbArticle[] = [
  {
    id: "kb1", title: "VPN 클라이언트 재설치 방법", category: "네트워크",
    summary: "연결이 반복적으로 끊길 때 클라이언트를 지우고 다시 설치하는 절차.",
    steps: ["제어판에서 기존 VPN 클라이언트를 제거한다", "재부팅 후 사내 포털에서 최신 설치 파일을 받는다", "설치 뒤 사번으로 다시 로그인한다"],
    views: 128,
  },
  {
    id: "kb2", title: "모니터 인식 안 될 때 확인 순서", category: "하드웨어",
    summary: "케이블·포트·드라이버 순서로 점검하는 체크리스트.",
    steps: ["케이블이 양쪽에 제대로 꽂혔는지 확인한다", "다른 포트로 바꿔 꽂아 본다", "그래픽 드라이버를 최신 버전으로 갱신한다"],
    views: 96,
  },
  {
    id: "kb3", title: "그룹웨어 계정 잠금 해제", category: "계정",
    summary: "5회 이상 로그인 실패 시 잠기는 계정을 스스로 푸는 법.",
    steps: ["로그인 화면에서 \"계정 잠금 해제\"를 누른다", "등록된 사내 메일로 온 인증 코드를 입력한다", "새 비밀번호로 재설정한다"],
    views: 74,
  },
  {
    id: "kb4", title: "회의실 예약 시스템 접속 오류 대처", category: "소프트웨어",
    summary: "사내 예약 시스템 로그인이 막힐 때 우회 접속하는 방법.",
    steps: ["브라우저 캐시와 쿠키를 지운다", "사내망 VPN이 켜져 있는지 확인한다", "그래도 안 되면 모바일 앱으로 접속해 본다"],
    views: 41,
  },
  {
    id: "kb5", title: "프린터 용지 걸림 스스로 해결하기", category: "하드웨어",
    summary: "용지함·롤러 순서로 점검해 걸림을 직접 푸는 절차.",
    steps: ["전원을 끄고 용지함을 완전히 뺀다", "롤러 사이에 낀 종이를 살살 당겨 뺀다", "용지를 가지런히 정렬한 뒤 다시 넣는다"],
    views: 63,
  },
  {
    id: "kb6", title: "메일 계정 용량 정리하는 법", category: "계정",
    summary: "오래된 첨부파일부터 지워 메일함 용량을 확보하는 순서.",
    steps: ["크기순 정렬로 큰 첨부파일 메일을 찾는다", "필요 없는 첨부파일은 삭제한다", "휴지통도 비워 실제 용량을 확보한다"],
    views: 55,
  },
  {
    id: "kb7", title: "사내 메신저 알림 설정 확인", category: "소프트웨어",
    summary: "OS 알림 권한과 메신저 앱 설정을 함께 확인하는 절차.",
    steps: ["OS 설정에서 메신저 알림 권한을 확인한다", "메신저 앱 내 알림 설정을 켠다", "방해 금지 모드가 켜져 있지 않은지 확인한다"],
    views: 37,
  },
];
