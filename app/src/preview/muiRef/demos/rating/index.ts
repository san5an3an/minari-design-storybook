import type { DemoSet } from "../types";
import D0 from "./00-basic-rating";
import D1 from "./01-half-rating";
import D2 from "./02-hover-rating";
import D3 from "./03-rating-size";
import D4 from "./04-customized-rating";
import D5 from "./05-radio-group-rating";
import D6 from "./06-text-rating";

export const DEMOS: DemoSet = {
  "BasicRating": D0,
  "HalfRating": D1,
  "HoverRating": D2,
  "RatingSize": D3,
  "CustomizedRating": D4,
  "RadioGroupRating": D5,
  "TextRating": D6,
};

export const SKIPPED: Record<string, string> = {
};
