import type { ExportPayload, ExportRequest, LibResources } from "./types";
import { EXPORT_KIND } from "./types";

// 라이브러리 경로에서 선택. 창이 열릴 때 한 번 조회
export interface LibAxes {
  componentName: string;
  title: string;
  libTitle: string;
  props: LibResources["props"];
}

// 공식 선택지 수신. JSON 직접 import 시 앱이 베이스에 종속되는 문제 있음
export async function requestLibAxes(baseKey: string, component: string): Promise<LibAxes> {
  const q = new URLSearchParams({ baseKey, component });
  let res: Response;
  try {
    res = await fetch(`/api/export?${q}`);
  } catch {
    throw new Error("서버에 닿지 못했어요. 개발 서버가 꺼져 있거나 다시 시작하는 중일 수 있어요.");
  }
  const body: unknown = await res.json.catch( => null);
  if (!res.ok) {
    const m = body && typeof body === "object" && typeof (body as { error?: unknown }).error === "string"
      ? (body as { error: string }).error
      : `서버가 ${res.status} 로 답했어요.`;
    throw new Error(m);
  }
  return body as LibAxes;
}

export async function requestExport(req: ExportRequest): Promise<ExportPayload> {
  let res: Response;
  try {
    res = await fetch("/api/export", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req),
    });
  } catch {
    throw new Error("서버에 닿지 못했어요. 개발 서버가 꺼져 있거나 다시 시작하는 중일 수 있어요.");
  }

  const body: unknown = await res.json.catch( => null);

  if (!res.ok) {
    const message =
      body && typeof body === "object" && typeof (body as { error?: unknown }).error === "string"
        ? (body as { error: string }).error
        : `서버가 ${res.status} 로 답했어요.`;
    throw new Error(message);
  }

  // 응답 형식 검증. 프록시나 오프라인 페이지가 대신 응답하면 빈 zip만 생성되는 문제가 있음
  const p = body as Partial<ExportPayload> | null;
  if (!p || p.kind !== EXPORT_KIND || !Array.isArray(p.files)) {
    throw new Error("서버가 내보내기 봉투가 아닌 것을 돌려줬어요.");
  }
  return p as ExportPayload;
}
