"use client";

import * as React from "react";
import { ArrowRight, FileUp, Loader2, Pencil, Play, Send, Trash2, Upload } from "lucide-react";
import { ChromeSteps } from "@/components/ChromeSteps";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { extract } from "@/ingest/extract";
import { extractHead, NO_FRAGMENTS_REASON } from "@/ingest/parse/html";
import { renderMockup } from "@/ingest/parse/render";
import { browserResources } from "@/ingest/resources.browser";
import { storeFor, DEFAULT_STORE } from "@/ingest/stores/registry";
import type { Draft, DraftSummary, Fragment } from "@/ingest/types";
import type { SystemDefinition } from "@/systems/types";

const STEPS = [
  { key: "upload", title: "올리기" },
  { key: "pick", title: "고르기" },
  { key: "refine", title: "다듬기" },
] as const;

type Step = (typeof STEPS)[number]["key"];

const MAX_HISTORY_TURNS = 20;

// 채팅 메시지 한 건
interface Turn {
  who: "user" | "agent";
  text: string;
}

function FragmentPreview({ f, head }: { f: Fragment; head: { head: string; bodyClass: string } }) {
  const [h, setH] = React.useState(56);
  // 측정 높이. 고정값인 h만으로는 잘림 여부를 알 수 없음
  const [natural, setNatural] = React.useState<number | null>(null);
  // 프래그먼트별 고유 채널 이름 지정. 채널을 구분하지 않으면 다른 iframe, 확장이 보낸 메시지까지 수신하는 문제가 있음
  const channel = React.useId;

  const opened = React.useMemo( => {
    const raw = f.html ?? "";
    const m = /^(<[a-zA-Z][^>]*?)\sclass="([^"]*)"/.exec(raw);
    if (!m) return raw;
    const CLOSED = new Set(["hidden", "invisible", "opacity-0", "pointer-events-none"]);
    const kept = m[2].split(/\s+/).filter((c) => c && !CLOSED.has(c));
    return m[1] + ` class="${kept.join(" ")}"` + raw.slice(m[0].length);
  }, [f.html]);

  const srcDoc = React.useMemo(
     =>
      `<!doctype html><html><head><meta charset="utf-8">${head.head}` +
      // 목업 스타일 덮어쓰기 금지. margin, padding만 반영하고 배경, 색은 유지
      `<style>html,body{margin:0;padding:0}` +
      // display 유지. block!important 쓰면 flex 배치 깨질 수 있음
      `body>*{position:static!important;inset:auto!important;opacity:1!important;` +
      `pointer-events:auto!important;transform:none!important;` +
      `max-width:100%!important;margin:0!important}` +
      `</style>` +
      // html은 루트에만 있음. ??는 빈 상자 오해 막으려 사용
      `</head><body class="${head.bodyClass}">${opened || "<!-- 이 조각의 마크업은 조상 안에 있습니다 -->"}` +
      `<script>(function{` +
      `var ic=function{try{window.lucide&&window.lucide.createIcons}catch(e){}};` +
      // scrollHeight, fixed/absolute는 0으로 계산. 루트 크기도 사용
      `var measure=function{var el=document.body.firstElementChild;` +
      `var r=el&&el.getBoundingClientRect?el.getBoundingClientRect:null;` +
      `return Math.max(document.documentElement.scrollHeight,document.body.scrollHeight,r?Math.ceil(r.height):0)};` +
      `var send=function{parent.postMessage({__ods:${JSON.stringify(channel)},h:measure},"*")};` +
      `ic;new ResizeObserver(send).observe(document.documentElement);send;` +
      // CDN 로드 지연 대비 2회 재시도 후 실패해도 조용히 처리
      `setTimeout(function{ic;send},150);setTimeout(function{ic;send},600)})<\/script>` +
      `</body></html>`,
    [opened, head, channel],
  );

  React.useEffect( => {
    const onMsg = (e: MessageEvent) => {
      const d = e.data as { __ods?: string; h?: number } | null;
      if (!d || d.__ods !== channel || typeof d.h !== "number") return;
      // 항목 그룹 표시, 상한 420
      setH(Math.min(Math.max(d.h, 40), 420));
      setNatural(d.h);
    };
    window.addEventListener("message", onMsg);
    return  => window.removeEventListener("message", onMsg);
  }, [channel]);

  const emptyInOriginal = React.useMemo( => {
    const doc = new DOMParser.parseFromString(`<body>${f.html ?? ""}</body>`, "text/html");
    const root = doc.body.firstElementChild;
    if (!root) return false;
    if (root.textContent?.trim) return false;
    return root.querySelectorAll("img, svg, canvas, video, input, textarea").length === 0;
  }, [f.html]);

  // 강제로 펼친 닫힘 요소 표시
  const wasClosed = opened !== (f.html ?? "");

  return (
    <>
    <iframe
      title={`${f.tag} 미리보기`}
      sandbox="allow-scripts"
      srcDoc={srcDoc}
      className="w-full rounded-md border"
      style={{ height: `${h}px` }}
    />
    {emptyInOriginal && (
      <p className="mt-0.5 text-xs text-amber-600 dark:text-amber-500">
        <b>원본에서도 비어 있는 부분</b>이에요. 겉만 있고 안쪽은 열 때 스크립트가 채워요.
        그리지 못한 게 아니에요.
      </p>
    )}
    {(wasClosed || (natural !== null && natural > 420)) && (
      <p className="mt-0.5 text-xs text-muted-foreground">
        {wasClosed && "원본에서 «닫힌» 상태(투명·클릭 불가)인 부분이라 펴서 보여 드려요. "}
        {natural !== null && natural > 420 && `ⓘ 실제 높이 ${natural}px 중 420px 까지만 보여요.`}
      </p>
    )}
    </>
  );
}

function kb(bytes: number | null): string {
  // null은 미확인, 0은 사용 안 함이라는 뜻. 0으로 적으면 오독될 수 있음
  return bytes === null ? "크기 모름" : `${(bytes / 1024).toFixed(0)}KB`;
}

function DraftShelf({
  tick, onChanged, onResume, busy,
}: {
  tick: number;
  onChanged:  => void;
  // 초안 재열기 경로. 없으면 이 목록이 삭제 전용으로 제한
  onResume: (id: string) => void;
  // 이어서 여는 중인지 확인, 중복 클릭 방지 처리
  busy: boolean;
}) {
  const [rows, setRows] = React.useState<DraftSummary[] | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [armed, setArmed] = React.useState<string | null>(null);
  // ③단계는 경고창이 떠 있는 상태. armed와 다른 상태이며 서로 연결만 되어 있음
  const [confirming, setConfirming] = React.useState<string | null>(null);

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
        쌓인 초안을 못 읽었어요. {err} <b>초안이 없다는 뜻은 아니에요.</b>
      </p>
    );
  }
  if (!rows || rows.length === 0) return null;

  // 창이 가리키는 행. 목록이 갱신되면 사라질 수 있어 매번 새로 찾기
  const confirmingRow =
    confirming === null ? null : (rows.find((r) => r.id === confirming) ?? null);
  const known = rows.filter((r) => r.bytes !== null);
  const total = known.reduce((s, r) => s + (r.bytes ?? 0), 0);
  const unknown = rows.length - known.length;

  return (
    <details className="rounded-md border bg-muted/30 px-3 py-2">
      <summary className="cursor-pointer text-xs text-muted-foreground">
        쌓인 초안 {rows.length}개 · 합계 약 {kb(total)}
        {unknown > 0 && ` (+ 크기 모르는 것 ${unknown}개)`}, 이어서 하시거나, 공간이 부족하면 지우세요
      </summary>
      <div className="mt-2 flex flex-col gap-1">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center gap-2 text-xs">
            <span className="min-w-0 flex-1 truncate" title={r.filename}>
              {r.name ?? r.filename}
              <span className="ml-2 text-muted-foreground">
                조각 {r.fragmentCount}개 · 답할 물음 {r.openQuestions}개
                {r.updatedAt && ` · ${r.updatedAt.slice(0, 10)}`}
              </span>
            </span>
            <span className="tabular-nums text-muted-foreground">{kb(r.bytes)}</span>
            {/* 삭제 대신 다른 동작을 왼쪽에 배치 */}
            {armed !== r.id && (
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2"
                disabled={busy}
                onClick={ => onResume(r.id)}
              >
                <Play className="size-3.5" />
                이어서 하기
              </Button>
            )}
            {armed === r.id ? (
              <>
                <span className="text-destructive">되돌릴 수 없어요.</span>
                <Button
                  size="sm"
                  variant="destructive"
                  className="h-6 px-2"
                  onClick={ => {
                    setArmed(null);
                    setConfirming(r.id);
                  }}
                >
                  삭제하기
                </Button>
                <Button size="sm" variant="ghost" className="h-6 px-2" onClick={ => setArmed(null)}>
                  취소
                </Button>
              </>
            ) : (
              // ① 단계
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

      {/* 되돌릴 수 없는 결정에 경고창 표시 */}
      <AlertDialog open={confirming !== null} onOpenChange={(o) => { if (!o) setConfirming(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말 지우시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmingRow ? (
                <>
                  <b>{confirmingRow.name ?? confirmingRow.filename}</b>
                  {", "}
                  조각 {confirmingRow.fragmentCount}개 · 아직 답 안 한 물음 {confirmingRow.openQuestions}개 ·{" "}
                  {kb(confirmingRow.bytes)}
                  <br />
                  {/* 삭제될 항목 수 표시. 확인 문구만으론 무엇을 잃는지 알 수 없음 */}
                  <span className="text-destructive">
                    지우면 <b>되돌릴 수 없어요.</b> 여기서 하신 판단도 함께 사라져요.
                  </span>
                </>
              ) : (
                "지우면 되돌릴 수 없어요."
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>그대로 둘게요</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-white hover:bg-destructive/90"
              onClick={async  => {
                const id = confirming;
                setConfirming(null);
                if (!id) return;
                try {
                  await storeFor(DEFAULT_STORE).remove(id);
                  onChanged;
                  await reload;
                } catch (e) {
                  // 삭제 실패 시 오류 표시. 조용히 넘기면 사용자가 삭제된 것으로 오해할 수 있음
                  setErr(e instanceof Error ? e.message : String(e));
                }
              }}
            >
              지웁니다
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
  // 이름 수정 중인 항목 id
  const [renaming, setRenaming] = React.useState<string | null>(null);
  const [renameText, setRenameText] = React.useState("");
  // 초안 목록 재조회 신호. 저장 실패 시 가장 중요하며 확인할 것은 현재 점유 현황임
  const [shelfTick, setShelfTick] = React.useState(0);
  const fileInput = React.useRef<HTMLInputElement>(null);
  // 닫기 확인 창 표시 여부. 닫지 않고 확인을 묻는 중이라는 뜻임
  const [confirmClose, setConfirmClose] = React.useState(false);

  const started = step !== "upload" || file !== null;

  // 닫기 요청을 한 곳으로 모음. 빠지면 확인창 동작이 경로마다 달라지는 문제 있음
  const requestClose = React.useCallback( => {
    if (started) setConfirmClose(true);
    else onOpenChange(false);
  }, [started, onOpenChange]);

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
      setError(`HTML 파일이 아닌 것 같아요. '${f.name}'\n확장자 확인 후 다시 업로드해주세요`);
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
      const mockupHead = extractHead(html);
      setHead(mockupHead);

      // 목업 실행 후 추출. 미실행 시 JS 렌더 요소 다수 누락
      const rendered = await renderMockup(html);
      setRenderNote(
        rendered.fellBackTo
          ? `목업 스크립트를 못 돌렸어요. ${rendered.fellBackTo}.\n` +
            `   그래서 스크립트가 만드는 부분은 안 보여요. 컴포넌트가 없는 게 아니라 반영되지 않은 것뿐이에요.`
          : rendered.after > rendered.before
            ? `스크립트를 돌려 마크업이 ${(rendered.after / rendered.before).toFixed(1)}배가 됐어요 ` +
              `(태그 ${rendered.before}개 → ${rendered.after}개). 글자에서 태그를 세어 나온 수라, ` +
              `브라우저가 세는 요소 수와는 조금 다를 수 있어요.`
            : null,
      );

      const raw = await extract(
        {
          filename: file.name,
          // 마크업은 렌더링본, head/CDN은 원본 사용. 둘 다 필요해 원본과 같음
          html: `<!doctype html><html><head></head><body>${rendered.html}</body></html>`,
          slug: system.slug,
          allSlugs: [system.slug],
        },
        browserResources,
      );
      const d: Draft = { ...raw, preview: mockupHead };
      setDraft(d);
      // 초기 상태 전체 미선택. 전부 켜두면 확인 절차 없이 다음으로 넘어가는 문제 있음
      setPicked(new Set);
      await storeFor(DEFAULT_STORE).save(d);
      setStep("pick");
    } catch (e) {
      // 저장 실패 시 목록 다시 읽기. 오류만 띄우면 삭제 판단 근거가 화면에 없음
      setShelfTick((t) => t + 1);
      // 실패 시 창 유지하며 오류 이유 표시. 닫으면 성공으로 오인할 수 있음
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  async function saveName(fragId: string, raw: string) {
    const value = raw.trim;
    if (!draft) return;
    const names = { ...(draft.names ?? {}) };
    if (value) names[fragId] = value;
    else delete names[fragId]; // 비우면 미지정 상태로 되돌리기
    const next: Draft = {
      ...draft,
      names,
      unresolved: draft.unresolved.map((u) =>
        u.about === "component" && u.target === fragId
          ? { ...u, answer: value || null }
          : u,
      ),
    };
    setDraft(next);
    setRenaming(null);
    try {
      await storeFor(DEFAULT_STORE).save(next);
    } catch (e) {
      // 저장 실패 시 화면에도 표시. 안 그러면 정상 처리된 것으로 오인할 수 있음
      setShelfTick((t) => t + 1);
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  async function resume(id: string) {
    setBusy(true);
    setError(null);
    try {
      const d = await storeFor(DEFAULT_STORE).load(id);
      if (!d) {
        // null은 저장소 없음만 의미. 조회 실패는 예외로 전달
        setError("그 초안이 저장소에 없어요. 이미 지워졌을 수 있어요.");
        setShelfTick((t) => t + 1);
        return;
      }
      setDraft(d);
      setPicked(new Set(d.selected ?? []));
      setCursor(0);
      setTurns([]);
      setPrompt("");
      setRenaming(null);
      // 없음과 빈 값을 구분. 필드 추가 전 저장된 초안엔 preview 가 없음
      setHead(d.preview ?? { head: "", bodyClass: "" });
      setRenderNote(
        d.preview
          ? null
          : "이 초안은 미리보기용 스타일을 안 담고 저장됐어요. 부분이 밋밋하게 보여요. " +
            "목업에 스타일이 없어서가 아니라 그때 담기지 않아서예요. 다시 올리시면 제대로 보여요.",
      );
      setStep(d.selected === null ? "pick" : "refine");
    } catch (e) {
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
          history: turns.slice(-MAX_HISTORY_TURNS).map((t) => ({
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
            ? /* 404 응답에 원인 설명 없이 아는 정보만 표시 */
              "AI 다듬기가 이 서버에 없어요.\n\n" +
              "고장이 아니라 아직 없는 것입니다.\n" +
              "고른 부분과 판단은 그대로 저장됩니다. 여기서 못 하는 것은 «말로 고치기» 하나뿐이에요."
            : res.status === 503
              ? /* 인증 오류 메시지에 꼬리말 없이 그대로 표시 */
                body?.error ??
                "AI 를 부를 준비가 안 됐다고 서버가 알려 왔어요. (까닭은 안 실어 보냈습니다.)"
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
            (patch?.component ? `\n\n→ 이 컴포넌트를 \`${patch.component}\` 로 볼게요.` : "") +
            (patch?.notes ? `\n   ${patch.notes}` : ""),
        },
      ]);
    } catch (e) {
      // 네트워크 끊김과 서버 응답은 다른 상태로 구분해 기록
      setTurns((t) => [
        ...t,
        { who: "agent", text: `서버에 닿지 못했어요. ${e instanceof Error ? e.message : String(e)}` },
      ]);
    } finally {
      setSending(false);
    }
  }

  const frags = draft?.fragments ?? [];
  const chosen = frags.filter((f) => picked.has(f.id));
  const showing = chosen[cursor];

  return (
    // 닫기 요청 일괄 처리. 진행 중이면 확인창 표시 후 닫기
    <Dialog open={open} onOpenChange={(next) => (next ? onOpenChange(true) : requestClose)}>
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
              `${frags.length}개를 찾았어요. 가지고 올 것만 고르세요. 점수는 얼마나 확실한지를 나타내요.`}
            {step === "refine" &&
              `${chosen.length}개 중 ${Math.min(cursor + 1, chosen.length)}번째. 아래에 고칠 점을 적어 보내세요.`}
          </DialogDescription>
        </DialogHeader>

        {/* 단계 표시기만 antd 사용 */}
        <ChromeSteps
          steps={STEPS}
          current={STEPS.findIndex((s) => s.key === step)}
          label="목업 가져오기 단계"
        />

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
          <DraftShelf
            tick={shelfTick}
            onChanged={ => setError(null)}
            onResume={(id) => void resume(id)}
            busy={busy}
          />
          </div>
        )}

        {step === "pick" && (
          <ScrollArea className="max-h-[28rem] pr-3">
            <div className="flex flex-col gap-3">
              {frags.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  컴포넌트를 하나도 못 찾았어요. 컴포넌트가 없는 게 아니라, 무엇인지 알아볼 단서가 없었어요.
                  {/* 규칙 설명을 직접 적지 않고 파서가 내보내는 문장을 그대로 사용 */}
                  <br />
                  {NO_FRAGMENTS_REASON}
                </p>
              )}
              {frags.map((f) => {
                const cands = draft?.candidates[f.id] ?? [];
                const top = cands[0];
                // 사람이 지정한 이름이 있으면 그 값 우선 사용
                const named = draft?.names?.[f.id];
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
                      {renaming === f.id ? (
                        <div className="flex items-center gap-1">
                          <Input
                            autoFocus
                            value={renameText}
                            onChange={(ev) => setRenameText(ev.target.value)}
                            onKeyDown={(ev) => {
                              if (ev.key === "Enter") void saveName(f.id, renameText);
                              if (ev.key === "Escape") setRenaming(null);
                            }}
                            placeholder="이 컴포넌트의 이름"
                            className="h-7 text-sm"
                          />
                          <Button size="sm" className="h-7 px-2" onClick={ => void saveName(f.id, renameText)}>
                            저장
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 px-2" onClick={ => setRenaming(null)}>
                            취소
                          </Button>
                        </div>
                      ) : (
                        <Label htmlFor={`frag-${f.id}`} className="cursor-pointer text-sm font-medium">
                        {named ? (
                          <>
                            {named}
                            {/* 사람이 정한 값과 자동 추정값 구분 표시 */}
                            <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-normal text-primary">
                              직접 정하셨어요
                            </span>
                            {top && top.component !== named && (
                              <span className="ml-2 font-normal text-muted-foreground line-through">
                                {top.component}
                              </span>
                            )}
                          </>
                        ) : top ? (
                          <>
                            {top.component}
                            <span className="ml-2 font-normal text-muted-foreground">
                              {(top.score * 100).toFixed(0)}%
                            </span>
                          </>
                        ) : (
                          <span className="text-muted-foreground">
                            <code>&lt;{f.tag}&gt;</code> . 닮은 것을 못 찾았어요
                          </span>
                        )}
                        {/* 같은 모양이 여럿이면 개수 표시. 버튼 71개를 한 줄로 그룹화해 표현 */}
                        {f.sameCount > 1 && (
                          <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-normal text-muted-foreground">
                            이 목업에 {f.sameCount}개 있어요
                          </span>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="ml-1 h-6 px-1.5 text-muted-foreground"
                          onClick={(ev) => {
                            // 라벨 안 클릭의 체크박스 전파 차단
                            ev.preventDefault;
                            ev.stopPropagation;
                            setRenameText(named ?? top?.component ?? f.tag);
                            setRenaming(f.id);
                          }}
                        >
                          <Pencil className="size-3.5" />
                          <span className="sr-only">이름 고치기</span>
                        </Button>
                        </Label>
                      )}
                      {top?.because[0] && (
                        <p className="text-xs text-muted-foreground">{top.because[0]}</p>
                      )}
                      {top && top.cannotTellFromMarkup.length > 0 && (
                        <p className="text-xs text-amber-600 dark:text-amber-500">
                          {top.cannotTellFromMarkup[0]} 가져오신 뒤에 어느 쪽인지 골라 주세요.
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
              else requestClose;
            }}
          >
            {step === "upload" ? "닫기" : "뒤로"}
          </Button>
          {step === "upload" && (
            <Button onClick={analyze} disabled={!file || busy}>
              {/* 버튼은 업로드 아닌 다음 이동 기능 */}
              {busy ? (
                <>
                  <Loader2 className="animate-spin" />
                  분석 중…
                </>
              ) : (
                <>
                  다음
                  <ArrowRight />
                </>
              )}
            </Button>
          )}
          {step === "pick" && (
            <Button onClick={goRefine} disabled={picked.size === 0}>
              다음 ({picked.size}개)
              <ArrowRight />
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

        <AlertDialog open={confirmClose} onOpenChange={(o) => { if (!o) setConfirmClose(false); }}>
          <AlertDialogContent className="ods-chrome">
            <AlertDialogHeader>
              <AlertDialogTitle>정말 닫으시겠어요?</AlertDialogTitle>
              <AlertDialogDescription>
                {step === "upload"
                  ? "고른 파일이 사라져요. 아직 아무것도 저장되지 않았어요. 다시 올리시면 됩니다."
                  : "화면만 처음으로 돌아가요. 저장된 초안은 그대로 남아 있어서 나중에 이어서 하실 수 있어요."}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {/* 두 버튼 글자를 실제 동작 그대로 표기 */}
              <AlertDialogCancel>계속 할게요</AlertDialogCancel>
              <AlertDialogAction onClick={ => { setConfirmClose(false); onOpenChange(false); }}>
                닫을게요
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
