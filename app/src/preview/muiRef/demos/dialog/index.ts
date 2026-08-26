/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-simple-dialog-demo";
import D1 from "./01-alert-dialog";
import D2 from "./02-alert-dialog-slide";
import D3 from "./03-form-dialog";
import D4 from "./04-customized-dialogs";
import D5 from "./05-full-screen-dialog";
import D6 from "./06-max-width-dialog";
import D7 from "./07-responsive-dialog";
import D8 from "./08-confirmation-dialog";
import D9 from "./09-cookies-banner";
import D10 from "./10-draggable-dialog";
import D11 from "./11-scroll-dialog";

export const DEMOS: DemoSet = {
  "SimpleDialogDemo": D0,
  "AlertDialog": D1,
  "AlertDialogSlide": D2,
  "FormDialog": D3,
  "CustomizedDialogs": D4,
  "FullScreenDialog": D5,
  "MaxWidthDialog": D6,
  "ResponsiveDialog": D7,
  "ConfirmationDialog": D8,
  "CookiesBanner": D9,
  "DraggableDialog": D10,
  "ScrollDialog": D11,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
