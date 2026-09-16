export interface IssueItem {
  id: string;
  number: number;
  title: string;
  state: "open" | "closed";
  author: string;
  labels: { text: string; color: string }[];
  comments: number;
  openedLabel: string;
}

export const ISSUES: IssueItem[] = [
  {
    id: "i1", number: 482, title: "다크 모드에서 배지 대비가 낮습니다", state: "open",
    author: "김하늘", labels: [{ text: "bug", color: "#d73a49" }, { text: "접근성", color: "#0e8a16" }],
    comments: 6, openedLabel: "2일 전 열림",
  },
  {
    id: "i2", number: 479, title: "검색 결과 정렬 옵션 추가 요청", state: "open",
    author: "박서준", labels: [{ text: "enhancement", color: "#a2eeef" }],
    comments: 2, openedLabel: "4일 전 열림",
  },
  {
    id: "i3", number: 471, title: "모바일에서 사이드바가 겹칩니다", state: "closed",
    author: "이도윤", labels: [{ text: "bug", color: "#d73a49" }],
    comments: 11, openedLabel: "1주 전 닫힘",
  },
  {
    id: "i4", number: 465, title: "문서에 설치 스크린샷 추가", state: "closed",
    author: "김하늘", labels: [{ text: "documentation", color: "#0075ca" }],
    comments: 1, openedLabel: "2주 전 닫힘",
  },
  {
    id: "i5", number: 460, title: "빌드 캐시가 가끔 깨집니다", state: "open",
    author: "박서준", labels: [{ text: "bug", color: "#d73a49" }, { text: "우선순위: 높음", color: "#b60205" }],
    comments: 9, openedLabel: "3주 전 열림",
  },
];

export interface PullRequestItem {
  id: string;
  number: number;
  title: string;
  state: "open" | "merged" | "draft";
  author: string;
  reviewers: string[];
  changedFiles: number;
  openedLabel: string;
}

export const PULL_REQUESTS: PullRequestItem[] = [
  {
    id: "p1", number: 512, title: "토큰 색 대비 계산기 추가", state: "open",
    author: "김하늘", reviewers: ["박서준", "이도윤"], changedFiles: 8, openedLabel: "오늘 열림",
  },
  {
    id: "p2", number: 508, title: "검색 인풋 디바운스 처리", state: "open",
    author: "박서준", reviewers: ["김하늘"], changedFiles: 3, openedLabel: "어제 열림",
  },
  {
    id: "p3", number: 501, title: "레이아웃 그리드 리팩터", state: "draft",
    author: "이도윤", reviewers: [], changedFiles: 14, openedLabel: "3일 전 열림",
  },
  {
    id: "p4", number: 495, title: "국제화 문자열 정리", state: "merged",
    author: "김하늘", reviewers: ["박서준"], changedFiles: 22, openedLabel: "1주 전 병합됨",
  },
];

export interface ActivityItem {
  id: string;
  actor: string;
  action: string;
  target: string;
  timeLabel: string;
}

export const ACTIVITY: ActivityItem[] = [
  { id: "a1", actor: "김하늘", action: "커밋을 푸시했어요", target: "fix: 배지 대비 계산", timeLabel: "12분 전" },
  { id: "a2", actor: "박서준", action: "PR을 열었어요", target: "#508 검색 인풋 디바운스 처리", timeLabel: "1시간 전" },
  { id: "a3", actor: "이도윤", action: "이슈에 댓글을 남겼어요", target: "#471 모바일에서 사이드바가 겹칩니다", timeLabel: "3시간 전" },
  { id: "a4", actor: "김하늘", action: "PR을 병합했어요", target: "#495 국제화 문자열 정리", timeLabel: "어제" },
  { id: "a5", actor: "박서준", action: "릴리스를 태그했어요", target: "v2.4.0", timeLabel: "2일 전" },
];
