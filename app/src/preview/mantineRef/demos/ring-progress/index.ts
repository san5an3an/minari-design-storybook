/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./configurator";
import * as m002 from "./tooltip";
import * as m003 from "./rootColor";
import * as m004 from "./sectionsProps";
import * as m005 from "./transitions";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "tooltip": m002.tooltip,
  "rootColor": m003.rootColor,
  "sectionsProps": m004.sectionsProps,
  "transitions": m005.transitions,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "label": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
