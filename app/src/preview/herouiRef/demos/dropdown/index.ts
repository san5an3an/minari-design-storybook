/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./with-icons";
import * as m002 from "./with-descriptions";
import * as m003 from "./with-disabled-items";
import * as m004 from "./with-sections";
import * as m005 from "./with-multiple-selection";
import * as m006 from "./controlled";
import * as m007 from "./controlled-open-state";
import * as m008 from "./with-single-selection";
import * as m009 from "./single-with-custom-indicator";
import * as m010 from "./with-section-level-selection";
import * as m011 from "./with-keyboard-shortcuts";
import * as m012 from "./with-submenus";
import * as m013 from "./with-custom-submenu-indicator";
import * as m014 from "./custom-trigger";
import * as m015 from "./long-press-trigger";
import * as m016 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "with-icons": m001.WithIcons,
  "with-descriptions": m002.WithDescriptions,
  "with-disabled-items": m003.WithDisabledItems,
  "with-sections": m004.WithSections,
  "with-multiple-selection": m005.WithMultipleSelection,
  "controlled": m006.Controlled,
  "controlled-open-state": m007.ControlledOpenState,
  "with-single-selection": m008.WithSingleSelection,
  "single-with-custom-indicator": m009.SingleWithCustomIndicator,
  "with-section-level-selection": m010.WithSectionLevelSelection,
  "with-keyboard-shortcuts": m011.WithKeyboardShortcuts,
  "with-submenus": m012.WithSubmenus,
  "with-custom-submenu-indicator": m013.WithCustomSubmenuIndicator,
  "custom-trigger": m014.CustomTrigger,
  "long-press-trigger": m015.LongPressTrigger,
  "custom-styles": m016.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
