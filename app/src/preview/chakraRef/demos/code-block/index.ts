/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./code-block-basic";
import * as m001 from "./code-block-with-sizes";
import * as m002 from "./code-block-with-title";
import * as m003 from "./code-block-with-copy-button";
import * as m004 from "./code-block-with-line-numbers";
import * as m005 from "./code-block-with-line-highlight";
import * as m006 from "./code-block-with-line-focus";
import * as m007 from "./code-block-with-diff";
import * as m008 from "./code-block-with-max-lines";
import * as m009 from "./code-block-with-language-switcher";
import * as m010 from "./code-block-with-floating-copy-button";
import * as m011 from "./code-block-with-tabs";
import * as m012 from "./code-block-with-tabs-sync";
import * as m013 from "./code-block-with-themes";
import * as m014 from "./code-block-with-word-wrap";
import * as m015 from "./code-block-with-line-numbers-word-wrap";
import * as m016 from "./code-block-with-highlight-js";
import * as m017 from "./code-block-plain-text";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "code-block-basic": m000.CodeBlockBasic,
  "code-block-with-sizes": m001.CodeBlockWithSizes,
  "code-block-with-title": m002.CodeBlockWithTitle,
  "code-block-with-copy-button": m003.CodeBlockWithCopyButton,
  "code-block-with-line-numbers": m004.CodeBlockWithLineNumbers,
  "code-block-with-line-highlight": m005.CodeBlockWithLineHighlight,
  "code-block-with-line-focus": m006.CodeBlockWithLineFocus,
  "code-block-with-diff": m007.CodeBlockWithDiff,
  "code-block-with-max-lines": m008.CodeBlockWithMaxLines,
  "code-block-with-language-switcher": m009.CodeBlockWithLanguageSwitcher,
  "code-block-with-floating-copy-button": m010.CodeBlockWithFloatingCopyButton,
  "code-block-with-tabs": m011.CodeBlockWithTabs,
  "code-block-with-tabs-sync": m012.CodeBlockWithTabsSync,
  "code-block-with-themes": m013.CodeBlockWithThemes,
  "code-block-with-word-wrap": m014.CodeBlockWithWordWrap,
  "code-block-with-line-numbers-word-wrap": m015.CodeBlockWithLineNumbersWordWrap,
  "code-block-with-highlight-js": m016.CodeBlockWithHighlightJs,
  "code-block-plain-text": m017.CodeBlockPlainText,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
