/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Pagination/Pagination.demo.configurator";
import * as m001 from "../_src/demos/core/Pagination/Pagination.demo.withContent";
import * as m002 from "../_src/demos/core/Pagination/Pagination.demo.siblings";
import * as m003 from "../_src/demos/core/Pagination/Pagination.demo.boundaries";
import * as m004 from "../_src/demos/core/Pagination/Pagination.demo.withPages";
import * as m005 from "../_src/demos/core/Pagination/Pagination.demo.stylesApi";
import * as m006 from "../_src/demos/core/Pagination/Pagination.demo.composition";
import * as m007 from "../_src/demos/core/Pagination/Pagination.demo.links";
import * as m008 from "../_src/demos/core/Pagination/Pagination.demo.icons";
import * as m009 from "../_src/demos/core/Pagination/Pagination.demo.autoContrast";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "withContent": m001.withContent,
  "siblings": m002.siblings,
  "boundaries": m003.boundaries,
  "withPages": m004.withPages,
  "stylesApi": m005.stylesApi,
  "composition": m006.composition,
  "links": m007.links,
  "icons": m008.icons,
  "autoContrast": m009.autoContrast,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
