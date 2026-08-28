import * as React from "react";

// 뷰포트가 minWidth 이상인지 판별
export function useIsWide(minWidth = 768): boolean {
  const [wide, setWide] = React.useState(true);

  React.useEffect( => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const sync =  => setWide(mq.matches);
    sync;
    mq.addEventListener("change", sync);
    return  => mq.removeEventListener("change", sync);
  }, [minWidth]);

  return wide;
}
