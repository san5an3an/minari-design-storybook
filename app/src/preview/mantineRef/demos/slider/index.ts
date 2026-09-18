/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./configurator";
import * as m001 from "./rangeConfigurator";
import * as m002 from "./disabled";
import * as m003 from "./changeEnd";
import * as m004 from "./label";
import * as m005 from "./step";
import * as m006 from "./decimal";
import * as m007 from "./decimalRange";
import * as m008 from "./marks";
import * as m009 from "./restrictToMarks";
import * as m010 from "./thumbSize";
import * as m011 from "./scale";
import * as m012 from "./inverted";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "rangeConfigurator": m001.rangeConfigurator,
  "disabled": m002.disabled,
  "changeEnd": m003.changeEnd,
  "label": m004.label,
  "step": m005.step,
  "decimal": m006.decimal,
  "decimalRange": m007.decimalRange,
  "marks": m008.marks,
  "restrictToMarks": m009.restrictToMarks,
  "thumbSize": m010.thumbSize,
  "scale": m011.scale,
  "inverted": m012.inverted,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "thumbChildren": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
  "customize": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Slider.demo.customize.module.css"},
  "customSlider": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Slider.demo.customSlider.module.css"},
};
