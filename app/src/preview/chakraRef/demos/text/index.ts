import * as m000 from "./text-basic";
import * as m001 from "./text-with-sizes";
import * as m002 from "./text-with-weights";
import * as m003 from "./text-with-truncate";
import * as m004 from "./text-with-line-clamp";

export const DEMOS = {
  "text-basic": m000.TextBasic,
  "text-with-sizes": m001.TextWithSizes,
  "text-with-weights": m002.TextWithWeights,
  "text-with-truncate": m003.TextWithTruncate,
  "text-with-line-clamp": m004.TextWithLineClamp,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
