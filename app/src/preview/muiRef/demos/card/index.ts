import type { DemoSet } from "../types";
import D0 from "./00-basic-card";
import D1 from "./01-outlined-card";
import D2 from "./02-recipe-review-card";
import D3 from "./03-media-card";
import D4 from "./04-img-media-card";
import D5 from "./05-action-area-card";
import D6 from "./06-multi-action-area-card";
import D7 from "./07-media-control-card";
import D8 from "./08-select-action-card";

export const DEMOS: DemoSet = {
  "BasicCard": D0,
  "OutlinedCard": D1,
  "RecipeReviewCard": D2,
  "MediaCard": D3,
  "ImgMediaCard": D4,
  "ActionAreaCard": D5,
  "MultiActionAreaCard": D6,
  "MediaControlCard": D7,
  "SelectActionCard": D8,
};

export const SKIPPED: Record<string, string> = {
};
