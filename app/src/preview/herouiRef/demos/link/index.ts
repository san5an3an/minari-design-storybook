/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./icon-placement";
import * as m002 from "./underline-and-offset";
import * as m003 from "./render-function";
import * as m004 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.LinkBasic,
  "icon-placement": m001.LinkIconPlacement,
  "underline-and-offset": m002.LinkUnderlineAndOffset,
  "render-function": m003.RenderFunction,
  "custom-styles": m004.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "custom-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
