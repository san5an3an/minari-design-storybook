import * as m000 from "./aspect-ratio-basic";
import * as m001 from "./aspect-ratio-with-image";
import * as m002 from "./aspect-ratio-with-video";
import * as m003 from "./aspect-ratio-with-map";
import * as m004 from "./aspect-ratio-responsive";

export const DEMOS = {
  "aspect-ratio-basic": m000.AspectRatioBasic,
  "aspect-ratio-with-image": m001.AspectRatioWithImage,
  "aspect-ratio-with-video": m002.AspectRatioWithVideo,
  "aspect-ratio-with-map": m003.AspectRatioWithMap,
  "aspect-ratio-responsive": m004.AspectRatioResponsive,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
