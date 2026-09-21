import * as React from "react";

export const PAGE_CLASS = "ab3-page";

export const LAYOUT_CSS = `
.${PAGE_CLASS} {
  container-type: inline-size;
  container-name: ab3;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ab3-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
}
.ab3-toolbar-group { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; min-width: 0; }
.ab3-tiles { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.ab3-split, .ab3-split-wide { display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); align-items: start; }
.ab3-cards { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); }
.ab3-stack { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
@container ab3 (min-width: 30rem) {
  .ab3-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@container ab3 (min-width: 44rem) {
  .ab3-tiles { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .ab3-split { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); }
  .ab3-split-wide { grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); }
}
`;

export const OverlayHostContext = React.createContext<HTMLElement | null>(null);

export function useOverlayHost: HTMLElement | null {
  return React.useContext(OverlayHostContext);
}
