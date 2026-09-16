/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것.
 *
 * ⚠️ 경로를 템플릿(`import(`./${slug}`)`)으로 만들지 않는다 — 번들러가 폴더 전체를
 *    끌어와 안 쓰는 파일까지 빌드에 넣는다. 슬러그마다 명시한 import 함수로 둔다.
 */
const LOADERS: Record<string, () => Promise<unknown>> = {
  "breakpoints": () => import("./breakpoints/index"),
  "grid": () => import("./grid/index"),
  "stack": () => import("./stack/index"),
  "overview": () => import("./overview/index"),
  "form-control": () => import("./form-control/index"),
  "form-text": () => import("./form-text/index"),
  "select": () => import("./select/index"),
  "checks-radios": () => import("./checks-radios/index"),
  "range": () => import("./range/index"),
  "input-group": () => import("./input-group/index"),
  "floating-labels": () => import("./floating-labels/index"),
  "layout": () => import("./layout/index"),
  "validation": () => import("./validation/index"),
  "accordion": () => import("./accordion/index"),
  "alerts": () => import("./alerts/index"),
  "badge": () => import("./badge/index"),
  "breadcrumb": () => import("./breadcrumb/index"),
  "button-group": () => import("./button-group/index"),
  "buttons": () => import("./buttons/index"),
  "cards": () => import("./cards/index"),
  "carousel": () => import("./carousel/index"),
  "close-button": () => import("./close-button/index"),
  "dropdowns": () => import("./dropdowns/index"),
  "figures": () => import("./figures/index"),
  "images": () => import("./images/index"),
  "list-group": () => import("./list-group/index"),
  "modal": () => import("./modal/index"),
  "navbar": () => import("./navbar/index"),
  "navs": () => import("./navs/index"),
  "offcanvas": () => import("./offcanvas/index"),
  "overlays": () => import("./overlays/index"),
  "pagination": () => import("./pagination/index"),
  "placeholder": () => import("./placeholder/index"),
  "progress": () => import("./progress/index"),
  "spinners": () => import("./spinners/index"),
  "table": () => import("./table/index"),
  "tabs": () => import("./tabs/index"),
  "toasts": () => import("./toasts/index"),
  "transitions": () => import("./transitions/index"),
  "ratio": () => import("./ratio/index"),
  "restart-ui": () => import("./restart-ui/index"),
};

/** 이 베이스 슬러그가 아니면 `null`. 빈 객체를 주지 않는다 — 둘은 다른 뜻이다. */
export function loadDemos(slug: string): Promise<unknown> | null {
  const load = LOADERS[slug];
  return load ? load() : null;
}
