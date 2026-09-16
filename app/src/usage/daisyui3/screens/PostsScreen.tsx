import * as React from "react";

interface Post {
  id: string;
  title: string;
  author: string;
  time: string;
  likes: number;
  body: string;
  comments: { author: string; text: string }[];
}

const POSTS: Post[] = [
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
];

export function PostsScreen {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const selected = POSTS.find((p) => p.id === selectedId);

  if (selected) {
    return (
      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body">
          <button type="button" className="d-btn d-btn-ghost d-btn-sm" style={{ width: "fit-content", paddingInline: 0 }} onClick={ => setSelectedId(null)}>
            ← 목록으로
          </button>
          <h3 style={{ fontWeight: 700, fontSize: "1.1rem", margin: "0.5rem 0 0" }}>{selected.title}</h3>
          <span className="text-sm opacity-60">{selected.author} · {selected.time} · 좋아요 {selected.likes}</span>
          <p style={{ marginTop: "0.75rem" }}>{selected.body}</p>
          <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--color-base-300, #eee)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span className="text-sm opacity-60">댓글 {selected.comments.length}개</span>
            {selected.comments.map((c, i) => (
              <div key={i} className="text-sm">
                <span style={{ fontWeight: 600 }}>{c.author}</span> {c.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {POSTS.map((p) => (
        <div key={p.id} className="d-card bg-base-100 shadow cursor-pointer" onClick={ => setSelectedId(p.id)}>
          <div className="d-card-body" style={{ padding: "0.9rem 1.1rem" }}>
            <span style={{ fontWeight: 600 }}>{p.title}</span>
            <span className="text-sm opacity-60">{p.author} · {p.time} · 좋아요 {p.likes} · 댓글 {p.comments.length}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
