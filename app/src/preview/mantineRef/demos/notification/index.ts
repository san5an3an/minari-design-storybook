import * as m000 from "../_src/demos/core/Notification/Notification.demo.configurator";
import * as m001 from "../_src/demos/core/Notification/Notification.demo.icon";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "icon": m001.icon,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
