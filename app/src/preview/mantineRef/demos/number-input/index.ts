/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./minMax";
import * as m001 from "./strictClamp";
import * as m002 from "./prefixSuffix";
import * as m003 from "./allowNegative";
import * as m004 from "./allowDecimal";
import * as m005 from "./decimalScale";
import * as m006 from "./fixedDecimalScale";
import * as m007 from "./decimalSeparator";
import * as m008 from "./thousandsSeparator";
import * as m009 from "./hold";
import * as m010 from "./handlers";
import * as m011 from "./error";
import * as m012 from "./disabled";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "minMax": m000.minMax,
  "strictClamp": m001.strictClamp,
  "prefixSuffix": m002.prefixSuffix,
  "allowNegative": m003.allowNegative,
  "allowDecimal": m004.allowDecimal,
  "decimalScale": m005.decimalScale,
  "fixedDecimalScale": m006.fixedDecimalScale,
  "decimalSeparator": m007.decimalSeparator,
  "thousandsSeparator": m008.thousandsSeparator,
  "hold": m009.hold,
  "handlers": m010.handlers,
  "error": m011.error,
  "disabled": m012.disabled,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "rightSection": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
