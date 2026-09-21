import * as m000 from "./CollapseBasicExample";
import * as m001 from "./CollapseMountedExample";
import * as m002 from "./CollapsePlaygroundExample";

export const DEMOS = {
  "CollapseBasicExample": m000.default,
  "CollapseMountedExample": m001.default,
  "CollapsePlaygroundExample": m002.CollapsePlaygroundExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
