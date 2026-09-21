/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./disabled";
import * as m003 from "./simple-prev-next";
import * as m004 from "./controlled";
import * as m005 from "./with-ellipsis";
import * as m006 from "./with-summary";
import * as m007 from "./custom-icons";
import * as m008 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.PaginationBasic,
  "sizes": m001.PaginationSizes,
  "disabled": m002.PaginationDisabled,
  "simple-prev-next": m003.PaginationSimplePrevNext,
  "controlled": m004.PaginationControlled,
  "with-ellipsis": m005.PaginationWithEllipsis,
  "with-summary": m006.PaginationWithSummary,
  "custom-icons": m007.PaginationCustomIcons,
  "custom-styles": m008.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
