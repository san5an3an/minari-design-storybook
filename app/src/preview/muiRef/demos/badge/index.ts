/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-badge-intro";
import D1 from "./01-badge-list-item";
import D2 from "./02-simple-badge";
import D3 from "./03-dot-badge";
import D4 from "./04-badge-visibility";
import D5 from "./05-show-zero-badge";
import D6 from "./06-badge-max";
import D7 from "./07-color-badge";
import D8 from "./09-badge-overlap";
import D9 from "./10-customized-badges";

export const DEMOS: DemoSet = {
  "BadgeIntro": D0,
  "BadgeListItem": D1,
  "SimpleBadge": D2,
  "DotBadge": D3,
  "BadgeVisibility": D4,
  "ShowZeroBadge": D5,
  "BadgeMax": D6,
  "ColorBadge": D7,
  "BadgeOverlap": D8,
  "CustomizedBadges": D9,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "BadgeAlignment": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
};
