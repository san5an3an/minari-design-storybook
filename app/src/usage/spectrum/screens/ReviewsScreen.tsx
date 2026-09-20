import * as React from "react";
import {
  ActionButton, Avatar, Badge, Cell, Column, Flex, InlineAlert, Content, Heading, Picker, Item, ProgressBar,
  Row, StatusLight, TableBody, TableHeader, TableView, Text, View,
} from "@adobe/react-spectrum";
import { ASSETS, REVIEWERS, type AssetStatus } from "../data";

// Picker children 정적과 렌더함수 혼용 금지. 타입이 안 맞음
const REVIEWER_FILTER_OPTIONS: readonly { id: string; label: string }[] = [
  { id: "all", label: "전체 담당자" },
  ...REVIEWERS.map((r) => ({ id: r.name, label: r.name })),
];

const STATUS_VARIANT: Record<AssetStatus, "info" | "positive" | "negative"> = {
  "검토 대기": "info",
  "승인": "positive",
  "반려": "negative",
};

export function ReviewsScreen {
  const [statuses, setStatuses] = React.useState<Record<string, AssetStatus>>(
     => Object.fromEntries(ASSETS.map((a) => [a.id, a.status])),
  );
  const [reviewerFilter, setReviewerFilter] = React.useState<string>("all");
  const [lastAction, setLastAction] = React.useState<string | null>(null);

  const pending = ASSETS.filter((a) => statuses[a.id] === "검토 대기")
    .filter((a) => reviewerFilter === "all" || a.reviewer === reviewerFilter);

  const decide = (id: string, next: AssetStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: next }));
    const asset = ASSETS.find((a) => a.id === id);
    setLastAction(`${asset?.name} 을(를) ${next === "승인" ? "승인" : "반려"}했어요.`);
  };

  const totalPending = ASSETS.filter((a) => statuses[a.id] === "검토 대기").length;
  const totalDecided = ASSETS.length - totalPending;
  const progressPct = Math.round((totalDecided / ASSETS.length) * 100);

  return (
    <Flex direction="column" gap="size-200">
      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Flex justifyContent="space-between" alignItems="center" marginBottom="size-100">
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem" }}>이번주 처리 진행률</Text>
          <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{totalDecided}/{ASSETS.length}건</Text>
        </Flex>
        <ProgressBar aria-label="처리 진행률" value={progressPct} width="100%" />
      </View>

      {lastAction ? (
        <InlineAlert variant="positive">
          <Heading>처리됨</Heading>
          <Content>{lastAction}</Content>
        </InlineAlert>
      ) : null}

      <Flex justifyContent="space-between" alignItems="center" wrap gap="size-150">
        <Picker
          aria-label="담당자 필터"
          items={REVIEWER_FILTER_OPTIONS}
          selectedKey={reviewerFilter}
          onSelectionChange={(k) => setReviewerFilter(String(k))}
          width="size-2400"
        >
          {(opt) => <Item key={opt.id}>{opt.label}</Item>}
        </Picker>
        <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>검토 대기 {pending.length}건</Text>
      </Flex>

      {/* 열 폭 지정 필수. 지정 없으면 6열 균등분할로 처리 필드 버튼 텍스트가 잘리는 문제 있음 */}
      <TableView aria-label="검토 대기 자산" density="spacious" overflowMode="wrap">
        <TableHeader>
          <Column minWidth={170}>자산</Column>
          <Column width={78}>유형</Column>
          <Column width={74}>담당</Column>
          <Column width={68}>마감</Column>
          <Column width={92}>상태</Column>
          <Column width={160} align="end">처리</Column>
        </TableHeader>
        <TableBody items={pending}>
          {(a) => (
            <Row>
              <Cell>{a.name}</Cell>
              <Cell>{a.type}</Cell>
              <Cell>{a.reviewer}</Cell>
              <Cell>{a.dueDate}</Cell>
              <Cell><StatusLight variant={STATUS_VARIANT[statuses[a.id]]}>{statuses[a.id]}</StatusLight></Cell>
              <Cell>
                {/* flexShrink: 0 지정. 버튼이 셀에 맞춰 줄어들면 라벨이 잘릴 수 있음 */}
                <Flex gap="size-75" justifyContent="end">
                  <ActionButton onPress={ => decide(a.id, "승인")} UNSAFE_style={{ flexShrink: 0 }}>승인</ActionButton>
                  <ActionButton onPress={ => decide(a.id, "반려")} UNSAFE_style={{ flexShrink: 0 }}>반려</ActionButton>
                </Flex>
              </Cell>
            </Row>
          )}
        </TableBody>
      </TableView>

      <View borderWidth="thin" borderColor="light" borderRadius="medium" padding="size-200">
        <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem", display: "block", marginBottom: "0.75rem" }}>담당자별 부하</Text>
        <Flex gap="size-200" wrap>
          {REVIEWERS.map((r) => (
            <Flex key={r.id} alignItems="center" gap="size-100" UNSAFE_style={{ flex: "1 1 10rem" }}>
              <Avatar src={`https://i.pravatar.cc/64?u=${r.avatarSeed}`} alt={r.name} size={32} />
              <Flex direction="column" gap="size-25" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
                <Flex justifyContent="space-between">
                  <Text UNSAFE_style={{ fontSize: "0.8rem", fontWeight: 600 }}>{r.name}</Text>
                  <Badge variant={r.available ? "positive" : "neutral"}>{r.available ? "가능" : "바쁨"}</Badge>
                </Flex>
                <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>대기 {r.pending}건 · 이번주 {r.completedThisWeek}건 처리</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </View>
    </Flex>
  );
}
