import * as m000 from "./CardBasicExample";
import * as m001 from "./CardInteractiveExample";
import * as m002 from "./CardCompactExample";
import * as m003 from "./CardElevationExample";
import * as m004 from "./CardPlaygroundExample";

export const DEMOS = {
  "CardBasicExample": m000.default,
  "CardInteractiveExample": m001.default,
  "CardCompactExample": m002.default,
  "CardElevationExample": m003.default,
  "CardPlaygroundExample": m004.CardPlaygroundExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
