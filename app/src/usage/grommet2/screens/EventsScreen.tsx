import * as React from "react";
import { Box, Button, Card, CardBody, DataChart, Distribution, Heading, Meter, Select, StarRating, Tag, Text } from "grommet";
import { CalendarDays, MapPin, Ticket as TicketIcon, TrendingUp, Users } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=60";

interface EventItem {
  id: string;
  title: string;
  venue: string;
  date: string;
  price: string;
  category: string;
  description: string;
  rating: number;
  seatsLeft: number;
  seatsTotal: number;
}

const EVENTS: EventItem[] = [
  { id: "e1", title: "가을 재즈 나이트", venue: "블루노트 홀", date: "10-04", price: "45,000원", category: "공연", description: "가을밤에 어울리는 재즈 트리오 라이브. 좌석은 자유석이며 입장은 공연 30분 전부터 가능해요.", rating: 4, seatsLeft: 12, seatsTotal: 80 },
  { id: "e2", title: "스타트업 밋업 2026", venue: "코엑스 컨퍼런스룸", date: "10-11", price: "무료", category: "컨퍼런스", description: "초기 창업팀을 위한 네트워킹 세션. 명함을 챙겨오세요.", rating: 5, seatsLeft: 40, seatsTotal: 150 },
  { id: "e3", title: "현대미술 특별전", venue: "시립미술관", date: "10-18", price: "18,000원", category: "전시", description: "국내외 현대미술 작가 24인의 작품을 만나는 특별전.", rating: 4, seatsLeft: 200, seatsTotal: 200 },
  { id: "e4", title: "인디 록 페스티벌", venue: "한강공원 야외무대", date: "10-25", price: "68,000원", category: "공연", description: "국내 인디 밴드 8팀이 참여하는 하루짜리 야외 페스티벌.", rating: 5, seatsLeft: 3, seatsTotal: 500 },
];

const CATEGORY_BREAKDOWN = [
  { label: "공연", value: 2, color: "brand" },
  { label: "컨퍼런스", value: 1, color: "status-ok" },
  { label: "전시", value: 1, color: "status-warning" },
] as const;

const CATEGORIES = ["전체", "공연", "컨퍼런스", "전시"];
const CATEGORY_COLOR: Record<string, string> = { 공연: "brand", 컨퍼런스: "status-ok", 전시: "status-warning" };

function Hero {
  return (
    <Box
      pad={{ horizontal: "large", vertical: "medium" }}
      round="small"
      direction="row"
      align="center"
      justify="between"
      height="8rem"
      style={{
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box gap="2px">
        <Heading level={3} margin="none" color="white">이번 달 예매 현황</Heading>
        <Text color="white" style={{ opacity: 0.9 }}>4개 이벤트 · 평균 판매율 68%</Text>
      </Box>
      <Box width="8rem" height="3rem">
        <DataChart
          data={[{ w: "1주", v: 20 }, { w: "2주", v: 45 }, { w: "3주", v: 40 }, { w: "4주", v: 68 }]}
          series={[{ property: "w" }, { property: "v" }]}
          chart={[{ property: "v", type: "line", thickness: "xsmall", color: "white" }]}
          size={{ height: "3rem", width: "8rem" }}
          axis={false}
          guide={false}
          pad="none"
        />
      </Box>
    </Box>
  );
}

const STATS = [
  { label: "이번 달 이벤트", value: "4개", icon: CalendarDays },
  { label: "총 예매 좌석", value: "255석", icon: TicketIcon },
  { label: "참여 예상 인원", value: "930명", icon: Users },
  { label: "평균 판매율", value: "68%", icon: TrendingUp },
] as const;

export function EventsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState("전체");
  const selected = EVENTS.find((e) => e.id === selectedId);
  const filtered = EVENTS.filter((e) => category === "전체" || e.category === category);

  if (selected) {
    return (
      <Box gap="medium">
        <Button plain onClick={ => setSelectedId(null)} label="← 목록으로" />
        <Card background="background-front" pad="medium">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="small">
              <Tag value={selected.category} size="small" />
              <Text color="text-weak" size="small">{selected.venue}</Text>
            </Box>
            <Heading level={3} margin="none">{selected.title}</Heading>
            <StarRating name={`rating-${selected.id}`} value={selected.rating} disabled />
            <Text>{selected.description}</Text>
            <Box gap="xsmall">
              <Box direction="row" justify="between">
                <Text size="small" color="text-weak">좌석 현황</Text>
                <Text size="small" color="text-weak">{selected.seatsTotal - selected.seatsLeft}/{selected.seatsTotal}석</Text>
              </Box>
              <Meter type="bar" value={selected.seatsTotal - selected.seatsLeft} max={selected.seatsTotal} thickness="small" color="brand" aria-label="좌석 판매율" />
            </Box>
            <Box direction="row" justify="between" align="center" pad={{ top: "small" }} border={{ side: "top", color: "border" }}>
              <Box>
                <Text size="small" color="text-weak">일시</Text>
                <Text weight="bold">10월 {selected.date.split("-")[1]}일</Text>
              </Box>
              <Box>
                <Text size="small" color="text-weak">가격</Text>
                <Text weight="bold">{selected.price}</Text>
              </Box>
              <Button primary label="예매하기" disabled={selected.seatsLeft === 0} />
            </Box>
          </CardBody>
        </Card>
      </Box>
    );
  }

  return (
    <Box gap="medium">
      <Hero />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} pad="medium" background="background-front">
              <CardBody direction="row" align="center" gap="small">
                <Box round="full" width="2.25rem" height="2.25rem" align="center" justify="center" background="active-background">
                  <Icon size={16} />
                </Box>
                <Box>
                  <Text size="small" color="text-weak">{s.label}</Text>
                  <Text weight="bold">{s.value}</Text>
                </Box>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Text weight="bold">카테고리별 비중</Text>
            {/* 비율 시각화는 Distribution 사용. DataChart에 donut/pie 없음 */}
            <Distribution
              // map을 거쳐 배열 생성. label 없어 리터럴이 TS 초과 속성에 막히는 구조임
              values={CATEGORY_BREAKDOWN.map((c) => ({ value: c.value, label: c.label, color: c.color }))}
            >
              {(v) => (
                <Box pad="xsmall">
                  <Text size="small">{v.label} {v.value}건</Text>
                </Box>
              )}
            </Distribution>
          </CardBody>
        </Card>
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Text weight="bold">필터</Text>
            <Select options={CATEGORIES} value={category} onChange={({ option }) => setCategory(option)} />
            <Text size="small" color="text-weak">{filtered.length}개 이벤트가 조건에 맞아요.</Text>
          </CardBody>
        </Card>
      </div>

      <Card pad="small" background="background-front">
        <CardBody gap="small">
          {/* grommet Box onClick 대신 button, CSS grid 두 열 사용 */}
          {filtered.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={ => setSelectedId(e.id)}
              className="grid w-full grid-cols-[1fr_auto] items-center gap-3 rounded-md p-2 text-left"
            >
              <Box direction="row" align="center" gap="small">
                <MapPin size={14} />
                <Box>
                  <Text weight="bold">{e.title}</Text>
                  <Text size="small" color="text-weak">{e.venue} · 10월 {e.date.split("-")[1]}일</Text>
                </Box>
              </Box>
              <Box align="end" gap="2px">
                <Tag value={e.category} size="small" background={CATEGORY_COLOR[e.category]} />
                <Text size="small">{e.price}</Text>
              </Box>
            </button>
          ))}
        </CardBody>
      </Card>
    </Box>
  );
}
