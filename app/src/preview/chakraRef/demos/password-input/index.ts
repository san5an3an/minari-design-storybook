import * as m000 from "./password-input-basic";
import * as m001 from "./password-input-with-sizes";
import * as m002 from "./password-input-controlled";
import * as m003 from "./password-input-with-hook-form";
import * as m004 from "./password-input-controlled-visibility";
import * as m005 from "./password-input-with-strength-indicator";

export const DEMOS = {
  "password-input-basic": m000.PasswordInputBasic,
  "password-input-with-sizes": m001.PasswordInputWithSizes,
  "password-input-controlled": m002.PasswordInputControlled,
  "password-input-with-hook-form": m003.PasswordInputWithHookForm,
  "password-input-controlled-visibility": m004.PasswordInputControlledVisibility,
  "password-input-with-strength-indicator": m005.PasswordInputWithStrengthIndicator,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
