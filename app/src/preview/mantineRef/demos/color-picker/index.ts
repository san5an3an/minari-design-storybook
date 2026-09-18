/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./formatsConfigurator";
import * as m002 from "./swatches";
import * as m003 from "./swatchesConfigurator";
import * as m004 from "./swatchesOnly";
import * as m005 from "./sizeConfigurator";
import * as m006 from "./fullWidth";
import * as m007 from "./hueSlider";
import * as m008 from "./alphaSlider";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatsConfigurator": m001.formatsConfigurator,
  "swatches": m002.swatches,
  "swatchesConfigurator": m003.swatchesConfigurator,
  "swatchesOnly": m004.swatchesOnly,
  "sizeConfigurator": m005.sizeConfigurator,
  "fullWidth": m006.fullWidth,
  "hueSlider": m007.hueSlider,
  "alphaSlider": m008.alphaSlider,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
