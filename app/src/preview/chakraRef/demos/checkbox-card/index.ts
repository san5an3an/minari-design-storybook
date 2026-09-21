import * as m000 from "./checkbox-card-basic";
import * as m001 from "./checkbox-card-with-description";
import * as m002 from "./checkbox-card-with-group";
import * as m003 from "./checkbox-card-with-sizes";
import * as m004 from "./checkbox-card-with-variants";
import * as m005 from "./checkbox-card-disabled";
import * as m006 from "./checkbox-card-with-addon";
import * as m007 from "./checkbox-card-no-indicator";
import * as m008 from "./checkbox-card-with-icon";

export const DEMOS = {
  "checkbox-card-basic": m000.CheckboxCardBasic,
  "checkbox-card-with-description": m001.CheckboxCardWithDescription,
  "checkbox-card-with-group": m002.CheckboxCardWithGroup,
  "checkbox-card-with-sizes": m003.CheckboxCardWithSizes,
  "checkbox-card-with-variants": m004.CheckboxCardWithVariants,
  "checkbox-card-disabled": m005.CheckboxCardDisabled,
  "checkbox-card-with-addon": m006.CheckboxCardWithAddon,
  "checkbox-card-no-indicator": m007.CheckboxCardNoIndicator,
  "checkbox-card-with-icon": m008.CheckboxCardWithIcon,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
