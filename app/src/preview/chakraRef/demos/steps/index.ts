import * as m000 from "./steps-basic";
import * as m001 from "./steps-with-sizes";
import * as m002 from "./steps-with-variants";
import * as m003 from "./steps-with-colors";
import * as m004 from "./steps-with-trigger";
import * as m005 from "./steps-vertical";
import * as m006 from "./steps-controlled";
import * as m007 from "./steps-with-validation";
import * as m008 from "./steps-with-store";
import * as m009 from "./steps-with-icon";
import * as m010 from "./steps-with-description";

export const DEMOS = {
  "steps-basic": m000.StepsBasic,
  "steps-with-sizes": m001.StepsWithSizes,
  "steps-with-variants": m002.StepsWithVariants,
  "steps-with-colors": m003.StepsWithColors,
  "steps-with-trigger": m004.StepsWithTrigger,
  "steps-vertical": m005.StepsVertical,
  "steps-controlled": m006.StepsControlled,
  "steps-with-validation": m007.StepsWithValidation,
  "steps-with-store": m008.StepsWithStore,
  "steps-with-icon": m009.StepsWithIcon,
  "steps-with-description": m010.StepsWithDescription,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
