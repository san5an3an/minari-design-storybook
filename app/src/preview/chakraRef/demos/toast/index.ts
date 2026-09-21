import * as m000 from "./toaster-basic";
import * as m001 from "./toaster-closable";
import * as m002 from "./toaster-with-external-close";
import * as m003 from "./toaster-with-status";
import * as m004 from "./toaster-with-action";
import * as m005 from "./toaster-persistent";
import * as m006 from "./toaster-with-promise";
import * as m007 from "./toaster-with-update";
import * as m008 from "./toaster-with-duration";
import * as m009 from "./toaster-pause-and-play";
import * as m010 from "./toaster-lifecycle";

export const DEMOS = {
  "toaster-basic": m000.ToasterBasic,
  "toaster-closable": m001.ToasterClosable,
  "toaster-with-external-close": m002.ToasterWithExternalClose,
  "toaster-with-status": m003.ToasterWithStatus,
  "toaster-with-action": m004.ToasterWithAction,
  "toaster-persistent": m005.ToasterPersistent,
  "toaster-with-promise": m006.ToasterWithPromise,
  "toaster-with-update": m007.ToasterWithUpdate,
  "toaster-with-duration": m008.ToasterWithDuration,
  "toaster-pause-and-play": m009.ToasterPauseAndPlay,
  "toaster-lifecycle": m010.ToasterLifecycle,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
