import * as m000 from "./basic";
import * as m001 from "./with-dots";
import * as m002 from "./space-and-channels";
import * as m003 from "./disabled";
import * as m004 from "./controlled";
import * as m005 from "./render-function";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "basic": m000.ColorAreaBasic,
  "with-dots": m001.ColorAreaWithDots,
  "space-and-channels": m002.ColorAreaSpaceAndChannels,
  "disabled": m003.ColorAreaDisabled,
  "controlled": m004.ColorAreaControlled,
  "render-function": m005.RenderFunction,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
