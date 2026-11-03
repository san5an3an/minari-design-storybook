import * as React from "react";
import { applyMode, Mode as CloudscapeMode } from "@cloudscape-design/global-styles";
import type { Mode } from "../systems/types";

// Cloudscape 다크 모드 스위치(body awsui-dark-mode)를 사용 화면이 떠 있는 동안만 켬. 공용 provider 는 테마 값만 넣어 테마가 안 덮는 글자 칸이 다크·고대비에서 라이트 값으로 남음
export function useCloudscapeUsageMode(active: Mode) {
  React.useEffect(() => {
    const wasDark = document.body.classList.contains("awsui-dark-mode");
    applyMode(active === "light" ? CloudscapeMode.Light : CloudscapeMode.Dark);
    return () => applyMode(wasDark ? CloudscapeMode.Dark : CloudscapeMode.Light);
  }, [active]);
}
