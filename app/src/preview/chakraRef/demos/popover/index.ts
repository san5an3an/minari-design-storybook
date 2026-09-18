/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./popover-basic";
import * as m001 from "./popover-controlled";
import * as m002 from "./popover-with-sizes";
import * as m003 from "./popover-lazy-mounted";
import * as m004 from "./popover-with-placement";
import * as m005 from "./popover-with-offset";
import * as m006 from "./popover-with-same-width";
import * as m007 from "./popover-nested";
import * as m008 from "./popover-with-initial-focus";
import * as m009 from "./popover-with-form";
import * as m010 from "./popover-with-custom-bg";
import * as m011 from "./popover-open-from-dialog";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "popover-basic": m000.PopoverBasic,
  "popover-controlled": m001.PopoverControlled,
  "popover-with-sizes": m002.PopoverWithSizes,
  "popover-lazy-mounted": m003.PopoverLazyMounted,
  "popover-with-placement": m004.PopoverWithPlacement,
  "popover-with-offset": m005.PopoverWithOffset,
  "popover-with-same-width": m006.PopoverWithSameWidth,
  "popover-nested": m007.PopoverNested,
  "popover-with-initial-focus": m008.PopoverWithInitialFocus,
  "popover-with-form": m009.PopoverWithForm,
  "popover-with-custom-bg": m010.PopoverWithCustomBg,
  "popover-open-from-dialog": m011.PopoverOpenFromDialog,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
