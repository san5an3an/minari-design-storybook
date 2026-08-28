import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import MuiLink from "@mui/material/Link";
import type { LinkProps } from "../../systems/props";

export function Link({ href = "#", external, children, className }: LinkProps) {
  return (
    <MuiLink
      href={href}
      className={className}
      // always 고정. MUI는 hover에서만 밑줄이라 터치에서 링크 여부를 알 수 없음
      underline="always"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        color: "var(--component-link-fg)",
        gap: "var(--component-link-gap)",
        textUnderlineOffset: "var(--component-link-underline-offset)",
        textDecorationColor: "currentColor",
      }}
    >
      {children}
      {external ? <ArrowOutwardRounded aria-hidden style={{ width: "1em", height: "1em" }} /> : null}
    </MuiLink>
  );
}
