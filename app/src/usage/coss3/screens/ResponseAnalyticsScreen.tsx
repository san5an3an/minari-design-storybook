import * as React from "react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart,
  ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis,
} from "recharts";
import { Download, Info, InboxIcon, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../bases/coss-ui/avatar";
import { Badge } from "../../../bases/coss-ui/badge";
import { Button } from "../../../bases/coss-ui/button";
import { Card } from "../../../bases/coss-ui/card";
import { Drawer, DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerPanel, DrawerPopup, DrawerTitle } from "../../../bases/coss-ui/drawer";
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../../../bases/coss-ui/empty";
import { Frame, FrameDescription, FrameHeader, FramePanel, FrameTitle } from "../../../bases/coss-ui/frame";
import { Meter, MeterIndicator, MeterTrack } from "../../../bases/coss-ui/meter";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../../bases/coss-ui/pagination";
import { Progress, ProgressIndicator, ProgressTrack } from "../../../bases/coss-ui/progress";
import { ScrollArea } from "../../../bases/coss-ui/scroll-area";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../../../bases/coss-ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../bases/coss-ui/table";
import { Tabs, TabsList, TabsPanel, TabsTab } from "../../../bases/coss-ui/tabs";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "../../../bases/coss-ui/tooltip";
import { ToastProvider, toastManager } from "../../../bases/coss-ui/toast";
import {
  EXTRA_RESPONSES_BY_SURVEY, RESPONSES_BY_SURVEY, formatDaysAgo, formatDuration, surveyById,
  type Question, type Response as SurveyResponse, type Survey,
} from "../data";
import type { ScreenProps } from "../screens";

const PAGE_SIZE = 8;
const TREND_DAYS = 14;

function answerAsArray(v: string | string[] | number | undefined): string[] {
  if (v === undefined) return [];
  return Array.isArray(v) ? v : [String(v)];
}

function countAnswers(responses: readonly SurveyResponse[], questionId: string, buckets: readonly string[]): number[] {
  const counts = buckets.map( => 0);
  responses.forEach((r) => {
    answerAsArray(r.answers[questionId]).forEach((v) => {
      const idx = buckets.indexOf(v);
      if (idx >= 0) counts[idx] += 1;
    });
  });
  return counts;
}

function StatCard({ icon: Icon, label, value, caption, tone, progress }: {
  icon: React.ComponentType<{ size?: number }>; label: string; value: string; caption: string; tone: "brand" | "success" | "warning" | "danger"; progress?: number;
}) {
  return (
    <Card className="gap-0 p-3.5">
      <span aria-hidden className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `var(--semantic-bg-${tone}-subtle)`, color: `var(--semantic-fg-on-${tone}-subtle)` }}><Icon size={15} /></span>
      <span className="mt-2 text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{label}</span>
      <span className="font-semibold tabular-nums" style={{ fontSize: "var(--semantic-text-heading-md)" }}>{value}</span>
      {progress !== undefined ? <Progress value={progress} className="mt-1.5"><ProgressTrack><ProgressIndicator /></ProgressTrack></Progress> : null}
      <span className="truncate text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{caption}</span>
    </Card>
  );
}

function BarBreakdown({ buckets, counts }: { buckets: readonly string[]; counts: number[] }) {
  const data = buckets.map((label, i) => ({ label, count: counts[i] }));
  return (
    <div style={{ height: "13rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="var(--semantic-border-neutral-subtle)" />
          <XAxis dataKey="label" interval={0} tick={{ style: { fontSize: 11 } }} tickFormatter={(v: string) => (v.length > 6 ? `${v.slice(0, 6)}…` : v)} />
          <YAxis allowDecimals={false} tick={{ style: { fontSize: 11 } }} />
          <RechartsTooltip contentStyle={{ fontSize: 12 }} />
          <Bar dataKey="count" fill="var(--component-chart-series-2)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function DonutBreakdown({ buckets, counts }: { buckets: readonly string[]; counts: number[] }) {
  const total = counts.reduce((s, c) => s + c, 0) || 1;
  const data = buckets.map((name, i) => ({ name, value: counts[i] }));
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="relative shrink-0" style={{ width: "9rem", height: "9rem" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius="62%" outerRadius="98%" paddingAngle={2} isAnimationActive={false}>
              {data.map((_, i) => <Cell key={i} fill={`var(--component-chart-series-${(i % 4) + 1})`} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-semibold tabular-nums" style={{ fontSize: "var(--semantic-text-heading-md)" }}>{total}</span>
          <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>총 응답</span>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {buckets.map((label, i) => (
          <div key={label} className="flex items-center justify-between gap-2" style={{ fontSize: "var(--semantic-text-body-sm)" }}>
            <span className="flex min-w-0 items-center gap-1.5 truncate">
              <span aria-hidden className="size-2 shrink-0 rounded-full" style={{ background: `var(--component-chart-series-${(i % 4) + 1})` }} />
              <span className="truncate">{label}</span>
            </span>
            <span className="shrink-0 tabular-nums text-muted-foreground">{counts[i]}건 · {Math.round((counts[i] / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NumberInsight({ question, responses }: { question: Question; responses: readonly SurveyResponse[] }) {
  const values = responses.map((r) => r.answers[question.id]).filter((v): v is number => typeof v === "number");
  const avg = values.length ? values.reduce((s, v) => s + v, 0) / values.length : 0;
  const min = values.length ? Math.min(...values) : 0;
  const max = values.length ? Math.max(...values) : 0;
  const unit = question.numberRange?.unit ?? "";
  return (
    <div className="flex gap-5">
      <div className="flex flex-col"><span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>평균</span><span className="font-semibold tabular-nums">{avg.toFixed(1)}{unit}</span></div>
      <div className="flex flex-col"><span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>최소</span><span className="font-semibold tabular-nums">{min}{unit}</span></div>
      <div className="flex flex-col"><span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>최대</span><span className="font-semibold tabular-nums">{max}{unit}</span></div>
    </div>
  );
}

function DateInsight({ question, responses }: { question: Question; responses: readonly SurveyResponse[] }) {
  const counts = new Map<string, number>;
  responses.forEach((r) => {
    const v = r.answers[question.id];
    if (typeof v === "string" && v) counts.set(v, (counts.get(v) ?? 0) + 1);
  });
  const rows = [...counts.entries].sort((a, b) => b[1] - a[1]).slice(0, 5);
  if (rows.length === 0) return <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>답변이 없어요.</span>;
  return (
    <Table>
      <TableHeader><TableRow><TableHead>날짜</TableHead><TableHead>응답 수</TableHead></TableRow></TableHeader>
      <TableBody>{rows.map(([d, c]) => <TableRow key={d}><TableCell>{d}</TableCell><TableCell className="tabular-nums">{c}건</TableCell></TableRow>)}</TableBody>
    </Table>
  );
}

function TextInsight({ question, responses }: { question: Question; responses: readonly SurveyResponse[] }) {
  const texts = responses.map((r) => r.answers[question.id]).filter((v): v is string => typeof v === "string" && v.trim !== "");
  if (texts.length === 0) return <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-body-sm)" }}>답변이 없어요.</span>;
  return (
    <ScrollArea style={{ maxHeight: "10rem" }}>
      <div className="flex flex-col gap-2 pe-2">
        {texts.slice(0, 6).map((t, i) => (
          <Card key={i} className="p-2.5" style={{ fontSize: "var(--semantic-text-body-sm)" }}>{t}</Card>
        ))}
      </div>
      {texts.length > 6 ? <span className="mt-1 block text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>+{texts.length - 6}건 더 있어요.</span> : null}
    </ScrollArea>
  );
}

function QuestionInsight({ question, responses }: { question: Question; responses: readonly SurveyResponse[] }) {
  if (question.type === "single" || question.type === "multi") {
    return <BarBreakdown buckets={question.options ?? []} counts={countAnswers(responses, question.id, question.options ?? [])} />;
  }
  if (question.type === "scale") {
    const scale = question.scale ?? { min: 1, max: 5, minLabel: "", maxLabel: "" };
    const buckets = Array.from({ length: scale.max - scale.min + 1 }, (_, i) => String(scale.min + i));
    const counts = countAnswers(responses, question.id, buckets);
    const total = counts.reduce((s, c) => s + c, 0) || 1;
    const avg = buckets.reduce((s, b, i) => s + Number(b) * counts[i], 0) / total;
    return (
      <div className="flex flex-col gap-3">
        <BarBreakdown buckets={buckets} counts={counts} />
        <Meter value={avg} min={scale.min} max={scale.max}>
          <div className="flex items-center justify-between"><span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>평균 점수</span><span className="font-medium tabular-nums">{avg.toFixed(1)} / {scale.max}</span></div>
          <MeterTrack><MeterIndicator /></MeterTrack>
        </Meter>
      </div>
    );
  }
  if (question.type === "select") {
    return <DonutBreakdown buckets={question.options ?? []} counts={countAnswers(responses, question.id, question.options ?? [])} />;
  }
  if (question.type === "number") return <NumberInsight question={question} responses={responses} />;
  if (question.type === "date") return <DateInsight question={question} responses={responses} />;
  return <TextInsight question={question} responses={responses} />;
}

function TrendChart({ responses }: { responses: readonly SurveyResponse[] }) {
  const data = Array.from({ length: TREND_DAYS }, (_, i) => {
    const daysAgo = TREND_DAYS - 1 - i;
    return { label: daysAgo === 0 ? "오늘" : `${daysAgo}일 전`, count: responses.filter((r) => r.daysAgo === daysAgo).length };
  });
  return (
    <div style={{ height: "11rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="coss3TrendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--component-chart-series-1)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--component-chart-series-1)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="var(--semantic-border-neutral-subtle)" />
          <XAxis dataKey="label" interval={2} tick={{ style: { fontSize: 11 } }} />
          <YAxis allowDecimals={false} tick={{ style: { fontSize: 11 } }} width={28} />
          <RechartsTooltip contentStyle={{ fontSize: 12 }} />
          <Area type="monotone" dataKey="count" stroke="var(--component-chart-series-1)" fill="url(#coss3TrendFill)" strokeWidth={2} isAnimationActive={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function ResponseDetailDrawer({ survey, response, onClose }: { survey: Survey; response: SurveyResponse | null; onClose:  => void }) {
  return (
    <Drawer open={response !== null} onOpenChange={(open) => { if (!open) onClose; }} position="bottom">
      <DrawerPopup showBar>
        <DrawerHeader>
          <DrawerTitle>{response?.respondent.name}님의 응답</DrawerTitle>
          <DrawerDescription>{response ? `${formatDaysAgo(response.daysAgo)} · 소요 시간 ${formatDuration(response.completionSec)}` : ""}</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <div className="flex flex-col gap-3">
            {survey.questions.map((q) => {
              const v = response?.answers[q.id];
              const display = v === undefined ? "(답변 없음)" : Array.isArray(v) ? v.join(", ") : String(v);
              return (
                <div key={q.id} className="flex flex-col gap-0.5 border-b pb-2 last:border-b-0">
                  <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{q.title}</span>
                  <span>{display}</span>
                </div>
              );
            })}
          </div>
        </DrawerPanel>
        <DrawerFooter variant="bare">
          <DrawerClose render={<Button variant="outline">닫기</Button>} />
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

export function ResponseAnalyticsScreen({ surveys, selectedId, onSelect, onOpenShare }: ScreenProps) {
  const survey = surveyById(surveys, selectedId ?? "s1");
  const [extraShown, setExtraShown] = React.useState<Record<string, number>>({});
  const [detailId, setDetailId] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [exporting, setExporting] = React.useState(false);

  const base = RESPONSES_BY_SURVEY[survey.id] ?? [];
  const extraPool = EXTRA_RESPONSES_BY_SURVEY[survey.id] ?? [];
  const shown = Math.min(extraShown[survey.id] ?? 0, extraPool.length);
  const responses = React.useMemo( => [...base, ...extraPool.slice(0, shown)], [base, extraPool, shown]);

  const totalPages = Math.max(1, Math.ceil(responses.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageRows = responses.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  React.useEffect( => { setPage(1); }, [survey.id]);

  const detail = responses.find((r) => r.id === detailId) ?? null;
  const achievedPct = Math.min(100, Math.round((responses.length / survey.targetResponses) * 100));
  const avgSec = responses.length ? Math.round(responses.reduce((s, r) => s + r.completionSec, 0) / responses.length) : 0;
  const latest = responses.length ? Math.min(...responses.map((r) => r.daysAgo)) : null;

  const addTestResponse =  => setExtraShown((prev) => ({ ...prev, [survey.id]: Math.min((prev[survey.id] ?? 0) + 1, extraPool.length) }));
  const runExport =  => {
    setExporting(true);
    window.setTimeout( => {
      setExporting(false);
      toastManager.add({ title: "내보내기 완료", description: `${survey.title} 응답 ${responses.length}건을 저장했어요.` });
    }, 900);
  };

  return (
    <ToastProvider>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <Select value={survey.id} onValueChange={(v) => onSelect?.(v as string)}>
              <SelectTrigger style={{ width: "16rem" }}><SelectValue /></SelectTrigger>
              <SelectPopup>{surveys.map((s) => <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>)}</SelectPopup>
            </Select>
            <Badge variant={survey.status === "진행중" ? "default" : survey.status === "마감" ? "outline" : "secondary"}>{survey.status}</Badge>
          </div>
          <div className="flex items-center gap-2">
            {extraPool.length > shown ? <Button variant="outline" size="sm" onClick={addTestResponse}><Plus size={13} />테스트 응답 추가</Button> : null}
            <Button size="sm" loading={exporting} onClick={runExport}><Download size={13} />내보내기</Button>
          </div>
        </div>

        {responses.length === 0 ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
              <EmptyTitle>아직 응답이 없어요</EmptyTitle>
              <EmptyDescription>공유 링크를 배포하면 응답이 이 화면에 모여요.</EmptyDescription>
            </EmptyHeader>
            <Button size="sm" onClick={ => onOpenShare(survey.id)}>공유 설정 열기</Button>
          </Empty>
        ) : (
          <>
            <div style={{ containerType: "inline-size", containerName: "a4" }}>
              <style>{"@container a4 (min-width: 42rem) { .a4-grid { grid-template-columns: repeat(4, minmax(11rem, 1fr)); } }"}</style>
              <div className="a4-grid grid grid-cols-2 gap-3">
                <StatCard icon={InboxIcon} tone="brand" label="총 응답" value={`${responses.length}건`} caption={`목표 ${survey.targetResponses}명 중`} />
                <StatCard icon={Download} tone="success" label="목표 달성률" value={`${achievedPct}%`} caption={`${responses.length}/${survey.targetResponses}명`} progress={achievedPct} />
                <StatCard icon={Info} tone="warning" label="평균 소요시간" value={formatDuration(avgSec)} caption="응답 1건당 평균" />
                <StatCard icon={Plus} tone="danger" label="가장 최근 응답" value={latest !== null ? formatDaysAgo(latest) : "-"} caption="최신 응답 기준" />
              </div>
            </div>

            <Card className="p-4">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="font-medium">응답 추이 (최근 14일)</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="ghost" size="icon-xs"><Info size={12} /></Button>} />
                    <TooltipPopup>날짜별로 들어온 응답 수예요.</TooltipPopup>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <TrendChart responses={responses} />
            </Card>

            <Tabs defaultValue="questions">
              <TabsList>
                <TabsTab value="questions">문항별 분석</TabsTab>
                <TabsTab value="rows">개별 응답</TabsTab>
              </TabsList>
              <TabsPanel value="questions">
                <Frame className="mt-3">
                  {survey.questions.map((q, i) => (
                    <FramePanel key={q.id}>
                      <FrameHeader className="px-0 pt-0">
                        <FrameTitle>{i + 1}. {q.title}</FrameTitle>
                        {q.description ? <FrameDescription>{q.description}</FrameDescription> : null}
                      </FrameHeader>
                      <QuestionInsight question={q} responses={responses} />
                    </FramePanel>
                  ))}
                </Frame>
              </TabsPanel>
              <TabsPanel value="rows">
                <div className="mt-3 flex flex-col gap-3">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>응답자</TableHead>
                        <TableHead>제출</TableHead>
                        <TableHead>소요시간</TableHead>
                        <TableHead>주요 답변</TableHead>
                        <TableHead />
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pageRows.map((r) => {
                        const firstQ = survey.questions[0];
                        const preview = firstQ ? answerAsArray(r.answers[firstQ.id]).join(", ") : "";
                        return (
                          <TableRow key={r.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Avatar className="size-6"><AvatarFallback className="text-[0.625rem]">{r.respondent.initial}</AvatarFallback></Avatar>
                                <span>{r.respondent.name}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{formatDaysAgo(r.daysAgo)}</TableCell>
                            <TableCell className="text-muted-foreground">{formatDuration(r.completionSec)}</TableCell>
                            <TableCell className="max-w-40 truncate text-muted-foreground">{preview}</TableCell>
                            <TableCell><Button variant="outline" size="sm" onClick={ => setDetailId(r.id)}>상세</Button></TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-muted-foreground" style={{ fontSize: "var(--semantic-text-caption)" }}>{(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, responses.length)} / {responses.length}</span>
                    <Pagination className="mx-0 w-auto justify-end">
                      <PaginationContent>
                        <PaginationItem><PaginationPrevious onClick={ => setPage((p) => Math.max(1, p - 1))} aria-disabled={safePage === 1} /></PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                          <PaginationItem key={n}><PaginationLink isActive={n === safePage} onClick={ => setPage(n)}>{n}</PaginationLink></PaginationItem>
                        ))}
                        <PaginationItem><PaginationNext onClick={ => setPage((p) => Math.min(totalPages, p + 1))} aria-disabled={safePage === totalPages} /></PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </TabsPanel>
            </Tabs>
          </>
        )}
      </div>

      <ResponseDetailDrawer survey={survey} response={detail} onClose={ => setDetailId(null)} />
    </ToastProvider>
  );
}
