import * as m000 from "./carousel.root";
import * as m001 from "./carousel.slide";
import * as m002 from "./carousel.slideInterval";
import * as m003 from "./carousel.controls";
import * as m004 from "./carousel.indicators";
import * as m005 from "./carousel.pauseOnHover";
import * as m006 from "./carousel.sliderContent";
import * as m007 from "./carousel.events";

export const DEMOS: Record<string, { component: unknown }> = {
  "carousel.root": m000.root,
  "carousel.slide": m001.slide,
  "carousel.slideInterval": m002.slideInterval,
  "carousel.controls": m003.controls,
  "carousel.indicators": m004.indicators,
  "carousel.pauseOnHover": m005.pauseOnHover,
  "carousel.sliderContent": m006.sliderContent,
  "carousel.events": m007.events,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
