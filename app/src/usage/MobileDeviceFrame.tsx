"use client";
import * as React from "react";
import type { Mode, SystemDefinition } from "../systems/types";

// Figma 기기 컴포넌트의 실측 크기 정의. 바꾸면 겹침 이미지를 다시 추출해야 함
export const DEVICE = {
  // 기기 컴포넌트 전체 크기 지정
  width: 489,
  height: 1000,
  // iframe이 놓이는 화면 칸 지정. 이 크기가 iframe 문서의 뷰포트가 됨
  screen: { x: 24.5, y: 22, width: 440, height: 956 },
  // iframe 모서리 반경을 실제 화면 모서리보다 조금 작게 지정. 크면 모서리에 틈이 비치기 때문임
  clipRadius: 60,
} as const;

// 기기 최소 배율 지정. 더 줄이면 화면 안 글자를 읽을 수 없음
const MIN_SCALE = 0.5;

export function MobileDeviceFrame({ system, active, variant }: {
  system: SystemDefinition;
  active: Mode;
  variant: 1 | 2 | 3 | 4;
}) {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(1);

  // 보이는 자리에 맞춘 배율 계산. 가로, 세로 배율 중 작은 값을 0.5~1 범위로 제한함
  React.useLayoutEffect(() => {
    const fit = () => {
      const host = hostRef.current;
      if (!host) return;
      const byWidth = host.clientWidth / DEVICE.width;
      const byHeight = (window.innerHeight - host.getBoundingClientRect().top - 24) / DEVICE.height;
      setScale(Math.min(1, Math.max(MIN_SCALE, Math.min(byWidth, byHeight))));
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (hostRef.current) ro.observe(hostRef.current);
    window.addEventListener("resize", fit);
    return () => { ro.disconnect(); window.removeEventListener("resize", fit); };
  }, []);

  // 글꼴 이름을 iframe 주소로 전달. iframe은 부모 html의 CSS 변수를 물려받지 않음
  const font = typeof document === "undefined"
    ? ""
    : getComputedStyle(document.documentElement).getPropertyValue("--base-font-name-sans").trim();

  const src = `/usage-frame?${new URLSearchParams({
    base: system.baseKey, system: system.slug, variant: String(variant), mode: active, font,
  })}`;
  const dark = active !== "light";
  const { screen } = DEVICE;

  return (
    <div ref={hostRef} className="flex flex-col items-center gap-2" data-slot="usage-mobile-host">
      {/* 바깥 칸 크기를 축소된 기기 크기에 맞춰 지정. transform은 차지하는 자리를 줄이지 않음 */}
      <div style={{ width: DEVICE.width * scale, height: DEVICE.height * scale }}>
        <div
          data-slot="usage-device"
          style={{
            position: "relative", width: DEVICE.width, height: DEVICE.height,
            transform: `scale(${scale})`, transformOrigin: "top left",
          }}
        >
          <iframe
            title={`${system.baseTitle} Usage ${variant} 모바일`}
            src={src}
            data-slot="usage-device-screen"
            style={{
              position: "absolute", left: screen.x, top: screen.y, width: screen.width, height: screen.height,
              border: 0, borderRadius: DEVICE.clipRadius, background: dark ? "#000" : "#fff",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/device/iphone-16-pro-max-${dark ? "dark" : "light"}.png`}
            width={DEVICE.width} height={DEVICE.height} alt=""
            draggable={false}
            style={{ position: "absolute", inset: 0, pointerEvents: "none", userSelect: "none" }}
          />
        </div>
      </div>
      <p className="text-muted-foreground text-xs">
        iPhone 16 Pro Max · 화면 {screen.width} × {screen.height} · 배율 {Math.round(scale * 100)}%
      </p>
    </div>
  );
}
