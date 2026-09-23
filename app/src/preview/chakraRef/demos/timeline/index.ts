import * as m000 from "./timeline-basic";
import * as m001 from "./timeline-with-sizes";
import * as m002 from "./timeline-with-variants";
import * as m003 from "./timeline-with-content-before";
import * as m004 from "./timeline-alternating";
import * as m005 from "./timeline-composition";

export const DEMOS = {
  "timeline-basic": m000.TimelineBasic,
  "timeline-with-sizes": m001.TimelineWithSizes,
  "timeline-with-variants": m002.TimelineWithVariants,
  "timeline-with-content-before": m003.TimelineWithContentBefore,
  "timeline-alternating": m004.TimelineAlternating,
  "timeline-composition": m005.TimelineComposition,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
