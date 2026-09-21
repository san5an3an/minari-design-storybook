/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./stat-basic";
import * as m001 from "./stat-with-format-options";
import * as m002 from "./stat-with-indicator";
import * as m003 from "./stat-with-info-tip";
import * as m004 from "./stat-with-value-unit";
import * as m005 from "./stat-with-progress-bar";
import * as m006 from "./stat-with-icon";
import * as m007 from "./stat-with-trend";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "stat-basic": m000.StatBasic,
  "stat-with-format-options": m001.StatWithFormatOptions,
  "stat-with-indicator": m002.StatWithIndicator,
  "stat-with-info-tip": m003.StatWithInfoTip,
  "stat-with-value-unit": m004.StatWithValueUnit,
  "stat-with-progress-bar": m005.StatWithProgressBar,
  "stat-with-icon": m006.StatWithIcon,
  "stat-with-trend": m007.StatWithTrend,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
