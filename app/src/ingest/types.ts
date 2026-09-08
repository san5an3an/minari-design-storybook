export const INGEST_KIND = "ods.ingest";
export const INGEST_VERSION = 1;

// 목업에서 추출한 마크업 일부, 유형 미정
export interface Fragment {
  // 블록을 가리키는 안정된 이름. 같은 파일 재입력 시 같은 값 보장 필요
  id: string;
  // 루트 요소 태그 div, button 등
  tag: string;
  // 루트 요소의 클래스 목록
  classes: string[];
  // 루트 요소 속성 aria-*, role, type 등. 매칭 강한 신호
  attrs: Record<string, string>;
  // 자손 구조 정보, 깊이, 태그, 클래스만 포함, 텍스트는 text로 별도 유지
  children: Fragment[];
  // 블록이 직접 갖는 글자
  text: string;
  source?: { line: number | null };
  html?: string;
  sameCount: number;
}

export interface ComponentCandidate {
  // 계약상의 이름. chip, badge 등 api.json의 키
  component: string;
  // 0..1 정렬 기준값. 임계값 아니므로 낮아도 유지
  score: number;
  // 점수의 출처. 사람이 선택할 때 참고하는 행
  because: string[];
  // 이 후보 선택 시 마크업만으로 확인 불가한 항목. 선택 후 사람이 직접 확인
  cannotTellFromMarkup: string[];
  tiedWith?: string[];
  // 1.000의 근거. true면 base 클래스를 실제로 확인
  sawBase?: boolean;
  // 동점 그룹 접힘 크기. 값이 있으면 과도하게 크다는 뜻, 빈 tiedWith와 다른 값임
  tooManyTies?: number;
}

// 구체값 하나에 대한 시맨틱 토큰 후보
export interface TokenCandidate {
  // bg.brand.default를 color에 그대로 대입하기
  token: string;
  // 20색 중 토큰 일치 시스템 수. 20이면 전체 일치
  matchedSystems: number;
  indistinguishableFrom: string[];
}

export interface Unresolved {
  about: "component" | "token" | "prop" | "text" | "condition";
  // 대상 요소 또는 값
  target: string;
  // 사람에게 보이는 질문 한 줄
  question: string;
  // 선택 가능 목록, 비어 있으면 자유 입력
  options: string[];
  // 사람이 선택한 답, null이면 미결 상태
  answer: string | null;
}

export interface Draft {
  kind: typeof INGEST_KIND;
  version: typeof INGEST_VERSION;
  id: string;
  createdAt: string;
  updatedAt: string;

  // 원본 파일 추적으로 출처 확인
  source: {
    filename: string;
    // 내용 해시로 같은 파일 중복 삽입 판별
    hash: string;
    bytes: number;
  };

  // 사람이 지정한 이름, 미정이면 null, 마크업에 이름 없는 경우
  name: string | null;

  names?: Record<string, string>;

  preview?: { head: string; bodyClass: string };

  fragments: Fragment[];
  // 프래그먼트 id별 후보 순위, 점수 내림차순
  candidates: Record<string, ComponentCandidate[]>;
  // 구체값 #0052cc, 0.75rem 등에 대응하는 토큰 후보
  tokens: Record<string, TokenCandidate[]>;
  unresolved: Unresolved[];

  selected: string[] | null;

  mode: "match" | "create";

  needsHuman: string[];
}

// 미결 항목 존재 여부. 등록 가능 여부를 결정하는 유일한 판별식임
export function isSettled(d: Draft): boolean {
  return d.unresolved.every((u) => u.answer !== null);
}

// 런타임 중립성 확보용 외부 인터페이스
export interface IngestResources {
  // HTML 문자열을 조각들로 변환
  parseFragments(html: string): Fragment[];
  // 시스템 슬러그로 api.json 72종 계약 조회하기
  contractFor(slug: string): Promise<ContractIndex>;
  tokensFor(slug: string): Promise<Record<string, Record<string, string>>>;
  // 내용 해시, 런타임마다 다른 외부 주입 값
  hash(text: string): string;
}

// api.json 구조 중 읽는 부분만 적기
export type ContractIndex = Record<string, ContractEntry>;

export interface ContractEntry {
  name: string;
  title: string;
  summary: string;
  // 루트 태그 button, div 등. div가 72종 중 41종이라 태그만으로 구별되지 않음
  root: string;
  // base 클래스 ods-chip, 72/72 고유하나 다른 목업엔 없음
  base: string;
  parts?: unknown[];
  props?: Array<{ prop: string; kind: string; values?: string[]; default?: string; desc?: string }>;
}

export interface Store {
  // upsert 방식. 같은 id 재호출 시 덮어쓰기, 두 번째 호출 실패 금지
  save(d: Draft): Promise<void>;
  load(id: string): Promise<Draft | null>;
  list: Promise<DraftSummary[]>;
  remove(id: string): Promise<void>;
  usage?: Promise<{ usedBytes: number; quotaBytes: number | null }>;
}

// 목록 표시분만 로드. 초안 전체 읽기 방지
export interface DraftSummary {
  id: string;
  name: string | null;
  filename: string;
  createdAt: string;
  updatedAt: string;
  fragmentCount: number;
  // 미응답 건수, 0이면 등록 가능
  openQuestions: number;
  bytes: number | null;
}
