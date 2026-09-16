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
];

export interface LoginEvent {
  id: string;
  user: string;
  device: string;
  location: string;
  result: "성공" | "실패";
  timeLabel: string;
}

export const LOGIN_HISTORY: LoginEvent[] = [
  { id: "lg1", user: "김하늘", device: "Chrome · macOS", location: "서울", result: "성공", timeLabel: "10분 전" },
  { id: "lg2", user: "박서준", device: "Safari · iOS", location: "부산", result: "성공", timeLabel: "2시간 전" },
  { id: "lg3", user: "알 수 없음", device: "Chrome · Windows", location: "해외(VPN 의심)", result: "실패", timeLabel: "5시간 전" },
  { id: "lg4", user: "최유진", device: "Edge · Windows", location: "인천", result: "성공", timeLabel: "어제" },
];
