import m000 from "./Basic";
import m001 from "./BodyOnly";
import m002 from "./BodyShorthand";
import m003 from "./Text";
import m004 from "./ListGroups";
import m005 from "./ListGroupWithHeader";
import m006 from "./KitchenSink";
import m007 from "./WithHeader";
import m008 from "./WithHeaderStyled";
import m009 from "./WithHeaderAndQuote";
import m010 from "./HeaderAndFooter";
import m011 from "./ImageAndText";
import m012 from "./ImgOverlay";
import m013 from "./NavTabs";
import m014 from "./NavPills";
import m015 from "./BgColor";
import m016 from "./Border";
import m017 from "./Group";
import m018 from "./Grid";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "BodyOnly": m001,
  "BodyShorthand": m002,
  "Text": m003,
  "ListGroups": m004,
  "ListGroupWithHeader": m005,
  "KitchenSink": m006,
  "WithHeader": m007,
  "WithHeaderStyled": m008,
  "WithHeaderAndQuote": m009,
  "HeaderAndFooter": m010,
  "ImageAndText": m011,
  "ImgOverlay": m012,
  "NavTabs": m013,
  "NavPills": m014,
  "BgColor": m015,
  "Border": m016,
  "Group": m017,
  "Grid": m018,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
