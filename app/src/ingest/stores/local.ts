import type { Draft, DraftSummary, Store } from "../types";

const PREFIX = "ods.ingest.draft.";

function keyOf(id: string): string {
  return PREFIX + id;
}

// 글자 수 아닌 바이트로 계산. UTF-16이라 글자당 2바이트 차지
function bytesOf(raw: string): number {
  return raw.length * 2;
}

function summarize(d: Draft, raw: string): DraftSummary {
  return {
    id: d.id,
    name: d.name,
    filename: d.source.filename,
    createdAt: d.createdAt,
    updatedAt: d.updatedAt,
    fragmentCount: d.fragments.length,
    openQuestions: d.unresolved.filter((u) => u.answer === null).length,
    bytes: bytesOf(raw),
  };
}

function kb(bytes: number): string {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

export const local: Store = {
  async save(d: Draft): Promise<void> {
    const body = JSON.stringify({ ...d, updatedAt: new Date.toISOString });
    try {
      localStorage.setItem(keyOf(d.id), body);
    } catch (e) {
      // 용량 초과 시 경고 표시

      let stored: Array<{ id: string; bytes: number }> = [];
      let used = 0;
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (!k?.startsWith(PREFIX)) continue;
          const b = bytesOf(localStorage.getItem(k) ?? "");
          used += b;
          stored.push({ id: k.slice(PREFIX.length), bytes: b });
        }
        stored = stored.sort((a, b) => b.bytes - a.bytes).slice(0, 3);
      } catch {
      }

      throw new Error(
        `초안을 저장하지 못했어요. 브라우저 저장 공간이 찼어요.\n` +
          `  이 초안: ${kb(bytesOf(body))} · 이미 쌓인 초안 ${stored.length > 0 ? `${stored.length}개 이상, 합계 ${kb(used)}` : "(세지 못함)"}\n` +
          (stored.length > 0
            ? `  큰 것부터: ${stored.map((s) => `${s.id}(${kb(s.bytes)})`).join(" · ")}\n`
            : "") +
          `\n창 첫 화면의 «쌓인 초안» 에서 안 쓰는 것을 지우고 다시 «다음» 을 누르세요.\n` +
          `지운 초안은 되돌릴 수 없어요. 무엇을 지울지는 크기를 보고 고르시면 됩니다.\n` +
          `원래 오류: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  },

  async usage: Promise<{ usedBytes: number; quotaBytes: number | null }> {
    let usedBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k?.startsWith(PREFIX)) continue;
      usedBytes += bytesOf(localStorage.getItem(k) ?? "");
    }
    return { usedBytes, quotaBytes: null };
  },

  async load(id: string): Promise<Draft | null> {
    const raw = localStorage.getItem(keyOf(id));
    if (raw === null) return null;
    try {
      return JSON.parse(raw) as Draft;
    } catch {
      // 누락 값과 손상 값 구분 처리
      throw new Error(`초안 '${id}' 이 깨져 있어요. 저장 중에 창이 닫혔을 수 있어요.`);
    }
  },

  async list: Promise<DraftSummary[]> {
    const out: DraftSummary[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k?.startsWith(PREFIX)) continue;
      const raw = localStorage.getItem(k);
      if (!raw) continue;
      try {
        out.push(summarize(JSON.parse(raw) as Draft, raw));
      } catch {
        // 깨진 항목 제외 후 개수 집계
        out.push({
          id: k.slice(PREFIX.length),
          name: null,
          filename: "(읽을 수 없음)",
          createdAt: "",
          updatedAt: "",
          fragmentCount: 0,
          openQuestions: 0,
          // 깨진 요소도 크기 파악. 공간 차지 여부로 삭제 가능성 판단
          bytes: bytesOf(raw),
        });
      }
    }
    return out.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  },

  async remove(id: string): Promise<void> {
    localStorage.removeItem(keyOf(id));
  },
};
