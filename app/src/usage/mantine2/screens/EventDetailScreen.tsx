import * as React from "react";
import {
  Badge, Button, Card, ColorInput, FileInput, Group, MultiSelect, NumberInput, Progress, Radio, SimpleGrid,
  Slider, Stack, Switch, Tabs, Text, Textarea, TextInput, ThemeIcon,
} from "@mantine/core";
import {
  Bell, CalendarDays, CheckCircle2, Image as ImageIcon, Info, MapPin, Palette, Ticket, Users,
} from "lucide-react";
import { EVENTS } from "../data";
import type { ScreenProps } from "../screens";

const BRAND_TOKEN = "--semantic-bg-brand-default";

function useBrandTokenValue: string {
  const [value, setValue] = React.useState("");
  React.useEffect( => {
    const root = document.documentElement;
    const read =  => setValue(getComputedStyle(root).getPropertyValue(BRAND_TOKEN).trim);
    read;
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true });
    return  => observer.disconnect;
  }, []);
  return value;
}

export function EventDetailScreen({ selectedId }: ScreenProps) {
  const event = EVENTS.find((e) => e.id === selectedId) ?? EVENTS[0];

  const [title, setTitle] = React.useState(event.title);
  const [description, setDescription] = React.useState("개발자와 디자이너가 모여 최신 트렌드를 나누는 행사입니다.");
  const [capacity, setCapacity] = React.useState(event.capacity);
  const [date, setDate] = React.useState("2026-10-14");
  // null일 때 시스템 브랜드 토큰 값 적용
  const [themeColor, setThemeColor] = React.useState<string | null>(null);
  const brandValue = useBrandTokenValue;
  const accent = themeColor ?? `var(${BRAND_TOKEN})`;
  const [eventType, setEventType] = React.useState("offline");
  const [isPublic, setIsPublic] = React.useState(true);
  const [waitlist, setWaitlist] = React.useState(true);
  const [price, setPrice] = React.useState(event.ticketPrice);
  const [earlyBirdPct, setEarlyBirdPct] = React.useState(20);
  const [channels, setChannels] = React.useState<string[]>(["email", "push"]);

  const pct = Math.round((event.registered / event.capacity) * 100);

  return (
    <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="1rem">
      <Card withBorder radius="md" padding="md" style={{ gridColumn: "span 2" }}>
        <Tabs defaultValue="basic" color="brand">
          <Tabs.List>
            <Tabs.Tab value="basic" leftSection={<Info size={13} />}>기본정보</Tabs.Tab>
            <Tabs.Tab value="ticket" leftSection={<Ticket size={13} />}>티켓</Tabs.Tab>
            <Tabs.Tab value="notify" leftSection={<Bell size={13} />}>알림</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="basic" pt="0.875rem">
            <Stack gap="0.75rem">
              <TextInput label="이벤트명" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
              <Textarea label="설명" minRows={3} value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
              <Group grow>
                <TextInput
                  label="일시"
                  type="date"
                  leftSection={<CalendarDays size={13} />}
                  value={date}
                  onChange={(e) => setDate(e.currentTarget.value)}
                />
                <NumberInput label="정원" min={1} leftSection={<Users size={13} />} value={capacity} onChange={(v) => setCapacity(Number(v) || 0)} />
              </Group>
              <TextInput label="장소" leftSection={<MapPin size={13} />} defaultValue={event.venue} />
              <Radio.Group label="행사 유형" value={eventType} onChange={setEventType}>
                <Group gap="1rem" mt="0.375rem">
                  <Radio value="offline" label="오프라인" />
                  <Radio value="online" label="온라인" />
                  <Radio value="hybrid" label="하이브리드" />
                </Group>
              </Radio.Group>
              <Group grow align="flex-end">
                <ColorInput label="테마 색상" leftSection={<Palette size={13} />} value={themeColor ?? brandValue} onChange={setThemeColor} />
                <FileInput label="배너 이미지" placeholder="파일 선택" leftSection={<ImageIcon size={13} />} clearable />
              </Group>
              <Switch label="공개 이벤트로 노출" checked={isPublic} onChange={(e) => setIsPublic(e.currentTarget.checked)} />
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="ticket" pt="0.875rem">
            <Stack gap="0.875rem">
              <NumberInput label="티켓 가격 (원)" min={0} step={1000} value={price} onChange={(v) => setPrice(Number(v) || 0)} />
              <Stack gap="0.25rem">
                <Text size="sm" fw={500}>얼리버드 할인율</Text>
                <Slider value={earlyBirdPct} onChange={setEarlyBirdPct} min={0} max={50} step={5} color="brand" label={(v) => `${v}%`} marks={[{ value: 0, label: "0%" }, { value: 25, label: "25%" }, { value: 50, label: "50%" }]} />
              </Stack>
              <Switch label="대기자 명단 운영" checked={waitlist} onChange={(e) => setWaitlist(e.currentTarget.checked)} />
              <Card withBorder radius="md" padding="0.75rem">
                <Group justify="space-between" mb="0.375rem"><Text size="sm">판매율</Text><Text size="sm" fw={600}>{pct}%</Text></Group>
                <Progress value={pct} color={pct >= 90 ? "warning" : "brand"} radius="xl" />
              </Card>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="notify" pt="0.875rem">
            <Stack gap="0.75rem">
              <MultiSelect
                label="알림 채널"
                data={[{ value: "email", label: "이메일" }, { value: "sms", label: "SMS" }, { value: "push", label: "푸시" }]}
                value={channels}
                onChange={setChannels}
              />
              <Switch label="등록 확인 즉시 발송" defaultChecked />
              <Switch label="행사 하루 전 리마인드" defaultChecked />
              <Switch label="정원 90% 도달 시 운영팀 알림" defaultChecked={false} />
            </Stack>
          </Tabs.Panel>
        </Tabs>

        <Group justify="flex-end" mt="1rem" gap="0.5rem">
          <Button variant="default">임시저장</Button>
          <Button color="brand">변경사항 저장</Button>
        </Group>
      </Card>

      <Stack gap="1rem">
        <Card withBorder radius="md" padding="md">
          <Text fw={600} size="sm" mb="0.625rem">미리보기</Text>
          <Card withBorder radius="md" padding="sm" style={{ borderColor: accent }}>
            <Group gap="0.5rem" wrap="nowrap">
              <ThemeIcon size="2rem" radius="md" style={{ background: accent, color: "var(--semantic-fg-on-brand-default)" }}>
                <CalendarDays size={14} />
              </ThemeIcon>
              <Stack gap={0} style={{ minWidth: 0 }}>
                <Text size="sm" fw={600} truncate>{title}</Text>
                <Text size="xs" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>{date} · {event.venue}</Text>
              </Stack>
            </Group>
            <Badge mt="0.5rem" variant="light" color={isPublic ? "success" : "brand"}>{isPublic ? "공개" : "비공개"}</Badge>
          </Card>
        </Card>

        <Card withBorder radius="md" padding="md">
          <Text fw={600} size="sm" mb="0.625rem">발행 전 체크리스트</Text>
          <Stack gap="0.5rem">
            {[
              { label: "기본 정보 입력", done: true },
              { label: "티켓 가격 설정", done: price > 0 || event.ticketPrice === 0 },
              { label: "배너 이미지 업로드", done: false },
              { label: "알림 채널 연결", done: channels.length > 0 },
            ].map((item) => (
              <Group key={item.label} gap="0.5rem">
                <CheckCircle2 size={15} color={item.done ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtlest)"} />
                <Text size="sm" style={{ color: item.done ? "var(--semantic-fg-neutral-default)" : "var(--semantic-fg-neutral-subtle)" }}>{item.label}</Text>
              </Group>
            ))}
          </Stack>
        </Card>
      </Stack>
    </SimpleGrid>
  );
}
