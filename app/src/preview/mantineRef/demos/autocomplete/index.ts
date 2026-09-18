/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./search";
import * as m002 from "./sort";
import * as m003 from "./limit";
import * as m004 from "./renderOption";
import * as m005 from "./scrollArea";
import * as m006 from "./groups";
import * as m007 from "./disabledOptions";
import * as m008 from "./withinPopover";
import * as m009 from "./clearable";
import * as m010 from "./dropdownOpened";
import * as m011 from "./dropdownPosition";
import * as m012 from "./dropdownAnimation";
import * as m013 from "./dropdownPadding";
import * as m014 from "./dropdownShadow";
import * as m015 from "./readOnly";
import * as m016 from "./disabled";
import * as m017 from "./error";

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
  "readOnly": m015.readOnly,
  "disabled": m016.disabled,
  "error": m017.error,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "sections": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "configurator": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
};
