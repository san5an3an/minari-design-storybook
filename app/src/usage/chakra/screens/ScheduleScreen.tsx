import * as React from "react";
import {
  Box, Button, Field, Grid, HStack, Input, NativeSelect, Progress, Stat, Switch, Text, VStack,
} from "@chakra-ui/react";
import { CLASSES } from "../data";

const INSTRUCTORS = [...new Set(CLASSES.map((c) => c.instructor))];

export function ScheduleScreen {
  const [instructor, setInstructor] = React.useState("전체");
  const [nearFullOnly, setNearFullOnly] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [newTime, setNewTime] = React.useState("");
  const [newInstructor, setNewInstructor] = React.useState(INSTRUCTORS[0]);

  const avgFill = Math.round(
    (CLASSES.reduce((s, c) => s + c.booked / c.capacity, 0) / CLASSES.length) * 100,
  );
  const fullCount = CLASSES.filter((c) => c.booked === c.capacity).length;

  const rows = CLASSES.filter(
    (c) =>
      (instructor === "전체" || c.instructor === instructor) &&
      (!nearFullOnly || c.booked / c.capacity >= 0.85),
  );

  return (
    <VStack align="stretch" gap="1rem">
      <Grid templateColumns="repeat(auto-fit, minmax(9rem, 1fr))" gap="1rem">
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">오늘 수업</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{CLASSES.length}개</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">평균 채움률</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{avgFill}%</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">마감(정원 100%)</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{fullCount}개</Stat.ValueText>
        </Stat.Root>
      </Grid>

      <HStack gap="0.75rem" flexWrap="wrap">
        <NativeSelect.Root size="sm" maxW="10rem">
          <NativeSelect.Field value={instructor} onChange={(e) => setInstructor(e.target.value)}>
            <option value="전체">전체 강사</option>
            {INSTRUCTORS.map((n) => <option key={n} value={n}>{n}</option>)}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
        <Switch.Root
          checked={nearFullOnly}
          onCheckedChange={(e) => setNearFullOnly(e.checked)}
          size="sm"
        >
          <Switch.HiddenInput />
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Label>마감 임박만 보기</Switch.Label>
        </Switch.Root>
      </HStack>

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="0" bg="bg.panel" overflow="hidden">
        <VStack align="stretch" gap="0" divideY="1px" divideColor="border">
          {rows.map((c) => {
            const ratio = (c.booked / c.capacity) * 100;
            const full = c.booked === c.capacity;
            return (
              <HStack key={c.id} justify="space-between" gap="0.75rem" px="1rem" py="0.75rem">
                <VStack align="start" gap="0" minW="9rem">
                  <Text fontSize="0.8125rem" fontWeight="500">{c.time} · {c.name}</Text>
                  <Text fontSize="0.75rem" color="fg.subtle">{c.instructor}</Text>
                </VStack>
                <Progress.Root value={ratio} flex="1" size="sm" colorPalette={full ? "danger" : "brand"}>
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                </Progress.Root>
                <Text fontSize="0.75rem" color="fg.subtle" minW="3rem" textAlign="right">
                  {c.booked}/{c.capacity}
                </Text>
              </HStack>
            );
          })}
        </VStack>
      </Box>

      {/* 새 수업 등록. Field+Input+NativeSelect 조합, 필터 Select, 회원 검색과 겹치지 않는 위치 */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">새 수업 등록</Text>
        <HStack gap="0.75rem" flexWrap="wrap" align="flex-end">
          <Field.Root maxW="10rem">
            <Field.Label fontSize="0.75rem">시각</Field.Label>
            <Input size="sm" type="time" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
          </Field.Root>
          <Field.Root maxW="14rem">
            <Field.Label fontSize="0.75rem">수업명</Field.Label>
            <Input size="sm" placeholder="예: 저녁 하타 요가" value={newName} onChange={(e) => setNewName(e.target.value)} />
          </Field.Root>
          <Field.Root maxW="10rem">
            <Field.Label fontSize="0.75rem">강사</Field.Label>
            <NativeSelect.Root size="sm">
              <NativeSelect.Field value={newInstructor} onChange={(e) => setNewInstructor(e.target.value)}>
                {INSTRUCTORS.map((n) => <option key={n} value={n}>{n}</option>)}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
          <Button size="sm" colorPalette="brand">등록</Button>
        </HStack>
      </Box>
    </VStack>
  );
}
