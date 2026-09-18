import * as m000 from "./scrollIntoView";
import * as m001 from "./maxHeight";
import * as m002 from "./autosizePopover";

export const DEMOS: Record<string, { component: unknown }> = {
  "scrollIntoView": m000.scrollIntoView,
  "maxHeight": m001.maxHeight,
  "autosizePopover": m002.autosizePopover,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "horizontal": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "scrollbars": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "scrollPosition": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "scrollTo": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./_content"},
  "stylesApi": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./ScrollArea.demo.stylesApi.module.css, ./_content"},
};
