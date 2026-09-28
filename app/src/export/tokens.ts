interface Decl {
  // 감싸는 블록 목록, root 또는 media 쿼리
  stack: string[];
  name: string;
  value: string;
}

// 주석 제거
function stripComments(css: string): string {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

export function parseDecls(css: string): Decl[] {
  const out: Decl[] = [];
  const stack: string[] = [];
  let buf = "";
  for (const ch of stripComments(css)) {
    if (ch === "{") {
      stack.push(buf.trim);
      buf = "";
    } else if (ch === "}") {
      stack.pop;
      buf = "";
    } else if (ch === ";") {
      const i = buf.indexOf(":");
      const name = i < 0 ? "" : buf.slice(0, i).trim;
      if (name.startsWith("--")) {
        out.push({ stack: [...stack], name, value: buf.slice(i + 1).trim });
      }
      buf = "";
    } else {
      buf += ch;
    }
  }
  return out;
}

// 글자 안에서 var(--x)로 호출된 이름 전부
export function referencedNames(css: string): Set<string> {
  const out = new Set<string>;
  for (const m of stripComments(css).matchAll(/var\(\s*(--[A-Za-z0-9_-]+)/g)) {
    out.add(m[1]);
  }
  return out;
}

export function neededNames(
  componentCss: string,
  decls: Decl[],
  seeds: Iterable<string> = [],
): Set<string> {
  const byName = new Map<string, Decl[]>;
  for (const d of decls) {
    const list = byName.get(d.name);
    if (list) list.push(d);
    else byName.set(d.name, [d]);
  }

  const need = new Set<string>;
  // 씨앗값을 참조와 동일하게 큐에 추가, 누락 시 값 빠짐 문제 있음
  const queue = [...referencedNames(componentCss), ...seeds];
  while (queue.length > 0) {
    const name = queue.pop as string;
    if (need.has(name)) continue;
    need.add(name);
    // 같은 이름 모드마다 값 달라 확인. 한 버전만 보면 다크 전용 참조 누락 문제가 있음
    for (const d of byName.get(name) ?? []) {
      for (const ref of referencedNames(d.value)) queue.push(ref);
    }
  }
  return need;
}

// 블록을 텍스트로 재구성, 들여쓰기는 깊이만큼 적용
function render(stack: string[], lines: string[]): string {
  let body = lines.map((l) => "  ".repeat(stack.length) + l).join("\n");
  for (let i = stack.length - 1; i >= 0; i--) {
    const pad = "  ".repeat(i);
    body = `${pad}${stack[i]} {\n${body}\n${pad}}`;
  }
  return body;
}

export const BASE_LAYER = (name: string): boolean =>
  name.startsWith("--semantic-") || name.startsWith("--base-font-");

export function collectTokens(
  componentCss: string,
  varsCss: string,
  opts: {
    alwaysInclude?: (name: string) => boolean;
    extraSeeds?: readonly string[];
  } = {},
): { css: string; used: string[]; missing: string[] } {
  const decls = parseDecls(varsCss);
  const seeds = new Set<string>(opts.extraSeeds ?? []);
  if (opts.alwaysInclude) {
    for (const d of decls) if (opts.alwaysInclude(d.name)) seeds.add(d.name);
  }
  const need = neededNames(componentCss, decls, seeds);

  // stack 키로 블록별 그룹화, 라이트-다크-고대비 등장 순서 유지
  const groups = new Map<string, { stack: string[]; lines: string[] }>;
  const seen = new Set<string>;
  for (const d of decls) {
    if (!need.has(d.name)) continue;
    const key = d.stack.join("\u0000");
    const g = groups.get(key) ?? { stack: d.stack, lines: [] };
    g.lines.push(`${d.name}: ${d.value};`);
    groups.set(key, g);
    seen.add(d.name);
  }

  const css = [...groups.values]
    .filter((g) => g.lines.length > 0)
    .map((g) => render(g.stack, g.lines))
    .join("\n\n");

  return {
    css,
    used: [...seen].sort,
    // vars.css에 없는 참조 이름, 있으면 값 없이 렌더링
    missing: [...need].filter((n) => !seen.has(n)).sort,
  };
}
