import * as React from "react";
import { Box, Card, CardBody, Text } from "grommet";

const FAVORITES = [
  { title: "한강뷰 아파트", addr: "성동구 성수동", price: "전세 6억 2천" },
  { title: "리모델링 단독주택", addr: "마포구 연남동", price: "매매 9억 5천" },
];

export function FavoritesScreen {
  return (
    <Box gap="small">
      {FAVORITES.map((f, i) => (
        <Card key={i} background="background-front">
          <CardBody direction="row" align="center" justify="between" pad="small">
            <Box>
              <Text weight="bold">{f.title}</Text>
              <Text size="small" color="text-weak">{f.addr}</Text>
            </Box>
            <Text size="small">{f.price}</Text>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
