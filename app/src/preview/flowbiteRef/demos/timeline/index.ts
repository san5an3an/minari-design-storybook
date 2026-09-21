import * as m000 from "./timeline.root";
import * as m001 from "./timeline.vertical";
import * as m002 from "./timeline.horizontal";

export const DEMOS: Record<string, { component: unknown }> = {
  "timeline.root": m000.root,
  "timeline.vertical": m001.vertical,
  "timeline.horizontal": m002.horizontal,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
