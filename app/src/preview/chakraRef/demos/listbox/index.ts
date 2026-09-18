/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./listbox-basic";
import * as m001 from "./listbox-controlled";
import * as m002 from "./listbox-with-store";
import * as m003 from "./listbox-disabled-item";
import * as m004 from "./listbox-grouped";
import * as m005 from "./listbox-horizontal";
import * as m006 from "./listbox-multiselect";
import * as m007 from "./listbox-select-all";
import * as m008 from "./listbox-extended-select";
import * as m009 from "./listbox-with-checkmark";
import * as m010 from "./listbox-with-icon";
import * as m011 from "./listbox-with-description";
import * as m012 from "./listbox-with-input";
import * as m013 from "./listbox-with-popover";
import * as m014 from "./listbox-with-dialog";
import * as m015 from "./listbox-virtualized";
import * as m016 from "./listbox-image-explorer";
import * as m017 from "./listbox-transfer-list";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "listbox-basic": m000.ListboxBasic,
  "listbox-controlled": m001.ListboxControlled,
  "listbox-with-store": m002.ListboxWithStore,
  "listbox-disabled-item": m003.ListboxDisabledItem,
  "listbox-grouped": m004.ListboxGrouped,
  "listbox-horizontal": m005.ListboxHorizontal,
  "listbox-multiselect": m006.ListboxMultiselect,
  "listbox-select-all": m007.ListboxSelectAll,
  "listbox-extended-select": m008.ListboxExtendedSelect,
  "listbox-with-checkmark": m009.ListboxWithCheckmark,
  "listbox-with-icon": m010.ListboxWithIcon,
  "listbox-with-description": m011.ListboxWithDescription,
  "listbox-with-input": m012.ListboxWithInput,
  "listbox-with-popover": m013.ListboxWithPopover,
  "listbox-with-dialog": m014.ListboxWithDialog,
  "listbox-virtualized": m015.ListboxVirtualized,
  "listbox-image-explorer": m016.ListboxImageExplorer,
  "listbox-transfer-list": m017.ListboxTransferList,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "listbox-with-emoji-grid": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: emojibase-data"},
};
