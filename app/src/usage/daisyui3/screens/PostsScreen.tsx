import * as React from "react";
import { MessageSquare, PenLine, Search, ThumbsUp, TrendingUp, Users } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60";

interface Post {
  id: string;
  title: string;
  author: string;
  time: string;
  likes: number;
  body: string;
  comments: { author: string; text: string }[];
}

const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    title: "다음 릴리즈에 다크모드 넣어주세요",
    author: "이하은",
    time: "2시간 전",
    likes: 24,
    body: "요즘 밤에 작업할 때가 많은데 다크모드가 있으면 눈이 덜 피로할 것 같아요. 로드맵에 있는지 궁금합니다!",
    comments: [
      { author: "정서준", text: "저도 원해요 +1" },
      { author: "운영자", text: "다음 분기 로드맵에 반영했습니다. 감사해요!" },
    ],
  },
  {
    id: "2",
    title: "모바일 앱 알림이 너무 늦게 와요",
    author: "김서연",
    time: "5시간 전",
    likes: 9,
    body: "iOS 에서 새 댓글 알림이 10분 넘게 지연되는 경우가 있어요. 다른 분들도 겪으시나요?",
    comments: [{ author: "박도윤", text: "저는 안드로이드인데 괜찮습니다." }],
  },
  {
    id: "3",
    title: "커스텀 테마 만드는 법 공유합니다",
    author: "최지후",
    time: "8시간 전",
    likes: 18,
    body: "색상 토큰 세 개만 바꿔도 완전히 다른 느낌이 나요. 스크린샷 첨부합니다.",
    comments: [{ author: "오세준", text: "오 저장했습니다 감사해요" }],
  },
  {
    id: "4",
    title: "검색 결과 정렬 기준이 궁금해요",
    author: "윤새별",
    time: "어제",
    likes: 5,
    body: "최신순인 줄 알았는데 아닌 것 같아서요. 정렬 기준 문서가 있을까요?",
    comments: [],
  },
];

const ACTIVITY_FEED = [
  { text: "이하은 님이 새 글을 올렸어요", detail: "다음 릴리즈에 다크모드 넣어주세요", time: "2시간 전" },
  { text: "정서준 님이 댓글을 남겼어요", detail: "저도 원해요 +1", time: "1시간 전" },
  { text: "운영자 님이 댓글을 남겼어요", detail: "다음 분기 로드맵에 반영했습니다", time: "40분 전" },
  { text: "박도윤 님이 댓글을 남겼어요", detail: "저는 안드로이드인데 괜찮습니다", time: "10분 전" },
];

interface Draft {
  title: string;
  body: string;
}
const EMPTY_DRAFT: Draft = { title: "", body: "" };

export function PostsScreen {
  const [posts, setPosts] = React.useState<Post[]>(INITIAL_POSTS);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [query, setQuery] = React.useState("");
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const selected = posts.find((p) => p.id === selectedId);

  const filtered = posts.filter((p) => p.title.toLowerCase.includes(query.trim.toLowerCase));

  const STATS = [
    { label: "오늘 게시글", value: String(posts.length), delta: "+3", icon: MessageSquare },
    { label: "오늘 댓글", value: "48", delta: "+15", icon: ThumbsUp },
    { label: "활성 사용자", value: "230", delta: "+9%", icon: Users },
    { label: "이번 주 인기글", value: "3", delta: "0", icon: TrendingUp },
  ] as const;

  const openCompose =  => {
    setDraft(EMPTY_DRAFT);
    dialogRef.current?.showModal;
  };

  const submitDraft =  => {
    const title = draft.title.trim;
    const body = draft.body.trim;
    if (!title || !body) return;
    const next: Post = {
      id: `local-${Date.now}`,
      title,
      body,
      author: "한지우",
      time: "방금 전",
      likes: 0,
      comments: [],
    };
    setPosts((prev) => [next, ...prev]);
    dialogRef.current?.close;
  };

  if (selected) {
    return (
      <div className="d-card bg-base-100 shadow" style={{ padding: "1.25rem" }}>
        <div className="d-card-body">
          <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)}>
            ← 목록으로
          </button>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>{selected.title}</h3>
          <span className="text-sm opacity-60">{selected.author} · {selected.time} · 좋아요 {selected.likes}</span>
          <p style={{ marginTop: "0.75rem" }}>{selected.body}</p>
          <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--color-base-300)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span className="text-sm opacity-60">댓글 {selected.comments.length}개</span>
            {selected.comments.length === 0 ? (
              <span className="text-sm opacity-50">아직 댓글이 없어요.</span>
            ) : (
              selected.comments.map((c, i) => (
                <div key={i} className="text-sm">
                  <span style={{ fontWeight: 600 }}>{c.author}</span> {c.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 공식 modal 데모 그대로, dialog+showModal 사용, JS 없이 닫기 처리 */}
      <dialog ref={dialogRef} className="d-modal">
        <div className="d-modal-box">
          <h3 className="text-lg font-bold">새 글쓰기</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
            <div>
              <label className="d-label">제목</label>
              <input
                type="text"
                className="d-input w-full"
                placeholder="무엇이 궁금하거나 공유하고 싶으신가요?"
                value={draft.title}
                onChange={(e) => {
                  const v = e.target.value;
                  setDraft((d) => ({ ...d, title: v }));
                }}
              />
            </div>
            <div>
              <label className="d-label">내용</label>
              <textarea
                className="d-textarea w-full"
                rows={4}
                placeholder="자유롭게 적어 주세요."
                value={draft.body}
                onChange={(e) => {
                  const v = e.target.value;
                  setDraft((d) => ({ ...d, body: v }));
                }}
              />
            </div>
          </div>
          <div className="d-modal-action">
            <form method="dialog" style={{ display: "flex", gap: "0.5rem" }}>
              <button type="button" className="d-btn" onClick={ => dialogRef.current?.close}>취소</button>
              <button
                type="button"
                className="d-btn d-btn-primary"
                disabled={!draft.title.trim || !draft.body.trim}
                onClick={submitDraft}
              >
                게시하기
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
      </dialog>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div
          className="flex flex-col justify-end gap-1 px-6 py-4"
          style={{
            minHeight: "8rem",
            borderRadius: "var(--radius-box, 0.5rem)",
            backgroundImage:
              `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
              `color-mix(in oklch, var(--color-primary) 25%, black) 100%), url("${HERO_IMAGE}")`,
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        >
          <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>오늘 커뮤니티가 활발해요</span>
          <span style={{ color: "white", opacity: 0.9 }}>활성 사용자 230명. 지금 올라온 이야기를 확인해요.</span>
        </div>

        <div className="grid grid-cols-2 gap-3 d3p-stats">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="d-card bg-base-100 shadow">
                <div className="d-card-body" style={{ padding: "0.9rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <span className="d-badge d-badge-primary d-badge-outline" style={{ padding: "0.4rem" }}>
                      <Icon size={14} aria-hidden />
                    </span>
                    <span className="text-sm opacity-60">{s.label}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>{s.value}</span>
                    <span className="text-sm text-success">{s.delta}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style>{"@container d3shell (min-width: 34rem) { .d3p-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }"}</style>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
          <label className="d-input" style={{ display: "flex", alignItems: "center", gap: "0.4rem", flex: 1, minWidth: "10rem", maxWidth: "20rem" }}>
            <Search size={14} className="opacity-50" aria-hidden />
            <input
              type="search"
              placeholder="게시글 제목 검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ border: "none", outline: "none", background: "transparent", width: "100%" }}
            />
          </label>
          <button type="button" className="d-btn d-btn-primary d-btn-sm" onClick={openCompose}>
            <PenLine size={14} aria-hidden /> 새 글쓰기
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 d3p-body">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 0 }}>
            {filtered.length === 0 ? (
              <div className="d-card bg-base-100 shadow">
                <div className="d-card-body" style={{ alignItems: "center", padding: "1.5rem" }}>
                  <span className="text-sm opacity-60">&ldquo;{query}&rdquo; 에 해당하는 게시글이 없어요.</span>
                </div>
              </div>
            ) : (
              filtered.map((p) => (
                <div key={p.id} className="d-card bg-base-100 shadow cursor-pointer" onClick={ => setSelectedId(p.id)}>
                  <div className="d-card-body" style={{ padding: "0.9rem 1.1rem" }}>
                    <span style={{ fontWeight: 600 }}>{p.title}</span>
                    <span className="text-sm opacity-60">{p.author} · {p.time} · 좋아요 {p.likes} · 댓글 {p.comments.length}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="d-card bg-base-100 shadow" style={{ minWidth: 0 }}>
            <div className="d-card-body">
              <span style={{ fontWeight: 600 }}>실시간 활동</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.5rem" }}>
                {ACTIVITY_FEED.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.5rem" }}>
                    <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-primary)", marginTop: "0.4rem", flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.8125rem" }}>{a.text}</div>
                      <div className="text-sm opacity-60">{a.detail}</div>
                    </div>
                    <span className="text-sm opacity-50" style={{ flexShrink: 0 }}>{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{"@container d3shell (min-width: 42rem) { .d3p-body { grid-template-columns: 3fr 2fr; } }"}</style>
      </div>
    </>
  );
}
