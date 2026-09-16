import m000 from "./Shape";
import m001 from "./Fluid";

export const DEMOS: Record<string, unknown> = {
  "Shape": m000,
  "Fluid": m001,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
