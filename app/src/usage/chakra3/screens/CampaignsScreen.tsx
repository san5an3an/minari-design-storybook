import * as React from "react";
import {
  Badge, Box, Card, Grid, HStack, Image, Progress, SegmentGroup, Skeleton, Stat, Tag, Text, VStack,
} from "@chakra-ui/react";
import type { ScreenProps } from "../screens";
import { CAMPAIGNS, type Campaign } from "../data";

const STATUS_PALETTE: Record<Campaign["status"], string> = {
  진행중: "brand", 성공: "success", 종료: "gray",
};
const FILTERS = ["전체", "진행중", "성공", "종료"] as const;

// 통계카드 2 또는 4열로 고정
const CAMPAIGN_STAT_GRID_CSS = `
.chk3-cmp-stat-cq { container-type: inline-size; container-name: chk3cmpstats; }
.chk3-cmp-stat-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
@container chk3cmpstats (min-width: 47rem) {
  .chk3-cmp-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

function CampaignCardImage({ campaign }: { campaign: Campaign }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <Skeleton loading={!loaded} height="7rem">
      <Image src={campaign.image} alt={campaign.title} w="100%" h="7rem" objectFit="cover" onLoad={ => setLoaded(true)} />
    </Skeleton>
  );
}

export function CampaignsScreen({ onNavigate, onSelect }: ScreenProps) {
  const [filter, setFilter] = React.useState<typeof FILTERS[number]>("전체");
  const totalRaised = CAMPAIGNS.reduce((sum, c) => sum + c.raised, 0);
  const totalBackers = CAMPAIGNS.reduce((sum, c) => sum + c.backerCount, 0);
  const successCount = CAMPAIGNS.filter((c) => c.status === "성공").length;

  const rows = filter === "전체" ? CAMPAIGNS : CAMPAIGNS.filter((c) => c.status === filter);

  const open = (id: string) => {
    onSelect?.(id);
    onNavigate?.("detail");
  };

  return (
    <VStack align="stretch" gap="1rem">
      {/* 작은 통계카드 */}
      <style>{CAMPAIGN_STAT_GRID_CSS}</style>
      <Box className="chk3-cmp-stat-cq">
        <Box className="chk3-cmp-stat-grid">
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
        </Box>
      </Box>

      {/* 상태 필터. SegmentGroup 신규 도입, 미사용 항목 */}
      <SegmentGroup.Root value={filter} onValueChange={(e) => setFilter((e.value ?? "전체") as typeof FILTERS[number])} size="sm">
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={FILTERS.map((f) => ({ value: f, label: f }))} />
      </SegmentGroup.Root>

      {/* 드래그 느낌 카드 리스트 */}
      <Grid templateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap="1rem">
        {rows.map((c) => {
          const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
          return (
            <Card.Root key={c.id} overflow="hidden" cursor="pointer" onClick={ => open(c.id)}>
              <CampaignCardImage campaign={c} />
              <Card.Body gap="0.375rem" p="0.75rem">
                <HStack justify="space-between">
                  <Text fontSize="0.8125rem" fontWeight="600" lineClamp={1}>{c.title}</Text>
                  <Badge colorPalette={STATUS_PALETTE[c.status]} size="sm">{c.status}</Badge>
                </HStack>
                <HStack justify="space-between">
                  <Tag.Root size="sm" colorPalette="gray"><Tag.Label>{c.category}</Tag.Label></Tag.Root>
                  <Text fontSize="0.75rem" color="fg.subtle">후원 {c.backerCount}명</Text>
                </HStack>
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
              </Card.Body>
            </Card.Root>
          );
        })}
      </Grid>
    </VStack>
  );
}
