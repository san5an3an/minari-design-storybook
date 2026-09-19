import * as React from "react";
import {
  ActionButton, ColorArea, ColorSlider, ColorSwatch, ColorWheel, Content, Flex, Heading, Meter, parseColor,
  StatusLight, Tabs, TabList, TabPanels, Item, Text, View,
} from "@adobe/react-spectrum";
import { COLOR_TOKENS, TOKEN_USAGE, WCAG_AA_NORMAL } from "../data";
import type { ScreenProps } from "../screens";

export function TokenDetailScreen({ selectedId, onSelect }: ScreenProps) {
  const token = COLOR_TOKENS.find((t) => t.id === selectedId) ?? COLOR_TOKENS[0];
  const [color, setColor] = React.useState( => parseColor(token.hex));

  React.useEffect( => { setColor(parseColor(token.hex)); }, [token.hex]);

  const usage = TOKEN_USAGE[token.id] ?? [];
  const pass = token.contrastOnWhite >= WCAG_AA_NORMAL;

  return (
    <Flex direction="column" gap="size-200">
      <Flex justifyContent="space-between" alignItems="center" wrap gap="size-150">
        <Flex alignItems="center" gap="size-150">
          <ColorSwatch color={token.hex} size="L" aria-label={token.name} />
          <Flex direction="column" gap="size-25">
            <Heading level={3} margin={0}>{token.name}</Heading>
            <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{token.category} · {token.hex.toUpperCase} · 담당 {token.owner}</Text>
          </Flex>
        </Flex>
        <ActionButton onPress={ => onSelect?.("")}>← 팔레트로</ActionButton>
      </Flex>

      <Flex gap="size-200" wrap>
        <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 18rem" }}>
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.75rem" }}>색 조정(측정용, 원본 토큰은 안 바뀜)</Text>
          <Flex gap="size-300" wrap alignItems="start">
            <ColorArea value={color} onChange={setColor} xChannel="saturation" yChannel="lightness" />
            <Flex direction="column" gap="size-200">
              <ColorWheel value={color} onChange={setColor} size="size-1700" />
              <ColorSlider value={color} onChange={setColor} channel="lightness" />
            </Flex>
          </Flex>
        </View>

        <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 14rem" }}>
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.75rem" }}>WCAG 대비 검사</Text>
          <Flex direction="column" gap="size-150">
            <Meter label="흰 배경 대비" value={Math.min(100, (token.contrastOnWhite / 21) * 100)} variant={pass ? "positive" : "critical"} />
            <StatusLight variant={pass ? "positive" : "negative"}>
              {pass ? `통과 · ${token.contrastOnWhite.toFixed(1)}:1 (AA 기준 ${WCAG_AA_NORMAL}:1)` : `미달 · ${token.contrastOnWhite.toFixed(1)}:1 (AA 기준 ${WCAG_AA_NORMAL}:1)`}
            </StatusLight>
            <Meter label="검정 배경 대비" value={Math.min(100, (token.contrastOnBlack / 21) * 100)} variant={token.contrastOnBlack >= WCAG_AA_NORMAL ? "positive" : "critical"} />
          </Flex>
        </View>
      </Flex>

      <Tabs aria-label="토큰 상세 탭">
        <TabList>
          <Item key="usage">사용처 ({usage.length})</Item>
          <Item key="meta">메타데이터</Item>
        </TabList>
        <TabPanels>
          <Item key="usage">
            <Flex direction="column" gap="size-100" marginTop="size-150">
              {usage.length === 0 ? (
                <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>추적된 사용처가 없어요.</Text>
              ) : usage.map((u, i) => (
                <Flex key={i} justifyContent="space-between" UNSAFE_style={{ fontSize: "0.8rem" }}>
                  <Text>{u.base} · {u.screen}</Text>
                  <Text UNSAFE_style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{u.count}건</Text>
                </Flex>
              ))}
            </Flex>
          </Item>
          <Item key="meta">
            <Content marginTop="size-150">
              <Text UNSAFE_style={{ fontSize: "0.8rem", display: "block" }}>추가일 · {token.addedDate}</Text>
              <Text UNSAFE_style={{ fontSize: "0.8rem", display: "block" }}>전체 사용 · {token.usageCount}건</Text>
            </Content>
          </Item>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
