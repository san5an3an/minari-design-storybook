"use client";
import * as React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "../../../bases/shadcn/Badge";
import { Button } from "../../../bases/shadcn/Button";
import { Pagination } from "../../../bases/shadcn/Pagination";
import { Tabs } from "../../../bases/shadcn/Tabs";
import {
  CELL, DOCS, HERO_IMAGE, Placeholder, STATS, VisitsCard, type DocRow, type StatSpec,
} from "../screens/DashboardScreen";
import { TOUCH } from "./MobileShell";

// 글자색(on-brand)의 명도를 뒤집은 색 정의. 흰 글자면 검정, 검정 글자면 흰색이 됨
const HERO_SCRIM = "oklch(from var(--semantic-fg-on-brand-default) calc(1 - l) 0 0)";
// 히어로 바닥 색에 글자 반대색을 섞는 비율 지정
const HERO_MIX = 45;
// 끝 색이 완전히 차는 위치(위에서 %) 지정. 40%면 제목 두 줄이 모두 끝 색 위에 놓임
const HERO_SOLID_AT = 40;
// 히어로 끝 색 혼합은 in srgb 사용. in oklch로 섞으면 색상 보간으로 엉뚱한 색이 끼어드는 문제 있음
const HERO_END = `color-mix(in srgb, var(--semantic-bg-brand-default) ${100 - HERO_MIX}%, ${HERO_SCRIM})`;

function Hero() {
  return (
    <div
      className="flex flex-col justify-end gap-(--semantic-space-xs) overflow-hidden p-(--semantic-space-md)"
      style={{
        minHeight: "7.5rem",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
        // 위에서 아래로 수직 그라디언트 적용. 끝 색은 글자색 반대쪽으로 섞어 어느 시스템이든 대비를 확보함
        backgroundImage:
          `linear-gradient(180deg, color-mix(in oklch, var(--semantic-bg-brand-default) 15%, transparent) 0%, ` +
          `${HERO_END} ${HERO_SOLID_AT}%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span
        style={{
          color: "var(--semantic-fg-on-brand-default)",
          fontSize: "var(--semantic-text-heading)",
          lineHeight: "var(--semantic-line-height-tight)",
        }}
      >
        이번 주도 좋은 흐름이에요
      </span>
      <span style={{ color: "var(--semantic-fg-on-brand-default)", opacity: 0.85, fontSize: "var(--semantic-text-body-sm)" }}>
        아래 지표에서 최근 변화를 한눈에 확인해요.
      </span>
    </div>
  );
}

// 지표 타일 표시. 데스크탑 StatCard에서 아이콘 칩, 라벨, 값, 증감만 남김
function StatTile({ spec }: { spec: StatSpec }) {
  const Trend = spec.up ? TrendingUp : TrendingDown;
  const Icon = spec.icon;
  return (
    <div
      className="flex min-w-0 flex-col gap-(--semantic-space-sm) p-(--semantic-space-md)"
      style={{
        background: "var(--semantic-bg-neutral-surface)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
        boxShadow: "var(--semantic-shadow-raised)",
      }}
    >
      <span className="flex min-w-0 items-center gap-(--semantic-space-sm)">
        <span
          aria-hidden
          className="flex size-7 shrink-0 items-center justify-center"
          style={{
            background: `var(--semantic-bg-${spec.tone}-subtle)`,
            color: `var(--semantic-fg-${spec.tone}-default)`,
            borderRadius: "var(--semantic-radius-control)",
          }}
        >
          <Icon size={14} />
        </span>
        <span
          className="truncate"
          style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}
        >
          {spec.label}
        </span>
      </span>
      <span
        className="block truncate tabular-nums"
        style={{
          fontSize: "var(--semantic-text-heading)",
          lineHeight: "var(--semantic-line-height-tight)",
          color: "var(--semantic-fg-neutral-default)",
        }}
      >
        {spec.value}
      </span>
      <span>
        <Badge variant="outline" tone="neutral" icon={<Trend size={14} aria-hidden />}>
          {spec.delta}
        </Badge>
      </span>
    </div>
  );
}

// 문서 한 줄을 카드로 변환. 표의 여섯 열을 두 줄로 접어 표시함
function DocCard({ d }: { d: DocRow }) {
  return (
    <li
      className="flex flex-col gap-(--semantic-space-xs) p-(--semantic-space-md)"
      style={{
        listStyle: "none",
        minHeight: TOUCH,
        background: "var(--semantic-bg-neutral-surface)",
        border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
        borderRadius: "var(--semantic-radius-container)",
      }}
    >
      <div className="flex items-center justify-between gap-(--semantic-space-sm)">
        <span className="min-w-0 truncate" style={{ fontSize: "var(--semantic-text-body)", color: "var(--semantic-fg-neutral-default)" }}>
          {CELL["헤더"](d)}
        </span>
        <span className="shrink-0">{CELL["상태"](d)}</span>
      </div>
      <div
        className="flex flex-wrap items-center gap-x-(--semantic-space-sm) gap-y-(--semantic-space-xs)"
        style={{ fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" }}
      >
        {CELL["구획 유형"](d)}
        <span className="tabular-nums">목표 {d.target} · 한도 {d.limit}</span>
        <span>{d.reviewer}</span>
      </div>
    </li>
  );
}

function DocList() {
  const [page, setPage] = React.useState(1);
  return (
    <div className="flex flex-col gap-(--semantic-space-sm)">
      <ul className="m-0 flex flex-col gap-(--semantic-space-sm) p-0">
        {DOCS.map((d) => <DocCard key={d.title} d={d} />)}
      </ul>
      <div className="flex flex-col items-center gap-(--semantic-space-sm)">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-body-sm)" }}>
          {DOCS.length}줄을 보고 있어요
        </span>
        <Pagination page={page} total={7} onPage={setPage} />
      </div>
    </div>
  );
}

export function DashboardMobile() {
  return (
    <div className="flex flex-col gap-(--semantic-space-lg)">
      <Hero />
      <div className="grid grid-cols-2 gap-(--semantic-space-sm)">
        {STATS.map((s) => <StatTile key={s.label} spec={s} />)}
      </div>
      <VisitsCard />
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <Button variant="solid" tone="brand" style={{ minHeight: TOUCH, width: "100%" }}>
          구획 더하기
        </Button>
        <Tabs
          defaultValue="outline"
          items={[
            { value: "outline", label: "개요", content: <DocList /> },
            {
              value: "past",
              label: (
                <span className="flex items-center gap-(--semantic-space-sm)">
                  지난 성과 <Badge variant="subtle" tone="neutral">3</Badge>
                </span>
              ),
              content: <Placeholder />,
            },
            {
              value: "people",
              label: (
                <span className="flex items-center gap-(--semantic-space-sm)">
                  핵심 인력 <Badge variant="subtle" tone="neutral">2</Badge>
                </span>
              ),
              content: <Placeholder />,
            },
            { value: "focus", label: "중점 문서", content: <Placeholder /> },
          ]}
        />
      </div>
    </div>
  );
}
