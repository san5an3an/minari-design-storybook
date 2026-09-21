import { Avatar, Badge, Box, Grid, HStack, Stat, Table, Text, VStack } from "@chakra-ui/react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BACKERS } from "../data";

// 눈금 글자 크기는 인라인 style 로 지정. fontSize 속성은 Chakra 리셋에 덮임
const TICK_STYLE = { fontSize: 10 } as const;

// 축 폭에 맞게 이름 자르고, 전체 이름은 툴팁 표시
const truncate = (value: string, limit: number) =>
  value.length > limit ? `${value.slice(0, limit)}…` : value;

export function BackersScreen {
  const totalAmount = BACKERS.reduce((sum, b) => sum + b.amount, 0);

  const byTier = Object.entries(
    BACKERS.reduce<Record<string, number>>((acc, b) => {
      acc[b.tier] = (acc[b.tier] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([name, value]) => ({ name, value }));

  const byCampaign = Object.entries(
    BACKERS.reduce<Record<string, number>>((acc, b) => {
      acc[b.campaignTitle] = (acc[b.campaignTitle] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([name, value]) => ({ name, value }));

  // 범주당 1.4rem, x축 1.5rem 여백 지정
  const chartHeight = `${Math.max(byTier.length, byCampaign.length) * 1.4 + 1.5}rem`;

  return (
    <VStack align="stretch" gap="1rem">
      <Grid templateColumns="repeat(auto-fit, minmax(8rem, 1fr))" gap="0.75rem">
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="0.75rem" bg="bg.panel">
          <Stat.Label color="fg.muted" fontSize="0.75rem">전체 후원자</Stat.Label>
          <Stat.ValueText fontSize="1.125rem" fontWeight="600">{BACKERS.length}명</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="0.75rem" bg="bg.panel">
          <Stat.Label color="fg.muted" fontSize="0.75rem">총 후원액</Stat.Label>
          <Stat.ValueText fontSize="1.125rem" fontWeight="600">{totalAmount.toLocaleString}원</Stat.ValueText>
        </Stat.Root>
      </Grid>

      {/* 미니 막대그래프 둘. 두 카드 높이를 범주 많은 그래프 기준으로 조정 */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="1rem">
        <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Text fontSize="0.75rem" color="fg.muted" mb="0.5rem">리워드 등급별</Text>
          <Box h={chartHeight}>
            <ResponsiveContainer>
              <BarChart data={byTier} layout="vertical" margin={{ top: 4, right: 14, bottom: 0, left: 0 }}>
                <CartesianGrid horizontal={false} stroke="var(--component-chart-grid)" />
                <XAxis
                  type="number" allowDecimals={false} tickLine={false} axisLine={false}
                  tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)" }}
                />
                <YAxis
                  type="category" dataKey="name" tickLine={false} axisLine={false}
                  width={100} interval={0}
                  // width: undefined 설정. 레인 두께가 줄바꿈 폭으로 새지 않게 방지
                  tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)", width: undefined }}
                  tickFormatter={(value: string) => truncate(value, 7)}
                />
                <Tooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
        <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Text fontSize="0.75rem" color="fg.muted" mb="0.5rem">캠페인별</Text>
          <Box h={chartHeight}>
            <ResponsiveContainer>
              <BarChart data={byCampaign} layout="vertical" margin={{ top: 4, right: 14, bottom: 0, left: 0 }}>
                <CartesianGrid horizontal={false} stroke="var(--component-chart-grid)" />
                <XAxis
                  type="number" allowDecimals={false} tickLine={false} axisLine={false}
                  tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)" }}
                />
                <YAxis
                  type="category" dataKey="name" tickLine={false} axisLine={false}
                  width={116} interval={0}
                  // width: undefined 설정. 레인 두께 96에서 116으로 변경
                  tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)", width: undefined }}
                  tickFormatter={(value: string) => truncate(value, 8)}
                />
                <Tooltip />
                <Bar dataKey="value" fill="var(--component-chart-series-2)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Grid>

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="0" bg="bg.panel" overflow="hidden">
        <Table.ScrollArea>
          <Table.Root size="sm" striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>이름</Table.ColumnHeader>
                <Table.ColumnHeader>캠페인</Table.ColumnHeader>
                <Table.ColumnHeader>리워드</Table.ColumnHeader>
                <Table.ColumnHeader>금액</Table.ColumnHeader>
                <Table.ColumnHeader>날짜</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {BACKERS.map((b) => (
                <Table.Row key={b.id}>
                  <Table.Cell fontSize="0.8125rem" fontWeight="500">
                    <HStack gap="0.5rem">
                      <Avatar.Root size="xs">
                        <Avatar.Fallback>{b.name.slice(0, 1)}</Avatar.Fallback>
                      </Avatar.Root>
                      <Text fontSize="0.8125rem">{b.name}</Text>
                    </HStack>
                  </Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{b.campaignTitle}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette="gray" size="sm">{b.tier}</Badge>
                  </Table.Cell>
                  <Table.Cell fontSize="0.8125rem">{b.amount.toLocaleString}원</Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{b.dateLabel}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Box>
    </VStack>
  );
}
