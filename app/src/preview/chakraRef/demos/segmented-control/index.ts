/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./segmented-control-basic";
import * as m001 from "./segmented-control-with-sizes";
import * as m002 from "./segmented-control-controlled";
import * as m004 from "./segmented-control-vertical";
import * as m005 from "./segmented-control-with-disabled";
import * as m006 from "./segmented-control-with-disabled-item";
import * as m007 from "./segmented-control-with-custom-indicator";
import * as m008 from "./segmented-control-with-color-palette";
import * as m009 from "./segmented-control-with-icon";
import * as m010 from "./segmented-control-in-card";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "segmented-control-basic": m000.SegmentedControlBasic,
  "segmented-control-with-sizes": m001.SegmentedControlWithSizes,
  "segmented-control-controlled": m002.SegmentedControlControlled,
  "segmented-control-vertical": m004.SegmentedControlVertical,
  "segmented-control-with-disabled": m005.SegmentedControlWithDisabled,
  "segmented-control-with-disabled-item": m006.SegmentedControlWithDisabledItem,
  "segmented-control-with-custom-indicator": m007.SegmentedControlWithCustomIndicator,
  "segmented-control-with-color-palette": m008.SegmentedControlWithColorPalette,
  "segmented-control-with-icon": m009.SegmentedControlWithIcon,
  "segmented-control-in-card": m010.SegmentedControlInCard,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "segmented-control-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
};
