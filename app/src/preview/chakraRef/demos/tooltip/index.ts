/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./tooltip-basic";
import * as m001 from "./tooltip-with-arrow";
import * as m002 from "./tooltip-with-placement";
import * as m003 from "./tooltip-with-offset";
import * as m004 from "./tooltip-with-delay";
import * as m005 from "./tooltip-with-custom-bg";
import * as m006 from "./tooltip-controlled";
import * as m007 from "./tooltip-with-store";
import * as m008 from "./tooltip-with-interactive";
import * as m009 from "./tooltip-with-disabled";
import * as m010 from "./tooltip-with-avatar";
import * as m011 from "./tooltip-with-checkbox";
import * as m012 from "./tooltip-with-menu-item";
import * as m013 from "./tooltip-with-menu-trigger";
import * as m014 from "./tooltip-with-switch";
import * as m015 from "./tooltip-with-tab";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "tooltip-basic": m000.TooltipBasic,
  "tooltip-with-arrow": m001.TooltipWithArrow,
  "tooltip-with-placement": m002.TooltipWithPlacement,
  "tooltip-with-offset": m003.TooltipWithOffset,
  "tooltip-with-delay": m004.TooltipWithDelay,
  "tooltip-with-custom-bg": m005.TooltipWithCustomBg,
  "tooltip-controlled": m006.TooltipControlled,
  "tooltip-with-store": m007.TooltipWithStore,
  "tooltip-with-interactive": m008.TooltipWithInteractive,
  "tooltip-with-disabled": m009.TooltipWithDisabled,
  "tooltip-with-avatar": m010.TooltipWithAvatar,
  "tooltip-with-checkbox": m011.TooltipWithCheckbox,
  "tooltip-with-menu-item": m012.TooltipWithMenuItem,
  "tooltip-with-menu-trigger": m013.TooltipWithMenuTrigger,
  "tooltip-with-switch": m014.TooltipWithSwitch,
  "tooltip-with-tab": m015.TooltipWithTab,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
