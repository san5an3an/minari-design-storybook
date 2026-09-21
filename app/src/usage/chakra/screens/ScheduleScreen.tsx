import * as React from "react";
import {
  Box, Button, Field, HStack, Input, NativeSelect, Popover, Portal, Progress, Stat,
  Switch, Tag, Text, VStack,
} from "@chakra-ui/react";
import { Info } from "lucide-react";
import { CLASSES as SEED_CLASSES, type ClassSession } from "../data";
import { toaster } from "../toaster";

const INSTRUCTORS = [...new Set(SEED_CLASSES.map((c) => c.instructor))];

const SCHEDULE_STAT_GRID_CSS = `
.chk1-sch-stat-cq { container-type: inline-size; container-name: chk1schstats; }
.chk1-sch-stat-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
@container chk1schstats (min-width: 35rem) {
  .chk1-sch-stat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
`;

export function ScheduleScreen {
  const [classes, setClasses] = React.useState<ClassSession[]>(SEED_CLASSES);
  const [instructor, setInstructor] = React.useState("전체");
  const [nearFullOnly, setNearFullOnly] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [newTime, setNewTime] = React.useState("");
  const [newInstructor, setNewInstructor] = React.useState(INSTRUCTORS[0]);

  const avgFill = Math.round(
    (classes.reduce((s, c) => s + c.booked / c.capacity, 0) / classes.length) * 100,
  );
  const fullCount = classes.filter((c) => c.booked === c.capacity).length;

  const rows = classes.filter(
    (c) =>
      (instructor === "전체" || c.instructor === instructor) &&
      (!nearFullOnly || c.booked / c.capacity >= 0.85),
  );

  const registerClass =  => {
    if (newName.trim === "" || newTime.trim === "") return;
    const created: ClassSession = {
      id: `c-new-${Date.now}`,
      time: newTime,
      name: newName.trim,
      instructor: newInstructor,
      capacity: 10,
      booked: 0,
    };
    setClasses((prev) => [...prev, created].sort((a, b) => a.time.localeCompare(b.time)));
    toaster.create({ type: "success", title: "수업을 등록했어요", description: `${newTime} · ${created.name}` });
    setNewName("");
    setNewTime("");
  };

  return (
    <VStack align="stretch" gap="1rem">
      <style>{SCHEDULE_STAT_GRID_CSS}</style>
      <Box className="chk1-sch-stat-cq">
        <Box className="chk1-sch-stat-grid">
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">오늘 수업</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{classes.length}개</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">평균 채움률</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{avgFill}%</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">마감(정원 100%)</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{fullCount}개</Stat.ValueText>
          </Stat.Root>
        </Box>
      </Box>

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
        {/* Popover 범례, 신규 미사용 항목 */}
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button size="xs" variant="ghost" aria-label="마감 임박 기준 안내">
              <Info size={14} />
            </Button>
          </Popover.Trigger>
          <Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Arrow />
                <Popover.Body>
                  <Popover.Title fontWeight="600" fontSize="0.8125rem">마감 임박 기준</Popover.Title>
                  <Text fontSize="0.8125rem" color="fg.subtle" mt="0.25rem">
                    정원의 85% 이상 예약된 수업을 "마감 임박"으로 봐요.
                  </Text>
                </Popover.Body>
              </Popover.Content>
            </Popover.Positioner>
          </Portal>
        </Popover.Root>
      </HStack>

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="0" bg="bg.panel" overflow="hidden">
        <VStack align="stretch" gap="0" divideY="1px" divideColor="border">
          {rows.map((c) => {
            const ratio = (c.booked / c.capacity) * 100;
            const full = c.booked === c.capacity;
            return (
              <HStack key={c.id} justify="space-between" gap="0.75rem" px="1rem" py="0.75rem">
                <VStack align="start" gap="0.125rem" minW="9rem">
                  <Text fontSize="0.8125rem" fontWeight="500">{c.time} · {c.name}</Text>
                  <Tag.Root size="sm" colorPalette="gray" w="fit-content">
                    <Tag.Label>{c.instructor}</Tag.Label>
                  </Tag.Root>
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

      {/* 새 수업 등록 폼 */}
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
          <Button size="sm" colorPalette="brand" onClick={registerClass} disabled={newName.trim === "" || newTime.trim === ""}>
            등록
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
