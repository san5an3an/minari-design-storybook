import * as React from "react";
import { Master } from "./Doc";
import { Absent, RefTable, Section } from "./refParts";
import { COSS_SOURCE, loadCossDoc, type CossDoc } from "./cossRef/loader";
import type { Mode, SystemDefinition } from "../systems/types";

export function CossReference({ slug }: { slug: string; system: SystemDefinition; active: Mode }) {
  const [doc, setDoc] = React.useState<CossDoc | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  React.useEffect( => {
    let alive = true;
    setDoc(null); setErr(null);
    const p = loadCossDoc(slug);
    if (!p) { setErr(`${slug} 참조 데이터가 없어요.`); return; }
    p.then((d) => { if (alive) setDoc(d); })
      .catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [slug]);

  if (err) return <p className="doc-note">{err}</p>;
  if (!doc) return <p className="doc-note">불러오는 중…</p>;

  const variantAxes = Object.entries(doc.variants);

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{doc.title}</h2>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          coss 공식 레지스트리 소스를 그대로 옮긴 참조예요. <b>coss 를 골랐을 때만</b> 보여요.
          {" "}· 라이선스 <b>{doc.license}</b>(전체 저장소는 {COSS_SOURCE.license}, 이 구역만 MIT)
          {" "}· <a href={doc.sourceUrl} target="_blank" rel="noreferrer">원본 소스</a>
          {" "}· {doc.lines.toLocaleString("ko-KR")}줄
        </p>
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          출처가 문서 사이트가 아니라 레지스트리 소스라 <b>examples · API 절이 없어요</b>
          {" "}. 빠뜨린 게 아니라 그쪽에도 없어요(coss 자체가 평평한 컴포넌트 소스 모음).
        </p>
      </header>

      <Master note={<>공식 저장소의 <b>소스 코드 원문 그대로</b>예요. 요약하거나 다시 쓰지 않아요.</>}>
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
      </Master>

      <Section title="Exports" count={doc.exports.length || undefined}>
        {doc.exports.length === 0
          ? <Absent what="Exports" />
          : <RefTable columns={["이름", "위치"]} rows={doc.exports.map((e) => [e.name, e.source])} />}
      </Section>

      <Section
        title="Variants"
        count={doc.usesCva ? variantAxes.length || undefined : undefined}
        note={!doc.usesCva ? "이 컴포넌트는 cva(class-variance-authority)를 안 써요. 옵션이 없어요." : undefined}
      >
        {doc.usesCva && variantAxes.length > 0 ? (
          <RefTable
            columns={["축", "값", "기본값"]}
            rows={variantAxes.map(([axis, values]) => [axis, values.join(", "), doc.defaultVariants[axis] ?? "—"])}
          />
        ) : null}
      </Section>

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

      <Section title="Imports" count={doc.imports.length || undefined}>
        {doc.imports.length === 0
          ? <Absent what="Imports" />
          : <RefTable columns={["경로"]} rows={doc.imports.map((i) => [i])} />}
      </Section>
    </>
  );
}
