/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/FileInput/FileInput.demo.usage";
import * as m001 from "../_src/demos/core/FileInput/FileInput.demo.multiple";
import * as m002 from "../_src/demos/core/FileInput/FileInput.demo.accept";
import * as m003 from "../_src/demos/core/FileInput/FileInput.demo.clearable";
import * as m004 from "../_src/demos/core/FileInput/FileInput.demo.valueComponent";
import * as m005 from "../_src/demos/core/FileInput/FileInput.demo.error";
import * as m006 from "../_src/demos/core/FileInput/FileInput.demo.disabled";
import * as m007 from "../_src/demos/core/FileInput/FileInput.demo.sections";
import * as m008 from "../_src/demos/core/FileInput/FileInput.demo.stylesApi";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "multiple": m001.multiple,
  "accept": m002.accept,
  "clearable": m003.clearable,
  "valueComponent": m004.valueComponent,
  "error": m005.error,
  "disabled": m006.disabled,
  "sections": m007.sections,
  "stylesApi": m008.stylesApi,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
