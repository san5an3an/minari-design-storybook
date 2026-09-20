/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것.
 * 데모 실물은 `demos/_src/`(업스트림 배치 그대로 미러) 에 있다 — 그래야 그 파일들의
 * `./_base`·`../../../shared` 가 원문 그대로 풀린다. 여기는 열쇠↔모듈 표만 둔다. */
import * as m000 from "../_src/demos/core/Button/Button.demo.configurator";
import * as m001 from "../_src/demos/core/Button/Button.demo.fullWidth";
import * as m002 from "../_src/demos/core/Button/Button.demo.sections";
import * as m003 from "../_src/demos/core/Button/Button.demo.sectionsJustify";
import * as m004 from "../_src/demos/core/Button/Button.demo.compact";
import * as m005 from "../_src/demos/core/Button/Button.demo.gradient";
import * as m006 from "../_src/demos/core/Button/Button.demo.disabled";
import * as m007 from "../_src/demos/core/Button/Button.demo.disabledLink";
import * as m008 from "../_src/demos/core/Button/Button.demo.disabledStyles";
import * as m009 from "../_src/demos/core/Button/Button.demo.disabledTooltip";
import * as m010 from "../_src/demos/core/Button/Button.demo.loading";
import * as m011 from "../_src/demos/core/Button/Button.demo.loaderProps";
import * as m012 from "../_src/demos/styles/Styles.demo.dataAttributes";
import * as m013 from "../_src/demos/core/Button/Button.demo.customVariant";
import * as m014 from "../_src/demos/theming/Theming.demo.variantColorsResolver";
import * as m015 from "../_src/demos/core/Button/Button.demo.autoContrast";
import * as m016 from "../_src/demos/core/Button/Button.demo.group";
import * as m017 from "../_src/demos/core/Button/Button.demo.groupSection";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "fullWidth": m001.fullWidth,
  "sections": m002.sections,
  "sectionsJustify": m003.sectionsJustify,
  "compact": m004.compact,
  "gradient": m005.gradient,
  "disabled": m006.disabled,
  "disabledLink": m007.disabledLink,
  "disabledStyles": m008.disabledStyles,
  "disabledTooltip": m009.disabledTooltip,
  "loading": m010.loading,
  "loaderProps": m011.loaderProps,
  "dataAttributes": m012.dataAttributes,
  "customVariant": m013.customVariant,
  "variantColorsResolver": m014.variantColorsResolver,
  "autoContrast": m015.autoContrast,
  "group": m016.group,
  "groupSection": m017.groupSection,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
