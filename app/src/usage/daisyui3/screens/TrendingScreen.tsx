import * as React from "react";
import { ArrowDown, ArrowUp, Flame, Minus, Sparkles } from "lucide-react";

interface Trend {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  likesWeek: number;
  likesTotal: number;
}

const TRENDING: Trend[] = [
  { id: "t1", title: "다음 릴리즈에 다크모드 넣어주세요", category: "기능 제안", excerpt: "밤에 작업할 때 눈이 덜 피로할 것 같아요.", likesWeek: 24, likesTotal: 61 },
  { id: "t2", title: "커스텀 테마 만드는 법 공유합니다", category: "팁 공유", excerpt: "색상 토큰 세 개만 바꿔도 완전히 다른 느낌이 나요.", likesWeek: 18, likesTotal: 55 },
  { id: "t3", title: "모바일 앱 알림이 너무 늦게 와요", category: "버그 신고", excerpt: "iOS 에서 새 댓글 알림이 10분 넘게 지연돼요.", likesWeek: 9, likesTotal: 12 },
  { id: "t4", title: "검색 결과 정렬 기준이 궁금해요", category: "질문", excerpt: "최신순인 줄 알았는데 아닌 것 같아서요.", likesWeek: 5, likesTotal: 8 },
  { id: "t5", title: "API 요청 제한이 너무 낮아요", category: "기능 제안", excerpt: "분당 호출 한도를 올려줬으면 좋겠어요.", likesWeek: 14, likesTotal: 47 },
  { id: "t6", title: "다국어 지원 로드맵이 있나요", category: "질문", excerpt: "일본어·영어 지원 계획이 궁금합니다.", likesWeek: 7, likesTotal: 9 },
  { id: "t7", title: "단축키 정리해봤어요", category: "팁 공유", excerpt: "자주 쓰는 단축키 12개를 표로 정리했어요.", likesWeek: 21, likesTotal: 21 },
  { id: "t8", title: "첨부파일 업로드가 자꾸 실패해요", category: "버그 신고", excerpt: "10MB 넘는 파일에서 자주 재현돼요.", likesWeek: 4, likesTotal: 30 },
];

const CATEGORIES = ["기능 제안", "팁 공유", "버그 신고", "질문"] as const;
const ACTIVE_USERS = 230;

// likesWeek/likesTotal 내림차순 순위. 등수는 정렬로만 계산
function rankBy(items: readonly Trend[], key: "likesWeek" | "likesTotal"): Map<string, number> {
  const sorted = [...items].sort((a, b) => b[key] - a[key]);
  return new Map(sorted.map((t, i) => [t.id, i + 1]));
}

export function TrendingScreen {
  const [period, setPeriod] = React.useState<"week" | "all">("week");
  const [previewId, setPreviewId] = React.useState<string | null>(null);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const weekRank = rankBy(TRENDING, "likesWeek");
  const totalRank = rankBy(TRENDING, "likesTotal");
  const activeRank = period === "week" ? weekRank : totalRank;

  const ordered = [...TRENDING].sort((a, b) => (activeRank.get(a.id)! - activeRank.get(b.id)!));
  const totalLikesWeek = TRENDING.reduce((s, t) => s + t.likesWeek, 0);
  const topLikes = Math.max(...TRENDING.map((t) => t.likesWeek));
  const engagementPct = Math.round((totalLikesWeek / ACTIVE_USERS) * 100);

  const preview = TRENDING.find((t) => t.id === previewId);

  const openPreview = (id: string) => {
    setPreviewId(id);
    dialogRef.current?.showModal;
  };

  return (
    <>
      <dialog ref={dialogRef} className="d-modal">
        <div className="d-modal-box">
          {preview ? (
            <>
              <span className="d-badge d-badge-outline d-badge-sm">{preview.category}</span>
              <h3 className="text-lg font-bold" style={{ marginTop: "0.5rem" }}>{preview.title}</h3>
              <p className="py-2 text-sm opacity-70">{preview.excerpt}</p>
              <span className="text-sm opacity-60">좋아요 {preview.likesWeek}건(이번 주) · 누적 {preview.likesTotal}건</span>
              <p className="text-sm opacity-50" style={{ marginTop: "0.5rem" }}>전체 본문과 댓글은 「게시글」 탭에서 볼 수 있어요.</p>
            </>
          ) : null}
          <div className="d-modal-action">
            <form method="dialog"><button className="d-btn d-btn-sm">닫기</button></form>
          </div>
        </div>
        <form method="dialog" className="d-modal-backdrop"><button>close</button></form>
      </dialog>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Flame size={18} className="text-primary" aria-hidden />
              <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>인기글</span>
            </div>
            <span className="text-sm opacity-60">커뮤니티에서 가장 많이 공감받은 글이에요.</span>
          </div>
          {/* tabs-boxed는 daisyUI v4 이름. v5.7.28은 tabs-box로 변경 */}
          <div role="tablist" className="d-tabs d-tabs-box d-tabs-sm">
            <a role="tab" className={`d-tab ${period === "week" ? "d-tab-active" : ""}`} onClick={ => setPeriod("week")}>이번 주</a>
            <a role="tab" className={`d-tab ${period === "all" ? "d-tab-active" : ""}`} onClick={ => setPeriod("all")}>전체 기간</a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 d3t-stats">
          <div className="d-stat bg-base-100 shadow" style={{ borderRadius: "var(--radius-box, 0.5rem)" }}>
            <div className="d-stat-title">이번 주 인기글</div>
            <div className="d-stat-value text-primary" style={{ fontSize: "1.25rem" }}>{TRENDING.length}개</div>
          </div>
          <div className="d-stat bg-base-100 shadow" style={{ borderRadius: "var(--radius-box, 0.5rem)" }}>
            <div className="d-stat-title">이번 주 좋아요 합계</div>
            <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{totalLikesWeek}</div>
          </div>
          <div className="d-stat bg-base-100 shadow" style={{ borderRadius: "var(--radius-box, 0.5rem)" }}>
            <div className="d-stat-title">1위 좋아요</div>
            <div className="d-stat-value text-success" style={{ fontSize: "1.25rem" }}>{topLikes}</div>
          </div>
        </div>
        <style>{"@container d3shell (min-width: 34rem) { .d3t-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); } }"}</style>

        <div className="grid grid-cols-1 gap-4 d3t-body">
          <div className="overflow-x-auto d-card bg-base-100 shadow" style={{ minWidth: 0 }}>
            <table className="d-table d-table-zebra">
              <thead>
                <tr>
                  <th>순위</th>
                  <th>제목</th>
                  <th>분류</th>
                  <th>좋아요</th>
                  <th>변동</th>
                </tr>
              </thead>
              <tbody>
                {ordered.map((t) => {
                  const delta = totalRank.get(t.id)! - weekRank.get(t.id)!;
                  return (
                    <tr key={t.id} className="cursor-pointer" onClick={ => openPreview(t.id)}>
                      <td><span className="d-badge d-badge-neutral d-badge-sm">{activeRank.get(t.id)}</span></td>
                      <td>{t.title}</td>
                      <td><span className="d-badge d-badge-outline d-badge-sm">{t.category}</span></td>
                      <td>{period === "week" ? t.likesWeek : t.likesTotal}</td>
                      <td>
                        {/* d-badge로 배경, 글자 짝을 묶어 대비 보장하기 */}
                        {delta > 0 ? (
                          <span className="d-badge d-badge-success d-badge-sm" style={{ gap: "0.15rem" }}>
                            <ArrowUp size={11} aria-hidden />{delta}
                          </span>
                        ) : delta < 0 ? (
                          <span className="d-badge d-badge-error d-badge-sm" style={{ gap: "0.15rem" }}>
                            <ArrowDown size={11} aria-hidden />{Math.abs(delta)}
                          </span>
                        ) : (
                          <span className="d-badge d-badge-ghost d-badge-sm">
                            <Minus size={11} aria-hidden />
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: 0 }}>
            <div className="d-card bg-base-100 shadow">
              <div className="d-card-body" style={{ alignItems: "center", padding: "1rem" }}>
                <span style={{ fontWeight: 600, alignSelf: "flex-start" }}>주간 참여율</span>
                <div
                  className="d-radial-progress text-primary"
                  style={{ "--d-value": engagementPct, "--d-size": "6rem", "--d-thickness": "0.5rem" } as React.CSSProperties}
                  aria-valuenow={engagementPct}
                  role="progressbar"
                >
                  {engagementPct}%
                </div>
                <span className="text-sm opacity-60" style={{ alignSelf: "flex-start" }}>활성 사용자 {ACTIVE_USERS}명 중 반응한 비율</span>
              </div>
            </div>

            <div className="d-card bg-base-100 shadow">
              <div className="d-card-body">
                <span style={{ fontWeight: 600 }}>분류별 분포</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {CATEGORIES.map((c) => {
                    const count = TRENDING.filter((t) => t.category === c).length;
                    return (
                      <div key={c} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ width: "4.5rem", fontSize: "0.75rem" }} className="opacity-60">{c}</span>
                        <progress className="d-progress d-progress-primary w-full" value={count} max={TRENDING.length} />
                        <span style={{ width: "1.25rem", textAlign: "right", fontSize: "0.75rem" }} className="opacity-60">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div tabIndex={0} className="d-collapse d-collapse-arrow bg-base-100 shadow">
              <div className="d-collapse-title" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Sparkles size={14} className="text-primary" aria-hidden /> 순위는 어떻게 계산되나요?
              </div>
              <div className="d-collapse-content text-sm opacity-70">
                최근 7일간 받은 좋아요 수를 기준으로 매겨요. 「전체 기간」 탭은 게시 이후 누적 좋아요로 다시 정렬하고,
                변동 배지는 두 순위 차이를 보여줘요.
              </div>
            </div>
          </div>
        </div>
        <style>{"@container d3shell (min-width: 42rem) { .d3t-body { grid-template-columns: 2fr 1fr; } }"}</style>
      </div>
    </>
  );
}
