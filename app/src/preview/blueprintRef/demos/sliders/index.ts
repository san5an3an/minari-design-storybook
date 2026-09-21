import * as m000 from "./SliderExample";
import * as m001 from "./RangeSliderExample";
import * as m002 from "./MultiSliderExample";

export const DEMOS = {
  "SliderExample": m000.SliderExample,
  "RangeSliderExample": m001.RangeSliderExample,
  "MultiSliderExample": m002.MultiSliderExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
