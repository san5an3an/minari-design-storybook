import type { BaseRefDoc } from "./refContract";

export type PropTable = { name: string | null; columns: string[]; rows: string[][] };
type Baked = { components?: Record<string, PropTable> };

export const DERIVED_REASON =
 "공식 문서에 정리된 표가 없어서, 설치된 패키지에 들어 있는 타입 정의에서 뽑았어요. "
 + "이 컴포넌트가 물려받는 속성까지 함께 담았습니다. "
 + "설명과 기본값은 그 타입 정의에 달린 주석에서 가져온 것이라 공식 문서의 표현과 다를 수 있고, "
 + "기본값이 주석에 안 적힌 속성은 기본값 필드가 비어 있어요. 기본값이 없다는 뜻은 아닙니다. "
 + "타입 정의에 없는 것(문서에만 있거나 실행 중에만 받는 값)은 여기 없어요.";

// 베이스별 1회만 읽기, 키는 베이스 이름
const cache = new Map<string, Promise<Baked>>;

function load(base: string): Promise<Baked> {
 let p = cache.get(base);
 if (!p) {
 // 정적 대신 동적 import 사용. 파일 합계 11MB로 첫 화면 번들에 포함할 수 없는 크기임
 p = import(`../vendor-types/prop-tables/${base}.json`)
 .then((m) => (m.default ?? m) as Baked)
 .catch( => ({} as Baked));
 cache.set(base, p);
 }
 return p;
}

// 문서 slug, title로 이름 후보 생성, 규칙 불일치 시 어긋날 수 있음
function candidates(slug: string, title?: string | null): string[] {
 const pascal = (x: string) =>
 x.split(/[-_ ]+/).filter(Boolean).map((w) => w[0].toUpperCase + w.slice(1)).join("");
 const singular = (x: string) =>
 x.endsWith("ies") ? `${x.slice(0, -3)}y`
 : /(ses|xes|ches|shes)$/.test(x) ? x.slice(0, -2)
 : x.endsWith("s") && !x.endsWith("ss") ? x.slice(0, -1) : x;
 const out: string[] = [];
 for (const c of [title, (title ?? "").replace(/\s+/g, ""), pascal(slug), slug,
 pascal(singular(slug)), singular((title ?? "").replace(/\s+/g, ""))]) {
 const v = (c ?? "").trim;
 if (v && !out.includes(v)) out.push(v);
 }
 return out;
}

function widen(names: string[], comps: Record<string, PropTable>) {
 const keys = Object.keys(comps);
 const lower = new Map(keys.map((n) => [n.toLowerCase, n]));
 for (const c of [...names]) {
 const hit = lower.get(c.toLowerCase);
 if (hit && !names.includes(hit)) names.push(hit);
 }
 for (const c of [...names]) {
 if (comps[`${c}Root`] && !names.includes(`${c}Root`)) names.push(`${c}Root`);
 }
 for (const c of [...names]) {
 const m = keys.filter((n) => n.includes(c));
 if (m.length === 1 && !names.includes(m[0])) names.push(m[0]);
 }
}

export function pickTable(
 comps: Record<string, PropTable>, slug: string, title?: string | null,
): PropTable | null {
 const names = candidates(slug, title);
 widen(names, comps);
 for (const n of names) if (comps[n]?.rows?.length) return comps[n];
 return null;
}

// 비어 있으면 타입에서 추출한 표로 채우고, 아니면 입력값 그대로 반환
export async function fillApi(
 base: string,
 slug: string,
 title: string | null | undefined,
 current: BaseRefDoc["api"],
): Promise<BaseRefDoc["api"]> {
 const presence = current?.presence;
 if (presence === "official" || presence === "derived") return current;
 // absent-in-official 사유 명시 시에만 공식 미존재로 확인
 if (presence === "absent-in-official" && (current?.reason ?? "").trim) return current;
 if ((current?.tables?.length ?? 0) > 0) return current;

 const comps = (await load(base)).components;
 if (!comps) return current;
 const t = pickTable(comps, slug, title);
 if (!t) return current;
 return {
 presence: "derived",
 reason: DERIVED_REASON,
 tables: [{ name: t.name, columns: t.columns, rows: t.rows }],
 };
}

// 표 조회 후 반환. 없으면 null 반환
async function findTable(base: string, slug: string, title?: string | null) {
 const comps = (await load(base)).components;
 return comps ? pickTable(comps, slug, title) : null;
}

// antd 데이터 형태 { name, columns, rows } 그대로 사용
export async function fillAntdApi(slug: string, title: string | null | undefined) {
 const t = await findTable("antd", slug, title);
 return t ? [{ name: t.name ?? slug, columns: t.columns, rows: t.rows }] : null;
}

// mui 문서 slug는 실제 소속 패키지와 다를 수 있음
const MUI_PKG: Record<string, string> = {
 charts: "mui-x-charts",
 "data-grid": "mui-x-data-grid",
 "date-pickers": "mui-x-date-pickers",
 "tree-view": "mui-x-tree-view",
};

// mui 데이터 형태
export async function fillMuiApi(slug: string, title: string | null | undefined) {
 const t = await findTable(MUI_PKG[slug] ?? "mui", slug, title);
 if (!t) return null;
 // 표 열 순서: prop, 타입, 필수, 기본값, 설명
 return [{
 name: t.name ?? slug,
 description: "",
 props: t.rows.map((r) => ({
 prop: r[0], type: r[1], required: r[2] === "필수",
 default: r[3] || null, deprecated: false, desc: r[4] ?? "",
 })),
 classes: [],
 }];
}
