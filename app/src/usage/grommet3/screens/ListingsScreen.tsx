import * as React from "react";
import { Box, Button, Card, CardBody, Heading, Tag, Text } from "grommet";

interface Listing {
  id: string;
  title: string;
  addr: string;
  price: string;
  type: string;
  size: string;
  desc: string;
}

const LISTINGS: Listing[] = [
  { id: "l1", title: "역세권 신축 오피스텔", addr: "강남구 역삼동", price: "월세 80/120", type: "오피스텔", size: "24㎡", desc: "지하철 2호선 역삼역 도보 5분. 풀옵션, 즉시 입주 가능합니다." },
  { id: "l2", title: "한강뷰 아파트", addr: "성동구 성수동", price: "전세 6억 2천", type: "아파트", size: "84㎡", desc: "한강 조망 가능한 고층 세대. 3룸 2욕실, 주차 2대 가능." },
  { id: "l3", title: "리모델링 단독주택", addr: "마포구 연남동", price: "매매 9억 5천", type: "단독주택", size: "132㎡", desc: "2024년 전면 리모델링 완료. 마당 포함, 반려동물 가능." },
  { id: "l4", title: "신촌 투룸 빌라", addr: "서대문구 신촌동", price: "월세 30/65", type: "빌라", size: "42㎡", desc: "대학가 인접, 관리비 5만원. 즉시 입주." },
];

export function ListingsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = LISTINGS.find((l) => l.id === selectedId);

  if (selected) {
    return (
      <Box gap="medium">
        <Button plain onClick={ => setSelectedId(null)} label="← 목록으로" />
        <Card background="background-front" pad="medium">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="small">
              <Tag value={selected.type} size="small" />
              <Text color="text-weak" size="small">{selected.addr}</Text>
            </Box>
            <Heading level={3} margin="none">{selected.title}</Heading>
            <Text>{selected.desc}</Text>
            <Box direction="row" justify="between" align="center" pad={{ top: "small" }} border={{ side: "top", color: "border" }}>
              <Box>
                <Text size="small" color="text-weak">면적</Text>
                <Text weight="bold">{selected.size}</Text>
              </Box>
              <Box>
                <Text size="small" color="text-weak">가격</Text>
                <Text weight="bold">{selected.price}</Text>
              </Box>
              <Button primary label="문의하기" />
            </Box>
          </CardBody>
        </Card>
      </Box>
    );
  }

  return (
    <Box gap="small">
      {LISTINGS.map((l) => (
        <Card key={l.id} background="background-front" onClick={ => setSelectedId(l.id)} focusIndicator={false}>
          <CardBody direction="row" align="center" justify="between" pad="small" gap="small">
            <Box>
              <Text weight="bold">{l.title}</Text>
              <Text size="small" color="text-weak">{l.addr} · {l.size}</Text>
            </Box>
            <Box align="end" gap="2px">
              <Tag value={l.type} size="small" />
              <Text size="small">{l.price}</Text>
            </Box>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
