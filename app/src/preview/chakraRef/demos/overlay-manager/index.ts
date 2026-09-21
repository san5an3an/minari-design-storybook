/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./overlay-basic";
import * as m001 from "./overlay-with-drawer";
import * as m002 from "./overlay-with-update";
import * as m003 from "./overlay-with-return-value";
import * as m004 from "./overlay-with-menu-item";
import * as m005 from "./overlay-with-form";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "overlay-basic": m000.OverlayBasic,
  "overlay-with-drawer": m001.OverlayWithDrawer,
  "overlay-with-update": m002.OverlayWithUpdate,
  "overlay-with-return-value": m003.OverlayWithReturnValue,
  "overlay-with-menu-item": m004.OverlayWithMenuItem,
  "overlay-with-form": m005.OverlayWithForm,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
