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

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-icons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-descriptions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-disabled-items": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-sections": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-custom-submenu-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-trigger": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
