/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Tabs/Tabs.demo.usage";
import * as m001 from "../_src/demos/core/Tabs/Tabs.demo.colors";
import * as m002 from "../_src/demos/core/Tabs/Tabs.demo.position";
import * as m003 from "../_src/demos/core/Tabs/Tabs.demo.pull";
import * as m004 from "../_src/demos/core/Tabs/Tabs.demo.inverted";
import * as m005 from "../_src/demos/core/Tabs/Tabs.demo.placement";
import * as m006 from "../_src/demos/core/FloatingIndicator/FloatingIndicator.demo.tabs";
import * as m007 from "../_src/demos/core/Tabs/Tabs.demo.disabled";
import * as m008 from "../_src/demos/core/Tabs/Tabs.demo.keyboardActivation";
import * as m009 from "../_src/demos/core/Tabs/Tabs.demo.deactivate";
import * as m010 from "../_src/demos/core/Tabs/Tabs.demo.customize";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "colors": m001.colors,
  "position": m002.position,
  "pull": m003.pull,
  "inverted": m004.inverted,
  "placement": m005.placement,
  "tabs": m006.tabs,
  "disabled": m007.disabled,
  "keyboardActivation": m008.keyboardActivation,
  "deactivate": m009.deactivate,
  "customize": m010.customize,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
