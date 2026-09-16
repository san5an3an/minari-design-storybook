/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./variants";
import * as m002 from "./full-width";
import * as m003 from "./with-description";
import * as m004 from "./required";
import * as m005 from "./disabled";
import * as m006 from "./with-disabled-options";
import * as m007 from "./allows-empty-collection";
import * as m008 from "./with-sections";
import * as m009 from "./multiple-select";
import * as m010 from "./controlled";
import * as m011 from "./controlled-multiple";
import * as m012 from "./controlled-open-state";
import * as m013 from "./custom-value";
import * as m014 from "./on-surface";
import * as m015 from "./virtualization";
import * as m016 from "./user-selection";
import * as m017 from "./user-selection-multiple";
import * as m018 from "./location-search";
import * as m019 from "./tag-group-selection";
import * as m020 from "./email-recipients";
import * as m021 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.default,
  "variants": m001.Variants,
  "full-width": m002.FullWidth,
  "with-description": m003.WithDescription,
  "required": m004.Required,
  "disabled": m005.Disabled,
  "with-disabled-options": m006.WithDisabledOptions,
  "allows-empty-collection": m007.AllowsEmptyCollection,
  "with-sections": m008.WithSections,
  "multiple-select": m009.MultipleSelect,
  "controlled": m010.Controlled,
  "controlled-multiple": m011.ControlledMultiple,
  "controlled-open-state": m012.ControlledOpenState,
  "custom-value": m013.CustomValue,
  "on-surface": m014.OnSurface,
  "virtualization": m015.Virtualization,
  "user-selection": m016.UserSelection,
  "user-selection-multiple": m017.UserSelectionMultiple,
  "location-search": m018.LocationSearch,
  "tag-group-selection": m019.TagGroupSelection,
  "email-recipients": m020.EmailRecipients,
  "custom-styles": m021.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "asynchronous-filtering": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @react-stately/data"},
  "custom-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
};
