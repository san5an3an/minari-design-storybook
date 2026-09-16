/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./variants";
import * as m001 from "./horizontal";
import * as m002 from "./with-avatar";
import * as m003 from "./with-form";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "variants": m000.Variants,
  "horizontal": m001.Horizontal,
  "with-avatar": m002.WithAvatar,
  "with-form": m003.WithForm,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "default": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-images": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-styles": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
