import m000 from "./Basic";
import m001 from "./FormDisabledInputs";
import m002 from "./FormDisabled";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "FormDisabledInputs": m001,
  "FormDisabled": m002,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
