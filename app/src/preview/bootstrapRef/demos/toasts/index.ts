import m000 from "./Basic";
import m001 from "./Dismissible";
import m002 from "./Stacking";
import m003 from "./Placement";
import m004 from "./PlacementMulti";
import m005 from "./Autohide";
import m006 from "./Contextual";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Dismissible": m001,
  "Stacking": m002,
  "Placement": m003,
  "PlacementMulti": m004,
  "Autohide": m005,
  "Contextual": m006,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
