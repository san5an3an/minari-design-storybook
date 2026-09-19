import * as React from "react";
import { ActionButton, defaultTheme, Flex, Provider, Text } from "@adobe/react-spectrum";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function Spectrum2Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "max(20rem, calc(100dvh - 9rem))",
          overflow: "hidden",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          wrap
          gap="size-150"
          UNSAFE_style={{ padding: "0.75rem 1rem", flexShrink: 0, borderBottom: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)" }}
        >
          <Flex alignItems="center" gap="size-100">
            <span aria-hidden style={{ width: "1.25rem", height: "1.25rem", borderRadius: "0.25rem", background: "var(--semantic-bg-brand-default)", display: "inline-block" }} />
            <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.9rem" }}>{system.name} 컬러 시스템</Text>
          </Flex>
          <Flex gap="size-75" wrap>
            {SCREENS.map((s) => (
              <ActionButton
                key={s.key}
                isQuiet={s.key !== screenKey}
                onPress={ => setScreenKey(s.key)}
                UNSAFE_style={{
                  background: s.key === screenKey ? "var(--semantic-bg-brand-subtle)" : undefined,
                  color: s.key === screenKey ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-default)",
                }}
              >
                {s.label}
              </ActionButton>
            ))}
          </Flex>
        </Flex>
        <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflowY: "auto", padding: "1.25rem" }}>
          <Flex direction="column" gap="size-25" marginBottom="size-200">
            <Text UNSAFE_style={{ fontWeight: 600, fontSize: "1rem" }}>{screen.label}</Text>
            <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{screen.lede}</Text>
          </Flex>
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </div>
    </Provider>
  );
}
