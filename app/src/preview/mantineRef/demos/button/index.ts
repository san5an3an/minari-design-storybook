import * as m000 from "../_src/demos/core/Button/Button.demo.configurator";
import * as m001 from "../_src/demos/core/Button/Button.demo.fullWidth";
import * as m002 from "../_src/demos/core/Button/Button.demo.sections";
import * as m003 from "../_src/demos/core/Button/Button.demo.sectionsJustify";
import * as m004 from "../_src/demos/core/Button/Button.demo.compact";
import * as m005 from "../_src/demos/core/Button/Button.demo.gradient";
import * as m006 from "../_src/demos/core/Button/Button.demo.disabled";
import * as m007 from "../_src/demos/core/Button/Button.demo.disabledLink";
import * as m008 from "../_src/demos/core/Button/Button.demo.disabledStyles";
import * as m009 from "../_src/demos/core/Button/Button.demo.disabledTooltip";
import * as m010 from "../_src/demos/core/Button/Button.demo.loading";
import * as m011 from "../_src/demos/core/Button/Button.demo.loaderProps";
import * as m012 from "../_src/demos/styles/Styles.demo.dataAttributes";
import * as m013 from "../_src/demos/core/Button/Button.demo.customVariant";
import * as m014 from "../_src/demos/theming/Theming.demo.variantColorsResolver";
import * as m015 from "../_src/demos/core/Button/Button.demo.autoContrast";
import * as m016 from "../_src/demos/core/Button/Button.demo.group";
import * as m017 from "../_src/demos/core/Button/Button.demo.groupSection";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "fullWidth": m001.fullWidth,
  "sections": m002.sections,
  "sectionsJustify": m003.sectionsJustify,
  "compact": m004.compact,
  "gradient": m005.gradient,
  "disabled": m006.disabled,
  "disabledLink": m007.disabledLink,
  "disabledStyles": m008.disabledStyles,
  "disabledTooltip": m009.disabledTooltip,
  "loading": m010.loading,
  "loaderProps": m011.loaderProps,
  "dataAttributes": m012.dataAttributes,
  "customVariant": m013.customVariant,
  "variantColorsResolver": m014.variantColorsResolver,
  "autoContrast": m015.autoContrast,
  "group": m016.group,
  "groupSection": m017.groupSection,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
