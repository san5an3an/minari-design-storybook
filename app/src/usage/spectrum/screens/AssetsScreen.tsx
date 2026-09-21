import * as React from "react";
import {
  ActionButton, Avatar, Badge, Content, Flex, Heading, Picker, Item, StatusLight, Tabs, TabList, TabPanels, Text, TextArea, View,
} from "@adobe/react-spectrum";
import { ASSETS, ASSET_COMMENTS, type Asset, type AssetStatus, type AssetType } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_VARIANT: Record<AssetStatus, "info" | "positive" | "negative"> = {
  "검토 대기": "info",
  "승인": "positive",
  "반려": "negative",
};

// 카드 전체 div onClick으로 감싸 클릭 처리. View는 press 이벤트 없음
function AssetCard({ asset, onSelect }: { asset: Asset; onSelect:  => void }) {
  return (
    <div
      onClick={onSelect}
      style={{
        width: "13rem", cursor: "pointer", overflow: "hidden",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
      }}
    >
      <img src={asset.image} alt={asset.name} style={{ width: "100%", height: "7rem", objectFit: "cover", display: "block" }} />
      <View padding="size-150">
        <Flex direction="column" gap="size-50">
          <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.85rem" }}>{asset.name}</Text>
          <Flex justifyContent="space-between" alignItems="center">
            <StatusLight variant={STATUS_VARIANT[asset.status]}>{asset.status}</StatusLight>
            <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{asset.fileSizeMb}MB</Text>
          </Flex>
          <Flex gap="size-50" wrap>
            {asset.tags.map((t) => <Badge key={t} variant="neutral">{t}</Badge>)}
          </Flex>
        </Flex>
      </View>
    </div>
  );
}

function AssetDetail({ asset, onBack }: { asset: Asset; onBack:  => void }) {
  const [reply, setReply] = React.useState("");
  const comments = ASSET_COMMENTS[asset.id] ?? [];
  return (
    <Flex direction="column" gap="size-200">
      <ActionButton isQuiet onPress={onBack} UNSAFE_style={{ width: "fit-content" }}>← 목록으로</ActionButton>
      <Flex gap="size-200" wrap>
        <View borderRadius="medium" overflow="hidden" UNSAFE_style={{ flex: "1 1 20rem", maxWidth: "26rem" }}>
          <img src={asset.image} alt={asset.name} style={{ width: "100%", display: "block" }} />
        </View>
        <Flex direction="column" gap="size-150" UNSAFE_style={{ flex: "1 1 16rem" }}>
          <Heading level={3} margin={0}>{asset.name}</Heading>
          <StatusLight variant={STATUS_VARIANT[asset.status]}>{asset.status}</StatusLight>
          <Flex direction="column" gap="size-75">
            <Text UNSAFE_style={{ fontSize: "0.8rem" }}><strong>담당</strong> · {asset.reviewer}</Text>
            <Text UNSAFE_style={{ fontSize: "0.8rem" }}><strong>업로드</strong> · {asset.uploadedAt} · <strong>마감</strong> {asset.dueDate}</Text>
            <Text UNSAFE_style={{ fontSize: "0.8rem" }}><strong>용량</strong> · {asset.fileSizeMb}MB</Text>
          </Flex>
          <Flex gap="size-75" wrap>
            {asset.tags.map((t) => <Badge key={t} variant="indigo">{t}</Badge>)}
          </Flex>
          <Flex gap="size-100">
            <ActionButton>승인</ActionButton>
            <ActionButton>반려</ActionButton>
            <ActionButton isQuiet>다운로드</ActionButton>
          </Flex>
        </Flex>
      </Flex>

      <Tabs aria-label="자산 상세 탭">
        <TabList>
          <Item key="comments">코멘트 ({comments.length})</Item>
          <Item key="history">변경 이력</Item>
        </TabList>
        <TabPanels>
          <Item key="comments">
            <Flex direction="column" gap="size-150" marginTop="size-150">
              {comments.length === 0 ? (
                <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>아직 코멘트가 없어요.</Text>
              ) : comments.map((c) => (
                <Flex key={c.id} gap="size-100" alignItems="start">
                  <Avatar src={`https://i.pravatar.cc/64?u=${c.author}`} alt={c.author} size={28} />
                  <Flex direction="column" gap="size-25">
                    <Flex gap="size-75" alignItems="baseline">
                      <Text UNSAFE_style={{ fontWeight: 600, fontSize: "0.8rem" }}>{c.author}</Text>
                      <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{c.time}</Text>
                    </Flex>
                    <Text UNSAFE_style={{ fontSize: "0.8rem" }}>{c.text}</Text>
                  </Flex>
                </Flex>
              ))}
              <TextArea aria-label="코멘트 입력" placeholder="코멘트를 입력하세요" value={reply} onChange={setReply} width="100%" />
              <ActionButton isDisabled={!reply.trim} UNSAFE_style={{ width: "fit-content" }}>코멘트 남기기</ActionButton>
            </Flex>
          </Item>
          <Item key="history">
            <Content marginTop="size-150">
              <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>
                {asset.uploadedAt} 업로드 · {asset.reviewer}님에게 배정됨
              </Text>
            </Content>
          </Item>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export function AssetsScreen({ selectedId, onSelect }: ScreenProps) {
  const [typeFilter, setTypeFilter] = React.useState<AssetType | "all">("all");
  const selected = ASSETS.find((a) => a.id === selectedId);

  if (selected) {
    return <AssetDetail asset={selected} onBack={ => onSelect?.("")} />;
  }

  const filtered = typeFilter === "all" ? ASSETS : ASSETS.filter((a) => a.type === typeFilter);

  return (
    <Flex direction="column" gap="size-200">
      <Flex justifyContent="space-between" alignItems="center" wrap gap="size-150">
        <Picker
          aria-label="유형 필터"
          selectedKey={typeFilter}
          onSelectionChange={(k) => setTypeFilter(k as AssetType | "all")}
          width="size-2000"
        >
          <Item key="all">전체 유형</Item>
          <Item key="이미지">이미지</Item>
          <Item key="영상">영상</Item>
          <Item key="디자인 파일">디자인 파일</Item>
        </Picker>
        <Text UNSAFE_style={{ fontSize: "0.8rem", color: "var(--semantic-fg-neutral-subtle)" }}>{filtered.length}개 자산</Text>
      </Flex>
      <Flex gap="size-200" wrap>
        {filtered.map((a) => (
          <AssetCard key={a.id} asset={a} onSelect={ => onSelect?.(a.id)} />
        ))}
      </Flex>
    </Flex>
  );
}
