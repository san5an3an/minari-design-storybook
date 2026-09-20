import * as m000 from "../_src/demos/core/AspectRatio/AspectRatio.demo.image";
import * as m001 from "../_src/demos/core/AspectRatio/AspectRatio.demo.map";
import * as m002 from "../_src/demos/core/AspectRatio/AspectRatio.demo.video";
import * as m003 from "../_src/demos/core/AspectRatio/AspectRatio.demo.flex";

export const DEMOS: Record<string, { component: unknown }> = {
  "image": m000.image,
  "map": m001.map,
  "video": m002.video,
  "flex": m003.flex,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
