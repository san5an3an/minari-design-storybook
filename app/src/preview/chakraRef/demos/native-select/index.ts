import * as m000 from "./native-select-basic";
import * as m001 from "./native-select-with-sizes";
import * as m002 from "./native-select-with-variants";
import * as m003 from "./native-select-controlled";
import * as m004 from "./native-select-with-disabled";
import * as m005 from "./native-select-with-invalid";
import * as m006 from "./native-select-with-invalid-root";

export const DEMOS = {
  "native-select-basic": m000.NativeSelectBasic,
  "native-select-with-sizes": m001.NativeSelectWithSizes,
  "native-select-with-variants": m002.NativeSelectWithVariants,
  "native-select-controlled": m003.NativeSelectControlled,
  "native-select-with-disabled": m004.NativeSelectWithDisabled,
  "native-select-with-invalid": m005.NativeSelectWithInvalid,
  "native-select-with-invalid-root": m006.NativeSelectWithInvalidRoot,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "native-select-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
};
