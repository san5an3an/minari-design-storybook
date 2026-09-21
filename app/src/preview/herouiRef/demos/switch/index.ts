import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./with-icons";
import * as m003 from "./disabled";
import * as m004 from "./without-label";
import * as m005 from "./with-description";
import * as m006 from "./default-selected";
import * as m007 from "./controlled";
import * as m008 from "./label-position";
import * as m009 from "./group";
import * as m010 from "./group-horizontal";
import * as m011 from "./form";
import * as m012 from "./render-props";
import * as m013 from "./render-function";
import * as m014 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "with-icons": m002.WithIcons,
  "disabled": m003.Disabled,
  "without-label": m004.WithoutLabel,
  "with-description": m005.WithDescription,
  "default-selected": m006.DefaultSelected,
  "controlled": m007.Controlled,
  "label-position": m008.LabelPosition,
  "group": m009.Group,
  "group-horizontal": m010.GroupHorizontal,
  "form": m011.Form,
  "render-props": m012.RenderProps,
  "render-function": m013.RenderFunction,
  "custom-styles": m014.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
