/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./variants";
import * as m002 from "./horizontal";
import * as m003 from "./with-avatar";
import * as m004 from "./with-images";
import * as m005 from "./with-form";
import * as m006 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "variants": m001.Variants,
  "horizontal": m002.Horizontal,
  "with-avatar": m003.WithAvatar,
  "with-images": m004.WithImages,
  "with-form": m005.WithForm,
  "custom-styles": m006.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
