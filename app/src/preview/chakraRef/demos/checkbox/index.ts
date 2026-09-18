/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./checkbox-basic";
import * as m001 from "./checkbox-with-variants";
import * as m002 from "./checkbox-with-colors";
import * as m003 from "./checkbox-with-sizes";
import * as m004 from "./checkbox-with-states";
import * as m005 from "./checkbox-controlled";
import * as m006 from "./checkbox-with-label-position";
import * as m007 from "./checkbox-with-store";
import * as m008 from "./checkbox-with-form";
import * as m010 from "./checkbox-with-group";
import * as m012 from "./checkbox-with-custom-icon";
import * as m013 from "./checkbox-indeterminate";
import * as m014 from "./checkbox-with-description";
import * as m015 from "./checkbox-with-link";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "checkbox-basic": m000.CheckboxBasic,
  "checkbox-with-variants": m001.CheckboxWithVariants,
  "checkbox-with-colors": m002.CheckboxWithColors,
  "checkbox-with-sizes": m003.CheckboxWithSizes,
  "checkbox-with-states": m004.CheckboxWithStates,
  "checkbox-controlled": m005.CheckboxControlled,
  "checkbox-with-label-position": m006.CheckboxWithLabelPosition,
  "checkbox-with-store": m007.CheckboxWithStore,
  "checkbox-with-form": m008.CheckboxWithForm,
  "checkbox-with-group": m010.CheckboxWithGroup,
  "checkbox-with-custom-icon": m012.CheckboxWithCustomIcon,
  "checkbox-indeterminate": m013.CheckboxIndeterminate,
  "checkbox-with-description": m014.CheckboxWithDescription,
  "checkbox-with-link": m015.CheckboxWithLink,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "checkbox-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
  "checkbox-with-group-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
};
