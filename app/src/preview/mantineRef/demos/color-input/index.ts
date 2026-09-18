/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./formatsConfigurator";
import * as m001 from "./fixOnBlur";
import * as m002 from "./onChangeEnd";
import * as m003 from "./disallowInput";
import * as m004 from "./swatches";
import * as m005 from "./swatchesConfigurator";
import * as m006 from "./swatchesOnly";
import * as m007 from "./closeOnColorSwatchClick";
import * as m008 from "./withPicker";
import * as m009 from "./noEyeDropper";
import * as m010 from "./error";
import * as m011 from "./disabled";
import * as m012 from "./readOnly";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "formatsConfigurator": m000.formatsConfigurator,
  "fixOnBlur": m001.fixOnBlur,
  "onChangeEnd": m002.onChangeEnd,
  "disallowInput": m003.disallowInput,
  "swatches": m004.swatches,
  "swatchesConfigurator": m005.swatchesConfigurator,
  "swatchesOnly": m006.swatchesOnly,
  "closeOnColorSwatchClick": m007.closeOnColorSwatchClick,
  "withPicker": m008.withPicker,
  "noEyeDropper": m009.noEyeDropper,
  "error": m010.error,
  "disabled": m011.disabled,
  "readOnly": m012.readOnly,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "eyeDropperIcon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
