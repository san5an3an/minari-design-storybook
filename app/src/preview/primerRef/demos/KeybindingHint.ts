// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/KeybindingHint/KeybindingHint.features.stories__OnEmphasis";
import * as m1 from "./_src/src/KeybindingHint/KeybindingHint.features.stories__OnPrimary";
export const demos = {
  "OnEmphasis": composeStory(m0.default, m0["OnEmphasis"], "OnEmphasis"),
  "OnPrimary": composeStory(m1.default, m1["OnPrimary"], "OnPrimary"),
};
export const skipped = {
  "Platforms": {"code":"private-api","detail":"PlatformOverrideProvider — 설치본 dist 에 그 이름의 선언이 없음(KeybindingHint/platform.ts)"},
};
