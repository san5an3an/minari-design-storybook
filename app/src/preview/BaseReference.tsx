import * as React from "react";
import { Master, Kids, Kid } from "./Doc";
import { TokenTable } from "./TokenTable";
import { parseColorTokens, type Mode } from "./tokens";
import { componentGroups, resolveTokenGroup } from "./tokenGroups";
import type { SystemDefinition } from "../systems/types";
import type {
  BaseRefAdapter, BaseRefDoc, BaseRefExample, DemoValue, Presence, SkipCode,
} from "./refContract";
import { Absent, DemoBoundary, FILL, Prose, RefTable, Section, docId } from "./refParts";

// 사유 코드별 기본 문장에 담당자 detail 추가
const SKIP_SENTENCE: Record<SkipCode, string> = {
  "package-missing": "이 예제가 부르는 패키지가 아직 설치돼 있지 않아요.",
  "local-module-missing": "이 예제가 부르는 모듈이 공식 저장소에도 없어요(문서 사이트 안쪽 경로예요).",
  "self-themed": "이 예제는 스스로 테마를 정해서, 이 시스템 색을 입히면 공식과 달라져요.",
  "base-theme-only": "공식에서도 기본 테마로만 보이는 예제예요.",
  "fixed-palette": "이 예제는 이 시스템 색을 일부러 덮는 고정 팔레트를 써요.",
  "global-css": "이 예제가 싣는 CSS 가 문서 전체에 닿아서 이 화면에 세우지 않았어요.",
  "external-request": "이 예제는 실행 중에 외부 주소로 요청을 보내요.",
  "runtime-unavailable": "이 예제가 기대하는 실행 환경이 이 앱에 없어요.",
  "data-endpoint-missing": "이 예제가 데이터를 받으려는 경로가 이 앱에 없어요.",
  "private-api": "이 예제가 쓰는 이름이 설치본 공개 진입점에 없어요.",
  "not-an-example": "공식이 예제가 아닌 조종판·코드 조각으로 두는 자리예요.",
  other: "이 예제는 세우지 않았어요.",
};

const PRESENCE_NOTE: Record<Presence, string | null> = {
  official: null,
  derived: "공식 표는 없어서 타입 선언에서 뽑았어요.",
  "absent-in-official": null,
  "not-imported": "공식에는 있지만 이 화면에 가져오지 않았어요.",
  "code-only": "공식에는 코드로만 있어서 싣지 않았어요.",
};

type Demos = {
  demos: Record<string, DemoValue>;
  skipped: Record<string, { code: SkipCode; detail: string }>;
};

// Variants 그룹 정리. axis 같은 예제는 한 그룹, null이면 한 줄씩 정렬
function groupVariants(examples: BaseRefExample[]): { axis: string | null; items: BaseRefExample[] }[] {
  const out: { axis: string | null; items: BaseRefExample[] }[] = [];
  for (const ex of examples) {
    const last = out[out.length - 1];
    if (ex.axis !== null && last && last.axis === ex.axis) last.items.push(ex);
    else out.push({ axis: ex.axis, items: [ex] });
  }
  return out;
}

export function BaseReference({ baseKey, adapter, baseTitle, slug, system, active }: {
  // /demo?base= 쿼리 값. ADAPTERS 키와 동일한 문자열
  baseKey: string;
  adapter: BaseRefAdapter;
  baseTitle: string;
  slug: string;
  system: SystemDefinition;
  active: Mode;
}) {
  const [doc, setDoc] = React.useState<BaseRefDoc | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [mod, setMod] = React.useState<Demos | null>(null);
  const [modErr, setModErr] = React.useState<string | null>(null);

  // 문서 전역 테마는 진입 시 한 번 적용, 이탈 또는 색상/모드 전환 직전에 해제
  React.useEffect( => {
    if (!adapter.mountTheme) return;
    return adapter.mountTheme(system, active, document);
  }, [adapter, system, active]);

  React.useEffect( => {
    let alive = true;
    setDoc(null); setErr(null);
    const p = adapter.loadDoc(slug);
    if (!p) { setErr(`${slug} 참조 데이터가 없어요.`); return; }
    p.then((d) => { if (alive) setDoc(d); })
      .catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [adapter, slug]);

  React.useEffect( => {
    let alive = true;
    setMod(null); setModErr(null);
    const p = adapter.loadDemos(slug);
    if (!p) { setModErr("이 컴포넌트의 예제 모듈이 아직 생성되지 않았어요."); return; }
    p.then((d) => { if (alive) setMod(d); })
      .catch((e) => { if (alive) setModErr(String(e)); });
    return  => { alive = false; };
  }, [adapter, slug]);

  if (err) return <p className="doc-note">{err}</p>;
  if (!doc) return <p className="doc-note">불러오는 중…</p>;

  const Provider = adapter.Provider;
  const masterEx = doc.master.key ? doc.examples.find((e) => e.key === doc.master.key) : undefined;
  const variants = doc.examples.filter((e) => e.key !== doc.master.key);
  const groups = groupVariants(variants);

  const axes = new Set(doc.examples.map((e) => e.axis).filter((a): a is string => a !== null));
  const axisProse = new Map<string, BaseRefDoc["prose"][number]>;
  for (const p of doc.prose) if (p.title && axes.has(p.title) && !axisProse.has(p.title)) axisProse.set(p.title, p);
  const looseProse = doc.prose.filter((p) => !(p.title && axisProse.get(p.title) === p));
  const masterLeadAxis = masterEx?.axis && axisProse.has(masterEx.axis) ? masterEx.axis : null;
  const groupLeadAt = new Map<string, number>;
  groups.forEach((g, gi) => {
    if (g.axis && axisProse.has(g.axis) && g.axis !== masterLeadAxis && !groupLeadAt.has(g.axis)) groupLeadAt.set(g.axis, gi);
  });
  const axisLead = (axis: string) => {
    const p = axisProse.get(axis);
    return p ? <Prose text={p.text} format={p.format} docHref={doc.docHref} /> : undefined;
  };
  const availableGroups = componentGroups(system.vars);
  const ownGroup = doc.tokenGroup && availableGroups.has(doc.tokenGroup) ? doc.tokenGroup : null;
  const group = ownGroup ?? resolveTokenGroup(slug, doc.title, availableGroups);
  const ourTokens = group
    ? parseColorTokens(system.vars).filter((t) => t.name.startsWith(`--component-${group}-`))
    : [];

  const stand = (ex: BaseRefExample) => {
    const Demo = mod?.demos[ex.key];
    const why = mod?.skipped[ex.key];
    if (Demo) {
      if (ex.stage === "iframe") {
        // /demo 문서 재사용. 쿼리 계약은 readAsk 규칙과 정확히 일치
        const src = `/demo?base=${encodeURIComponent(baseKey)}&system=${encodeURIComponent(system.slug)}` +
          `&slug=${encodeURIComponent(slug)}&example=${encodeURIComponent(ex.key)}&mode=${encodeURIComponent(active)}` +
          `&font=${encodeURIComponent(
            getComputedStyle(document.documentElement).getPropertyValue("--base-font-family-sans").trim,
          )}`;
        return (
          <div style={FILL}>
            <iframe
              src={src}
              title={ex.name}
              style={{ width: "100%", height: "100%", minHeight: "12rem", border: "none" }}
            />
          </div>
        );
      }
      const body = "html" in Demo
        ? <div dangerouslySetInnerHTML={{ __html: Demo.html }} />
        : <Demo />;
      return (
        <div style={FILL} className={ex.stage === "contain" ? "doc-demo-contain" : undefined}>
          <DemoBoundary name={ex.name}>
            <Provider system={system} mode={active} providerProps={ex.providerProps}>{body}</Provider>
          </DemoBoundary>
        </div>
      );
    }
    if (why) {
      return (
        <p className="doc-note" style={{ marginTop: 0 }}>
          {SKIP_SENTENCE[why.code]}{why.detail ? <>, {why.detail}</> : null}
        </p>
      );
    }
    if (modErr) return <p className="doc-note" style={{ marginTop: 0 }}>{modErr}</p>;
    if (mod) {
      return (
        <p className="doc-note" style={{ marginTop: 0 }}>
          이 예제는 <b>못 찾았어요.</b> 열쇠 <code>{ex.key}</code> 가 예제 모듈에도, 못 세운 목록에도 없어요.
        </p>
      );
    }
    return <p className="doc-note" style={{ marginTop: 0 }}>예제를 불러오는 중…</p>;
  };

  const masterNote = doc.master.rule === "official-mark"
    ? <>공식 문서가 <b>기본</b>으로 두는 예제예요. 코드는 <b>공식 원본 그대로</b>이고, 색만 <b>이 시스템 토큰</b>이에요.</>
    : <>공식에 기본 표지가 없어서 <b>문서 순서 첫 예제</b>를 뒀어요. 코드는 <b>공식 원본 그대로</b>이고, 색만 <b>이 시스템 토큰</b>이에요.</>;

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{doc.title}</h2>
        {doc.lead ? (
          <div className="doc-lead doc-prose">
            <Prose inline text={doc.lead} format={doc.leadFormat ?? "text"} docHref={doc.docHref} />
          </div>
        ) : null}
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          {doc.group ? <><b>{doc.group}</b> · </> : null}
          공식 문서를 그대로 옮긴 참조예요. <b>{baseTitle} 를 골랐을 때만</b> 보여요.
          {doc.docHref ? <> · <a href={doc.docHref} target="_blank" rel="noreferrer">공식 문서</a></> : null}
        </p>
      </header>

      {looseProse.map((p, i) => (p.title
        ? (
          <Section key={`${p.title}-${i}`} title={p.title} id={`${docId(p.title) || "prose"}-${i}`}>
            <div className="doc-note doc-prose" style={{ marginTop: 0 }}>
              <Prose text={p.text} format={p.format} docHref={doc.docHref} />
            </div>
          </Section>
        )
        // 공식에 제목 없는 산문. 섹션 제목 임의 생성 없이 산문만 표시
        : (
          <section key={`prose-${i}`} className="doc-section">
            <div className="doc-note doc-prose" style={{ marginTop: 0 }}>
              <Prose text={p.text} format={p.format} docHref={doc.docHref} />
            </div>
          </section>
        )))}

      <Master note={masterNote} lead={masterLeadAxis ? axisLead(masterLeadAxis) : undefined}>
        {masterEx
          ? stand(masterEx)
          : doc.examples.length === 0
            ? <Absent what="예제" />
            : <p className="doc-note" style={{ marginTop: 0 }}>{doc.master.reason ?? "기본 예제를 세우지 못했어요."}</p>}
      </Master>

      {variants.length === 0
        ? <Section title="Variants"><Absent what="기본형 말고 다른 예제" /></Section>
        : groups.map((g, gi) => (
            <Kids
              key={`${g.axis ?? g.items[0].key}-${gi}`}
              axis={g.axis ?? g.items[0].name}
              lead={g.axis && groupLeadAt.get(g.axis) === gi ? axisLead(g.axis) : undefined}
              note={g.items.length === 1 && g.items[0].description
                ? <span className="doc-prose">
                    <Prose inline text={g.items[0].description} format={g.items[0].descFormat ?? "text"} docHref={doc.docHref} />
                  </span>
                : undefined}
            >
              {g.items.map((ex) => <Kid key={ex.key} label={ex.name}>{stand(ex)}</Kid>)}
            </Kids>
          ))}

      <Section
        title="Parts"
        count={doc.parts.presence === "official" ? doc.parts.rows.length : undefined}
        note={PRESENCE_NOTE[doc.parts.presence] ?? undefined}
      >
        {doc.parts.presence === "absent-in-official"
          ? <Absent what="Parts" />
          : doc.parts.rows.length > 0 ? <RefTable columns={doc.parts.columns} rows={doc.parts.rows} /> : null}
      </Section>

      <Section
        title="API Reference"
        count={doc.api.tables.length || undefined}
        note={PRESENCE_NOTE[doc.api.presence] ?? undefined}
      >
        {doc.api.presence === "absent-in-official"
          ? <Absent what="API" />
          : doc.api.tables.map((t, i) => (
              <div key={`${t.name ?? "table"}-${i}`} style={{ marginBottom: "1.25rem" }}>
                {t.name ? <h3 id={docId(t.name)} style={{ margin: "0 0 .25rem" }}>{t.name}</h3> : null}
                <RefTable columns={t.columns} rows={t.rows} />
              </div>
            ))}
      </Section>

      <Section
        title="Tokens"
        count={ourTokens.length || undefined}
        note={group
          ? <><code>--component-{group}-*</code> 는 이 컴포넌트만 쓰는 이름이에요. 값은 semantic 층을 가리키고, 그 층이 <b>모드에 따라</b> 바뀌어요.{ownGroup ? null : <> 이름이 달라서 <b>같은 위치</b>로 이어 붙였어요.</>}</>
          : undefined}
      >
        {ourTokens.length === 0
          ? (
            <p className="doc-note">
              이 컴포넌트만 쓰는 토큰은 <b>없어요.</b> 이 시스템 계약에 같은 이름의 컴포넌트가 없거든요.
              그래도 화면의 색은 <b>이 시스템 것</b>이에요. 베이스 공급자가 시스템 공통 토큰을 날라요.
            </p>
          )
          : <TokenTable tokens={ourTokens} active={active} />}
      </Section>
    </>
  );
}
