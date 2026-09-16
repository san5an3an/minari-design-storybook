import m000 from "./Collapse";
import m001 from "./CollapseHorizontal";
import m002 from "./Fade";

export const DEMOS: Record<string, unknown> = {
  "Collapse": m000,
  "CollapseHorizontal": m001,
  "Fade": m002,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
