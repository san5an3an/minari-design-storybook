"use client";

import * as React from "react";
import { FileUp, Loader2, Send, Trash2, Upload } from "lucide-react";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { extract } from "@/ingest/extract";
import { extractHead } from "@/ingest/parse/html";
import { renderMockup } from "@/ingest/parse/render";
import { browserResources } from "@/ingest/resources.browser";
import { storeFor, DEFAULT_STORE } from "@/ingest/stores/registry";
import type { Draft, DraftSummary, Fragment } from "@/ingest/types";
import type { SystemDefinition } from "@/systems/types";

type Step = "upload" | "pick" | "refine";

// 채팅 메시지 한 건
interface Turn {
  who: "user" | "agent";
  text: string;
}

function FragmentPreview({ f, head }: { f: Fragment; head: { head: string; bodyClass: string } }) {
  const [h, setH] = React.useState(56);
  // 프래그먼트별 고유 채널 이름 지정. 채널을 구분하지 않으면 다른 iframe, 확장이 보낸 메시지까지 수신하는 문제가 있음
  const channel = React.useId;

  const srcDoc = React.useMemo(
     =>
      `<!doctype html><html><head><meta charset="utf-8">${head.head}` +
      // 목업 스타일 덮어쓰기 금지. margin, padding만 반영하고 배경, 색은 유지
      `<style>html,body{margin:0;padding:0}</style>` +
      // html은 루트에만 있음. ??는 빈 상자 오해 막으려 사용
      `</head><body class="${head.bodyClass}">${f.html ?? "<!-- 이 조각의 마크업은 조상 안에 있습니다 -->"}` +
      `<script>(function{` +
      `var ic=function{try{window.lucide&&window.lucide.createIcons}catch(e){}};` +
      `var send=function{parent.postMessage({__ods:${JSON.stringify(channel)},h:document.documentElement.scrollHeight},"*")};` +
      `ic;new ResizeObserver(send).observe(document.documentElement);send;` +
      // CDN 로드 지연 대비 2회 재시도 후 실패해도 조용히 처리
      `setTimeout(function{ic;send},150);setTimeout(function{ic;send},600)})<\/script>` +
      `</body></html>`,
    [f.html, head, channel],
  );

  React.useEffect( => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data as { __ods?: string; h?: number } | null;
      if (!d || d.__ods !== channel || typeof d.h !== "number") return;
      // 항목을 위아래로 그룹 표시
      setH(Math.min(Math.max(d.h, 40), 260));
    };
    window.addEventListener("message", onMsg);
    return  => window.removeEventListener("message", onMsg);
  }, [channel]);

  return (
    <iframe
      title={`${f.tag} 미리보기`}
      sandbox="allow-scripts"
      srcDoc={srcDoc}
      className="w-full rounded-md border"
      style={{ height: `${h}px` }}
    />
  );
}

function kb(bytes: number | null): string {
  // null은 미확인, 0은 사용 안 함이라는 뜻. 0으로 적으면 오독될 수 있음
  return bytes === null ? "크기 모름" : `${(bytes / 1024).toFixed(0)}KB`;
}

function DraftShelf({ tick, onChanged }: { tick: number; onChanged:  => void }) {
  const [rows, setRows] = React.useState<DraftSummary[] | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  // 두 번 눌러야 삭제
  const [armed, setArmed] = React.useState<string | null>(null);

  const reload = React.useCallback(async  => {
    try {
      setRows(await storeFor(DEFAULT_STORE).list);
      setErr(null);
    } catch (e) {
      // 읽기 실패와 초안 없음 구분 표시. 미구분 시 용량 문제 인지 못하는 문제 있음
      setErr(e instanceof Error ? e.message : String(e));
      setRows(null);
    }
  }, []);

  React.useEffect( => {
    void reload;
  }, [reload, tick]);

  if (err) {
    return (
      <p className="text-xs text-destructive">
        쌓인 초안을 못 읽었어요. {err} <b>«초안이 없다»가 아닙니다.</b>
      </p>
    );
  }
  if (!rows || rows.length === 0) return null;

  const known = rows.filter((r) => r.bytes !== null);
  const total = known.reduce((s, r) => s + (r.bytes ?? 0), 0);
  const unknown = rows.length - known.length;

  return (
    <details className="rounded-md border bg-muted/30 px-3 py-2">
      <summary className="cursor-pointer text-xs text-muted-foreground">
        쌓인 초안 {rows.length}개 · 합계 약 {kb(total)}
        {unknown > 0 && ` (+ 크기 모르는 것 ${unknown}개)`}, 공간이 부족하면 여기서 지우세요
      </summary>
      <div className="mt-2 flex flex-col gap-1">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center gap-2 text-xs">
            <span className="min-w-0 flex-1 truncate" title={r.filename}>
              {r.name ?? r.filename}
              <span className="ml-2 text-muted-foreground">
                조각 {r.fragmentCount} · 미결 {r.openQuestions}
                {r.updatedAt && ` · ${r.updatedAt.slice(0, 10)}`}
              </span>
            </span>
            <span className="tabular-nums text-muted-foreground">{kb(r.bytes)}</span>
            {armed === r.id ? (
              <>
                <span className="text-destructive">되돌릴 수 없어요.</span>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-6 px-2"
                  onClick={async  => {
                    await storeFor(DEFAULT_STORE).remove(r.id);
                    setArmed(null);
                    onChanged;
                    await reload;
                  }}
                >
                  지웁니다
                </Button>
                <Button size="sm" variant="ghost" className="h-6 px-2" onClick={ => setArmed(null)}>
                  취소
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-muted-foreground"
                onClick={ => setArmed(r.id)}
              >
                <Trash2 className="size-3.5" />
                <span className="sr-only">{r.filename} 지우기</span>
              </Button>
            )}
          </div>
        ))}
      </div>
    </details>
  );
}

// 구조 텍스트 표현, 기본 접힘 상태
function FragmentCode({ f }: { f: Fragment }) {
  const line = (n: Fragment, depth: number): React.ReactNode => (
    <React.Fragment key={n.id}>
      <div className="font-mono text-xs leading-5" style={{ paddingLeft: `${depth * 0.75}rem` }}>
        <span className="text-muted-foreground">&lt;</span>
        <span>{n.tag}</span>
        {n.classes.length > 0 && (
          <span className="text-muted-foreground"> .{n.classes.join(".")}</span>
        )}
        <span className="text-muted-foreground">&gt;</span>
        {n.text && <span className="ml-1">{n.text.slice(0, 40)}</span>}
      </div>
      {n.children.map((c) => line(c, depth + 1))}
    </React.Fragment>
  );
  return (
    <details className="rounded-md border bg-muted/30 px-2 py-1">
      <summary className="cursor-pointer text-xs text-muted-foreground">구조 보기</summary>
      <div className="pt-1">{line(f, 0)}</div>
    </details>
  );
}

export function ImportDialog({
  open, onOpenChange, system,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // 기준 시스템의 계약, 토큰 선택. 매칭에만 사용, 색과 결부하지 않음
  system: SystemDefinition;
}) {
  const [step, setStep] = React.useState<Step>("upload");
  const [file, setFile] = React.useState<File | null>(null);
  const [dragging, setDragging] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [draft, setDraft] = React.useState<Draft | null>(null);
  const [picked, setPicked] = React.useState<Set<string>>(new Set);
  const [cursor, setCursor] = React.useState(0);
  const [turns, setTurns] = React.useState<Turn[]>([]);
  const [prompt, setPrompt] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [head, setHead] = React.useState<{ head: string; bodyClass: string }>({ head: "", bodyClass: "" });
  // 스크립트 실행 실패 시 사유 표시
  const [renderNote, setRenderNote] = React.useState<string | null>(null);
  // 초안 목록 재조회 신호. 저장 실패 시 가장 중요하며 확인할 것은 현재 점유 현황임
  const [shelfTick, setShelfTick] = React.useState(0);
  const fileInput = React.useRef<HTMLInputElement>(null);

  React.useEffect( => {
    if (open) return;
    const t = setTimeout( => {
      setStep("upload"); setFile(null); setDraft(null); setPicked(new Set);
      setCursor(0); setTurns([]); setPrompt(""); setError(null); setBusy(false); setHead({ head: "", bodyClass: "" }); setRenderNote(null);
    }, 200);
    return  => clearTimeout(t);
  }, [open]);

  const accept = (f: File | null | undefined) => {
    if (!f) return;
    // 확장자만 확인. 내용 검사는 파서가 처리
    if (!/\.(html?|htm)$/i.test(f.name)) {
      setError(`HTML 파일이 아닌 것 같아요, '${f.name}'. 그래도 올리려면 이름을 .html 로 바꿔 주세요.`);
      return;
    }
    setError(null);
    setFile(f);
  };

  async function analyze {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const html = await file.text;
      setHead(extractHead(html));

      // 목업 실행 후 추출. 미실행 시 JS 렌더 요소 다수 누락
      const rendered = await renderMockup(html);
      setRenderNote(
        rendered.fellBackTo
          ? `목업 스크립트를 못 돌렸어요. ${rendered.fellBackTo}.\n` +
            `   그래서 스크립트가 만드는 부분은 안 보입니다. 「컴포넌트가 없다」가 아니라 「못 봤다」예요.`
          : rendered.after > rendered.before
            ? `스크립트를 돌려 마크업이 ${(rendered.after / rendered.before).toFixed(1)}배가 됐어요 ` +
              `(태그 ${rendered.before} → ${rendered.after}). «요소 수»가 아니라 문자열에서 센 태그 수예요 ` +
              `, 다른 자로 센 수와 안 맞는 것이 정상입니다.`
            : null,
      );

      const d = await extract(
        {
          filename: file.name,
          // 마크업은 렌더링본, head/CDN은 원본 사용. 둘 다 필요해 원본과 같음
          html: `<!doctype html><html><head></head><body>${rendered.html}</body></html>`,
          slug: system.slug,
          allSlugs: [system.slug],
        },
        browserResources,
      );
      setDraft(d);
      // 초기 상태 전체 미선택. 전부 켜두면 확인 절차 없이 다음으로 넘어가는 문제 있음
      setPicked(new Set);
      setStep("pick");
      await storeFor(DEFAULT_STORE).save(d);
    } catch (e) {
      // 저장 실패 시 목록 다시 읽기. 오류만 띄우면 삭제 판단 근거가 화면에 없음
      setShelfTick((t) => t + 1);
      // 실패 시 창 유지하며 오류 이유 표시. 닫으면 성공으로 오인할 수 있음
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  async function goRefine {
    if (!draft) return;
    const next = { ...draft, selected: Array.from(picked) };
    setDraft(next);
    setStep("refine");
    setCursor(0);
    try {
      await storeFor(DEFAULT_STORE).save(next);
    } catch (e) {
      setShelfTick((t) => t + 1);
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  async function send {
    const text = prompt.trim;
    if (!text || !showing || sending) return;
    setPrompt("");
    setTurns((t) => [...t, { who: "user", text }]);
    setSending(true);
    try {
      const res = await fetch("/api/ingest/refine", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fragment: showing,
          candidates: { component: draft?.candidates[showing.id] ?? [] },
          prompt: text,
          // 역할 태그 유지한 채 이전 메시지 전송. 한 덩어리로 보내면 모델 지시문처럼 보임
          history: turns.map((t) => ({
            role: t.who === "user" ? ("user" as const) : ("assistant" as const),
            content: t.text,
          })),
        }),
      });
      const body = (await res.json.catch( => null)) as
        | { reply?: string; patch?: { component?: string; notes?: string }; error?: string }
        | null;

      if (!res.ok) {
        const why =
          res.status === 404
            ? "AI 다듬기는 아직 이 서버에 안 올라왔어요.\n\n" +
              "고장이 아니라 아직 없는 것입니다. 어느 AI 를 쓸지가 안 정해져서 이 부분만 따로 갈라 뒀어요.\n" +
              "그때까지도 고른 요소와 판단은 그대로 저장됩니다. 여기서 못 하는 것은 «말로 고치기» 하나뿐이에요."
            : res.status === 503
              ? `${body?.error ?? "서버가 준비되지 않았어요."}\n\n` +
                "(키가 없으면 이 기능은 아무것도 안 물어봅니다. 답이 비는 것과 다릅니다.)"
              : body?.error ?? "라우트가 까닭을 안 실어 보냈어요.";
        setTurns((t) => [...t, { who: "agent", text: `${res.status}, ${why}` }]);
        return;
      }

      const patch = body?.patch;
      setTurns((t) => [
        ...t,
        {
          who: "agent",
          text:
            (body?.reply ?? "(답이 비었어요. 라우트는 200 을 냈습니다. 이건 라우트 쪽 문제입니다.)") +
            (patch?.component ? `\n\n→ 컴포넌트를 \`${patch.component}\` 로 봅니다.` : "") +
            (patch?.notes ? `\n   ${patch.notes}` : ""),
        },
      ]);
    } catch (e) {
      // 네트워크 끊김과 서버 응답은 다른 상태로 구분해 기록
      setTurns((t) => [
        ...t,
        { who: "agent", text: `라우트에 닿지 못했어요. ${e instanceof Error ? e.message : String(e)}` },
      ]);
    } finally {
      setSending(false);
    }
  }

  const frags = draft?.fragments ?? [];
  const chosen = frags.filter((f) => picked.has(f.id));
  const showing = chosen[cursor];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* ods-chrome 클래스 지정. 없으면 시스템 색이 그대로 보임 */}
      <DialogContent className="ods-chrome sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {step === "upload" && "목업 가져오기"}
            {step === "pick" && "어떤 컴포넌트를 가지고 올까요?"}
            {step === "refine" && "가져올 컴포넌트 다듬기"}
          </DialogTitle>
          <DialogDescription>
            {step === "upload" && "HTML 목업 파일을 올리면 쓸 수 있는 컴포넌트를 찾아 드려요."}
            {step === "pick" &&
              `${frags.length}개를 찾았어요. 가지고 올 것만 고르세요. 점수는 «얼마나 확실한가»입니다.`}
            {step === "refine" &&
              `${chosen.length}개 중 ${Math.min(cursor + 1, chosen.length)}번째. 아래에 고칠 점을 적어 보내세요.`}
          </DialogDescription>
        </DialogHeader>

        {renderNote && (
          <div className="rounded-md border bg-muted/50 px-3 py-2 text-xs whitespace-pre-wrap text-muted-foreground">
            {renderNote}
          </div>
        )}

        {error && (
          <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm whitespace-pre-wrap">
            {error}
          </div>
        )}

        {step === "upload" && (
          <div className="flex flex-col gap-3">
          <div
            onDragOver={(e) => { e.preventDefault; setDragging(true); }}
            onDragLeave={ => setDragging(false)}
            onDrop={(e) => { e.preventDefault; setDragging(false); accept(e.dataTransfer.files?.[0]); }}
            onClick={ => fileInput.current?.click}
            className={
              "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-10 text-center transition-colors " +
              (dragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-muted-foreground/50")
            }
          >
            <FileUp className="size-8 text-muted-foreground" />
            {file ? (
              <>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(0)}KB, 다른 파일을 고르려면 다시 누르세요
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium">여기에 끌어다 놓으세요</p>
                <p className="text-xs text-muted-foreground">또는 눌러서 파일을 고르세요 (.html)</p>
              </>
            )}
            <input
              ref={fileInput}
              type="file"
              accept=".html,.htm,text/html"
              className="hidden"
              onChange={(e) => accept(e.target.files?.[0])}
            />
          </div>
          <DraftShelf tick={shelfTick} onChanged={ => setError(null)} />
          </div>
        )}

        {step === "pick" && (
          <ScrollArea className="max-h-[28rem] pr-3">
            <div className="flex flex-col gap-3">
              {frags.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  부분을 하나도 못 찾았어요. 이건 «컴포넌트가 없다»가 아니라 «기댈 신호가 없었다»입니다.
                  이 자가 뿌리로 삼는 것은 <b>누를 수 있는 태그</b>(button·a·input·select)와{" "}
                  <b>의미 태그</b>(table·dialog·details…), 그리고 <b>role·aria-* 표시</b>뿐입니다.
                  순수 <code>&lt;div&gt;</code> 로만 만든 목업이면 아무것도 안 잡혀요.
                </p>
              )}
              {frags.map((f) => {
                const cands = draft?.candidates[f.id] ?? [];
                const top = cands[0];
                return (
                  <div key={f.id} className="flex gap-3">
                    <Checkbox
                      id={`frag-${f.id}`}
                      checked={picked.has(f.id)}
                      onCheckedChange={(v) =>
                        setPicked((s) => {
                          const n = new Set(s);
                          if (v) n.add(f.id); else n.delete(f.id);
                          return n;
                        })
                      }
                      className="mt-1"
                    />
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <Label htmlFor={`frag-${f.id}`} className="cursor-pointer text-sm font-medium">
                        {top ? (
                          <>
                            {top.component}
                            <span className="ml-2 font-normal text-muted-foreground">
                              {(top.score * 100).toFixed(0)}%
                            </span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">
                            <code>&lt;{f.tag}&gt;</code> , 닮은 것을 못 찾음
                          </span>
                        )}
                        {/* 같은 모양이 여럿이면 개수 표시. 버튼 71개를 한 줄로 그룹화해 표현 */}
                        {f.sameCount > 1 && (
                          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-normal text-muted-foreground">
                            이 목업에 {f.sameCount}개
                          </span>
                        )}
                      </Label>
                      {top?.because[0] && (
                        <p className="text-xs text-muted-foreground">{top.because[0]}</p>
                      )}
                      {top && top.cannotTellFromMarkup.length > 0 && (
                        <p className="text-xs text-amber-600 dark:text-amber-500">
                          {top.cannotTellFromMarkup[0]}. 가져온 뒤에 정하시게 됩니다
                        </p>
                      )}
                      <FragmentPreview f={f} head={head} />
                      <FragmentCode f={f} />
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        )}

        {step === "refine" && (
          <div className="flex flex-col gap-3">
            {chosen.length === 0 ? (
              <p className="text-sm text-muted-foreground">고른 것이 없어요. 뒤로 가서 골라 주세요.</p>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline" size="sm"
                    disabled={cursor === 0}
                    onClick={ => setCursor((c) => c - 1)}
                  >
                    이전
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {cursor + 1} / {chosen.length}
                  </span>
                  <Button
                    variant="outline" size="sm"
                    disabled={cursor >= chosen.length - 1}
                    onClick={ => setCursor((c) => c + 1)}
                  >
                    다음
                  </Button>
                </div>
                {showing && <FragmentPreview f={showing} head={head} />}
                <Separator />
                <ScrollArea className="max-h-40 pr-3">
                  <div className="flex flex-col gap-2">
                    {turns.length === 0 && (
                      <p className="text-xs text-muted-foreground">
                        고칠 점을 적어 보내세요. 예: «이건 Chip 이 아니라 Badge 예요», «지우기 버튼은 빼 주세요»
                      </p>
                    )}
                    {turns.map((t, i) => (
                      <div
                        key={i}
                        className={
                          "rounded-md px-3 py-2 text-sm whitespace-pre-wrap " +
                          (t.who === "user" ? "bg-primary/10 self-end" : "bg-muted")
                        }
                      >
                        {t.text}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2">
                  <Input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.nativeEvent.isComposing) send; }}
                    placeholder="어떻게 고칠까요?"
                  />
                  <Button onClick={send} disabled={!prompt.trim}>
                    <Send />
                    보내기
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        <DialogFooter className="gap-2 sm:justify-between">
          <Button
            variant="ghost"
            onClick={ => {
              if (step === "refine") setStep("pick");
              else if (step === "pick") setStep("upload");
              else onOpenChange(false);
            }}
          >
            {step === "upload" ? "닫기" : "뒤로"}
          </Button>
          {step === "upload" && (
            <Button onClick={analyze} disabled={!file || busy}>
              {busy ? <Loader2 className="animate-spin" /> : <Upload />}
              {busy ? "분석 중…" : "다음"}
            </Button>
          )}
          {step === "pick" && (
            <Button onClick={goRefine} disabled={picked.size === 0}>
              다음 ({picked.size}개)
            </Button>
          )}
          {step === "refine" && (
            // 등록 미완료
            <Button
              onClick={async  => {
                if (draft) {
                  try { await storeFor(DEFAULT_STORE).save(draft); } catch { /* 저장 실패 시 아래 안내를 표시 */ }
                }
                onOpenChange(false);
              }}
            >
              초안 저장하고 닫기
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ImportButton({ onOpen }: { onOpen:  => void }) {
  return (
    <Button variant="outline" size="sm" onClick={onOpen}>
      {/* 크기를 직접 지정하지 않음. size="sm"이 내부 svg 크기를 이미 맞춰 놓음 */}
      <Upload />
      가져오기
    </Button>
  );
}
