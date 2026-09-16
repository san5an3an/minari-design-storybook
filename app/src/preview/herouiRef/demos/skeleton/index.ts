/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./text-content";
import * as m002 from "./user-profile";
import * as m003 from "./list";
import * as m004 from "./grid";
import * as m005 from "./single-shimmer";
import * as m006 from "./animation-types";
import * as m007 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "text-content": m001.TextContent,
  "user-profile": m002.UserProfile,
  "list": m003.List,
  "grid": m004.Grid,
  "single-shimmer": m005.SingleShimmer,
  "animation-types": m006.AnimationTypes,
  "custom-styles": m007.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
