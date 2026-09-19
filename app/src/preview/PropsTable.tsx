import type { ReactNode } from "react";
import type { ApiProp, SystemDefinition } from "../systems/types";
import { CellText } from "./refParts";

// 조건 행, when-then 조건 표시
export interface Condition {
  when: string;
  then: ReactNode;
}

// 선언 종류를 사람이 읽는 문구로 표시
const KIND: Record<string, string> = {
  variant: "값 고르기",
  flag: "켬 · 끔",
  attr: "표준 속성",
  slot: "위치",
};

function Values({ p }: { p: ApiProp }) {
  if (p.kind === "slot") return <span className="doc-dim">내용이 들어가요</span>;
  if (p.values.length === 0) return <span className="doc-dim">있음 · 없음</span>;
  return (
    <span className="doc-vals">
      {p.values.map((v) => (
        <code key={v} className={v === p.default ? "is-default" : undefined}>
          {v}
        </code>
      ))}
    </span>
  );
}

export function PropsTable({
  system, name, conditions,
}: {
  system: SystemDefinition;
  name: string;
  conditions?: readonly Condition[];
}) {
  const api = system.api[name];
  if (!api) return null;

  const rows = api.props;
  const parts = api.parts;

  return (
    <section className="doc-section">
      <h2>Props</h2>

      {rows.length === 0 ? (
        <p className="doc-note" style={{ marginTop: 0 }}>
          고를 것이 없어요. 이 컴포넌트는 마크업과 토큰만으로 정해져요.
        </p>
      ) : (
        <table className="doc-props">
          <thead>
            <tr>
              <th>이름</th>
              <th>종류</th>
              <th>값</th>
              <th>기본값</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.prop}>
                <th>
                  <code>{p.prop}</code>
                  {p.required ? <i className="doc-req-mark">필수</i> : null}
                </th>
                <td className="doc-dim">{KIND[p.kind] ?? p.kind}</td>
                <td>
                  <Values p={p} />
                </td>
                <td>{p.default ? <code>{p.default}</code> : <span className="doc-dim">—</span>}</td>
                <td><CellText text={p.desc} /></td>
              </tr>
            ))}
            {conditions?.map((c) => (
              // 조건 행은 값 행과 다르게 표시. 고르는 값이 아니라 지켜야 하는 조건임
              <tr key={c.when} className="doc-cond">
                <th colSpan={2}>{c.when}</th>
                <td colSpan={3}>{c.then}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {parts.length > 0 ? (
        <>
          <h3 className="doc-h3">Parts <span className="doc-axis">{parts.length}</span></h3>
          <table className="doc-props">
            <thead>
              <tr>
                <th>이름</th>
                <th>태그</th>
                <th>클래스</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((p) => (
                <tr key={p.name}>
                  <th>
                    <code>{p.name}</code>
                  </th>
                  <td className="doc-dim">
                    <code>{`<${p.tag}>`}</code>
                  </td>
                  <td>
                    <code>.{p.cls}</code>
                  </td>
                  <td><CellText text={p.desc} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="doc-note">
            부분 이름은 <b>베이스가 바뀌어도 그대로</b>예요. 무엇으로 구현하든 이 이름으로 나가요.
            그게 계약이 하는 일이에요.
          </p>
        </>
      ) : null}

      <p className="doc-note">
        선언상의 루트는 <code>{`<${api.root}>`}</code> · <code>.{api.base}</code> 예요,{" "}
        <b>베이스가 다른 요소로 그릴 수 있어요.</b> 계약이 정하는 것은 이름과 값이지 태그가 아니에요.
        이 표는 <code>생성 스크립트</code> 의 선언에서 그대로 나와요. 손으로 쓴 표가
        아니에요.
      </p>
    </section>
  );
}
