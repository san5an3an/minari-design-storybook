import * as React from "react";
import { Box, Button, Card, CardBody, Heading, Tag, Text } from "grommet";

interface EventItem {
  id: string;
  title: string;
  venue: string;
  date: string;
  price: string;
  category: string;
  description: string;
}

const EVENTS: EventItem[] = [
  { id: "e1", title: "가을 재즈 나이트", venue: "블루노트 홀", date: "10-04", price: "45,000원", category: "공연", description: "가을밤에 어울리는 재즈 트리오 라이브. 좌석은 자유석이며 입장은 공연 30분 전부터 가능해요." },
  { id: "e2", title: "스타트업 밋업 2026", venue: "코엑스 컨퍼런스룸", date: "10-11", price: "무료", category: "컨퍼런스", description: "초기 창업팀을 위한 네트워킹 세션. 명함을 챙겨오세요." },
  { id: "e3", title: "현대미술 특별전", venue: "시립미술관", date: "10-18", price: "18,000원", category: "전시", description: "국내외 현대미술 작가 24인의 작품을 만나는 특별전." },
  { id: "e4", title: "인디 록 페스티벌", venue: "한강공원 야외무대", date: "10-25", price: "68,000원", category: "공연", description: "국내 인디 밴드 8팀이 참여하는 하루짜리 야외 페스티벌." },
];

export function EventsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = EVENTS.find((e) => e.id === selectedId);

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

  return (
    <Box gap="small">
      {EVENTS.map((e) => (
        <Card key={e.id} background="background-front" onClick={ => setSelectedId(e.id)} focusIndicator={false}>
          <CardBody direction="row" align="center" justify="between" pad="small" gap="small">
            <Box>
              <Text weight="bold">{e.title}</Text>
              <Text size="small" color="text-weak">{e.venue} · 10월 {e.date.split("-")[1]}일</Text>
            </Box>
            <Box align="end" gap="2px">
              <Tag value={e.category} size="small" />
              <Text size="small">{e.price}</Text>
            </Box>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
