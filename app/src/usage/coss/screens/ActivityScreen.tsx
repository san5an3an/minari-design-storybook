import * as React from "react";
import { Activity, FilePlus, MessageSquare, Pencil, RefreshCw, Share2, Star, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Card, CardTitle } from "../../../bases/coss-ui/card";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../../bases/coss-ui/empty";
import { Meter } from "../../../bases/coss-ui/meter";
import { Separator } from "../../../bases/coss-ui/separator";
import { Skeleton } from "../../../bases/coss-ui/skeleton";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../../../bases/coss-ui/tooltip";
import type { ActivityBucket, ActivityItem, ActivityType } from "../data";
import { ACTIVITY_BY_DAY } from "../data";
import type { ScreenProps } from "../screens";

type Tone = "brand" | "success" | "warning" | "danger";

const TYPE_META: Record<ActivityType, { label: string; icon: React.ComponentType<{ size?: number }>; tone: Tone; verb: string }> = {
  edit: { label: "편집", icon: Pencil, tone: "brand", verb: "편집했어요" },
  comment: { label: "댓글", icon: MessageSquare, tone: "brand", verb: "댓글을 남겼어요" },
  share: { label: "공유", icon: Share2, tone: "success", verb: "공유했어요" },
  create: { label: "생성", icon: FilePlus, tone: "success", verb: "만들었어요" },
  delete: { label: "삭제", icon: Trash2, tone: "danger", verb: "삭제했어요" },
  favorite: { label: "즐겨찾기", icon: Star, tone: "warning", verb: "즐겨찾기에 추가했어요" },
};

const BUCKETS: ActivityBucket[] = ["오늘", "어제", "이번 주"];

function MiniBarChart({ data }: { data: readonly { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value)) || 1;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: "5rem" }}>
      {data.map((d) => (
        <div key={d.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", flex: 1 }}>
          <div aria-hidden style={{ width: "100%", maxWidth: "1.25rem", height: `${Math.max(6, (d.value / max) * 64)}px`, borderRadius: "0.2rem 0.2rem 0 0", background: "var(--semantic-bg-brand-default)" }} />
          <span style={{ fontSize: "0.625rem", color: "var(--semantic-fg-neutral-subtle)" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function RankRow({ name, initial, count, max }: { name: string; initial: string; count: number; max: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Avatar style={{ width: "1.5rem", height: "1.5rem", flexShrink: 0 }}><AvatarFallback style={{ fontSize: "0.625rem" }}>{initial}</AvatarFallback></Avatar>
      <span style={{ fontSize: "var(--semantic-text-body-sm)", width: "3rem", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
      <Meter value={count} max={max} style={{ flex: 1 }} />
      <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)", width: "1.25rem", textAlign: "right", flexShrink: 0 }}>{count}</span>
    </div>
  );
}

function ActivityRow({ item, onOpen }: { item: ActivityItem; onOpen:  => void }) {
  const meta = TYPE_META[item.type];
  const Icon = meta.icon;
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", width: "100%", textAlign: "left", background: "none", border: "none", padding: "0.625rem 0", cursor: "pointer" }}
    >
      <span
        aria-hidden
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "50%",
          background: `var(--semantic-bg-${meta.tone}-subtle)`, color: `var(--semantic-fg-${meta.tone}-default)`, flexShrink: 0,
        }}
      >
        <Icon size={13} />
      </span>
      <span style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
        <span style={{ fontSize: "var(--semantic-text-body-sm)" }}><b>{item.actorName}</b>님이 「{item.targetTitle}」을 {meta.verb}</span>
        <span style={{ fontSize: "var(--semantic-text-caption)", color: "var(--semantic-fg-neutral-subtle)" }}>{item.timeLabel}</span>
      </span>
    </button>
  );
}

export function ActivityScreen({ activity, onNavigate, onSelect }: ScreenProps) {
  const [typeFilter, setTypeFilter] = React.useState<ActivityType | "전체">("전체");
  const [refreshing, setRefreshing] = React.useState(false);
  const mountedRef = React.useRef(true);
  React.useEffect( =>  => { mountedRef.current = false; }, []);

  function refresh {
    setRefreshing(true);
    window.setTimeout( => { if (mountedRef.current) setRefreshing(false); }, 650);
  }

  const filtered = activity.filter((a) => typeFilter === "전체" || a.type === typeFilter);

  const actorCounts = new Map<string, { name: string; initial: string; count: number }>;
  for (const a of activity) {
    const cur = actorCounts.get(a.actorName) ?? { name: a.actorName, initial: a.actorInitial, count: 0 };
    cur.count += 1;
    actorCounts.set(a.actorName, cur);
  }
  const ranking = Array.from(actorCounts.values).sort((a, b) => b.count - a.count).slice(0, 4);
  const maxCount = Math.max(...ranking.map((r) => r.count), 1);

  function openTarget(targetId: string) {
    onSelect?.(targetId);
    onNavigate?.("detail");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: "1.125rem", fontWeight: 700 }}>활동</div>
          <div style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}>누가 무엇을 언제 바꿨는지 한눈에 확인해요.</div>
        </div>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="icon-sm" aria-label="새로고침" onClick={refresh}><RefreshCw size={14} /></Button>} />
          <TooltipPopup>새로고침</TooltipPopup>
        </Tooltip>
      </div>

      <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
        <Button size="sm" variant={typeFilter === "전체" ? "secondary" : "ghost"} onClick={ => setTypeFilter("전체")}>
          전체<Badge size="sm" variant="outline">{activity.length}</Badge>
        </Button>
        {(Object.keys(TYPE_META) as ActivityType[]).map((t) => (
          <Button key={t} size="sm" variant={typeFilter === t ? "secondary" : "ghost"} onClick={ => setTypeFilter(t)}>
            {TYPE_META[t].label}<Badge size="sm" variant="outline">{activity.filter((a) => a.type === t).length}</Badge>
          </Button>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
        <Card style={{ padding: "0.875rem", flex: "1 1 14rem", minWidth: 0 }}>
          <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.625rem" }}>요일별 활동</CardTitle>
          <MiniBarChart data={ACTIVITY_BY_DAY} />
        </Card>
        <Card style={{ padding: "0.875rem", flex: "1 1 14rem", minWidth: 0 }}>
          <CardTitle style={{ fontSize: "var(--semantic-text-body-sm)", marginBottom: "0.625rem" }}>가장 활동적인 멤버</CardTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {ranking.map((r) => <RankRow key={r.name} name={r.name} initial={r.initial} count={r.count} max={maxCount} />)}
          </div>
        </Card>
      </div>

      {refreshing ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Skeleton style={{ height: "3rem" }} />
          <Skeleton style={{ height: "3rem" }} />
          <Skeleton style={{ height: "3rem" }} />
        </div>
      ) : filtered.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon"><Activity /></EmptyMedia>
            <EmptyTitle>해당 활동이 없어요</EmptyTitle>
            <EmptyDescription>다른 필터를 선택해 보세요.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {BUCKETS.map((bucket) => {
            const items = filtered.filter((a) => a.dateBucket === bucket);
            if (items.length === 0) return null;
            return (
              <div key={bucket}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
                  <span style={{ fontSize: "var(--semantic-text-caption)", fontWeight: 700, color: "var(--semantic-fg-neutral-subtlest)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{bucket}</span>
                  <Badge variant="outline" size="sm">{items.length}</Badge>
                </div>
                <Card style={{ padding: "0 0.875rem" }}>
                  {items.map((item, i) => (
                    <React.Fragment key={item.id}>
                      <ActivityRow item={item} onOpen={ => openTarget(item.targetId)} />
                      {i < items.length - 1 && <Separator />}
                    </React.Fragment>
                  ))}
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
