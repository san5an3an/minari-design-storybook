/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-chips";
import D1 from "./01-clickable-chips";
import D2 from "./02-deletable-chips";
import D3 from "./03-clickable-and-deletable-chips";
import D4 from "./04-clickable-link-chips";
import D5 from "./05-custom-delete-icon-chips";
import D6 from "./06-avatar-chips";
import D7 from "./07-icon-chips";
import D8 from "./08-color-chips";
import D9 from "./09-sizes-chips";
import D10 from "./10-multiline-chips";
import D11 from "./11-chips-array";

export const DEMOS: DemoSet = {
  "BasicChips": D0,
  "ClickableChips": D1,
  "DeletableChips": D2,
  "ClickableAndDeletableChips": D3,
  "ClickableLinkChips": D4,
  "CustomDeleteIconChips": D5,
  "AvatarChips": D6,
  "IconChips": D7,
  "ColorChips": D8,
  "SizesChips": D9,
  "MultilineChips": D10,
  "ChipsArray": D11,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "ChipsPlayground": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
};
