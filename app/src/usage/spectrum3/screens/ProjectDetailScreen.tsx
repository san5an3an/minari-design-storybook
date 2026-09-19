import * as React from "react";
import {
  ActionButton, Avatar, Checkbox, Content, DropZone, FileTrigger, Flex, Heading, IllustratedMessage,
  ProgressBar, StatusLight, Text, View,
} from "@adobe/react-spectrum";
import DragHandle from "@spectrum-icons/workflow/DragHandle";
import { PROJECTS, PROJECT_TASKS, TEAM, type ProjectStatus } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_VARIANT: Record<ProjectStatus, "info" | "positive" | "notice"> = {
  "진행중": "info",
  "검토중": "notice",
  "완료": "positive",
};

export function ProjectDetailScreen({ selectedId, onSelect }: ScreenProps) {
  const project = PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];
  const initialTasks = PROJECT_TASKS[project.id] ?? [];
  const [done, setDone] = React.useState<Record<string, boolean>>( => Object.fromEntries(initialTasks.map((t) => [t.id, t.done])));
  const [dropped, setDropped] = React.useState(false);

  const members = TEAM.filter((m) => project.memberIds.includes(m.id));
  const completedCount = Object.values(done).filter(Boolean).length;
  const pct = initialTasks.length ? Math.round((completedCount / initialTasks.length) * 100) : project.progressPct;

  return (
    <Flex direction="column" gap="size-200">
      <ActionButton isQuiet onPress={ => onSelect?.("")} UNSAFE_style={{ width: "fit-content" }}>← 홈으로</ActionButton>

      <Flex justifyContent="space-between" alignItems="start" wrap gap="size-150">
        <Flex direction="column" gap="size-75">
          <Heading level={3} margin={0}>{project.name}</Heading>
          <Text UNSAFE_style={{ fontSize: "0.85rem", color: "var(--semantic-fg-neutral-subtle)" }}>{project.description}</Text>
        </Flex>
        <StatusLight variant={STATUS_VARIANT[project.status]}>{project.status}</StatusLight>
      </Flex>

      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Flex justifyContent="space-between" marginBottom="size-75">
          <Text UNSAFE_style={{ fontSize: "0.8rem", fontWeight: 600 }}>진행률</Text>
          <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{completedCount}/{initialTasks.length || project.tasksTotal} 작업 · 마감 {project.dueDate}</Text>
        </Flex>
        <ProgressBar aria-label="프로젝트 진행률" value={pct} width="100%" />
      </View>

      <Flex gap="size-200" wrap>
        <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200" UNSAFE_style={{ flex: "2 1 16rem" }}>
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.75rem" }}>작업 목록</Text>
          {initialTasks.length === 0 ? (
            <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>등록된 세부 작업이 없어요. 전체 진행률만 표시돼요.</Text>
          ) : (
            <Flex direction="column" gap="size-100">
              {initialTasks.map((t) => {
                const assignee = TEAM.find((m) => m.id === t.assigneeId);
                return (
                  <Flex key={t.id} alignItems="center" gap="size-100" justifyContent="space-between">
                    <Flex alignItems="center" gap="size-75">
                      <DragHandle size="S" UNSAFE_style={{ color: "var(--semantic-fg-neutral-subtlest)" }} />
                      <Checkbox isSelected={!!done[t.id]} onChange={(v) => setDone((prev) => ({ ...prev, [t.id]: v }))}>
                        <Text UNSAFE_style={{ fontSize: "0.8rem", textDecoration: done[t.id] ? "line-through" : undefined, color: done[t.id] ? "var(--semantic-fg-neutral-subtle)" : undefined }}>
                          {t.title}
                        </Text>
                      </Checkbox>
                    </Flex>
                    {assignee ? <Avatar src={`https://i.pravatar.cc/64?u=${assignee.avatarSeed}`} alt={assignee.name} size={22} /> : null}
                  </Flex>
                );
              })}
            </Flex>
          )}
        </View>

        <Flex direction="column" gap="size-150" UNSAFE_style={{ flex: "1 1 12rem" }}>
          <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
            <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.6rem" }}>참여자</Text>
            <Flex direction="column" gap="size-75">
              {members.map((m) => (
                <Flex key={m.id} alignItems="center" gap="size-75">
                  <Avatar src={`https://i.pravatar.cc/64?u=${m.avatarSeed}`} alt={m.name} size={24} />
                  <Text UNSAFE_style={{ fontSize: "0.78rem" }}>{m.name}</Text>
                </Flex>
              ))}
            </Flex>
          </View>

          <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
            <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.6rem" }}>파일 첨부</Text>
            <DropZone
              aria-label="파일을 여기로 드롭하세요"
              onDrop={ => setDropped(true)}
              UNSAFE_style={{ minHeight: "6rem" }}
            >
              <IllustratedMessage>
                <Content>{dropped ? "파일이 추가됐어요." : "파일을 드래그하거나 아래 버튼으로 선택하세요."}</Content>
              </IllustratedMessage>
            </DropZone>
            <FileTrigger onSelect={ => setDropped(true)}>
              <ActionButton UNSAFE_style={{ marginTop: "0.5rem", width: "100%" }}>파일 선택</ActionButton>
            </FileTrigger>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
}
