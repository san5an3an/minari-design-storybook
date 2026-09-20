/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Grid/Grid.demo.usage";
import * as m001 from "../_src/demos/core/Grid/Grid.demo.responsive";
import * as m002 from "../_src/demos/core/Grid/Grid.demo.gutter";
import * as m003 from "../_src/demos/core/Grid/Grid.demo.growConfigurator";
import * as m004 from "../_src/demos/core/Grid/Grid.demo.offset";
import * as m005 from "../_src/demos/core/Grid/Grid.demo.order";
import * as m006 from "../_src/demos/core/Grid/Grid.demo.rows";
import * as m007 from "../_src/demos/core/Grid/Grid.demo.flexConfigurator";
import * as m008 from "../_src/demos/core/Grid/Grid.demo.auto";
import * as m009 from "../_src/demos/core/Grid/Grid.demo.content";
import * as m010 from "../_src/demos/core/Grid/Grid.demo.columns";
import * as m011 from "../_src/demos/core/Grid/Grid.demo.container";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "responsive": m001.responsive,
  "gutter": m002.gutter,
  "growConfigurator": m003.growConfigurator,
  "offset": m004.offset,
  "order": m005.order,
  "rows": m006.rows,
  "flexConfigurator": m007.flexConfigurator,
  "auto": m008.auto,
  "content": m009.content,
  "columns": m010.columns,
  "container": m011.container,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
