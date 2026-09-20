import { Badge, Box, Grid, Stat, Table, Text, VStack } from "@chakra-ui/react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BACKERS } from "../data";

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
                  tick={{ fontSize: 10, fill: "var(--component-chart-axis-fg)" }}
                />
                <YAxis
                  type="category" dataKey="name" tickLine={false} axisLine={false}
                  width={84} interval={0}
                  tick={{ fontSize: 10, fill: "var(--component-chart-axis-fg)" }}
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
                  tick={{ fontSize: 10, fill: "var(--component-chart-axis-fg)" }}
                />
                <YAxis
                  type="category" dataKey="name" tickLine={false} axisLine={false}
                  width={96} interval={0}
                  tick={{ fontSize: 10, fill: "var(--component-chart-axis-fg)" }}
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
                  <Table.Cell fontSize="0.8125rem" fontWeight="500">{b.name}</Table.Cell>
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
