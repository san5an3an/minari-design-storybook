/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./blockquote-basic";
import * as m001 from "./blockquote-with-cite";
import * as m002 from "./blockquote-with-colors";
import * as m003 from "./blockquote-with-variants";
import * as m004 from "./blockquote-with-icon";
import * as m005 from "./blockquote-with-custom-icon";
import * as m006 from "./blockquote-with-justify";
import * as m007 from "./blockquote-with-avatar";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "blockquote-basic": m000.BlockquoteBasic,
  "blockquote-with-cite": m001.BlockquoteWithCite,
  "blockquote-with-colors": m002.BlockquoteWithColors,
  "blockquote-with-variants": m003.BlockquoteWithVariants,
  "blockquote-with-icon": m004.BlockquoteWithIcon,
  "blockquote-with-custom-icon": m005.BlockquoteWithCustomIcon,
  "blockquote-with-justify": m006.BlockquoteWithJustify,
  "blockquote-with-avatar": m007.BlockquoteWithAvatar,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
