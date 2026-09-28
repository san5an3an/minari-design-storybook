import * as React from "react";
import {
  Accordion, Avatar, Badge, Button, Card, Checkbox, Divider, Group, Image, NumberInput, Radio, Rating,
  RingProgress, Select, SimpleGrid, Stack, Stepper, Switch, Tabs, Text, TextInput, ThemeIcon, Timeline, Title,
} from "@mantine/core";
import { CalendarCheck, CreditCard, Luggage, MessageSquare, PlaneTakeoff, ShieldCheck, Star } from "lucide-react";
import { DEFAULT_PASSENGER, DESTINATIONS, TRIP_REVIEWS, type PassengerDraft } from "../data";
import type { ScreenProps } from "../screens";

const SEAT_CLASSES = [
  { value: "economy", label: "이코노미" },
  { value: "premium", label: "프리미엄 이코노미" },
  { value: "business", label: "비즈니스" },
];

export function BookingScreen({ selectedId }: ScreenProps) {
  const trip = DESTINATIONS.find((d) => d.id === selectedId) ?? DESTINATIONS[0];
  const [active, setActive] = React.useState(0);
  const [passenger, setPassenger] = React.useState<PassengerDraft>(DEFAULT_PASSENGER);

  const nights = trip.nights;
  const roomTotal = trip.nightlyPrice * nights;
  const insuranceFee = passenger.insurance ? 18000 : 0;
  const total = roomTotal + insuranceFee;
  const budget = 3000000;
  const usedPct = Math.min(100, Math.round((total / budget) * 100));

  return (
    <Stack gap="1rem">
      <Card withBorder radius="md" padding="0" style={{ overflow: "hidden" }}>
        <Group wrap="nowrap" gap={0} align="stretch">
          <Image src={trip.image} alt={trip.name} w="9rem" h="7rem" fit="cover" visibleFrom="sm" />
          <Stack gap="0.375rem" p="1rem" style={{ flex: 1 }}>
            <Group justify="space-between" wrap="wrap">
              <Title order={4}>{trip.name}, {trip.country}</Title>
              <Badge color="brand" variant="light">{trip.category}</Badge>
            </Group>
            <Group gap="0.25rem">
              <Rating value={trip.rating} fractions={2} readOnly size="0.85rem" />
              <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{trip.rating} ({trip.reviewCount}개 후기)</Text>
            </Group>
            <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
              {nights}박 · 1박 {trip.nightlyPrice.toLocaleString("ko-KR")}원부터
            </Text>
          </Stack>
        </Group>
      </Card>

      <Stepper active={active} onStepClick={setActive} size="sm" color="brand">
        <Stepper.Step label="항공편" description="일정 확인" icon={<PlaneTakeoff size={16} />}>
          <Text size="sm" mt="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
            직항 · 총 이동 10시간 30분 · 위탁 수하물 1개 포함.
          </Text>
        </Stepper.Step>
        <Stepper.Step label="좌석/옵션" description="정보 입력" icon={<Luggage size={16} />}>
          <Text size="sm" mt="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
            아래 예약자 정보를 채운 뒤 다음 단계로 진행하세요.
          </Text>
        </Stepper.Step>
        <Stepper.Step label="결제" description="확정" icon={<CreditCard size={16} />}>
          <Text size="sm" mt="0.5rem" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
            결제 수단을 확인하고 예약을 확정하세요.
          </Text>
        </Stepper.Step>
        <Stepper.Completed>
          <Text size="sm" mt="0.5rem" c="success">예약이 확정됐어요. 확인 메일을 보내드렸어요.</Text>
        </Stepper.Completed>
      </Stepper>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1rem">
        <Card withBorder radius="md" padding="md">
          <Text fw={600} size="sm" mb="0.75rem">예약자 정보</Text>
          <Stack gap="0.75rem">
            <TextInput
              label="이름"
              value={passenger.name}
              onChange={(e) => {
                const v = e.currentTarget.value;
                setPassenger((p) => ({ ...p, name: v }));
              }}
            />
            <TextInput
              label="이메일"
              type="email"
              value={passenger.email}
              onChange={(e) => {
                const v = e.currentTarget.value;
                setPassenger((p) => ({ ...p, email: v }));
              }}
            />
            <Group grow>
              <Select
                label="좌석 등급"
                data={SEAT_CLASSES}
                value={passenger.seatClass}
                onChange={(v) => setPassenger((p) => ({ ...p, seatClass: v ?? p.seatClass }))}
              />
              <NumberInput
                label="동반 인원"
                min={0}
                max={6}
                value={passenger.companions}
                onChange={(v) => setPassenger((p) => ({ ...p, companions: Number(v) || 0 }))}
              />
            </Group>
            <Radio.Group
              label="기내식"
              value={passenger.meal}
              onChange={(v) => setPassenger((p) => ({ ...p, meal: v }))}
            >
              <Group gap="1rem" mt="0.375rem">
                <Radio value="regular" label="일반식" />
                <Radio value="vegetarian" label="채식" />
                <Radio value="halal" label="할랄식" />
              </Group>
            </Radio.Group>
            <Checkbox
              label="여행자보험 추가 (+18,000원)"
              checked={passenger.insurance}
              onChange={(e) => {
                const v = e.currentTarget.checked;
                setPassenger((p) => ({ ...p, insurance: v }));
              }}
            />
            <Switch
              label="일정 변경 알림 받기"
              checked={passenger.notifyChanges}
              onChange={(e) => {
                const v = e.currentTarget.checked;
                setPassenger((p) => ({ ...p, notifyChanges: v }));
              }}
            />
          </Stack>
        </Card>

        <Stack gap="1rem">
          <Card withBorder radius="md" padding="md">
            <Group justify="space-between" align="center">
              <Stack gap="0.25rem">
                <Text fw={600} size="sm">결제 요약</Text>
                <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>숙박 {nights}박 + 옵션</Text>
              </Stack>
              <RingProgress
                size={72}
                thickness={7}
                label={<Text size="0.65rem" ta="center" fw={700}>{usedPct}%</Text>}
                sections={[{ value: usedPct, color: usedPct > 80 ? "danger" : "brand" }]}
              />
            </Group>
            <Divider my="0.75rem" />
            <Stack gap="0.375rem">
              <Group justify="space-between"><Text size="sm">숙박 요금</Text><Text size="sm">{roomTotal.toLocaleString("ko-KR")}원</Text></Group>
              <Group justify="space-between"><Text size="sm">여행자보험</Text><Text size="sm">{insuranceFee.toLocaleString("ko-KR")}원</Text></Group>
              <Divider />
              <Group justify="space-between"><Text fw={700}>총 결제 금액</Text><Text fw={700}>{total.toLocaleString("ko-KR")}원</Text></Group>
            </Stack>
            <Button fullWidth mt="0.75rem" color="brand" leftSection={<ShieldCheck size={14} />} onClick={ => setActive(3)}>
              결제하고 예약 확정
            </Button>
          </Card>

          <Card withBorder radius="md" padding="md">
            <Text fw={600} size="sm" mb="0.5rem">예약 진행 상태</Text>
            <Timeline active={active} bulletSize={20} lineWidth={2} color="brand">
              <Timeline.Item bullet={<CalendarCheck size={11} />} title="여정 선택">목적지·일정을 골랐어요.</Timeline.Item>
              <Timeline.Item bullet={<Luggage size={11} />} title="정보 입력">예약자 정보를 채우는 중이에요.</Timeline.Item>
              <Timeline.Item bullet={<CreditCard size={11} />} title="결제">결제 수단을 확인해요.</Timeline.Item>
              <Timeline.Item bullet={<ShieldCheck size={11} />} title="확정">예약 확인 메일이 도착해요.</Timeline.Item>
            </Timeline>
          </Card>
        </Stack>
      </SimpleGrid>

      <Tabs defaultValue="reviews" color="brand">
        <Tabs.List>
          <Tabs.Tab value="reviews" leftSection={<Star size={13} />}>후기 ({TRIP_REVIEWS.length})</Tabs.Tab>
          <Tabs.Tab value="policy" leftSection={<MessageSquare size={13} />}>취소·환불 정책</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="reviews" pt="0.75rem">
          <Stack gap="0.625rem">
            {TRIP_REVIEWS.map((r) => (
              <Group key={r.id} gap="0.625rem" wrap="nowrap" align="flex-start">
                <Avatar radius="xl" size="2rem">{r.author[0]}</Avatar>
                <Stack gap="0.125rem" style={{ flex: 1 }}>
                  <Group gap="0.375rem"><Text size="sm" fw={600}>{r.author}</Text><Rating value={r.rating} readOnly size="0.65rem" /></Group>
                  <Text size="sm" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{r.comment}</Text>
                </Stack>
              </Group>
            ))}
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="policy" pt="0.75rem">
          <Accordion variant="separated">
            <Accordion.Item value="cancel">
              <Accordion.Control icon={<ThemeIcon size="1.25rem" variant="light" color="brand"><ShieldCheck size={12} /></ThemeIcon>}>
                출발 7일 전까지 취소
              </Accordion.Control>
              <Accordion.Panel>전액 환불됩니다. 수수료가 없어요.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="late">
              <Accordion.Control icon={<ThemeIcon size="1.25rem" variant="light" color="warning"><ShieldCheck size={12} /></ThemeIcon>}>
                출발 3~6일 전 취소
              </Accordion.Control>
              <Accordion.Panel>숙박 요금의 50%가 환불됩니다.</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}
