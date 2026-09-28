/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Radio/Radio.demo.configurator";
import * as m001 from "../_src/demos/core/Radio/Radio.demo.states";
import * as m002 from "../_src/demos/core/Radio/Radio.demo.icon";
import * as m003 from "../_src/demos/core/Radio/Radio.demo.iconColor";
import * as m004 from "../_src/demos/core/Radio/Radio.demo.disabled";
import * as m005 from "../_src/demos/core/Radio/Radio.demo.tooltip";
import * as m006 from "../_src/demos/core/Radio/Radio.demo.groupConfigurator";
import * as m007 from "../_src/demos/core/Radio/Radio.demo.indicator";
import * as m008 from "../_src/demos/core/Radio/Radio.demo.card";
import * as m009 from "../_src/demos/core/Radio/Radio.demo.cardGroup";
import * as m010 from "../_src/demos/core/Radio/Radio.demo.stylesApi";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "icon": m002.icon,
  "iconColor": m003.iconColor,
  "disabled": m004.disabled,
  "tooltip": m005.tooltip,
  "groupConfigurator": m006.groupConfigurator,
  "indicator": m007.indicator,
  "card": m008.card,
  "cardGroup": m009.cardGroup,
  "stylesApi": m010.stylesApi,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
