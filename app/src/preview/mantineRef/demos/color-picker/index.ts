/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/ColorPicker/ColorPicker.demo.usage";
import * as m001 from "../_src/demos/core/ColorPicker/ColorPicker.demo.formatsConfigurator";
import * as m002 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatches";
import * as m003 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatchesConfigurator";
import * as m004 from "../_src/demos/core/ColorPicker/ColorPicker.demo.swatchesOnly";
import * as m005 from "../_src/demos/core/ColorPicker/ColorPicker.demo.sizeConfigurator";
import * as m006 from "../_src/demos/core/ColorPicker/ColorPicker.demo.fullWidth";
import * as m007 from "../_src/demos/core/ColorPicker/ColorPicker.demo.stylesApi";
import * as m008 from "../_src/demos/core/ColorPicker/ColorPicker.demo.hueSlider";
import * as m009 from "../_src/demos/core/ColorPicker/ColorPicker.demo.alphaSlider";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatsConfigurator": m001.formatsConfigurator,
  "swatches": m002.swatches,
  "swatchesConfigurator": m003.swatchesConfigurator,
  "swatchesOnly": m004.swatchesOnly,
  "sizeConfigurator": m005.sizeConfigurator,
  "fullWidth": m006.fullWidth,
  "stylesApi": m007.stylesApi,
  "hueSlider": m008.hueSlider,
  "alphaSlider": m009.alphaSlider,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
