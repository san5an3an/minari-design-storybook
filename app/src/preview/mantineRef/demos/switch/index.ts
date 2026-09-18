/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./configurator";
import * as m001 from "./labels";
import * as m002 from "./tooltip";
import * as m003 from "./groupConfigurator";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "labels": m001.labels,
  "tooltip": m002.tooltip,
  "groupConfigurator": m003.groupConfigurator,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "iconLabels": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "thumbIcon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "styles": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./Switch.demo.styles.module.css"},
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
};
