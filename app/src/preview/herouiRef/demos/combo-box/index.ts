/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./full-width";
import * as m002 from "./with-description";
import * as m003 from "./required";
import * as m004 from "./disabled";
import * as m005 from "./with-disabled-options";
import * as m006 from "./with-sections";
import * as m007 from "./controlled";
import * as m008 from "./controlled-input-value";
import * as m009 from "./default-selected-key";
import * as m010 from "./allows-custom-value";
import * as m011 from "./custom-value";
import * as m012 from "./custom-filtering";
import * as m013 from "./render-function";
import * as m014 from "./menu-trigger";
import * as m015 from "./multiple-selection";
import * as m016 from "./on-surface";
import * as m017 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "full-width": m001.FullWidth,
  "with-description": m002.WithDescription,
  "required": m003.Required,
  "disabled": m004.Disabled,
  "with-disabled-options": m005.WithDisabledOptions,
  "with-sections": m006.WithSections,
  "controlled": m007.Controlled,
  "controlled-input-value": m008.ControlledInputValue,
  "default-selected-key": m009.DefaultSelectedKey,
  "allows-custom-value": m010.AllowsCustomValue,
  "custom-value": m011.CustomValue,
  "custom-filtering": m012.CustomFiltering,
  "render-function": m013.RenderFunction,
  "menu-trigger": m014.MenuTrigger,
  "multiple-selection": m015.MultipleSelection,
  "on-surface": m016.OnSurface,
  "custom-styles": m017.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "asynchronous-loading": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @react-stately/data"},
  "custom-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
