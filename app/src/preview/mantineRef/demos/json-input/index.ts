import * as m000 from "../_src/demos/core/JsonInput/JsonInput.demo.usage";
import * as m001 from "../_src/demos/core/JsonInput/JsonInput.demo.configurator";
import * as m002 from "../_src/demos/core/JsonInput/JsonInput.demo.disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "disabled": m002.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
