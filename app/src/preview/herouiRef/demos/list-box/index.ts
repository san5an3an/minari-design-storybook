/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./with-disabled-items";
import * as m002 from "./with-sections";
import * as m003 from "./multi-select";
import * as m004 from "./controlled";
import * as m005 from "./virtualization";
import * as m006 from "./custom-check-icon";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "with-disabled-items": m001.WithDisabledItems,
  "with-sections": m002.WithSections,
  "multi-select": m003.MultiSelect,
  "controlled": m004.Controlled,
  "virtualization": m005.Virtualization,
  "custom-check-icon": m006.CustomCheckIcon,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
