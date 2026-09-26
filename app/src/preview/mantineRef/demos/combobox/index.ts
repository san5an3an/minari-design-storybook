import * as m000 from "../_src/demos/core/Combobox/Combobox.demo.select";
import * as m001 from "../_src/demos/core/Combobox/Combobox.demo.autocomplete";
import * as m002 from "../_src/demos/core/Combobox/Combobox.demo.button";
import * as m003 from "../_src/demos/core/Combobox/Combobox.demo.searchableMultiselect";
import * as m004 from "../_src/demos/core/Combobox/Combobox.demo.searchableSelect";
import * as m005 from "../_src/demos/core/Combobox/Combobox.demo.buttonSearch";
import * as m006 from "../_src/demos/core/Combobox/Combobox.demo.selectFirstOption";
import * as m007 from "../_src/demos/core/Combobox/Combobox.demo.activeOption";
import * as m008 from "../_src/demos/core/Combobox/Combobox.demo.groups";
import * as m009 from "../_src/demos/core/Combobox/Combobox.demo.nativeScroll";
import * as m010 from "../_src/demos/core/Combobox/Combobox.demo.scrollArea";
import * as m011 from "../_src/demos/core/Combobox/Combobox.demo.hiddenDropdown";
import * as m012 from "../_src/demos/core/Combobox/Combobox.demo.controlledDropdown";
import * as m013 from "../_src/demos/core/Combobox/Combobox.demo.dropdownPosition";
import * as m014 from "../_src/demos/core/Combobox/Combobox.demo.noDropdown";
import * as m015 from "../_src/demos/core/Combobox/Combobox.demo.stylesApi";

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
  "stylesApi": m015.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
