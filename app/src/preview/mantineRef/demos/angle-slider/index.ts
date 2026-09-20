import * as m000 from "../_src/demos/core/AngleSlider/AngleSlider.demo.usage";
import * as m001 from "../_src/demos/core/AngleSlider/AngleSlider.demo.formatLabel";
import * as m002 from "../_src/demos/core/AngleSlider/AngleSlider.demo.marks";
import * as m003 from "../_src/demos/core/AngleSlider/AngleSlider.demo.onChangeEnd";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatLabel": m001.formatLabel,
  "marks": m002.marks,
  "onChangeEnd": m003.onChangeEnd,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
