import * as m000 from "./clipboard-basic";
import * as m001 from "./clipboard-with-button";
import * as m002 from "./clipboard-with-input";
import * as m003 from "./clipboard-with-timeout";
import * as m004 from "./clipboard-with-link";
import * as m005 from "./clipboard-with-store";

export const DEMOS = {
  "clipboard-basic": m000.ClipboardBasic,
  "clipboard-with-button": m001.ClipboardWithButton,
  "clipboard-with-input": m002.ClipboardWithInput,
  "clipboard-with-timeout": m003.ClipboardWithTimeout,
  "clipboard-with-link": m004.ClipboardWithLink,
  "clipboard-with-store": m005.ClipboardWithStore,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
