import * as m000 from "./container-basic";
import * as m001 from "./container-with-sizes";
import * as m002 from "./container-with-fluid";

export const DEMOS = {
  "container-basic": m000.ContainerBasic,
  "container-with-sizes": m001.ContainerWithSizes,
  "container-with-fluid": m002.ContainerWithFluid,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
