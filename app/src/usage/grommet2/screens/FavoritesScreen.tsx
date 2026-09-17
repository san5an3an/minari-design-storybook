import * as React from "react";
import {
  Box, Button, Calendar, Card, CardBody, Heading, List, NameValueList, NameValuePair,
  RangeInput, Text,
} from "grommet";
import { Bell, Heart } from "lucide-react";

interface Favorite { title: string; venue: string; date: string; isoDate: string; price: string }

const FAVORITES: Favorite[] = [
  { title: "스타트업 밋업 2026", venue: "코엑스 컨퍼런스룸", date: "10월 11일", isoDate: "2026-10-11", price: "무료" },
  { title: "현대미술 특별전", venue: "시립미술관", date: "10월 18일", isoDate: "2026-10-18", price: "18,000원" },
  { title: "인디 록 페스티벌", venue: "한강공원 야외무대", date: "10월 25일", isoDate: "2026-10-25", price: "68,000원" },
];

export function FavoritesScreen {
  const [radius, setRadius] = React.useState(30);

  return (
    <Box gap="medium">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="xsmall">
              <Heart size={16} />
              <Text weight="bold">관심 이벤트 {FAVORITES.length}개</Text>
            </Box>
            <List
              data={FAVORITES}
              primaryKey="title"
              secondaryKey="venue"
              action={ => <Button size="small" label="예매하기" />}
            />
          </CardBody>
        </Card>

        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Heading level={4} margin="none">관심 일정 달력</Heading>
            <Calendar
              size="small"
              date="2026-10-01"
              bounds={["2026-10-01", "2026-10-31"]}
              animate={false}
            />
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <NameValueList>
              {FAVORITES.map((f) => (
                <NameValuePair key={f.title} name={f.title}>
                  <Text size="small">{f.date} · {f.price}</Text>
                </NameValuePair>
              ))}
            </NameValueList>
          </CardBody>
        </Card>

        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="xsmall">
              <Bell size={16} />
              <Text weight="bold">알림 반경</Text>
            </Box>
            <Text size="small" color="text-weak">관심 지역 반경 {radius}km 안의 새 이벤트를 알려드려요.</Text>
            <RangeInput min={5} max={100} step={5} value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
          </CardBody>
        </Card>
      </div>
    </Box>
  );
}
