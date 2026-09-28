/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./on-surface";
import * as m003 from "./with-description";
import * as m004 from "./required";
import * as m005 from "./disabled";
import * as m006 from "./full-width";
import * as m007 from "./invalid";
import * as m008 from "./channel-editing";
import * as m009 from "./controlled";
import * as m010 from "./form-example";
import * as m011 from "./render-function";
import * as m012 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "on-surface": m002.OnSurface,
  "with-description": m003.WithDescription,
  "required": m004.Required,
  "disabled": m005.Disabled,
  "full-width": m006.FullWidth,
  "invalid": m007.Invalid,
  "channel-editing": m008.ChannelEditing,
  "controlled": m009.Controlled,
  "form-example": m010.FormExample,
  "render-function": m011.RenderFunction,
  "custom-styles": m012.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
