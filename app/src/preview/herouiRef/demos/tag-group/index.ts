/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./sizes";
import * as m001 from "./variants";
import * as m002 from "./disabled";
import * as m003 from "./selection-modes";
import * as m004 from "./controlled";
import * as m005 from "./with-error-message";
import * as m006 from "./with-list-data";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "sizes": m000.TagGroupSizes,
  "variants": m001.TagGroupVariants,
  "disabled": m002.TagGroupDisabled,
  "selection-modes": m003.TagGroupSelectionModes,
  "controlled": m004.TagGroupControlled,
  "with-error-message": m005.TagGroupWithErrorMessage,
  "with-list-data": m006.TagGroupWithListData,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "basic": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-prefix": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-remove-button": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "render-function": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-styles": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
