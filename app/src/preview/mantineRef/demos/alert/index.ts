import * as m000 from "../_src/demos/core/Alert/Alert.demo.configurator";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
