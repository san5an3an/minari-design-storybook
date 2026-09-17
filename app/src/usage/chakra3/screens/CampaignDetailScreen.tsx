import * as React from "react";
import {
  Badge, Box, Button, Field, HStack, Image, NativeSelect, Progress, Table, Text, VStack,
} from "@chakra-ui/react";
import type { ScreenProps } from "../screens";
import { BACKERS, CAMPAIGNS, REWARDS, type Campaign } from "../data";

const STATUS_PALETTE: Record<Campaign["status"], string> = {
  진행중: "brand", 성공: "success", 종료: "gray",
};
const STATUS_ORDER: Campaign["status"][] = ["진행중", "성공", "종료"];

export function CampaignDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const campaign = CAMPAIGNS.find((c) => c.id === selectedId);
  const [status, setStatus] = React.useState<Campaign["status"]>(campaign?.status ?? "진행중");

  const rewards = campaign ? REWARDS.filter((r) => r.campaignId === campaign.id) : [];
  const backers = campaign ? BACKERS.filter((b) => b.campaignTitle === campaign.title) : [];
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

  return (
    <VStack align="stretch" gap="1rem">
      <HStack gap="1rem" align="flex-start">
        <Image src={campaign.image} alt={campaign.title} borderRadius="control" boxSize="6rem" objectFit="cover" flexShrink={0} />
        <VStack align="start" gap="0.25rem" flex="1">
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
      </HStack>

      {rewards.length > 0 ? (
        <Box>
          <Text fontSize="0.8125rem" fontWeight="600" mb="0.5rem">리워드</Text>
          <VStack align="stretch" gap="0.5rem">
            {rewards.map((r) => (
              <HStack key={r.tier} justify="space-between" borderWidth="1px" borderColor="border" borderRadius="control" p="0.625rem" bg="bg.panel">
                <VStack align="start" gap="0">
                  <Text fontSize="0.8125rem" fontWeight="500">{r.tier}</Text>
                  <Text fontSize="0.75rem" color="fg.subtle">{r.price.toLocaleString}원</Text>
                </VStack>
                <Text fontSize="0.75rem" color="fg.subtle">
                  {r.claimed}{r.limit ? ` / ${r.limit}` : ""} 신청
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      ) : null}

      <Box borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
        <Text fontSize="0.8125rem" fontWeight="600" mb="0.75rem">캠페인 관리</Text>
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
          <Button size="sm" colorPalette="brand">저장</Button>
        </HStack>
      </Box>

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
                  <Table.Cell fontSize="0.8125rem">{b.name}</Table.Cell>
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
              <HStack
                key={c.id} justify="space-between" cursor="pointer"
                onClick={ => { onSelect?.(c.id); onNavigate?.("detail"); }}
              >
                <Text fontSize="0.8125rem" color="brand.fg">{c.title}</Text>
                <Badge colorPalette={STATUS_PALETTE[c.status]} size="sm">{c.status}</Badge>
              </HStack>
            ))}
          </VStack>
        </Box>
      ) : null}
    </VStack>
  );
}
