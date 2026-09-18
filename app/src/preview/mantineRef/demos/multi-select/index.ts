/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./clearable";
import * as m002 from "./searchable";
import * as m003 from "./nothingFound";
import * as m004 from "./checkIcon";
import * as m005 from "./maxValues";
import * as m006 from "./hidePickedOptions";
import * as m007 from "./search";
import * as m008 from "./sort";
import * as m009 from "./limit";
import * as m010 from "./renderOption";
import * as m011 from "./scrollArea";
import * as m012 from "./groups";
import * as m013 from "./disabledOptions";
import * as m014 from "./withinPopover";
import * as m015 from "./dropdownOpened";
import * as m016 from "./dropdownPosition";
import * as m017 from "./dropdownWidth";
import * as m018 from "./dropdownAnimation";
import * as m019 from "./dropdownPadding";
import * as m020 from "./dropdownShadow";
import * as m021 from "./readOnly";
import * as m022 from "./disabled";
import * as m023 from "./error";

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
  "dropdownAnimation": m018.dropdownAnimation,
  "dropdownPadding": m019.dropdownPadding,
  "dropdownShadow": m020.dropdownShadow,
  "readOnly": m021.readOnly,
  "disabled": m022.disabled,
  "error": m023.error,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "dropdownOffset": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./MultiSelect.demo.dropdownOffset.module.css"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
