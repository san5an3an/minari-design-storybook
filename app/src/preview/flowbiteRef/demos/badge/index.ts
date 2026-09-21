import * as m000 from "./badge.root";
import * as m001 from "./badge.asLink";
import * as m002 from "./badge.withIcon";
import * as m003 from "./badge.withIconOnly";
import * as m004 from "./badge.sizes";

export const DEMOS: Record<string, { component: unknown }> = {
  "badge.root": m000.root,
  "badge.asLink": m001.asLink,
  "badge.withIcon": m002.withIcon,
  "badge.withIconOnly": m003.withIconOnly,
  "badge.sizes": m004.sizes,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
