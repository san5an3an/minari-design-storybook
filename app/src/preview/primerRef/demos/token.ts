// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Token/Token.stories__Default";
import * as m2 from "./_src/src/Token/Token.features.stories__TokenWithLeadingVisual";
import * as m4 from "./_src/src/Token/Token.features.stories__DefaultIssueLabelToken";
import * as m7 from "./_src/src/Token/Token.features.stories__SmallToken";
import * as m8 from "./_src/src/Token/Token.features.stories__LargeToken";
import * as m9 from "./_src/src/Token/Token.features.stories__XLargeToken";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "TokenWithLeadingVisual": composeStory(m2.default, m2["TokenWithLeadingVisual"], "TokenWithLeadingVisual"),
  "DefaultIssueLabelToken": composeStory(m4.default, m4["DefaultIssueLabelToken"], "DefaultIssueLabelToken"),
  "SmallToken": composeStory(m7.default, m7["SmallToken"], "SmallToken"),
  "LargeToken": composeStory(m8.default, m8["LargeToken"], "LargeToken"),
  "XLargeToken": composeStory(m9.default, m9["XLargeToken"], "XLargeToken"),
};
export const skipped = {
  "InteractiveToken": {"code":"package-missing","detail":"storybook/actions"},
  "TokenWithOnRemoveFn": {"code":"package-missing","detail":"storybook/actions"},
  "InteractiveIssueLabelToken": {"code":"package-missing","detail":"storybook/actions"},
  "IssueLabelTokenWithOnRemoveFn": {"code":"package-missing","detail":"storybook/actions"},
  "IssueLabelTokenCustomColors": {"code":"package-missing","detail":"storybook/actions"},
};
