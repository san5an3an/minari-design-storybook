/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./qr-code-basic";
import * as m001 from "./qr-code-with-sizes";
import * as m002 from "./qr-code-with-overlay";
import * as m003 from "./qr-code-with-fill";
import * as m004 from "./qr-code-with-export";
import * as m005 from "./qr-code-with-error-level";
import * as m006 from "./qr-code-with-store";
import * as m007 from "./qr-code-with-input";
import * as m008 from "./qr-code-with-spinner";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "qr-code-basic": m000.QrCodeBasic,
  "qr-code-with-sizes": m001.QrCodeWithSizes,
  "qr-code-with-overlay": m002.QrCodeWithOverlay,
  "qr-code-with-fill": m003.QrCodeWithFill,
  "qr-code-with-export": m004.QrCodeWithExport,
  "qr-code-with-error-level": m005.QrCodeWithErrorLevel,
  "qr-code-with-store": m006.QrCodeWithStore,
  "qr-code-with-input": m007.QrCodeWithInput,
  "qr-code-with-spinner": m008.QrCodeWithSpinner,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
