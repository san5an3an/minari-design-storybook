/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Input/Input.demo.usage";
import * as m001 from "../_src/demos/core/Input/Input.demo.sections";
import * as m002 from "../_src/demos/core/Input/Input.demo.component";
import * as m003 from "../_src/demos/core/Input/Input.demo.mask";
import * as m004 from "../_src/demos/core/Input/Input.demo.wrapper";
import * as m005 from "../_src/demos/core/Input/Input.demo.inputWrapperOrder";
import * as m006 from "../_src/demos/core/Input/Input.demo.inputContainer";
import * as m007 from "../_src/demos/core/Input/Input.demo.error";
import * as m008 from "../_src/demos/core/Input/Input.demo.compound";
import * as m009 from "../_src/demos/core/Input/Input.demo.placeholder";
import * as m010 from "../_src/demos/core/Input/Input.demo.clearButton";
import * as m011 from "../_src/demos/core/Input/Input.demo.defaultProps";
import * as m012 from "../_src/demos/core/Input/Input.demo.sharedStyles";
import * as m013 from "../_src/demos/core/Input/Input.demo.focusStyles";
import * as m014 from "../_src/demos/core/Input/Input.demo.inputBase";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "sections": m001.sections,
  "component": m002.component,
  "mask": m003.mask,
  "wrapper": m004.wrapper,
  "inputWrapperOrder": m005.inputWrapperOrder,
  "inputContainer": m006.inputContainer,
  "error": m007.error,
  "compound": m008.compound,
  "placeholder": m009.placeholder,
  "clearButton": m010.clearButton,
  "defaultProps": m011.defaultProps,
  "sharedStyles": m012.sharedStyles,
  "focusStyles": m013.focusStyles,
  "inputBase": m014.inputBase,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
  "wrapperStylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
