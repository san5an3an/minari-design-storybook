import * as React from "react";
import {
  AbsoluteCenter, Avatar, AvatarGroup, Badge, Box, Dialog, Grid, HStack, Portal, Progress,
  ProgressCircle, Stat, Table, Text, VStack,
} from "@chakra-ui/react";
import {
  Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { BOOKINGS, CLASSES, CLASS_TYPE_SHARE, WEEKLY_TREND, type Booking } from "../data";

// 눈금 글자 크기는 인라인 style 로 지정. tick fontSize 표현 속성은 Chakra 리셋에 덮임
const TICK_STYLE = { fontSize: 11 } as const;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=60";

const DONUT_COLORS = [
  "var(--component-chart-series-1)",
  "var(--component-chart-series-2)",
  "var(--component-chart-series-3)",
  "var(--component-chart-series-4)",
  "var(--component-chart-series-5)",
];

const STATUS_PALETTE: Record<Booking["status"], string> = {
  확정: "success",
  대기: "warning",
  취소: "gray",
};

function TodayHero {
  const totalBooked = CLASSES.reduce((sum, c) => sum + c.booked, 0);
  return (
    <Box
      backgroundImage={
        `linear-gradient(180deg, color-mix(in oklch, var(--chakra-colors-brand-solid) 15%, transparent) 0%, `
        + `color-mix(in oklch, var(--chakra-colors-brand-solid) 88%, black) 78%), url("${HERO_IMAGE}")`
      }
      backgroundSize="cover"
      backgroundPosition="center"
      borderRadius="container"
      boxShadow="var(--semantic-shadow-raised)"
      minH="9rem"
      p="1.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      gap="0.25rem"
    >
      <Text color="brand.contrast" fontSize="1.125rem" fontWeight="600">
        오늘 예약 {totalBooked}건, 좋은 하루예요
      </Text>
      <Text color="brand.contrast" opacity={0.85} fontSize="0.875rem">
        마감 임박한 수업부터 확인해 보세요.
      </Text>
    </Box>
  );
}

const STAT_GRID_CSS = `
.chk1-stat-cq { container-type: inline-size; container-name: chk1stats; }
.chk1-stat-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
@container chk1stats (min-width: 47rem) {
  .chk1-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

function StatTile({ label, value, help }: { label: string; value: string; help?: string }) {
  return (
    <Stat.Root
      borderWidth="1px" borderColor="border" borderRadius="control"
      p="1rem" bg="bg.panel" flex="1 1 10rem" minW="10rem"
    >
      <Stat.Label color="fg.muted">{label}</Stat.Label>
      <Stat.ValueText fontSize="1.5rem" fontWeight="600">{value}</Stat.ValueText>
      {help ? <Stat.HelpText color="fg.subtle">{help}</Stat.HelpText> : null}
    </Stat.Root>
  );
}

export function TodayScreen {
  const totalBooked = CLASSES.reduce((sum, c) => sum + c.booked, 0);
  const totalCapacity = CLASSES.reduce((sum, c) => sum + c.capacity, 0);
  const fillRate = Math.round((totalBooked / totalCapacity) * 100);
  const almostFull = CLASSES.filter((c) => c.booked / c.capacity >= 0.85);
  const [selectedClassId, setSelectedClassId] = React.useState<string | null>(null);
  const selectedClass = CLASSES.find((c) => c.id === selectedClassId) ?? null;
  const openClass = (classId: string) => setSelectedClassId(classId);
  const selectedAttendees = selectedClass
    ? BOOKINGS.filter((b) => b.className === selectedClass.name && b.time === selectedClass.time && b.status !== "취소")
    : [];

  return (
    <VStack align="stretch" gap="1rem">
      <style>{STAT_GRID_CSS}</style>
      <TodayHero />

      <Box className="chk1-stat-cq">
        <Box className="chk1-stat-grid">
          <StatTile label="오늘 예약" value={`${totalBooked}건`} help={`정원 ${totalCapacity}석 중`} />
          <StatTile label="채움률" value={`${fillRate}%`} help="9개 수업 평균" />
          <StatTile label="신규 회원(이번 달)" value="3명" help="지난달 대비 +1" />
          <StatTile label="이번 달 매출" value="8,420,000원" help="전월 대비 +6%" />
        </Box>
      </Box>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap="1rem">
        <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">최근 7일 예약 추이</Text>
          <Box h="10rem">
            <ResponsiveContainer>
              <LineChart data={WEEKLY_TREND as unknown as Record<string, unknown>[]}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ style: TICK_STYLE }} />
                <YAxis tickLine={false} axisLine={false} tick={{ style: TICK_STYLE }} width={28} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="var(--chakra-colors-brand-solid)" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">클래스 유형별 비중</Text>
          <Box h="10rem">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={CLASS_TYPE_SHARE as unknown as Record<string, unknown>[]}
                  dataKey="value" nameKey="name" innerRadius="55%" outerRadius="85%" paddingAngle={2}
                >
                  {CLASS_TYPE_SHARE.map((_, i) => (
                    <Cell key={i} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Grid>

      {/* 마감 임박 리스트. 정원 85% 이상 찬 수업 */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">마감 임박 수업</Text>
        <VStack align="stretch" gap="0.5rem">
          {almostFull.map((c) => (
            <HStack key={c.id} justify="space-between" gap="0.75rem" cursor="pointer" onClick={ => openClass(c.id)}>
              <HStack gap="0.5rem">
                <Text fontSize="0.8125rem" fontWeight="500">{c.time}</Text>
                <Text fontSize="0.8125rem">{c.name}</Text>
                <Text fontSize="0.75rem" color="fg.subtle">{c.instructor}</Text>
              </HStack>
              <Progress.Root value={(c.booked / c.capacity) * 100} w="8rem" size="sm" colorPalette={c.booked === c.capacity ? "danger" : "warning"}>
                <Progress.Track>
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
              <Text fontSize="0.75rem" color="fg.subtle" minW="3rem" textAlign="right">
                {c.booked}/{c.capacity}
              </Text>
            </HStack>
          ))}
        </VStack>
      </Box>

      {/* 오늘 예약자 이름, 넓은 테이블 항목용 */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="0" bg="bg.panel" overflow="hidden">
        <Table.ScrollArea>
          <Table.Root size="sm" striped>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>회원</Table.ColumnHeader>
                <Table.ColumnHeader>수업</Table.ColumnHeader>
                <Table.ColumnHeader>시각</Table.ColumnHeader>
                <Table.ColumnHeader>상태</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {BOOKINGS.map((b) => {
                const bookingClass = CLASSES.find((c) => c.name === b.className && c.time === b.time);
                return (
                  <Table.Row
                    key={b.id}
                    cursor={bookingClass ? "pointer" : undefined}
                    onClick={bookingClass ?  => openClass(bookingClass.id) : undefined}
                  >
                    <Table.Cell>
                      <HStack gap="0.5rem">
                        <Avatar.Root size="xs">
                          <Avatar.Fallback>{b.memberName.slice(0, 1)}</Avatar.Fallback>
                        </Avatar.Root>
                        <Text fontSize="0.8125rem">{b.memberName}</Text>
                      </HStack>
                    </Table.Cell>
                    <Table.Cell fontSize="0.8125rem">{b.className}</Table.Cell>
                    <Table.Cell fontSize="0.8125rem" color="fg.subtle">{b.time}</Table.Cell>
                    <Table.Cell>
                      <Badge colorPalette={STATUS_PALETTE[b.status]} size="sm">{b.status}</Badge>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Box>

      {/* 수업 상세 다이얼로그. 정원은 Progress.Circle, 예약자는 AvatarGroup으로 표시 */}
      <Dialog.Root open={selectedClass !== null} onOpenChange={(e) => { if (!e.open) setSelectedClassId(null); }}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              {selectedClass ? (
                <>
                  <Dialog.Header>
                    <Dialog.Title fontSize="1rem">{selectedClass.time} · {selectedClass.name}</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <HStack gap="1rem" align="center">
                      <ProgressCircle.Root
                        value={Math.round((selectedClass.booked / selectedClass.capacity) * 100)}
                        size="lg"
                        colorPalette={selectedClass.booked === selectedClass.capacity ? "danger" : "brand"}
                      >
                        <ProgressCircle.Circle>
                          <ProgressCircle.Track />
                          <ProgressCircle.Range strokeLinecap="round" />
                        </ProgressCircle.Circle>
                        <AbsoluteCenter>
                          <ProgressCircle.ValueText fontSize="0.75rem" fontWeight="600" />
                        </AbsoluteCenter>
                      </ProgressCircle.Root>
                      <VStack align="start" gap="0.125rem">
                        <Text fontSize="0.8125rem" color="fg.subtle">담당 강사</Text>
                        <Text fontSize="0.875rem" fontWeight="500">{selectedClass.instructor}</Text>
                        <Text fontSize="0.75rem" color="fg.subtle">
                          {selectedClass.booked}/{selectedClass.capacity}명 예약
                        </Text>
                      </VStack>
                    </HStack>
                    {selectedAttendees.length > 0 ? (
                      <VStack align="start" gap="0.375rem" mt="1rem">
                        <Text fontSize="0.75rem" color="fg.subtle">예약자</Text>
                        <AvatarGroup gap="0" spaceX="-0.5rem" size="sm">
                          {selectedAttendees.map((b) => (
                            <Avatar.Root key={b.id}>
                              <Avatar.Fallback>{b.memberName.slice(0, 1)}</Avatar.Fallback>
                            </Avatar.Root>
                          ))}
                        </AvatarGroup>
                      </VStack>
                    ) : null}
                  </Dialog.Body>
                </>
              ) : (
                <Box p="1rem" />
              )}
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </VStack>
  );
}
