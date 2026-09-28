/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./full-rounded";
import * as m003 from "./disabled";
import * as m004 from "./external-label";
import * as m005 from "./with-description";
import * as m006 from "./default-selected";
import * as m007 from "./invalid";
import * as m008 from "./controlled";
import * as m009 from "./indeterminate";
import * as m010 from "./form";
import * as m011 from "./render-props";
import * as m012 from "./render-function";
import * as m013 from "./custom-indicator";
import * as m014 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "full-rounded": m002.FullRounded,
  "disabled": m003.Disabled,
  "external-label": m004.ExternalLabel,
  "with-description": m005.WithDescription,
  "default-selected": m006.DefaultSelected,
  "invalid": m007.Invalid,
  "controlled": m008.Controlled,
  "indeterminate": m009.Indeterminate,
  "form": m010.Form,
  "render-props": m011.RenderProps,
  "render-function": m012.RenderFunction,
  "custom-indicator": m013.CustomIndicator,
  "custom-styles": m014.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
