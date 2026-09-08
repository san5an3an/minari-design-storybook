"use client";

import * as React from "react";
import { ConfigProvider, Steps, theme as antdTheme } from "antd";
import { AntdStyleLayer } from "@/bases/antdStyleLayer";

const CSS_VAR_KEY = "ods-chrome-antd";

const CHROME = {
  light: {
    primary: "#171717", // --primary
    onPrimary: "#fafafa", // --primary-foreground
    text: "#0a0a0a", // --foreground
    surface: "#ffffff", // --background
    subtleText: "#737373", // --muted-foreground
    line: "#e5e5e5", // --border
    fill: "#f5f5f5", // --muted
  },
  dark: {
    primary: "#e5e5e5",
    onPrimary: "#171717",
    text: "#fafafa",
    surface: "#0a0a0a",
    subtleText: "#a1a1a1",
    line: "#ffffff1a", // 8자리 알파 포함 hex 값 처리
                       // 레일 반영 여부 미확인
    fill: "#262626",
  },
} as const;

function chromeTheme(dark: boolean) {
  const c = dark ? CHROME.dark : CHROME.light;
  return {
    // 조건 ②, 키 명시하기
    cssVar: { key: CSS_VAR_KEY },
    // 다크 모드는 antd 알고리즘 적용. 파생색은 어두운 배경 기준 계산값임
    algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: c.primary, // 진행 중 아이콘 배경
      colorTextLightSolid: c.onPrimary, // 다크 모드에서 필요한 상단 문구
      colorText: c.text,
      colorBgContainer: c.surface,
      colorTextDescription: c.subtleText,
      colorTextDisabled: c.subtleText, // 기다림 단계
      colorTextLabel: c.subtleText,
      colorSplit: c.line, // 단계 사이 레일
      colorFillTertiary: c.fill,
      colorPrimaryBg: c.fill,
      colorPrimaryBgHover: c.fill,
    },
  };
}

function useChromeDark: boolean {
  return React.useSyncExternalStore(
    (onChange) => {
      const obs = new MutationObserver(onChange);
      obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return  => obs.disconnect;
    },
     => document.documentElement.classList.contains("dark"),
    // 서버 스냅샷. SSR은 html 요소가 없어 라이트 모드로 그린 뒤 하이드레이션 후 맞추는 방식임
     => false,
  );
}

export interface ChromeStepsProps {
  // 단계 목록. 호출 측이 소유하며 단계 추가 시 그쪽 배열에 한 행 추가
  steps: readonly { key: string; title: string }[];
  // 현재 인덱스, 0부터 시작
  current: number;
  // 표시기 전체의 접근성 이름
  label: string;
}

export function ChromeSteps({ steps, current, label }: ChromeStepsProps) {
  const dark = useChromeDark;
  const now = steps[current];

  return (
    <div role="group" aria-label={label}>
      {/* 스크린리더 전용 텍스트. antd DOM 에 aria 를 못 넣어 순서를 전달하는 유일한 수단임 */}
      <p className="sr-only">
        {label}: {steps.length}단계 중 {current + 1}단계
        {now ? `, ${now.title}` : ""}
      </p>

      <AntdStyleLayer>
        <ConfigProvider theme={chromeTheme(dark)}>
          <Steps
            current={current}
            size="medium"
            items={steps.map((s) => ({ key: s.key, title: s.title }))}
          />
        </ConfigProvider>
      </AntdStyleLayer>
    </div>
  );
}
