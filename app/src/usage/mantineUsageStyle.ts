import type { CSSProperties } from "react";

// generated theme가 design system token에 connect하지 않아 Mantine default color value로 남은 --mantine-color-text와 --mantine-color-dimmed와 --mantine-color-placeholder를 usage Dashboard root div와 portal Menu dropdown에서 design system token으로 override
export const MANTINE_USAGE_VARS = {
  "--mantine-color-text": "var(--semantic-fg-neutral-default)",
  "--mantine-color-dimmed": "var(--semantic-fg-neutral-subtle)",
  "--mantine-color-placeholder": "var(--component-input-fg-placeholder)",
} as CSSProperties;

// Mantine default gray color와 light variant의 Avatar initials 텍스트가 light mode에서 Avatar background 위 low contrast라 placeholder style의 color를 --semantic-fg-neutral-default token으로 override
export const NEUTRAL_AVATAR_STYLES = { placeholder: { color: "var(--semantic-fg-neutral-default)" } };

// Mantine Slider mark label의 default palette color가 dark mode와 high-contrast mode에서 Card background 위 low contrast라 --semantic-fg-neutral-subtle token으로 override
export const SLIDER_MARK_STYLES = { markLabel: { color: "var(--semantic-fg-neutral-subtle)" } };
