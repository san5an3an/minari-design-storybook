import * as React from "react";
import { Box, Button, Card, CardBody, CheckBox, Tag, Text } from "grommet";

const FAVORITES = [
  { title: "한강뷰 아파트", addr: "성동구 성수동", price: "전세 6억 2천", type: "아파트" },
  { title: "리모델링 단독주택", addr: "마포구 연남동", price: "매매 9억 5천", type: "단독주택" },
  { title: "역세권 신축 오피스텔", addr: "강남구 역삼동", price: "월세 80/120", type: "오피스텔" },
  { title: "신촌 투룸 빌라", addr: "서대문구 신촌동", price: "월세 30/65", type: "빌라" },
];

export function FavoritesScreen {
  const [priceAlert, setPriceAlert] = React.useState<Record<string, boolean>>(
    Object.fromEntries(FAVORITES.map((f) => [f.title, false])),
  );

  return (
    <Box gap="small">
      {FAVORITES.map((f, i) => (
        <Card key={i} background="background-front">
          <CardBody direction="row" align="center" justify="between" pad="small">
            <Box>
              <Box direction="row" align="center" gap="xsmall">
                <Text weight="bold">{f.title}</Text>
                <Tag value={f.type} size="small" />
              </Box>
              <Text size="small" color="text-weak">{f.addr}</Text>
              <CheckBox
                label="가격 하락 시 알림"
                checked={priceAlert[f.title]}
                onChange={(e) => setPriceAlert((prev) => ({ ...prev, [f.title]: e.target.checked }))}
              />
            </Box>
            <Box align="end" gap="xsmall">
              <Text size="small">{f.price}</Text>
              <Button size="small" plain label="문의하기" />
            </Box>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
