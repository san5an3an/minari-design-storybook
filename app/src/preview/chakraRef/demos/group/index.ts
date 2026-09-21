import * as m000 from "./group-basic";
import * as m001 from "./group-with-button";
import * as m002 from "./group-with-attached";
import * as m003 from "./group-with-grow";

export const DEMOS = {
  "group-basic": m000.GroupBasic,
  "group-with-button": m001.GroupWithButton,
  "group-with-attached": m002.GroupWithAttached,
  "group-with-grow": m003.GroupWithGrow,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
