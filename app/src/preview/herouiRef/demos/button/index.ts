/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./with-icons";
import * as m004 from "./icon-only";
import * as m005 from "./loading";
import * as m006 from "./loading-state";
import * as m007 from "./full-width";
import * as m008 from "./disabled";
import * as m009 from "./social";
import * as m010 from "./render-function";
import * as m011 from "./custom-variants";
import * as m012 from "./ripple-effect";
import * as m013 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "sizes": m002.Sizes,
  "with-icons": m003.WithIcons,
  "icon-only": m004.IconOnly,
  "loading": m005.Loading,
  "loading-state": m006.LoadingState,
  "full-width": m007.FullWidth,
  "disabled": m008.Disabled,
  "social": m009.Social,
  "render-function": m010.RenderFunction,
  "custom-variants": m011.CustomVariants,
  "ripple-effect": m012.RippleEffect,
  "custom-styles": m013.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
