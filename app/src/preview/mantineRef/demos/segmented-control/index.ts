import * as m000 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.usage";
import * as m001 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.disabled";
import * as m002 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.labels";
import * as m003 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.configurator";
import * as m004 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.transitions";
import * as m005 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.readOnly";
import * as m006 from "../_src/demos/core/SegmentedControl/SegmentedControl.demo.iconsOnly";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "disabled": m001.disabled,
  "labels": m002.labels,
  "configurator": m003.configurator,
  "transitions": m004.transitions,
  "readOnly": m005.readOnly,
  "iconsOnly": m006.iconsOnly,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
