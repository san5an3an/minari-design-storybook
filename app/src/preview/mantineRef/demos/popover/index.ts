/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./hover";
import * as m002 from "./form";
import * as m003 from "./inline";
import * as m004 from "./sameWidth";
import * as m005 from "./arrow";
import * as m006 from "./overlay";
import * as m007 from "./disabled";
import * as m008 from "./clickOutsideEvents";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "hover": m001.hover,
  "form": m002.form,
  "inline": m003.inline,
  "sameWidth": m004.sameWidth,
  "arrow": m005.arrow,
  "overlay": m006.overlay,
  "disabled": m007.disabled,
  "clickOutsideEvents": m008.clickOutsideEvents,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "offset": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "offsetAxis": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "portalChildren": {"code": "package-missing", "detail": "미설치: @mantine/dates"},
};
