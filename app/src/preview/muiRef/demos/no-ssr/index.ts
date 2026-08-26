import type { DemoSet } from "../types";
import D0 from "./00-simple-no-ssr";
import D1 from "./01-frame-deferring";

export const DEMOS: DemoSet = {
  "SimpleNoSsr": D0,
  "FrameDeferring": D1,
};

export const SKIPPED: Record<string, string> = {
};
