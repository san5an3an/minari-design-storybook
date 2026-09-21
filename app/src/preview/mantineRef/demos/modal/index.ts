/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Modal/Modal.demo.usage";
import * as m001 from "../_src/demos/core/Modal/Modal.demo.centered";
import * as m002 from "../_src/demos/core/Modal/Modal.demo.header";
import * as m003 from "../_src/demos/core/Modal/Modal.demo.sizes";
import * as m004 from "../_src/demos/core/Modal/Modal.demo.sizeAuto";
import * as m005 from "../_src/demos/core/Modal/Modal.demo.fullScreen";
import * as m006 from "../_src/demos/core/Modal/Modal.demo.fullScreenMobile";
import * as m007 from "../_src/demos/core/Modal/Modal.demo.overlay";
import * as m008 from "../_src/demos/core/Modal/Modal.demo.overflow";
import * as m009 from "../_src/demos/core/Modal/Modal.demo.scrollarea";
import * as m010 from "../_src/demos/core/Modal/Modal.demo.offset";
import * as m011 from "../_src/demos/core/Modal/Modal.demo.transitions";
import * as m012 from "../_src/demos/core/Modal/Modal.demo.transitionEnd";
import * as m013 from "../_src/demos/core/Modal/Modal.demo.initialFocus";
import * as m014 from "../_src/demos/core/Modal/Modal.demo.initialFocusTrap";
import * as m015 from "../_src/demos/core/Modal/Modal.demo.closeIcon";
import * as m016 from "../_src/demos/core/Modal/Modal.demo.composition";
import * as m017 from "../_src/demos/core/Modal/Modal.demo.stack";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "centered": m001.centered,
  "header": m002.header,
  "sizes": m003.sizes,
  "sizeAuto": m004.sizeAuto,
  "fullScreen": m005.fullScreen,
  "fullScreenMobile": m006.fullScreenMobile,
  "overlay": m007.overlay,
  "overflow": m008.overflow,
  "scrollarea": m009.scrollarea,
  "offset": m010.offset,
  "transitions": m011.transitions,
  "transitionEnd": m012.transitionEnd,
  "initialFocus": m013.initialFocus,
  "initialFocusTrap": m014.initialFocusTrap,
  "closeIcon": m015.closeIcon,
  "composition": m016.composition,
  "stack": m017.stack,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
