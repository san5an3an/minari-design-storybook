import type { ComponentCandidate, ContractEntry, ContractIndex, Fragment } from "../types";

const W = {
  base: 100, // 72/72 고유값. 일치 시 사실상 확정
  attr: 12, // 계약이 지정한 속성. 여러 개면 값이 곱절로 쌓임
  root: 6,
  part: 4, // 자손 태그 일치. 태그당 한 번만 적용
  partCls: 20, // part 클래스까지 일치 시 base 다음 우선순위
  role: 12, // role 값은 계약 이름과 동일한 타입 지정 위치
} as const;

const GENERIC = new Set(["div", "span", "p", "i", "b", "em", "strong", "small"]);

// 자손을 깊이 우선으로 전부 펼치기
function flatten(f: Fragment): Fragment[] {
  return [f, ...f.children.flatMap(flatten)];
}

function scoreOne(f: Fragment, entry: ContractEntry): { score: number; because: string[] } {
  const because: string[] = [];
  let score = 0;
  const all = flatten(f);
  const classes = new Set(all.flatMap((n) => n.classes));
  const tags = new Set(all.map((n) => n.tag));

  if (f.classes.includes(entry.base)) {
    score += W.base;
    because.push(`루트 클래스가 \`${entry.base}\`. 이 이름은 72종에서 유일`);
  }

  if (f.tag === entry.root) {
    score += W.root;
    because.push(`루트 태그 \`<${entry.root}>\``);
  }

  // 마크업 속성 확인. aria-pressed 유무가 badge, chip 구분 신호
  for (const p of entry.props ?? []) {
    if (p.kind !== "attr") continue;
    if (p.prop in f.attrs) {
      score += W.attr;
      because.push(`\`${p.prop}\` 속성이 있다. 계약이 이 컴포넌트의 표시로 삼는 것`);
    }
  }

  const parts = (entry.parts ?? []) as Array<{ cls?: string; tag?: string; name?: string }>;
  const partClasses = new Map<string, string>; // cls는 사람에게 보일 하위 컴포넌트 이름
  const partTags = new Map<string, string>;
  for (const part of parts) {
    if (part.cls && !partClasses.has(part.cls)) partClasses.set(part.cls, part.name ?? "");
    else if (part.tag && !partTags.has(part.tag)) partTags.set(part.tag, part.name ?? "");
  }
  for (const [cls, name] of partClasses) {
    if (!classes.has(cls)) continue;
    score += W.partCls;
    because.push(`부품 클래스 \`${cls}\` (${name}) 가 자손에 있다`);
  }
  for (const [tag, name] of partTags) {
    if (GENERIC.has(tag) || !tags.has(tag) || tag === f.tag) continue;
    score += W.part;
    because.push(`부품 태그 \`<${tag}>\` (${name}) 가 자손에 있다`);
  }

  const role = f.attrs["role"];
  if (role && role === entry.name) {
    score += W.role;
    because.push(`\`role="${role}"\` 이 계약 이름과 같다. 작성자가 명시한 위치`);
  }

  return { score, because };
}

const NEAR = 0.8;

export function rankComponents(f: Fragment, contract: ContractIndex): ComponentCandidate[] {
  const scored = Object.values(contract).map((entry) => {
    const { score, because } = scoreOne(f, entry);
    return { component: entry.name, raw: score, because, entry };
  });

  const top = Math.max(...scored.map((s) => s.raw), 0);
  if (top === 0) return [];

  const CEIL = W.base;

  const ranked = scored
    .filter((s) => s.raw > 0)
    .map((s) => ({
      ...s,
      score: Math.min(s.raw / CEIL, 1),
      sawBase: s.because.some((line) => line.includes("루트 클래스가")),
    }))
    .sort((a, b) => b.score - a.score || a.component.localeCompare(b.component));

  // 그룹 판별은 최고점 대비 상대 비교. score는 확실성, 그룹은 구분 가능성 기준
  const near = ranked.filter((s) => s.raw >= top * NEAR).map((s) => s.component);

  const TOO_MANY = Math.max(8, Math.floor(Object.keys(contract).length / 2));
  const meaningful = near.length > 1 && near.length <= TOO_MANY;

  return ranked.map((s) => {
    const tied = s.raw >= top * NEAR && meaningful ? near.filter((c) => c !== s.component) : [];
    return {
      component: s.component,
      score: Number(s.score.toFixed(3)),
      sawBase: s.sawBase,
      because: s.because,
      tiedWith: tied,
      cannotTellFromMarkup: tied.map(
        (c) => `\`${c}\` 와 점수가 붙는다. 마크업만으로는 못 가른다`,
      ),
      tooManyTies: s.raw >= top * NEAR && near.length > TOO_MANY ? near.length : undefined,
    };
  });
}
