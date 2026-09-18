/* 자동 생성 — tools/gen_mantine_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./usage";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./orientation";

/** key(공식 `<Demo data={Group.name}>` 의 `.name`) → 공식 export `MantineDemo`. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "variants": m001.variants,
  "sizes": m002.sizes,
  "orientation": m003.orientation,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "labels": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
