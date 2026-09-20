import * as React from "react";
import {
  ActionButton, Cell, ColorSwatch, Column, Flex, Row, TableBody, TableHeader, TableView, Text,
} from "@adobe/react-spectrum";
import {
  Area, AreaChart, CartesianGrid, Cell as RCell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Activity, ArrowRight, Contrast, Layers, Plus, ShieldCheck, Sparkles } from "lucide-react";
import {
  COLOR_TOKENS, CONTRIBUTORS, OPEN_ISSUES, OWNER_SEED, RECENT_ACTIVITY, STAT_SPARKS, USAGE_TREND, WCAG_AA_NORMAL,
  type ColorCategory,
} from "../data";
import type { ScreenProps } from "../screens";
import { BarMeter, Card, FilterChips, PageBand, Person, Pill, PromoCard, Rail, StatCard, StatGrid, TONE_FG, TwoColumn, type Tone } from "../ui";

const CATEGORIES: readonly ColorCategory[] = ["Primary", "Secondary", "Neutral", "Semantic"];

const CATEGORY_TONE: Record<ColorCategory, Tone> = {
  Primary: "brand",
  Secondary: "success",
  Neutral: "neutral",
  Semantic: "warning",
};

const SEVERITY_TONE = { critical: "danger", warning: "warning", info: "brand" } as const;

function UsageTrendCard {
  return (
    <Card
      title="토큰 사용량 추이"
      action={
        <Flex alignItems="center" gap="size-100">
          <Pill tone="brand">최근 8개월</Pill>
          <ActionButton isQuiet>
            <Text UNSAFE_style={{ fontSize: "0.72rem" }}>전체 보기</Text>
            <ArrowRight size={12} aria-hidden style={{ marginInlineStart: "0.2rem" }} />
          </ActionButton>
        </Flex>
      }
    >
      <Flex alignItems="baseline" gap="size-100">
        <Text UNSAFE_style={{ fontSize: "1.35rem", fontWeight: 700 }}>2,252건</Text>
        <Pill tone="success">↑ 7.5% vs 4월</Pill>
      </Flex>
      <div style={{ height: "10rem", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={[...USAGE_TREND]} margin={{ top: 6, right: 4, bottom: 0, left: -16 }}>
            <defs>
              <linearGradient id="usageFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--semantic-fg-brand-default)" stopOpacity={0.32} />
                <stop offset="100%" stopColor="var(--semantic-fg-brand-default)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--semantic-border-neutral-subtle)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: "var(--semantic-fg-neutral-subtlest)" }} axisLine={false} tickLine={false} />
            {/* domain, ticks 직접 지정. 자동이면 눈금 순서 뒤섞임 */}
            <YAxis
              domain={[1200, 2400]}
              ticks={[1200, 1600, 2000, 2400]}
              tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}k`}
              tick={{ fontSize: 10, fill: "var(--semantic-fg-neutral-subtlest)" }}
              axisLine={false}
              tickLine={false}
              width={34}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "var(--semantic-radius-control)",
                border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                fontSize: "0.72rem",
                background: "var(--semantic-bg-neutral-surface)",
              }}
              formatter={(v) => [`${Number(v).toLocaleString}건`, "사용처"] as [string, string]}
            />
            <Area
              type="monotone"
              dataKey="usage"
              stroke="var(--semantic-fg-brand-default)"
              strokeWidth={2}
              fill="url(#usageFill)"
              isAnimationActive={false}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function CategoryDonutCard {
  const slices = CATEGORIES.map((c) => ({
    name: c,
    value: COLOR_TOKENS.filter((t) => t.category === c).length,
    usage: COLOR_TOKENS.filter((t) => t.category === c).reduce((s, t) => s + t.usageCount, 0),
    tone: CATEGORY_TONE[c],
  }));
  const total = slices.reduce((s, d) => s + d.value, 0);

  return (
    <Card
      title="분류별 구성"
      action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>토큰 {total}개</Text>}
    >
      <Flex alignItems="center" gap="size-200" wrap>
        <div style={{ position: "relative", width: "7.5rem", height: "7.5rem", flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={slices}
                dataKey="value"
                innerRadius="62%"
                outerRadius="92%"
                paddingAngle={2}
                stroke="none"
                isAnimationActive={false}
              >
                {slices.map((s) => <RCell key={s.name} fill={TONE_FG[s.tone]} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div
            style={{
              position: "absolute", inset: 0, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", pointerEvents: "none",
            }}
          >
            <Text UNSAFE_style={{ fontSize: "1.2rem", fontWeight: 700, lineHeight: 1 }}>{total}</Text>
            <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtle)" }}>토큰</Text>
          </div>
        </div>
        <Flex direction="column" gap="size-100" UNSAFE_style={{ flex: "1 1 0", minWidth: 0 }}>
          {slices.map((s) => (
            <Flex key={s.name} alignItems="center" gap="size-100" justifyContent="space-between">
              <Flex alignItems="center" gap="size-75" UNSAFE_style={{ minWidth: 0 }}>
                <span aria-hidden style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", background: TONE_FG[s.tone], flexShrink: 0 }} />
                <Text UNSAFE_style={{ fontSize: "0.75rem" }}>{s.name}</Text>
              </Flex>
              <Text UNSAFE_style={{ fontSize: "0.72rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>
                {s.value}개 · {s.usage.toLocaleString}건
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}

// 최근 변경 내역, 본문 열 맨 아래에 고정
function RecentChangesCard {
  return (
    <Card
      title="최근 변경"
      action={
        <Flex alignItems="center" gap="size-100">
          <Pill tone="neutral">main 브랜치</Pill>
          <ActionButton isQuiet>
            <Text UNSAFE_style={{ fontSize: "0.72rem" }}>전체 보기</Text>
            <ArrowRight size={12} aria-hidden style={{ marginInlineStart: "0.2rem" }} />
          </ActionButton>
        </Flex>
      }
    >
      <Flex direction="column" gap="size-100">
        {RECENT_ACTIVITY.map((a) => (
          <Flex key={a.id} alignItems="center" gap="size-125">
            <img
              src={`https://i.pravatar.cc/64?u=${a.avatarSeed}`}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
            />
            <Flex direction="column" gap="size-10" UNSAFE_style={{ flex: 1, minWidth: 0 }}>
              <Flex alignItems="center" gap="size-75" wrap>
                <Text UNSAFE_style={{ fontSize: "0.76rem", fontWeight: 600 }}>{a.token}</Text>
                <Pill tone={a.tone}>{a.pr}</Pill>
              </Flex>
              <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>{a.action}</Text>
            </Flex>
            <Flex direction="column" alignItems="end" gap="size-10" UNSAFE_style={{ flexShrink: 0 }}>
              <Text UNSAFE_style={{ fontSize: "0.66rem", color: "var(--semantic-fg-neutral-subtlest)", whiteSpace: "nowrap" }}>{a.when}</Text>
              <Text UNSAFE_style={{ fontSize: "0.64rem", color: "var(--semantic-fg-neutral-subtlest)", whiteSpace: "nowrap" }}>{a.who}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}

function IssueFeedCard({ onNavigate }: { onNavigate?: (key: string) => void }) {
  return (
    <Card
      title="열린 이슈"
      action={
        <ActionButton isQuiet onPress={ => onNavigate?.("accessibility")}>
          <Text UNSAFE_style={{ fontSize: "0.72rem" }}>감사 열기</Text>
          <ArrowRight size={12} aria-hidden style={{ marginInlineStart: "0.2rem" }} />
        </ActionButton>
      }
    >
      <Flex direction="column" gap="size-100">
        {OPEN_ISSUES.map((i) => (
          <Flex key={i.id} gap="size-100" alignItems="start">
            <span
              aria-hidden
              style={{
                width: "0.45rem", height: "0.45rem", borderRadius: "50%", marginTop: "0.35rem", flexShrink: 0,
                background: TONE_FG[SEVERITY_TONE[i.severity]],
              }}
            />
            <Flex direction="column" gap="size-10" UNSAFE_style={{ minWidth: 0, flex: 1 }}>
              <Flex justifyContent="space-between" gap="size-75" alignItems="baseline">
                <Text UNSAFE_style={{ fontSize: "0.75rem", fontWeight: 600 }}>{i.token}</Text>
                <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtlest)", whiteSpace: "nowrap" }}>{i.when}</Text>
              </Flex>
              <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)", lineHeight: 1.35 }}>{i.detail}</Text>
              <Text UNSAFE_style={{ fontSize: "0.62rem", color: "var(--semantic-fg-neutral-subtlest)" }}>{i.id}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}

function ContributorCard {
  const max = Math.max(...CONTRIBUTORS.map((c) => c.changes30d));
  return (
    <Card
      title="담당자 활동"
      action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>최근 30일</Text>}
    >
      <Flex direction="column" gap="size-125">
        {CONTRIBUTORS.map((c) => (
          <Flex key={c.name} alignItems="center" gap="size-100">
            <span style={{ position: "relative", flexShrink: 0, display: "inline-flex" }}>
              <img src={`https://i.pravatar.cc/64?u=${c.avatarSeed}`} alt="" style={{ width: "1.6rem", height: "1.6rem", borderRadius: "50%", objectFit: "cover" }} />
              <span
                aria-hidden
                style={{
                  position: "absolute", insetInlineEnd: "-0.1rem", bottom: "-0.1rem",
                  width: "0.5rem", height: "0.5rem", borderRadius: "50%",
                  border: "2px solid var(--semantic-bg-neutral-surface)",
                  background: c.status === "active" ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-neutral-subtlest)",
                }}
              />
            </span>
            <Flex direction="column" UNSAFE_style={{ flex: 1, minWidth: 0 }} gap="size-10">
              <Text UNSAFE_style={{ fontSize: "0.75rem", fontWeight: 600 }}>{c.name}</Text>
              <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtle)" }}>토큰 {c.ownedTokens}개 담당</Text>
            </Flex>
            <Flex direction="column" alignItems="end" UNSAFE_style={{ width: "3.4rem", flexShrink: 0 }} gap="size-25">
              <Text UNSAFE_style={{ fontSize: "0.72rem", fontWeight: 700 }}>{c.changes30d}</Text>
              <BarMeter pct={(c.changes30d / max) * 100} tone={c.status === "active" ? "brand" : "neutral"} />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}

export function PaletteScreen({ onSelect, onNavigate, query = "" }: ScreenProps) {
  const [activeCategories, setActiveCategories] = React.useState<ReadonlySet<ColorCategory>>( => new Set(CATEGORIES));

  const q = query.trim.toLowerCase;
  const filtered = COLOR_TOKENS
    .filter((t) => activeCategories.has(t.category))
    .filter((t) => !q || t.name.toLowerCase.includes(q) || t.hex.toLowerCase.includes(q) || t.owner.includes(q));

  const totalUsage = COLOR_TOKENS.reduce((s, t) => s + t.usageCount, 0);
  const avgContrast = (COLOR_TOKENS.reduce((s, t) => s + t.contrastOnWhite, 0) / COLOR_TOKENS.length).toFixed(1);
  const passCount = COLOR_TOKENS.filter((t) => t.contrastOnWhite >= WCAG_AA_NORMAL).length;
  const compliance = Math.round((passCount / COLOR_TOKENS.length) * 100);
  const maxUsage = Math.max(...COLOR_TOKENS.map((t) => t.usageCount));

  return (
    <Flex direction="column" gap="size-175">
      <PageBand
        eyebrow="컬러 라이브러리"
        title={`토큰 ${COLOR_TOKENS.length}개 · 사용처 ${totalUsage.toLocaleString}건`}
        description={`AA 통과 ${passCount}/${COLOR_TOKENS.length} · 마지막 감사 오늘 08:41 · 담당 4명`}
        actions={
          <>
            <Pill tone="neutral">main@a7f31c9</Pill>
            <ActionButton>
              <Plus size={14} aria-hidden style={{ marginInlineEnd: "0.3rem" }} />
              <Text>토큰 추가</Text>
            </ActionButton>
          </>
        }
      />

      <StatGrid>
        <StatCard icon={<Layers size={15} />} tone="brand" label="전체 토큰" value={`${COLOR_TOKENS.length}개`} delta="↑ 2개" deltaTone="success" spark={STAT_SPARKS.tokens} />
        <StatCard icon={<Activity size={15} />} tone="success" label="총 사용처" value={totalUsage.toLocaleString} delta="↑ 7.5%" deltaTone="success" spark={STAT_SPARKS.usage} />
        <StatCard icon={<Contrast size={15} />} tone="warning" label="평균 명도 대비" value={`${avgContrast}:1`} delta="↑ 0.1" deltaTone="success" spark={STAT_SPARKS.contrast} />
        <StatCard icon={<ShieldCheck size={15} />} tone="danger" label="AA 통과율" value={`${compliance}%`} delta={`미달 ${COLOR_TOKENS.length - passCount}개`} deltaTone="danger" spark={STAT_SPARKS.compliance} />
      </StatGrid>

      <TwoColumn
        main={
          <>
            <UsageTrendCard />
            <CategoryDonutCard />
            <RecentChangesCard />
          </>
        }
        rail={
          <Rail>
            <IssueFeedCard onNavigate={onNavigate} />
            <ContributorCard />
            <PromoCard
              icon={<Sparkles size={18} />}
              title="대비 자동 검사"
              body="PR 마다 AA 대비를 검사해 드려요."
              cta="워크플로 켜기"
            />
          </Rail>
        }
      />

      <Card
        title="컬러 토큰"
        action={
          <Flex alignItems="center" gap="size-100" wrap>
            <FilterChips
              options={CATEGORIES}
              selected={activeCategories}
              onToggle={(c) => setActiveCategories((prev) => {
                const next = new Set(prev);
                if (next.has(c)) next.delete(c); else next.add(c);
                return next.size === 0 ? new Set(CATEGORIES) : next;
              })}
            />
            <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>
              {filtered.length}/{COLOR_TOKENS.length}개
            </Text>
          </Flex>
        }
      >
        {/* density는 compact 대신 regular 사용. 두 줄이면 경계 넘음 */}
        <TableView
          aria-label="컬러 토큰 목록"
          density="regular"
          overflowMode="wrap"
          height="size-3600"
          selectionMode="none"
          onAction={(key) => { onSelect?.(String(key)); onNavigate?.("detail"); }}
        >
          <TableHeader>
            <Column width={40}>색</Column>
            <Column minWidth={120}>토큰</Column>
            <Column width={116}>분류</Column>
            <Column minWidth={104}>사용처</Column>
            <Column width={116}>AA 대비</Column>
            <Column width={104}>담당</Column>
          </TableHeader>
          <TableBody items={filtered}>
            {(t) => {
              const pass = t.contrastOnWhite >= WCAG_AA_NORMAL;
              const seed = OWNER_SEED[t.owner] ?? t.owner;
              return (
                <Row>
                  <Cell><ColorSwatch color={t.hex} size="S" aria-label={t.name} /></Cell>
                  <Cell>
                    <Flex direction="column" gap="size-10">
                      <Text UNSAFE_style={{ fontSize: "0.78rem", fontWeight: 600 }}>{t.name}</Text>
                      <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtlest)", fontVariantNumeric: "tabular-nums" }}>{t.hex.toUpperCase}</Text>
                    </Flex>
                  </Cell>
                  <Cell><Pill tone={CATEGORY_TONE[t.category]}>{t.category}</Pill></Cell>
                  <Cell>
                    <Flex alignItems="center" gap="size-100" UNSAFE_style={{ minWidth: 0 }}>
                      <BarMeter pct={(t.usageCount / maxUsage) * 100} tone={CATEGORY_TONE[t.category]} />
                      <Text UNSAFE_style={{ fontSize: "0.7rem", width: "2.6rem", textAlign: "end", flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{t.usageCount}건</Text>
                    </Flex>
                  </Cell>
                  <Cell><Pill tone={pass ? "success" : "danger"}>{pass ? "통과" : "미달"} {t.contrastOnWhite.toFixed(1)}</Pill></Cell>
                  <Cell><Person name={t.owner} seed={seed} /></Cell>
                </Row>
              );
            }}
          </TableBody>
        </TableView>
      </Card>
    </Flex>
  );
}
