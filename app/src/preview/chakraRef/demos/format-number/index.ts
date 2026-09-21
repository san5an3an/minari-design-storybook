/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./format-number-basic";
import * as m001 from "./format-number-with-percentage";
import * as m002 from "./format-number-with-currency";
import * as m003 from "./format-number-with-locale";
import * as m004 from "./format-number-with-unit";
import * as m005 from "./format-number-with-compact";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "format-number-basic": m000.FormatNumberBasic,
  "format-number-with-percentage": m001.FormatNumberWithPercentage,
  "format-number-with-currency": m002.FormatNumberWithCurrency,
  "format-number-with-locale": m003.FormatNumberWithLocale,
  "format-number-with-unit": m004.FormatNumberWithUnit,
  "format-number-with-compact": m005.FormatNumberWithCompact,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
