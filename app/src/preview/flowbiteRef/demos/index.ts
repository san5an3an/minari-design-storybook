/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것.
 *
 * ⚠️ 경로를 템플릿(`import(`./${slug}`)`)으로 만들지 않는다 — 번들러가 폴더 전체를
 *    끌어와 안 쓰는 파일까지 빌드에 넣는다. 슬러그마다 명시한 import 함수로 둔다.
 */
const LOADERS: Record<string, () => Promise<unknown>> = {
  "accordion": () => import("./accordion/index"),
  "alert": () => import("./alert/index"),
  "avatar": () => import("./avatar/index"),
  "badge": () => import("./badge/index"),
  "banner": () => import("./banner/index"),
  "blockquote": () => import("./blockquote/index"),
  "breadcrumb": () => import("./breadcrumb/index"),
  "button": () => import("./button/index"),
  "button-group": () => import("./button-group/index"),
  "card": () => import("./card/index"),
  "carousel": () => import("./carousel/index"),
  "clipboard": () => import("./clipboard/index"),
  "datepicker": () => import("./datepicker/index"),
  "drawer": () => import("./drawer/index"),
  "dropdown": () => import("./dropdown/index"),
  "file-input": () => import("./file-input/index"),
  "floating-label": () => import("./floating-label/index"),
  "footer": () => import("./footer/index"),
  "forms": () => import("./forms/index"),
  "hr": () => import("./hr/index"),
  "kbd": () => import("./kbd/index"),
  "list": () => import("./list/index"),
  "list-group": () => import("./list-group/index"),
  "mega-menu": () => import("./mega-menu/index"),
  "modal": () => import("./modal/index"),
  "navbar": () => import("./navbar/index"),
  "pagination": () => import("./pagination/index"),
  "popover": () => import("./popover/index"),
  "progress": () => import("./progress/index"),
  "rating": () => import("./rating/index"),
  "sidebar": () => import("./sidebar/index"),
  "spinner": () => import("./spinner/index"),
  "table": () => import("./table/index"),
  "tabs": () => import("./tabs/index"),
  "timeline": () => import("./timeline/index"),
  "toast": () => import("./toast/index"),
  "tooltip": () => import("./tooltip/index"),
};

/** 이 베이스 슬러그가 아니면 `null`. 빈 객체를 주지 않는다 — 둘은 다른 뜻이다. */
export function loadDemos(slug: string): Promise<unknown> | null {
  const load = LOADERS[slug];
  return load ? load() : null;
}
