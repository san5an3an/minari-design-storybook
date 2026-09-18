import * as m000 from "./usage";
import * as m001 from "./rounded";
import * as m002 from "./fullWidth";
import * as m003 from "./variantColorsResolver";
import * as m004 from "./autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "rounded": m001.rounded,
  "fullWidth": m002.fullWidth,
  "variantColorsResolver": m003.variantColorsResolver,
  "autoContrast": m004.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "gradient": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
