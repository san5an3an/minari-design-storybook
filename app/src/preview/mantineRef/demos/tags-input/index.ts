/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/TagsInput/TagsInput.demo.usage";
import * as m001 from "../_src/demos/core/TagsInput/TagsInput.demo.clearable";
import * as m002 from "../_src/demos/core/TagsInput/TagsInput.demo.maxTags";
import * as m003 from "../_src/demos/core/TagsInput/TagsInput.demo.acceptValueOnBlur";
import * as m004 from "../_src/demos/core/TagsInput/TagsInput.demo.allowDuplicates";
import * as m005 from "../_src/demos/core/TagsInput/TagsInput.demo.splitChars";
import * as m006 from "../_src/demos/core/TagsInput/TagsInput.demo.data";
import * as m007 from "../_src/demos/core/TagsInput/TagsInput.demo.search";
import * as m008 from "../_src/demos/core/TagsInput/TagsInput.demo.sort";
import * as m009 from "../_src/demos/core/TagsInput/TagsInput.demo.limit";
import * as m010 from "../_src/demos/core/TagsInput/TagsInput.demo.renderOption";
import * as m011 from "../_src/demos/core/TagsInput/TagsInput.demo.scrollArea";
import * as m012 from "../_src/demos/core/TagsInput/TagsInput.demo.groups";
import * as m013 from "../_src/demos/core/TagsInput/TagsInput.demo.disabledOptions";
import * as m014 from "../_src/demos/core/TagsInput/TagsInput.demo.withinPopover";
import * as m015 from "../_src/demos/core/TagsInput/TagsInput.demo.dropdownOpened";
import * as m016 from "../_src/demos/core/TagsInput/TagsInput.demo.dropdownPosition";
import * as m017 from "../_src/demos/core/TagsInput/TagsInput.demo.dropdownAnimation";
import * as m018 from "../_src/demos/core/TagsInput/TagsInput.demo.dropdownWidth";
import * as m019 from "../_src/demos/core/TagsInput/TagsInput.demo.dropdownPadding";
import * as m020 from "../_src/demos/core/TagsInput/TagsInput.demo.dropdownShadow";
import * as m021 from "../_src/demos/core/TagsInput/TagsInput.demo.sections";
import * as m022 from "../_src/demos/core/TagsInput/TagsInput.demo.configurator";
import * as m023 from "../_src/demos/core/TagsInput/TagsInput.demo.readOnly";
import * as m024 from "../_src/demos/core/TagsInput/TagsInput.demo.disabled";
import * as m025 from "../_src/demos/core/TagsInput/TagsInput.demo.error";
import * as m026 from "../_src/demos/core/TagsInput/TagsInput.demo.stylesApi";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "clearable": m001.clearable,
  "maxTags": m002.maxTags,
  "acceptValueOnBlur": m003.acceptValueOnBlur,
  "allowDuplicates": m004.allowDuplicates,
  "splitChars": m005.splitChars,
  "data": m006.data,
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
  "dropdownAnimation": m017.dropdownAnimation,
  "dropdownWidth": m018.dropdownWidth,
  "dropdownPadding": m019.dropdownPadding,
  "dropdownShadow": m020.dropdownShadow,
  "sections": m021.sections,
  "configurator": m022.configurator,
  "readOnly": m023.readOnly,
  "disabled": m024.disabled,
  "error": m025.error,
  "stylesApi": m026.stylesApi,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
