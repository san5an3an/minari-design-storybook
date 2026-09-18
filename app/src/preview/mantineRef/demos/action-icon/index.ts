/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./inputSize";
import * as m001 from "./loaderProps";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "inputSize": m000.inputSize,
  "loaderProps": m001.loaderProps,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "gradient": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "size": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "disabled": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "disabledLink": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "disabledStyles": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./ActionIcon.demo.disabledStyles.module.css"},
  "disabledTooltip": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "loading": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "customVariant": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./ActionIcon.demo.customVariant.module.css"},
  "variantColorsResolver": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "autoContrast": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "customSize": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./ActionIcon.demo.customSize.module.css"},
  "group": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "groupSection": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
