import * as m000 from "./clipboard.root";
import * as m001 from "./clipboard.withIcon";
import * as m002 from "./clipboard.withIconText";

export const DEMOS: Record<string, { component: unknown }> = {
  "clipboard.root": m000.root,
  "clipboard.withIcon": m001.withIcon,
  "clipboard.withIconText": m002.withIconText,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
