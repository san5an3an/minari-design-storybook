import * as m000 from "./link-overlay-basic";
import * as m001 from "./link-overlay-article";

export const DEMOS = {
  "link-overlay-basic": m000.LinkOverlayBasic,
  "link-overlay-article": m001.LinkOverlayArticle,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
