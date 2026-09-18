import * as m000 from "./format-byte-basic";
import * as m001 from "./format-byte-sizes";
import * as m002 from "./format-byte-with-unit";
import * as m003 from "./format-byte-with-locale";
import * as m004 from "./format-byte-with-unit-display";

export const DEMOS = {
  "format-byte-basic": m000.FormatByteBasic,
  "format-byte-sizes": m001.FormatByteSizes,
  "format-byte-with-unit": m002.FormatByteWithUnit,
  "format-byte-with-locale": m003.FormatByteWithLocale,
  "format-byte-with-unit-display": m004.FormatByteWithUnitDisplay,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
