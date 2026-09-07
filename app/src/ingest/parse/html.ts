import type { Fragment } from "../types";

// 프래그먼트 여부 판별, 임계값이 아니라 명백히 빈 컨테이너만 제외
const SKIP_TAGS = new Set(["script", "style", "meta", "link", "title", "head", "br", "wbr"]);

const SEMANTIC = new Set([
  "button", "a", "input", "select", "textarea", "label",
  "dialog", "details", "summary", "progress", "meter", "output", "fieldset", "table",
]);

// 프래그먼트당 포함 요소 수 상한. 넘으면 컴포넌트가 아니라 구획으로 분류되는 기준임
const MAX_NODES = 14;

function countNodes(el: Element): number {
  return 1 + Array.from(el.children).reduce((s, c) => s + countNodes(c), 0);
}

// 상호작용 요소 여러 개 포함 시 그룹으로 처리
function interactiveKids(el: Element): number {
  return Array.from(el.querySelectorAll("button, a, input, select, textarea")).length;
}

// 명시적 타입 지정 여부
function hasRoleMark(el: Element): boolean {
  if (el.hasAttribute("role")) return true;
  return Array.from(el.attributes).some((a) => a.name.startsWith("aria-"));
}

// 프래그먼트 뿌리 위치 결정, 신호 없는 목업에서는 프래그먼트 미생성
function isCandidateRoot(el: Element): boolean {
  const tag = el.tagName.toLowerCase;
  if (SKIP_TAGS.has(tag)) return false;
  if (SEMANTIC.has(tag)) return true;
  // ARIA role 기반 명명 대상, 그룹은 제외
  return hasRoleMark(el) && interactiveKids(el) <= 1 && countNodes(el) <= MAX_NODES;
}

function directText(el: Element): string {
  let s = "";
  for (const n of Array.from(el.childNodes)) {
    if (n.nodeType === 3 /* TEXT_NODE */) s += n.textContent ?? "";
  }
  return s.replace(/\s+/g, " ").trim;
}

function attrsOf(el: Element): Record<string, string> {
  const out: Record<string, string> = {};
  for (const a of Array.from(el.attributes)) {
    // class는 classes로 보관, style은 별도 추출돼 제외. 값 불일치시 위험 있음
    if (a.name === "class" || a.name === "style") continue;
    out[a.name] = a.value;
  }
  return out;
}

const KEEP_SIBLINGS = 3;

// 형제 요소 간 모양 비교. 텍스트 무시, 값 달라도 같은 것으로 처리
function siblingShape(el: Element): string {
  return el.tagName + "|" + Array.from(el.classList).sort.join(".");
}

function prunedClone(el: Element): Element {
  const clone = el.cloneNode(true) as Element;
  const doc = el.ownerDocument;
  const walk = (n: Element) => {
    const groups = new Map<string, Element[]>;
    for (const kid of Array.from(n.children)) {
      const k = siblingShape(kid);
      const g = groups.get(k);
      if (g) g.push(kid);
      else groups.set(k, [kid]);
    }
    for (const g of groups.values) {
      if (g.length <= KEEP_SIBLINGS) continue;
      for (const extra of g.slice(KEEP_SIBLINGS)) extra.remove;
      g[KEEP_SIBLINGS - 1].after(
        doc.createComment(` …같은 모양 ${g.length - KEEP_SIBLINGS}개 더 (담을 때 줄임) `),
      );
    }
    for (const kid of Array.from(n.children)) walk(kid);
  };
  walk(clone);
  return clone;
}

function toFragment(el: Element, path: string, line: number | null): Fragment {
  const kids = Array.from(el.children).filter((c) => !SKIP_TAGS.has(c.tagName.toLowerCase));
  const f: Fragment = {
    id: path,
    tag: el.tagName.toLowerCase,
    classes: Array.from(el.classList),
    attrs: attrsOf(el),
    children: kids.map((c, i) => toFragment(c, `${path}/${i}`, null)),
    text: directText(el),
    sameCount: 1,
  };
  if (line !== null) {
    f.source = { line };
    // 미리보기 렌더링에 사용. 자르면 태그가 끊겨 화면이 깨지는 문제가 있음
    f.html = el.outerHTML;
  }
  return f;
}

function signatureOf(f: Fragment): string {
  return [
    f.tag,
    [...f.classes].sort.join("."),
    f.children.map((c) => c.tag).join(","),
    // 상태 표시 유지, aria-pressed 유무가 chip, badge 구분 기준
    Object.keys(f.attrs).filter((k) => k.startsWith("aria-") || k === "role" || k === "type").sort.join(","),
  ].join("|");
}

export function parseFragments(html: string): Fragment[] {
  const doc = new DOMParser.parseFromString(html, "text/html");

  // 줄 번호 남기기. DOMParser가 줄 정보를 제공하지 않음
  const lineOf = (el: Element): number => {
    const idx = html.indexOf(el.outerHTML.slice(0, 80));
    return idx < 0 ? 0 : html.slice(0, idx).split("\n").length;
  };

  const roots: Fragment[] = [];
  const seen = new Set<Element>;
  let i = 0;
  for (const el of Array.from(doc.body.querySelectorAll("*"))) {
    if (!isCandidateRoot(el)) continue;
    if (!SEMANTIC.has(el.tagName.toLowerCase) && Array.from(seen).some((s) => s.contains(el))) {
      continue;
    }
    seen.add(el);
    // 줄 번호는 원본 요소 기준으로 계산
    roots.push(toFragment(prunedClone(el), `f${i++}`, lineOf(el)));
  }

  // 같은 모양을 그룹으로 통합. 첫 항목을 대표로 두고 개수만 계산
  const bySig = new Map<string, Fragment>;
  for (const f of roots) {
    const sig = signatureOf(f);
    const first = bySig.get(sig);
    if (first) first.sameCount += 1;
    else bySig.set(sig, f);
  }
  return [...bySig.values];
}

export function extractHead(html: string): { head: string; bodyClass: string } {
  const doc = new DOMParser.parseFromString(html, "text/html");
  const parts: string[] = [];
  for (const el of Array.from(doc.head.children)) {
    const tag = el.tagName.toLowerCase;
    if (tag === "style" || tag === "script") parts.push(el.outerHTML);
    else if (tag === "link" && /stylesheet|preconnect|dns-prefetch/.test(el.getAttribute("rel") ?? "")) {
      parts.push(el.outerHTML);
    }
  }
  return { head: parts.join("\n"), bodyClass: doc.body.className };
}
