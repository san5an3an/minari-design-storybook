import * as m000 from "./field-basic";
import * as m001 from "./field-with-error-text";
import * as m002 from "./field-with-error-icon";
import * as m003 from "./field-with-helper-text";
import * as m004 from "./field-horizontal";
import * as m005 from "./field-with-disabled";
import * as m006 from "./field-with-textarea";
import * as m007 from "./field-with-native-select";
import * as m008 from "./field-with-required";
import * as m009 from "./field-with-optional";

export const DEMOS = {
  "field-basic": m000.FieldBasic,
  "field-with-error-text": m001.FieldWithErrorText,
  "field-with-error-icon": m002.FieldWithErrorIcon,
  "field-with-helper-text": m003.FieldWithHelperText,
  "field-horizontal": m004.FieldHorizontal,
  "field-with-disabled": m005.FieldWithDisabled,
  "field-with-textarea": m006.FieldWithTextarea,
  "field-with-native-select": m007.FieldWithNativeSelect,
  "field-with-required": m008.FieldWithRequired,
  "field-with-optional": m009.FieldWithOptional,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
