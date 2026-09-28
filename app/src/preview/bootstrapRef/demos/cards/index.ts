/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
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

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
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

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
