import * as React from "react";
import {
  Accordion, AccordionHeader, AccordionItem, AccordionPanel, Badge, Body1, Button, Card,
  Caption1, Divider, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, Field, Input,
  Label, Slider, Tab, TabList, Textarea, ToggleButton, type SelectTabData,
  type SelectTabEvent,
} from "@fluentui/react-components";
import {
  AddRegular, BookmarkFilled, BookmarkRegular, BookRegular, DismissRegular, EyeRegular,
} from "@fluentui/react-icons";
import { KB_ARTICLES } from "../data";

const CATEGORIES = ["전체", ...new Set(KB_ARTICLES.map((a) => a.category))];

function CategoryCountCard({ category }: { category: string }) {
  const count = category === "전체" ? KB_ARTICLES.length : KB_ARTICLES.filter((a) => a.category === category).length;
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          aria-hidden
          style={{
            alignItems: "center", background: "var(--colorBrandBackground)", borderRadius: "8px",
            // 리터럴 white 대신 Fluent on-brand 전경 토큰 사용
            color: "var(--colorNeutralForegroundOnBrand)", display: "flex", flexShrink: 0, height: "28px", justifyContent: "center", width: "28px",
          }}
        >
          <BookRegular fontSize={14} />
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{category}</Caption1>
          <Body1 style={{ fontSize: "16px", fontWeight: 600 }}>{count}건</Body1>
        </div>
      </div>
    </Card>
  );
}

function CategoryViewsBarChart {
  const totals = new Map<string, number>;
  for (const a of KB_ARTICLES) totals.set(a.category, (totals.get(a.category) ?? 0) + a.views);
  const data = [...totals.entries].map(([label, value]) => ({ label, value }));
  const max = Math.max(...data.map((d) => d.value), 1);
  const w = 320;
  const h = 120;
  const topPad = 22;
  const bottomPad = 20;
  const barW = w / data.length - 12;
  return (
    <Card style={{ padding: "14px" }}>
      <Body1 style={{ fontWeight: 600, marginBottom: "6px" }}>카테고리별 누적 조회수</Body1>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} aria-hidden style={{ display: "block" }}>
        {data.map((d, i) => {
          const barH = (d.value / max) * (h - topPad - bottomPad);
          const x = i * (w / data.length) + 6;
          const barTop = h - bottomPad - barH;
          return (
            <g key={d.label}>
              <rect x={x} y={barTop} width={barW} height={barH} fill="var(--colorBrandBackground)" rx={3} />
              <text x={x + barW / 2} y={barTop - 6} fontSize="9" textAnchor="middle" fill="var(--colorNeutralForeground2)">
                {d.value}
              </text>
              <text x={x + barW / 2} y={h - 6} fontSize="9" textAnchor="middle" fill="var(--colorNeutralForeground3)">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </Card>
  );
}

export function KnowledgeBaseScreen {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("전체");
  const [minViews, setMinViews] = React.useState(0);
  const [proposeOpen, setProposeOpen] = React.useState(false);
  const [proposeTitle, setProposeTitle] = React.useState("");
  const [proposeBody, setProposeBody] = React.useState("");
  const [bookmarks, setBookmarks] = React.useState<Set<string>>(new Set);
  const toggleBookmark = (id: string) =>
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const filtered = KB_ARTICLES.filter((a) => {
    if (category !== "전체" && a.category !== category) return false;
    if (a.views < minViews) return false;
    if (query && !a.title.includes(query) && !a.summary.includes(query)) return false;
    return true;
  });
  const mostViewed = [...KB_ARTICLES].sort((a, b) => b.views - a.views)[0];
  const maxViews = Math.max(...KB_ARTICLES.map((a) => a.views));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* 카드 5장. 5가 소수라 auto-fit 대신 가로 스크롤 행을 쓰는 구성임 */}
      <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "2px" }}>
        {["전체", ...new Set(KB_ARTICLES.map((a) => a.category))].map((c) => (
          <div key={c} style={{ flex: "0 0 auto", minWidth: "112px" }}>
            <CategoryCountCard category={c} />
          </div>
        ))}
      </div>

      <Card style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <EyeRegular fontSize={16} />
            <Caption1>가장 많이 본 문서, <strong>{mostViewed.title}</strong> ({mostViewed.views}회)</Caption1>
          </div>
          <Button size="small" icon={<AddRegular />} onClick={ => setProposeOpen(true)}>새 문서 제안</Button>
        </div>
      </Card>

      <CategoryViewsBarChart />

      <TabList
        selectedValue={category}
        onTabSelect={(_: SelectTabEvent, data: SelectTabData) => setCategory(String(data.value))}
      >
        {CATEGORIES.map((c) => (
          <Tab key={c} value={c}>{c}</Tab>
        ))}
      </TabList>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-end" }}>
        <Input
          value={query}
          onChange={(_, data) => setQuery(data.value)}
          placeholder="제목·요약 검색"
          aria-label="지식베이스 검색"
          style={{ minWidth: "200px" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "180px" }}>
          <Label htmlFor="kb-min-views">최소 조회수, {minViews}회 이상</Label>
          <Slider
            id="kb-min-views"
            min={0}
            max={maxViews}
            step={10}
            value={minViews}
            onChange={(_, data) => setMinViews(data.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>조건에 맞는 문서가 없어요.</Caption1>
      ) : (
        <Accordion collapsible multiple defaultOpenItems={filtered.map((a) => a.id).slice(0, 1)}>
          {filtered.map((a) => (
            <AccordionItem key={a.id} value={a.id}>
              <AccordionHeader>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
                  <Body1 style={{ fontWeight: 600 }}>{a.title}</Body1>
                  {/* informative 금지. info 톤이 없어 brand로 변경 */}
                  <Badge appearance="tint" color="brand" size="small">{a.category}</Badge>
                  <Caption1 style={{ color: "var(--colorNeutralForeground3)", marginInlineStart: "auto" }}>
                    조회 {a.views}
                  </Caption1>
                </div>
              </AccordionHeader>
              <AccordionPanel>
                <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "8px" }}>
                  {a.summary}
                </Caption1>
                <ol style={{ margin: 0, paddingInlineStart: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {a.steps.map((step, i) => (
                    <li key={i}><Body1 style={{ fontSize: "14px" }}>{step}</Body1></li>
                  ))}
                </ol>
                {/* ToggleButton은 눌린 상태가 값. AccordionHeader 내부라 패널 배치임 */}
                <ToggleButton
                  size="small"
                  appearance="subtle"
                  checked={bookmarks.has(a.id)}
                  icon={bookmarks.has(a.id) ? <BookmarkFilled /> : <BookmarkRegular />}
                  onClick={ => toggleBookmark(a.id)}
                  style={{ marginTop: "8px" }}
                >
                  {bookmarks.has(a.id) ? "북마크됨" : "북마크"}
                </ToggleButton>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {/* OverlayDrawer로 신규 문서 제안 폼 구현 */}
      <Drawer type="overlay" separator open={proposeOpen} onOpenChange={(_, data) => setProposeOpen(data.open)} position="end">
        <DrawerHeader>
          <DrawerHeaderTitle
            action={<Button appearance="subtle" aria-label="닫기" icon={<DismissRegular />} onClick={ => setProposeOpen(false)} />}
          >
            새 문서 제안
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Field label="제목">
              <Input value={proposeTitle} onChange={(_, data) => setProposeTitle(data.value)} placeholder="예: 프린터 드라이버 재설치" />
            </Field>
            <Field label="내용 초안">
              <Textarea value={proposeBody} onChange={(_, data) => setProposeBody(data.value)} resize="vertical" rows={6} />
            </Field>
            <Divider />
            <Button
              appearance="primary"
              onClick={ => { setProposeOpen(false); setProposeTitle(""); setProposeBody(""); }}
              disabled={!proposeTitle.trim}
            >
              제안 제출
            </Button>
          </div>
        </DrawerBody>
      </Drawer>
    </div>
  );
}
