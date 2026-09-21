import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Cards from "@cloudscape-design/components/cards";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Link from "@cloudscape-design/components/link";
import MixedLineBarChart from "@cloudscape-design/components/mixed-line-bar-chart";
import SpaceBetween from "@cloudscape-design/components/space-between";

export interface Group {
  name: string;
  members: number;
  capacity: number;
  createdBy: string;
}

export const GROUPS: readonly Group[] = [
  { name: "Admins", members: 2, capacity: 3, createdBy: "root" },
  { name: "Developers", members: 8, capacity: 10, createdBy: "lee.seoah" },
  { name: "ServiceAccounts", members: 4, capacity: 6, createdBy: "lee.seoah" },
  { name: "ReadOnlyAuditors", members: 3, capacity: 4, createdBy: "root" },
  { name: "Contractors", members: 5, capacity: 8, createdBy: "kim.doohyun" },
  { name: "QA", members: 4, capacity: 5, createdBy: "lee.seoah" },
  { name: "Security", members: 2, capacity: 3, createdBy: "root" },
  { name: "DataPlatform", members: 6, capacity: 9, createdBy: "park.junseo" },
];

const TOTAL = GROUPS.reduce((s, g) => s + g.members, 0);

export function GroupsScreen {
  const [query, setQuery] = React.useState("");
  const shown = GROUPS.filter((g) => g.name.toLowerCase.includes(query.toLowerCase));

  return (
    <SpaceBetween size="l">
      <Container header={<Header variant="h2" description={`전체 ${TOTAL}명 · 그룹 ${GROUPS.length}개`}>그룹별 구성원 수 · 정원</Header>}>
        <MixedLineBarChart
          series={[
            { type: "bar", title: "구성원 수", data: GROUPS.map((g) => ({ x: g.name, y: g.members })), color: "var(--component-chart-series-1)" },
            { type: "line", title: "정원", data: GROUPS.map((g) => ({ x: g.name, y: g.capacity })), color: "var(--component-chart-series-3)" },
          ]}
          xScaleType="categorical"
          xTitle="그룹"
          yTitle="인원(명)"
          height={220}
          hideFilter
          ariaLabel="그룹별 구성원 수와 정원"
        />
      </Container>

      <Input
        value={query}
        onChange={({ detail }) => setQuery(detail.value)}
        placeholder="그룹 이름으로 찾기"
        type="search"
      />
      <Cards<Group>
        items={shown}
        cardDefinition={{
          header: (g) => <Link href="#" fontSize="heading-m">{g.name}</Link>,
          sections: [
            { id: "members", header: "구성원 수", content: (g) => <Badge color="blue">{g.members}/{g.capacity}명</Badge> },
            { id: "createdBy", header: "생성자", content: (g) => <Box variant="samp">{g.createdBy}</Box> },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 2 }, { minWidth: 720, cards: 4 }]}
        header={<Header counter={`(${shown.length})`}>그룹</Header>}
        empty={<Box textAlign="center" color="inherit">조건에 맞는 그룹이 없어요.</Box>}
      />
    </SpaceBetween>
  );
}
