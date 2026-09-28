/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./orientation";
import * as m002 from "./size";
import * as m003 from "./with-card";
import * as m004 from "./hide-scroll-bar";
import * as m005 from "./visibility-change";
import * as m006 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.default,
  "orientation": m001.default,
  "size": m002.default,
  "with-card": m003.default,
  "hide-scroll-bar": m004.default,
  "visibility-change": m005.default,
  "custom-styles": m006.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
