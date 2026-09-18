/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./download-trigger-basic";
import * as m001 from "./download-trigger-svg";
import * as m002 from "./download-trigger-with-promise";
import * as m003 from "./download-trigger-with-file-size";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "download-trigger-basic": m000.DownloadTriggerBasic,
  "download-trigger-svg": m001.DownloadTriggerSvg,
  "download-trigger-with-promise": m002.DownloadTriggerWithPromise,
  "download-trigger-with-file-size": m003.DownloadTriggerWithFileSize,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
