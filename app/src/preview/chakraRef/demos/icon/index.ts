import * as m000 from "./icon-basic";
import * as m001 from "./icon-with-react-icon";
import * as m002 from "./icon-with-custom-svg";
import * as m003 from "./icon-with-create-icon";

export const DEMOS = {
  "icon-basic": m000.IconBasic,
  "icon-with-react-icon": m001.IconWithReactIcon,
  "icon-with-custom-svg": m002.IconWithCustomSvg,
  "icon-with-create-icon": m003.IconWithCreateIcon,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
