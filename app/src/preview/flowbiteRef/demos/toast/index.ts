import * as m000 from "./toast.root";
import * as m001 from "./toast.colors";
import * as m002 from "./toast.feedback";
import * as m003 from "./toast.withButton";
import * as m004 from "./toast.interactive";
import * as m005 from "./toast.customDismissal";

export const DEMOS: Record<string, { component: unknown }> = {
  "toast.root": m000.root,
  "toast.colors": m001.colors,
  "toast.feedback": m002.feedback,
  "toast.withButton": m003.withButton,
  "toast.interactive": m004.interactive,
  "toast.customDismissal": m005.customDismissal,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
