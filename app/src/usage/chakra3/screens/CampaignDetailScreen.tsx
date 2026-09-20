import * as React from "react";
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import {
  AbsoluteCenter, Avatar, Badge, Box, Breadcrumb, Button, Dialog, Field, HStack, Image,
  NativeSelect, Portal, ProgressCircle, Progress, RadioCard, Switch, Table, Tag, Text, Timeline, VStack,
} from "@chakra-ui/react";
import { Megaphone, PartyPopper, Rocket } from "lucide-react";
import type { ScreenProps } from "../screens";
import { BACKERS, CAMPAIGNS, CAMPAIGN_UPDATES, REWARDS, type Campaign } from "../data";

const STATUS_PALETTE: Record<Campaign["status"], string> = {
  진행중: "brand", 성공: "success", 종료: "gray",
};
const STATUS_ORDER: Campaign["status"][] = ["진행중", "성공", "종료"];

// chakra 리셋이 SVG 속성을 덮어써 인라인 style로 처리하는 방식임
const TICK_STYLE = { fontSize: 10 } as const;

// 6주차 누적 비율 고정값 기준으로 raised 역산해 캠페인별 누적 곡선 생성
const TREND_SHAPE = [0.12, 0.28, 0.46, 0.64, 0.82, 1] as const;

const UPDATE_ICON = (title: string) => {
  if (title.includes("시작")) return Rocket;
  if (title.includes("달성")) return PartyPopper;
  return Megaphone;
};

export function CampaignDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const campaign = CAMPAIGNS.find((c) => c.id === selectedId) ?? CAMPAIGNS[0];
  const [status, setStatus] = React.useState<Campaign["status"]>(campaign?.status ?? "진행중");
  const [featured, setFeatured] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [selectedReward, setSelectedReward] = React.useState<string | undefined>(undefined);

  const rewards = campaign ? REWARDS.filter((r) => r.campaignId === campaign.id) : [];
  const backers = campaign ? BACKERS.filter((b) => b.campaignTitle === campaign.title) : [];
  const updates = campaign ? CAMPAIGN_UPDATES.filter((u) => u.campaignId === campaign.id) : [];
  // 같은 카테고리의 다른 캠페인 데이터 추출, bootstrap3와 chakra2 방식과 동일
  const sameCategory = campaign
    ? CAMPAIGNS.filter((c) => c.id !== campaign.id && c.category === campaign.category)
    : [];

  if (!campaign) {
    return (
      <Box borderWidth="1px" borderStyle="dashed" borderColor="border" borderRadius="control" p="2rem" textAlign="center">
        <Text color="fg.subtle" mb="0.5rem">캠페인을 먼저 골라 주세요. "캠페인" 탭에서 카드를 눌러 보세요.</Text>
        <Button size="sm" variant="outline" onClick={ => onNavigate?.("campaigns")}>캠페인 목록으로</Button>
      </Box>
    );
  }

  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  const trend = TREND_SHAPE.map((ratio, i) => ({
    week: `${i + 1}주차`,
    amount: Math.round((campaign.raised * ratio) / 10000),
  }));

  const openSaveConfirm =  => setConfirmOpen(true);
  const applySave =  => setConfirmOpen(false);

  return (
    <VStack align="stretch" gap="1rem">
      {/* 탐색용 breadcrumb */}
      <Breadcrumb.Root size="sm">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link onClick={ => onNavigate?.("campaigns")} cursor="pointer">캠페인</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{campaign.title}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <HStack gap="1rem" align="flex-start">
        <Image src={campaign.image} alt={campaign.title} borderRadius="control" boxSize="6rem" objectFit="cover" flexShrink={0} />
        <VStack align="start" gap="0.25rem" flex="1" minW="0">
          <HStack gap="0.5rem">
            <Text fontWeight="600" fontSize="1.125rem">{campaign.title}</Text>
            <Badge colorPalette={STATUS_PALETTE[campaign.status]} size="sm">{campaign.status}</Badge>
          </HStack>
          <Text fontSize="0.8125rem" color="fg.subtle">
            {campaign.category} · 후원 {campaign.backerCount}명 · {campaign.daysLeft > 0 ? `${campaign.daysLeft}일 남음` : "마감"}
          </Text>
          <Progress.Root value={pct} w="100%" size="sm" colorPalette={pct >= 100 ? "success" : "brand"}>
            <Progress.Track><Progress.Range /></Progress.Track>
          </Progress.Root>
          <Text fontSize="0.75rem" color="fg.subtle">
            {campaign.raised.toLocaleString}원 / {campaign.goal.toLocaleString}원 ({pct}%)
          </Text>
        </VStack>
        {/* 목표 달성률 Progress.Circle 표시, 막대 Progress와 동일 값의 다른 형태 */}
        <VStack gap="0.25rem" flexShrink={0}>
          <ProgressCircle.Root value={pct} size="lg" colorPalette={pct >= 100 ? "success" : "brand"}>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range strokeLinecap="round" />
            </ProgressCircle.Circle>
            <AbsoluteCenter>
              <ProgressCircle.ValueText fontSize="0.8125rem" fontWeight="600" />
            </AbsoluteCenter>
          </ProgressCircle.Root>
          <Text fontSize="0.6875rem" color="fg.subtle">달성률</Text>
        </VStack>
      </HStack>

      {/* 리워드 등급 선택용 RadioCard */}
      {rewards.length > 0 ? (
        <Box>
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">리워드 선택</Text>
          <RadioCard.Root value={selectedReward ?? null} onValueChange={(e) => setSelectedReward(e.value ?? undefined)}>
            <VStack align="stretch" gap="0.5rem">
              {rewards.map((r) => (
                <RadioCard.Item key={r.tier} value={r.tier}>
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl>
                    <RadioCard.ItemContent>
                      <HStack justify="space-between" w="100%">
                        <RadioCard.ItemText fontSize="0.8125rem" fontWeight="500">{r.tier}</RadioCard.ItemText>
                        <Text fontSize="0.75rem" color="fg.subtle">{r.price.toLocaleString}원</Text>
                      </HStack>
                      <RadioCard.ItemDescription fontSize="0.75rem">
                        {r.claimed}{r.limit ? ` / ${r.limit}` : ""} 신청
                      </RadioCard.ItemDescription>
                    </RadioCard.ItemContent>
                    <RadioCard.ItemIndicator />
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            </VStack>
          </RadioCard.Root>
          {selectedReward ? (
            <Text fontSize="0.75rem" color="brand.fg" mt="0.5rem">
              「{selectedReward}」 리워드를 선택했어요. 관리자 보기라 실제 결제는 없어요.
            </Text>
          ) : null}
        </Box>
      ) : null}

      {/* 후원 추이 영역차트, isAnimationActive 필수 지정 */}
      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">후원 추이(누적, 만원)</Text>
        <Box h="9rem">
          <ResponsiveContainer>
            <AreaChart data={trend} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="chk3-detail-trend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--component-chart-series-1)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--component-chart-series-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--component-chart-grid)" />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)" }} />
              <YAxis tickLine={false} axisLine={false} width={40} tick={{ style: TICK_STYLE, fill: "var(--component-chart-axis-fg)" }} />
              <Tooltip />
              <Area
                type="monotone" dataKey="amount" stroke="var(--component-chart-series-1)" strokeWidth={2}
                fill="url(#chk3-detail-trend)" isAnimationActive={false} dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {updates.length > 0 ? (
        <Box>
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">업데이트</Text>
          <Timeline.Root size="sm" maxW="100%">
            {updates.map((u, i) => {
              const Icon = UPDATE_ICON(u.title);
              return (
                <Timeline.Item key={i}>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator>
                      <Icon size={12} />
                    </Timeline.Indicator>
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title fontSize="0.8125rem">{u.title}</Timeline.Title>
                    <Timeline.Description>{u.dateLabel}</Timeline.Description>
                    <Text fontSize="0.75rem" color="fg.subtle">{u.body}</Text>
                  </Timeline.Content>
                </Timeline.Item>
              );
            })}
          </Timeline.Root>
        </Box>
      ) : null}

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">캠페인 관리</Text>
        <VStack align="stretch" gap="0.75rem">
          <HStack gap="0.75rem" flexWrap="wrap" align="flex-end">
            <Field.Root maxW="10rem">
              <Field.Label fontSize="0.75rem">상태</Field.Label>
              <NativeSelect.Root size="sm">
                <NativeSelect.Field value={status} onChange={(e) => setStatus(e.target.value as Campaign["status"])}>
                  {STATUS_ORDER.map((s) => <option key={s} value={s}>{s}</option>)}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field.Root>
            <Switch.Root checked={featured} onCheckedChange={(e) => setFeatured(e.checked)} size="sm">
              <Switch.HiddenInput />
              <Switch.Control><Switch.Thumb /></Switch.Control>
              <Switch.Label fontSize="0.8125rem">추천 캠페인으로 노출</Switch.Label>
            </Switch.Root>
            <Button size="sm" colorPalette="brand" onClick={openSaveConfirm}>저장</Button>
          </HStack>
        </VStack>
      </Box>

      {/* 저장 확인 Dialog. 상태, 노출 여부가 바뀌는 동작이라 한 번 더 확인 */}
      <Dialog.Root open={confirmOpen} onOpenChange={(e) => setConfirmOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title fontSize="1rem">캠페인 정보를 저장할까요?</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text fontSize="0.8125rem" color="fg.subtle">
                  상태를 「{status}」로, 추천 노출을 {featured ? "켬" : "끔"}으로 저장해요.
                </Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" size="sm">취소</Button>
                </Dialog.ActionTrigger>
                <Button size="sm" colorPalette="brand" onClick={applySave}>저장</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      {backers.length > 0 ? (
        <Box>
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">최근 후원자</Text>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>이름</Table.ColumnHeader>
                <Table.ColumnHeader>리워드</Table.ColumnHeader>
                <Table.ColumnHeader>금액</Table.ColumnHeader>
                <Table.ColumnHeader>날짜</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {backers.map((b) => (
                <Table.Row key={b.id}>
                  <Table.Cell fontSize="0.8125rem">
                    <HStack gap="0.5rem">
                      <Avatar.Root size="xs">
                        <Avatar.Fallback>{b.name.slice(0, 1)}</Avatar.Fallback>
                      </Avatar.Root>
                      <Text fontSize="0.8125rem">{b.name}</Text>
                    </HStack>
                  </Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{b.tier}</Table.Cell>
                  <Table.Cell fontSize="0.8125rem">{b.amount.toLocaleString}원</Table.Cell>
                  <Table.Cell fontSize="0.8125rem" color="fg.subtle">{b.dateLabel}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      ) : null}

      {sameCategory.length > 0 ? (
        <Box>
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">같은 분류({campaign.category})의 다른 캠페인</Text>
          <VStack align="stretch" gap="0.25rem">
            {sameCategory.map((c) => (
              <HStack key={c.id} justify="space-between" gap="0.5rem">
                <Text
                  fontSize="0.8125rem" color="brand.fg" cursor="pointer" truncate
                  onClick={ => { onSelect?.(c.id); onNavigate?.("detail"); }}
                >
                  {c.title}
                </Text>
                <Tag.Root size="sm" flexShrink={0}>
                  <Tag.Label>{c.category}</Tag.Label>
                </Tag.Root>
                <Badge colorPalette={STATUS_PALETTE[c.status]} size="sm" flexShrink={0}>{c.status}</Badge>
              </HStack>
            ))}
          </VStack>
        </Box>
      ) : null}
    </VStack>
  );
}
