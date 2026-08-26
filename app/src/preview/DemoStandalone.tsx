import * as React from "react";
import { resolveSystem } from "../systems/resolve";
import { MODES, type Mode, type SystemDefinition } from "../systems/types";
import { loadDemos, type DemoModule, type ToneColor } from "./antdRef/demos";
import { parseColorTokens } from "./tokens";

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
