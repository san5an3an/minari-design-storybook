import * as React from "react";
import Markdown, { type Components } from "react-markdown";

// 예제 폭을 줄 전체로 지정. 부모가 flex-wrap이라 안 주면 줄어드는 문제가 있음
export const FILL = { flex: "1 1 100%", minWidth: 0 } as const;

// 문서 섹션 id, 제목을 소문자 kebab-case로 변환
export function docId(title: string): string {
  return title.trim.toLowerCase.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function Section({ title, count, note, id, children }: {
  title: string;
  count?: React.ReactNode;
  note?: React.ReactNode;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="doc-section" id={id ?? docId(title)}>
      <h2>{title}{count === undefined ? null : <span className="doc-axis">{count}</span>}</h2>
      {note ? <p className="doc-note" style={{ marginTop: 0 }}>{note}</p> : null}
      {children}
    </section>
  );
}

// 공식에 해당 섹션이 없을 때. 빈 화면으로 두지 않음
export function Absent({ what }: { what: string }) {
  return (
    <p className="doc-note" style={{ marginTop: 0 }}>
      공식 문서에 <b>{what} 절이 없어요.</b> 빠뜨린 게 아니라 그쪽에도 없어요.
    </p>
  );
}

// 예제별로 오류 격리해 해당 위치에 오류 메시지 표시
export class DemoBoundary extends React.Component<
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

// docHref 절대 주소로 변환 후 새 탭에 열기. 상대 주소면 해시 라우팅 깨지기 때문임
function officialHref(href: string | undefined, docHref: string | null): string | undefined {
  if (!href) return undefined;
  if (/^[a-z]+:/i.test(href)) return href;
  if (!docHref) return undefined;
  try {
    return new URL(href, docHref).toString;
  } catch {
    return undefined;
  }
}

// html 산문 내 실행 코드와 코드 블록 제외
function cleanHtml(html: string): string {
  if (typeof DOMParser === "undefined") return "";
  const doc = new DOMParser.parseFromString(html, "text/html");
  doc.querySelectorAll("script, style, pre, iframe, object, embed").forEach((n) => n.remove);
  doc.querySelectorAll("*").forEach((el) => {
    for (const a of [...el.attributes]) {
      if (/^on/i.test(a.name) || /^\s*javascript:/i.test(a.value)) el.removeAttribute(a.name);
    }
  });
  return doc.body.innerHTML;
}

export function Prose({ text, format, docHref, inline }: {
  text: string;
  format: "md" | "html" | "text";
  docHref: string | null;
  inline?: boolean;
}) {
  const components = React.useMemo<Components>( => ({
    a: ({ href, children }) => {
      const to = officialHref(href, docHref);
      return to ? <a href={to} target="_blank" rel="noreferrer">{children}</a> : <>{children}</>;
    },
    pre:  => null,
    ...(inline ? { p: ({ children }) => <>{children}</> } : null),
  }), [docHref, inline]);
  const html = React.useMemo( => (format === "html" ? cleanHtml(text) : ""), [format, text]);

  if (format === "text") return <>{text}</>;
  if (format === "html") {
    const Tag = inline ? "span" : "div";
    return <Tag dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <Markdown components={components}>{text.replace(/<br\s*\/?>/gi, "  \n")}</Markdown>;
}

// 셀 텍스트 안 강조만 굵게 표시. 표 셀 값은 원문 그대로 유지해 손실 방지
export function CellText({ text }: { text: string | null | undefined }) {
  // 표 셀에 null 값 존재. .includes 호출 전 null 체크 추가
  if (text == null || text === "") return null;
  if (!text.includes("**")) return <>{text}</>;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => (p.startsWith("**") && p.endsWith("**")
        ? <strong key={i}>{p.slice(2, -2)}</strong>
        : <React.Fragment key={i}>{p}</React.Fragment>))}
    </>
  );
}

// 공식 표 하나 사용. 열 구성은 공식 표 그대로이며 추가 없음
export function RefTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="doc-tokens doc-ref-table">
        <thead>
          <tr>{columns.map((c, i) => <th key={i} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={`${row[0]}-${ri}`}>
              {row.map((cell, i) => (i === 0
                ? <th key={i} scope="row"><CellText text={cell} /></th>
                : <td key={i}><CellText text={cell} /></td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
