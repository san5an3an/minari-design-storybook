/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./configurator";
import * as m001 from "./iconSizeConfigurator";
import * as m002 from "./orientation";
import * as m003 from "./iconPosition";
import * as m004 from "./loading";
import * as m005 from "./stylesApi2";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "iconSizeConfigurator": m001.iconSizeConfigurator,
  "orientation": m002.orientation,
  "iconPosition": m003.iconPosition,
  "loading": m004.loading,
  "stylesApi2": m005.stylesApi2,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "allowStepSelect": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "allowNextStepsSelect": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "icons": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "iconsOnly": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stepColor": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "stylesApi3": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Stepper.demo.stylesApi3.module.css"},
};
