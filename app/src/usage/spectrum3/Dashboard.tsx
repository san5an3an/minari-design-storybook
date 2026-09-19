import * as React from "react";
import { ActionButton, Avatar, defaultTheme, Divider, Flex, Provider, Text } from "@adobe/react-spectrum";
import Home from "@spectrum-icons/workflow/Home";
import Folder from "@spectrum-icons/workflow/Folder";
import UserGroup from "@spectrum-icons/workflow/UserGroup";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ReactNode> = {
  home: <Home size="S" />,
  project: <Folder size="S" />,
  team: <UserGroup size="S" />,
};

export function Spectrum3Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);

  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <div
        style={{
          display: "flex",
          height: "max(20rem, calc(100dvh - 9rem))",
          overflow: "hidden",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
        }}
      >
        <Flex
          direction="column"
          gap="size-100"
          UNSAFE_style={{
            width: "9.5rem", flexShrink: 0, padding: "0.75rem 0.5rem",
            borderInlineEnd: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          }}
        >
          <Flex alignItems="center" gap="size-100" UNSAFE_style={{ padding: "0.375rem 0.5rem 0.75rem" }}>
            <span aria-hidden style={{ width: "1.25rem", height: "1.25rem", borderRadius: "0.25rem", background: "var(--semantic-bg-brand-default)", display: "inline-block" }} />
            <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem" }}>{system.name} 보드</Text>
          </Flex>
          {SCREENS.map((s) => (
            <ActionButton
              key={s.key}
              isQuiet={s.key !== screenKey}
              onPress={ => setScreenKey(s.key)}
              UNSAFE_style={{
                justifyContent: "flex-start",
                background: s.key === screenKey ? "var(--semantic-bg-brand-subtle)" : undefined,
                color: s.key === screenKey ? "var(--semantic-fg-brand-default)" : "var(--semantic-fg-neutral-default)",
              }}
            >
              {SCREEN_ICON[s.key]}
              <Text>{s.label}</Text>
            </ActionButton>
          ))}
          <div style={{ flex: 1 }} />
          <Divider size="S" />
          <Flex alignItems="center" gap="size-100" UNSAFE_style={{ padding: "0.375rem 0.5rem" }}>
            <Avatar src="https://i.pravatar.cc/64?img=12" alt="내 프로필" size={26} />
            <Text UNSAFE_style={{ fontSize: "0.75rem", fontWeight: 600 }}>한지우</Text>
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
