import * as m000 from "./rating.root";
import * as m001 from "./rating.withText";
import * as m002 from "./rating.count";
import * as m003 from "./rating.sizing";
import * as m004 from "./rating.advanced";

export const DEMOS: Record<string, { component: unknown }> = {
  "rating.root": m000.root,
  "rating.withText": m001.withText,
  "rating.count": m002.count,
  "rating.sizing": m003.sizing,
  "rating.advanced": m004.advanced,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
