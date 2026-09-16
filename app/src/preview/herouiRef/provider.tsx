import * as React from "react";
import { UNSAFE_PortalProvider } from "react-aria";
import type { BaseRefProviderProps } from "../refContract";

export const HEROUI_SCOPE_CLASS = "heroui-ref-scope";

export default function HerouiRefProvider({ children }: BaseRefProviderProps) {
  const cell = React.useRef<HTMLDivElement>(null);
  // 포털 마운트 확인 후 렌더링. 미마운트 시 null 반환
  const getContainer = React.useCallback( => cell.current, []);
  return (
    <div ref={cell} className={HEROUI_SCOPE_CLASS} style={{ position: "relative" }}>
      <UNSAFE_PortalProvider getContainer={getContainer}>{children}</UNSAFE_PortalProvider>
    </div>
  );
}
