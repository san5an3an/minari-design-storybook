import * as m000 from "../_src/demos/core/TextInput/TextInput.demo.usage";
import * as m001 from "../_src/demos/core/TextInput/TextInput.demo.sections";
import * as m002 from "../_src/demos/core/TextInput/TextInput.demo.error";
import * as m003 from "../_src/demos/core/TextInput/TextInput.demo.disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "sections": m001.sections,
  "error": m002.error,
  "disabled": m003.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
