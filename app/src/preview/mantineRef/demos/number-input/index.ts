/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/NumberInput/NumberInput.demo.usage";
import * as m001 from "../_src/demos/core/NumberInput/NumberInput.demo.minMax";
import * as m002 from "../_src/demos/core/NumberInput/NumberInput.demo.strictClamp";
import * as m003 from "../_src/demos/core/NumberInput/NumberInput.demo.prefixSuffix";
import * as m004 from "../_src/demos/core/NumberInput/NumberInput.demo.allowNegative";
import * as m005 from "../_src/demos/core/NumberInput/NumberInput.demo.allowDecimal";
import * as m006 from "../_src/demos/core/NumberInput/NumberInput.demo.decimalScale";
import * as m007 from "../_src/demos/core/NumberInput/NumberInput.demo.fixedDecimalScale";
import * as m008 from "../_src/demos/core/NumberInput/NumberInput.demo.decimalSeparator";
import * as m009 from "../_src/demos/core/NumberInput/NumberInput.demo.thousandsSeparator";
import * as m010 from "../_src/demos/core/NumberInput/NumberInput.demo.sections";
import * as m011 from "../_src/demos/core/NumberInput/NumberInput.demo.rightSection";
import * as m012 from "../_src/demos/core/NumberInput/NumberInput.demo.hold";
import * as m013 from "../_src/demos/core/NumberInput/NumberInput.demo.handlers";
import * as m014 from "../_src/demos/core/NumberInput/NumberInput.demo.error";
import * as m015 from "../_src/demos/core/NumberInput/NumberInput.demo.disabled";
import * as m016 from "../_src/demos/core/NumberInput/NumberInput.demo.stylesApi";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "minMax": m001.minMax,
  "strictClamp": m002.strictClamp,
  "prefixSuffix": m003.prefixSuffix,
  "allowNegative": m004.allowNegative,
  "allowDecimal": m005.allowDecimal,
  "decimalScale": m006.decimalScale,
  "fixedDecimalScale": m007.fixedDecimalScale,
  "decimalSeparator": m008.decimalSeparator,
  "thousandsSeparator": m009.thousandsSeparator,
  "sections": m010.sections,
  "rightSection": m011.rightSection,
  "hold": m012.hold,
  "handlers": m013.handlers,
  "error": m014.error,
  "disabled": m015.disabled,
  "stylesApi": m016.stylesApi,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
