/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-standard-image-list";
import D1 from "./01-quilted-image-list";
import D2 from "./02-woven-image-list";
import D3 from "./03-masonry-image-list";
import D4 from "./04-titlebar-image-list";
import D5 from "./05-titlebar-below-image-list";
import D6 from "./06-titlebar-below-masonry-image-list";
import D7 from "./07-custom-image-list";

export const DEMOS: DemoSet = {
  "StandardImageList": D0,
  "QuiltedImageList": D1,
  "WovenImageList": D2,
  "MasonryImageList": D3,
  "TitlebarImageList": D4,
  "TitlebarBelowImageList": D5,
  "TitlebarBelowMasonryImageList": D6,
  "CustomImageList": D7,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
