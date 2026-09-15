/* 자동 생성 — tools/gen_blueprint_demos.py. 원천 = 태그 packages/docs-data/nav.json 의 core. */
/** 공식 절 6 — 절 이름·차례 그대로. INDEX 에 없는 공식 페이지는 뺐다(_meta.json navDropped). */
export const GROUPS: Record<string, string[]> = {
  "components": [
    "breadcrumbs",
    "buttons",
    "button-group",
    "callout",
    "card",
    "card-list",
    "control-card",
    "collapse",
    "divider",
    "editable-text",
    "entity-title",
    "html",
    "html-table",
    "hotkeys-target",
    "icon",
    "link",
    "menu",
    "navbar",
    "non-ideal-state",
    "overflow-list",
    "panel-stack",
    "progress-bar",
    "resize-sensor",
    "section",
    "skeleton",
    "spinner",
    "tabs",
    "tag",
    "compound-tag",
    "text",
    "tree"
  ],
  "form-controls": [
    "form-group",
    "control-group",
    "label",
    "checkbox",
    "radio",
    "html-select",
    "segmented-control",
    "sliders",
    "switch"
  ],
  "form-inputs": [
    "input-group",
    "text-area",
    "file-input",
    "numeric-input",
    "tag-input"
  ],
  "overlays": [
    "overlay",
    "overlay2",
    "portal",
    "alert",
    "context-menu",
    "context-menu-popover",
    "dialog",
    "drawer",
    "popover",
    "popover-next",
    "toast",
    "tooltip"
  ],
  "context": [
    "blueprint-provider",
    "hotkeys-provider",
    "overlays-provider",
    "portal-provider"
  ],
  "hooks": [
    "use-hotkeys",
    "use-overlay-stack"
  ]
};
/** ⏳ V7-17 — core 에 절 없이 놓인 페이지. 판 6 GROUPS 갈래로는 사이드바에 안 선다(주소로만). 판 7 제안 = 사이드바 순서대로 「제목 없는 무리」. */
export const UNSECTIONED: string[] = ["accessibility", "classes", "colors", "typography", "variables"];
/** 공식 nav 에 없는 우리 INDEX 항목 — 사이드바에 안 그린다(주소로만 · 판 6 GROUPS 갈래). */
export const NOT_IN_NAV: string[] = ["components", "menu-item", "context", "index", "hooks"];
