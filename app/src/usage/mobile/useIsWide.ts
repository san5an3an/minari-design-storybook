import * as React from "react";

// 모바일 판 경계 지정. 뷰포트 폭 768 미만을 모바일로 판단
export const MOBILE_BREAKPOINT = 768;

function query(minWidth: number): MediaQueryList | null {
  return typeof window === "undefined" ? null : window.matchMedia(`(min-width: ${minWidth}px)`);
}

// 뷰포트 폭이 minWidth 이상인지 판단. 첫 값을 matchMedia 에서 바로 읽어 데스크탑 화면이 잠깐 그려지는 문제 방지
export function useIsWide(minWidth = MOBILE_BREAKPOINT): boolean {
  const [wide, setWide] = React.useState(() => query(minWidth)?.matches ?? true);

  React.useEffect(() => {
    const mq = query(minWidth);
    if (!mq) return;
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [minWidth]);

  return wide;
}
