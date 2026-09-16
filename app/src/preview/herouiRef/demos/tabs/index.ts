/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./vertical";
import * as m002 from "./overflow";
import * as m003 from "./disabled";
import * as m004 from "./with-separator";
import * as m005 from "./secondary";
import * as m006 from "./secondary-vertical";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "vertical": m001.Vertical,
  "overflow": m002.Overflow,
  "disabled": m003.Disabled,
  "with-separator": m004.WithSeparator,
  "secondary": m005.Secondary,
  "secondary-vertical": m006.SecondaryVertical,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
