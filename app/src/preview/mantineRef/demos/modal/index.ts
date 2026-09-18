/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./header";
import * as m001 from "./sizeAuto";
import * as m002 from "./fullScreenMobile";
import * as m003 from "./overflow";
import * as m004 from "./scrollarea";
import * as m005 from "./transitions";
import * as m006 from "./transitionEnd";
import * as m007 from "./initialFocus";
import * as m008 from "./initialFocusTrap";
import * as m009 from "./composition";
import * as m010 from "./stack";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "header": m000.header,
  "sizeAuto": m001.sizeAuto,
  "fullScreenMobile": m002.fullScreenMobile,
  "overflow": m003.overflow,
  "scrollarea": m004.scrollarea,
  "transitions": m005.transitions,
  "transitionEnd": m006.transitionEnd,
  "initialFocus": m007.initialFocus,
  "initialFocusTrap": m008.initialFocusTrap,
  "composition": m009.composition,
  "stack": m010.stack,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "centered": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "sizes": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "fullScreen": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "overlay": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "offset": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "closeIcon": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
};
