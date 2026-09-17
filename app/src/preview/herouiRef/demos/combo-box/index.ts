import * as m000 from "./default";
import * as m001 from "./full-width";
import * as m002 from "./with-description";
import * as m003 from "./required";
import * as m004 from "./disabled";
import * as m005 from "./with-disabled-options";
import * as m006 from "./with-sections";
import * as m007 from "./controlled";
import * as m008 from "./controlled-input-value";
import * as m009 from "./asynchronous-loading";
import * as m010 from "./default-selected-key";
import * as m011 from "./allows-custom-value";
import * as m012 from "./custom-indicator";
import * as m013 from "./custom-value";
import * as m014 from "./custom-filtering";
import * as m015 from "./render-function";
import * as m016 from "./menu-trigger";
import * as m017 from "./multiple-selection";
import * as m018 from "./on-surface";
import * as m019 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "full-width": m001.FullWidth,
  "with-description": m002.WithDescription,
  "required": m003.Required,
  "disabled": m004.Disabled,
  "with-disabled-options": m005.WithDisabledOptions,
  "with-sections": m006.WithSections,
  "controlled": m007.Controlled,
  "controlled-input-value": m008.ControlledInputValue,
  "asynchronous-loading": m009.AsynchronousLoading,
  "default-selected-key": m010.DefaultSelectedKey,
  "allows-custom-value": m011.AllowsCustomValue,
  "custom-indicator": m012.CustomIndicator,
  "custom-value": m013.CustomValue,
  "custom-filtering": m014.CustomFiltering,
  "render-function": m015.RenderFunction,
  "menu-trigger": m016.MenuTrigger,
  "multiple-selection": m017.MultipleSelection,
  "on-surface": m018.OnSurface,
  "custom-styles": m019.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
