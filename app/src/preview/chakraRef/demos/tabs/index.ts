/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./tabs-basic";
import * as m001 from "./tabs-with-variants";
import * as m002 from "./tabs-lazy-mounted";
import * as m003 from "./tabs-with-indicator";
import * as m004 from "./tabs-with-custom-indicator";
import * as m005 from "./tabs-with-links";
import * as m006 from "./tabs-with-fitted";
import * as m007 from "./tabs-controlled";
import * as m008 from "./tabs-with-store";
import * as m009 from "./tabs-with-disabled-tab";
import * as m010 from "./tabs-with-manual-activation";
import * as m011 from "./tabs-with-dynamic-add";
import * as m012 from "./tabs-with-responsive-orientation";
import * as m013 from "./tabs-with-animation";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "tabs-basic": m000.TabsBasic,
  "tabs-with-variants": m001.TabsWithVariants,
  "tabs-lazy-mounted": m002.TabsLazyMounted,
  "tabs-with-indicator": m003.TabsWithIndicator,
  "tabs-with-custom-indicator": m004.TabsWithCustomIndicator,
  "tabs-with-links": m005.TabsWithLinks,
  "tabs-with-fitted": m006.TabsWithFitted,
  "tabs-controlled": m007.TabsControlled,
  "tabs-with-store": m008.TabsWithStore,
  "tabs-with-disabled-tab": m009.TabsWithDisabledTab,
  "tabs-with-manual-activation": m010.TabsWithManualActivation,
  "tabs-with-dynamic-add": m011.TabsWithDynamicAdd,
  "tabs-with-responsive-orientation": m012.TabsWithResponsiveOrientation,
  "tabs-with-animation": m013.TabsWithAnimation,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
