/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Table/Table.demo.usage";
import * as m001 from "../_src/demos/core/Table/Table.demo.data";
import * as m002 from "../_src/demos/core/Table/Table.demo.stickyHeader";
import * as m003 from "../_src/demos/core/Table/Table.demo.spacingConfigurator";
import * as m004 from "../_src/demos/core/Table/Table.demo.captions";
import * as m005 from "../_src/demos/core/Table/Table.demo.configurator";
import * as m006 from "../_src/demos/core/Table/Table.demo.scrollContainer";
import * as m007 from "../_src/demos/core/Table/Table.demo.scrollContainerNative";
import * as m008 from "../_src/demos/core/Table/Table.demo.scrollContainerMaxHeight";
import * as m009 from "../_src/demos/core/Table/Table.demo.vertical";
import * as m010 from "../_src/demos/core/Table/Table.demo.tabularNums";
import * as m011 from "../_src/demos/core/Table/Table.demo.rowSelection";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "data": m001.data,
  "stickyHeader": m002.stickyHeader,
  "spacingConfigurator": m003.spacingConfigurator,
  "captions": m004.captions,
  "configurator": m005.configurator,
  "scrollContainer": m006.scrollContainer,
  "scrollContainerNative": m007.scrollContainerNative,
  "scrollContainerMaxHeight": m008.scrollContainerMaxHeight,
  "vertical": m009.vertical,
  "tabularNums": m010.tabularNums,
  "rowSelection": m011.rowSelection,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
