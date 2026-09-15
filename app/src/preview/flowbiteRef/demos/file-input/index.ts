import * as m000 from "./fileInput.root";
import * as m001 from "./fileInput.helper";
import * as m002 from "./fileInput.multiple";
import * as m003 from "./fileInput.sizes";
import * as m004 from "./fileInput.dropzone";

export const DEMOS: Record<string, { component: unknown }> = {
  "fileInput.root": m000.root,
  "fileInput.helper": m001.helper,
  "fileInput.multiple": m002.multiple,
  "fileInput.sizes": m003.sizes,
  "fileInput.dropzone": m004.dropzone,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
