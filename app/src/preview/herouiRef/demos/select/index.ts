/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./variants";
import * as m002 from "./full-width";
import * as m003 from "./with-description";
import * as m004 from "./required";
import * as m005 from "./disabled";
import * as m006 from "./with-disabled-options";
import * as m007 from "./multiple-select";
import * as m008 from "./with-sections";
import * as m009 from "./controlled";
import * as m010 from "./controlled-multiple";
import * as m011 from "./controlled-open-state";
import * as m012 from "./asynchronous-loading";
import * as m013 from "./custom-indicator";
import * as m014 from "./custom-value";
import * as m015 from "./render-function";
import * as m016 from "./on-surface";
import * as m017 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "variants": m001.Variants,
  "full-width": m002.FullWidth,
  "with-description": m003.WithDescription,
  "required": m004.Required,
  "disabled": m005.Disabled,
  "with-disabled-options": m006.WithDisabledOptions,
  "multiple-select": m007.MultipleSelect,
  "with-sections": m008.WithSections,
  "controlled": m009.Controlled,
  "controlled-multiple": m010.ControlledMultiple,
  "controlled-open-state": m011.ControlledOpenState,
  "asynchronous-loading": m012.AsynchronousLoading,
  "custom-indicator": m013.CustomIndicator,
  "custom-value": m014.CustomValue,
  "render-function": m015.RenderFunction,
  "on-surface": m016.OnSurface,
  "custom-styles": m017.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
