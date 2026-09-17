import * as m000 from "./CompoundTagBasicExample";
import * as m001 from "./CompoundTagIntentExample";
import * as m002 from "./CompoundTagMinimalExample";
import * as m003 from "./CompoundTagSizeExample";
import * as m004 from "./CompoundTagFillExample";
import * as m005 from "./CompoundTagRoundExample";
import * as m006 from "./CompoundTagIconExample";
import * as m007 from "./CompoundTagRemovableExample";
import * as m008 from "./CompoundTagInteractiveExample";
import * as m009 from "./CompoundTagPlaygroundExample";

export const DEMOS = {
  "CompoundTagBasicExample": m000.default,
  "CompoundTagIntentExample": m001.default,
  "CompoundTagMinimalExample": m002.default,
  "CompoundTagSizeExample": m003.default,
  "CompoundTagFillExample": m004.default,
  "CompoundTagRoundExample": m005.default,
  "CompoundTagIconExample": m006.default,
  "CompoundTagRemovableExample": m007.default,
  "CompoundTagInteractiveExample": m008.default,
  "CompoundTagPlaygroundExample": m009.CompoundTagPlaygroundExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
