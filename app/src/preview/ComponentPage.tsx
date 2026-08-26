import * as React from "react";
import { PropsTable } from "./PropsTable";
import { TokenTable } from "./TokenTable";
import { ApiReference } from "./ApiReference";
import { PAGES } from "./pages/registry";
import { parseColorTokens, type Mode } from "./tokens";
import type { SystemDefinition } from "../systems/types";

export function ComponentPage({
  system, name, active,
}: {
  system: SystemDefinition;
  name: string;
  active: Mode;
}) {
  const entry = system.components.find((c) => c.name === name);
  // 시스템 변경 시에만 재파싱. 1000줄 넘는 텍스트라 매 렌더 파싱은 비효율적임
  const tokens = React.useMemo( => parseColorTokens(system.vars), [system.vars]);
  const mine = React.useMemo(
     => tokens.filter((t) => t.name.startsWith(`--component-${name}-`)),
    [tokens, name],
  );

  if (!entry) {
    // 필터링된 목록으로 사이드바 생성
    return (
      <p className="doc-note">
        <b>{system.baseTitle}</b> 에는 <code>{name}</code> 이 없어요. 이 베이스로 그릴 수 있는
        것은 {system.components.length}종이고, 다른 베이스를 고르면 있을 수도 있어요.
      </p>
    );
  }

  const mod = PAGES[name];

  return (
    <>
      <header className="doc-head">
        <h2 className="doc-h2">{entry.title}</h2>
        <p className="doc-lead">{entry.summary}</p>
      </header>

      {/* 표본 페이지 없음과 구현 자체 없음 구분 */}
      {entry.ready && mod ? (
        <system.Provider mode={active}>
          <mod.Page system={system} active={active} />
        </system.Provider>
      ) : (
        <p className="doc-empty">
          <b>미리보기 화면이 아직 없어요.</b> 구현은 <b>{system.baseTitle}</b> 로 이미 있고,
          빠진 것은 <code>app/src/preview/pages/{name}.tsx</code> 하나예요.
          {/* 복원용 코드 위치. drawable filter 제거 시 삼항 분기로 복원 */}
        </p>
      )}

      <PropsTable system={system} name={name} conditions={mod?.conditions} />

      {/* 자체 계약 우선 확인, 이후 참조 계약 확인 */}
      <ApiReference name={name} baseKey={system.baseKey} baseTitle={system.baseTitle} />

      <section className="doc-section">
        <h2>Tokens <span className="doc-axis">{mine.length}</span></h2>
        <p className="doc-note" style={{ marginTop: 0 }}>
          <code>--component-{name}-*</code> 는 이 컴포넌트만 쓰는 이름이에요.
          값은 semantic 층을 가리키고, 그 층이 모드에 따라 바뀌어요.
        </p>
        <TokenTable tokens={mine} active={active} />
      </section>
    </>
  );
}
