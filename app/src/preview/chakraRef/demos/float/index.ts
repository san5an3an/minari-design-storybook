import * as m000 from "./float-basic";
import * as m001 from "./float-with-placements";
import * as m002 from "./float-with-offset-x";
import * as m003 from "./float-with-offset-y";
import * as m004 from "./float-with-offset";
import * as m005 from "./float-with-avatar";

export const DEMOS = {
  "float-basic": m000.FloatBasic,
  "float-with-placements": m001.FloatWithPlacements,
  "float-with-offset-x": m002.FloatWithOffsetX,
  "float-with-offset-y": m003.FloatWithOffsetY,
  "float-with-offset": m004.FloatWithOffset,
  "float-with-avatar": m005.FloatWithAvatar,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
