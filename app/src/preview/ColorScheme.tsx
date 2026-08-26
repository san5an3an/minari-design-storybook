import * as React from "react";
import { TokenTable } from "./TokenTable";
import {
  MODES, MODE_LABEL, type ColorToken, type Mode,
  byStep, groupBy, parseColorTokens,
} from "./tokens";

// --base-color-brand-9에서 9만 추출. 계단 번호는 마지막 부분임
function stepOf(name: string): string {
  return name.split("-").pop ?? "";
}

// 셀 안에 짧은 표시 배치. 폭 1.6rem 이내로 제한
function stepBadge(step: string): string {
  return /^\d+$/.test(step) ? step : "C";
}

function stepLabel(step: string): string {
  return /^\d+$/.test(step) ? `${step}단계` : "contrast, solid 위 전경색";
}

function defaultsByStep(refs: Record<string, string>, role: string): Map<string, string[]> {
  const out = new Map<string, string[]>;
  const prefix = `base.color.${role}.`;
  for (const [semantic, basePath] of Object.entries(refs)) {
    // 기본 위치만 표시
    if (!semantic.endsWith(".default") || !basePath.startsWith(prefix)) continue;
    const step = basePath.slice(prefix.length);
    const list = out.get(step) ?? [];
    list.push("--" + semantic.replace(/\./g, "-"));
    out.set(step, list);
  }
  return out;
}

// 12단계를 한 행에 표시해 간격 균일성, 모드 역전 여부 확인
function Ramp({
  role, tokens, refs,
}: {
  role: string;
  tokens: ColorToken[];
  refs: Record<string, Record<string, string>>;
}) {
  const steps = byStep(tokens);
  return (
    <div className="doc-ramp">
      <b>{role}</b>
      {MODES.map((m) => {
        const used = defaultsByStep(refs[m] ?? {}, role);
        return (
          <div key={m} className="doc-ramp-row">
            <span className="doc-ramp-label">{MODE_LABEL[m]}</span>
            {steps.map((t) => {
              const step = stepOf(t.name);
              const names = used.get(step);
              const hex = t.values[m] ?? "—";
              return (
                <span
                  key={t.name}
                  className={`doc-swatch doc-swatch--step${names ? " is-default" : ""}`}
                  style={{ background: t.values[m] }}
                  data-tip={`${hex}  ${stepLabel(step)}${names ? "\n" + names.join("\n") : ""}`}
                >
                  {/* 해당 단계의 …-default가 있을 때만 번호 표시 */}
                  {names ? <i>{stepBadge(step)}</i> : null}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export function ColorScheme({
  vars, refs, active,
}: {
  vars: string;
  refs: Record<string, Record<string, string>>;
  active: Mode;
}) {
  // 시스템 변경 시에만 재파싱. 1000줄 넘는 텍스트라 매 렌더 파싱은 비효율적임
  const tokens = React.useMemo( => parseColorTokens(vars), [vars]);
  const base = groupBy(tokens, "base");
  const semantic = groupBy(tokens, "semantic");
  const component = tokens.filter((t) => t.tier === "component");

  return (
    <section className="doc-section">
      <h2>Color Scheme</h2>
      <p className="doc-note" style={{ marginTop: 0 }}>
        세 모드를 나란히 놓았어요. 값은 <code>generated/{"{시스템}"}/vars.css</code> 를 그대로 읽은
        것이라 화면과 산출물이 어긋날 수 없어요. 색은 전부 hex 예요. Figma 가 hex 를 받으니까요.
      </p>

      <h3 className="doc-h3">1. Base 팔레트, 12단계 계단</h3>
      <p className="doc-note" style={{ marginTop: 0 }}>
        색 부분에 마우스를 올리면 hex 가 나와요. <b>번호가 찍힌 셀</b>은
        <code>…-default</code> 이름이 실제로 쓰고 있는 계단이에요.
        예를 들어 <code>--semantic-bg-brand-default</code> 가 brand 의 몇 번째 칸인지 여기서 보여요.
      </p>
      <div className="doc-ramps">
        {[...base].map(([role, list]) => (
          <Ramp key={role} role={role} tokens={list} refs={refs} />
        ))}
      </div>
      {[...base].map(([role, list]) => (
        <details key={role} className="doc-fold">
          <summary>{role}, 값 {list.length}개</summary>
          <TokenTable tokens={byStep(list)} active={active} />
        </details>
      ))}

      <h3 className="doc-h3">2. Semantic, 화면이 실제로 쓰는 이름</h3>
      <p className="doc-note" style={{ marginTop: 0 }}>
        컴포넌트는 Base 를 직접 부르지 않고 이 이름을 불러요. 모드가 바뀌면
        <b> 이름은 그대로고 값만</b> 바뀌어요.
      </p>
      {[...semantic].map(([group, list]) => (
        <details key={group} className="doc-fold" open>
          <summary>{group}, 값 {list.length}개</summary>
          <TokenTable tokens={list} active={active} />
        </details>
      ))}

      <h3 className="doc-h3">3. Component, 컴포넌트마다 따로 가진 색</h3>
      <details className="doc-fold">
        <summary>펼치기, 값 {component.length}개</summary>
        <TokenTable tokens={component} active={active} />
      </details>
    </section>
  );
}
