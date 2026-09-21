/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./presence-fade";
import * as m001 from "./presence-scale-fade";
import * as m002 from "./presence-slide-fade";
import * as m003 from "./presence-slide";
import * as m004 from "./presence-lazy-mount";
import * as m005 from "./presence-unmount-on-exit";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "presence-fade": m000.PresenceFade,
  "presence-scale-fade": m001.PresenceScaleFade,
  "presence-slide-fade": m002.PresenceSlideFade,
  "presence-slide": m003.PresenceSlide,
  "presence-lazy-mount": m004.PresenceLazyMount,
  "presence-unmount-on-exit": m005.PresenceUnmountOnExit,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
