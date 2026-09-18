/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./colors";
import * as m001 from "./position";
import * as m002 from "./pull";
import * as m003 from "./inverted";
import * as m004 from "./placement";
import * as m005 from "./disabled";
import * as m006 from "./keyboardActivation";
import * as m007 from "./deactivate";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "colors": m000.colors,
  "position": m001.position,
  "pull": m002.pull,
  "inverted": m003.inverted,
  "placement": m004.placement,
  "disabled": m005.disabled,
  "keyboardActivation": m006.keyboardActivation,
  "deactivate": m007.deactivate,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "tabs": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./FloatingIndicator.demo.tabs.module.css"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api, @tabler/icons-react"},
  "customize": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Tabs.demo.customize.module.css"},
};
