"use client";

import * as React from "react";
import { ChevronRight, MessageSquare, PenLine, Search, ThumbsUp, TrendingUp, Users } from "lucide-react";
import { BackToList, DIVIDER, MobileHero, Sheet, opensSheet, useBodyTopOn } from "../../daisyui/mobile/DaisyuiMobileShell";
import { ACTIVITY_FEED, EMPTY_DRAFT, HERO_IMAGE, INITIAL_POSTS, type Draft, type Post } from "../screens/PostsScreen";

const COMPOSE_SHEET = "d3-compose-sheet";

export function PostsMobile() {
  const [posts, setPosts] = React.useState<Post[]>(INITIAL_POSTS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);
  const composeRef = React.useRef<HTMLDialogElement>(null);
  const top = useBodyTopOn<HTMLDivElement>(selectedId ?? "list");
  const selected = posts.find((p) => p.id === selectedId);

  const filtered = posts.filter((p) => p.title.toLowerCase().includes(query.trim().toLowerCase()));

  const STATS = [
    { label: "오늘 게시글", value: String(posts.length), delta: "+3", icon: MessageSquare },
    { label: "오늘 댓글", value: "48", delta: "+15", icon: ThumbsUp },
    { label: "활성 사용자", value: "230", delta: "+9%", icon: Users },
    { label: "이번 주 인기글", value: "3", delta: "0", icon: TrendingUp },
  ] as const;

  const openCompose = () => {
    setDraft(EMPTY_DRAFT);
    composeRef.current?.showModal();
  };
  const submitDraft = () => {
    const title = draft.title.trim();
    const body = draft.body.trim();
    if (!title || !body) return;
    const next: Post = { id: `local-${Date.now()}`, title, body, author: "한지우", time: "방금 전", likes: 0, comments: [] };
    setPosts((prev) => [next, ...prev]);
    composeRef.current?.close();
  };

  if (selected) {
    return (
      <div ref={top} className="d-card bg-base-100 shadow">
        <div className="d-card-body gap-2 p-4">
          <BackToList onClick={() => setSelectedId(null)} />
          <h3 className="text-lg font-bold">{selected.title}</h3>
          <span className="text-sm opacity-60">{selected.author} · {selected.time} · 좋아요 {selected.likes}</span>
          <p className="mt-2">{selected.body}</p>
          <div className="mt-3 flex flex-col gap-2 pt-3" style={{ borderTop: DIVIDER }}>
            <span className="text-sm opacity-60">댓글 {selected.comments.length}개</span>
            {selected.comments.length === 0 ? (
              <span className="text-sm opacity-50">아직 댓글이 없어요.</span>
            ) : (
              selected.comments.map((c, i) => (
                <div key={i} className="text-sm">
                  <span className="font-semibold">{c.author}</span> {c.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={top} className="flex flex-col gap-4">
      <Sheet id={COMPOSE_SHEET} label="새 글쓰기" ref={composeRef}>
        <h3 className="text-lg font-bold">새 글쓰기</h3>
        <div className="mt-3 flex flex-col gap-3">
          <div>
            <label className="d-label" htmlFor="d3m-title">제목</label>
            <input
              id="d3m-title"
              type="text"
              className="d-input w-full"
              placeholder="무엇이 궁금하거나 공유하고 싶으신가요?"
              value={draft.title}
              onChange={(e) => { const v = e.target.value; setDraft((d) => ({ ...d, title: v })); }}
            />
          </div>
          <div>
            <label className="d-label" htmlFor="d3m-body">내용</label>
            <textarea
              id="d3m-body"
              className="d-textarea w-full"
              rows={4}
              placeholder="자유롭게 적어 주세요."
              value={draft.body}
              onChange={(e) => { const v = e.target.value; setDraft((d) => ({ ...d, body: v })); }}
            />
          </div>
        </div>
        <div className="d-modal-action">
          <form method="dialog" className="flex w-full gap-2">
            <button type="button" className="d-btn flex-1" onClick={() => composeRef.current?.close()}>취소</button>
            <button type="button" className="d-btn d-btn-primary flex-1" disabled={!draft.title.trim() || !draft.body.trim()} onClick={submitDraft}>
              게시하기
            </button>
          </form>
        </div>
      </Sheet>

      <MobileHero image={HERO_IMAGE} title="오늘 커뮤니티가 활발해요" sub="활성 사용자 230명. 지금 올라온 이야기를 확인해요." />

      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="d-card bg-base-100 shadow">
              <div className="d-card-body gap-1 p-3">
                <div className="flex items-center gap-2">
                  <span className="d-badge d-badge-primary d-badge-outline" style={{ padding: "0.4rem" }}>
                    <Icon size={14} aria-hidden />
                  </span>
                  <span className="truncate text-sm opacity-60">{s.label}</span>
                </div>
                <span className="text-lg font-bold">{s.value}</span>
                <span className="d-badge d-badge-success d-badge-sm">{s.delta}</span>
              </div>
            </div>
          );
        })}
      </div>

      <label className="d-input w-full">
        <Search size={16} className="opacity-50" aria-hidden />
        <input type="search" className="grow" placeholder="게시글 제목 검색" aria-label="게시글 제목 검색" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <button type="button" className="d-btn d-btn-primary w-full" {...opensSheet(COMPOSE_SHEET)} onClick={openCompose}>
        <PenLine size={16} aria-hidden /> 새 글쓰기
      </button>

      <ul className="d-list rounded-box bg-base-100 shadow">
        {filtered.length === 0 ? (
          <li className="p-6 text-center text-sm opacity-60">&ldquo;{query}&rdquo; 에 해당하는 게시글이 없어요.</li>
        ) : (
          filtered.map((p) => (
            <li key={p.id}>
              <button type="button" className="d-list-row w-full items-center py-3 text-left" onClick={() => setSelectedId(p.id)}>
                <div className="d-list-col-grow min-w-0">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm opacity-60">{p.author} · {p.time} · 좋아요 {p.likes} · 댓글 {p.comments.length}</div>
                </div>
                <ChevronRight size={16} className="opacity-40" aria-hidden />
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">실시간 활동</span>
          <div className="mt-2 flex flex-col gap-2.5">
            {ACTIVITY_FEED.map((a, i) => (
              <div key={i} className="flex gap-2">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: "var(--color-primary)" }} />
                <div className="min-w-0 flex-1">
                  <div className="text-sm">{a.text}</div>
                  <div className="text-sm opacity-60">{a.detail}</div>
                </div>
                <span className="shrink-0 text-sm opacity-50">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
