import * as m000 from "./alert.root";
import * as m001 from "./alert.withIcon";
import * as m002 from "./alert.dismissible";
import * as m003 from "./alert.rounded";
import * as m004 from "./alert.borderAccent";
import * as m005 from "./alert.additionalContent";
import * as m006 from "./alert.allOptions";

export const DEMOS: Record<string, { component: unknown }> = {
  "alert.root": m000.root,
  "alert.withIcon": m001.withIcon,
  "alert.dismissible": m002.dismissible,
  "alert.rounded": m003.rounded,
  "alert.borderAccent": m004.borderAccent,
  "alert.additionalContent": m005.additionalContent,
  "alert.allOptions": m006.allOptions,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
