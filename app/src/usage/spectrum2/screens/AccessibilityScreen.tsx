import * as React from "react";
import {
  ActionButton, Cell, Checkbox, ColorSwatch, Column, Flex, Item, Picker, Row, TableBody, TableHeader, TableView, Text,
} from "@adobe/react-spectrum";
import {
  Bar, BarChart, CartesianGrid, Cell as RCell, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { AlertTriangle, ArrowRight, Download, Gauge, ShieldAlert, ShieldCheck, Wand2 } from "lucide-react";
import { COLOR_TOKENS, OPEN_ISSUES, OWNER_SEED, STAT_SPARKS, WCAG_AA_NORMAL, type ColorCategory } from "../data";
import type { ScreenProps } from "../screens";
import { Card, PageBand, Person, Pill, PromoCard, Rail, StatCard, StatGrid, TONE_FG, TwoColumn } from "../ui";

const CATEGORIES: readonly ColorCategory[] = ["Primary", "Secondary", "Neutral", "Semantic"];
const SEVERITY_TONE = { critical: "danger", warning: "warning", info: "brand" } as const;

// 감사 기준을 화면에 그대로 표시
const THRESHOLDS: readonly { label: string; value: string; note: string }[] = [
  { label: "AA 본문", value: "4.5:1", note: "16px 이하 텍스트" },
  { label: "AA 큰 글자", value: "3.0:1", note: "24px 이상 / 굵은 19px" },
  { label: "AAA 본문", value: "7.0:1", note: "강화 기준" },
];

export function AccessibilityScreen({ onSelect, onNavigate }: ScreenProps) {
  const [onlyFailing, setOnlyFailing] = React.useState(false);
  const [background, setBackground] = React.useState<"white" | "black">("white");

  const rows = COLOR_TOKENS
    .map((t) => ({ ...t, contrast: background === "white" ? t.contrastOnWhite : t.contrastOnBlack }))
    .map((t) => ({ ...t, pass: t.contrast >= WCAG_AA_NORMAL }));

  const shown = onlyFailing ? rows.filter((r) => !r.pass) : rows;
  const passCount = rows.filter((r) => r.pass).length;
  const failCount = rows.length - passCount;
  const compliancePct = Math.round((passCount / rows.length) * 100);
  const avg = (rows.reduce((s, r) => s + r.contrast, 0) / rows.length).toFixed(1);
  const worst = [...rows].sort((a, b) => a.contrast - b.contrast)[0];

  const byCategory = CATEGORIES.map((c) => {
    const inCat = rows.filter((r) => r.category === c);
    return { category: c, 통과: inCat.filter((r) => r.pass).length, 미달: inCat.filter((r) => !r.pass).length };
  });

  const contrastBars = [...rows].sort((a, b) => b.contrast - a.contrast).map((r) => ({ name: r.name, contrast: Number(r.contrast.toFixed(2)), pass: r.pass }));

  return (
    <Flex direction="column" gap="size-175">
      <PageBand
        eyebrow="접근성 감사"
        title={`AA 준수율 ${compliancePct}% · 미달 ${failCount}개`}
        description={`${background === "white" ? "흰" : "검정"} 배경 기준 · 기준 ${WCAG_AA_NORMAL}:1 · 마지막 실행 오늘 08:41 · 대상 ${rows.length}개 토큰`}
        actions={
          <>
            <Picker
              aria-label="배경 기준"
              selectedKey={background}
              onSelectionChange={(k) => setBackground(k as "white" | "black")}
              width="size-1700"
            >
              <Item key="white">흰 배경</Item>
              <Item key="black">검정 배경</Item>
            </Picker>
            <ActionButton>
              <Download size={14} aria-hidden style={{ marginInlineEnd: "0.3rem" }} />
              <Text>리포트</Text>
            </ActionButton>
          </>
        }
      />

      <StatGrid>
        <StatCard icon={<ShieldCheck size={15} />} tone="success" label="통과" value={`${passCount}개`} delta={`${compliancePct}%`} deltaTone="success" spark={STAT_SPARKS.compliance} />
        <StatCard icon={<ShieldAlert size={15} />} tone="danger" label="미달" value={`${failCount}개`} delta={`조치 필요 ${OPEN_ISSUES.filter((i) => i.severity === "critical").length}건`} deltaTone="danger" spark={[7, 7, 6, 6, 5, failCount]} />
        <StatCard icon={<Gauge size={15} />} tone="brand" label="평균 대비" value={`${avg}:1`} delta="↑ 0.1" deltaTone="success" spark={STAT_SPARKS.contrast} />
        <StatCard icon={<AlertTriangle size={15} />} tone="warning" label="최저 대비" value={`${worst.contrast.toFixed(1)}:1`} delta={worst.name} deltaTone="warning" spark={[2.2, 2.0, 1.8, 1.5, 1.2, worst.contrast]} />
      </StatGrid>

      <TwoColumn
        main={
          <>
            <Card
              title="분류별 통과·미달"
              action={<Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)" }}>AA {WCAG_AA_NORMAL}:1 기준</Text>}
            >
              <div style={{ height: "9.5rem", width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={byCategory} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
                    <CartesianGrid stroke="var(--semantic-border-neutral-subtle)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" tick={{ fontSize: 10, fill: "var(--semantic-fg-neutral-subtlest)" }} axisLine={false} tickLine={false} />
                    {/* 눈금 수동 지정. 자동 눈금이 뒤섞여 찍히는 문제 있음 */}
                    <YAxis domain={[0, 6]} ticks={[0, 2, 4, 6]} allowDecimals={false} tick={{ fontSize: 10, fill: "var(--semantic-fg-neutral-subtlest)" }} axisLine={false} tickLine={false} width={28} />
                    <Tooltip
                      cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                      contentStyle={{
                        borderRadius: "var(--semantic-radius-control)",
                        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                        fontSize: "0.72rem",
                        background: "var(--semantic-bg-neutral-surface)",
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: "0.7rem" }} />
                    <Bar dataKey="통과" stackId="a" fill={TONE_FG.success} radius={[0, 0, 0, 0]} isAnimationActive={false} barSize={26} />
                    <Bar dataKey="미달" stackId="a" fill={TONE_FG.danger} radius={[4, 4, 0, 0]} isAnimationActive={false} barSize={26} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card
              title="토큰별 대비"
              action={<Pill tone="danger">기준선 {WCAG_AA_NORMAL}:1</Pill>}
            >
              <div style={{ height: "10rem", width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={contrastBars} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
                    <CartesianGrid stroke="var(--semantic-border-neutral-subtle)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 9, fill: "var(--semantic-fg-neutral-subtlest)" }} axisLine={false} tickLine={false} interval={0} angle={-30} textAnchor="end" height={44} />
                    <YAxis domain={[0, 20]} ticks={[0, 5, 10, 15, 20]} tick={{ fontSize: 10, fill: "var(--semantic-fg-neutral-subtlest)" }} axisLine={false} tickLine={false} width={28} />
                    <Tooltip
                      cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                      contentStyle={{
                        borderRadius: "var(--semantic-radius-control)",
                        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
                        fontSize: "0.72rem",
                        background: "var(--semantic-bg-neutral-surface)",
                      }}
                      formatter={(v) => [`${Number(v).toFixed(1)}:1`, "대비"] as [string, string]}
                    />
                    <ReferenceLine y={WCAG_AA_NORMAL} stroke={TONE_FG.danger} strokeDasharray="4 3" />
                    <Bar dataKey="contrast" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                      {contrastBars.map((b) => (
                        <RCell key={b.name} fill={b.pass ? TONE_FG.success : TONE_FG.danger} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </>
        }
        rail={
          <Rail>
            <Card
              title="우선 조치"
              action={
                <ActionButton isQuiet onPress={ => onNavigate?.("palette")}>
                  <Text UNSAFE_style={{ fontSize: "0.72rem" }}>팔레트</Text>
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

            <Card title="판별 기준">
              <Flex direction="column" gap="size-100">
                {THRESHOLDS.map((t) => (
                  <Flex key={t.label} justifyContent="space-between" alignItems="center" gap="size-100">
                    <Flex direction="column" gap="size-10" UNSAFE_style={{ minWidth: 0 }}>
                      <Text UNSAFE_style={{ fontSize: "0.73rem", fontWeight: 600 }}>{t.label}</Text>
                      <Text UNSAFE_style={{ fontSize: "0.63rem", color: "var(--semantic-fg-neutral-subtlest)" }}>{t.note}</Text>
                    </Flex>
                    <Pill tone="neutral">{t.value}</Pill>
                  </Flex>
                ))}
              </Flex>
            </Card>

            <PromoCard
              icon={<Wand2 size={18} />}
              title="자동 보정 제안"
              body={`미달 ${failCount}개의 대체 값을 계산해 드려요.`}
              cta="보정안 보기"
            />
          </Rail>
        }
      />

      <Card
        title="감사 결과"
        action={
          <Flex alignItems="center" gap="size-150" wrap>
            <Checkbox isSelected={onlyFailing} onChange={setOnlyFailing}>미달만</Checkbox>
            <Text UNSAFE_style={{ fontSize: "0.7rem", color: "var(--semantic-fg-neutral-subtle)", whiteSpace: "nowrap" }}>
              {shown.length}/{rows.length}개
            </Text>
          </Flex>
        }
      >
        {/* regular와 wrap 사용, compact는 셀이 경계선 밖으로 밀려나는 문제 있음 */}
        <TableView
          aria-label="접근성 감사 결과"
          density="regular"
          overflowMode="wrap"
          height="size-3400"
          selectionMode="none"
          onAction={(key) => { onSelect?.(String(key)); onNavigate?.("detail"); }}
        >
          <TableHeader>
            <Column width={40}>색</Column>
            <Column minWidth={132}>토큰</Column>
            <Column width={116}>분류</Column>
            <Column width={84}>대비</Column>
            <Column width={112}>판별</Column>
            <Column width={104}>담당</Column>
          </TableHeader>
          <TableBody items={shown}>
            {(r) => (
              <Row>
                <Cell><ColorSwatch color={r.hex} size="S" aria-label={r.name} /></Cell>
                <Cell>
                  <Flex direction="column" gap="size-10">
                    <Text UNSAFE_style={{ fontSize: "0.78rem", fontWeight: 600 }}>{r.name}</Text>
                    <Text UNSAFE_style={{ fontSize: "0.65rem", color: "var(--semantic-fg-neutral-subtlest)", fontVariantNumeric: "tabular-nums" }}>{r.hex.toUpperCase} · {r.usageCount}건 사용</Text>
                  </Flex>
                </Cell>
                <Cell><Pill tone="neutral">{r.category}</Pill></Cell>
                <Cell>
                  <Text UNSAFE_style={{ fontSize: "0.75rem", fontWeight: 600, fontVariantNumeric: "tabular-nums", color: r.pass ? "var(--semantic-fg-success-default)" : "var(--semantic-fg-danger-default)" }}>
                    {r.contrast.toFixed(1)}:1
                  </Text>
                </Cell>
                <Cell><Pill tone={r.pass ? "success" : "danger"}>{r.pass ? "AA 통과" : "AA 미달"}</Pill></Cell>
                <Cell><Person name={r.owner} seed={OWNER_SEED[r.owner] ?? r.owner} /></Cell>
              </Row>
            )}
          </TableBody>
        </TableView>
      </Card>
    </Flex>
  );
}
