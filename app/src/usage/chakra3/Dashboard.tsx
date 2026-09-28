"use client";

import * as React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function ChakraUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Flex
      overflow="hidden"
      bg="bg.DEFAULT"
      border="var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)"
      borderRadius="var(--semantic-radius-container)"
      boxShadow="var(--semantic-shadow-raised)"
      h="max(20rem, calc(100dvh - 9rem))"
    >
      {/* 사이드바: 프로모, 유저 제외, 네브만 표시 */}
      <VStack
        align="stretch" gap="0.25rem" w="11rem" flexShrink={0}
        borderInlineEnd="1px solid var(--semantic-border-neutral-subtle)"
        p="0.75rem" display={{ base: "none", md: "flex" }}
      >
        <Flex align="center" gap="0.5rem" px="0.5rem" py="0.5rem" mb="0.5rem">
          <Box aria-hidden w="1.25rem" h="1.25rem" borderRadius="control" bg="brand.solid" />
          <Text fontWeight="600" fontSize="0.9375rem">펀딩</Text>
        </Flex>
        {SCREENS.map((s) => {
          const active = s.key === screenKey;
          return (
            <Box
              as="button" key={s.key} onClick={ => setScreenKey(s.key)}
              textAlign="left" px="0.625rem" py="0.5rem" borderRadius="control"
              fontSize="0.875rem" fontWeight={active ? "600" : "400"}
              bg={active ? "brand.subtle" : "transparent"}
              color={active ? "brand.fg" : "fg.DEFAULT"}
              cursor="pointer" border="none"
            >
              {s.label}
            </Box>
          );
        })}
      </VStack>

      <VStack align="stretch" flex="1" minW="0" gap="0">
        <Flex
          display={{ base: "flex", md: "none" }} gap="0.5rem" px="0.75rem" py="0.5rem"
          borderBottom="1px solid var(--semantic-border-neutral-subtle)" overflowX="auto"
        >
          {SCREENS.map((s) => (
            <Box
              as="button" key={s.key} onClick={ => setScreenKey(s.key)}
              px="0.625rem" py="0.375rem" borderRadius="control" fontSize="0.8125rem" whiteSpace="nowrap"
              bg={s.key === screenKey ? "brand.subtle" : "transparent"}
              color={s.key === screenKey ? "brand.fg" : "fg.DEFAULT"}
              border="none" cursor="pointer"
            >
              {s.label}
            </Box>
          ))}
        </Flex>

        <Box flex="1" minH="0" overflowY="auto" p="1rem">
          {/* 히어로 없음, Hello {이름}! 한 줄만 표시 */}
          <Text fontSize="1rem" fontWeight="600" mb="0.125rem">
            Hello, {system.baseTitle}!
          </Text>
          <Text fontSize="0.8125rem" color="fg.subtle" mb="0.75rem">{screen.lede}</Text>
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </Box>
      </VStack>
    </Flex>
  );
}
