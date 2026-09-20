import * as React from "react";
import {
  Badge, Box, Button, Card, Dialog, EmptyState, Grid, HStack, Image, Input, NativeSelect,
  Portal, RatingGroup, Skeleton, Slider, Stat, Tag, Text, VStack,
} from "@chakra-ui/react";
import { PackageSearch, SearchX } from "lucide-react";
import type { ScreenProps } from "../screens";
import { DESIGNS, type Design } from "../data";

const PRICE_MIN = 10000;
const PRICE_MAX = 20000;

// 통계카드 3장 1 또는 3열로 고정. 2열이면 카드 하나가 혼자 다음 줄에 남음
const DESIGN_STAT_GRID_CSS = `
.chk2-des-stat-cq { container-type: inline-size; container-name: chk2desstats; }
.chk2-des-stat-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1rem; }
@container chk2desstats (min-width: 35rem) {
  .chk2-des-stat-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
`;

function DesignCardImage({ design }: { design: Design }) {
  // Unsplash CDN 이미지가 첫 렌더에 없을 수 있어 Skeleton이 쓰임
  const [loaded, setLoaded] = React.useState(false);
  return (
    <Skeleton loading={!loaded} height="6rem">
      <Image src={design.image} alt={design.name} w="100%" h="6rem" objectFit="cover" onLoad={ => setLoaded(true)} />
    </Skeleton>
  );
}

export function DesignsScreen({ onNavigate }: ScreenProps) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("전체");
  const [priceRange, setPriceRange] = React.useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [previewId, setPreviewId] = React.useState<string | null>(null);
  const categories = ["전체", ...new Set(DESIGNS.map((d) => d.category))];

  const totalUses = DESIGNS.reduce((sum, d) => sum + d.uses, 0);
  const top = [...DESIGNS].sort((a, b) => b.uses - a.uses)[0];

  const rows = DESIGNS.filter(
    (d) =>
      (category === "전체" || d.category === category) &&
      (query.trim === "" || d.name.includes(query)) &&
      d.price >= priceRange[0] && d.price <= priceRange[1],
  );
  const preview = DESIGNS.find((d) => d.id === previewId);

  return (
    <VStack align="stretch" gap="1rem">
      <style>{DESIGN_STAT_GRID_CSS}</style>
      <Box className="chk2-des-stat-cq">
        <Box className="chk2-des-stat-grid">
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">전체 도안</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{DESIGNS.length}종</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">누적 사용</Stat.Label>
            <Stat.ValueText fontSize="1.25rem" fontWeight="600">{totalUses}회</Stat.ValueText>
          </Stat.Root>
          <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
            <Stat.Label color="fg.muted">가장 많이 팔린 도안</Stat.Label>
            <Stat.ValueText fontSize="1rem" fontWeight="600">{top.name}</Stat.ValueText>
          </Stat.Root>
        </Box>
      </Box>

      <HStack gap="1.5rem" flexWrap="wrap" align="flex-start">
        <HStack gap="0.75rem" flexWrap="wrap">
          <Input placeholder="도안명 검색" value={query} onChange={(e) => setQuery(e.target.value)} maxW="14rem" size="sm" />
          <NativeSelect.Root size="sm" maxW="10rem">
            <NativeSelect.Field value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </HStack>
        {/* 가격대 필터용 두 핸들 Slider, 신규 추가 */}
        <VStack align="stretch" gap="0.25rem" minW="12rem">
          <HStack justify="space-between">
            <Text fontSize="0.75rem" color="fg.subtle">가격대</Text>
            <Text fontSize="0.75rem" color="fg.subtle">
              {priceRange[0].toLocaleString}원 – {priceRange[1].toLocaleString}원
            </Text>
          </HStack>
          <Slider.Root
            size="sm" min={PRICE_MIN} max={PRICE_MAX} step={1000}
            value={priceRange}
            onValueChange={(e) => setPriceRange([e.value[0], e.value[1]] as [number, number])}
          >
            <Slider.Control>
              <Slider.Track><Slider.Range /></Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
        </VStack>
      </HStack>

      {rows.length === 0 ? (
        <EmptyState.Root size="sm">
          <EmptyState.Content>
            <EmptyState.Indicator><SearchX /></EmptyState.Indicator>
            <EmptyState.Title>조건에 맞는 도안이 없어요</EmptyState.Title>
            <EmptyState.Description>검색어·카테고리·가격대를 조정해 보세요.</EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(9rem, 1fr))" gap="1rem">
          {rows.map((d) => (
            <Card.Root key={d.id} overflow="hidden" cursor="pointer" onClick={ => setPreviewId(d.id)}>
              <DesignCardImage design={d} />
              <Card.Body gap="0.25rem" p="0.625rem">
                <Text fontSize="0.8125rem" fontWeight="500" lineClamp={1}>{d.name}</Text>
                <Tag.Root size="sm" colorPalette="gray" w="fit-content">
                  <Tag.Label>{d.category}</Tag.Label>
                </Tag.Root>
                <Text fontSize="0.75rem" color="fg.subtle">{d.price.toLocaleString}원</Text>
                <RatingGroup.Root readOnly count={5} value={d.rating} size="xs">
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </RatingGroup.Root>
                <Text fontSize="0.6875rem" color="fg.subtle">누적 {d.uses}회 사용</Text>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      )}

      {/* 확대 보기 Dialog */}
      <Dialog.Root open={Boolean(preview)} onOpenChange={(e) => { if (!e.open) setPreviewId(null); }}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              {preview ? (
                <>
                  <Dialog.Header>
                    <Dialog.Title fontSize="1rem">{preview.name}</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Image src={preview.image} alt={preview.name} w="100%" borderRadius="control" objectFit="cover" mb="0.75rem" />
                    <HStack justify="space-between" mb="0.25rem">
                      <Tag.Root size="sm"><Tag.Label>{preview.category}</Tag.Label></Tag.Root>
                      <Badge colorPalette="brand" size="sm">{preview.price.toLocaleString}원</Badge>
                    </HStack>
                    <Text fontSize="0.8125rem" color="fg.subtle">누적 {preview.uses}회 사용</Text>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button size="sm" variant="outline">닫기</Button>
                    </Dialog.ActionTrigger>
                    <Button size="sm" colorPalette="brand" onClick={ => { setPreviewId(null); onNavigate?.("orders"); }}>
                      <PackageSearch size={14} />
                      주문에서 찾기
                    </Button>
                  </Dialog.Footer>
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
