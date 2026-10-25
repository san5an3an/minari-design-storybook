"use client";
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Alert } from "../../../bases/shadcn/Alert";
import { Badge } from "../../../bases/shadcn/Badge";
import { Datatable } from "../../../bases/shadcn/Datatable";
import { Listrow } from "../../../bases/shadcn/Listrow";
import { Nativeselect } from "../../../bases/shadcn/Nativeselect";
import { Select } from "../../../bases/shadcn/Select";
import { Switch } from "../../../bases/shadcn/Switch";
import { ARTICLES, COLLECTIONS, TAG_IMAGE, TAG_TONE } from "../data";
import { SORTS } from "../screens/CollectionsScreen";
import type { ScreenProps } from "../screens";

const CARD = {
  background: "var(--component-card-bg)",
  border: "var(--semantic-border-width-default) solid var(--component-card-border)",
  borderRadius: "var(--component-card-radius)",
} as const;

// 글자색(on-brand)의 명도를 뒤집은 바닥 색 정의. in oklch로 섞으면 카드 바닥이 분홍으로 물들어 in srgb로 섞음
const NAME_SCRIM = "oklch(from var(--semantic-fg-on-brand-default) calc(1 - l) 0 0)";

const META = { fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" } as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 style={{ margin: 0, fontSize: "var(--semantic-text-body)", color: "var(--semantic-fg-neutral-default)" }}>{children}</h3>;
}

export function CollectionsMobile({ onOpen }: ScreenProps) {
  const [sort, setSort] = React.useState<keyof typeof SORTS>("name");
  const [dir, setDir] = React.useState<"asc" | "desc">("asc");
  const [hideEmpty, setHideEmpty] = React.useState(false);

  // 글 수, 평균 시간, 정렬, 필터 계산. 데스크탑 CollectionsScreen과 같은 파생값을 화면마다 다시 계산함
  const withCount = COLLECTIONS.map((c) => {
    const items = ARTICLES.filter((a) => a.tag === c.tag);
    const avgMinutes = items.length
      ? Math.round(items.reduce((s, a) => s + a.minutes, 0) / items.length)
      : 0;
    return { ...c, count: items.length, avgMinutes };
  });
  const sorted = [...withCount].sort((a, b) =>
    sort === "count" ? b.count - a.count : a.label.localeCompare(b.label, "ko"),
  );
  if (dir === "desc") sorted.reverse();
  const shown = hideEmpty ? sorted.filter((c) => c.count > 0) : sorted;
  const emptyCount = withCount.filter((c) => c.count === 0).length;

  return (
    <div className="flex flex-col gap-(--semantic-space-lg)">
      {emptyCount > 0 ? (
        <Alert tone="warning" title="빈 컬렉션이 있어요">
          아직 저장한 글이 없는 컬렉션이 {emptyCount}개예요.
        </Alert>
      ) : null}

      <div className="flex flex-col gap-(--semantic-space-xs)">
        {/* 정렬 라벨은 두 Select 위에 하나만 배치. 칸마다 라벨을 두면 옆 칸과 높이가 어긋남 */}
        <span style={{ color: "var(--component-input-label-fg)", fontSize: "var(--semantic-text-body-sm)" }}>정렬</span>
        <div className="grid grid-cols-2 gap-(--semantic-space-sm)">
          {/* Select 트리거를 칸 폭으로 확장. Select 계약에 className이 없기 때문임 */}
          <div className="min-w-0 [&_[data-slot=select-trigger]]:w-full">
            <Select
              items={SORTS}
              value={sort}
              onValueChange={(v) => setSort(v as keyof typeof SORTS)}
            />
          </div>
          <Nativeselect
            className="w-full"
            aria-label="정렬 방향"
            value={dir}
            onChange={(e) => setDir(e.target.value as "asc" | "desc")}
          >
            <Nativeselect.Option value="asc">오름차순</Nativeselect.Option>
            <Nativeselect.Option value="desc">내림차순</Nativeselect.Option>
          </Nativeselect>
        </div>
        <label htmlFor="m-hide-empty" className="flex min-h-11 items-center justify-between gap-(--semantic-space-md)">
          <span style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
            빈 컬렉션 숨기기
          </span>
          <Switch id="m-hide-empty" checked={hideEmpty} onCheckedChange={setHideEmpty} />
        </label>
      </div>

      <ul className="m-0 grid grid-cols-2 gap-(--semantic-space-sm) p-0">
        {shown.map((c) => {
          const tone = TAG_TONE[c.tag] ?? "brand";
          return (
            <li
              key={c.id}
              className="relative flex flex-col justify-end overflow-hidden p-(--semantic-space-sm) last:odd:col-span-2"
              style={{
                listStyle: "none",
                minHeight: "8rem",
                borderRadius: "var(--component-card-radius)",
                boxShadow: "var(--component-card-shadow)",
                // 글자가 놓이는 아래쪽에만 바닥 색 적용. 글자색 반대쪽 색으로 섞어 대비를 확보함
                backgroundImage:
                  `linear-gradient(180deg, transparent 0%, transparent 35%, ` +
                  `color-mix(in srgb, var(--semantic-bg-${tone}-default) 30%, ${NAME_SCRIM}) 80%), url("${TAG_IMAGE[c.tag]}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* 이름과 개수를 바닥 줄에 함께 배치. 밝은 사진에서도 읽히게 하기 위함 */}
              <span className="flex items-end justify-between gap-(--semantic-space-xs)">
                <span
                  className="min-w-0 truncate"
                  style={{ color: "var(--semantic-fg-on-brand-default)", fontSize: "var(--component-card-title-font-size)" }}
                >
                  {c.label}
                </span>
                <Badge variant="solid" tone={tone}>{c.count}개</Badge>
              </span>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-(--semantic-space-md)">
        <SectionTitle>컬렉션별 글</SectionTitle>
        {shown.map((c) => {
          const items = ARTICLES.filter((a) => a.tag === c.tag);
          if (items.length === 0) return null;
          return (
            <section key={c.id} className="flex flex-col gap-(--semantic-space-xs)" aria-label={`${c.label} 컬렉션`}>
              <div className="flex items-center gap-(--semantic-space-sm)">
                <Badge variant="subtle" tone={TAG_TONE[c.tag] ?? "neutral"}>{c.label}</Badge>
                <span style={META}>{items.length}개</span>
              </div>
              <div className="overflow-hidden" style={CARD}>
                <Listrow.List>
                  {items.map((a) => (
                    <button key={a.id} type="button" onClick={() => onOpen?.("reader", a.id)} className="w-full text-start">
                      <Listrow
                        lead={<Badge variant="outline" tone="neutral">{a.minutes}분</Badge>}
                        title={<span className="line-clamp-2">{a.title}</span>}
                        sub={a.source}
                        trail={<ChevronRight size={16} aria-hidden />}
                      />
                    </button>
                  ))}
                </Listrow.List>
              </div>
            </section>
          );
        })}
      </div>

      <div className="flex flex-col gap-(--semantic-space-sm)">
        <SectionTitle>컬렉션별 요약</SectionTitle>
        <Datatable
          columns={[
            { key: "label", header: "컬렉션" },
            { key: "count", header: "글", numeric: true },
            { key: "avgMinutes", header: "평균 분", numeric: true },
          ]}
          rows={withCount.map((c) => ({ label: c.label, count: c.count, avgMinutes: c.avgMinutes }))}
          filterKey="label"
          filterPlaceholder="컬렉션 이름으로 거르기"
          pageSize={5}
        />
      </div>
    </div>
  );
}
