import * as React from "react";
import Markdown, { type Components } from "react-markdown";
import { parseColorTokens } from "./tokens";
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

function Prose({ text, slug }: { text: string; slug: string }) {
  const md = React.useMemo( => undirective(text), [text]);
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

const BREAKS_OUT = /position=["']fixed["']|position:\s*["']fixed["']|100vh/;

function Section({ level, title, children }: {
  level: number; title: string; children: React.ReactNode;
}) {
  const id = title
    ? title.toLowerCase.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
    : undefined;
  return (
    <section className="doc-section" id={id}>
      {level === 2 ? <h2>{title}</h2> : level === 3 ? <h3 className="doc-h3">{title}</h3> : null}
      {children}
    </section>
  );
}

function Block({ block, doc, mod, Provider, active, tones }: {
  block: MuiBlock;
  doc: MuiDoc;
  mod: DemoModule | null;
  Provider: SystemDefinition["Provider"];
  active: Mode;
  tones: ToneColor[];
}) {
  if (block.kind === "prose") return <Prose text={block.text} slug={doc.slug} />;

  if (block.kind === "code") {
    // 코드는 예제 아닌 본문임. 공식 글 속에 끼워진 부분이라 빼면 문장이 끊어지는 문제 있음
    return (
      <pre className="doc-code"><code>{block.text.replace(/\n+$/, "")}</code></pre>
    );
  }

  const Demo = mod ? mod.demos[block.name] : undefined;
  const why = mod ? mod.skipped[block.name] : undefined;

  if (Demo) {
    return (
      <div
        className={"doc-demo-stage"
          + (BREAKS_OUT.test(block.code) ? " doc-demo-stage--contain" : "")}
      >
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

  const demos = doc.sections.reduce(
    (n, s) => n + s.blocks.filter((b) => b.kind === "demo").length, 0);

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{doc.title}</h2>
        {doc.description ? (
          <p className="doc-lead">{doc.description}</p>
        ) : null}
        <p className="doc-note" style={{ marginTop: ".25rem" }}>
          <b>{doc.group}</b> · 공식 문서를 절 순서까지 그대로 옮긴 참조예요.{" "}
          <b>MUI 를 골랐을 때만</b> 보여요. 예제 {demos}개는 <b>공식 원본 코드</b>를
          이 시스템의 테마 안에서 세운 거예요. 바꾼 건 <b>아이콘을 부르는 위치 하나</b>
          뿐이에요(이 프로젝트는 Lucide 밖의 아이콘을 화면에 올리지 않아요).{" "}
          <a href={doc.docHref} target="_blank" rel="noreferrer">공식 문서</a>
        </p>
      </header>

      {doc.sections.map((sec, si) => (
        <Section key={si} level={sec.level} title={sec.title}>
          {sec.blocks.map((b, bi) => (
            <Block
              key={bi}
              block={b}
              doc={doc}
              mod={mod}
              Provider={Provider}
              active={active}
              tones={tones}
            />
          ))}
        </Section>
      ))}

      {doc.api.map((api) => (
        <Section key={api.name} level={2} title={`${api.name} API`}>
          {api.description ? <Prose text={api.description} slug={doc.slug} /> : null}
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
                    {/* Type 값은 문서 HTML 그대로 유지. 마크다운 렌더링 시 표시가 글자로 보임 */}
                    <td><code>{p.type.replace(/<br\s*\/?>/gi, " ")
                      .replace(/&#124;/g, "|").replace(/&nbsp;/g, " ")}</code></td>
                    <td>{p.default ? <code>{p.default}</code>
                      : <span className="doc-dim">—</span>}</td>
                    <td>
                      {p.deprecated ? <b>(deprecated) </b> : null}
                      {p.desc ? <Prose text={p.desc} slug={doc.slug} />
                        : <span className="doc-dim">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ))}
    </>
  );
}
