import * as m000 from "./skip-nav-basic";
import * as m001 from "./skip-nav-custom-id";
import * as m002 from "./skip-nav-with-content";

export const DEMOS = {
  "skip-nav-basic": m000.SkipNavBasic,
  "skip-nav-custom-id": m001.SkipNavCustomId,
  "skip-nav-with-content": m002.SkipNavWithContent,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
