"use client";
import * as React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type Viewport = "desktop" | "mobile";

const QUERY_KEY = "viewport";

// 주소 질의에서 뷰포트 값 읽기 처리. 모르는 값은 데스크탑으로 간주함
export function readViewport(): Viewport {
  if (typeof window === "undefined") return "desktop";
  return new URLSearchParams(window.location.search).get(QUERY_KEY) === "mobile" ? "mobile" : "desktop";
}

// 주소 질의에 뷰포트 값 기록 처리. 해시와 다른 질의는 유지하고 replaceState 로 기록 누적을 방지함
function writeViewport(next: Viewport) {
  const url = new URL(window.location.href);
  if (next === "mobile") url.searchParams.set(QUERY_KEY, "mobile");
  else url.searchParams.delete(QUERY_KEY);
  window.history.replaceState(window.history.state, "", url);
}

export function useViewport(): readonly [Viewport, (next: Viewport) => void] {
  const [viewport, setViewport] = React.useState<Viewport>(readViewport);
  const change = React.useCallback((next: Viewport) => {
    setViewport(next);
    writeViewport(next);
  }, []);
  return [viewport, change] as const;
}

export function ViewportSwitch({ value, onChange, mobileReady = true }: {
  value: Viewport;
  onChange: (next: Viewport) => void;
  // 이 베이스의 모바일 판 유무 지정. 없으면 모바일 항목을 잠그고 이유를 표시함
  mobileReady?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center justify-end gap-2" data-slot="usage-viewport-switch">
      <span className="text-muted-foreground text-xs">화면 폭</span>
      <ToggleGroup
        variant="outline"
        size="sm"
        spacing={0}
        aria-label="화면 폭 고르기"
        value={[value]}
        /* 선택 해제 무시 처리. 폭은 항상 데스크탑, 모바일 중 하나여야 함 */
        onValueChange={(next: string[]) => {
          const picked = next[0];
          if (picked === "desktop" || picked === "mobile") onChange(picked);
        }}
      >
        <ToggleGroupItem value="desktop" aria-label="데스크탑">
          <Monitor className="size-3.5" />
          데스크탑
        </ToggleGroupItem>
        <ToggleGroupItem
          value="mobile"
          aria-label="모바일"
          disabled={!mobileReady}
          title={mobileReady ? undefined : "이 베이스의 모바일 판은 아직 만들지 않았어요"}
        >
          <Smartphone className="size-3.5" />
          모바일
        </ToggleGroupItem>
      </ToggleGroup>
      {mobileReady ? null : <span className="text-muted-foreground text-xs">모바일 판은 아직 없어요</span>}
    </div>
  );
}
