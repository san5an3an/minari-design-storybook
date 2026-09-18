/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./marquee-auto-fill";
import * as m001 from "./marquee-reverse-direction";
import * as m002 from "./marquee-vertical-animation";
import * as m003 from "./marquee-with-speed";
import * as m004 from "./marquee-pause-interactions";
import * as m005 from "./marquee-with-store";
import * as m006 from "./marquee-finite-loop";
import * as m007 from "./marquee-edge-gradient";
import * as m008 from "./marquee-multiple";
import * as m009 from "./marquee-diagonal";
import * as m010 from "./marquee-news-ticker";
import * as m011 from "./marquee-image-gallery";
import * as m012 from "./marquee-with-testimonials";
import * as m013 from "./marquee-rtl";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "marquee-auto-fill": m000.MarqueeAutoFill,
  "marquee-reverse-direction": m001.MarqueeReverseDirection,
  "marquee-vertical-animation": m002.MarqueeVerticalAnimation,
  "marquee-with-speed": m003.MarqueeWithSpeed,
  "marquee-pause-interactions": m004.MarqueePauseInteractions,
  "marquee-with-store": m005.MarqueeWithStore,
  "marquee-finite-loop": m006.MarqueeFiniteLoop,
  "marquee-edge-gradient": m007.MarqueeEdgeGradient,
  "marquee-multiple": m008.MarqueeMultiple,
  "marquee-diagonal": m009.MarqueeDiagonal,
  "marquee-news-ticker": m010.MarqueeNewsTicker,
  "marquee-image-gallery": m011.MarqueeImageGallery,
  "marquee-with-testimonials": m012.MarqueeWithTestimonials,
  "marquee-rtl": m013.MarqueeRtl,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
