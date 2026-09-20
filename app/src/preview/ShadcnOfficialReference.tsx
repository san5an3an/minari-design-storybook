import * as React from "react";
import { Kid, Kids, Master } from "./Doc";
import { Absent, RefTable, Section } from "./refParts";
import { SHADCN_SOURCE, loadShadcnDoc, type ShadcnDoc } from "./shadcnRef/loader";
import { RENDERABLE_VARIANTS, ShadcnLive, VARIANT_DEFAULTS, VARIANT_SUB_PART } from "./ShadcnLive";
import type { Mode, SystemDefinition } from "../systems/types";

export function ShadcnOfficialReference({ slug }: { slug: string; system: SystemDefinition; active: Mode }) {
  const [doc, setDoc] = React.useState<ShadcnDoc | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect( => {
    let alive = true;
    setDoc(null); setErr(null);
    const p = loadShadcnDoc(slug);
    if (!p) { setErr(`${slug} 참조 데이터가 없어요.`); return; }
    p.then((d) => { if (alive) setDoc(d); })
      .catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [slug]);

  if (err) return <p className="doc-note">{err}</p>;
  if (!doc) return <p className="doc-note">불러오는 중…</p>;

  const variantAxes = Object.entries(doc.variants);
  const linkEntries = Object.entries(doc.links);
  // 그림은 실제 설치본 기준 렌더링 가능 variant만 따름. 표는 레지스트리 원문 그대로 사용
  const renderableAxes = Object.entries(RENDERABLE_VARIANTS[slug] ?? {});
  const renderableAxisNames = new Set(Object.keys(RENDERABLE_VARIANTS[slug] ?? {}));
  const skippedAxes = variantAxes.filter(([axis]) => !renderableAxisNames.has(axis));
  const skippedBySubPart = new Map<string, string[]>;
  for (const [axis] of skippedAxes) {
    const part = VARIANT_SUB_PART[slug]?.[axis] ?? "다른 요소";
    skippedBySubPart.set(part, [...(skippedBySubPart.get(part) ?? []), axis]);
  }

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{doc.title}</h2>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          shadcn 공식 레지스트리(<code>{SHADCN_SOURCE.style}</code> 스타일) 소스를 그대로 옮긴
          참조예요. <b>shadcn 을 골랐을 때만</b> 보여요.
          {" "}· 라이선스 <b>{doc.license}</b>
          {" "}· <code>{doc.registryPath}</code>
          {" "}· {doc.lines.toLocaleString("ko-KR")}줄
        </p>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          출처가 문서 사이트가 아니라 레지스트리 소스라 <b>examples · API 절이 없어요</b>
          {" "}. 빠뜨린 게 아니라 그쪽에도 없어요(shadcn 자체가 평평한 컴포넌트 소스 모음).
        </p>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          아래 코드는 <b>레지스트리 원문 그대로</b>예요(<code>from &quot;cn&quot;</code> 같은
          변환 전 경로 포함). 실제 설치본(<code>app/src/components/ui/</code>)과는 CLI 변환을
          거쳐 다릅니다. &quot;이대로 설치된다&quot;로 읽지 마세요.
        </p>
      </header>

      <Master note={<>설치된 실제 컴포넌트를 세운 거예요. 아래 <b>소스 코드</b> 절의 레지스트리 원문과는 CLI 변환만큼 달라요.</>}>
        <ShadcnLive slug={slug} doc={doc} />
      </Master>

      <Section title="소스 코드" note={<>공식 레지스트리의 <b>변환 전 소스 코드 원문</b>이에요. 요약하거나 다시 쓰지 않아요. <code>from &quot;cn&quot;</code> 같은 변환 전 경로가 그대로 있어요. 실제 설치본과 다릅니다.</>}>
        <pre
          style={{
            width: "100%",
            maxHeight: "36rem",
            overflow: "auto",
            margin: 0,
            padding: "var(--component-card-padding)",
            background: "var(--semantic-bg-neutral-subtle)",
            border: `var(--semantic-border-width-default) solid var(--component-card-border)`,
            borderRadius: "var(--component-card-radius)",
            fontFamily: "var(--base-font-family-mono)",
            fontSize: "var(--semantic-text-caption)",
            lineHeight: "var(--semantic-line-height-normal, 1.5)",
            color: "var(--semantic-fg-neutral-default)",
          }}
        >
          <code>{doc.code}</code>
        </pre>
      </Section>

      {doc.docs ? (
        <Section title="공식 안내">
          <p className="doc-note" style={{ marginTop: 0 }}>{doc.docs}</p>
        </Section>
      ) : null}

      <Section title="Exports" count={doc.exports.length || undefined}>
        {doc.exports.length === 0
          ? <Absent what="Exports" />
          : <RefTable columns={["이름", "위치"]} rows={doc.exports.map((e) => [e.name, e.source])} />}
      </Section>

      <Section
        title="Data Slots"
        count={doc.dataSlots.length || undefined}
        note="data-slot 값이에요. shadcn 에서 스타일을 거는 위치 이름이라 계약에 가까워요."
      >
        {doc.dataSlots.length === 0
          ? <Absent what="Data Slots" />
          : <RefTable columns={["이름", "위치"]} rows={doc.dataSlots.map((d) => [d.name, d.source])} />}
      </Section>

      <Section
        title="Variants"
        count={doc.usesCva ? variantAxes.length || undefined : undefined}
        note={
          !doc.usesCva
            ? "이 컴포넌트는 cva(class-variance-authority)를 안 써요. 옵션이 없어요."
            // navigation-menu는 cva 호출하지만 variants 없이 문자열만 전달, variant 0개
            : variantAxes.length === 0
              ? "cva 는 쓰지만 variants 옵션을 선언하지 않았어요. 고정 클래스만 나가요."
              : undefined
        }
      >
        {doc.usesCva && variantAxes.length > 0 ? (
          <RefTable
            columns={["축", "값", "기본값"]}
            rows={variantAxes.map(([axis, values]) => [axis, values.join(", "), doc.defaultVariants[axis] ?? "—"])}
          />
        ) : null}
        {skippedBySubPart.size > 0 ? (
          <p className="doc-note">
            {Array.from(skippedBySubPart.entries)
              .map(([part, axes]) => (
                `위 표의 ${axes.join("·")} 옵션은 이 컴포넌트가 아니라 하위 part ${part} 것이라(실제 ` +
                `설치본 cva 대조 측정) 이 데모엔 그 부분이 없어서 아래 그림엔 못 얹었어요.`
              ))
              .join(" ")}
          </p>
        ) : null}
      </Section>

      {/* 그림은 축마다 섹션, 값마다 항목으로 표현. 표는 그대로 유지 */}
      {renderableAxes.map(([axis, values]) => (
        <Kids
          key={axis}
          axis={axis}
          title="Variants"
          note={
            <>
              실제 설치본(<code>app/src/components/ui/{slug}.tsx</code>)의 <code>{axis}</code> 축이에요.
              기본값은 <code>{VARIANT_DEFAULTS[slug]?.[axis] ?? "—"}</code>예요.
            </>
          }
        >
          {values.map((value) => (
            <Kid key={value} label={value}>
              <ShadcnLive slug={slug} doc={doc} variant={{ axis, value }} />
            </Kid>
          ))}
        </Kids>
      ))}

      <Section
        title="Semantic Tokens"
        count={doc.semanticTokens.length || undefined}
        note="이 소스가 매여 있는 의미 토큰 이름이에요. 어떤 색을 칠하는지가 아니라 어느 이름에 매여 있는지예요."
      >
        {doc.semanticTokens.length === 0
          ? <Absent what="Semantic Tokens" />
          : (
            <div className="flex flex-wrap gap-2">
              {doc.semanticTokens.map((t) => (
                <code
                  key={t}
                  style={{
                    padding: "0.125rem 0.5rem",
                    borderRadius: "var(--semantic-radius-control)",
                    background: "var(--semantic-bg-neutral-subtle)",
                    fontSize: "var(--semantic-text-caption)",
                  }}
                >
                  {t}
                </code>
              ))}
            </div>
          )}
      </Section>

      <Section title="Dependencies" count={doc.dependencies.length || undefined}>
        {doc.dependencies.length === 0
          ? <Absent what="Dependencies" />
          : <RefTable columns={["패키지"]} rows={doc.dependencies.map((d) => [d])} />}
      </Section>

      <Section
        title="Registry Dependencies"
        count={doc.registryDependencies.length || undefined}
        note="이 컴포넌트가 끌고 오는 다른 shadcn 레지스트리 항목이에요."
      >
        {doc.registryDependencies.length === 0
          ? <Absent what="Registry Dependencies" />
          : <RefTable columns={["항목"]} rows={doc.registryDependencies.map((d) => [d])} />}
      </Section>

      <Section title="Imports" count={doc.imports.length || undefined}>
        {doc.imports.length === 0
          ? <Absent what="Imports" />
          : <RefTable columns={["경로"]} rows={doc.imports.map((i) => [i])} />}
      </Section>

      <Section title="Links" count={linkEntries.length || undefined}>
        {linkEntries.length === 0
          ? <Absent what="Links" />
          : (
            <RefTable
              columns={["이름", "주소"]}
              rows={linkEntries.map(([name, href]) => [name, href])}
            />
          )}
      </Section>
    </>
  );
}
