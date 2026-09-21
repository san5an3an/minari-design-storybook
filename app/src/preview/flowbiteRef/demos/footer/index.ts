import * as m000 from "./footer.root";
import * as m001 from "./footer.withLogo";
import * as m002 from "./footer.socialMediaIcons";
import * as m003 from "./footer.sitemapLinks";

export const DEMOS: Record<string, { component: unknown }> = {
  "footer.root": m000.root,
  "footer.withLogo": m001.withLogo,
  "footer.socialMediaIcons": m002.socialMediaIcons,
  "footer.sitemapLinks": m003.sitemapLinks,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
