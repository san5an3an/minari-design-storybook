/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./button.root";
import * as m001 from "./button.pill";
import * as m002 from "./button.gradientMono";
import * as m003 from "./button.gradientDuo";
import * as m004 from "./button.outline";
import * as m005 from "./button.sizes";
import * as m006 from "./button.withLabel";
import * as m007 from "./button.loading";
import * as m008 from "./button.disabled";
import * as m009 from "./button.polymorph";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "button.root": m000.root,
  "button.pill": m001.pill,
  "button.gradientMono": m002.gradientMono,
  "button.gradientDuo": m003.gradientDuo,
  "button.outline": m004.outline,
  "button.sizes": m005.sizes,
  "button.withLabel": m006.withLabel,
  "button.loading": m007.loading,
  "button.disabled": m008.disabled,
  "button.polymorph": m009.polymorph,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "button.withIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "button.iconOnly": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
