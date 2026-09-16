import m000 from "./Basic";
import m001 from "./Button";
import m002 from "./Variations";
import m003 from "./Pill";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Button": m001,
  "Variations": m002,
  "Pill": m003,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
