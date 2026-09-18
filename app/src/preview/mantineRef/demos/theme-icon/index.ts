export const DEMOS: Record<string, { component: unknown }> = {
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "usage": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "gradient": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ../../../shared"},
  "variantColorsResolver": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "autoContrast": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
