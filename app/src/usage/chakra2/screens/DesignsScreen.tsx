import * as React from "react";
import { Box, Grid, HStack, Image, Input, NativeSelect, Stat, Text, VStack } from "@chakra-ui/react";
import { DESIGNS } from "../data";

export function DesignsScreen {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("전체");
  const categories = ["전체", ...new Set(DESIGNS.map((d) => d.category))];

  const totalUses = DESIGNS.reduce((sum, d) => sum + d.uses, 0);
  const top = [...DESIGNS].sort((a, b) => b.uses - a.uses)[0];

  const rows = DESIGNS.filter(
    (d) =>
      (category === "전체" || d.category === category) &&
      (query.trim === "" || d.name.includes(query)),
  );

  return (
    <VStack align="stretch" gap="1rem">
      <Grid templateColumns="repeat(auto-fit, minmax(9rem, 1fr))" gap="1rem">
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">전체 도안</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{DESIGNS.length}종</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">누적 사용</Stat.Label>
          <Stat.ValueText fontSize="1.25rem" fontWeight="600">{totalUses}회</Stat.ValueText>
        </Stat.Root>
        <Stat.Root borderWidth="1px" borderColor="border" borderRadius="control" p="1rem" bg="bg.panel">
          <Stat.Label color="fg.muted">가장 많이 팔린 도안</Stat.Label>
          <Stat.ValueText fontSize="1rem" fontWeight="600">{top.name}</Stat.ValueText>
        </Stat.Root>
      </Grid>

      <HStack gap="0.75rem" flexWrap="wrap">
        <Input placeholder="도안명 검색" value={query} onChange={(e) => setQuery(e.target.value)} maxW="14rem" size="sm" />
        <NativeSelect.Root size="sm" maxW="10rem">
          <NativeSelect.Field value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>
      </HStack>

      <Grid templateColumns="repeat(auto-fill, minmax(9rem, 1fr))" gap="1rem">
        {rows.map((d) => (
          <Box key={d.id} borderWidth="1px" borderColor="border" borderRadius="control" overflow="hidden" bg="bg.panel">
            <Image src={d.image} alt={d.name} w="100%" h="6rem" objectFit="cover" />
            <Box p="0.625rem">
              <Text fontSize="0.8125rem" fontWeight="500">{d.name}</Text>
              <Text fontSize="0.75rem" color="fg.subtle">{d.category} · {d.price.toLocaleString}원</Text>
              <Text fontSize="0.6875rem" color="fg.subtle" mt="0.125rem">누적 {d.uses}회 사용</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}
