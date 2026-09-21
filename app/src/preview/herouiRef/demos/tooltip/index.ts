/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./placement";
import * as m002 from "./with-arrow";
import * as m003 from "./custom-trigger";
import * as m004 from "./render-function";
import * as m005 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.TooltipBasic,
  "placement": m001.TooltipPlacement,
  "with-arrow": m002.TooltipWithArrow,
  "custom-trigger": m003.TooltipCustomTrigger,
  "render-function": m004.RenderFunction,
  "custom-styles": m005.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
