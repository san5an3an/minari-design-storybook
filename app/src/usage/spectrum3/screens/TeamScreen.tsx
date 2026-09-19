import * as React from "react";
import { Avatar, Badge, Flex, Meter, Switch, Text, View } from "@adobe/react-spectrum";
import { PROJECTS, TEAM } from "../data";

export function TeamScreen {
  const [available, setAvailable] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(TEAM.map((m) => [m.id, m.available])),
  );

  return (
    <Flex direction="column" gap="size-200">
      <Flex gap="size-200" wrap>
        {TEAM.map((m) => {
          const projects = PROJECTS.filter((p) => p.memberIds.includes(m.id) && p.status !== "완료");
          return (
            <View key={m.id} borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "1 1 13rem" }}>
              <Flex alignItems="center" gap="size-100" marginBottom="size-150">
                <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={36} />
                <Flex direction="column" gap="size-25">
                  <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem" }}>{m.name}</Text>
                  <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{m.role}</Text>
                </Flex>
              </Flex>
              <Meter label="이번주 부하" value={m.workloadPct} variant={m.workloadPct >= 90 ? "critical" : m.workloadPct >= 70 ? "warning" : "positive"} marginBottom="size-150" />
              <Flex justifyContent="space-between" alignItems="center" marginBottom="size-100">
                <Text UNSAFE_style={{ fontSize: "0.75rem" }}>지금 가능</Text>
                <Switch isSelected={available[m.id]} onChange={(v) => setAvailable((prev) => ({ ...prev, [m.id]: v }))} isEmphasized aria-label={`${m.name} 가용 상태`} />
              </Flex>
              <Flex gap="size-50" wrap>
                {projects.length === 0 ? (
                  <Badge variant="neutral">배정된 진행 프로젝트 없음</Badge>
                ) : projects.map((p) => <Badge key={p.id} variant="indigo">{p.name}</Badge>)}
              </Flex>
            </View>
          );
        })}
      </Flex>

      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.6rem" }}>지금 가능한 팀원</Text>
        <Flex gap="size-100" wrap>
          {TEAM.filter((m) => available[m.id]).map((m) => (
            <Flex key={m.id} alignItems="center" gap="size-75">
              <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={22} />
              <Text UNSAFE_style={{ fontSize: "0.78rem" }}>{m.name}</Text>
            </Flex>
          ))}
          {TEAM.every((m) => !available[m.id]) ? (
            <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>지금 가능한 팀원이 없어요.</Text>
          ) : null}
        </Flex>
      </View>
    </Flex>
  );
}
