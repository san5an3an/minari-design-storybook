import * as m000 from "./card.root";
import * as m001 from "./card.CTAButton";
import * as m002 from "./card.withImage";
import * as m003 from "./card.renderImage";
import * as m004 from "./card.horizontal";
import * as m005 from "./card.userProfile";
import * as m006 from "./card.withForm";
import * as m007 from "./card.eCommerce";
import * as m008 from "./card.CTA";
import * as m009 from "./card.withList";
import * as m010 from "./card.pricing";
import * as m011 from "./card.crypto";

export const DEMOS: Record<string, { component: unknown }> = {
  "card.root": m000.root,
  "card.CTAButton": m001.CTAButton,
  "card.withImage": m002.withImage,
  "card.renderImage": m003.renderImage,
  "card.horizontal": m004.horizontal,
  "card.userProfile": m005.userProfile,
  "card.withForm": m006.withForm,
  "card.eCommerce": m007.eCommerce,
  "card.CTA": m008.CTA,
  "card.withList": m009.withList,
  "card.pricing": m010.pricing,
  "card.crypto": m011.crypto,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
