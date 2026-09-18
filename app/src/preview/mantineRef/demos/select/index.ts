/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./clearable";
import * as m002 from "./allowDeselect";
import * as m003 from "./searchable";
import * as m004 from "./nothingFound";
import * as m005 from "./checkIcon";
import * as m006 from "./search";
import * as m007 from "./sort";
import * as m008 from "./limit";
import * as m009 from "./scrollArea";
import * as m010 from "./groups";
import * as m011 from "./disabledOptions";
import * as m012 from "./withinPopover";
import * as m013 from "./dropdownOpened";
import * as m014 from "./dropdownPosition";
import * as m015 from "./dropdownWidth";
import * as m016 from "./dropdownAnimation";
import * as m017 from "./dropdownPadding";
import * as m018 from "./dropdownShadow";
import * as m019 from "./readOnly";
import * as m020 from "./disabled";
import * as m021 from "./error";

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
  "scrollArea": m009.scrollArea,
  "groups": m010.groups,
  "disabledOptions": m011.disabledOptions,
  "withinPopover": m012.withinPopover,
  "dropdownOpened": m013.dropdownOpened,
  "dropdownPosition": m014.dropdownPosition,
  "dropdownWidth": m015.dropdownWidth,
  "dropdownAnimation": m016.dropdownAnimation,
  "dropdownPadding": m017.dropdownPadding,
  "dropdownShadow": m018.dropdownShadow,
  "readOnly": m019.readOnly,
  "disabled": m020.disabled,
  "error": m021.error,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "renderOption": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "dropdownOffset": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Select.demo.dropdownOffset.module.css"},
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
