import * as React from "react";
import {
  Cell, Checkbox, Column, ColorSwatch, Flex, IllustratedMessage, Content, Heading, Meter, Picker, Item, Row,
  StatusLight, TableBody, TableHeader, TableView, Text, View,
} from "@adobe/react-spectrum";
import CheckmarkCircle from "@spectrum-icons/workflow/CheckmarkCircle";
import { COLOR_TOKENS, WCAG_AA_NORMAL } from "../data";

export function AccessibilityScreen {
  const [onlyFailing, setOnlyFailing] = React.useState(false);
  const [background, setBackground] = React.useState<"white" | "black">("white");

  const rows = COLOR_TOKENS.map((t) => ({
    ...t,
    contrast: background === "white" ? t.contrastOnWhite : t.contrastOnBlack,
  })).map((t) => ({ ...t, pass: t.contrast >= WCAG_AA_NORMAL }));

  const shown = onlyFailing ? rows.filter((r) => !r.pass) : rows;
  const passCount = rows.filter((r) => r.pass).length;
  const compliancePct = Math.round((passCount / rows.length) * 100);

  return (
    <Flex direction="column" gap="size-200">
      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Flex justifyContent="space-between" alignItems="center" marginBottom="size-100">
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem" }}>전체 준수율(AA, {background === "white" ? "흰" : "검정"} 배경 기준)</Text>
          <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{passCount}/{rows.length}개 통과</Text>
        </Flex>
        <Meter label="준수율" value={compliancePct} variant={compliancePct >= 80 ? "positive" : compliancePct >= 50 ? "warning" : "critical"} width="100%" />
      </View>

      <Flex justifyContent="space-between" alignItems="center" wrap gap="size-150">
        <Flex alignItems="center" gap="size-200" wrap>
          <Picker aria-label="배경 기준" selectedKey={background} onSelectionChange={(k) => setBackground(k as "white" | "black")} width="size-2000">
            <Item key="white">흰 배경 기준</Item>
            <Item key="black">검정 배경 기준</Item>
          </Picker>
          <Checkbox isSelected={onlyFailing} onChange={setOnlyFailing}>미달 항목만 보기</Checkbox>
        </Flex>
        <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{shown.length}개 표시 중</Text>
      </Flex>

      {shown.length === 0 ? (
        <IllustratedMessage>
          <CheckmarkCircle size="L" />
          <Heading>미달 항목이 없어요</Heading>
          <Content>이 기준에서는 모든 토큰이 AA 대비를 통과했어요.</Content>
        </IllustratedMessage>
      ) : (
        <TableView aria-label="접근성 감사 결과" density="compact">
          <TableHeader>
            <Column>색</Column>
            <Column>토큰명</Column>
            <Column>분류</Column>
            <Column>대비</Column>
            <Column>판별</Column>
          </TableHeader>
          <TableBody items={shown}>
            {(r) => (
              <Row>
                <Cell><ColorSwatch color={r.hex} size="S" aria-label={r.name} /></Cell>
                <Cell>{r.name}</Cell>
                <Cell>{r.category}</Cell>
                <Cell>{r.contrast.toFixed(1)}:1</Cell>
                <Cell><StatusLight variant={r.pass ? "positive" : "negative"}>{r.pass ? "통과" : "미달"}</StatusLight></Cell>
              </Row>
            )}
          </TableBody>
        </TableView>
      )}
    </Flex>
  );
}
