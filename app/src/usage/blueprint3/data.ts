export interface Issue {
  id: string;
  key: string;
  title: string;
  status: "열림" | "진행중" | "닫힘";
  assignee: string;
  labels: string[];
  createdLabel: string;
  body: string;
}

export const ISSUES: Issue[] = [
  {
    id: "i1",
    key: "ODS-142",
    title: "다크 모드에서 태그 대비가 낮음",
    status: "열림",
    assignee: "김지수",
    labels: ["버그", "접근성"],
    createdLabel: "9월 15일",
    body: "다크 모드일 때 `Tag` 기본 색상의 명암 대비가 AA 기준(4.5:1) 미만입니다. 다크 팔레트 재검토가 필요합니다.",
  },
  {
    id: "i2",
    key: "ODS-138",
    title: "Table 정렬 아이콘이 안 보임",
    status: "진행중",
    assignee: "박준호",
    labels: ["버그"],
    createdLabel: "9월 12일",
    body: "정렬 가능한 컬럼에서 화살표 아이콘이 렌더링되지 않습니다. 아이콘 폰트 로드 순서 문제로 추정됩니다.",
  },
  {
    id: "i3",
    key: "ODS-135",
    title: "Callout에 닫기 버튼 옵션 추가",
    status: "열림",
    assignee: "미배정",
    labels: ["기능 요청"],
    createdLabel: "9월 10일",
    body: "일시적인 안내에 쓰기엔 Callout이 계속 남아 있습니다. dismissible 옵션이 있으면 좋겠습니다.",
  },
  {
    id: "i4",
    key: "ODS-129",
    title: "Navbar 반응형 브레이크포인트 문서화",
    status: "닫힘",
    assignee: "이서연",
    labels: ["문서"],
    createdLabel: "9월 3일",
    body: "Navbar가 좁은 화면에서 줄바꿈되는 기준값이 문서에 없어 헷갈렸습니다. 값을 명시하고 예제를 추가했습니다.",
  },
  {
    id: "i5",
    key: "ODS-146",
    title: "ProgressBar 애니메이션이 감속 설정을 안 따름",
    status: "진행중",
    assignee: "김지수",
    labels: ["버그"],
    createdLabel: "9월 16일",
    body: "prefers-reduced-motion을 켜도 ProgressBar 줄무늬 애니메이션이 계속 움직입니다.",
  },
  {
    id: "i6",
    key: "ODS-140",
    title: "Callout 아이콘 색이 커스텀 인텐트에서 안 바뀜",
    status: "열림",
    assignee: "김지수",
    labels: ["버그"],
    createdLabel: "9월 13일",
    body: "커스텀 인텐트 토큰을 넣어도 Callout 아이콘 색이 기본값에 고정됩니다.",
  },
  {
    id: "i7",
    key: "ODS-149",
    title: "TagInput에 붙여넣기 시 공백만 있는 태그가 생성됨",
    status: "열림",
    assignee: "박준호",
    labels: ["버그"],
    createdLabel: "9월 17일",
    body: "쉼표로 구분된 텍스트를 붙여넣을 때 빈 문자열 태그가 함께 만들어집니다. trim 후 필터링이 필요합니다.",
  },
  {
    id: "i8",
    key: "ODS-144",
    title: "Section 접기/펴기 상태를 기억하지 않음",
    status: "진행중",
    assignee: "오태윤",
    labels: ["기능 요청"],
    createdLabel: "9월 14일",
    body: "새로고침하면 펼쳐둔 Section이 다시 접힌 상태로 돌아갑니다. 로컬 상태 유지가 필요합니다.",
  },
  {
    id: "i9",
    key: "ODS-131",
    title: "HTMLSelect 키보드 탐색 시 포커스 링 누락",
    status: "닫힘",
    assignee: "이서연",
    labels: ["접근성"],
    createdLabel: "9월 4일",
    body: "Tab으로 이동했을 때 포커스 링이 브라우저 기본값에 가려 잘 안 보였습니다. 커스텀 outline을 추가했습니다.",
  },
];

export interface Label {
  name: string;
  intent: "danger" | "warning" | "primary" | "none";
  count: number;
  description: string;
}

// ISSUES 실제 태그 수와 일치하는 값
export const LABELS: Label[] = [
  { name: "버그", intent: "danger", count: 5, description: "의도한 대로 동작하지 않는 것." },
  { name: "기능 요청", intent: "primary", count: 2, description: "새로 있었으면 하는 것." },
  { name: "접근성", intent: "warning", count: 2, description: "스크린리더·명암비·키보드 조작 관련." },
  { name: "문서", intent: "none", count: 1, description: "설명이 부족하거나 틀린 것." },
];
