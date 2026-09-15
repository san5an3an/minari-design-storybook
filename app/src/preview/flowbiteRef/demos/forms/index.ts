/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./forms.root";
import * as m001 from "./forms.inputSizing";
import * as m002 from "./forms.disabledInputs";
import * as m003 from "./forms.shadowInputs";
import * as m004 from "./forms.helperText";
import * as m005 from "./forms.inputAddon";
import * as m006 from "./forms.validation";
import * as m007 from "./forms.inputColors";
import * as m008 from "./forms.textarea";
import * as m009 from "./forms.select";
import * as m010 from "./forms.checkbox";
import * as m011 from "./forms.radioButton";
import * as m012 from "./forms.fileInput";
import * as m013 from "./forms.toggleSwitch";
import * as m014 from "./forms.rangeSlider";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "forms.root": m000.root,
  "forms.inputSizing": m001.inputSizing,
  "forms.disabledInputs": m002.disabledInputs,
  "forms.shadowInputs": m003.shadowInputs,
  "forms.helperText": m004.helperText,
  "forms.inputAddon": m005.inputAddon,
  "forms.validation": m006.validation,
  "forms.inputColors": m007.inputColors,
  "forms.textarea": m008.textarea,
  "forms.select": m009.select,
  "forms.checkbox": m010.checkbox,
  "forms.radioButton": m011.radioButton,
  "forms.fileInput": m012.fileInput,
  "forms.toggleSwitch": m013.toggleSwitch,
  "forms.rangeSlider": m014.rangeSlider,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "forms.inputLeftIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "forms.inputRightIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "forms.inputLeftRightIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
