import * as React from "react";
import Markdown, { type Components } from "react-markdown";
import { loadAntdDoc, type AntdDoc, type AntdExample, type AntdTable } from "./antdRef/loader";
import { Master, Kids, Kid } from "./Doc";
import { AntdLive } from "./antdLive";
import { theme as antdTheme } from "antd";
import { loadDemos, type DemoModule, type ToneColor } from "./antdRef/demos";
// shadcn 명세서와 같은 표 사용. 베이스마다 새로 그리면 토큰이 다르게 보임
import { TokenTable } from "./TokenTable";
import { loadKo, pick, type KoText } from "./antdRef/ko";
import { parseColorTokens, type Mode } from "./tokens";
import { componentGroups, resolveTokenGroup } from "./tokenGroups";
import type { SystemDefinition } from "../systems/types";

import { fillAntdApi } from "./derivedApi";
const ANTD_LINE_HEIGHT = antdTheme.getDesignToken.lineHeight;

const KO_TABLE: Record<string, string> = {
  "Anchor Props": "Anchor 속성",
  "Link Props": "Link 속성",
  "Render Props": "그리는 속성",
  "Common API": "공통 API",
  "common API": "공통 API",
  "Common Methods": "공통 메서드",
  "Common Icon": "기본 아이콘",
  "Custom Icon": "직접 만든 아이콘",
  "Custom Font Icon": "직접 만든 글꼴 아이콘",
  "Custom SVG Icon": "직접 만든 SVG 아이콘",
  "Global configuration": "전역 설정",
  "Global static methods": "전역 정적 메서드",
  "Mention methods": "Mention 메서드",
  "Select Methods": "Select 메서드",
  "Select props": "Select 속성",
  "Option props": "Option 속성",
  "OptGroup props": "OptGroup 속성",
  "Tree Methods": "Tree 메서드",
  "Tree props": "Tree 속성",
  "TreeNode props": "TreeNode 속성",
  "DirectoryTree props": "DirectoryTree 속성",
  "List grid props": "List grid 속성",
  "Table ref": "Table ref",
  Methods: "메서드",
};

const KO_COLUMN: Record<string, string> = {
  Property: "속성",
  Description: "설명",
  Type: "타입",
  Default: "기본값",
  "Default value": "기본값",
  "Default Value": "기본값",
  Version: "버전",
  "Token Name": "토큰 이름",
  "Global Config": "전역 설정",
  Name: "이름",
  Readonly: "읽기 전용",
  Parameters: "받는 값",
  Shape: "모양",
};

const STAGE_CONTAINS_FIXED: Record<string, string> = {
  "anchor::Set Anchor scroll offset":
    "공식 예제는 화면 위쪽 고정 띠(30vh) 높이를 `targetOffset` 으로 사용. " +
    "셀 안에 가두면 띠가 셀 위쪽에 렌더링되어 `marginTop: 30vh` 위치와 맞음.",
};

function DemoFrame({ height, base, system, slug, example, mode }: {
  height: number; base: string; system: string; slug: string; example: string; mode: Mode;
}) {
  // 모드 변경 시 주소 변경으로 재로드. 토큰은 자체 설정이라 외부 변경 시 중복 발생
  const src = `/demo?${new URLSearchParams({ base, system, slug, example, mode })}`;
  return (
    <iframe
      src={src}
      title={`${example} 예제 화면`}
      loading="lazy"
      style={{ width: "100%", height, border: 0, display: "block" }}
    />
  );
}

function keepRouteOnStageAnchorClick(e: React.MouseEvent<HTMLDivElement>) {
  const link = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
  if (!link) return;

  e.preventDefault;
  e.stopPropagation;

  const id = decodeURIComponent((link.getAttribute("href") ?? "").slice(1));
  if (!id) return; // href="#" 지정, 갈 곳 없음
  const own = link.ownerDocument;
  const sel = `[id="${CSS.escape(id)}"]`;
  const target = own === document
    ? (e.currentTarget.querySelector(sel) ?? document.querySelector(sel))
    : own.querySelector(sel);
  if (!target) return;

  const scroller = own.scrollingElement ?? own.documentElement;
  scroller.scrollTop += target.getBoundingClientRect.top;
}

// <br/>을 마크다운 강제 줄바꿈으로 변환. raw HTML은 표시되지 않음
const HTML_BR = /<br\s*\/?>/gi;

function officialHref(href: string | undefined, slug: string): string {
  if (!href) return "";
  if (/^[a-z]+:/i.test(href)) return href; // 이미 절대 URL인지 여부
  if (href.startsWith("#")) return `https://ant.design/components/${slug}${href}`;
  return `https://ant.design${href.startsWith("/") ? "" : "/"}${href}`;
}

// @param inline 문단 p 래퍼 벗기기
function Prose({ text, slug, inline }: { text: string; slug: string; inline?: boolean }) {
  const md = React.useMemo( => text.replace(HTML_BR, "  \n"), [text]);
  const components = React.useMemo<Components>( => ({
    a: ({ href, children }) => (
      <a href={officialHref(href, slug)} target="_blank" rel="noreferrer">{children}</a>
    ),
    pre:  => null,
    ...(inline ? { p: ({ children }) => <>{children}</> } : null),
  }), [slug, inline]);
  return <Markdown components={components}>{md}</Markdown>;
}

const VALUE_TOKEN = /`([^`]+)`|~~([^~]+)~~|<(br|hr)\s*\/?>|\\([\\`*_{}[\]#+\-.!~|<>])/gi;

const MONO = { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" } as const;

const CHIP = {
  fontSize: ".9em",
  padding: ".15em .35em",
  margin: "0 .0625rem",
  borderRadius: ".25rem",
  background: "var(--semantic-bg-neutral-subtle, #f4f4f5)",
  boxShadow: "inset 0 0 0 .0625rem var(--semantic-border-neutral-subtle, #e4e4e7)",
} as const;

const FILL = { flex: "1 1 100%", minWidth: 0 } as const;

function ValueText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let k = 0;
  VALUE_TOKEN.lastIndex = 0;
  for (let m = VALUE_TOKEN.exec(text); m; m = VALUE_TOKEN.exec(text)) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) nodes.push(<code key={k++} style={CHIP}>{m[1]}</code>);
    else if (m[2] !== undefined) nodes.push(<del key={k++}>{m[2]}</del>);
    else if (m[3] !== undefined) {
      nodes.push(m[3].toLowerCase === "br" ? <br key={k++} /> : <hr key={k++} />);
    } else nodes.push(m[4]);
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function Table({ table, ko, slug }: { table: AntdTable; ko: KoText | null; slug: string }) {
  const descAt = table.columns.findIndex((c) => c.toLowerCase === "description");
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="doc-tokens doc-ref-table">
        <thead>
          <tr>{table.columns.map((c, i) => <th key={i} scope="col">{KO_COLUMN[c] ?? c}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={`${row[0]}-${ri}`}>
              {row.map((cell, i) => {
                const desc = i === descAt;
                const text = desc ? pick(ko, cell) : cell;
                const body = text === "—" ? "—"
                  : desc ? <Prose inline slug={slug} text={text} />
                  : <ValueText text={text} />;
                const style = desc ? undefined : MONO;
                return i === 0
                  ? <th key={i} scope="row" style={style}>{body}</th>
                  : <td key={i} style={style}>{body}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function docId(title: string): string {
  return title.trim.toLowerCase.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function Section({ title, count, note, id, children }: {
  title: string; count?: React.ReactNode; note?: React.ReactNode;
  id?: string; children?: React.ReactNode;
}) {
  return (
    <section className="doc-section" id={id ?? docId(title)}>
      <h2>{title}{count === undefined ? null : <span className="doc-axis">{count}</span>}</h2>
      {note ? <p className="doc-note" style={{ marginTop: 0 }}>{note}</p> : null}
      {children}
    </section>
  );
}

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
          이 예제는 <b>세우다가 터졌어요.</b> 감추지 않고 그대로 알립니다,{" "}
          <code>{this.state.err}</code>
        </p>
      );
    }
    return this.props.children;
  }
}

// 공식에 해당 섹션이 없을 때. 빈 화면으로 두지 않음
function Absent({ what }: { what: string }) {
  return (
    <p className="doc-note" style={{ marginTop: 0 }}>
      공식 문서에 <b>{what} 절이 없어요.</b> 빠뜨린 게 아니라 그쪽에도 없어요.
    </p>
  );
}

// Live 섹션 ConfigProvider로 래핑. 안 하면 지정한 색이 적용되지 않음
export function AntdReference({ slug, system, active }: {
  slug: string;
  system: SystemDefinition;
  active: Mode;
}) {
  const Provider = system.Provider;

  const tones: ToneColor[] = React.useMemo( => {
    const byName = new Map(parseColorTokens(system.vars).map((t) => [t.name, t]));
    return system.buttonTones.map((name) => ({
      name,
      hex: byName.get(`--semantic-bg-${name}-default`)?.values[active] ?? "",
    }));
  }, [system.vars, system.buttonTones, active]);

  const [doc, setDoc] = React.useState<AntdDoc | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [mod, setMod] = React.useState<DemoModule | null>(null);
  const [ko, setKo] = React.useState<KoText | null>(null);

  // 참조 데이터, 예제와 별도 호출. 셋 다 늦게 오지만 서로 기다릴 이유 없음
  React.useEffect( => {
    let alive = true;
    loadKo
      .then((d) => { if (alive) setKo(d); })
      .catch( => { /* 못 실으면 원문을 그대로 표시 */ });
    return  => { alive = false; };
  }, []);

  // 참조 데이터와 별도 호출. antd 컴포넌트 많아 지연 문제 있음
  React.useEffect( => {
    let alive = true;
    setMod(null);
    const p = loadDemos(slug);
    if (!p) return;
    p.then((d) => { if (alive) setMod(d); })
     .catch( => { /* 못 실으면 이름과 설명만 유지 */ });
    return  => { alive = false; };
  }, [slug]);

  React.useEffect( => {
    let alive = true; // 빠른 전환 시 늦게 도착한 응답의 화면 덮어쓰기 방지
    setDoc(null); setErr(null);
    const p = loadAntdDoc(slug);
    if (!p) { setErr(`${slug} 참조 데이터가 없어요.`); return; }
    // 표가 비면 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
    p.then(async (d) => {
      if (d.api.length > 0) return d;
      const filled = await fillAntdApi(d.slug, d.title);
      return filled ? { ...d, api: filled } : d;
    })
     .then((d) => { if (alive) setDoc(d); })
     .catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [slug]);

  if (err) return <p className="doc-note">{err}</p>;
  if (!doc) return <p className="doc-note">불러오는 중…</p>;

  const masterAt = Math.max(0, doc.examples.findIndex((ex) => ex.name === "Basic"));
  const master = doc.examples[masterAt];
  const variants = doc.examples.filter((_, i) => i !== masterAt);

  const availableGroups = componentGroups(system.vars);
  const group = resolveTokenGroup(doc.slug, doc.title, availableGroups);
  const ourTokens = group
    ? parseColorTokens(system.vars).filter((t) => t.name.startsWith(`--component-${group}-`))
    : [];

  const stand = (ex: AntdExample) => {
    const Demo = mod ? mod.demos[ex.name] : undefined;
    const why = mod ? mod.skipped[ex.name] : undefined;
    return (
      <div id={ex.demoId ? `${doc.slug}-demo-${ex.demoId}` : undefined} style={FILL}>
        {Demo ? (
          <div
            className={!ex.iframe && STAGE_CONTAINS_FIXED[`${doc.slug}::${ex.name}`]
              ? "doc-demo-contain" : undefined}
            style={{ lineHeight: ANTD_LINE_HEIGHT }}
            // iframe 예제는 해시 라우팅 비활성. 내부가 별도 문서라 경로 충돌 위험 있음
            onClickCapture={ex.iframe ? undefined : keepRouteOnStageAnchorClick}
          >
            <DemoBoundary name={ex.name}>
              {/* 가두는 예제 그대로 렌더링. 내부 요소가 문서 것이 되어 방어 로직 비활성화 */}
              {ex.iframe ? (
                <DemoFrame
                  height={ex.iframe}
                  base={system.baseKey}
                  system={system.slug}
                  slug={doc.slug}
                  example={ex.name}
                  mode={active}
                />
              ) : (
                <Provider mode={active}><Demo tones={tones} /></Provider>
              )}
            </DemoBoundary>
          </div>
        ) : why ? (
          // 생성 실패 사유 기록. 없으면 빈 화면과 정상 상태가 구별 안 되는 문제 있음
          <p className="doc-note" style={{ marginTop: 0 }}>{why}</p>
        ) : mod ? (
          // 표에도 목록에도 없으면 이름이 어긋난 것임
          <p className="doc-note" style={{ marginTop: 0 }}>
            이 예제는 <b>못 찾았어요.</b> 이름이 <code>{ex.name}</code> 인데
            <code> antdRef/demos/{doc.slug}/</code> 의 키와 안 맞아요.
          </p>
        ) : (
          <p className="doc-note" style={{ marginTop: 0 }}>예제를 불러오는 중…</p>
        )}
      </div>
    );
  };

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{doc.title}</h2>
        <p className="doc-lead doc-prose">
          <Prose inline slug={doc.slug} text={ko?.lead[doc.slug] || doc.description} />
        </p>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          <b>{doc.group}</b> · 공식 문서를 그대로 옮긴 참조예요. <b>antd 를 골랐을 때만</b> 보여요.
        </p>
      </header>

      <Section title="When To Use">
        {/* <p> 대신 <div> 사용. 인용구와 목록이 많아 <p> 안에 들어갈 수 없음 */}
        {doc.whenToUse === null
          ? <Absent what="When To Use" />
          : <div className="doc-note doc-prose" style={{ marginTop: 0 }}>
              <Prose slug={doc.slug} text={ko?.when[doc.slug] || doc.whenToUse} />
            </div>}
      </Section>

      {/* 공식 예제 없을 때 표시되는 variants 조합 격자 */}
      {mod ? null : (
        <Section title="Live">
          <Provider mode={active}>
            <AntdLive slug={doc.slug} title={doc.title} variants={doc.variants} />
          </Provider>
        </Section>
      )}

      {/* Master 와 Variants 공용 stand 컴포넌트, 기본값만 차이 */}
      <Master
        note={<>공식이 <b>기본</b>으로 두는 예제예요. antd 는 <code>Basic</code> 이 그 자리예요.
          코드는 <b>공식 원본 그대로</b>예요. 아이콘도 <code>@ant-design/icons</code> 진짜를
          불러요. 색·모서리·글자만 <b>이 시스템 토큰</b>을 사용해요. 아래 <b>Tokens</b>을
          참고해주세요.</>}
      >
        {master ? stand(master) : <Absent what="예제" />}
      </Master>

      {/* shadcn 명세서와 동일 구조. 예제마다 h2와 칩 이름으로 Variants 구분 표시 */}
      {variants.length === 0
        ? <Section title="Variants"><Absent what="기본형 말고 다른 예제" /></Section>
        : variants.map((ex, i) => (
            <Kids
              key={`${ex.name}-${i}`}
              // 예제 이름은 영문 유지. 공식 문서 제목과 대응해야 하는 제약임
              axis={ex.name}
              note={ex.description
                ? <span className="doc-prose">
                    <Prose inline slug={doc.slug} text={pick(ko, ex.description)} />
                  </span>
                : undefined}
            >
              <Kid label={ex.name}>{stand(ex)}</Kid>
            </Kids>
          ))}

      {/* 이름을 Parts로 사용, 내용은 공식 Semantic DOM과 동일 */}
      <Section
        title="Parts"
        count={doc.semanticDom ? doc.semanticDom.parts.length : undefined}
        note={doc.semanticDom
          ? <><b>여기가 antd 에서 손댈 수 있는 자리예요.</b> 클래스를 덮는 게 아니라 이 이름들에만
              <code> classNames</code> · <code>styles</code> 로 값을 넣을 수 있어요.
              공식 <b>Semantic DOM</b> 을 그대로 가져온 거예요.</>
          : undefined}
      >
        {doc.semanticDom === null ? <Absent what="Semantic DOM" /> : (
          <Table ko={ko} slug={doc.slug} table={{
            columns: ["Part", "Mark", "Description"],
            rows: doc.semanticDom.parts.map((p) => [p.name, p.mark, p.description]),
          }} />
        )}
      </Section>

      <Section
        title="API Reference"
        count={doc.api.length}
        note="공식 API 절 그대로예요. 표가 여럿이면 각 표의 이름이 곧 그 하위 컴포넌트예요."
      >
        {doc.api.map((t, i) => (
          <div key={i} style={{ marginBottom: "1.25rem" }}>
            {/* id는 원문 이름으로 생성. 번역명 사용 시 공식 링크와 안 맞음 */}
            {t.name
              ? <h3 id={docId(t.name)} style={{ margin: "0 0 .25rem" }}>{KO_TABLE[t.name] ?? t.name}</h3>
              : null}
            <Table table={t} ko={ko} slug={doc.slug} />
          </div>
        ))}
      </Section>

      <Section
        title="Tokens"
        count={ourTokens.length || undefined}
        note={<>
          <code>--component-{group}-*</code> 는 이 컴포넌트만 쓰는 이름이에요.
          값은 semantic 층을 가리키고, 그 층이 <b>모드에 따라</b> 바뀌어요.
          {group === doc.slug ? null : <> 이름이 달라서 <b>같은 위치</b>로 이어 붙였어요.</>}
        </>}
      >
        {ourTokens.length === 0
          ? (
            // 빈 표 대신 사유 표시. 계약에 없는 FloatButton 등 컴포넌트가 해당
            <p className="doc-note">
              이 컴포넌트만 쓰는 토큰은 <b>없어요.</b> 이 시스템 계약에 같은 이름의 컴포넌트가
              없거든요. 그래도 화면의 색·모서리·글자는 <b>이 시스템 것</b>이에요.
              <code> ConfigProvider</code> 가 시스템 공통 토큰(<code>colorPrimary</code> ·
              <code> borderRadius</code> · <code>fontSize</code> …)을 나르니까요.
            </p>
          )
          : <TokenTable tokens={ourTokens} active={active} />}
      </Section>
    </>
  );
}
