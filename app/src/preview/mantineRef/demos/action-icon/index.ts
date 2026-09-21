/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/ActionIcon/ActionIcon.demo.usage";
import * as m001 from "../_src/demos/core/ActionIcon/ActionIcon.demo.gradient";
import * as m002 from "../_src/demos/core/ActionIcon/ActionIcon.demo.size";
import * as m003 from "../_src/demos/core/ActionIcon/ActionIcon.demo.inputSize";
import * as m004 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabled";
import * as m005 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabledLink";
import * as m006 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabledStyles";
import * as m007 from "../_src/demos/core/ActionIcon/ActionIcon.demo.disabledTooltip";
import * as m008 from "../_src/demos/core/ActionIcon/ActionIcon.demo.loading";
import * as m009 from "../_src/demos/core/ActionIcon/ActionIcon.demo.loaderProps";
import * as m010 from "../_src/demos/core/ActionIcon/ActionIcon.demo.customVariant";
import * as m011 from "../_src/demos/core/ActionIcon/ActionIcon.demo.variantColorsResolver";
import * as m012 from "../_src/demos/core/ActionIcon/ActionIcon.demo.autoContrast";
import * as m013 from "../_src/demos/core/ActionIcon/ActionIcon.demo.customSize";
import * as m014 from "../_src/demos/core/ActionIcon/ActionIcon.demo.group";
import * as m015 from "../_src/demos/core/ActionIcon/ActionIcon.demo.groupSection";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "size": m002.size,
  "inputSize": m003.inputSize,
  "disabled": m004.disabled,
  "disabledLink": m005.disabledLink,
  "disabledStyles": m006.disabledStyles,
  "disabledTooltip": m007.disabledTooltip,
  "loading": m008.loading,
  "loaderProps": m009.loaderProps,
  "customVariant": m010.customVariant,
  "variantColorsResolver": m011.variantColorsResolver,
  "autoContrast": m012.autoContrast,
  "customSize": m013.customSize,
  "group": m014.group,
  "groupSection": m015.groupSection,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
