import * as m003 from "./scroll-area-horizontal";
import * as m005 from "./scroll-area-with-scroll-shadow";
import * as m008 from "./scroll-area-virtualization";
import * as m012 from "./scroll-area-with-rtl";
import * as m013 from "./scroll-area-with-menu";

export const DEMOS = {
  "scroll-area-horizontal": m003.ScrollAreaHorizontal,
  "scroll-area-with-scroll-shadow": m005.ScrollAreaWithScrollShadow,
  "scroll-area-virtualization": m008.ScrollAreaVirtualization,
  "scroll-area-with-rtl": m012.ScrollAreaWithRtl,
  "scroll-area-with-menu": m013.ScrollAreaWithMenu,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "scroll-area-basic": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-with-variants": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-with-sizes": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-both-directions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-with-thumb-styling": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-stick-to-bottom": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: use-stick-to-bottom"},
  "scroll-area-with-store": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-scroll-to-side": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "scroll-area-scroll-to-position": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
};
