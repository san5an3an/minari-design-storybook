/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./blockquote.root";
import * as m001 from "./blockquote.solidBackground";
import * as m002 from "./blockquote.icon";
import * as m003 from "./blockquote.paragraphContext";
import * as m004 from "./blockquote.userTestimonial";
import * as m005 from "./blockquote.userReview";
import * as m006 from "./blockquote.left";
import * as m007 from "./blockquote.center";
import * as m008 from "./blockquote.right";
import * as m009 from "./blockquote.small";
import * as m010 from "./blockquote.medium";
import * as m011 from "./blockquote.large";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "blockquote.root": m000.root,
  "blockquote.solidBackground": m001.solidBackground,
  "blockquote.icon": m002.icon,
  "blockquote.paragraphContext": m003.paragraphContext,
  "blockquote.userTestimonial": m004.userTestimonial,
  "blockquote.userReview": m005.userReview,
  "blockquote.left": m006.left,
  "blockquote.center": m007.center,
  "blockquote.right": m008.right,
  "blockquote.small": m009.small,
  "blockquote.medium": m010.medium,
  "blockquote.large": m011.large,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
