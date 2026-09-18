/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./avatar-basic";
import * as m001 from "./avatar-with-sizes";
import * as m002 from "./avatar-with-variants";
import * as m003 from "./avatar-with-shape";
import * as m004 from "./avatar-with-colors";
import * as m005 from "./avatar-with-fallback";
import * as m006 from "./avatar-with-random-color";
import * as m007 from "./avatar-with-ring";
import * as m008 from "./avatar-with-group";
import * as m009 from "./avatar-group-with-stacking";
import * as m010 from "./avatar-persona";
import * as m011 from "./avatar-with-badge";
import * as m012 from "./avatar-with-overflow";
import * as m013 from "./avatar-with-store";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "avatar-basic": m000.AvatarBasic,
  "avatar-with-sizes": m001.AvatarWithSizes,
  "avatar-with-variants": m002.AvatarWithVariants,
  "avatar-with-shape": m003.AvatarWithShape,
  "avatar-with-colors": m004.AvatarWithColors,
  "avatar-with-fallback": m005.AvatarWithFallback,
  "avatar-with-random-color": m006.AvatarWithRandomColor,
  "avatar-with-ring": m007.AvatarWithRing,
  "avatar-with-group": m008.AvatarWithGroup,
  "avatar-group-with-stacking": m009.AvatarGroupWithStacking,
  "avatar-persona": m010.AvatarPersona,
  "avatar-with-badge": m011.AvatarWithBadge,
  "avatar-with-overflow": m012.AvatarWithOverflow,
  "avatar-with-store": m013.AvatarWithStore,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
