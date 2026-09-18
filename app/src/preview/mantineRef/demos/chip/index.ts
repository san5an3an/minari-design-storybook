/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./configurator";
import * as m001 from "./states";
import * as m002 from "./tooltip";
import * as m003 from "./group";
import * as m004 from "./deselect";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "tooltip": m002.tooltip,
  "group": m003.group,
  "deselect": m004.deselect,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "icon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
