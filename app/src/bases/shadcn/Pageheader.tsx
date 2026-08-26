import { Separator } from "@/components/ui/separator";
import type { PageHeaderProps } from "../../systems/props";

export function Pageheader({ title, lede, meta, actions, className }: PageHeaderProps) {
  return (
    <header
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--component-pageheader-gap)",
        paddingBlock: "var(--component-pageheader-padding-block)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--component-pageheader-row-gap)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--component-pageheader-gap)" }}>
          {/* 화면당 h1 하나, 헤더가 해당 위치 차지하기 */}
          <h1
            style={{
              margin: 0,
              color: "var(--component-pageheader-title-fg)",
              fontSize: "var(--component-pageheader-title-font-size)",
            }}
          >
            {title}
          </h1>
          {lede !== undefined ? (
            <p
              style={{
                margin: 0,
                color: "var(--component-pageheader-lede-fg)",
                fontSize: "var(--component-pageheader-lede-font-size)",
                maxWidth: "var(--component-pageheader-lede-max-width)",
              }}
            >
              {lede}
            </p>
          ) : null}
        </div>
        {actions !== undefined ? (
          <div style={{ display: "flex", gap: "var(--component-pageheader-actions-gap)" }}>
            {actions}
          </div>
        ) : null}
      </div>

      {meta !== undefined ? (
        <div style={{ display: "flex", gap: "var(--component-pageheader-meta-gap)", flexWrap: "wrap" }}>
          {meta}
        </div>
      ) : null}

      <Separator style={{ background: "var(--component-pageheader-border)" }} />
    </header>
  );
}
