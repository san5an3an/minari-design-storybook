import * as m000 from "./inputWrapperOrder";
import * as m001 from "./inputContainer";
import * as m002 from "./compound";
import * as m003 from "./placeholder";
import * as m004 from "./clearButton";
import * as m005 from "./defaultProps";

export const DEMOS: Record<string, { component: unknown }> = {
  "inputWrapperOrder": m000.inputWrapperOrder,
  "inputContainer": m001.inputContainer,
  "compound": m002.compound,
  "placeholder": m003.placeholder,
  "clearButton": m004.clearButton,
  "defaultProps": m005.defaultProps,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "component": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "mask": {"code": "package-missing", "detail": "미설치: react-imask"},
  "wrapper": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "error": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "sharedStyles": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Input.demo.sharedStyles.module.css"},
  "focusStyles": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Input.demo.focusStyles.module.css"},
  "inputBase": {"code": "package-missing", "detail": "미설치: react-imask"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
  "wrapperStylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
