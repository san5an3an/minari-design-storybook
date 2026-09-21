import * as m000 from "./banner.root";
import * as m001 from "./banner.bottomPosition";
import * as m002 from "./banner.marketingCTA";
import * as m003 from "./banner.newsletter";
import * as m004 from "./banner.informational";

export const DEMOS: Record<string, { component: unknown }> = {
  "banner.root": m000.root,
  "banner.bottomPosition": m001.bottomPosition,
  "banner.marketingCTA": m002.marketingCTA,
  "banner.newsletter": m003.newsletter,
  "banner.informational": m004.informational,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
