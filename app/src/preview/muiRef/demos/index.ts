/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것.
 *
 * ⚠️ 전부 미리 싣지 않는다. 예제 모듈 하나가 MUI 컴포넌트 십수 종을 끌고 오므로,
 *    한 화면을 보는 사람이 60종의 무게를 지면 안 된다. 동적 import 로 늦게 부른다.
 *
 * ⚠️ **경로를 글자로 박지 않고 값으로 만든다** (`import(`./${slug}`)`).
 *    이러면 타입 검사기가 이 고리를 못 따라가서, **공식 예제 491개가 우리
 *    프로그램에 안 들어온다.** 그게 목적이다 —
 *
 *      우리 코드    엄격하게 본다 (`verbatimModuleSyntax`·`noUnusedParameters`)
 *      남의 예제    **맞게 도는지만** 본다 (demos/tsconfig.json 이 따로 본다)
 *
 *    공식 예제는 MUI 저장소의 설정으로 쓰여 있어서 우리 집 규칙에 안 맞는다 —
 *    실측 2026-08-26: 타입 전용 import 72건 · 안 쓰는 인자 70건. 전부 **스타일**
 *    이지 결함이 아니다. 그걸 맞추려면 예제 본문을 고쳐야 하는데, 그러면 이
 *    생성기의 첫 번째 규칙(**본문을 고치지 않는다**)이 깨진다.
 *    그래서 자를 두 개 쓴다. 예제가 **진짜로 안 도는 것**은 두 번째 자가 잡는다.
 */
import type { DemoModule } from "./types";

export type { DemoProps, DemoSet, ToneColor, DemoModule } from "./types";

/** 세울 수 있는 예제가 하나라도 있는 슬러그. 없는 이름은 `null` 로 돌려준다. */
const SLUGS = new Set<string>([
  "accordion",
  "alert",
  "app-bar",
  "autocomplete",
  "avatar",
  "backdrop",
  "badge",
  "bottom-navigation",
  "box",
  "breadcrumbs",
  "button-group",
  "button",
  "card",
  "charts",
  "checkbox",
  "chip",
  "click-away-listener",
  "container",
  "data-grid",
  "date-pickers",
  "dialog",
  "divider",
  "drawer",
  "floating-action-button",
  "grid",
  "image-list",
  "link",
  "list",
  "masonry",
  "menu",
  "menubar",
  "modal",
  "no-ssr",
  "number-field",
  "pagination",
  "paper",
  "popover",
  "popper",
  "portal",
  "progress",
  "radio-button",
  "rating",
  "select",
  "skeleton",
  "slider",
  "snackbar",
  "speed-dial",
  "stack",
  "stepper",
  "switch",
  "table",
  "tabs",
  "text-field",
  "textarea-autosize",
  "timeline",
  "toggle-button",
  "tooltip",
  "transfer-list",
  "transitions",
  "tree-view",
  "typography",
  "use-media-query",
]);

/** 못 세우는 슬러그면 `null` — 빈 객체를 주지 않는다. 둘은 다른 뜻이다. */
export function loadDemos(slug: string): Promise<DemoModule> | null {
  if (!SLUGS.has(slug)) return null;
  return import(`./${slug}`).then((m) => ({
    demos: m.DEMOS,
    skipped: m.SKIPPED,
  }) as DemoModule);
}
