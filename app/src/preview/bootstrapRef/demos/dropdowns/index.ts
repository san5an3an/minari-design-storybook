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

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "DropDirections": {"code": "other", "codes": ["other"], "detail": "공식 파일이 import 없이 문서 사이트의 ButtonGroup 을 바로 써서 싣지 않았어요."},
  "MenuAlignResponsive": {"code": "other", "codes": ["other"], "detail": "공식 파일이 import 없이 문서 사이트의 ButtonGroup 을 바로 써서 싣지 않았어요."},
  "ButtonCustomMenu": {"code": "other", "codes": ["other"], "detail": "export 없이 `render(<…/>)` 를 부르는 스크립트예요. 공식 문서는 noInline 으로 `render` 를 넣어 실행해서 이 화면에는 싣지 않았어요."},
};
