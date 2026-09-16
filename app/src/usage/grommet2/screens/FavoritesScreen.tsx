import * as React from "react";
import { Box, Button, Card, CardBody, Text } from "grommet";

const FAVORITES = [
  { title: "스타트업 밋업 2026", venue: "코엑스 컨퍼런스룸", date: "10-11" },
  { title: "현대미술 특별전", venue: "시립미술관", date: "10-18" },
];

export function FavoritesScreen {
  return (
    <Box gap="small">
      {FAVORITES.map((f, i) => (
        <Card key={i} background="background-front">
          <CardBody direction="row" align="center" justify="between" pad="small">
            <Box>
              <Text weight="bold">{f.title}</Text>
              <Text size="small" color="text-weak">{f.venue} · 10월 {f.date.split("-")[1]}일</Text>
            </Box>
            <Button size="small" label="예매하기" />
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
