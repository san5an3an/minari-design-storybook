"use client";

import * as React from "react";
import { ArrowDown, ArrowUp, Flame, Minus, Sparkles } from "lucide-react";
import { BRAND, Sheet, opensSheet } from "../../daisyui/mobile/DaisyuiMobileShell";
import { ACTIVE_USERS, CATEGORIES, TRENDING, rankBy } from "../screens/TrendingScreen";

const PREVIEW_SHEET = "d3-preview-sheet";
const PERIODS = [{ key: "week", label: "이번 주" }, { key: "all", label: "전체 기간" }] as const;

export function TrendingMobile() {
  const [period, setPeriod] = React.useState<"week" | "all">("week");
  const [previewId, setPreviewId] = React.useState<string | null>(null);
  const previewRef = React.useRef<HTMLDialogElement>(null);

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
    previewRef.current?.showModal();
  };

  return (
    <div className="flex flex-col gap-4">
      <Sheet id={PREVIEW_SHEET} label="게시글 미리보기" ref={previewRef}>
        {preview ? (
          <>
            <span className="d-badge d-badge-outline d-badge-sm">{preview.category}</span>
            <h3 className="mt-2 text-lg font-bold">{preview.title}</h3>
            <p className="py-2 text-sm opacity-70">{preview.excerpt}</p>
            <span className="text-sm opacity-60">좋아요 {preview.likesWeek}건(이번 주) · 누적 {preview.likesTotal}건</span>
            <p className="mt-2 text-sm opacity-50">전체 본문과 댓글은 「게시글」 탭에서 볼 수 있어요.</p>
          </>
        ) : null}
        <div className="d-modal-action">
          <form method="dialog" className="w-full"><button className="d-btn w-full">닫기</button></form>
        </div>
      </Sheet>

      <div>
        <div className="flex items-center gap-1.5">
          <Flame size={18} style={{ color: BRAND }} aria-hidden />
          <span className="font-bold">인기글</span>
        </div>
        <span className="text-sm opacity-60">커뮤니티에서 가장 많이 공감받은 글이에요.</span>
      </div>

      <div role="tablist" aria-label="기간" className="d-tabs d-tabs-box w-full">
        {PERIODS.map((p) => (
          <button
            key={p.key}
            type="button"
            role="tab"
            aria-selected={period === p.key}
            className={`d-tab flex-1 ${period === p.key ? "d-tab-active" : ""}`}
            onClick={() => setPeriod(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="d-stats d-stats-vertical w-full bg-base-100 shadow">
        <div className="d-stat py-3">
          <div className="d-stat-title">이번 주 인기글</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem", color: BRAND }}>{TRENDING.length}개</div>
        </div>
        <div className="d-stat py-3">
          <div className="d-stat-title">이번 주 좋아요 합계</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{totalLikesWeek}</div>
        </div>
        <div className="d-stat py-3">
          <div className="d-stat-title">1위 좋아요</div>
          <div className="d-stat-value" style={{ fontSize: "1.25rem" }}>{topLikes}</div>
        </div>
      </div>

      <ul className="d-list rounded-box bg-base-100 shadow">
        {ordered.map((t) => {
          const delta = totalRank.get(t.id)! - weekRank.get(t.id)!;
          return (
            <li key={t.id}>
              <button
                type="button"
                className="d-list-row w-full items-center py-3 text-left"
                {...opensSheet(PREVIEW_SHEET)}
                onClick={() => openPreview(t.id)}
              >
                <span className="d-badge d-badge-neutral d-badge-sm">{activeRank.get(t.id)}</span>
                <div className="d-list-col-grow min-w-0">
                  <div className="text-sm font-semibold">{t.title}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <span className="d-badge d-badge-outline d-badge-sm">{t.category}</span>
                    <span className="opacity-60">좋아요 {period === "week" ? t.likesWeek : t.likesTotal}</span>
                  </div>
                </div>
                {/* 변동은 꼬리표로 표시. 흰 카드 위 초록 글자는 대비가 부족함 */}
                {delta > 0 ? (
                  <span className="d-badge d-badge-success d-badge-sm gap-0.5" aria-label={`${delta}계단 오름`}><ArrowUp size={11} aria-hidden />{delta}</span>
                ) : delta < 0 ? (
                  <span className="d-badge d-badge-error d-badge-sm gap-0.5" aria-label={`${Math.abs(delta)}계단 내림`}><ArrowDown size={11} aria-hidden />{Math.abs(delta)}</span>
                ) : (
                  <span className="d-badge d-badge-ghost d-badge-sm" aria-label="변동 없음"><Minus size={11} aria-hidden /></span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body items-center p-4">
          <span className="self-start font-semibold">주간 참여율</span>
          <div
            className="d-radial-progress"
            /* daisyUI prefix d- 가 인라인 커스텀 프로퍼티 이름에도 붙어 --d-value 형태 사용 */
            style={{ "--d-value": engagementPct, "--d-size": "6rem", "--d-thickness": "0.5rem", color: BRAND } as React.CSSProperties}
            aria-valuenow={engagementPct}
            role="progressbar"
          >
            {engagementPct}%
          </div>
          <span className="self-start text-sm opacity-60">활성 사용자 {ACTIVE_USERS}명 중 반응한 비율</span>
        </div>
      </div>

      <div className="d-card bg-base-100 shadow">
        <div className="d-card-body p-4">
          <span className="font-semibold">분류별 분포</span>
          <div className="mt-2 flex flex-col gap-2">
            {CATEGORIES.map((c) => {
              const count = TRENDING.filter((t) => t.category === c).length;
              return (
                <div key={c} className="flex items-center gap-2">
                  <span className="w-18 shrink-0 text-xs opacity-60">{c}</span>
                  <progress className="d-progress d-progress-primary w-full" value={count} max={TRENDING.length} />
                  <span className="w-5 shrink-0 text-right text-xs opacity-60">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <details className="d-collapse d-collapse-arrow bg-base-100 shadow">
        <summary className="d-collapse-title flex items-center gap-1.5 font-semibold">
          <Sparkles size={14} style={{ color: BRAND }} aria-hidden /> 순위는 어떻게 계산되나요?
        </summary>
        <div className="d-collapse-content text-sm opacity-70">
          최근 7일간 받은 좋아요 수를 기준으로 매겨요. 「전체 기간」 탭은 게시 이후 누적 좋아요로 다시 정렬하고,
          변동 꼬리표는 두 순위 차이를 보여줘요.
        </div>
      </details>
    </div>
  );
}
