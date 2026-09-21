import * as m000 from "./heading-basic";
import * as m001 from "./heading-with-sizes";
import * as m002 from "./heading-with-highlight";
import * as m003 from "./heading-with-as-prop";
import * as m004 from "./heading-with-weights";
import * as m005 from "./heading-with-composition";

export const DEMOS = {
  "heading-basic": m000.HeadingBasic,
  "heading-with-sizes": m001.HeadingWithSizes,
  "heading-with-highlight": m002.HeadingWithHighlight,
  "heading-with-as-prop": m003.HeadingWithAsProp,
  "heading-with-weights": m004.HeadingWithWeights,
  "heading-with-composition": m005.HeadingWithComposition,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
