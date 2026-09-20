/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Select/Select.demo.usage";
import * as m001 from "../_src/demos/core/Select/Select.demo.clearable";
import * as m002 from "../_src/demos/core/Select/Select.demo.allowDeselect";
import * as m003 from "../_src/demos/core/Select/Select.demo.searchable";
import * as m004 from "../_src/demos/core/Select/Select.demo.nothingFound";
import * as m005 from "../_src/demos/core/Select/Select.demo.checkIcon";
import * as m006 from "../_src/demos/core/Select/Select.demo.search";
import * as m007 from "../_src/demos/core/Select/Select.demo.sort";
import * as m008 from "../_src/demos/core/Select/Select.demo.limit";
import * as m009 from "../_src/demos/core/Select/Select.demo.renderOption";
import * as m010 from "../_src/demos/core/Select/Select.demo.scrollArea";
import * as m011 from "../_src/demos/core/Select/Select.demo.groups";
import * as m012 from "../_src/demos/core/Select/Select.demo.disabledOptions";
import * as m013 from "../_src/demos/core/Select/Select.demo.withinPopover";
import * as m014 from "../_src/demos/core/Select/Select.demo.dropdownOpened";
import * as m015 from "../_src/demos/core/Select/Select.demo.dropdownPosition";
import * as m016 from "../_src/demos/core/Select/Select.demo.dropdownWidth";
import * as m017 from "../_src/demos/core/Select/Select.demo.dropdownOffset";
import * as m018 from "../_src/demos/core/Select/Select.demo.dropdownAnimation";
import * as m019 from "../_src/demos/core/Select/Select.demo.dropdownPadding";
import * as m020 from "../_src/demos/core/Select/Select.demo.dropdownShadow";
import * as m021 from "../_src/demos/core/Select/Select.demo.sections";
import * as m022 from "../_src/demos/core/Select/Select.demo.configurator";
import * as m023 from "../_src/demos/core/Select/Select.demo.readOnly";
import * as m024 from "../_src/demos/core/Select/Select.demo.disabled";
import * as m025 from "../_src/demos/core/Select/Select.demo.error";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "clearable": m001.clearable,
  "allowDeselect": m002.allowDeselect,
  "searchable": m003.searchable,
  "nothingFound": m004.nothingFound,
  "checkIcon": m005.checkIcon,
  "search": m006.search,
  "sort": m007.sort,
  "limit": m008.limit,
  "renderOption": m009.renderOption,
  "scrollArea": m010.scrollArea,
  "groups": m011.groups,
  "disabledOptions": m012.disabledOptions,
  "withinPopover": m013.withinPopover,
  "dropdownOpened": m014.dropdownOpened,
  "dropdownPosition": m015.dropdownPosition,
  "dropdownWidth": m016.dropdownWidth,
  "dropdownOffset": m017.dropdownOffset,
  "dropdownAnimation": m018.dropdownAnimation,
  "dropdownPadding": m019.dropdownPadding,
  "dropdownShadow": m020.dropdownShadow,
  "sections": m021.sections,
  "configurator": m022.configurator,
  "readOnly": m023.readOnly,
  "disabled": m024.disabled,
  "error": m025.error,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
