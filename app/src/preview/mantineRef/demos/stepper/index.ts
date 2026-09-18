import * as m000 from "./configurator";
import * as m001 from "./iconSizeConfigurator";
import * as m002 from "./orientation";
import * as m003 from "./iconPosition";
import * as m004 from "./loading";
import * as m005 from "./stylesApi2";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "iconSizeConfigurator": m001.iconSizeConfigurator,
  "orientation": m002.orientation,
  "iconPosition": m003.iconPosition,
  "loading": m004.loading,
  "stylesApi2": m005.stylesApi2,
};

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
