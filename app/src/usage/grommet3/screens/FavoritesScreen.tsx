import * as React from "react";
import { Box, Card, CardBody, CheckBox, Image, NameValueList, NameValuePair, RangeInput, Tag, Text } from "grommet";

interface Favorite { title: string; addr: string; price: string; priceNum: number; type: string; photo: string }

const FAVORITES: Favorite[] = [
  { title: "한강뷰 아파트", addr: "성동구 성수동", price: "전세 6억 2천", priceNum: 62000, type: "아파트", photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=60" },
  { title: "리모델링 단독주택", addr: "마포구 연남동", price: "매매 9억 5천", priceNum: 95000, type: "단독주택", photo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=60" },
  { title: "역세권 신축 오피스텔", addr: "강남구 역삼동", price: "월세 80/120", priceNum: 12000, type: "오피스텔", photo: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=60" },
  { title: "신촌 투룸 빌라", addr: "서대문구 신촌동", price: "월세 30/65", priceNum: 6500, type: "빌라", photo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=60" },
];

// 간격 1.5rem, 카드 폭 기준 열 전환 임계값
const LAYOUT_CSS = `
.g3-fav { container-type: inline-size; container-name: g3fav; }
.g3-fav-cards, .g3-fav-pair { display: grid; gap: 1.5rem; grid-template-columns: minmax(0, 1fr); }
@container g3fav (min-width: 28rem) {
  .g3-fav-cards, .g3-fav-pair { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@container g3fav (min-width: 62rem) {
  .g3-fav-cards { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

export function FavoritesScreen {
  const [priceAlert, setPriceAlert] = React.useState<Record<string, boolean>>(
    Object.fromEntries(FAVORITES.map((f) => [f.title, false])),
  );
  const [threshold, setThreshold] = React.useState(5);

  return (
    <>
    {/* <style>은 Box 밖에 배치. 안에 두면 gap 간격 div로 빈 줄이 더 보임 */}
    <style>{LAYOUT_CSS}</style>
    <Box gap="medium" className="g3-fav">
      <div className="g3-fav-cards">
        {FAVORITES.map((f) => (
          <Card key={f.title} background="background-front" round="medium" elevation="small">
            <Box height="8rem" overflow="hidden" round={{ corner: "top", size: "medium" }}>
              <Image src={f.photo} fit="cover" a11yTitle={f.title} />
            </Box>
            <CardBody pad="medium" gap="xsmall">
              <Box direction="row" align="center" gap="xsmall">
                <Text weight="bold">{f.title}</Text>
                <Tag value={f.type} size="small" />
              </Box>
              <Text size="small" color="text-weak">{f.addr}</Text>
              <Text size="small">{f.price}</Text>
              <CheckBox
                label={<Text size="xsmall">가격 하락 시 알림</Text>}
                checked={priceAlert[f.title]}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setPriceAlert((prev) => ({ ...prev, [f.title]: checked }));
                }}
              />
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="g3-fav-pair">
        <Card pad="medium" background="background-front" round="medium">
          <CardBody gap="small">
            <Text weight="bold" size="small">관심 매물 요약</Text>
            <NameValueList>
              {FAVORITES.map((f) => (
                <NameValuePair key={f.title} name={f.title}>
                  <Text size="small">{f.price}</Text>
                </NameValuePair>
              ))}
            </NameValueList>
          </CardBody>
        </Card>
        <Card pad="medium" background="background-front" round="medium">
          <CardBody gap="small">
            <Text weight="bold" size="small">가격 알림 민감도</Text>
            <Text size="xsmall" color="text-weak">{threshold}% 이상 떨어지면 알려드려요.</Text>
            <RangeInput min={1} max={20} step={1} value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} />
          </CardBody>
        </Card>
      </div>
    </Box>
    </>
  );
}
