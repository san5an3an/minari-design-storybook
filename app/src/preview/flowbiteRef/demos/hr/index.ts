import * as m000 from "./hr.root";
import * as m001 from "./hr.trimmed";
import * as m002 from "./hr.icon";
import * as m003 from "./hr.text";
import * as m004 from "./hr.square";

export const DEMOS: Record<string, { component: unknown }> = {
  "hr.root": m000.root,
  "hr.trimmed": m001.trimmed,
  "hr.icon": m002.icon,
  "hr.text": m003.text,
  "hr.square": m004.square,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
