import type { DemoSet } from "../types";
import D0 from "./00-base";
import D1 from "./01-with-icon";
import D2 from "./02-other-status";
import D3 from "./03-custom-status-render";
import D4 from "./04-custom-render-type";
import D5 from "./05-custom-size";
import D6 from "./06-custom-color";
import D7 from "./07-download-qrcode";
import D8 from "./08-error-level";
import D9 from "./09-advanced-usage";
import D10 from "./10-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "base": D0,
  "With Icon": D1,
  "other status": D2,
  "custom status render": D3,
  "Custom Render Type": D4,
  "Custom Size": D5,
  "Custom Color": D6,
  "Download QRCode": D7,
  "Error Level": D8,
  "Advanced Usage": D9,
  "Custom semantic dom styling": D10,
};

export const SKIPPED: Record<string, string> = {
};
