import * as m000 from "../_src/demos/core/Stepper/Stepper.demo.usage";
import * as m001 from "../_src/demos/core/Stepper/Stepper.demo.allowStepSelect";
import * as m002 from "../_src/demos/core/Stepper/Stepper.demo.allowNextStepsSelect";
import * as m003 from "../_src/demos/core/Stepper/Stepper.demo.configurator";
import * as m004 from "../_src/demos/core/Stepper/Stepper.demo.iconSizeConfigurator";
import * as m005 from "../_src/demos/core/Stepper/Stepper.demo.icons";
import * as m006 from "../_src/demos/core/Stepper/Stepper.demo.iconsOnly";
import * as m007 from "../_src/demos/core/Stepper/Stepper.demo.stepColor";
import * as m008 from "../_src/demos/core/Stepper/Stepper.demo.orientation";
import * as m009 from "../_src/demos/core/Stepper/Stepper.demo.iconPosition";
import * as m010 from "../_src/demos/core/Stepper/Stepper.demo.loading";
import * as m011 from "../_src/demos/core/Stepper/Stepper.demo.stylesApi";
import * as m012 from "../_src/demos/core/Stepper/Stepper.demo.stylesApi2";
import * as m013 from "../_src/demos/core/Stepper/Stepper.demo.stylesApi3";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "allowStepSelect": m001.allowStepSelect,
  "allowNextStepsSelect": m002.allowNextStepsSelect,
  "configurator": m003.configurator,
  "iconSizeConfigurator": m004.iconSizeConfigurator,
  "icons": m005.icons,
  "iconsOnly": m006.iconsOnly,
  "stepColor": m007.stepColor,
  "orientation": m008.orientation,
  "iconPosition": m009.iconPosition,
  "loading": m010.loading,
  "stylesApi": m011.stylesApi,
  "stylesApi2": m012.stylesApi2,
  "stylesApi3": m013.stylesApi3,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
