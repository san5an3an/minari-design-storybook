/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./with-dots";
import * as m002 from "./space-and-channels";
import * as m003 from "./disabled";
import * as m004 from "./controlled";
import * as m005 from "./render-function";
import * as m006 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.ColorAreaBasic,
  "with-dots": m001.ColorAreaWithDots,
  "space-and-channels": m002.ColorAreaSpaceAndChannels,
  "disabled": m003.ColorAreaDisabled,
  "controlled": m004.ColorAreaControlled,
  "render-function": m005.RenderFunction,
  "custom-styles": m006.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
