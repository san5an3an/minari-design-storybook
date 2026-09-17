import * as React from "react";
import { Badge, Box, Grid, HStack, Image, Progress, Stat, Text, VStack } from "@chakra-ui/react";
import type { ScreenProps } from "../screens";
import { CAMPAIGNS, type Campaign } from "../data";

const STATUS_PALETTE: Record<Campaign["status"], string> = {
  진행중: "brand", 성공: "success", 종료: "gray",
};

export function CampaignsScreen({ onNavigate, onSelect }: ScreenProps) {
  const totalRaised = CAMPAIGNS.reduce((sum, c) => sum + c.raised, 0);
  const totalBackers = CAMPAIGNS.reduce((sum, c) => sum + c.backerCount, 0);
  const successCount = CAMPAIGNS.filter((c) => c.status === "성공").length;

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <VStack align="stretch" gap="1rem">
      {/* 작은 통계카드 */}
      <Grid templateColumns="repeat(auto-fit, minmax(8rem, 1fr))" gap="0.75rem">
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="0.75rem" bg="bg.panel">
          <Stat.Label color="fg.muted" fontSize="0.75rem">캠페인</Stat.Label>
          <Stat.ValueText fontSize="1.125rem" fontWeight="600">{CAMPAIGNS.length}개</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="0.75rem" bg="bg.panel">
          <Stat.Label color="fg.muted" fontSize="0.75rem">총 모금액</Stat.Label>
          <Stat.ValueText fontSize="1.125rem" fontWeight="600">{(totalRaised / 10000).toFixed(0)}만원</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="0.75rem" bg="bg.panel">
          <Stat.Label color="fg.muted" fontSize="0.75rem">총 후원자</Stat.Label>
          <Stat.ValueText fontSize="1.125rem" fontWeight="600">{totalBackers}명</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="0.75rem" bg="bg.panel">
          <Stat.Label color="fg.muted" fontSize="0.75rem">목표 달성</Stat.Label>
          <Stat.ValueText fontSize="1.125rem" fontWeight="600">{successCount}건</Stat.ValueText>
        </Stat.Root>
      </Grid>

      {/* 드래그 느낌 카드 리스트 */}
      <Grid templateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap="1rem">
        {CAMPAIGNS.map((c) => {
          const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
          return (
            <Box
              key={c.id}
              borderWidth="1px" borderColor="border" borderRadius="control" overflow="hidden"
              bg="bg.panel" cursor="pointer" onClick={ => open(c.id)}
            >
              <Image src={c.image} alt={c.title} w="100%" h="7rem" objectFit="cover" />
              <VStack align="stretch" gap="0.375rem" p="0.75rem">
                <HStack justify="space-between">
                  <Text fontSize="0.8125rem" fontWeight="600" lineClamp={1}>{c.title}</Text>
                  <Badge colorPalette={STATUS_PALETTE[c.status]} size="sm">{c.status}</Badge>
                </HStack>
                <Text fontSize="0.75rem" color="fg.subtle">{c.category} · 후원 {c.backerCount}명</Text>
                <Progress.Root value={pct} size="sm" colorPalette={pct >= 100 ? "success" : "brand"}>
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                </Progress.Root>
                <HStack justify="space-between">
                  <Text fontSize="0.75rem" fontWeight="500">{pct}% 달성</Text>
                  <Text fontSize="0.75rem" color="fg.subtle">
                    {c.daysLeft > 0 ? `${c.daysLeft}일 남음` : "마감"}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          );
        })}
      </Grid>
    </VStack>
  );
}
