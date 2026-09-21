import * as m000 from "./progress-circle-basic";
import * as m001 from "./progress-circle-with-round-cap";
import * as m002 from "./progress-circle-with-sizes";
import * as m003 from "./progress-circle-with-colors";
import * as m004 from "./progress-circle-with-value-text";
import * as m005 from "./progress-circle-with-thickness";
import * as m006 from "./progress-circle-indeterminate";
import * as m007 from "./progress-circle-with-range-color";

export const DEMOS = {
  "progress-circle-basic": m000.ProgressCircleBasic,
  "progress-circle-with-round-cap": m001.ProgressCircleWithRoundCap,
  "progress-circle-with-sizes": m002.ProgressCircleWithSizes,
  "progress-circle-with-colors": m003.ProgressCircleWithColors,
  "progress-circle-with-value-text": m004.ProgressCircleWithValueText,
  "progress-circle-with-thickness": m005.ProgressCircleWithThickness,
  "progress-circle-indeterminate": m006.ProgressCircleIndeterminate,
  "progress-circle-with-range-color": m007.ProgressCircleWithRangeColor,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
