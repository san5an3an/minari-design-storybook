/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./loading";
import * as m004 from "./disabled";
import * as m005 from "./render-function";
import * as m006 from "./custom-variants";
import * as m007 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "sizes": m002.Sizes,
  "loading": m003.Loading,
  "disabled": m004.Disabled,
  "render-function": m005.RenderFunction,
  "custom-variants": m006.CustomVariants,
  "custom-styles": m007.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-icons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "icon-only": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "loading-state": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "full-width": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "social": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
  "ripple-effect": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: m3-ripple"},
};
