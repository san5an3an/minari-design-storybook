export const DEMOS: Record<string, { component: unknown }> = {
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "segmented": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./FloatingIndicator.demo.segmented.module.css"},
  "direction": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./FloatingIndicator.demo.direction.module.css"},
  "tabs": {"code": "local-module-missing", "detail": "상대 경로 import(데모 파일 한 장만 복사해 형제 모듈이 없음): ./FloatingIndicator.demo.tabs.module.css"},
};
