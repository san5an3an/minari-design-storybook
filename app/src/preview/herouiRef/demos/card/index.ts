import * as m000 from "./default";
import * as m001 from "./variants";
import * as m002 from "./horizontal";
import * as m003 from "./with-avatar";
import * as m004 from "./with-images";
import * as m005 from "./with-form";
import * as m006 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "variants": m001.Variants,
  "horizontal": m002.Horizontal,
  "with-avatar": m003.WithAvatar,
  "with-images": m004.WithImages,
  "with-form": m005.WithForm,
  "custom-styles": m006.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
