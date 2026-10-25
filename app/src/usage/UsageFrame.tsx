"use client";
import * as React from "react";
import { resolveSystem } from "../systems/resolve";
import { MODES, type Mode, type SystemDefinition } from "../systems/types";
import { FONTS, loadFont } from "../preview/fonts";
import { UsageBody } from "./UsagePage";
import { DEVICE_SAFE, SafeAreaContext, remOf } from "./safeArea";

// 앱 껍데기(App.tsx)와 같은 style id 사용. 시스템 CSS를 하나만 두기 위함
const STYLE_ID = "ods-active-system";

// 기기 상태 막대, 홈 인디케이터가 덮는 높이 지정. 값은 safeArea.ts에서 단일 관리함
const SAFE_TOP = remOf(DEVICE_SAFE.top);       // 4.25rem(68px) 지정
const SAFE_BOTTOM = remOf(DEVICE_SAFE.bottom); // 2.3125rem(37px) 지정

interface Ask { base: string; system: string; variant: 1 | 2 | 3 | 4; mode: Mode; font: string }

function readAsk(): Ask {
  const q = new URLSearchParams(window.location.search);
  const asked = Number(q.get("variant"));
  const mode = q.get("mode") ?? "";
  return {
    base: q.get("base") ?? "",
    system: q.get("system") ?? "",
    variant: asked === 2 || asked === 3 || asked === 4 ? asked : 1,
    // 모르는 mode 값은 라이트로 처리. 주소 값은 외부 입력이라 그대로 믿지 않기 위함
    mode: (MODES as readonly string[]).includes(mode) ? (mode as Mode) : "light",
    font: q.get("font") ?? "",
  };
}

// 그리지 못하는 이유를 화면에 표시. 빈 화면으로는 데이터 없음과 오류를 구별할 수 없음
function Cannot({ why }: { why: string }) {
  return (
    <p style={{ margin: 0, padding: "1rem", font: "0.8125rem/1.6 system-ui, sans-serif", color: "#71717a" }}>{why}</p>
  );
}

export function UsageFrame() {
  const [ask] = React.useState(readAsk);
  const resolved = React.useMemo<{ system: SystemDefinition } | { error: string }>(() => {
    if (!ask.base || !ask.system) return { error: "주소에 base · system 이 없어요." };
    try { return { system: resolveSystem(ask.system, ask.base) }; }
    catch (e) { return { error: `시스템 ${ask.system} · 베이스 ${ask.base} 를 못 찾았어요 (${String(e).slice(0, 80)}).` }; }
  }, [ask]);
  const system = "system" in resolved ? resolved.system : null;

  // style 태그 하나의 내용을 교체해 시스템 CSS 적용
  React.useEffect(() => {
    if (!system) return;
    let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (!el) { el = document.createElement("style"); el.id = STYLE_ID; document.head.appendChild(el); }
    el.textContent = system.css;
  }, [system]);

  // data-theme 명시 지정. vars.css의 prefers-color-scheme은 속성이 없을 때만 적용되기 때문임
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = ask.mode;
    root.classList.toggle("dark", ask.mode !== "light");
  }, [ask.mode]);

  // 글꼴, 안전 영역, 문서 바탕 적용. 글꼴은 부모가 보낸 label로 선택함
  React.useEffect(() => {
    const root = document.documentElement;
    const font = FONTS.find((f) => f.label === ask.font);
    if (font) {
      loadFont(font);
      root.style.setProperty("--base-font-family-sans", font.stack);
      root.style.setProperty("--base-font-name-sans", font.label);
    }
    root.style.setProperty("--ods-safe-top", SAFE_TOP);
    root.style.setProperty("--ods-safe-bottom", SAFE_BOTTOM);
    // 대시보드 모바일 껍데기가 읽는 높이 지정. 앱 안에서는 이 변수가 없어 기본 높이를 사용함
    root.style.setProperty("--ods-usage-height", "100dvh");
    // 문서 자체 스크롤 방지. 기기 화면 안에서 대시보드가 직접 스크롤하기 위함
    root.style.overflow = "hidden";
    document.body.style.margin = "0";
  }, [ask.font]);

  if (!system) return <Cannot why={"error" in resolved ? resolved.error : "알 수 없는 오류"} />;
  return (
    <div data-slot="usage-frame" style={{ height: "100dvh", width: "100%", overflow: "hidden", position: "relative" }}>
      {/* 기기 틀 안의 안전 영역 값을 모바일 껍데기에 제공. Popover가 안전 영역 안에 뜨게 하기 위함 */}
      <SafeAreaContext.Provider value={DEVICE_SAFE}>
        <UsageBody system={system} active={ask.mode} variant={ask.variant} />
      </SafeAreaContext.Provider>
    </div>
  );
}
