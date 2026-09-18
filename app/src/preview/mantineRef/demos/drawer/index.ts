/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./positions";
import * as m001 from "./sizes";
import * as m002 from "./header";
import * as m003 from "./overflow";
import * as m004 from "./scrollarea";
import * as m005 from "./transitionEnd";
import * as m006 from "./initialFocus";
import * as m007 from "./initialFocusTrap";
import * as m008 from "./composition";
import * as m009 from "./stack";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "positions": m000.positions,
  "sizes": m001.sizes,
  "header": m002.header,
  "overflow": m003.overflow,
  "scrollarea": m004.scrollarea,
  "transitionEnd": m005.transitionEnd,
  "initialFocus": m006.initialFocus,
  "initialFocusTrap": m007.initialFocusTrap,
  "composition": m008.composition,
  "stack": m009.stack,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "offset": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "overlay": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "transitions": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
  "closeIcon": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared/AuthenticationForm/AuthenticationForm"},
};
