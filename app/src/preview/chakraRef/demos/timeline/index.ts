/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./timeline-basic";
import * as m001 from "./timeline-with-sizes";
import * as m002 from "./timeline-with-variants";
import * as m003 from "./timeline-with-content-before";
import * as m004 from "./timeline-alternating";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "timeline-basic": m000.TimelineBasic,
  "timeline-with-sizes": m001.TimelineWithSizes,
  "timeline-with-variants": m002.TimelineWithVariants,
  "timeline-with-content-before": m003.TimelineWithContentBefore,
  "timeline-alternating": m004.TimelineAlternating,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "timeline-composition": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
};
