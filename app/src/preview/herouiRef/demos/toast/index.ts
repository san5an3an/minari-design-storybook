/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./placements";
import * as m001 from "./simple";
import * as m002 from "./custom-toast";
import * as m003 from "./promise";
import * as m004 from "./callbacks";
import * as m005 from "./custom-queue";
import * as m006 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "placements": m000.Placements,
  "simple": m001.Simple,
  "custom-toast": m002.CustomToast,
  "promise": m003.PromiseDemo,
  "callbacks": m004.Callbacks,
  "custom-queue": m005.CustomQueue,
  "custom-styles": m006.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "default": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "variants": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
