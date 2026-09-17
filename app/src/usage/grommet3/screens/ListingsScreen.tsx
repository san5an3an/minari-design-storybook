import * as React from "react";
import {
  Box, Button, Card, CardBody, CheckBox, Heading, Image, Meter, RangeSelector, Select, Tag, Text,
  ThemeContext,
} from "grommet";
import { normalizeColor } from "grommet/utils";
import { Heart } from "lucide-react";

interface Listing {
  id: string;
  title: string;
  addr: string;
  price: string;
  type: string;
  size: string;
  desc: string;
  photo: string;
  interest: number;
}

const LISTINGS: Listing[] = [
  { id: "l1", title: "역세권 신축 오피스텔", addr: "강남구 역삼동", price: "월세 80/120", type: "오피스텔", size: "24㎡", desc: "지하철 2호선 역삼역 도보 5분. 풀옵션, 즉시 입주 가능합니다.", photo: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=60", interest: 72 },
  { id: "l2", title: "한강뷰 아파트", addr: "성동구 성수동", price: "전세 6억 2천", type: "아파트", size: "84㎡", desc: "한강 조망 가능한 고층 세대. 3룸 2욕실, 주차 2대 가능.", photo: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=60", interest: 94 },
  { id: "l3", title: "리모델링 단독주택", addr: "마포구 연남동", price: "매매 9억 5천", type: "단독주택", size: "132㎡", desc: "2024년 전면 리모델링 완료. 마당 포함, 반려동물 가능.", photo: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=60", interest: 58 },
  { id: "l4", title: "신촌 투룸 빌라", addr: "서대문구 신촌동", price: "월세 30/65", type: "빌라", size: "42㎡", desc: "대학가 인접, 관리비 5만원. 즉시 입주.", photo: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&q=60", interest: 35 },
];

const SORT_OPTIONS = ["최신순", "관심도순"];

export function ListingsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [sort, setSort] = React.useState(SORT_OPTIONS[0]);
  const [hotOnly, setHotOnly] = React.useState(false);
  const [interestRange, setInterestRange] = React.useState<[number, number]>([0, 100]);
  const theme = React.useContext(ThemeContext);
  const dangerColor = normalizeColor("status-critical", theme) as string;
  const selected = LISTINGS.find((l) => l.id === selectedId);

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

  const base = (hotOnly ? LISTINGS.filter((l) => l.interest >= 70) : LISTINGS).filter(
    (l) => l.interest >= interestRange[0] && l.interest <= interestRange[1],
  );
  const shown = [...base].sort((a, b) => (sort === "관심도순" ? b.interest - a.interest : 0));
  const byType = Array.from(new Set(LISTINGS.map((l) => l.type))).map((t) => ({
    type: t,
    count: LISTINGS.filter((l) => l.type === t).length,
  }));

  return (
    <Box gap="medium">
      <Box direction="row" align="center" justify="between" wrap>
        <Text size="large">Hello, 김하늘 님! 오늘 새로 올라온 매물이 있어요.</Text>
        <Box direction="row" align="center" gap="medium">
          <CheckBox
            label={<Text size="small">관심도 70% 이상만</Text>}
            checked={hotOnly}
            onChange={(e) => setHotOnly(e.target.checked)}
          />
          <Select size="small" options={SORT_OPTIONS} value={sort} onChange={({ option }) => setSort(option)} />
        </Box>
      </Box>

      <Box direction="row" align="center" gap="small">
        <Text size="small" color="text-weak" style={{ whiteSpace: "nowrap" }}>관심도 범위</Text>
        <Box width="14rem">
          <RangeSelector
            min={0}
            max={100}
            step={5}
            size="small"
            values={interestRange}
            onChange={(range) => setInterestRange(range as [number, number])}
          />
        </Box>
        <Text size="small" color="text-weak">{interestRange[0]}%–{interestRange[1]}%</Text>
      </Box>

      <Box direction="row" gap="xsmall" wrap>
        {byType.map((t) => (
          <Tag key={t.type} value={`${t.type} ${t.count}`} size="small" />
        ))}
      </Box>

      <Box direction="row" wrap gap="medium">
        {shown.map((l) => (
          <Card
            key={l.id}
            background="background-front"
            onClick={ => setSelectedId(l.id)}
            focusIndicator={false}
            round="medium"
            elevation="small"
            width={{ min: "14rem" }}
            flex={{ grow: 1, shrink: 1 }}
            basis="14rem"
          >
            <Box height="8rem" overflow="hidden" round={{ corner: "top", size: "medium" }} style={{ position: "relative" }}>
              <Image src={l.photo} fit="cover" a11yTitle={l.title} />
              <Box style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }} round="full" background="white" pad="4px">
                <Button
                  plain
                  icon={<Heart size={14} color={dangerColor} />}
                  aria-label="찜하기"
                  onClick={(e: React.MouseEvent) => e.stopPropagation}
                />
              </Box>
            </Box>
            <CardBody pad="medium" gap="xsmall">
              <Text weight="bold">{l.title}</Text>
              <Text size="small" color="text-weak">{l.addr} · {l.size}</Text>
              <Text size="small">{l.price}</Text>
              <Box margin={{ top: "xsmall" }}>
                <Text size="xsmall" color="text-weak">관심도</Text>
                <Meter type="bar" thickness="xsmall" value={l.interest} max={100} color="brand" aria-label={`관심도 ${l.interest}%`} />
              </Box>
            </CardBody>
          </Card>
        ))}
      </Box>

      <Box
        pad="medium"
        round="medium"
        background="background-front"
        border={{ color: "border" }}
        gap="small"
      >
        <Text weight="bold" size="small">관심도 순위</Text>
        <Box gap="small">
          {[...LISTINGS].sort((a, b) => b.interest - a.interest).map((l, i) => (
            <Box key={l.id} direction="row" align="center" gap="small">
              <Text size="small" color="text-weak" style={{ width: "1.2rem" }}>{i + 1}</Text>
              <Text size="small" style={{ flex: 1 }} truncate>{l.title}</Text>
              <Box width="8rem">
                <Meter type="bar" thickness="xsmall" value={l.interest} max={100} color="brand" aria-label={`관심도 ${l.interest}%`} />
              </Box>
              <Text size="xsmall" color="text-weak" style={{ width: "2.5rem", textAlign: "right" }}>{l.interest}%</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
