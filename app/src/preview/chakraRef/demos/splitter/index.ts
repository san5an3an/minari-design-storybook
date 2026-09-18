/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./splitter-basic";
import * as m001 from "./splitter-controlled";
import * as m002 from "./splitter-with-store";
import * as m003 from "./splitter-vertical";
import * as m004 from "./splitter-responsive-orientation";
import * as m005 from "./splitter-multiple-panels";
import * as m006 from "./splitter-collapsible";
import * as m007 from "./splitter-min-max-constraints";
import * as m008 from "./splitter-css-units";
import * as m009 from "./splitter-resize-behavior";
import * as m010 from "./splitter-nested";
import * as m012 from "./splitter-disabled";
import * as m013 from "./splitter-separator-only";
import * as m014 from "./splitter-reset-on-double-click";
import * as m015 from "./splitter-resize-events";
import * as m016 from "./splitter-keyboard-resize";
import * as m017 from "./splitter-conditional-rendering";
import * as m018 from "./splitter-dynamic-panel";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "splitter-basic": m000.SplitterBasic,
  "splitter-controlled": m001.SplitterControlled,
  "splitter-with-store": m002.SplitterWithStore,
  "splitter-vertical": m003.SplitterVertical,
  "splitter-responsive-orientation": m004.SplitterResponsiveOrientation,
  "splitter-multiple-panels": m005.SplitterMultiplePanels,
  "splitter-collapsible": m006.SplitterCollapsible,
  "splitter-min-max-constraints": m007.SplitterMinMaxConstraints,
  "splitter-css-units": m008.SplitterCssUnits,
  "splitter-resize-behavior": m009.SplitterResizeBehavior,
  "splitter-nested": m010.SplitterNested,
  "splitter-disabled": m012.SplitterDisabled,
  "splitter-separator-only": m013.SplitterSeparatorOnly,
  "splitter-reset-on-double-click": m014.SplitterResetOnDoubleClick,
  "splitter-resize-events": m015.SplitterResizeEvents,
  "splitter-keyboard-resize": m016.SplitterKeyboardResize,
  "splitter-conditional-rendering": m017.SplitterConditionalRendering,
  "splitter-dynamic-panel": m018.SplitterDynamicPanel,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "splitter-with-storage": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-use"},
  "splitter-ide-layout": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: shiki"},
};
