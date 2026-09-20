import * as React from "react";
import {
  ActionButton, ColorArea, ColorSlider, ColorSwatch, ColorWheel, Flex, Meter, StatusLight, Text, parseColor,
} from "@adobe/react-spectrum";
import { Bar, BarChart, Cell as RCell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowLeft, Check, Copy, GitPullRequest, Hash, Layers, Palette, X } from "lucide-react";
import { COLOR_TOKENS, TOKEN_HISTORY, TOKEN_USAGE, WCAG_AA_NORMAL } from "../data";
import type { ScreenProps } from "../screens";
import { BarMeter, Card, Pill, Rail, StatCard, StatGrid, TONE_FG, TwoColumn } from "../ui";

// 대비 판별 기준. 실제 WCAG 임계값 사용
const CRITERIA: readonly { label: string; threshold: number; note: string }[] = [
  { label: "본문 텍스트", threshold: 4.5, note: "AA · 16px 이하" },
  { label: "큰 글자", threshold: 3.0, note: "AA · 24px 이상" },
  { label: "UI 요소·아이콘", threshold: 3.0, note: "AA · 비텍스트" },
];

function Verdict({ ok }: { ok: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.2rem",
        color: ok ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)",
        fontSize: "0.7rem", fontWeight: 700,
      }}
    >
      {ok ? <Check size={12} aria-hidden /> : <X size={12} aria-hidden />}
      {ok ? "통과" : "미달"}
    </span>
  );
}

export function TokenDetailScreen({ selectedId, onSelect, onNavigate }: ScreenProps) {
  const token = COLOR_TOKENS.find((t) => t.id === selectedId) ?? COLOR_TOKENS[0];
  const [color, setColor] = React.useState( => parseColor(token.hex));

  React.useEffect( => { setColor(parseColor(token.hex)); }, [token.hex]);

  const usage = TOKEN_USAGE[token.id] ?? [];
  const pass = token.contrastOnWhite >= WCAG_AA_NORMAL;
  const products = new Set(usage.map((u) => u.base)).size;
  const usageMax = Math.max(1, ...usage.map((u) => u.count));
  const siblings = COLOR_TOKENS.filter((t) => t.category === token.category && t.id !== token.id).slice(0, 4);

  // 스파크라인을 토큰 값에서 결정적으로 생성
  const usageSpark = [0.62, 0.7, 0.78, 0.85, 0.93, 1].map((f) => Math.round(token.usageCount * f));
  const contrastSpark = [0.9, 0.93, 0.95, 0.97, 0.99, 1].map((f) => Number((token.contrastOnWhite * f).toFixed(2)));

  return (
    <Flex direction="column" gap="size-175">
      {/* 헤더 바. 토큰 정보와 액션 표시 */}
      <div
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap",
          padding: "0.875rem 1.125rem",
          borderRadius: "var(--semantic-radius-container)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          background: "linear-gradient(120deg, var(--semantic-bg-brand-subtle), var(--semantic-bg-neutral-subtlest) 70%)",
        }}
      >
        <Flex alignItems="center" gap="size-200" UNSAFE_style={{ minWidth: 0 }}>
          <ColorSwatch color={token.hex} size="L" aria-label={token.name} />
          <Flex direction="column" gap="size-25" UNSAFE_style={{ minWidth: 0 }}>
            <Flex alignItems="center" gap="size-100" wrap>
              <Text UNSAFE_style={{ fontSize: "1.2rem", fontWeight: 700 }}>{token.name}</Text>
              <Pill tone={pass ? "success" : "danger"}>{pass ? "AA 통과" : "AA 미달"}</Pill>
              <Pill tone="neutral">{token.category}</Pill>
            </Flex>
            <Text UNSAFE_style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>
              {token.hex.toUpperCase} · 등록 {token.addedDate} · 담당 {token.owner} · 최근 변경 {TOKEN_HISTORY[0].commit}
            </Text>
          </Flex>
        </Flex>
        <Flex gap="size-100" wrap>
          <ActionButton isQuiet onPress={ => { onSelect?.(""); onNavigate?.("palette"); }}>
            <ArrowLeft size={14} aria-hidden style={{ marginInlineEnd: "0.3rem" }} />
            <Text>팔레트</Text>
          </ActionButton>
          <ActionButton isQuiet>
            <Copy size={14} aria-hidden style={{ marginInlineEnd: "0.3rem" }} />
            <Text>복제</Text>
          </ActionButton>
          <ActionButton>
            <GitPullRequest size={14} aria-hidden style={{ marginInlineEnd: "0.3rem" }} />
            <Text>변경 PR 열기</Text>
          </ActionButton>
        </Flex>
      </div>

      <StatGrid>
        <StatCard icon={<Layers size={15} />} tone="brand" label="총 사용처" value={`${token.usageCount}건`} delta={`제품 ${products}곳`} deltaTone="brand" spark={usageSpark} />
        <StatCard icon={<Palette size={15} />} tone="success" label="흰 배경 대비" value={`${token.contrastOnWhite.toFixed(1)}:1`} delta={pass ? "AA 통과" : "AA 미달"} deltaTone={pass ? "success" : "danger"} spark={contrastSpark} />
        <StatCard icon={<Palette size={15} />} tone="warning" label="검정 배경 대비" value={`${token.contrastOnBlack.toFixed(1)}:1`} delta={token.contrastOnBlack >= WCAG_AA_NORMAL ? "AA 통과" : "AA 미달"} deltaTone={token.contrastOnBlack >= WCAG_AA_NORMAL ? "success" : "danger"} spark={[...contrastSpark].reverse} />
        <StatCard icon={<Hash size={15} />} tone="danger" label="변경 이력" value={`${TOKEN_HISTORY.length}건`} delta={TOKEN_HISTORY[0].date} deltaTone="neutral" spark={[1, 1, 2, 2, 3, 4]} />
      </StatGrid>

      <TwoColumn
        main={
          <>
            <Card
              title="색 조정"
              action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>측정용. 원본 토큰은 안 바뀝니다</Text>}
            >
              <Flex gap="size-250" wrap alignItems="center">
                <ColorArea value={color} onChange={setColor} xChannel="saturation" yChannel="lightness" size="size-1700" />
                <Flex direction="column" gap="size-150" alignItems="center">
                  <ColorWheel value={color} onChange={setColor} size="size-1600" />
                  <ColorSlider value={color} onChange={setColor} channel="lightness" width="size-1600" />
                </Flex>
                <Flex direction="column" gap="size-100" UNSAFE_style={{ flex: "1 1 8rem", minWidth: 0 }}>
                  <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>미리보기</Text>
                  <div
                    style={{
                      height: "3.25rem", borderRadius: "var(--semantic-radius-control)",
                      background: color.toString("css"),
                      border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                    }}
                  />
                  <Text UNSAFE_style={{ fontSize: "0.78rem", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{color.toString("hex").toUpperCase}</Text>
                  <Text UNSAFE_style={{ fontSize: "0.68rem", color: "var(--semantic-fg-neutral-subtle)" }}>원본 {token.hex.toUpperCase}</Text>
                </Flex>
              </Flex>
            </Card>

            <Card
              title="사용처 분포"
              action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{usage.length}개 위치 · {token.usageCount}건</Text>}
            >
              {usage.length === 0 ? (
                <Text UNSAFE_style={{ fontSize: "0.78rem", color: "var(--semantic-fg-neutral-subtle)" }}>추적된 사용처가 아직 없어요.</Text>
              ) : (
                <div style={{ height: `${Math.max(6, usage.length * 2.1)}rem`, width: "100%" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[...usage]} layout="vertical" margin={{ top: 0, right: 12, bottom: 0, left: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis
                        type="category"
                        dataKey="screen"
                        width={112}
                        tick={{ fontSize: 10, fill: "var(--semantic-fg-neutral-subtle)" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                        contentStyle={{
                          borderRadius: "var(--semantic-radius-control)",
                          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                          fontSize: "0.72rem",
                          background: "var(--semantic-bg-neutral-surface)",
                        }}
                        formatter={(v) => [`${Number(v)}건`, "사용"] as [string, string]}
                      />
                      <Bar dataKey="count" radius={[0, 4, 4, 0]} isAnimationActive={false} barSize={14}>
                        {usage.map((u) => <RCell key={u.screen} fill={TONE_FG.brand} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </Card>
          </>
        }
        rail={
          <Rail>
            <Card title="대비 판별" action={<Pill tone={pass ? "success" : "danger"}>{token.contrastOnWhite.toFixed(1)}:1</Pill>}>
              <Flex direction="column" gap="size-125">
                <Meter label="흰 배경" value={Math.min(100, (token.contrastOnWhite / 21) * 100)} variant={pass ? "positive" : "critical"} width="100%" />
                <Meter label="검정 배경" value={Math.min(100, (token.contrastOnBlack / 21) * 100)} variant={token.contrastOnBlack >= WCAG_AA_NORMAL ? "positive" : "critical"} width="100%" />
              </Flex>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "0.4rem 0.5rem", alignItems: "center", marginTop: "0.2rem" }}>
                <span />
                <Text UNSAFE_style={{ fontSize: "0.62rem", color: "var(--semantic-fg-neutral-subtlest)", textAlign: "center" }}>흰</Text>
                <Text UNSAFE_style={{ fontSize: "0.62rem", color: "var(--semantic-fg-neutral-subtlest)", textAlign: "center" }}>검정</Text>
                {CRITERIA.map((c) => (
                  <React.Fragment key={c.label}>
                    <Flex direction="column" gap="size-10" UNSAFE_style={{ minWidth: 0 }}>
                      <Text UNSAFE_style={{ fontSize: "0.7rem" }}>{c.label}</Text>
                      <Text UNSAFE_style={{ fontSize: "0.6rem", color: "var(--semantic-fg-neutral-subtlest)" }}>{c.note}</Text>
                    </Flex>
                    <Verdict ok={token.contrastOnWhite >= c.threshold} />
                    <Verdict ok={token.contrastOnBlack >= c.threshold} />
                  </React.Fragment>
                ))}
              </div>
              <StatusLight variant={pass ? "positive" : "negative"}>
                {pass ? "본문에 바로 쓸 수 있어요" : "본문 대신 큰 글자·보조 요소에만 쓰세요"}
              </StatusLight>
            </Card>

            <Card title="변경 이력" action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>{TOKEN_HISTORY.length}건</Text>}>
              <Flex direction="column" gap="size-125">
                {TOKEN_HISTORY.map((h, idx) => (
                  <Flex key={h.commit} gap="size-100" alignItems="start">
                    <Flex direction="column" alignItems="center" UNSAFE_style={{ flexShrink: 0, alignSelf: "stretch" }}>
                      <span
                        aria-hidden
                        style={{
                          width: "0.5rem", height: "0.5rem", borderRadius: "50%", marginTop: "0.3rem",
                          background: idx === 0 ? "var(--semantic-fg-brand-default)" : "var(--semantic-bg-neutral-strong)",
                        }}
                      />
                      {idx < TOKEN_HISTORY.length - 1 ? (
                        <span aria-hidden style={{ flex: 1, width: "1px", background: "var(--semantic-border-neutral-subtle)", marginTop: "0.15rem" }} />
                      ) : null}
                    </Flex>
                    <Flex direction="column" gap="size-10" UNSAFE_style={{ minWidth: 0, paddingBottom: "0.15rem" }}>
                      <Text UNSAFE_style={{ fontSize: "0.72rem", fontWeight: 600, lineHeight: 1.35 }}>{h.label}</Text>
                      <Text UNSAFE_style={{ fontSize: "0.63rem", color: "var(--semantic-fg-neutral-subtlest)", fontVariantNumeric: "tabular-nums" }}>
                        {h.date} · {h.by} · {h.commit}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Card>

            <Card title={`같은 분류 토큰 ${siblings.length}개`}>
              <Flex direction="column" gap="size-100">
                {siblings.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={ => onSelect?.(s.id)}
                    style={{
                      display: "flex", alignItems: "center", gap: "0.5rem", width: "100%",
                      background: "transparent", border: "none", cursor: "pointer", padding: "0.15rem 0",
                      fontFamily: "inherit", textAlign: "start",
                    }}
                  >
                    <ColorSwatch color={s.hex} size="XS" aria-label={s.name} />
                    <Text UNSAFE_style={{ fontSize: "0.72rem", flex: 1, minWidth: 0 }}>{s.name}</Text>
                    <Text UNSAFE_style={{ fontSize: "0.66rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>{s.usageCount}건</Text>
                  </button>
                ))}
              </Flex>
            </Card>
          </Rail>
        }
      />

      <Card
        title="사용처 상세"
        action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>제품 {products}곳 · 총 {token.usageCount}건</Text>}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1.2fr auto", gap: "0.5rem 0.75rem", alignItems: "center" }}>
          {["위치", "제품", "비중", "건수"].map((h) => (
            <Text key={h} UNSAFE_style={{ fontSize: "0.66rem", fontWeight: 600, color: "var(--semantic-fg-neutral-subtlest)" }}>{h}</Text>
          ))}
          {usage.map((u) => (
            <React.Fragment key={`${u.base}-${u.screen}`}>
              <Text UNSAFE_style={{ fontSize: "0.75rem" }}>{u.screen}</Text>
              <Pill tone="neutral">{u.base}</Pill>
              <BarMeter pct={(u.count / usageMax) * 100} />
              <Text UNSAFE_style={{ fontSize: "0.72rem", textAlign: "end", fontVariantNumeric: "tabular-nums" }}>{u.count}건</Text>
            </React.Fragment>
          ))}
        </div>
      </Card>
    </Flex>
  );
}
