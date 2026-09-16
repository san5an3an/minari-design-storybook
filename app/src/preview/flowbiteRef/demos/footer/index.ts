import * as m000 from "./footer.root";
import * as m001 from "./footer.withLogo";

export const DEMOS: Record<string, { component: unknown }> = {
  "footer.root": m000.root,
  "footer.withLogo": m001.withLogo,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "footer.socialMediaIcons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "footer.sitemapLinks": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
