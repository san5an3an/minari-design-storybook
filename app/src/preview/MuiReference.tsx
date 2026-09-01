import * as React from "react";
import Markdown, { type Components } from "react-markdown";
import { parseColorTokens } from "./tokens";
import { Master, Kids, Kid } from "./Doc";
// shadcn ComponentPage, antd와 동일 표 재사용. 값 어긋날 수 있음
import { TokenTable } from "./TokenTable";
import { loadKo, pick, type KoText } from "./muiRef/ko";
import { loadMuiDoc, muiEntry, type MuiBlock, type MuiDoc } from "./muiRef/loader";
import { loadDemos, type DemoModule, type ToneColor } from "./muiRef/demos";
import type { Mode } from "../systems/types";
import type { SystemDefinition } from "../systems/types";

function officialHref(href: string | undefined, slug: string): string {
  if (!href) return "";
  if (/^[a-z]+:/i.test(href)) return href; // 이미 절대 URL인지 여부
  if (href.startsWith("#")) return `https://mui.com/material-ui/react-${slug}/${href}`;
  return `https://mui.com${href.startsWith("/") ? "" : "/"}${href}`;
}

const MARK: Record<string, string> = {
  warning: "", info: "ℹ️", success: "", error: "", note: "📝",
};
// 닫는 ::: 중 들여쓰기된 경우는 ^::: 패턴으로 잡히지 않음
const DIRECTIVE = /^:::(\w+)[^\S\n]*\n([\s\S]*?)^[ \t]*:::[ \t]*$/gm;

function undirective(text: string): string {
  return text.replace(DIRECTIVE, (_m, kind: string, body: string) => {
    const head = MARK[kind] ?? "•";
    return body.trim.split("\n").map((l, i) => `> ${i === 0 ? `${head} ` : ""}${l}`)
      .join("\n");
  });
}

const HTML_TO_MD: [RegExp, string][] = [
  [/<\/?(?:ul|p)>/gi, "\n\n"],
  [/<li>/gi, "\n- "],
  [/<\/li>/gi, ""],
  [/<br\s*\/?>/gi, "  \n"], // 마크다운의 강제 줄바꿈
  [/<code>([\s\S]*?)<\/code>/gi, "`$1`"],
  [/<strong>([\s\S]*?)<\/strong>/gi, "**$1**"],
  [/<em>([\s\S]*?)<\/em>/gi, "*$1*"],
  [/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)"],
];

const ENTITY = /&(?:#\d+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]{1,31});/g;
const entityCache = new Map<string, string>;

function decodeEntities(s: string): string {
  if (!s.includes("&") || typeof document === "undefined") return s;
  return s.replace(ENTITY, (tok) => {
    let got = entityCache.get(tok);
    if (got === undefined) {
      const el = document.createElement("textarea");
      el.innerHTML = tok;
      got = el.value;
      entityCache.set(tok, got);
    }
    return got;
  });
}

function htmlToMarkdown(s: string): string {
  return decodeEntities(HTML_TO_MD.reduce((acc, [re, to]) => acc.replace(re, to), s));
}

// @param html HTML 원문 여부, md 본문에는 비적용
function Prose({ text, slug, html }: { text: string; slug: string; html?: boolean }) {
  const md = React.useMemo(
     => undirective(html ? htmlToMarkdown(text) : text), [text, html]);
  const components = React.useMemo<Components>( => ({
    a: ({ href, children }) => (
      <a href={officialHref(href, slug)} target="_blank" rel="noreferrer">{children}</a>
    ),
    img: ({ src, alt }) => (
      <img
        src={officialHref(typeof src === "string" ? src : undefined, slug)}
        alt={alt ?? ""}
        style={{ maxWidth: "100%", height: "auto", borderRadius: ".375rem" }}
      />
    ),
    pre:  => null,
  }), [slug]);
  return <div className="doc-prose"><Markdown components={components}>{md}</Markdown></div>;
}

// 예제 오류 시 페이지 전체 유지. 오류 내용은 숨기지 않고 표시
class DemoBoundary extends React.Component<
  { name: string; children: React.ReactNode },
  { err: string | null }
> {
  state = { err: null as string | null };
  static getDerivedStateFromError(e: unknown) {
    return { err: e instanceof Error ? e.message : String(e) };
  }
  render {
    if (this.state.err) {
      return (
        <p className="doc-note" style={{ marginTop: 0 }}>
          이 예제(<code>{this.props.name}</code>)는 <b>세우다가 터졌어요.</b>{" "}
          감추지 않고 그대로 알립니다, <code>{this.state.err}</code>
        </p>
      );
    }
    return this.props.children;
  }
}

function docId(title: string): string {
  return title.trim.toLowerCase.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// 명세서 섹션. 제목, 개수, 설명 표시
function Section({ title, count, note, children }: {
  title: string; count?: number; note?: React.ReactNode; children?: React.ReactNode;
}) {
  return (
    <section className="doc-section" id={docId(title)}>
      <h2>{title}{count === undefined ? null : <span className="doc-axis">{count}</span>}</h2>
      {note ? <p className="doc-note" style={{ marginTop: 0 }}>{note}</p> : null}
      {children}
    </section>
  );
}

function josa(word: string): string {
  const last = word.trim.slice(-1).charCodeAt(0);
  const hangul = last >= 0xac00 && last <= 0xd7a3;
  return hangul && (last - 0xac00) % 28 !== 0 ? "이" : "가";
}

// 공식에 해당 섹션이 없을 때. 빈 화면으로 두지 않음
function Absent({ what }: { what: string }) {
  // 보충 설명 문구 생략
  return (
    <p className="doc-note" style={{ marginTop: 0 }}>
      공식 문서에 <b>{what}{josa(what)} 없어요.</b>
    </p>
  );
}

function Block({ block, doc, mod, Provider, active, tones, ko }: {
  block: MuiBlock;
  doc: MuiDoc;
  mod: DemoModule | null;
  Provider: SystemDefinition["Provider"];
  active: Mode;
  tones: ToneColor[];
  ko: KoText | null;
}) {
  // 번역 우선 사용, 없으면 원문. 코드 블록은 공식 삽입 콘텐츠라 제외
  if (block.kind === "prose") return <Prose text={pick(ko, block.text)} slug={doc.slug} />;

  if (block.kind === "code") return null;

  const Demo = mod ? mod.demos[block.name] : undefined;
  const why = mod ? mod.skipped[block.name] : undefined;

  if (Demo) {
    return (
      <div className="doc-demo-contain">
        <DemoBoundary name={block.name}>
          <Provider mode={active}><Demo tones={tones} /></Provider>
        </DemoBoundary>
      </div>
    );
  }
  if (why) {
    // 생성 실패 사유 기록. 없으면 빈 화면과 정상 상태가 구별 안 되는 문제 있음
    return <p className="doc-note">{why}</p>;
  }
  if (mod) {
    return (
      <p className="doc-note">
        이 예제는 <b>못 찾았어요.</b> 이름이 <code>{block.name}</code> 인데{" "}
        <code>muiRef/demos/{doc.slug}/</code> 의 열쇠와 안 맞아요.
      </p>
    );
  }
  return <p className="doc-note">예제를 불러오는 중…</p>;
}

// 저장소가 다른 항목, MUI X 4종. 목록엔 공식 그대로 두고 제외 사유 기재
function External({ slug, title }: { slug: string; title: string }) {
  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{title}</h2>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          <b>MUI X</b> · 공식 메뉴에 있는 그대로 위치를 잡아 뒀어요.
        </p>
      </header>
      <p className="doc-note">
        이 컴포넌트의 문서와 예제는 <b>다른 저장소</b>(<code>mui/mui-x</code>)에 있어서
        아직 안 가져왔어요. 빠뜨린 게 아니라 <b>아직 안 한 것</b>이에요,{" "}
        <a href={`https://mui.com/x/react-${slug}/`} target="_blank" rel="noreferrer">
          공식 문서
        </a>
        에서 볼 수 있어요.
      </p>
    </>
  );
}

export function MuiReference({ slug, system, active }: {
  slug: string;
  system: SystemDefinition;
  active: Mode;
}) {
  const Provider = system.Provider;
  const entry = muiEntry(slug);

  const tones: ToneColor[] = React.useMemo( => {
    const byName = new Map(parseColorTokens(system.vars).map((t) => [t.name, t]));
    return system.buttonTones.map((name) => ({
      name,
      hex: byName.get(`--semantic-bg-${name}-default`)?.values[active] ?? "",
    }));
  }, [system.vars, system.buttonTones, active]);

  const [doc, setDoc] = React.useState<MuiDoc | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [mod, setMod] = React.useState<DemoModule | null>(null);

  // 참조 데이터와 별도 호출. MUI 컴포넌트 많아 지연 문제 있음
  React.useEffect( => {
    let alive = true;
    setMod(null);
    const p = loadDemos(slug);
    if (!p) return;
    p.then((d) => { if (alive) setMod(d); })
     .catch( => { /* 못 실으면 글과 이유만 유지 */ });
    return  => { alive = false; };
  }, [slug]);

  const [ko, setKo] = React.useState<KoText | null>(null);
  React.useEffect( => {
    let alive = true;
    loadKo.then((k) => { if (alive) setKo(k); }).catch( => {});
    return  => { alive = false; };
  }, []);

  React.useEffect( => {
    let alive = true; // 빠른 전환 시 늦게 도착한 응답의 화면 덮어쓰기 방지
    setDoc(null); setErr(null);
    const p = loadMuiDoc(slug);
    if (!p) return; // 저장소가 다른 항목
    p.then((d) => { if (alive) setDoc(d); })
     .catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [slug]);

  if (entry?.external) return <External slug={slug} title={entry.title} />;
  if (err) return <p className="doc-note">{err}</p>;
  if (!doc) return <p className="doc-note">불러오는 중…</p>;

  const flat = doc.sections.flatMap((sec) =>
    sec.blocks.filter((b) => b.kind === "demo").map((block) => ({ axis: sec.title, block })));
  const introAt = flat.findIndex((f) => f.axis === "Introduction");
  const masterAt = introAt >= 0 ? introAt : 0;
  const master = flat[masterAt];
  const variants = flat.filter((_, i) => i !== masterAt);

  const byAxis: [string, typeof variants][] = [];
  for (const v of variants) {
    const cur = byAxis.find(([axis]) => axis === v.axis);
    if (cur) cur[1].push(v); else byAxis.push([v.axis, [v]]);
  }

  // 공식 해부도. shadcn 명세서 Parts 위치라 이름만 맞추고 내용은 공식 그대로 유지
  const anatomy = doc.sections.find((s) => s.title === "Anatomy");

  const TOKEN_GROUP: Record<string, string> = {
    "text-field": "input", breadcrumbs: "breadcrumb", snackbar: "toast",
  };
  const tokenGroup = TOKEN_GROUP[doc.slug] ?? doc.slug;
  const ourTokens = parseColorTokens(system.vars)
    .filter((t) => t.name.startsWith(`--component-${tokenGroup}-`));

  const one = (f: { axis: string; block: MuiBlock }) => (
    <Block block={f.block} doc={doc} mod={mod} Provider={Provider}
           active={active} tones={tones} ko={ko} />
  );

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{doc.title}</h2>
        {doc.description ? (
          <p className="doc-lead">{ko?.lead[doc.slug] || doc.description}</p>
        ) : null}
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          <b>{doc.group}</b> · 공식 문서의 예제를 <b>그대로</b> 세운 명세서예요.{" "}
          <b>MUI 를 골랐을 때만</b> 보여요.{" "}
          <a href={doc.docHref} target="_blank" rel="noreferrer">공식 문서</a>
        </p>
      </header>

      <Master
        note={<>공식 문서가 맨 앞에 두는 기본형이에요{introAt >= 0
          ? <>, <b>Introduction</b> 바로 아래 그것이에요.</>
          : <>. 이 컴포넌트엔 <b>Introduction 절이 없어서</b> 문서 순서의 첫 예제예요.</>}{" "}
          {/* 뒷문장은 antd 화면 문구와 동일하게 유지 */}
          색·모서리·글자는 <b>이 시스템 토큰</b>을 사용해요. 아래 <b>Tokens</b>을 참고해주세요.</>}
      >
        {master ? one(master) : <Absent what="예제" />}
      </Master>

      {/* 축마다 섹션 구성, 이름을 h2 제목으로 표시 */}
      {variants.length === 0 ? (
        <Section title="Variants">
          <Absent what="기본형 말고 다른 예제" />
        </Section>
      ) : (
        byAxis.map(([axis, list]) => (
          <Kids key={axis} axis={axis || "기타"}>
            {/* 왼쪽 라벨은 공식 예제 이름 사용, 임의 이름은 문서에서 못 찾음 */}
            {list.map((f, i) => (
              <Kid key={i} label={f.block.name}>{one(f)}</Kid>
            ))}
          </Kids>
        ))
      )}

      <Section title="Parts">
        {anatomy
          ? anatomy.blocks.map((b, bi) => (
              <Block key={bi} block={b} doc={doc} mod={mod} Provider={Provider}
                     active={active} tones={tones} ko={ko} />
            ))
          : <Absent what="Anatomy" />}
      </Section>

      <Section
        title="API Reference"
        count={doc.api.length || undefined}
        note={<>공식 문서의 API 절을 <b>그대로</b> 가져온 거예요.</>}
      >
        {doc.api.length === 0 ? <Absent what="API" /> : null}

      {/* 표를 같은 섹션 안에 배치, 별도 섹션 분리 없이 유지 */}
      {doc.api.map((api) => (
        <div key={api.name} className="doc-api-block">
          <h3 className="doc-h3">{api.name}</h3>
          {/* api.description 미표시, 소스 설명문에 산문과 예제, 경고 상자까지 포함되어 있음 */}
          <div style={{ overflowX: "auto" }}>
            <table className="doc-props doc-ref-table">
              <thead>
                <tr><th>Prop</th><th>Type</th><th>Default</th><th>설명</th></tr>
              </thead>
              <tbody>
                {api.props.map((p) => (
                  <tr key={p.prop}>
                    <th>
                      <code>{p.prop}</code>
                      {p.required ? <i className="doc-req-mark">필수</i> : null}
                    </th>
                    {/* Type 값은 공식 문서 HTML 그대로 유지. 이 위치는 마크다운을 거치지 않음 */}
                    <td><code>{decodeEntities(p.type.replace(/<br\s*\/?>/gi, " "))}</code></td>
                    <td>{p.default ? <code>{p.default}</code>
                      : <span className="doc-dim">—</span>}</td>
                    <td>
                      {p.deprecated ? <b>(deprecated) </b> : null}
                      {p.desc ? <Prose html text={pick(ko, p.desc)} slug={doc.slug} />
                        : <span className="doc-dim">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      </Section>

      {/* 컬러는 예외 없이 자체 값 사용, 화면에 렌더링된 공식 컴포넌트 값 그대로 기록 */}
      <Section
        title="Tokens"
        count={ourTokens.length || undefined}
        note={ourTokens.length
          ? <><code>--component-{tokenGroup}-*</code> 는 이 컴포넌트만 쓰는 이름이에요.
              값은 semantic 층을 가리키고, 그 층이 모드에 따라 바뀌어요.</>
          : undefined}
      >
        {ourTokens.length
          ? <TokenTable tokens={ourTokens} active={active} />
          : <p className="doc-note" style={{ marginTop: 0 }}>
              이 컴포넌트는 <b>이 프로젝트 계약에 없어요.</b> 그래서 전용 토큰
              (<code>--component-{tokenGroup}-*</code>)도 없어요. 빠뜨린 게 아니라
              아직 이 프로젝트 것으로 안 들인 컴포넌트예요. 화면의 색은 시스템 팔레트를 탑니다.
            </p>}
      </Section>
    </>
  );
}
