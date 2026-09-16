import * as React from "react";
import { Wallet } from "lucide-react";
import { Tabs } from "../../bases/shadcn/Tabs";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";
import { TransactionDetailScreen } from "./screens/TransactionDetailScreen";

const SHELL_HEIGHT = "max(20rem, calc(100dvh - 9rem))";

const TAB_SCREENS = SCREENS.filter((s) => s.key !== "detail");

export function ShadcnUsage3({ system }: UsageDashboardProps) {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        height: SHELL_HEIGHT,
        minHeight: 0,
        background: "var(--semantic-bg-neutral-surface)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
      }}
    >
      <header
        className="flex shrink-0 items-center gap-2 px-4 py-3"
        style={{
          borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          background: "var(--semantic-bg-neutral-surface)",
        }}
      >
        <span
          aria-hidden
          className="flex size-7 items-center justify-center"
          style={{
            background: "var(--semantic-bg-brand-default)",
            color: "var(--semantic-fg-on-brand-default)",
            borderRadius: "var(--semantic-radius-control)",
          }}
        >
          <Wallet size={14} />
        </span>
        <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body)" }}>
          가계부 · {system.name}
        </span>
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-5">
        {selectedId !== null ? (
          <TransactionDetailScreen itemId={selectedId} onOpen={ => setSelectedId(null)} />
        ) : (
          <Tabs
            defaultValue={TAB_SCREENS[0].key}
            items={TAB_SCREENS.map((s) => ({
              value: s.key,
              label: s.label,
              content: <s.Screen onOpen={(_key, id) => setSelectedId(id)} />,
            }))}
          />
        )}
      </div>
    </div>
  );
}
