import * as m000 from "../_src/demos/core/Pill/Pill.demo.usage";
import * as m001 from "../_src/demos/core/Pill/Pill.demo.withinInput";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "withinInput": m001.withinInput,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
