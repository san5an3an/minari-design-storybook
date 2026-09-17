import * as React from "react";
import Badge from "@cloudscape-design/components/badge";
import Box from "@cloudscape-design/components/box";
import Cards from "@cloudscape-design/components/cards";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Link from "@cloudscape-design/components/link";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import SpaceBetween from "@cloudscape-design/components/space-between";

interface Group { name: string; members: number; createdBy: string }

const GROUPS: Group[] = [
  { name: "Admins", members: 2, createdBy: "root" },
  { name: "Developers", members: 8, createdBy: "lee.seoah" },
  { name: "ServiceAccounts", members: 4, createdBy: "lee.seoah" },
  { name: "ReadOnlyAuditors", members: 3, createdBy: "root" },
  { name: "Contractors", members: 5, createdBy: "kim.doohyun" },
];

const TOTAL = GROUPS.reduce((s, g) => s + g.members, 0);

export function GroupsScreen {
  const [query, setQuery] = React.useState("");
  const shown = GROUPS.filter((g) => g.name.toLowerCase.includes(query.toLowerCase));

  return (
    <SpaceBetween size="l">
      <div style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "8px", padding: "0.9rem" }}>
        <Box fontWeight="bold" margin={{ bottom: "s" }}>그룹별 구성원 비중 · 전체 {TOTAL}명</Box>
        <SpaceBetween size="xs">
          {GROUPS.map((g) => (
            <div key={g.name} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ width: "9rem", fontSize: "0.8125rem" }}>{g.name}</span>
              <div style={{ flex: 1 }}>
                <ProgressBar value={Math.round((g.members / TOTAL) * 100)} />
              </div>
              <span style={{ width: "3rem", textAlign: "right", fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{g.members}명</span>
            </div>
          ))}
        </SpaceBetween>
      </div>

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
