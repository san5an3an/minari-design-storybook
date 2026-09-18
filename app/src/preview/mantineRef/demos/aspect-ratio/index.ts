import * as m000 from "./image";
import * as m001 from "./map";
import * as m002 from "./video";
import * as m003 from "./flex";

export const DEMOS: Record<string, { component: unknown }> = {
  "image": m000.image,
  "map": m001.map,
  "video": m002.video,
  "flex": m003.flex,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
