import * as m000 from "./basic";
import * as m001 from "./disabled";
import * as m002 from "./vertical";
import * as m003 from "./controlled";
import * as m004 from "./channels";
import * as m005 from "./alpha-channel";
import * as m006 from "./rgb-channels";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "disabled": m001.Disabled,
  "vertical": m002.Vertical,
  "controlled": m003.Controlled,
  "channels": m004.Channels,
  "alpha-channel": m005.AlphaChannel,
  "rgb-channels": m006.RGBChannels,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
