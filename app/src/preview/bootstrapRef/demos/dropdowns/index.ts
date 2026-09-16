/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Basic";
import m001 from "./BasicButton";
import m002 from "./Variants";
import m003 from "./SplitBasic";
import m004 from "./SplitVariants";
import m005 from "./ButtonSizes";
import m006 from "./ButtonDark";
import m007 from "./NavbarDark";
import m008 from "./DropdownItemTags";
import m009 from "./MenuAlignEnd";
import m010 from "./MenuHeaders";
import m011 from "./MenuDividers";
import m012 from "./AutoClose";
import m013 from "./ButtonCustom";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "BasicButton": m001,
  "Variants": m002,
  "SplitBasic": m003,
  "SplitVariants": m004,
  "ButtonSizes": m005,
  "ButtonDark": m006,
  "NavbarDark": m007,
  "DropdownItemTags": m008,
  "MenuAlignEnd": m009,
  "MenuHeaders": m010,
  "MenuDividers": m011,
  "AutoClose": m012,
  "ButtonCustom": m013,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "DropDirections": {"code": "other", "codes": ["other"], "detail": "⏳ 공식 파일이 import 없이 문서 live 스코프 이름에 기댄다: ButtonGroup"},
  "MenuAlignResponsive": {"code": "other", "codes": ["other"], "detail": "⏳ 공식 파일이 import 없이 문서 live 스코프 이름에 기댄다: ButtonGroup"},
  "ButtonCustomMenu": {"code": "other", "codes": ["other"], "detail": "⏳ export 없는 `render(<…/>)` 스크립트 — 공식 문서는 noInline 으로 `render` 를 주입해 세운다(계약에 주입 자리 없음 · 판 7 거리)"},
};
