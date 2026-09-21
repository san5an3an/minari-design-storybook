/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./combobox-basic";
import * as m001 from "./combobox-with-sizes";
import * as m002 from "./combobox-with-variants";
import * as m003 from "./combobox-with-multiple";
import * as m005 from "./combobox-with-highlight";
import * as m006 from "./combobox-open-on-click";
import * as m007 from "./combobox-with-custom-object";
import * as m008 from "./combobox-min-character";
import * as m009 from "./combobox-with-field";
import * as m010 from "./combobox-with-form-submit";
import * as m012 from "./combobox-with-disabled";
import * as m013 from "./combobox-with-disabled-item";
import * as m014 from "./combobox-with-input-group";
import * as m015 from "./combobox-with-invalid";
import * as m016 from "./combobox-controlled";
import * as m017 from "./combobox-with-store";
import * as m018 from "./combobox-open-controlled";
import * as m019 from "./combobox-with-limit";
import * as m020 from "./combobox-virtualized";
import * as m021 from "./combobox-with-links";
import * as m023 from "./combobox-with-custom-item";
import * as m024 from "./combobox-with-custom-filter";
import * as m025 from "./combobox-with-custom-animation";
import * as m026 from "./combobox-open-from-popover";
import * as m027 from "./combobox-with-createable";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "combobox-basic": m000.ComboboxBasic,
  "combobox-with-sizes": m001.ComboboxWithSizes,
  "combobox-with-variants": m002.ComboboxWithVariants,
  "combobox-with-multiple": m003.ComboboxWithMultiple,
  "combobox-with-highlight": m005.ComboboxWithHighlight,
  "combobox-open-on-click": m006.ComboboxOpenOnClick,
  "combobox-with-custom-object": m007.ComboboxWithCustomObject,
  "combobox-min-character": m008.ComboboxMinCharacter,
  "combobox-with-field": m009.ComboboxWithField,
  "combobox-with-form-submit": m010.ComboboxWithFormSubmit,
  "combobox-with-disabled": m012.ComboboxWithDisabled,
  "combobox-with-disabled-item": m013.ComboboxWithDisabledItem,
  "combobox-with-input-group": m014.ComboboxWithInputGroup,
  "combobox-with-invalid": m015.ComboboxWithInvalid,
  "combobox-controlled": m016.ComboboxControlled,
  "combobox-with-store": m017.ComboboxWithStore,
  "combobox-open-controlled": m018.ComboboxOpenControlled,
  "combobox-with-limit": m019.ComboboxWithLimit,
  "combobox-virtualized": m020.ComboboxVirtualized,
  "combobox-with-links": m021.ComboboxWithLinks,
  "combobox-with-custom-item": m023.ComboboxWithCustomItem,
  "combobox-with-custom-filter": m024.ComboboxWithCustomFilter,
  "combobox-with-custom-animation": m025.ComboboxWithCustomAnimation,
  "combobox-open-from-popover": m026.ComboboxOpenFromPopover,
  "combobox-with-createable": m027.ComboboxWithCreateable,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "combobox-with-async-content": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-use"},
  "combobox-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
  "combobox-rehydrate-value": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-use"},
};
