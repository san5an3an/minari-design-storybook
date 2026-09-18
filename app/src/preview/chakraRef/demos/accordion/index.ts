/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./accordion-basic";
import * as m001 from "./accordion-controlled";
import * as m002 from "./accordion-with-icon";
import * as m003 from "./accordion-with-multiple";
import * as m004 from "./accordion-sizes";
import * as m005 from "./accordion-variants";
import * as m006 from "./accordion-with-disabled-item";
import * as m010 from "./accordion-with-expanded-style";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "accordion-basic": m000.AccordionBasic,
  "accordion-controlled": m001.AccordionControlled,
  "accordion-with-icon": m002.AccordionWithIcon,
  "accordion-with-multiple": m003.AccordionWithMultiple,
  "accordion-sizes": m004.AccordionSizes,
  "accordion-variants": m005.AccordionVariants,
  "accordion-with-disabled-item": m006.AccordionWithDisabledItem,
  "accordion-with-expanded-style": m010.AccordionWithExpandedStyle,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "accordion-with-avatar": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "accordion-with-subtext": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "accordion-with-actions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
};
