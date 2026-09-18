/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./drawer-basic";
import * as m001 from "./drawer-controlled";
import * as m002 from "./drawer-with-sizes";
import * as m003 from "./drawer-with-context";
import * as m004 from "./drawer-with-offset";
import * as m005 from "./drawer-with-placement";
import * as m006 from "./drawer-with-initial-focus";
import * as m007 from "./drawer-with-custom-container";
import * as m008 from "./drawer-with-header-actions";
import * as m009 from "./drawer-with-conditional-variants";
import * as m010 from "./drawer-non-modal";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "drawer-basic": m000.DrawerBasic,
  "drawer-controlled": m001.DrawerControlled,
  "drawer-with-sizes": m002.DrawerWithSizes,
  "drawer-with-context": m003.DrawerWithContext,
  "drawer-with-offset": m004.DrawerWithOffset,
  "drawer-with-placement": m005.DrawerWithPlacement,
  "drawer-with-initial-focus": m006.DrawerWithInitialFocus,
  "drawer-with-custom-container": m007.DrawerWithCustomContainer,
  "drawer-with-header-actions": m008.DrawerWithHeaderActions,
  "drawer-with-conditional-variants": m009.DrawerWithConditionalVariants,
  "drawer-non-modal": m010.DrawerNonModal,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
