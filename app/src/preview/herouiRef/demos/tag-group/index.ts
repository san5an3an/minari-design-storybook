/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./variants";
import * as m003 from "./disabled";
import * as m004 from "./selection-modes";
import * as m005 from "./controlled";
import * as m006 from "./with-error-message";
import * as m007 from "./with-list-data";
import * as m008 from "./with-prefix";
import * as m009 from "./with-remove-button";
import * as m010 from "./render-function";
import * as m011 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.TagGroupBasic,
  "sizes": m001.TagGroupSizes,
  "variants": m002.TagGroupVariants,
  "disabled": m003.TagGroupDisabled,
  "selection-modes": m004.TagGroupSelectionModes,
  "controlled": m005.TagGroupControlled,
  "with-error-message": m006.TagGroupWithErrorMessage,
  "with-list-data": m007.TagGroupWithListData,
  "with-prefix": m008.TagGroupWithPrefix,
  "with-remove-button": m009.TagGroupWithRemoveButton,
  "render-function": m010.RenderFunction,
  "custom-styles": m011.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
