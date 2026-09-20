/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Avatar/Avatar.demo.usage";
import * as m001 from "../_src/demos/core/Avatar/Avatar.demo.initials";
import * as m002 from "../_src/demos/core/Avatar/Avatar.demo.allowedColors";
import * as m003 from "../_src/demos/core/Avatar/Avatar.demo.placeholders";
import * as m004 from "../_src/demos/core/Avatar/Avatar.demo.configurator";
import * as m005 from "../_src/demos/core/Avatar/Avatar.demo.group";
import * as m006 from "../_src/demos/core/Avatar/Avatar.demo.groupTooltip";
import * as m007 from "../_src/demos/core/Avatar/Avatar.demo.link";
import * as m008 from "../_src/demos/core/Avatar/Avatar.demo.groupTooltip";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "initials": m001.initials,
  "allowedColors": m002.allowedColors,
  "placeholders": m003.placeholders,
  "configurator": m004.configurator,
  "group": m005.group,
  "groupTooltip": m006.groupTooltip,
  "link": m007.link,
  "AvatarDemos_groupTooltip": m008.groupTooltip,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
