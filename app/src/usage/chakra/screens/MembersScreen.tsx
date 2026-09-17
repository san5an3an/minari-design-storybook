import * as React from "react";
import {
  Badge, Box, Grid, HStack, Input, NativeSelect, Stat, Table, Text, VStack,
} from "@chakra-ui/react";
import { MEMBERS, type Member } from "../data";

const TIER_PALETTE: Record<Member["tier"], string> = {
  "베이직": "gray",
  "프리미엄": "brand",
  "1:1 PT": "warning",
};

export function MembersScreen {
  const [query, setQuery] = React.useState("");
  const [tier, setTier] = React.useState<"전체" | Member["tier"]>("전체");

  const byTier = (["베이직", "프리미엄", "1:1 PT"] as const).map((t) => ({
    tier: t,
    count: MEMBERS.filter((m) => m.tier === t).length,
  }));

  const rows = MEMBERS.filter(
    (m) =>
      (tier === "전체" || m.tier === tier) &&
      (query.trim === "" || m.name.includes(query) || m.email.includes(query)),
  );

  return (
    <VStack align="stretch" gap="1rem">
      <Grid templateColumns="repeat(auto-fit, minmax(9rem, 1fr))" gap="1rem">
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">전체 회원</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{MEMBERS.length}명</Stat.ValueText>
        </Stat.Root>
        {byTier.map((t) => (
          <Stat.Root key={t.tier} borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">{t.tier}</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{t.count}명</Stat.ValueText>
          </Stat.Root>
        ))}
      </Grid>

      <HStack gap="0.75rem" flexWrap="wrap">
        <Input
          placeholder="이름 또는 이메일로 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          maxW="16rem"
          size="sm"
        />
        <NativeSelect.Root size="sm" maxW="10rem">
          <NativeSelect.Field
            value={tier}
            onChange={(e) => setTier(e.target.value as "전체" | Member["tier"])}
          >
            <option value="전체">전체 등급</option>
            <option value="베이직">베이직</option>
            <option value="프리미엄">프리미엄</option>
            <option value="1:1 PT">1:1 PT</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </HStack>

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="0" bg="bg.panel" overflow="hidden">
        <Table.ScrollArea>
          <Table.Root size="sm" striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>이름</Table.ColumnHeader>
                <Table.ColumnHeader>이메일</Table.ColumnHeader>
                <Table.ColumnHeader>등급</Table.ColumnHeader>
                <Table.ColumnHeader>가입</Table.ColumnHeader>
                <Table.ColumnHeader>이번 달 방문</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows.map((m) => (
                <Table.Row key={m.id}>
                  <Table.Cell fontSize="0.8125rem" fontWeight="500">{m.name}</Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{m.email}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette={TIER_PALETTE[m.tier]} size="sm">{m.tier}</Badge>
                  </Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{m.joinedLabel}</Table.Cell>
                  <Table.Cell fontSize="0.8125rem">{m.visitsThisMonth}회</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
        {rows.length === 0 ? (
          <Text fontSize="0.8125rem" color="fg.subtle" p="1rem">검색 결과가 없어요.</Text>
        ) : null}
      </Box>
    </VStack>
  );
}
