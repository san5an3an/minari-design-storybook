/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Popover/Popover.demo.usage";
import * as m001 from "../_src/demos/core/Popover/Popover.demo.hover";
import * as m002 from "../_src/demos/core/Popover/Popover.demo.form";
import * as m003 from "../_src/demos/core/Popover/Popover.demo.inline";
import * as m004 from "../_src/demos/core/Popover/Popover.demo.sameWidth";
import * as m005 from "../_src/demos/core/Popover/Popover.demo.offset";
import * as m006 from "../_src/demos/core/Popover/Popover.demo.offsetAxis";
import * as m007 from "../_src/demos/core/Popover/Popover.demo.arrow";
import * as m008 from "../_src/demos/core/Popover/Popover.demo.overlay";
import * as m009 from "../_src/demos/core/Popover/Popover.demo.disabled";
import * as m010 from "../_src/demos/core/Popover/Popover.demo.clickOutsideEvents";
import * as m011 from "../_src/demos/core/Popover/Popover.demo.portalChildren";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "hover": m001.hover,
  "form": m002.form,
  "inline": m003.inline,
  "sameWidth": m004.sameWidth,
  "offset": m005.offset,
  "offsetAxis": m006.offsetAxis,
  "arrow": m007.arrow,
  "overlay": m008.overlay,
  "disabled": m009.disabled,
  "clickOutsideEvents": m010.clickOutsideEvents,
  "portalChildren": m011.portalChildren,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
