import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Header from "@cloudscape-design/components/header";

interface Group {
  name: string;
  members: number;
  createdBy: string;
}

const GROUPS: Group[] = [
  { name: "Admins", members: 2, createdBy: "root" },
  { name: "Developers", members: 8, createdBy: "lee.seoah" },
  { name: "ServiceAccounts", members: 4, createdBy: "lee.seoah" },
];

export function GroupsScreen {
  return (
    <Cards<Group>
      items={GROUPS}
      cardDefinition={{
        header: (g) => g.name,
        sections: [
          { id: "members", header: "구성원 수", content: (g) => `${g.members}명` },
          { id: "createdBy", header: "생성자", content: (g) => g.createdBy },
        ],
      }}
      cardsPerRow={[{ cards: 1 }, { minWidth: 480, cards: 3 }]}
      header={<Header counter={`(${GROUPS.length})`}>그룹</Header>}
    />
  );
}
