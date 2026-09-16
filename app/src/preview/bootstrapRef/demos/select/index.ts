import m000 from "./SelectBasic";
import m001 from "./SelectSizes";

export const DEMOS: Record<string, unknown> = {
  "SelectBasic": m000,
  "SelectSizes": m001,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
