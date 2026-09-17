export interface IssueItem {
  id: string;
  number: number;
  title: string;
  state: "open" | "closed";
  author: string;
  labels: { text: string; color: string }[];
  comments: number;
  openedLabel: string;
  // 상세 화면 본문. 목록에서 상세로 드릴다운하는 구조에 연결
  body: string;
}

export const ISSUES: IssueItem[] = [
  {
    id: "i1", number: 482, title: "다크 모드에서 배지 대비가 낮습니다", state: "open",
    author: "김하늘", labels: [{ text: "bug", color: "#d73a49" }, { text: "접근성", color: "#0e8a16" }],
    comments: 6, openedLabel: "2일 전 열림",
    body: "다크 모드에서 `Label` 배경색과 텍스트 색의 대비가 WCAG AA 기준(4.5:1)에 못 미칩니다. `--fgColor-onEmphasis` 대신 배지별 전용 전경색이 필요해 보입니다.",
  },
  {
    id: "i2", number: 479, title: "검색 결과 정렬 옵션 추가 요청", state: "open",
    author: "박서준", labels: [{ text: "enhancement", color: "#a2eeef" }],
    comments: 2, openedLabel: "4일 전 열림",
    body: "현재 검색 결과는 관련도 순으로만 정렬됩니다. 최신순·오래된순 옵션을 상단 `Select` 에 추가해 주세요.",
  },
  {
    id: "i3", number: 471, title: "모바일에서 사이드바가 겹칩니다", state: "closed",
    author: "이도윤", labels: [{ text: "bug", color: "#d73a49" }],
    comments: 11, openedLabel: "1주 전 닫힘",
    body: "375px 이하 뷰포트에서 사이드바가 본문 위에 겹쳐 보였습니다. `z-index` 정리와 브레이크포인트 조정으로 해결했습니다.",
  },
  {
    id: "i4", number: 465, title: "문서에 설치 스크린샷 추가", state: "closed",
    author: "김하늘", labels: [{ text: "documentation", color: "#0075ca" }],
    comments: 1, openedLabel: "2주 전 닫힘",
    body: "설치 가이드에 텍스트만 있어 초심자가 따라오기 어렵다는 피드백이 있었습니다. 단계별 스크린샷을 추가했습니다.",
  },
  {
    id: "i5", number: 460, title: "빌드 캐시가 가끔 깨집니다", state: "open",
    author: "박서준", labels: [{ text: "bug", color: "#d73a49" }, { text: "우선순위: 높음", color: "#b60205" }],
    comments: 9, openedLabel: "3주 전 열림",
    body: "CI 에서 간헐적으로 캐시 키가 충돌해 이전 빌드 산출물이 섞여 나옵니다. 재현 빈도는 약 1/20 빌드입니다.",
  },
  {
    id: "i6", number: 455, title: "토큰 프리뷰 페이지에 다크모드 토글 추가", state: "open",
    author: "이도윤", labels: [{ text: "enhancement", color: "#a2eeef" }, { text: "디자인", color: "#5319e7" }],
    comments: 3, openedLabel: "3주 전 열림",
    body: "토큰 프리뷰 페이지는 라이트 모드만 지원합니다. 실제 앱처럼 다크모드 전환 토글을 상단에 추가해 주세요.",
  },
  {
    id: "i7", number: 449, title: "Storybook 배포 링크가 404를 반환합니다", state: "closed",
    author: "박서준", labels: [{ text: "bug", color: "#d73a49" }],
    comments: 4, openedLabel: "1개월 전 닫힘",
    body: "배포 워크플로가 `base` 경로를 잘못 계산해 정적 자산이 404 였습니다. `vercel.json` 리라이트 규칙 수정으로 해결했습니다.",
  },
  {
    id: "i8", number: 441, title: "CLI에 --dry-run 플래그 지원", state: "open",
    author: "김하늘", labels: [{ text: "enhancement", color: "#a2eeef" }],
    comments: 0, openedLabel: "1개월 전 열림",
    body: "스캐폴딩 전에 어떤 파일이 생성될지 미리 보고 싶다는 요청입니다. `--dry-run` 플래그로 실제 쓰기 없이 목록만 출력하면 좋겠습니다.",
  },
  {
    id: "i9", number: 433, title: "그리드 컴포넌트 SSR에서 hydration mismatch", state: "closed",
    author: "이도윤", labels: [{ text: "bug", color: "#d73a49" }, { text: "우선순위: 높음", color: "#b60205" }],
    comments: 15, openedLabel: "2개월 전 닫힘",
    body: "서버에서 계산한 컬럼 수와 클라이언트 첫 렌더 컬럼 수가 달라 React hydration 경고가 발생했습니다. `useLayoutEffect` 로 옮겨 해결했습니다.",
  },
  {
    id: "i10", number: 427, title: "README 뱃지 링크가 끊어져 있습니다", state: "closed",
    author: "박서준", labels: [{ text: "documentation", color: "#0075ca" }],
    comments: 1, openedLabel: "2개월 전 닫힘",
    body: "npm 뱃지가 옛 패키지명을 가리키고 있었습니다. 스코프 변경(`@minari/*`) 이후 갱신되지 않은 상태였습니다.",
  },
];

// 최근 7일 이슈 열림/닫힘 추이. IssuesScreen 미니 바 차트용
export const ISSUE_TREND_7D: { day: string; opened: number; closed: number }[] = [
  { day: "월", opened: 3, closed: 2 },
  { day: "화", opened: 1, closed: 4 },
  { day: "수", opened: 4, closed: 1 },
  { day: "목", opened: 2, closed: 3 },
  { day: "금", opened: 5, closed: 2 },
  { day: "토", opened: 0, closed: 1 },
  { day: "일", opened: 1, closed: 0 },
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
  {
    id: "p5", number: 488, title: "다크 모드 토큰 스냅샷 테스트 추가", state: "merged",
    author: "이도윤", reviewers: ["김하늘", "박서준"], changedFiles: 5, openedLabel: "2주 전 병합됨",
  },
  {
    id: "p6", number: 480, title: "Storybook 빌드 캐시 최적화", state: "open",
    author: "박서준", reviewers: ["이도윤"], changedFiles: 2, openedLabel: "2주 전 열림",
  },
  {
    id: "p7", number: 473, title: "접근성 라벨 누락 보완", state: "draft",
    author: "김하늘", reviewers: [], changedFiles: 6, openedLabel: "3주 전 열림",
  },
  {
    id: "p8", number: 468, title: "Timeline 컴포넌트 애니메이션 성능 개선", state: "merged",
    author: "박서준", reviewers: ["김하늘", "이도윤"], changedFiles: 4, openedLabel: "3주 전 병합됨",
  },
  {
    id: "p9", number: 461, title: "SelectPanel 키보드 내비게이션 버그 수정", state: "open",
    author: "이도윤", reviewers: ["박서준"], changedFiles: 2, openedLabel: "1개월 전 열림",
  },
  {
    id: "p10", number: 454, title: "CI 매트릭스에 Node 22 추가", state: "merged",
    author: "김하늘", reviewers: ["박서준", "이도윤"], changedFiles: 1, openedLabel: "1개월 전 병합됨",
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
  { id: "a6", actor: "이도윤", action: "PR을 열었어요", target: "#501 레이아웃 그리드 리팩터", timeLabel: "2일 전" },
  { id: "a7", actor: "김하늘", action: "이슈를 닫았어요", target: "#465 문서에 설치 스크린샷 추가", timeLabel: "3일 전" },
  { id: "a8", actor: "박서준", action: "커밋을 푸시했어요", target: "chore: 의존성 업데이트", timeLabel: "4일 전" },
  { id: "a9", actor: "이도윤", action: "PR을 병합했어요", target: "#488 다크 모드 토큰 스냅샷 테스트 추가", timeLabel: "1주 전" },
  { id: "a10", actor: "김하늘", action: "이슈에 댓글을 남겼어요", target: "#460 빌드 캐시가 가끔 깨집니다", timeLabel: "1주 전" },
];
