import type { BannerProps } from "../../systems/props";

export function Banner({ soft, title, actions, children, className }: BannerProps) {
  return (
    <div
      className={className}
      role="status"
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        background: soft ? "var(--component-banner-bg-soft)" : "var(--component-banner-bg)",
        color: soft ? "var(--component-banner-fg-soft)" : "var(--component-banner-fg)",
        border: `var(--semantic-border-width-default) solid var(--component-banner-border)`,
        borderRadius: "var(--component-banner-radius)",
        boxShadow: soft ? undefined : "var(--component-banner-shadow)",
        padding: "var(--component-banner-padding)",
        gap: "var(--component-banner-gap)",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        {title !== undefined ? (
          <div style={{ fontSize: "var(--component-banner-title-font-size)", fontWeight: 600 }}>
            {title}
          </div>
        ) : null}
        <div style={{ fontSize: "var(--component-banner-body-font-size)" }}>{children}</div>
      </div>
      {actions !== undefined ? (
        <div style={{ display: "flex", gap: "var(--component-banner-gap)" }}>{actions}</div>
      ) : null}
    </div>
  );
}
