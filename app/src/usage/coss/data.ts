export type DocSpace = "제품" | "디자인" | "온보딩" | "운영";
export type DocStatus = "게시됨" | "초안" | "보관";

export interface ChecklistEntry {
  id: string;
  label: string;
  done: boolean;
}

export interface HistoryEntry {
  label: string;
  who: string;
  when: string;
}

export interface DocItem {
  id: string;
  title: string;
  space: DocSpace;
  status: DocStatus;
  ownerName: string;
  ownerInitial: string;
  tags: string[];
  updatedLabel: string;
  // 작을수록 최신. 정렬용 고정 순위
  updatedRank: number;
  views: number;
  favorite: boolean;
  summary: string;
  bodyParagraphs: string[];
  checklist: ChecklistEntry[];
  relatedIds: string[];
  history: HistoryEntry[];
  reviewApproved: number;
  reviewTotal: number;
  cover?: string;
}

// Unsplash CDN 이미지 직링크. 다른 usage 화면과 같은 사진 ID 재사용
const COVER_1 = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=640&q=70";
const COVER_2 = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=70";
const COVER_3 = "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=640&q=70";
const COVER_4 = "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=640&q=70";

export const DOCS: DocItem[] = [
  {
    id: "d1",
    title: "신규 입사자 온보딩 가이드",
    space: "온보딩",
    status: "게시됨",
    ownerName: "김도윤",
    ownerInitial: "김",
    tags: ["가이드", "온보딩"],
    updatedLabel: "12분 전",
    updatedRank: 1,
    views: 482,
    favorite: true,
    summary: "입사 첫 주에 필요한 계정 발급부터 팀 소개까지 한 번에 정리한 문서예요.",
    bodyParagraphs: [
      "새로 합류한 팀원이 첫 주 동안 겪는 궁금증을 줄이기 위해 만든 문서예요. 계정 발급, 장비 신청, 사내 도구 접근 권한 요청 절차를 순서대로 안내해요.",
      "2주차부터는 담당 팀의 OJT 일정과 멘토 배정 방식도 함께 정리해 두었으니, 입사자와 멘토 모두 이 문서를 기준으로 진행 상황을 맞춰 보면 좋아요.",
    ],
    checklist: [
      { id: "c1", label: "사내 계정·이메일 발급 확인", done: true },
      { id: "c2", label: "팀 채널 초대 완료", done: true },
      { id: "c3", label: "1주차 OJT 일정 등록", done: false },
    ],
    relatedIds: ["d10", "d8"],
    history: [
      { label: "문서를 만들었어요", who: "김도윤", when: "3개월 전" },
      { label: "OJT 일정 표를 추가했어요", who: "김도윤", when: "2주 전" },
      { label: "본문을 수정했어요", who: "박서연", when: "12분 전" },
    ],
    reviewApproved: 3,
    reviewTotal: 3,
    cover: COVER_1,
  },
  {
    id: "d2",
    title: "제품 로드맵 2026 H2",
    space: "제품",
    status: "게시됨",
    ownerName: "박서연",
    ownerInitial: "박",
    tags: ["로드맵", "릴리즈"],
    updatedLabel: "1시간 전",
    updatedRank: 2,
    views: 401,
    favorite: false,
    summary: "하반기 핵심 릴리즈 우선순위와 팀별 담당 영역을 정리했어요.",
    bodyParagraphs: [
      "3분기와 4분기에 출시할 핵심 기능 목록을 우선순위 순으로 정리했어요. 각 항목마다 담당 팀과 예상 릴리즈 주차를 함께 표기했어요.",
      "경영진 리뷰에서 나온 피드백은 별도 섹션에 반영했고, 다음 리뷰 전까지 지표 근거를 보강할 예정이에요.",
    ],
    checklist: [
      { id: "c1", label: "Q3 성과 지표 반영", done: true },
      { id: "c2", label: "경영진 리뷰 피드백 반영", done: false },
      { id: "c3", label: "공개용 요약본 작성", done: false },
    ],
    relatedIds: ["d4", "d9"],
    history: [
      { label: "문서를 만들었어요", who: "박서연", when: "5개월 전" },
      { label: "3분기 항목을 갱신했어요", who: "박서연", when: "1주 전" },
      { label: "경영진 피드백을 반영했어요", who: "박서연", when: "1시간 전" },
    ],
    reviewApproved: 2,
    reviewTotal: 2,
    cover: COVER_2,
  },
  {
    id: "d3",
    title: "디자인 시스템 컴포넌트 가이드",
    space: "디자인",
    status: "게시됨",
    ownerName: "이하늘",
    ownerInitial: "이",
    tags: ["디자인시스템", "가이드"],
    updatedLabel: "어제 17:40",
    updatedRank: 3,
    views: 356,
    favorite: true,
    summary: "버튼부터 데이터 테이블까지, 컴포넌트별 사용 원칙과 예시를 모았어요.",
    bodyParagraphs: [
      "컴포넌트마다 언제·왜 쓰는지, 어떤 상태 값을 지원하는지를 표로 정리했어요. 새 화면을 만들 때 이 문서만 보고도 톤이 어긋나지 않게 하는 게 목표예요.",
      "접근성 체크리스트를 통과한 컴포넌트만 '사용 가능' 표시를 달았고, 아직 검토 중인 항목은 초안 표시를 남겨 뒀어요.",
    ],
    checklist: [
      { id: "c1", label: "컴포넌트 스펙 최신화", done: true },
      { id: "c2", label: "접근성 체크리스트 통과", done: true },
      { id: "c3", label: "버전 태그 릴리즈 노트 작성", done: true },
    ],
    relatedIds: ["d6", "d12"],
    history: [
      { label: "문서를 만들었어요", who: "이하늘", when: "6개월 전" },
      { label: "접근성 체크리스트를 통과했어요", who: "이하늘", when: "3일 전" },
      { label: "버전 태그를 추가했어요", who: "이하늘", when: "어제 17:40" },
    ],
    reviewApproved: 4,
    reviewTotal: 4,
    cover: COVER_3,
  },
  {
    id: "d4",
    title: "API 연동 가이드 v3",
    space: "제품",
    status: "게시됨",
    ownerName: "최민준",
    ownerInitial: "최",
    tags: ["API", "가이드"],
    updatedLabel: "2일 전",
    updatedRank: 4,
    views: 268,
    favorite: false,
    summary: "v2 대비 바뀐 인증 방식과 레이트 리밋 정책을 포함한 최신 연동 가이드예요.",
    bodyParagraphs: [
      "기존 API 키 방식에서 OAuth 기반 토큰 방식으로 바뀐 부분을 표로 정리했어요. 마이그레이션 기간 중에는 두 방식이 함께 지원돼요.",
      "엔드포인트별 레이트 리밋과 재시도 정책을 명시해서, 연동 초기에 흔히 겪는 429 오류를 줄이는 데 도움이 되도록 했어요.",
    ],
    checklist: [
      { id: "c1", label: "v2 대비 변경점 표 추가", done: true },
      { id: "c2", label: "샘플 코드 동작 확인", done: true },
      { id: "c3", label: "레이트 리밋 표기", done: false },
    ],
    relatedIds: ["d11", "d9"],
    history: [
      { label: "문서를 만들었어요", who: "최민준", when: "4개월 전" },
      { label: "레이트 리밋 표를 추가했어요", who: "최민준", when: "1주 전" },
      { label: "샘플 코드를 갱신했어요", who: "최민준", when: "2일 전" },
    ],
    reviewApproved: 3,
    reviewTotal: 3,
  },
  {
    id: "d5",
    title: "장애 대응 런북",
    space: "운영",
    status: "게시됨",
    ownerName: "정우진",
    ownerInitial: "정",
    tags: ["런북", "보안"],
    updatedLabel: "3일 전",
    updatedRank: 5,
    views: 241,
    favorite: true,
    summary: "장애 등급별 대응 절차와 온콜 담당자 연락 순서를 정리한 런북이에요.",
    bodyParagraphs: [
      "장애를 심각도(SEV1~SEV3)로 나누고, 등급별로 누가 먼저 연락받고 어떤 채널에 상황을 공유해야 하는지 순서대로 적어 뒀어요.",
      "롤백이 필요한 경우의 체크포인트와, 사후 회고 문서를 남기는 절차도 함께 안내해요.",
    ],
    checklist: [
      { id: "c1", label: "온콜 연락망 최신화", done: true },
      { id: "c2", label: "롤백 절차 검증", done: false },
      { id: "c3", label: "사후 보고 템플릿 링크", done: false },
    ],
    relatedIds: ["d9", "d4"],
    history: [
      { label: "문서를 만들었어요", who: "정우진", when: "7개월 전" },
      { label: "온콜 연락망을 최신화했어요", who: "정우진", when: "1개월 전" },
      { label: "롤백 절차를 보강했어요", who: "정우진", when: "3일 전" },
    ],
    reviewApproved: 3,
    reviewTotal: 3,
    cover: COVER_4,
  },
  {
    id: "d6",
    title: "브랜드 컬러·타이포 가이드",
    space: "디자인",
    status: "초안",
    ownerName: "이하늘",
    ownerInitial: "이",
    tags: ["브랜딩", "디자인시스템"],
    updatedLabel: "4일 전",
    updatedRank: 6,
    views: 190,
    favorite: false,
    summary: "리브랜딩 이후 확정된 컬러 팔레트와 타이포 스케일을 정리 중인 초안이에요.",
    bodyParagraphs: [
      "새 브랜드 컬러의 대비비 검증 결과와, 다크 모드에서 쓸 보정 값을 함께 정리하고 있어요. 아직 로고 사용 예시가 부족해 보강이 필요해요.",
      "타이포 스케일은 확정됐지만, 실제 화면 적용 예시가 2~3개 더 필요해서 초안 상태로 남겨 뒀어요.",
    ],
    checklist: [
      { id: "c1", label: "컬러 대비비 AA 검증", done: false },
      { id: "c2", label: "로고 사용 예시 추가", done: false },
      { id: "c3", label: "타이포 스케일 표 정리", done: true },
    ],
    relatedIds: ["d3", "d12"],
    history: [
      { label: "문서를 만들었어요", who: "이하늘", when: "2개월 전" },
      { label: "컬러 대비비를 검증했어요", who: "이하늘", when: "1주 전" },
      { label: "검토를 요청했어요", who: "이하늘", when: "4일 전" },
    ],
    reviewApproved: 1,
    reviewTotal: 3,
  },
  {
    id: "d7",
    title: "고객 인터뷰 노트, 9월",
    space: "제품",
    status: "초안",
    ownerName: "박서연",
    ownerInitial: "박",
    tags: ["리서치"],
    updatedLabel: "5일 전",
    updatedRank: 7,
    views: 164,
    favorite: false,
    summary: "9월 진행한 사용자 인터뷰 5건의 핵심 인용구와 다음 액션을 정리했어요.",
    bodyParagraphs: [
      "다섯 명의 사용자와 진행한 인터뷰에서 반복적으로 나온 불편 포인트 세 가지를 우선 정리했어요. 특히 '검색이 오래 걸린다'는 의견이 가장 많았어요.",
      "다음 인터뷰 라운드에서 확인할 질문 목록도 하단에 남겨 뒀어요. 아직 인용구 하이라이트 작업이 끝나지 않아 초안으로 유지하고 있어요.",
    ],
    checklist: [
      { id: "c1", label: "인터뷰이 동의 여부 확인", done: true },
      { id: "c2", label: "핵심 인용구 하이라이트", done: false },
      { id: "c3", label: "다음 인터뷰 일정 등록", done: false },
    ],
    relatedIds: ["d2"],
    history: [
      { label: "문서를 만들었어요", who: "박서연", when: "3주 전" },
      { label: "인터뷰 3건을 추가했어요", who: "박서연", when: "1주 전" },
      { label: "핵심 인용구를 정리했어요", who: "박서연", when: "5일 전" },
    ],
    reviewApproved: 1,
    reviewTotal: 2,
  },
  {
    id: "d8",
    title: "재택근무 정책",
    space: "운영",
    status: "게시됨",
    ownerName: "김도윤",
    ownerInitial: "김",
    tags: ["정책"],
    updatedLabel: "1주 전",
    updatedRank: 8,
    views: 150,
    favorite: false,
    summary: "주 몇 회까지 재택이 가능한지, 신청 절차는 어떻게 되는지 정리한 공식 정책이에요.",
    bodyParagraphs: [
      "팀별로 재택 가능 횟수가 다르게 운영되는 이유와, 신청 시 팀장 승인이 필요한 절차를 안내해요. 법무팀 검토를 거친 최신 버전이에요.",
      "보안팀이 요구하는 VPN 접속 규정도 함께 링크해 뒀으니, 재택 전에 꼭 한 번 확인해 주세요.",
    ],
    checklist: [
      { id: "c1", label: "법무팀 검토 완료", done: true },
      { id: "c2", label: "보안팀 VPN 정책 링크", done: true },
      { id: "c3", label: "FAQ 섹션 추가", done: true },
    ],
    relatedIds: ["d1"],
    history: [
      { label: "문서를 만들었어요", who: "김도윤", when: "1년 전" },
      { label: "법무팀 검토를 반영했어요", who: "김도윤", when: "1개월 전" },
      { label: "FAQ 섹션을 추가했어요", who: "김도윤", when: "1주 전" },
    ],
    reviewApproved: 3,
    reviewTotal: 3,
  },
  {
    id: "d9",
    title: "신규 기능 플래그 운영 가이드",
    space: "제품",
    status: "초안",
    ownerName: "최민준",
    ownerInitial: "최",
    tags: ["가이드", "릴리즈"],
    updatedLabel: "1주 전",
    updatedRank: 9,
    views: 132,
    favorite: false,
    summary: "기능 플래그 네이밍 규칙과 단계별 롤아웃 방법을 정리하고 있는 문서예요.",
    bodyParagraphs: [
      "플래그 이름을 팀·기능·환경 순으로 짓는 규칙을 정했어요. 아직 전체 팀에 공지되지 않아 초안으로 남겨 뒀어요.",
      "단계별 롤아웃 비율(1% → 10% → 50% → 100%)과 각 단계에서 확인할 지표를 표로 정리하고 있어요.",
    ],
    checklist: [
      { id: "c1", label: "플래그 네이밍 규칙 정리", done: true },
      { id: "c2", label: "롤아웃 단계 표 작성", done: false },
      { id: "c3", label: "롤백 트리거 조건 정의", done: false },
    ],
    relatedIds: ["d2", "d5"],
    history: [
      { label: "문서를 만들었어요", who: "최민준", when: "2주 전" },
      { label: "네이밍 규칙을 정리했어요", who: "최민준", when: "1주 전" },
      { label: "롤아웃 표를 추가했어요", who: "최민준", when: "1주 전" },
    ],
    reviewApproved: 1,
    reviewTotal: 3,
  },
  {
    id: "d10",
    title: "회의 노트 템플릿",
    space: "온보딩",
    status: "게시됨",
    ownerName: "정우진",
    ownerInitial: "정",
    tags: ["템플릿"],
    updatedLabel: "2주 전",
    updatedRank: 10,
    views: 98,
    favorite: false,
    summary: "모든 팀이 공통으로 쓰는 회의 노트 형식이에요. 액션 아이템 표가 핵심이에요.",
    bodyParagraphs: [
      "회의 목적, 참석자, 논의 내용, 액션 아이템 네 영역으로만 구성한 단순한 템플릿이에요. 액션 아이템에는 담당자와 기한을 꼭 채우도록 안내해요.",
      "참석자를 태그로 자동 표시하는 예시도 추가해서, 회의록을 복사할 때 형식이 깨지지 않게 했어요.",
    ],
    checklist: [
      { id: "c1", label: "액션아이템 표 포맷 확정", done: true },
      { id: "c2", label: "참석자 자동 태그 예시", done: true },
      { id: "c3", label: "다음 회의 리마인더 링크", done: false },
    ],
    relatedIds: ["d1"],
    history: [
      { label: "문서를 만들었어요", who: "정우진", when: "8개월 전" },
      { label: "액션아이템 표를 다듬었어요", who: "정우진", when: "1개월 전" },
      { label: "예시를 추가했어요", who: "정우진", when: "2주 전" },
    ],
    reviewApproved: 2,
    reviewTotal: 2,
  },
  {
    id: "d11",
    title: "구 버전 API 마이그레이션",
    space: "제품",
    status: "보관",
    ownerName: "최민준",
    ownerInitial: "최",
    tags: ["마이그레이션", "API"],
    updatedLabel: "3주 전",
    updatedRank: 11,
    views: 76,
    favorite: false,
    summary: "v1 API 지원 종료에 맞춰 진행했던 마이그레이션 절차의 최종 기록이에요.",
    bodyParagraphs: [
      "v1 엔드포인트를 v3로 옮기는 매핑 표와, 마이그레이션 기간 동안 공지했던 안내 문구를 그대로 보관하고 있어요. 지원은 이미 종료됐어요.",
      "이후 비슷한 마이그레이션이 필요할 때 참고할 수 있도록 절차와 일정만 남기고 보관 상태로 전환했어요.",
    ],
    checklist: [
      { id: "c1", label: "엔드포인트 매핑 표 최종화", done: true },
      { id: "c2", label: "마감일 공지 문구 삽입", done: true },
      { id: "c3", label: "레거시 SDK 지원 종료일 명시", done: true },
    ],
    relatedIds: ["d4"],
    history: [
      { label: "문서를 만들었어요", who: "최민준", when: "1년 전" },
      { label: "지원 종료일을 공지했어요", who: "최민준", when: "10개월 전" },
      { label: "보관으로 전환했어요", who: "최민준", when: "3주 전" },
    ],
    reviewApproved: 3,
    reviewTotal: 3,
  },
  {
    id: "d12",
    title: "2025 리브랜딩 회고",
    space: "디자인",
    status: "보관",
    ownerName: "이하늘",
    ownerInitial: "이",
    tags: ["브랜딩", "리서치"],
    updatedLabel: "1개월 전",
    updatedRank: 12,
    views: 54,
    favorite: false,
    summary: "2025년 리브랜딩 프로젝트 전체 타임라인과 얻은 교훈을 정리한 회고예요.",
    bodyParagraphs: [
      "로고 교체부터 전 채널 적용까지 6개월간의 타임라인을 정리했어요. 예상보다 오래 걸린 구간과 그 이유도 함께 남겼어요.",
      "다음 리브랜딩을 위한 체크리스트 3가지를 마지막에 정리했고, 지금은 참고용으로 보관 중이에요.",
    ],
    checklist: [
      { id: "c1", label: "타임라인 정리", done: true },
      { id: "c2", label: "교훈 3가지 정리", done: true },
      { id: "c3", label: "다음 리브랜딩 체크리스트 링크", done: false },
    ],
    relatedIds: ["d6", "d3"],
    history: [
      { label: "문서를 만들었어요", who: "이하늘", when: "10개월 전" },
      { label: "회고 워크숍 내용을 추가했어요", who: "이하늘", when: "2개월 전" },
      { label: "보관으로 전환했어요", who: "이하늘", when: "1개월 전" },
    ],
    reviewApproved: 3,
    reviewTotal: 3,
  },
];

export type Role = "소유자" | "관리자" | "편집자" | "댓글 작성자" | "뷰어";
export type MemberStatus = "활성" | "초대됨";

export interface Member {
  id: string;
  name: string;
  initial: string;
  email: string;
  role: Role;
  status: MemberStatus;
  joinedLabel: string;
  docsEdited: number;
}

export const MEMBERS: Member[] = [
  { id: "m1", name: "김도윤", initial: "김", email: "dohyun@bloomstudio.im", role: "소유자", status: "활성", joinedLabel: "1년 전", docsEdited: 24 },
  { id: "m2", name: "박서연", initial: "박", email: "seoyeon@bloomstudio.im", role: "관리자", status: "활성", joinedLabel: "10개월 전", docsEdited: 31 },
  { id: "m3", name: "이하늘", initial: "이", email: "haneul@bloomstudio.im", role: "편집자", status: "활성", joinedLabel: "9개월 전", docsEdited: 19 },
  { id: "m4", name: "최민준", initial: "최", email: "minjun@bloomstudio.im", role: "편집자", status: "활성", joinedLabel: "8개월 전", docsEdited: 22 },
  { id: "m5", name: "정우진", initial: "정", email: "woojin@bloomstudio.im", role: "편집자", status: "활성", joinedLabel: "7개월 전", docsEdited: 15 },
  { id: "m6", name: "한소율", initial: "한", email: "soyul@bloomstudio.im", role: "댓글 작성자", status: "활성", joinedLabel: "3개월 전", docsEdited: 4 },
  { id: "m7", name: "윤지호", initial: "윤", email: "jiho@bloomstudio.im", role: "뷰어", status: "활성", joinedLabel: "2개월 전", docsEdited: 0 },
  { id: "m8", name: "임채원", initial: "임", email: "chaewon@partner.io", role: "편집자", status: "초대됨", joinedLabel: "초대 발송함", docsEdited: 0 },
];

export const CURRENT_USER_ID = "m2";

export type ActivityType = "edit" | "comment" | "share" | "create" | "delete" | "favorite";
export type ActivityBucket = "오늘" | "어제" | "이번 주";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  actorName: string;
  actorInitial: string;
  targetTitle: string;
  targetId: string;
  timeLabel: string;
  dateBucket: ActivityBucket;
}

export const ACTIVITY: ActivityItem[] = [
  { id: "a1", type: "edit", actorName: "박서연", actorInitial: "박", targetTitle: "제품 로드맵 2026 H2", targetId: "d2", timeLabel: "12분 전", dateBucket: "오늘" },
  { id: "a2", type: "comment", actorName: "한소율", actorInitial: "한", targetTitle: "디자인 시스템 컴포넌트 가이드", targetId: "d3", timeLabel: "35분 전", dateBucket: "오늘" },
  { id: "a3", type: "favorite", actorName: "김도윤", actorInitial: "김", targetTitle: "신규 입사자 온보딩 가이드", targetId: "d1", timeLabel: "1시간 전", dateBucket: "오늘" },
  { id: "a4", type: "edit", actorName: "최민준", actorInitial: "최", targetTitle: "신규 기능 플래그 운영 가이드", targetId: "d9", timeLabel: "3시간 전", dateBucket: "오늘" },
  { id: "a5", type: "share", actorName: "정우진", actorInitial: "정", targetTitle: "장애 대응 런북", targetId: "d5", timeLabel: "어제 17:40", dateBucket: "어제" },
  { id: "a6", type: "comment", actorName: "윤지호", actorInitial: "윤", targetTitle: "디자인 시스템 컴포넌트 가이드", targetId: "d3", timeLabel: "어제 15:10", dateBucket: "어제" },
  { id: "a7", type: "edit", actorName: "이하늘", actorInitial: "이", targetTitle: "디자인 시스템 컴포넌트 가이드", targetId: "d3", timeLabel: "어제 11:02", dateBucket: "어제" },
  { id: "a8", type: "delete", actorName: "최민준", actorInitial: "최", targetTitle: "구 버전 API 마이그레이션", targetId: "d11", timeLabel: "어제 09:20", dateBucket: "어제" },
  { id: "a9", type: "create", actorName: "박서연", actorInitial: "박", targetTitle: "고객 인터뷰 노트, 9월", targetId: "d7", timeLabel: "3일 전", dateBucket: "이번 주" },
  { id: "a10", type: "edit", actorName: "김도윤", actorInitial: "김", targetTitle: "재택근무 정책", targetId: "d8", timeLabel: "3일 전", dateBucket: "이번 주" },
  { id: "a11", type: "share", actorName: "이하늘", actorInitial: "이", targetTitle: "브랜드 컬러·타이포 가이드", targetId: "d6", timeLabel: "4일 전", dateBucket: "이번 주" },
  { id: "a12", type: "comment", actorName: "한소율", actorInitial: "한", targetTitle: "신규 입사자 온보딩 가이드", targetId: "d1", timeLabel: "5일 전", dateBucket: "이번 주" },
  { id: "a13", type: "favorite", actorName: "정우진", actorInitial: "정", targetTitle: "장애 대응 런북", targetId: "d5", timeLabel: "6일 전", dateBucket: "이번 주" },
  { id: "a14", type: "edit", actorName: "최민준", actorInitial: "최", targetTitle: "API 연동 가이드 v3", targetId: "d4", timeLabel: "6일 전", dateBucket: "이번 주" },
];

export interface CommentItem {
  id: string;
  docId: string;
  authorName: string;
  authorInitial: string;
  text: string;
  timeLabel: string;
}

export const INITIAL_COMMENTS: CommentItem[] = [
  { id: "cm1", docId: "d1", authorName: "한소율", authorInitial: "한", text: "저도 첫 주에 이 문서 보고 많이 헤맸는데 이제 훨씬 명확해졌네요!", timeLabel: "2일 전" },
  { id: "cm2", docId: "d1", authorName: "윤지호", authorInitial: "윤", text: "OJT 일정표 링크가 하나 깨져 있는 것 같아요, 확인 부탁드려요.", timeLabel: "1일 전" },
  { id: "cm3", docId: "d1", authorName: "김도윤", authorInitial: "김", text: "확인했습니다, 곧 수정할게요!", timeLabel: "1일 전" },
  { id: "cm4", docId: "d3", authorName: "윤지호", authorInitial: "윤", text: "데이터 테이블 컴포넌트 예시가 특히 도움됐어요.", timeLabel: "3일 전" },
  { id: "cm5", docId: "d3", authorName: "정우진", authorInitial: "정", text: "다크 모드 예시도 추가해주실 수 있을까요?", timeLabel: "2일 전" },
  { id: "cm6", docId: "d5", authorName: "한소율", authorInitial: "한", text: "SEV1 기준이 명확해서 온콜 설 때 든든해요.", timeLabel: "4일 전" },
];

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  timeLabel: string;
  read: boolean;
}

export const NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", title: "한소율님이 댓글을 남겼어요", body: "「신규 입사자 온보딩 가이드」에 새 댓글이 있어요.", timeLabel: "35분 전", read: false },
  { id: "n2", title: "정우진님이 문서를 공유했어요", body: "「장애 대응 런북」을 팀 전체와 공유했어요.", timeLabel: "어제", read: false },
  { id: "n3", title: "임채원님을 초대했어요", body: "초대장이 발송됐고 아직 수락 대기 중이에요.", timeLabel: "3일 전", read: true },
  { id: "n4", title: "박서연님이 역할을 변경했어요", body: "한소율님의 역할이 댓글 작성자로 변경됐어요.", timeLabel: "5일 전", read: true },
];

export const WORKSPACE = {
  name: "블룸 스튜디오",
  storageUsedGB: 8.4,
  storageTotalGB: 15,
};

// 델타 계산용 지난주 기준값
export const STATS_BASELINE = {
  totalDocsLastWeek: 9,
  updatesThisWeek: 7,
  updatesLastWeek: 4,
  activeMembersLastWeek: 6,
  totalViewsLastWeek: 2426,
};

export const TAG_OPTIONS: string[] = [
  "가이드", "정책", "템플릿", "릴리즈", "보안", "디자인시스템", "API", "로드맵", "런북", "리서치", "브랜딩", "마이그레이션",
];

export const SPACE_LIST: DocSpace[] = ["제품", "디자인", "온보딩", "운영"];

// 요일별 활동 수를 CSS 막대로 표시
export const ACTIVITY_BY_DAY: readonly { label: string; value: number }[] = [
  { label: "월", value: 6 },
  { label: "화", value: 9 },
  { label: "수", value: 14 },
  { label: "목", value: 11 },
  { label: "금", value: 8 },
  { label: "토", value: 3 },
  { label: "일", value: 2 },
];
