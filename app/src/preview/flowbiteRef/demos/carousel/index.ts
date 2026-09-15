/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./carousel.root";
import * as m001 from "./carousel.slide";
import * as m002 from "./carousel.slideInterval";
import * as m003 from "./carousel.controls";
import * as m004 from "./carousel.indicators";
import * as m005 from "./carousel.pauseOnHover";
import * as m006 from "./carousel.sliderContent";
import * as m007 from "./carousel.events";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
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

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
