"use client";

import * as React from "react";
import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";
import { Toaster } from "./toaster";

export function ChakraUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Flex
      overflow="hidden"
      bg="bg.DEFAULT"
      border="var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)"
      borderRadius="var(--semantic-radius-container)"
      boxShadow="var(--semantic-shadow-raised)"
      // 뷰포트 내부에 고정
      h="max(20rem, calc(100dvh - 9rem))"
    >
      {/* 사이드바: 네브, 프로모카드, 유저. 넓을 때만 렌더링, 좁으면 접기 */}
      <VStack
        align="stretch"
        gap="0.25rem"
        w="13rem"
        flexShrink={0}
        borderInlineEnd="1px solid var(--semantic-border-neutral-subtle)"
        p="0.75rem"
        display={{ base: "none", md: "flex" }}
      >
        <Flex align="center" gap="0.5rem" px="0.5rem" py="0.5rem" mb="0.5rem">
          <Box aria-hidden w="1.25rem" h="1.25rem" borderRadius="control" bg="brand.solid" />
          <Text fontWeight="600" fontSize="0.9375rem">스튜디오</Text>
        </Flex>

        {SCREENS.map((s) => {
          const active = s.key === screenKey;
          return (
            <Box
              as="button"
              key={s.key}
              onClick={ => setScreenKey(s.key)}
              textAlign="left"
              px="0.625rem"
              py="0.5rem"
              borderRadius="control"
              fontSize="0.875rem"
              fontWeight={active ? "600" : "400"}
              bg={active ? "brand.subtle" : "transparent"}
              color={active ? "brand.fg" : "fg.DEFAULT"}
              cursor="pointer"
              border="none"
            >
              {s.label}
            </Box>
          );
        })}

        {/* 프로모카드 사이드바 구성 요소 */}
        <Box
          mt="auto"
          borderRadius="control"
          p="0.75rem"
          bg="brand.subtle"
          display="flex"
          flexDirection="column"
          gap="0.25rem"
        >
          <Text fontSize="0.75rem" fontWeight="600" color="brand.fg">신규 회원 이벤트</Text>
          <Text fontSize="0.6875rem" color="brand.fg" opacity={0.85}>
            친구 추천하면 1회 무료 수업권을 드려요.
          </Text>
        </Box>

        {/* 유저 프로필 사이드바 구성 요소 */}
        <Flex align="center" gap="0.5rem" px="0.5rem" py="0.5rem" mt="0.25rem">
          <Avatar.Root size="sm">
            <Avatar.Fallback>{system.baseTitle.slice(0, 1)}</Avatar.Fallback>
          </Avatar.Root>
          <VStack align="start" gap="0">
            <Text fontSize="0.75rem" fontWeight="500">원장</Text>
            <Text fontSize="0.6875rem" color="fg.subtle">{system.baseTitle}</Text>
          </VStack>
        </Flex>
      </VStack>

      {/* 좁은 화면에서 본문 영역 위에 화면 선택 탭 대체 표시 */}
      <VStack align="stretch" flex="1" minW="0" gap="0">
        <Flex
          display={{ base: "flex", md: "none" }}
          gap="0.5rem"
          px="0.75rem"
          py="0.5rem"
          borderBottom="1px solid var(--semantic-border-neutral-subtle)"
          overflowX="auto"
        >
          {SCREENS.map((s) => (
            <Box
              as="button"
              key={s.key}
              onClick={ => setScreenKey(s.key)}
              px="0.625rem"
              py="0.375rem"
              borderRadius="control"
              fontSize="0.8125rem"
              whiteSpace="nowrap"
              bg={s.key === screenKey ? "brand.subtle" : "transparent"}
              color={s.key === screenKey ? "brand.fg" : "fg.DEFAULT"}
              border="none"
              cursor="pointer"
            >
              {s.label}
            </Box>
          ))}
        </Flex>

        <Box flex="1" minH="0" overflowY="auto" p="1rem">
          <VStack align="stretch" gap="0.125rem" pb="0.75rem">
            <Text fontSize="1rem" fontWeight="600">{screen.label}</Text>
            <Text fontSize="0.8125rem" color="fg.subtle">{screen.lede}</Text>
          </VStack>
          <Screen />
        </Box>
      </VStack>
      {/* Toaster 위치, ScheduleScreen 알림. Portal 이라 실제와 무관임 */}
      <Toaster />
    </Flex>
  );
}
