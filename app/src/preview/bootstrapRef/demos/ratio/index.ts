import m000 from "./Example";
import m001 from "./Default";
import m002 from "./Custom";

export const DEMOS: Record<string, unknown> = {
  "Example": m000,
  "Default": m001,
  "Custom": m002,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
