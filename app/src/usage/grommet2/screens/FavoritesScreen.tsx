import * as React from "react";
import {
  Box, Button, Calendar, Card, CardBody, Heading, List, NameValueList, NameValuePair, Notification,
  RangeInput, Tag, Text,
} from "grommet";
import { Bell, Heart, Sparkles } from "lucide-react";

interface Favorite { title: string; venue: string; date: string; isoDate: string; price: string }

const INITIAL_FAVORITES: Favorite[] = [
  { title: "스타트업 밋업 2026", venue: "코엑스 컨퍼런스룸", date: "10월 11일", isoDate: "2026-10-11", price: "무료" },
  { title: "현대미술 특별전", venue: "시립미술관", date: "10월 18일", isoDate: "2026-10-18", price: "18,000원" },
  { title: "인디 록 페스티벌", venue: "한강공원 야외무대", date: "10월 25일", isoDate: "2026-10-25", price: "68,000원" },
];

// 관심 등록 전 후보군. 등록 시 favorites로 이동
interface Recommended { title: string; venue: string; date: string; isoDate: string; price: string }
const INITIAL_RECOMMENDED: Recommended[] = [
  { title: "가을 재즈 나이트", venue: "블루노트 홀", date: "10월 04일", isoDate: "2026-10-04", price: "45,000원" },
  { title: "빈티지 마켓 페어", venue: "성수 오브제홀", date: "11월 08일", isoDate: "2026-11-08", price: "무료" },
];

// 630~890px 프레임에서 컨테이너 폭 직접 측정해 분기. 뷰포트 기준 lg:는 안 맞음
const LAYOUT_CSS = `
.g2fav { container-type: inline-size; container-name: g2fav; }
.g2fav-row { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); }
@container g2fav (min-width: 32rem) {
  .g2fav-row1 { grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); }
  .g2fav-row2, .g2fav-row3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
`;

export function FavoritesScreen {
  const [radius, setRadius] = React.useState(30);
  const [booked, setBooked] = React.useState<string[]>([]);
  const [favorites, setFavorites] = React.useState<Favorite[]>(INITIAL_FAVORITES);
  const [recommended, setRecommended] = React.useState<Recommended[]>(INITIAL_RECOMMENDED);

  const addFavorite = (item: Recommended) => {
    setFavorites((prev) => [...prev, item]);
    setRecommended((prev) => prev.filter((r) => r.title !== item.title));
  };

  return (
    // <style>은 문자열 gap을 쓰는 Box 밖에 배치
    <>
    <style>{LAYOUT_CSS}</style>
    <Box gap="medium" className="g2fav">
      <div className="g2fav-row g2fav-row1">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="xsmall">
              <Heart size={16} />
              <Text weight="bold">관심 이벤트 {favorites.length}개</Text>
            </Box>
            <List
              data={favorites}
              primaryKey="title"
              secondaryKey="venue"
              action={(item: Favorite) => (booked.includes(item.title) ? (
                <Tag value="예매 완료" size="small" background="status-ok" />
              ) : (
                <Button
                  size="small"
                  label="예매하기"
                  onClick={ => setBooked((prev) => [...prev, item.title])}
                />
              ))}
            />
          </CardBody>
        </Card>

        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Heading level={4} margin="none">관심 일정 달력</Heading>
            <Calendar
              size="small"
              date="2026-10-01"
              bounds={["2026-10-01", "2026-11-30"]}
              animate={false}
            />
          </CardBody>
        </Card>
      </div>

      <div className="g2fav-row g2fav-row2">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <NameValueList>
              {favorites.map((f) => (
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

      <div className="g2fav-row g2fav-row3">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Text weight="bold">최근 가격 알림</Text>
            <Notification
              status="warning"
              title="가격이 내렸어요"
              message="「현대미술 특별전」이 2,000원 할인됐어요."
            />
            <Notification
              status="critical"
              title="마감 임박"
              message="「인디 록 페스티벌」 잔여석이 얼마 안 남았어요."
            />
          </CardBody>
        </Card>

        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="xsmall">
              <Sparkles size={16} />
              <Text weight="bold">관심 있을 만한 이벤트</Text>
            </Box>
            {recommended.length === 0 ? (
              <Text size="small" color="text-weak">추천 이벤트를 모두 관심 등록했어요.</Text>
            ) : (
              <Box gap="small">
                {recommended.map((r) => (
                  <Box key={r.title} direction="row" align="center" justify="between" gap="small">
                    <Box>
                      <Text size="small" weight="bold">{r.title}</Text>
                      <Text size="xsmall" color="text-weak">{r.venue} · {r.date} · {r.price}</Text>
                    </Box>
                    <Button size="small" label="관심 등록" onClick={ => addFavorite(r)} />
                  </Box>
                ))}
              </Box>
            )}
          </CardBody>
        </Card>
      </div>
    </Box>
    </>
  );
}
