import * as m000 from "./prose-basic";
import * as m001 from "./prose-with-sizes";
import * as m002 from "./prose-with-blockquote";
import * as m003 from "./prose-with-list";
import * as m004 from "./prose-with-react-markdown";
import * as m005 from "./prose-with-table";

export const DEMOS = {
  "prose-basic": m000.ProseBasic,
  "prose-with-sizes": m001.ProseWithSizes,
  "prose-with-blockquote": m002.ProseWithBlockquote,
  "prose-with-list": m003.ProseWithList,
  "prose-with-react-markdown": m004.ProseWithReactMarkdown,
  "prose-with-table": m005.ProseWithTable,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
