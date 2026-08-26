import { apiReferenceOf } from "./apiRefData";

// 코드 서식으로 감쌀 열 지정, 나머지는 문장이라 그대로 유지
const CODE_COLUMNS = new Set(["prop", "property", "type", "default"]);

export function ApiReference({ name, baseKey, baseTitle }: {
  name: string;
  baseKey: string;
  baseTitle: string;
}) {
  // shadcn 계열 문서 기반 셀 내용. 다른 베이스엔 적용 불가
  if (baseKey !== "shadcn") {
    return (
      <section className="doc-section">
        <h2>API Reference</h2>
        <p className="doc-note" style={{ marginTop: 0 }}>
          이 필드는 <b>shadcn/ui</b> 를 골랐을 때만 보여요. 지금은 <b>{baseTitle}</b> 라
          그쪽 계약이 달라요. 위 <b>프로퍼티스</b> 표가 어느 베이스에서든 통하는 이 시스템 계약이에요.
        </p>
      </section>
    );
  }

  const ref = apiReferenceOf(name);

  return (
    <section className="doc-section">
      <h2>
        API Reference
        {ref.kind === "table" ? <span className="doc-axis">{ref.groups.length}</span> : null}
      </h2>

      {ref.kind === "ours" ? (
        <p className="doc-note" style={{ marginTop: 0 }}>
          <b>이 시스템이 만든 컴포넌트예요.</b> 공식 문서에 대응하는 컴포넌트가 아예 없어서
          옮겨 올 API Reference 도 없어요. 위 <b>프로퍼티스</b> 표가 이 컴포넌트의 유일한 계약이에요.
        </p>
      ) : null}

      {ref.kind === "none" ? (
        <p className="doc-note" style={{ marginTop: 0 }}>
          공식 문서에 <b>API Reference 절이 없어요.</b> 빠뜨린 게 아니라 그쪽에도 없어요.
          받는 값은 위 <b>프로퍼티스</b> 표가 이 시스템 기준으로 말해 줘요.
        </p>
      ) : null}

      {ref.kind === "prose" ? (
        <p className="doc-note" style={{ marginTop: 0 }}>
          공식 문서의 이 절은 <b>표 없이 설명뿐</b>이에요. {ref.text}
        </p>
      ) : null}

      {ref.kind === "upstream" ? (
        <p className="doc-note" style={{ marginTop: 0 }}>
          이 컴포넌트의 API 는 <b>원 라이브러리가 소유해요</b> . 감싸는 쪽은 값을 새로 정하지
          않고 그대로 흘려보내요. 그래서 공식 문서도 표 대신 그쪽을 가리켜요:{" "}
          <a href={ref.upstream.url} target="_blank" rel="noreferrer">{ref.upstream.label}</a>
        </p>
      ) : null}

      {ref.kind === "table" ? (
        <>
          <p className="doc-note" style={{ marginTop: 0 }}>
            하위 컴포넌트별로 받는 값이에요. <b>이 시스템 프로퍼티스와 이름이 다를 수 있어요</b>,
            위 표가 이 시스템의 계약이고, 이건 본뜬 쪽의 계약이에요.
            {ref.groups.some((g) => g.origin === "props") ? (
              <> <b>Props</b> 딱지가 붙은 것은 공식 문서에서 <b>API Reference 절이 아니라
              Props 머리말</b> 아래에 있던 표예요.</>
            ) : null}
          </p>
          {/* key에 이름만 사용 금지. 동일 컴포넌트 내 같은 이름 표가 여럿 있음 */}
          {ref.groups.map((g, gi) => (
            <div key={`${g.name}-${gi}`} style={{ marginBottom: "1.25rem" }}>
              <h3 style={{ margin: "0 0 .25rem" }}>
                {g.name}
                {/* 출처 표시, Props 아래 위치한 표 */}
                {g.origin === "props" ? (
                  <span className="doc-axis" title="공식 문서의 Props 머리말 아래">Props</span>
                ) : null}
              </h3>
              {g.note ? (
                <p className="doc-note" style={{ margin: "0 0 .5rem" }}>{g.note}</p>
              ) : null}
              {/* 열 구성은 원본 머리행 그대로 사용. 열 수가 섞여 있어 고정 불가한 구조임 */}
              <table className="doc-tokens">
                <thead>
                  <tr>
                    {g.columns.map((c) => <th key={c} scope="col">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((row, ri) => (
                    <tr key={`${row[0]}-${ri}`}>
                      {row.map((cell, i) => {
                        // 값처럼 읽는 열만 코드 서식 적용. 설명문까지 감싸면 등폭 되어 읽기 어려운 문제가 있음
                        const code = CODE_COLUMNS.has(g.columns[i]?.toLowerCase);
                        const body = cell === "—" ? "—" : code ? <code>{cell}</code> : cell;
                        return i === 0
                          ? <th key={i} scope="row">{body}</th>
                          : <td key={i}>{body}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          {ref.upstream ? (
            <p className="doc-note">
              나머지 하위 컴포넌트는 원 라이브러리가 소유해요:{" "}
              <a href={ref.upstream.url} target="_blank" rel="noreferrer">{ref.upstream.label}</a>
            </p>
          ) : null}
        </>
      ) : null}
    </section>
  );
}
