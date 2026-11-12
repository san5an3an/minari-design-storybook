import type { CSSProperties } from "react";

// recharts axis tick의 default fill #666이 dark mode와 high-contrast mode의 HeroUI Card와 Carbon Tile과 usage Dashboard surface background 위 low contrast라 tick fill을 --semantic-fg-neutral-subtle token으로 connect
export const CHART_TICK_FILL = "var(--semantic-fg-neutral-subtle)";

// recharts default Tooltip의 white background 위 inherited color label이 dark mode와 high-contrast mode에서, series color item이 high-contrast mode와 bright brand system에서 low contrast라 background를 --semantic-bg-neutral-surface, border를 --semantic-border-neutral-subtle, label과 item color를 --semantic-fg-neutral-default token으로 connect
export const CHART_TOOLTIP_PROPS = {
  contentStyle: {
    backgroundColor: "var(--semantic-bg-neutral-surface)",
    border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
  } as CSSProperties,
  labelStyle: { color: "var(--semantic-fg-neutral-default)" } as CSSProperties,
  itemStyle: { color: "var(--semantic-fg-neutral-default)" } as CSSProperties,
};
