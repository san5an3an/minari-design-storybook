import * as m000 from "../_src/demos/core/Notification/Notification.demo.configurator";
import * as m001 from "../_src/demos/core/Notification/Notification.demo.icon";
import * as m002 from "../_src/demos/core/Notification/Notification.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "icon": m001.icon,
  "stylesApi": m002.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
