import * as m000 from "./download-trigger-basic";
import * as m001 from "./download-trigger-svg";
import * as m002 from "./download-trigger-with-promise";
import * as m003 from "./download-trigger-with-file-size";

export const DEMOS = {
  "download-trigger-basic": m000.DownloadTriggerBasic,
  "download-trigger-svg": m001.DownloadTriggerSvg,
  "download-trigger-with-promise": m002.DownloadTriggerWithPromise,
  "download-trigger-with-file-size": m003.DownloadTriggerWithFileSize,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
