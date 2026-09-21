/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/ColorInput/ColorInput.demo.usage";
import * as m001 from "../_src/demos/core/ColorInput/ColorInput.demo.formatsConfigurator";
import * as m002 from "../_src/demos/core/ColorInput/ColorInput.demo.fixOnBlur";
import * as m003 from "../_src/demos/core/ColorInput/ColorInput.demo.onChangeEnd";
import * as m004 from "../_src/demos/core/ColorInput/ColorInput.demo.disallowInput";
import * as m005 from "../_src/demos/core/ColorInput/ColorInput.demo.swatches";
import * as m006 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatchesConfigurator";
import * as m007 from "../_src/demos/core/ColorInput/ColorInput.demo.swatchesOnly";
import * as m008 from "../_src/demos/core/ColorInput/ColorInput.demo.closeOnColorSwatchClick";
import * as m009 from "../_src/demos/core/ColorInput/ColorInput.demo.withPicker";
import * as m010 from "../_src/demos/core/ColorInput/ColorInput.demo.noEyeDropper";
import * as m011 from "../_src/demos/core/ColorInput/ColorInput.demo.eyeDropperIcon";
import * as m012 from "../_src/demos/core/ColorInput/ColorInput.demo.sections";
import * as m013 from "../_src/demos/core/ColorInput/ColorInput.demo.error";
import * as m014 from "../_src/demos/core/ColorInput/ColorInput.demo.disabled";
import * as m015 from "../_src/demos/core/ColorInput/ColorInput.demo.readOnly";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatsConfigurator": m001.formatsConfigurator,
  "fixOnBlur": m002.fixOnBlur,
  "onChangeEnd": m003.onChangeEnd,
  "disallowInput": m004.disallowInput,
  "swatches": m005.swatches,
  "swatchesConfigurator": m006.swatchesConfigurator,
  "swatchesOnly": m007.swatchesOnly,
  "closeOnColorSwatchClick": m008.closeOnColorSwatchClick,
  "withPicker": m009.withPicker,
  "noEyeDropper": m010.noEyeDropper,
  "eyeDropperIcon": m011.eyeDropperIcon,
  "sections": m012.sections,
  "error": m013.error,
  "disabled": m014.disabled,
  "readOnly": m015.readOnly,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
