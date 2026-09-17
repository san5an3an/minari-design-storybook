import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Header from "@cloudscape-design/components/header";
import Badge from "@cloudscape-design/components/badge";
import Link from "@cloudscape-design/components/link";
import Input from "@cloudscape-design/components/input";
import SpaceBetween from "@cloudscape-design/components/space-between";

interface Group {
  name: string;
  members: number;
  createdBy: string;
}

const GROUPS: Group[] = [
  { name: "Admins", members: 2, createdBy: "root" },
  { name: "Developers", members: 8, createdBy: "lee.seoah" },
  { name: "ServiceAccounts", members: 4, createdBy: "lee.seoah" },
  { name: "ReadOnlyAuditors", members: 3, createdBy: "root" },
  { name: "Contractors", members: 5, createdBy: "kim.doohyun" },
];

export function GroupsScreen {
  const [query, setQuery] = React.useState("");
  const shown = GROUPS.filter((g) => g.name.toLowerCase.includes(query.toLowerCase));

  return (
    <SpaceBetween size="m">
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
            { id: "members", header: "구성원 수", content: (g) => <Badge color="blue">{g.members}명</Badge> },
            { id: "createdBy", header: "생성자", content: (g) => g.createdBy },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 3 }]}
        header={<Header counter={`(${shown.length})`}>그룹</Header>}
      />
    </SpaceBetween>
  );
}
