/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./with-multiple-selection";
import * as m002 from "./controlled";
import * as m003 from "./controlled-open-state";
import * as m004 from "./with-single-selection";
import * as m005 from "./single-with-custom-indicator";
import * as m006 from "./with-section-level-selection";
import * as m007 from "./with-keyboard-shortcuts";
import * as m008 from "./with-submenus";
import * as m009 from "./long-press-trigger";
import * as m010 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "with-multiple-selection": m001.WithMultipleSelection,
  "controlled": m002.Controlled,
  "controlled-open-state": m003.ControlledOpenState,
  "with-single-selection": m004.WithSingleSelection,
  "single-with-custom-indicator": m005.SingleWithCustomIndicator,
  "with-section-level-selection": m006.WithSectionLevelSelection,
  "with-keyboard-shortcuts": m007.WithKeyboardShortcuts,
  "with-submenus": m008.WithSubmenus,
  "long-press-trigger": m009.LongPressTrigger,
  "custom-styles": m010.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-icons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-descriptions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-disabled-items": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-sections": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-custom-submenu-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-trigger": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
