/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./editable-basic";
import * as m001 from "./editable-with-double-click";
import * as m002 from "./editable-disabled";
import * as m003 from "./editable-with-textarea";
import * as m004 from "./editable-with-controls";
import * as m005 from "./editable-controlled";
import * as m006 from "./editable-with-store";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "editable-basic": m000.EditableBasic,
  "editable-with-double-click": m001.EditableWithDoubleClick,
  "editable-disabled": m002.EditableDisabled,
  "editable-with-textarea": m003.EditableWithTextarea,
  "editable-with-controls": m004.EditableWithControls,
  "editable-controlled": m005.EditableControlled,
  "editable-with-store": m006.EditableWithStore,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
