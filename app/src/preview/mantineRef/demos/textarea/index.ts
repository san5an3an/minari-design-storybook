import * as m000 from "../_src/demos/core/Textarea/Textarea.demo.configurator";
import * as m001 from "../_src/demos/core/Textarea/Textarea.demo.autosize";
import * as m002 from "../_src/demos/core/Textarea/Textarea.demo.resize";
import * as m003 from "../_src/demos/core/Textarea/Textarea.demo.error";
import * as m004 from "../_src/demos/core/Textarea/Textarea.demo.disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "autosize": m001.autosize,
  "resize": m002.resize,
  "error": m003.error,
  "disabled": m004.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
