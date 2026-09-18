import * as m000 from "./status-basic";
import * as m001 from "./status-with-label";
import * as m002 from "./status-with-sizes";

export const DEMOS = {
  "status-basic": m000.StatusBasic,
  "status-with-label": m001.StatusWithLabel,
  "status-with-sizes": m002.StatusWithSizes,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
