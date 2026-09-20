/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/MultiSelect/MultiSelect.demo.usage";
import * as m001 from "../_src/demos/core/MultiSelect/MultiSelect.demo.clearable";
import * as m002 from "../_src/demos/core/MultiSelect/MultiSelect.demo.searchable";
import * as m003 from "../_src/demos/core/MultiSelect/MultiSelect.demo.nothingFound";
import * as m004 from "../_src/demos/core/MultiSelect/MultiSelect.demo.checkIcon";
import * as m005 from "../_src/demos/core/MultiSelect/MultiSelect.demo.maxValues";
import * as m006 from "../_src/demos/core/MultiSelect/MultiSelect.demo.hidePickedOptions";
import * as m007 from "../_src/demos/core/MultiSelect/MultiSelect.demo.search";
import * as m008 from "../_src/demos/core/MultiSelect/MultiSelect.demo.sort";
import * as m009 from "../_src/demos/core/MultiSelect/MultiSelect.demo.limit";
import * as m010 from "../_src/demos/core/MultiSelect/MultiSelect.demo.renderOption";
import * as m011 from "../_src/demos/core/MultiSelect/MultiSelect.demo.scrollArea";
import * as m012 from "../_src/demos/core/MultiSelect/MultiSelect.demo.groups";
import * as m013 from "../_src/demos/core/MultiSelect/MultiSelect.demo.disabledOptions";
import * as m014 from "../_src/demos/core/MultiSelect/MultiSelect.demo.withinPopover";
import * as m015 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownOpened";
import * as m016 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownPosition";
import * as m017 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownWidth";
import * as m018 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownOffset";
import * as m019 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownAnimation";
import * as m020 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownPadding";
import * as m021 from "../_src/demos/core/MultiSelect/MultiSelect.demo.dropdownShadow";
import * as m022 from "../_src/demos/core/MultiSelect/MultiSelect.demo.sections";
import * as m023 from "../_src/demos/core/MultiSelect/MultiSelect.demo.configurator";
import * as m024 from "../_src/demos/core/MultiSelect/MultiSelect.demo.readOnly";
import * as m025 from "../_src/demos/core/MultiSelect/MultiSelect.demo.disabled";
import * as m026 from "../_src/demos/core/MultiSelect/MultiSelect.demo.error";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "clearable": m001.clearable,
  "searchable": m002.searchable,
  "nothingFound": m003.nothingFound,
  "checkIcon": m004.checkIcon,
  "maxValues": m005.maxValues,
  "hidePickedOptions": m006.hidePickedOptions,
  "search": m007.search,
  "sort": m008.sort,
  "limit": m009.limit,
  "renderOption": m010.renderOption,
  "scrollArea": m011.scrollArea,
  "groups": m012.groups,
  "disabledOptions": m013.disabledOptions,
  "withinPopover": m014.withinPopover,
  "dropdownOpened": m015.dropdownOpened,
  "dropdownPosition": m016.dropdownPosition,
  "dropdownWidth": m017.dropdownWidth,
  "dropdownOffset": m018.dropdownOffset,
  "dropdownAnimation": m019.dropdownAnimation,
  "dropdownPadding": m020.dropdownPadding,
  "dropdownShadow": m021.dropdownShadow,
  "sections": m022.sections,
  "configurator": m023.configurator,
  "readOnly": m024.readOnly,
  "disabled": m025.disabled,
  "error": m026.error,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
