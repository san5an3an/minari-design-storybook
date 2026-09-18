/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./floating-panel-basic";
import * as m001 from "./floating-panel-controlled-open";
import * as m002 from "./floating-panel-with-store";
import * as m003 from "./floating-panel-stages";
import * as m004 from "./floating-panel-multiple";
import * as m005 from "./floating-panel-with-overlay";
import * as m006 from "./floating-panel-context";
import * as m007 from "./floating-panel-disable-drag";
import * as m008 from "./floating-panel-disable-resize";
import * as m009 from "./floating-panel-resize-axes";
import * as m010 from "./floating-panel-min-max";
import * as m011 from "./floating-panel-anchor-position";
import * as m012 from "./floating-panel-boundary";
import * as m013 from "./floating-panel-controlled-position";
import * as m014 from "./floating-panel-controlled-size";
import * as m015 from "./floating-panel-prevent-overflow";
import * as m016 from "./floating-panel-rtl";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "floating-panel-basic": m000.FloatingPanelBasic,
  "floating-panel-controlled-open": m001.FloatingPanelControlledOpen,
  "floating-panel-with-store": m002.FloatingPanelWithStore,
  "floating-panel-stages": m003.FloatingPanelStages,
  "floating-panel-multiple": m004.FloatingPanelMultiple,
  "floating-panel-with-overlay": m005.FloatingPanelWithOverlay,
  "floating-panel-context": m006.FloatingPanelContext,
  "floating-panel-disable-drag": m007.FloatingPanelDisableDrag,
  "floating-panel-disable-resize": m008.FloatingPanelDisableResize,
  "floating-panel-resize-axes": m009.FloatingPanelResizeAxes,
  "floating-panel-min-max": m010.FloatingPanelMinMax,
  "floating-panel-anchor-position": m011.FloatingPanelAnchorPosition,
  "floating-panel-boundary": m012.FloatingPanelBoundary,
  "floating-panel-controlled-position": m013.FloatingPanelControlledPosition,
  "floating-panel-controlled-size": m014.FloatingPanelControlledSize,
  "floating-panel-prevent-overflow": m015.FloatingPanelPreventOverflow,
  "floating-panel-rtl": m016.FloatingPanelRtl,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
