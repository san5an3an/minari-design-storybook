import * as React from "react";
import { Avatar } from "../../bases/shadcn/Avatar";
import { Badge } from "../../bases/shadcn/Badge";
import { Breadcrumb } from "../../bases/shadcn/Breadcrumb";
import { Button } from "../../bases/shadcn/Button";
import { Input } from "../../bases/shadcn/Input";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function ShadcnUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--semantic-bg-neutral-surface)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
      }}
    >
      <div
        className="flex flex-wrap items-center gap-3 px-5 py-3"
        style={{
          borderBottom:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          background: "var(--semantic-bg-neutral-default)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block size-5 shrink-0"
            style={{
              background: "var(--semantic-bg-brand-default)",
              borderRadius: "var(--semantic-radius-selection)",
            }}
          />
          <span
            style={{
              color: "var(--semantic-fg-neutral-default)",
              fontSize: "var(--semantic-text-body)",
            }}
          >
            {/* 제품 이름을 선택한 시스템 이름으로 표시 */}
            {system.name} Console
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Input placeholder="검색" aria-label="검색" />
          <Badge variant="outline" tone="neutral">{system.baseTitle}</Badge>
          <Avatar size="sm" fallback="SK" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <nav
          aria-label="예제 화면"
          className="flex shrink-0 gap-1 overflow-x-auto p-3 sm:w-48 sm:flex-col sm:overflow-visible"
          style={{
            borderInlineEnd:
              "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          {SCREENS.map((s) => {
            const on = s.key === screenKey;
            return (
              <button
                key={s.key}
                type="button"
                onClick={ => setScreenKey(s.key)}
                aria-current={on ? "page" : undefined}
                className="shrink-0 cursor-pointer px-3 py-2 text-start"
                style={{
                  background: on ? "var(--semantic-bg-brand-subtle)" : "transparent",
                  color: on
                    ? "var(--semantic-fg-brand-strong)"
                    : "var(--semantic-fg-neutral-subtle)",
                  borderRadius: "var(--semantic-radius-control)",
                  fontSize: "var(--semantic-text-body-sm)",
                }}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        <div className="min-w-0 flex-1 p-5">
          <div className="mb-5 flex flex-col gap-3">
            <Breadcrumb
              items={[
                { label: "홈", href: "#" },
                { label: "분석", href: "#" },
                { label: screen.label },
              ]}
            />
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div className="flex min-w-0 flex-col gap-1">
                <h2
                  style={{
                    color: "var(--semantic-fg-neutral-default)",
                    fontSize: "var(--semantic-text-heading-lg)",
                    letterSpacing: "var(--semantic-tracking-heading-lg)",
                    lineHeight: "var(--semantic-line-height-tight)",
                  }}
                >
                  {screen.label}
                </h2>
                <p
                  style={{
                    color: "var(--semantic-fg-neutral-subtle)",
                    fontSize: "var(--semantic-text-body-sm)",
                    lineHeight: "var(--semantic-line-height-relaxed)",
                  }}
                >
                  {screen.lede}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button variant="outline" size="sm">내려받기</Button>
                <Button variant="solid" tone="brand" size="sm">새로 고침</Button>
              </div>
            </div>
          </div>

          <Screen />
        </div>
      </div>
    </div>
  );
}
