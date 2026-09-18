/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./fullWidth";
import * as m001 from "./compact";
import * as m002 from "./disabled";
import * as m003 from "./disabledLink";
import * as m004 from "./disabledTooltip";
import * as m005 from "./loading";
import * as m006 from "./loaderProps";
import * as m007 from "./variantColorsResolver";
import * as m008 from "./autoContrast";
import * as m009 from "./group";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "fullWidth": m000.fullWidth,
  "compact": m001.compact,
  "disabled": m002.disabled,
  "disabledLink": m003.disabledLink,
  "disabledTooltip": m004.disabledTooltip,
  "loading": m005.loading,
  "loaderProps": m006.loaderProps,
  "variantColorsResolver": m007.variantColorsResolver,
  "autoContrast": m008.autoContrast,
  "group": m009.group,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "sectionsJustify": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "gradient": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "disabledStyles": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Button.demo.disabledStyles.module.css"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
  "dataAttributes": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Styles.demo.dataAttributes.module.css"},
  "customVariant": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Button.demo.customVariant.module.css"},
  "groupSection": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
