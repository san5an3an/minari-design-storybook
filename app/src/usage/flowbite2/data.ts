export interface User {
  id: string;
  name: string;
  email: string;
  role: "관리자" | "편집자" | "뷰어";
  status: "활성" | "정지";
  lastLoginLabel: string;
  permissions: string[];
}

export const USERS: User[] = [
  {
    id: "u1", name: "김하늘", email: "haneul.kim@example.com", role: "관리자", status: "활성",
    lastLoginLabel: "10분 전",
    permissions: ["사용자 관리", "결제 관리", "콘텐츠 편집", "설정 변경"],
  },
  {
    id: "u2", name: "박서준", email: "seojun.park@example.com", role: "편집자", status: "활성",
    lastLoginLabel: "2시간 전",
    permissions: ["콘텐츠 편집"],
  },
  {
    id: "u3", name: "이도윤", email: "doyun.lee@example.com", role: "뷰어", status: "정지",
    lastLoginLabel: "3주 전",
    permissions: [],
  },
  {
    id: "u4", name: "최유진", email: "yujin.choi@example.com", role: "편집자", status: "활성",
    lastLoginLabel: "어제",
    permissions: ["콘텐츠 편집", "댓글 관리"],
  },
  {
    id: "u5", name: "정민재", email: "minjae.jeong@example.com", role: "편집자", status: "활성",
    lastLoginLabel: "3일 전",
    permissions: ["콘텐츠 편집", "댓글 관리"],
  },
  {
    id: "u6", name: "한소율", email: "soyul.han@example.com", role: "관리자", status: "활성",
    lastLoginLabel: "1시간 전",
    permissions: ["사용자 관리", "결제 관리", "콘텐츠 편집", "설정 변경"],
  },
  {
    id: "u7", name: "오지훈", email: "jihoon.oh@example.com", role: "뷰어", status: "활성",
    lastLoginLabel: "1주 전",
    permissions: [],
  },
  {
    id: "u8", name: "배수아", email: "sua.bae@example.com", role: "뷰어", status: "정지",
    lastLoginLabel: "1개월 전",
    permissions: [],
  },
  {
    id: "u9", name: "노현우", email: "hyunwoo.no@example.com", role: "편집자", status: "활성",
    lastLoginLabel: "5시간 전",
    permissions: ["콘텐츠 편집"],
  },
  {
    id: "u10", name: "임채은", email: "chaeeun.im@example.com", role: "관리자", status: "활성",
    lastLoginLabel: "30분 전",
    permissions: ["사용자 관리", "결제 관리", "콘텐츠 편집", "설정 변경"],
  },
];

export interface LoginEvent {
  id: string;
  user: string;
  device: string;
  location: string;
  result: "성공" | "실패";
  timeLabel: string;
  dayLabel: string;
}

export const LOGIN_HISTORY: LoginEvent[] = [
  { id: "lg1", user: "김하늘", device: "Chrome · macOS", location: "서울", result: "성공", timeLabel: "10분 전", dayLabel: "월" },
  { id: "lg2", user: "박서준", device: "Safari · iOS", location: "부산", result: "성공", timeLabel: "2시간 전", dayLabel: "월" },
  { id: "lg3", user: "알 수 없음", device: "Chrome · Windows", location: "해외(VPN 의심)", result: "실패", timeLabel: "5시간 전", dayLabel: "월" },
  { id: "lg4", user: "최유진", device: "Edge · Windows", location: "인천", result: "성공", timeLabel: "어제", dayLabel: "일" },
  { id: "lg5", user: "김하늘", device: "Chrome · macOS", location: "서울", result: "성공", timeLabel: "어제", dayLabel: "일" },
  { id: "lg6", user: "알 수 없음", device: "Firefox · Linux", location: "해외(VPN 의심)", result: "실패", timeLabel: "2일 전", dayLabel: "토" },
  { id: "lg7", user: "박서준", device: "Safari · iOS", location: "부산", result: "성공", timeLabel: "3일 전", dayLabel: "금" },
  { id: "lg8", user: "이도윤", device: "Chrome · Windows", location: "서울", result: "실패", timeLabel: "3일 전", dayLabel: "금" },
  { id: "lg9", user: "최유진", device: "Edge · Windows", location: "인천", result: "성공", timeLabel: "4일 전", dayLabel: "목" },
  { id: "lg10", user: "김하늘", device: "Chrome · macOS", location: "서울", result: "성공", timeLabel: "5일 전", dayLabel: "수" },
];

// 미니멀 카드형 사이드 패널. 사용자 상세 화면의 최근 활동
export interface AccountActivityEvent {
  id: string;
  label: string;
  timeLabel: string;
}

export const ACCOUNT_ACTIVITY: Record<string, AccountActivityEvent[]> = {
  u1: [
    { id: "a1", label: "설정 변경, 결제 알림 켬", timeLabel: "10분 전" },
    { id: "a2", label: "사용자 초대, 최유진", timeLabel: "어제" },
    { id: "a3", label: "권한 편집, 콘텐츠 편집 추가", timeLabel: "3일 전" },
  ],
  u2: [
    { id: "a4", label: "게시글 3건 편집", timeLabel: "2시간 전" },
    { id: "a5", label: "댓글 승인 12건", timeLabel: "어제" },
  ],
  u3: [
    { id: "a6", label: "계정 정지 처리됨", timeLabel: "3주 전" },
  ],
  u4: [
    { id: "a7", label: "콘텐츠 초안 저장", timeLabel: "1시간 전" },
    { id: "a8", label: "댓글 관리 권한 부여받음", timeLabel: "어제" },
  ],
  u5: [
    { id: "a9", label: "게시글 1건 편집", timeLabel: "3일 전" },
    { id: "a10", label: "댓글 관리 권한 부여받음", timeLabel: "1주 전" },
  ],
  u6: [
    { id: "a11", label: "설정 변경, 로그인 정책 수정", timeLabel: "1시간 전" },
    { id: "a12", label: "사용자 초대, 임채은", timeLabel: "어제" },
    { id: "a13", label: "결제 정보 확인", timeLabel: "3일 전" },
  ],
  u7: [
    { id: "a14", label: "리포트 열람", timeLabel: "1주 전" },
  ],
  u8: [
    { id: "a15", label: "계정 정지 처리됨", timeLabel: "1개월 전" },
  ],
  u9: [
    { id: "a16", label: "게시글 2건 편집", timeLabel: "5시간 전" },
    { id: "a17", label: "댓글 승인 4건", timeLabel: "어제" },
  ],
  u10: [
    { id: "a18", label: "설정 변경, 알림 정책 수정", timeLabel: "30분 전" },
    { id: "a19", label: "사용자 초대, 오지훈", timeLabel: "오늘" },
  ],
};
