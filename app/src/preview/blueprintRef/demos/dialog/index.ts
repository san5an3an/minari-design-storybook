import * as m000 from "./DialogExample";
import * as m001 from "./MultistepDialogExample";

export const DEMOS = {
  "DialogExample": m000.DialogExample,
  "MultistepDialogExample": m001.MultistepDialogExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
