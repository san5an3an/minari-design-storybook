/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-masonry";
import D1 from "./01-image-masonry";
import D2 from "./02-masonry-with-variable-height-items";
import D3 from "./03-fixed-columns";
import D4 from "./04-responsive-columns";
import D5 from "./05-fixed-spacing";
import D6 from "./06-responsive-spacing";
import D7 from "./07-sequential";
import D8 from "./08-ssrmasonry";

export const DEMOS: DemoSet = {
  "BasicMasonry": D0,
  "ImageMasonry": D1,
  "MasonryWithVariableHeightItems": D2,
  "FixedColumns": D3,
  "ResponsiveColumns": D4,
  "FixedSpacing": D5,
  "ResponsiveSpacing": D6,
  "Sequential": D7,
  "SSRMasonry": D8,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
