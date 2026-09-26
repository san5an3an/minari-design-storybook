import * as React from "react";
import { resolveSystem } from "../systems/resolve";
import { MODES, type Mode, type SystemDefinition } from "../systems/types";
import { loadDemos, type DemoModule, type ToneColor } from "./antdRef/demos";
import { parseColorTokens } from "./tokens";
import { DemoBoundary } from "./refParts";
import type { BaseRefAdapter, BaseRefDoc, DemoValue, SkipCode } from "./refContract";
import { blueprintAdapter } from "./blueprintRef/adapter";
import { bootstrapAdapter } from "./bootstrapRef/adapter";
import { carbonAdapter } from "./carbonRef/adapter";
import { chakraAdapter } from "./chakraRef/adapter";
import { cloudscapeAdapter } from "./cloudscapeRef/adapter";
import { daisyuiAdapter } from "./daisyuiRef/adapter";
import { fluentAdapter } from "./fluentRef/adapter";
import { flowbiteAdapter } from "./flowbiteRef/adapter";
import { grommetAdapter } from "./grommetRef/adapter";
import { herouiAdapter } from "./herouiRef/adapter";
import { lightningAdapter } from "./lightningRef/adapter";
import { mantineAdapter } from "./mantineRef/adapter";
import { primerAdapter } from "./primerRef/adapter";
import { primereactAdapter } from "./primereactRef/adapter";
import { spectrumAdapter } from "./spectrumRef/adapter";

// App.tsx 사이드바와 동일한 13개 항목을 별도로 유지
const ADAPTERS: Record<string, BaseRefAdapter> = {
  blueprint: blueprintAdapter,
  bootstrap: bootstrapAdapter,
  carbon: carbonAdapter,
  chakra: chakraAdapter,
  cloudscape: cloudscapeAdapter,
  daisyui: daisyuiAdapter,
  fluent: fluentAdapter,
  flowbite: flowbiteAdapter,
  grommet: grommetAdapter,
  heroui: herouiAdapter,
  lightning: lightningAdapter,
  mantine: mantineAdapter,
  primer: primerAdapter,
  primereact: primereactAdapter,
  spectrum: spectrumAdapter,
};

// 주소에서 렌더링 대상 읽기, 값 이상 시 그대로 표시
interface Ask {
  base: string; system: string; slug: string; example: string; mode: Mode;
}

function readAsk: Ask {
  const q = new URLSearchParams(window.location.search);
  const asked = q.get("mode") ?? "";
  return {
    base: q.get("base") ?? "antd",
    system: q.get("system") ?? "",
    slug: q.get("slug") ?? "",
    example: q.get("example") ?? "",
    // 알 수 없는 값은 라이트로 고정. 주소값은 신뢰하지 않고 검증 필요
    mode: (MODES as readonly string[]).includes(asked) ? (asked as Mode) : "light",
  };
}

// 렌더링 실패 사유 표시. 빈 화면은 없음과 오류가 구별되지 않음
function Cannot({ why }: { why: string }) {
  return (
    <p style={{ margin: 0, padding: "1rem", font: "0.8125rem/1.6 system-ui, sans-serif", color: "#71717a" }}>
      {why}
    </p>
  );
}

export function DemoStandalone {
  const [ask] = React.useState(readAsk);
  React.useEffect( => {
    const font = new URLSearchParams(window.location.search).get("font");
    if (font) document.documentElement.style.setProperty("--base-font-family-sans", font);
  }, []);
  const isAntd = ask.base === "antd";
  const adapter = isAntd ? null : ADAPTERS[ask.base] ?? null;
  return isAntd ? <AntdDemo ask={ask} /> : <GenericDemo ask={ask} adapter={adapter} />;
}

function AntdDemo({ ask }: { ask: Ask }) {
  const [mod, setMod] = React.useState<DemoModule | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  const system: SystemDefinition | null = React.useMemo( => {
    if (!ask.system) return null;
    try {
      return resolveSystem(ask.system, ask.base);
    } catch {
      return null;
    }
  }, [ask.system, ask.base]);

  React.useEffect( => {
    if (!system) return;
    const tag = document.createElement("style");
    tag.textContent = system.vars;
    document.head.appendChild(tag);
    document.documentElement.dataset.theme = ask.mode;
    document.documentElement.classList.toggle("dark", ask.mode !== "light");
    // 여백 0 지정. 이 요소 자체가 필드이며 바깥 상자는 참조 페이지가 렌더링하는 구조임
    document.body.style.margin = "0";
    return  => { tag.remove; };
  }, [system, ask.mode]);

  React.useEffect( => {
    let alive = true;
    const p = loadDemos(ask.slug);
    if (!p) { setErr(`\`${ask.slug}\` 의 예제 그룹이 없어요.`); return; }
    p.then((d) => { if (alive) setMod(d); })
     .catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [ask.slug]);

  // AntdReference 방식대로 자동 추출. 값 다르면 색 불일치 발생
  const tones: ToneColor[] = React.useMemo( => {
    if (!system) return [];
    const byName = new Map(parseColorTokens(system.vars).map((t) => [t.name, t]));
    return system.buttonTones.map((name) => ({
      name,
      hex: byName.get(`--semantic-bg-${name}-default`)?.values[ask.mode] ?? "",
    }));
  }, [system, ask.mode]);

  if (!system) return <Cannot why={`시스템 \`${ask.system}\` · 베이스 \`${ask.base}\` 를 못 찾았어요.`} />;
  if (err) return <Cannot why={err} />;
  if (!mod) return null; // 로딩 중 깜빡임 방지

  const Demo = mod.demos[ask.example];
  if (!Demo) {
    const why = mod.skipped[ask.example];
    return <Cannot why={why ?? `\`${ask.example}\` 예제를 못 찾았어요.`} />;
  }

  const Provider = system.Provider;
  return <Provider mode={ask.mode}><Demo tones={tones} /></Provider>;
}

// antd 제외 13종 iframe 예제, adapter 계약 공통 렌더링임
function GenericDemo({ ask, adapter }: { ask: Ask; adapter: BaseRefAdapter | null }) {
  const [doc, setDoc] = React.useState<BaseRefDoc | null>(null);
  const [mod, setMod] = React.useState<{
    demos: Record<string, DemoValue>;
    skipped: Record<string, { code: SkipCode; detail: string }>;
  } | null>(null);
  const [err, setErr] = React.useState<string | null>(null);

  const system: SystemDefinition | null = React.useMemo( => {
    if (!ask.system) return null;
    try {
      return resolveSystem(ask.system, ask.base);
    } catch {
      return null;
    }
  }, [ask.system, ask.base]);

  // antd와 동일하게 호스트 앱 style 미적용
  React.useEffect( => {
    if (!system) return;
    const tag = document.createElement("style");
    tag.textContent = system.vars;
    document.head.appendChild(tag);
    document.documentElement.dataset.theme = ask.mode;
    document.documentElement.classList.toggle("dark", ask.mode !== "light");
    document.body.style.margin = "0";
    return  => { tag.remove; };
  }, [system, ask.mode]);

  React.useEffect( => {
    if (!adapter?.mountTheme || !system) return;
    return adapter.mountTheme(system, ask.mode, document);
  }, [adapter, system, ask.mode]);

  React.useEffect( => {
    if (!adapter) return;
    let alive = true;
    setDoc(null); setErr(null);
    const p = adapter.loadDoc(ask.slug);
    if (!p) { setErr(`\`${ask.slug}\` 참조 데이터가 없어요.`); return; }
    p.then((d) => { if (alive) setDoc(d); }).catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [adapter, ask.slug]);

  React.useEffect( => {
    if (!adapter) return;
    let alive = true;
    setMod(null);
    const p = adapter.loadDemos(ask.slug);
    if (!p) { setErr(`\`${ask.slug}\` 의 예제 모듈이 없어요.`); return; }
    p.then((d) => { if (alive) setMod(d); }).catch((e) => { if (alive) setErr(String(e)); });
    return  => { alive = false; };
  }, [adapter, ask.slug]);

  if (!adapter) return <Cannot why={`베이스 \`${ask.base}\` 의 어댑터를 못 찾았어요.`} />;
  if (!system) return <Cannot why={`시스템 \`${ask.system}\` · 베이스 \`${ask.base}\` 를 못 찾았어요.`} />;
  if (err) return <Cannot why={err} />;
  if (!doc || !mod) return null; // 로딩 중 깜빡임 방지

  const Demo = mod.demos[ask.example];
  if (!Demo) {
    const why = mod.skipped[ask.example];
    return <Cannot why={why ? `${why.code}${why.detail ? `, ${why.detail}` : ""}` : `\`${ask.example}\` 예제를 못 찾았어요.`} />;
  }

  const ex = doc.examples.find((e) => e.key === ask.example);
  const body = "html" in Demo ? <div dangerouslySetInnerHTML={{ __html: Demo.html }} /> : <Demo />;
  const Provider = adapter.Provider;
  return (
    <Provider system={system} mode={ask.mode} providerProps={ex?.providerProps ?? null}>
      <DemoBoundary name={ask.example}>{body}</DemoBoundary>
    </Provider>
  );
}
