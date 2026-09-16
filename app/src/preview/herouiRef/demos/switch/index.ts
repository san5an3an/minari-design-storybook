import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./disabled";
import * as m003 from "./without-label";
import * as m004 from "./with-description";
import * as m005 from "./default-selected";
import * as m006 from "./controlled";
import * as m007 from "./label-position";
import * as m008 from "./group";
import * as m009 from "./group-horizontal";
import * as m010 from "./form";
import * as m011 from "./render-props";
import * as m012 from "./render-function";
import * as m013 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "sizes": m001.Sizes,
  "disabled": m002.Disabled,
  "without-label": m003.WithoutLabel,
  "with-description": m004.WithDescription,
  "default-selected": m005.DefaultSelected,
  "controlled": m006.Controlled,
  "label-position": m007.LabelPosition,
  "group": m008.Group,
  "group-horizontal": m009.GroupHorizontal,
  "form": m010.Form,
  "render-props": m011.RenderProps,
  "render-function": m012.RenderFunction,
  "custom-styles": m013.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-icons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
