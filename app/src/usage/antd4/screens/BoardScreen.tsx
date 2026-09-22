import * as React from "react";
import { Avatar, Button, Empty, Flex, Segmented, Tag, Typography } from "antd";
import { POSTS, type Post, type PostKind } from "../data";
import { Figure, fmt } from "../parts";

const KIND_COLOR: Record<PostKind, string> = { 공지: "error", 리포트: "processing", 질문: "default" };

export const BOARD_LAYOUT_CSS = `
.bd-split { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); align-items: start; }
@container rp (min-width: 62rem) {
  .bd-split { grid-template-columns: minmax(0, 22rem) minmax(0, 1fr); }
}
`;

// 제목 두 행에서 자름. 행 수 다르면 목록이 들쑥날쑥해지는 문제 있음
function PostRow({ post, active, onOpen }: { post: Post; active: boolean; onOpen:  => void }) {
  return (
    <li
      onClick={onOpen}
      // tabIndex, Enter/Space 처리 추가. List.Item 클릭 포커스 안 받음
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault; onOpen; } }}
      style={{
        cursor: "pointer",
        listStyle: "none",
        paddingInline: 12,
        paddingBlock: 10,
        borderRadius: 8,
        background: active ? "var(--semantic-bg-brand-subtlest)" : undefined,
      }}
    >
      <Flex vertical gap={4} style={{ inlineSize: "100%", minWidth: 0 }}>
        <Flex gap={6} align="center" wrap>
          <Tag color={KIND_COLOR[post.kind]} style={{ marginInlineEnd: 0 }}>{post.kind}</Tag>
          {post.pinned && <Tag style={{ marginInlineEnd: 0 }}>고정</Tag>}
          {post.photo && <Typography.Text type="secondary" style={{ fontSize: 11 }}>사진</Typography.Text>}
        </Flex>
        <Typography.Text
          strong
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", fontSize: 13, lineHeight: 1.5 }}
        >
          {post.title}
        </Typography.Text>
        <Typography.Text type="secondary" style={{ fontSize: 11 }}>
          {post.author} · {post.date} · 조회 {fmt(post.views)} · 댓글 {post.comments}
        </Typography.Text>
      </Flex>
    </li>
  );
}

export function BoardScreen {
  const [kind, setKind] = React.useState<"전체" | PostKind>("전체");
  const [openId, setOpenId] = React.useState<string>(POSTS[0].id);

  // 고정 글에도 필터 적용. 제외하면 필터 결과가 정확하지 않음
  const rows = React.useMemo( => {
    const filtered = kind === "전체" ? POSTS : POSTS.filter((p) => p.kind === kind);
    return [...filtered].sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned));
  }, [kind]);

  const open = rows.find((p) => p.id === openId) ?? null;

  return (
    <Flex vertical gap={16}>
      <style>{BOARD_LAYOUT_CSS}</style>

      <Flex justify="space-between" align="center" gap={8} wrap>
        <Segmented
          value={kind}
          onChange={(v) => setKind(v as "전체" | PostKind)}
          options={["전체", "공지", "리포트", "질문"]}
        />
        <Button type="primary">글쓰기</Button>
      </Flex>

      <div className="bd-split">
        <Figure
          title="글 목록"
          caption="구분을 고르면 그 그룹만 남습니다. 고정 글도 그 그룹 안에서만 앞섭니다."
          source={`${rows.length}개 / 전체 ${POSTS.length}개`}
        >
          {rows.length > 0 ? (
            <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              {rows.map((p) => (
                <PostRow key={p.id} post={p} active={p.id === open?.id} onOpen={ => setOpenId(p.id)} />
              ))}
            </ul>
          ) : (
            // 빈 목록은 공백 대신 안내 문구로 표시
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="이 구분에는 글이 없습니다" />
          )}
        </Figure>

        {open ? (
          <Figure
            title={open.title}
            caption={`${open.author} · ${open.date}`}
            source={`${open.id} · 조회 ${fmt(open.views)} · 댓글 ${open.comments}`}
            action={<Tag color={KIND_COLOR[open.kind]} style={{ marginInlineEnd: 0 }}>{open.kind}</Tag>}
          >
            <Flex vertical gap={14}>
              {open.photo && (
                // 상세에서도 이미지 비율 고정. 글마다 비율이 다르면 카드 높이가 튀어 옆 목록과 어긋나고 읽기 흐름이 방해되는 문제가 있음
                <img
                  src={open.photo}
                  alt=""
                  loading="lazy"
                  style={{ inlineSize: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: 8, display: "block" }}
                />
              )}

              {open.body.map((para, i) => (
                <Typography.Paragraph key={i} style={{ marginBlockEnd: 0, fontSize: 13.5, lineHeight: 1.85 }}>
                  {para}
                </Typography.Paragraph>
              ))}

              <Flex gap={8} align="center" style={{ paddingBlockStart: 10, borderBlockStart: "1px solid var(--semantic-border-neutral-subtle)" }}>
                <Avatar size="small">{open.author.slice(-2, -1)}</Avatar>
                <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                  {open.comments > 0 ? `댓글 ${open.comments}건이 달려 있습니다` : "아직 댓글이 없습니다"}
                </Typography.Text>
              </Flex>
            </Flex>
          </Figure>
        ) : (
          <Figure title="본문" caption="고른 글이 지금 목록에 없습니다.">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="왼쪽에서 글을 고르세요" />
          </Figure>
        )}
      </div>
    </Flex>
  );
}
