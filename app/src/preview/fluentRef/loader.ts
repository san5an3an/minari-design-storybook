import index from "./index.json";

// storybook story 하나, code는 원문 그대로
export interface FluentStory {
  // Storybook에 표시되는 사람이 읽는 제목
  name: string;
  // 공식 저장소 내 원본 경로
  file: string;
  code: string;
}

export interface FluentDoc {
  slug: string;
  title: string;
  // storybook title 그대로, 계층 경로
  group: string;
  // 컴포넌트가 속한 npm 패키지 react-button
  package: string;
  description: string;
  // {Comp}BestPractices.md 원문. 빈 문자열이면 파일이 없다는 뜻임
  bestPractices: string;
  // {Comp}AccessibilitySpec.mdx 원문
  a11y: string;
  stories: FluentStory[];
  docHref: string;
}

export interface FluentIndexEntry {
  slug: string;
  title: string;
  group: string;
}

const NOT_A_COMPONENT_HERE: Record<string, string> = {
  "menu-grid": "아직 다듬는 중인 Preview 컴포넌트예요. 이 저장소는 «쓰는 사람이 보는 것»만 담아요.",
};

export const NO_OFFICIAL_EXAMPLES: Record<string, string> = {
  "action-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "checkbox-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "command-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "compound-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "default-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "menu-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "primary-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  "toggle-button-shim": "v8 → v9 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  stack: "v8 의 `Stack` 을 v9 로 연결하는 이전용 어댑터라 공식 storybook 에 예제가 없어요.",
  introduction: "컴포넌트가 아니라 Motion 을 설명하는 문서 쪽이에요.",
};

const ALL = index as FluentIndexEntry[];

export const FLUENT_INDEX: FluentIndexEntry[] = ALL.filter(
  (c) => !(c.slug in NOT_A_COMPONENT_HERE),
);

export const FLUENT_GROUPS: Record<string, string[]> = FLUENT_INDEX.reduce(
  (acc, c) => {
    const top = c.group.split("/")[0];
    (acc[top] ??= []).push(c.slug);
    return acc;
  },
  {} as Record<string, string[]>,
);

const BY_SLUG = new Map(FLUENT_INDEX.map((c) => [c.slug, c]));

// 이름의 fluent 공식 컴포넌트 여부. 라우팅에서 fluent 화면 구분에 사용
export function isFluentSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function fluentEntry(slug: string): FluentIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadFluentDoc(slug: string): Promise<FluentDoc> | null {
  if (!isFluentSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as FluentDoc);
}
