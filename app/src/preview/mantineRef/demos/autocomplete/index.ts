/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Autocomplete/Autocomplete.demo.usage";
import * as m001 from "../_src/demos/core/Autocomplete/Autocomplete.demo.search";
import * as m002 from "../_src/demos/core/Autocomplete/Autocomplete.demo.sort";
import * as m003 from "../_src/demos/core/Autocomplete/Autocomplete.demo.limit";
import * as m004 from "../_src/demos/core/Autocomplete/Autocomplete.demo.renderOption";
import * as m005 from "../_src/demos/core/Autocomplete/Autocomplete.demo.scrollArea";
import * as m006 from "../_src/demos/core/Autocomplete/Autocomplete.demo.groups";
import * as m007 from "../_src/demos/core/Autocomplete/Autocomplete.demo.disabledOptions";
import * as m008 from "../_src/demos/core/Autocomplete/Autocomplete.demo.withinPopover";
import * as m009 from "../_src/demos/core/Autocomplete/Autocomplete.demo.clearable";
import * as m010 from "../_src/demos/core/Autocomplete/Autocomplete.demo.dropdownOpened";
import * as m011 from "../_src/demos/core/Autocomplete/Autocomplete.demo.dropdownPosition";
import * as m012 from "../_src/demos/core/Autocomplete/Autocomplete.demo.dropdownAnimation";
import * as m013 from "../_src/demos/core/Autocomplete/Autocomplete.demo.dropdownPadding";
import * as m014 from "../_src/demos/core/Autocomplete/Autocomplete.demo.dropdownShadow";
import * as m015 from "../_src/demos/core/Autocomplete/Autocomplete.demo.sections";
import * as m016 from "../_src/demos/core/Autocomplete/Autocomplete.demo.configurator";
import * as m017 from "../_src/demos/core/Autocomplete/Autocomplete.demo.readOnly";
import * as m018 from "../_src/demos/core/Autocomplete/Autocomplete.demo.disabled";
import * as m019 from "../_src/demos/core/Autocomplete/Autocomplete.demo.error";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "search": m001.search,
  "sort": m002.sort,
  "limit": m003.limit,
  "renderOption": m004.renderOption,
  "scrollArea": m005.scrollArea,
  "groups": m006.groups,
  "disabledOptions": m007.disabledOptions,
  "withinPopover": m008.withinPopover,
  "clearable": m009.clearable,
  "dropdownOpened": m010.dropdownOpened,
  "dropdownPosition": m011.dropdownPosition,
  "dropdownAnimation": m012.dropdownAnimation,
  "dropdownPadding": m013.dropdownPadding,
  "dropdownShadow": m014.dropdownShadow,
  "sections": m015.sections,
  "configurator": m016.configurator,
  "readOnly": m017.readOnly,
  "disabled": m018.disabled,
  "error": m019.error,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
