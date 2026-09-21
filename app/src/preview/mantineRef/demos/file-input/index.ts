import * as m000 from "../_src/demos/core/FileInput/FileInput.demo.usage";
import * as m001 from "../_src/demos/core/FileInput/FileInput.demo.multiple";
import * as m002 from "../_src/demos/core/FileInput/FileInput.demo.accept";
import * as m003 from "../_src/demos/core/FileInput/FileInput.demo.clearable";
import * as m004 from "../_src/demos/core/FileInput/FileInput.demo.valueComponent";
import * as m005 from "../_src/demos/core/FileInput/FileInput.demo.error";
import * as m006 from "../_src/demos/core/FileInput/FileInput.demo.disabled";
import * as m007 from "../_src/demos/core/FileInput/FileInput.demo.sections";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "multiple": m001.multiple,
  "accept": m002.accept,
  "clearable": m003.clearable,
  "valueComponent": m004.valueComponent,
  "error": m005.error,
  "disabled": m006.disabled,
  "sections": m007.sections,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
