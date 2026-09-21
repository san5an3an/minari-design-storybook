import * as React from "react";
import { Box, Button, Card, CardBody, Carousel, Grid, Heading, Image, Tag, Text, TextInput } from "grommet";
import { CalendarDays, MapPin, Search, Sparkles, Ticket } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  venue: string;
  date: string;
  price: string;
  category: "공연" | "컨퍼런스" | "전시" | "네트워킹";
  description: string;
  photo: string;
}

// 필터칩 4종 구분 가능하도록 고정값 6개로 조정
const EVENTS: EventItem[] = [
  { id: "e1", title: "가을 재즈 나이트", venue: "블루노트 홀", date: "10-04", price: "45,000원", category: "공연", description: "가을밤에 어울리는 재즈 트리오 라이브. 좌석은 자유석이며 입장은 공연 30분 전부터 가능해요.", photo: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=500&q=60" },
  { id: "e2", title: "스타트업 밋업 2026", venue: "코엑스 컨퍼런스룸", date: "10-11", price: "무료", category: "컨퍼런스", description: "초기 창업팀을 위한 네트워킹 세션. 명함을 챙겨오세요.", photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=60" },
  { id: "e3", title: "현대미술 특별전", venue: "시립미술관", date: "10-18", price: "18,000원", category: "전시", description: "국내외 현대미술 작가 24인의 작품을 만나는 특별전.", photo: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=500&q=60" },
  { id: "e4", title: "인디 록 페스티벌", venue: "한강공원 야외무대", date: "10-25", price: "68,000원", category: "공연", description: "국내 인디 밴드 8팀이 참여하는 하루짜리 야외 페스티벌.", photo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=60" },
  { id: "e5", title: "재즈 앙상블 정기연주회", venue: "예술의전당 리사이틀홀", date: "11-02", price: "35,000원", category: "공연", description: "지역 재즈 앙상블의 하반기 정기연주회. 클래식 재즈 스탠더드 위주 공연이에요.", photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=500&q=60" },
  { id: "e6", title: "프런트엔드 네트워킹 나이트", venue: "성수 카페 델픽", date: "11-09", price: "15,000원", category: "네트워킹", description: "프런트엔드 개발자를 위한 가벼운 네트워킹 자리. 다과가 제공돼요.", photo: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=500&q=60" },
];

// 에디터가 고른 3장. 추천 성격상 고정 큐레이션 사용
const POPULAR_IDS: readonly string[] = ["e4", "e1", "e5"];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=60";

const CATEGORIES: readonly EventItem["category"][] = ["공연", "컨퍼런스", "전시", "네트워킹"];

function EventsHero({ query, onQuery }: { query: string; onQuery: (v: string) => void }) {
  return (
    // grommet Box 대신 raw div 사용, height+배경 지정 시 렌더 붕괴 있음
    <div
      className="flex flex-col justify-end gap-2 overflow-hidden px-6 py-5"
      style={{
        minHeight: "10rem",
        borderRadius: "var(--semantic-radius-container)",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 35%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>
        오늘 놓치면 아쉬운 이벤트
      </span>
      <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.9 }}>
        관심 카테고리를 골라 취향에 맞는 공연·전시를 찾아보세요.
      </span>
      <Box direction="row" width={{ max: "18rem" }} margin={{ top: "2px" }}>
        <TextInput
          size="small"
          icon={<Search size={14} />}
          placeholder="이벤트·장소 검색"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          style={{ background: "var(--semantic-bg-neutral-surface)" }}
        />
      </Box>
    </div>
  );
}

export function EventsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<"전체" | EventItem["category"]>("전체");
  const [query, setQuery] = React.useState("");
  const selected = EVENTS.find((e) => e.id === selectedId);

  if (selected) {
    return (
      <Box gap="medium">
        <Button plain onClick={ => setSelectedId(null)} label="← 목록으로" />
        <Card background="background-front" pad="medium">
          <Box height="10rem" round="small" overflow="hidden" margin={{ bottom: "small" }}>
            <Image src={selected.photo} fit="cover" a11yTitle={selected.title} />
          </Box>
          <CardBody gap="small">
            <Box direction="row" align="center" gap="small">
              <Tag value={selected.category} size="small" />
              <Text color="text-weak" size="small">{selected.venue}</Text>
            </Box>
            <Heading level={3} margin="none">{selected.title}</Heading>
            <Text>{selected.description}</Text>
            <Box direction="row" justify="between" align="center" pad={{ top: "small" }} border={{ side: "top", color: "border" }}>
              <Box>
                <Text size="small" color="text-weak">일시</Text>
                <Text weight="bold">10월 {selected.date.split("-")[1]}일</Text>
              </Box>
              <Box>
                <Text size="small" color="text-weak">가격</Text>
                <Text weight="bold">{selected.price}</Text>
              </Box>
              <Button primary label="예매하기" />
            </Box>
          </CardBody>
        </Card>
      </Box>
    );
  }

  const categoryCount = new Set(EVENTS.map((e) => e.category)).size;
  const freeCount = EVENTS.filter((e) => e.price === "무료").length;
  const filtered = EVENTS.filter(
    (e) =>
      (category === "전체" || e.category === category) &&
      (query.trim === "" || e.title.includes(query) || e.venue.includes(query)),
  );
  const popular = POPULAR_IDS.map((id) => EVENTS.find((e) => e.id === id)).filter((e): e is EventItem => !!e);

  return (
    <Box gap="medium">
      <EventsHero query={query} onQuery={setQuery} />

      <Box direction="row" gap={{ row: "xsmall", column: "xsmall" }} wrap>
        <Tag
          background={category === "전체" ? "brand" : undefined}
          onClick={ => setCategory("전체")}
        >
          {/* brand 배경에 글자색 직접 지정. 기본 검정 글자 대비가 2.93:1로 기준 미달임 */}
          <Box pad={{ horizontal: "0.5rem", vertical: "0.15rem" }} width={{ min: "min-content" }}>
            <Text size="small" color={category === "전체" ? "var(--semantic-fg-on-brand-default)" : undefined}>
              전체 {EVENTS.length}
            </Text>
          </Box>
        </Tag>
        {CATEGORIES.map((c) => {
          const count = EVENTS.filter((e) => e.category === c).length;
          const active = category === c;
          return (
            <Tag key={c} background={active ? "brand" : undefined} onClick={ => setCategory(c)}>
              <Box pad={{ horizontal: "0.5rem", vertical: "0.15rem" }} width={{ min: "min-content" }}>
                <Text size="small" color={active ? "var(--semantic-fg-on-brand-default)" : undefined}>
                  {c} {count}
                </Text>
              </Box>
            </Tag>
          );
        })}
      </Box>

      <Box direction="row" gap="small" wrap>
        <Card background="background-front" pad="small" flex={{ grow: 1, shrink: 1 }} basis="8rem">
          <Text size="small" color="text-weak">열려 있는 이벤트</Text>
          <Text size="xlarge" weight="bold">{EVENTS.length}개</Text>
        </Card>
        <Card background="background-front" pad="small" flex={{ grow: 1, shrink: 1 }} basis="8rem">
          <Text size="small" color="text-weak">카테고리</Text>
          <Text size="xlarge" weight="bold">{categoryCount}종</Text>
        </Card>
        <Card background="background-front" pad="small" flex={{ grow: 1, shrink: 1 }} basis="8rem">
          <Text size="small" color="text-weak">무료 이벤트</Text>
          <Text size="xlarge" weight="bold">{freeCount}개</Text>
        </Card>
      </Box>

      <Box gap="small">
        <Box direction="row" align="center" gap="xsmall">
          <CalendarDays size={16} />
          <Text weight="bold">{category === "전체" ? "전체 이벤트" : category} {filtered.length}건</Text>
        </Box>
        {filtered.length === 0 ? (
          <Text size="small" color="text-weak">조건에 맞는 이벤트가 없어요.</Text>
        ) : (
          <Grid columns={{ count: "fit", size: "16rem" }} gap="medium">
            {filtered.map((e) => (
              <Card
                key={e.id}
                background="background-front"
                onClick={ => setSelectedId(e.id)}
                focusIndicator={false}
                round="medium"
                elevation="small"
              >
                <Box height="8rem" overflow="hidden" round={{ corner: "top", size: "medium" }}>
                  <Image src={e.photo} fit="cover" a11yTitle={e.title} />
                </Box>
                <CardBody pad="medium" gap="xsmall">
                  <Box direction="row" align="center" justify="between" gap="small">
                    <Text weight="bold" truncate>{e.title}</Text>
                    <Tag value={e.category} size="small" />
                  </Box>
                  <Text size="small" color="text-weak">
                    <MapPin size={11} style={{ verticalAlign: "-0.1rem", marginRight: "0.25rem" }} />
                    {e.venue} · 10월 {e.date.split("-")[1]}일
                  </Text>
                  <Text size="small" weight="bold">{e.price}</Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        )}
      </Box>

      <Card background="background-front" pad="medium">
        <CardBody gap="small">
          <Box direction="row" align="center" gap="xsmall">
            <Sparkles size={16} />
            <Text weight="bold">지금 인기 있는 이벤트</Text>
          </Box>
          <Carousel controls="arrows" height="9rem">
            {popular.map((e) => (
              <Box key={e.id} fill style={{ position: "relative" }} round="small" overflow="hidden">
                <Image src={e.photo} fit="cover" a11yTitle={e.title} />
                <div
                  className="flex flex-col justify-end"
                  style={{
                    position: "absolute", inset: 0, padding: "0.75rem",
                    backgroundImage:
                      "linear-gradient(180deg, transparent 40%, color-mix(in oklch, var(--semantic-bg-brand-default) 20%, black) 100%)",
                  }}
                >
                  <span style={{ color: "var(--semantic-fg-on-brand-default)", fontWeight: 700 }}>{e.title}</span>
                  <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.9, fontSize: "var(--semantic-text-caption)" }}>
                    {e.venue} · {e.price}
                  </span>
                </div>
              </Box>
            ))}
          </Carousel>
        </CardBody>
      </Card>

      <Box direction="row" align="center" gap="xsmall" style={{ color: "var(--semantic-fg-neutral-subtle)" }}>
        <Ticket size={12} />
        <Text size="xsmall">카드를 누르면 이벤트 상세로 들어가요.</Text>
      </Box>
    </Box>
  );
}
