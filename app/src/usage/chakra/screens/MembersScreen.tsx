import * as React from "react";
import {
  Avatar, Badge, Box, Button, CloseButton, createListCollection, DataList, Drawer, EmptyState,
  HStack, Input, Portal, Progress, Select, Stat, Table, Tag, Text, VStack,
} from "@chakra-ui/react";
import { SearchX } from "lucide-react";
import { MEMBERS, type Member } from "../data";

const TIER_PALETTE: Record<Member["tier"], string> = {
  "베이직": "gray",
  "프리미엄": "brand",
  "1:1 PT": "warning",
};

const TIER_COLLECTION = createListCollection({
  items: [
    { label: "전체 등급", value: "전체" },
    { label: "베이직", value: "베이직" },
    { label: "프리미엄", value: "프리미엄" },
    { label: "1:1 PT", value: "1:1 PT" },
  ],
});

// 등급별 방문 목표 고정값
const VISIT_GOAL: Record<Member["tier"], number> = { "베이직": 8, "프리미엄": 12, "1:1 PT": 16 };

const MEMBER_STAT_GRID_CSS = `
.chk1-mem-stat-cq { container-type: inline-size; container-name: chk1memstats; }
.chk1-mem-stat-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container chk1memstats (min-width: 47rem) {
  .chk1-mem-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function MembersScreen {
  const [query, setQuery] = React.useState("");
  const [tier, setTier] = React.useState<"전체" | Member["tier"]>("전체");
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const byTier = (["베이직", "프리미엄", "1:1 PT"] as const).map((t) => ({
    tier: t,
    count: MEMBERS.filter((m) => m.tier === t).length,
  }));

  const rows = MEMBERS.filter(
    (m) =>
      (tier === "전체" || m.tier === tier) &&
      (query.trim === "" || m.name.includes(query) || m.email.includes(query)),
  );
  const selected = MEMBERS.find((m) => m.id === selectedId) ?? null;

  return (
    <VStack align="stretch" gap="1rem">
      <style>{MEMBER_STAT_GRID_CSS}</style>
      <Box className="chk1-mem-stat-cq">
        <Box className="chk1-mem-stat-grid">
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
        </Box>
      </Box>

      <HStack gap="0.75rem" flexWrap="wrap">
        <Input
          placeholder="이름 또는 이메일로 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          maxW="16rem"
          size="sm"
        />
        <Select.Root
          collection={TIER_COLLECTION}
          size="sm"
          width="10rem"
          value={[tier]}
          onValueChange={(e) => setTier((e.value[0] ?? "전체") as "전체" | Member["tier"])}
        >
          <Select.HiddenSelect />
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="등급" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {TIER_COLLECTION.items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
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
                <Table.Row key={m.id} cursor="pointer" onClick={ => setSelectedId(m.id)}>
                  <Table.Cell fontSize="0.8125rem" fontWeight="500">
                    <HStack gap="0.5rem">
                      <Avatar.Root size="xs">
                        <Avatar.Fallback>{m.name.slice(0, 1)}</Avatar.Fallback>
                      </Avatar.Root>
                      <Text fontSize="0.8125rem">{m.name}</Text>
                    </HStack>
                  </Table.Cell>
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
          <EmptyState.Root size="sm">
            <EmptyState.Content>
              <EmptyState.Indicator><SearchX /></EmptyState.Indicator>
              <EmptyState.Title>검색 결과가 없어요</EmptyState.Title>
              <EmptyState.Description>이름·이메일 또는 등급 조건을 조정해 보세요.</EmptyState.Description>
            </EmptyState.Content>
          </EmptyState.Root>
        ) : null}
      </Box>

      {/* 회원 상세 Drawer로 표시 */}
      <Drawer.Root open={selected !== null} onOpenChange={(e) => { if (!e.open) setSelectedId(null); }} size="sm">
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              {selected ? (
                <>
                  <Drawer.Header>
                    <HStack gap="0.75rem">
                      <Avatar.Root>
                        <Avatar.Fallback>{selected.name.slice(0, 1)}</Avatar.Fallback>
                      </Avatar.Root>
                      <VStack align="start" gap="0">
                        <Drawer.Title fontSize="1rem">{selected.name}</Drawer.Title>
                        <Text fontSize="0.75rem" color="fg.subtle">{selected.email}</Text>
                      </VStack>
                    </HStack>
                  </Drawer.Header>
                  <Drawer.Body>
                    <VStack align="stretch" gap="1rem">
                      <Tag.Root size="sm" colorPalette={TIER_PALETTE[selected.tier]} w="fit-content">
                        <Tag.Label>{selected.tier}</Tag.Label>
                      </Tag.Root>
                      <DataList.Root orientation="horizontal" size="sm">
                        <DataList.Item>
                          <DataList.ItemLabel>가입</DataList.ItemLabel>
                          <DataList.ItemValue>{selected.joinedLabel}</DataList.ItemValue>
                        </DataList.Item>
                        <DataList.Item>
                          <DataList.ItemLabel>이번 달 방문</DataList.ItemLabel>
                          <DataList.ItemValue>{selected.visitsThisMonth}회</DataList.ItemValue>
                        </DataList.Item>
                      </DataList.Root>
                      <Box>
                        <HStack justify="space-between" mb="0.375rem">
                          <Text fontSize="0.75rem" color="fg.subtle">이번 달 방문 목표</Text>
                          <Text fontSize="0.75rem" color="fg.subtle">
                            {selected.visitsThisMonth} / {VISIT_GOAL[selected.tier]}회
                          </Text>
                        </HStack>
                        <Progress.Root
                          value={Math.min(100, Math.round((selected.visitsThisMonth / VISIT_GOAL[selected.tier]) * 100))}
                          size="sm"
                          colorPalette={selected.visitsThisMonth >= VISIT_GOAL[selected.tier] ? "success" : "brand"}
                        >
                          <Progress.Track><Progress.Range /></Progress.Track>
                        </Progress.Root>
                      </Box>
                    </VStack>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Button size="sm" variant="outline" onClick={ => setSelectedId(null)}>닫기</Button>
                  </Drawer.Footer>
                </>
              ) : (
                <Box p="1rem" />
              )}
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </VStack>
  );
}
