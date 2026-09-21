import * as m000 from "./fieldset-basic";
import * as m001 from "./fieldset-with-disabled";
import * as m002 from "./fieldset-with-invalid";

export const DEMOS = {
  "fieldset-basic": m000.FieldsetBasic,
  "fieldset-with-disabled": m001.FieldsetWithDisabled,
  "fieldset-with-invalid": m002.FieldsetWithInvalid,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
