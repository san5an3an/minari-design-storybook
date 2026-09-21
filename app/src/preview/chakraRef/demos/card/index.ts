import * as m000 from "./card-basic";
import * as m001 from "./card-with-variants";
import * as m002 from "./card-with-form";
import * as m003 from "./card-with-sizes";
import * as m004 from "./card-with-image";
import * as m005 from "./card-horizontal";
import * as m006 from "./card-with-avatar";

export const DEMOS = {
  "card-basic": m000.CardBasic,
  "card-with-variants": m001.CardWithVariants,
  "card-with-form": m002.CardWithForm,
  "card-with-sizes": m003.CardWithSizes,
  "card-with-image": m004.CardWithImage,
  "card-horizontal": m005.CardHorizontal,
  "card-with-avatar": m006.CardWithAvatar,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
