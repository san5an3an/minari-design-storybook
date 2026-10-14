import * as React from "react";

// 껍데기가 떠 있는 동안 html 에 data-ods-mobile 속성 지정. 포털로 body 에 뜨는 목록, 시트, 대화상자에 모바일 CSS 를 적용하기 위함
export function useMobileDocFlag(): void {
  React.useEffect(() => {
    const root = document.documentElement;
    root.dataset.odsMobile = "true";
    return () => { delete root.dataset.odsMobile; };
  }, []);
}

// keys 중 하나가 바뀌면 돌려준 요소의 스크롤을 맨 위로 이동. 이전 화면의 스크롤 위치를 가져오지 않기 위함
export function useScrollTopOn<T extends HTMLElement>(...keys: readonly unknown[]): React.RefObject<T | null> {
  const ref = React.useRef<T>(null);
  React.useLayoutEffect(() => {
    ref.current?.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, keys);
  return ref;
}
