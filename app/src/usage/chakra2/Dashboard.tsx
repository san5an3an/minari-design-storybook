"use client";

import * as React from "react";
import { Flex, Tabs, VStack } from "@chakra-ui/react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function ChakraUsage2({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Flex
      direction="column"
      overflow="hidden"
      bg="bg.DEFAULT"
      border="var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)"
      borderRadius="var(--semantic-radius-container)"
      boxShadow="var(--semantic-shadow-raised)"
      h="max(20rem, calc(100dvh - 9rem))"
    >
      <Tabs.Root
        value={screenKey}
        onValueChange={(e) => setScreenKey(e.value)}
        flexShrink={0}
        px="0.75rem"
        pt="0.5rem"
        variant="line"
      >
        <Tabs.List>
          {SCREENS.map((s) => (
            <Tabs.Trigger key={s.key} value={s.key}>{s.label}</Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <VStack align="stretch" flex="1" minH="0" overflowY="auto" p="1rem" gap="0">
        <VStack align="stretch" gap="0.125rem" pb="0.75rem">
          <span style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label} · {system.baseTitle}</span>
          <span style={{ fontSize: "0.8125rem", color: "var(--chakra-colors-fg-subtle)" }}>{screen.lede}</span>
        </VStack>
        <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
      </VStack>
    </Flex>
  );
}
