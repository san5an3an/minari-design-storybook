import * as React from "react";
import { Avatar, CounterLabel, Label, ProgressBar, SegmentedControl, Timeline, Tooltip } from "@primer/react";
import { Blankslate, Card } from "@primer/react/experimental";
import { Activity as ActivityIcon, GitCommit, GitPullRequest, History, Tag, type LucideIcon } from "lucide-react";
import { ACTIVITY, type ActivityItem } from "../data";

type Category = "전체" | "커밋" | "PR" | "이슈" | "릴리스";

function categorize(item: ActivityItem): Category {
  if (item.action.includes("커밋")) return "커밋";
  if (item.action.includes("PR")) return "PR";
  if (item.action.includes("이슈")) return "이슈";
  if (item.action.includes("릴리스")) return "릴리스";
  return "전체";
}

const CATEGORIES: Category[] = ["전체", "커밋", "PR", "이슈", "릴리스"];

// 이 화면에서 통계 숫자마다 증감%, 진행바, 아이콘 동반한 스탯카드 4요소 독립 생성
const TONES = {
  success: { fg: "var(--fgColor-success)", bg: "var(--bgColor-success-muted)", path: "success.emphasis" },
  accent: { fg: "var(--fgColor-accent)", bg: "var(--bgColor-accent-muted)", path: "accent.emphasis" },
  neutral: { fg: "var(--fgColor-neutral)", bg: "var(--bgColor-neutral-muted)", path: "neutral.emphasis" },
  attention: { fg: "var(--fgColor-attention)", bg: "var(--bgColor-attention-muted)", path: "attention.emphasis" },
} as const;
type Tone = keyof typeof TONES;
type Meter = { kind: "progress"; percent: number } | { kind: "trend"; percent: number };

function StatCard({ icon: Icon, label, value, tone, meter }: { icon: LucideIcon; label: string; value: string; tone: Tone; meter: Meter }) {
  const t = TONES[tone];
  return (
    <Card padding="condensed">
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <span aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: "6px", background: t.bg, color: t.fg, flexShrink: 0 }}>
          <Icon size={14} />
        </span>
        <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{label}</span>
      </div>
      <div style={{ fontSize: "22px", fontWeight: 600, color: t.fg, marginBottom: meter.kind === "progress" ? "6px" : "2px" }}>{value}</div>
      {meter.kind === "progress" ? (
        <ProgressBar progress={meter.percent} bg={t.path} barSize="small" aria-label={`${label} 비율 ${meter.percent}%`} />
      ) : (
        <span style={{ fontSize: "12px", color: meter.percent >= 0 ? "var(--fgColor-success)" : "var(--fgColor-danger)" }}>
          {meter.percent >= 0 ? "▲" : "▼"} {Math.abs(meter.percent)}% 지난주 대비
        </span>
      )}
    </Card>
  );
}

function ActivityStats {
  const total = ACTIVITY.length;
  const activeContributors = new Set(ACTIVITY.map((a) => a.actor)).size;
  const commits = ACTIVITY.filter((a) => categorize(a) === "커밋").length;
  const releases = ACTIVITY.filter((a) => categorize(a) === "릴리스").length;
  return (
    <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginBottom: "16px" }}>
      <StatCard icon={ActivityIcon} label="총 활동" value={String(total)} tone="accent" meter={{ kind: "trend", percent: 18 }} />
      <StatCard icon={GitCommit} label="커밋" value={String(commits)} tone="success" meter={{ kind: "progress", percent: Math.round((commits / total) * 100) }} />
      <StatCard icon={GitPullRequest} label="활성 기여자" value={String(activeContributors)} tone="neutral" meter={{ kind: "trend", percent: 0 }} />
      <StatCard icon={Tag} label="이번 주 릴리스" value={String(releases)} tone="attention" meter={{ kind: "trend", percent: 100 }} />
    </div>
  );
}

// 우측 레일 카테고리 분포 태그 목록 표시
function CategoryBreakdownPanel {
  const counts = new Map<Category, number>;
  ACTIVITY.forEach((a) => {
    const c = categorize(a);
    counts.set(c, (counts.get(c) ?? 0) + 1);
  });
  return (
    <div
      style={{
        width: "220px", flexShrink: 0, border: "1px solid var(--borderColor-default)",
        borderRadius: "6px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px",
      }}
    >
      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--fgColor-default)" }}>카테고리 분포</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {CATEGORIES.filter((c) => c !== "전체").map((c) => (
          <Label key={c} variant={counts.get(c) ? "accent" : "secondary"}>
            {c} {counts.get(c) ?? 0}
          </Label>
        ))}
      </div>
    </div>
  );
}

function ContributorPanel {
  const counts = new Map<string, number>;
  ACTIVITY.forEach((a) => counts.set(a.actor, (counts.get(a.actor) ?? 0) + 1));
  const total = ACTIVITY.length;
  const contributors = Array.from(counts.entries).sort((a, b) => b[1] - a[1]);
  // bg는 CSS 변수가 아니라 Primer 테마 경로 톤.emphasis임
  const tones = ["accent.emphasis", "success.emphasis", "attention.emphasis", "neutral.emphasis"];

  return (
    <div
      style={{
        width: "220px",
        flexShrink: 0,
        border: "1px solid var(--borderColor-default)",
        borderRadius: "6px",
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--fgColor-default)" }}>기여자 요약</span>
        {/* Tooltip V2는 상호작용 가능한 자식만 허용. span 감싸면 런타임 오류 발생 문제임 */}
        <Tooltip text="최근 활동 기준 집계" direction="w">
          <button
            type="button"
            style={{ background: "none", border: "none", padding: 0, cursor: "default" }}
            aria-label={`최근 활동 ${total}건`}
          >
            <CounterLabel>{total}건</CounterLabel>
          </button>
        </Tooltip>
      </div>
      {contributors.map(([name, count], idx) => {
        const pct = Math.round((count / total) * 100);
        return (
          <div key={name} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Avatar src={`https://avatars.githubusercontent.com/u/${name.length}?s=32`} size={16} alt={name} />
              <span style={{ fontSize: "12px", color: "var(--fgColor-default)", flex: 1, minWidth: 0 }}>{name}</span>
              <span style={{ fontSize: "12px", color: "var(--fgColor-muted)" }}>{pct}%</span>
            </div>
            <ProgressBar progress={pct} bg={tones[idx % tones.length]} barSize="small" aria-label={`${name} 기여 비중`} />
          </div>
        );
      })}
    </div>
  );
}

export function ActivityScreen {
  const [category, setCategory] = React.useState<Category>("전체");
  const items = ACTIVITY.filter((a) => category === "전체" || categorize(a) === category);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ActivityStats />
      <SegmentedControl aria-label="활동 종류 거르기" onChange={(i) => setCategory(CATEGORIES[i])}>
        {CATEGORIES.map((c) => (
          <SegmentedControl.Button key={c} selected={category === c}>
            {c}
          </SegmentedControl.Button>
        ))}
      </SegmentedControl>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {items.length === 0 ? (
            <Blankslate>
              <Blankslate.Visual><History size={32} /></Blankslate.Visual>
              <Blankslate.Heading>이 종류의 활동이 없습니다</Blankslate.Heading>
              <Blankslate.Description>다른 필터를 골라 보세요.</Blankslate.Description>
            </Blankslate>
          ) : (
            <Timeline>
              {items.map((item) => (
                <Timeline.Item key={item.id}>
                  <Timeline.Badge>
                    <Avatar src={`https://avatars.githubusercontent.com/u/${item.id.length}?s=32`} alt={item.actor} size={20} />
                  </Timeline.Badge>
                  <Timeline.Body>
                    <span style={{ fontWeight: 600, color: "var(--fgColor-default)" }}>{item.actor}</span>
                    {" "}
                    <span style={{ color: "var(--fgColor-muted)" }}>{item.action}</span>
                    {", "}
                    <span style={{ color: "var(--fgColor-default)" }}>{item.target}</span>
                    <div style={{ fontSize: "12px", color: "var(--fgColor-muted)", marginTop: "2px" }}>{item.timeLabel}</div>
                  </Timeline.Body>
                </Timeline.Item>
              ))}
            </Timeline>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ContributorPanel />
          <CategoryBreakdownPanel />
        </div>
      </div>
    </div>
  );
}
