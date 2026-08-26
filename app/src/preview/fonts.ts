export interface FontChoice {
  key: string;
  // 선택 목록에 표시되는 이름, 한글 허용
  label: string;
  family: string;
  // font-family에 들어갈 스택, 첫 이름이 이 글꼴임
  stack: string;
  // 웹폰트 로드용 스타일시트, 없으면 시스템 글꼴 사용
  href?: string;
  // 글꼴이 실제 지원하는 굵기
  weights: number[];
  // 가변 버전 이름. Figma는 가변 글꼴을 일부만 지원
  variable?: string;
}

export const FONTS: FontChoice[] = [
  {
    key: "pretendard",
    family: "Pretendard",
    label: "Pretendard",
    stack: "Pretendard, system-ui, sans-serif",
    href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    variable: "Pretendard Variable",
  },
  {
    key: "nanumsquare-ac",
    family: "NanumSquareAc",
    label: "나눔스퀘어 ac",
    stack: "NanumSquareAc, system-ui, sans-serif",
    // 폰트 스택 첫 이름을 NanumSquareAc로 지정
    href: "https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css",
    weights: [300, 400, 700, 800],
  },
  {
    key: "seoul-namsan",
    family: "Seoul Namsan",
    label: "서울남산체",
    stack: '"Seoul Namsan", system-ui, sans-serif',
    href: "https://cdn.jsdelivr.net/gh/fonts-archive/SeoulNamsan/SeoulNamsan.css",
    weights: [300, 500, 700, 800],
  },
  {
    key: "suite",
    family: "SUITE Variable",
    label: "SUITE",
    // 가변 버전이라 이름에 Variable 포함. 고정 버전은 별도로 미제공
    stack: '"SUITE Variable", system-ui, sans-serif',
    href: "https://cdn.jsdelivr.net/gh/sunn-us/SUITE/fonts/variable/woff2/SUITE-Variable.css",
    weights: [300, 400, 500, 600, 700, 800, 900],
    // 가변 버전이 기본 버전. 고정 버전 없어 스택 이름과 동일
    variable: "SUITE Variable",
  },
];

export const DEFAULT_FONT = FONTS[0].key;

export function fontByKey(key: string): FontChoice {
  return FONTS.find((f) => f.key === key) ?? FONTS[0];
}

const loaded = new Set<string>;

export function loadFont(font: FontChoice) {
  if (!font.href || loaded.has(font.key)) return;
  loaded.add(font.key);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = font.href;
  link.dataset.font = font.key;
  document.head.appendChild(link);
}
