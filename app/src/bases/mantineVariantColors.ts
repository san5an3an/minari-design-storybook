import { alpha } from "@mantine/core";
import type { CSSVariablesResolver } from "@mantine/core";

const SEMANTIC_FG = ["brand", "danger", "success", "warning"];
const OTHER = ["accent", "info"];

// light·subtle 변형 글자색을 시스템 글자 토큰으로 지정. 생성 팔레트는 다크에서 0~5번이 바탕 톤이라 Mantine 기본 계산을 쓰면 글자가 바탕에 묻힘
export const mantineVariantColors: CSSVariablesResolver = (theme) => {
  const light: Record<string, string> = {};
  const dark: Record<string, string> = {};
  for (const name of [...SEMANTIC_FG, ...OTHER]) {
    const shades = theme.colors[name];
    if (!shades) continue;
    const fg = SEMANTIC_FG.includes(name) ? `var(--semantic-fg-${name}-strong)` : `var(--mantine-color-${name}-7)`;
    for (const vars of [light, dark]) {
      vars[`--mantine-color-${name}-light-color`] = fg;
      vars[`--mantine-color-${name}-text`] = fg;
    }
    // 다크 옅은 바탕은 채움 색 기준으로 지정. 기본 계산은 4번 바탕 톤을 써서 바탕이 안 보임
    dark[`--mantine-color-${name}-light`] = alpha(shades[6], 0.15);
    dark[`--mantine-color-${name}-light-hover`] = alpha(shades[6], 0.2);
  }
  return { variables: {}, light, dark };
};
