import * as m000 from "./label";

export const DEMOS: Record<string, { component: unknown }> = {
  "label": m000.label,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_base"},
  "chevron": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Accordion.demo.chevron.module.css, ./_base"},
  "icons": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "customTransitions": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_base"},
  "disableTransitions": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_base"},
  "sideControls": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "disabled": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_base"},
  "unstyled": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_base"},
  "stylesApi": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_base"},
  "customize": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Accordion.demo.customize.module.css, ./_base"},
};
