/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./select";
import * as m001 from "./autocomplete";
import * as m002 from "./button";
import * as m003 from "./searchableMultiselect";
import * as m004 from "./searchableSelect";
import * as m005 from "./buttonSearch";
import * as m006 from "./selectFirstOption";
import * as m007 from "./activeOption";
import * as m008 from "./groups";
import * as m009 from "./nativeScroll";
import * as m010 from "./scrollArea";
import * as m011 from "./hiddenDropdown";
import * as m012 from "./controlledDropdown";
import * as m013 from "./dropdownPosition";
import * as m014 from "./noDropdown";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "select": m000.select,
  "autocomplete": m001.autocomplete,
  "button": m002.button,
  "searchableMultiselect": m003.searchableMultiselect,
  "searchableSelect": m004.searchableSelect,
  "buttonSearch": m005.buttonSearch,
  "selectFirstOption": m006.selectFirstOption,
  "activeOption": m007.activeOption,
  "groups": m008.groups,
  "nativeScroll": m009.nativeScroll,
  "scrollArea": m010.scrollArea,
  "hiddenDropdown": m011.hiddenDropdown,
  "controlledDropdown": m012.controlledDropdown,
  "dropdownPosition": m013.dropdownPosition,
  "noDropdown": m014.noDropdown,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
