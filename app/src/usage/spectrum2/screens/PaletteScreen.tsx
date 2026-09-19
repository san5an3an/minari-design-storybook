import * as React from "react";
import {
  ActionButton, ActionGroup, Cell, Column, ColorSwatch, Flex, Item, Row, Text, TableBody, TableHeader, TableView, View,
} from "@adobe/react-spectrum";
import type { Key, Selection } from "@adobe/react-spectrum";
import { COLOR_TOKENS, type ColorCategory } from "../data";
import type { ScreenProps } from "../screens";

const CATEGORIES: readonly ColorCategory[] = ["Primary", "Secondary", "Neutral", "Semantic"];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 8rem" }}>
      <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)", display: "block" }}>{label}</Text>
      <Text UNSAFE_style={{ fontSize: "1.35rem", fontWeight: 700 }}>{value}</Text>
    </View>
  );
}

export function PaletteScreen({ onSelect }: ScreenProps) {
  const [activeCategories, setActiveCategories] = React.useState<Selection>(new Set<Key>(CATEGORIES));

  const filtered = activeCategories === "all"
    ? COLOR_TOKENS
    : COLOR_TOKENS.filter((t) => activeCategories.has(t.category));
  const totalUsage = COLOR_TOKENS.reduce((s, t) => s + t.usageCount, 0);
  const avgContrast = (COLOR_TOKENS.reduce((s, t) => s + t.contrastOnWhite, 0) / COLOR_TOKENS.length).toFixed(1);

  return (
    <Flex direction="column" gap="size-200">
      <Flex gap="size-150" wrap>
        <StatCard label="전체 토큰" value={`${COLOR_TOKENS.length}개`} />
        <StatCard label="총 사용처" value={`${totalUsage}건`} />
        <StatCard label="평균 명도 대비" value={`${avgContrast}:1`} />
        <StatCard label="분류" value={`${CATEGORIES.length}종`} />
      </Flex>

      <Flex alignItems="center" gap="size-150" wrap>
        <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>분류</Text>
        <ActionGroup
          selectionMode="multiple"
          selectedKeys={activeCategories}
          onSelectionChange={setActiveCategories}
        >
          {CATEGORIES.map((c) => <Item key={c}>{c}</Item>)}
        </ActionGroup>
        <ActionButton isQuiet onPress={ => setActiveCategories(new Set<Key>(CATEGORIES))}>모두 보기</ActionButton>
        <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)", marginInlineStart: "auto" }}>{filtered.length}개 표시 중</Text>
      </Flex>

      <TableView aria-label="컬러 토큰 목록" onAction={(key) => onSelect?.(String(key))} selectionMode="none">
        <TableHeader>
          <Column>색</Column>
          <Column>토큰명</Column>
          <Column>분류</Column>
          <Column>사용처</Column>
          <Column>명도 대비(흰 배경)</Column>
          <Column>담당</Column>
        </TableHeader>
        <TableBody items={filtered}>
          {(t) => (
            <Row>
              <Cell><ColorSwatch color={t.hex} size="S" aria-label={t.name} /></Cell>
              <Cell>{t.name}</Cell>
              <Cell>{t.category}</Cell>
              <Cell>{t.usageCount}건</Cell>
              <Cell>{t.contrastOnWhite.toFixed(1)}:1</Cell>
              <Cell>{t.owner}</Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </Flex>
  );
}
