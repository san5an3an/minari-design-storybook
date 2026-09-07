import { buildPayload } from "@/export/build";
import { isLibBase } from "@/export/lib/registry";
import { allowedLibComponents, loadLibResources } from "@/export/resources.lib.node";
import { allowedComponents, allowedSlugs, loadResources } from "@/export/resources.node";
import { FORMATS, wantsHtml, type ExportRequest, type Format } from "@/export/types";

// fs 사용이라 edge 아님. 명시 안 하면 기본값 변경 시 조용히 깨질 수 있음
export const runtime = "nodejs";

function bad(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

// 글자 배열 여부, 아니면 null
function strings(v: unknown): string[] | null {
  if (!Array.isArray(v)) return null;
  return v.every((x) => typeof x === "string") ? (v as string[]) : null;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const baseKey = url.searchParams.get("baseKey") ?? "";
  const component = url.searchParams.get("component") ?? "";
  if (!/^[a-z0-9-]+$/.test(baseKey)) return bad("baseKey 가 없거나 모양이 아니에요.");
  if (!isLibBase(baseKey)) return bad(`'${baseKey}' 는 라이브러리 길이 아니에요.`);

  const components = await allowedLibComponents(baseKey);
  if (!components.includes(component)) {
    return bad(`'${baseKey}' 공식 목록에 '${component}' 가 없어요.`);
  }

  try {
    // 축과 무관한 색상 prop 여부. 존재하는 색 하나로 경로 확인
    const slug = (await allowedSlugs)[0];
    const res = await loadLibResources(slug, baseKey, component);
    return Response.json({
      componentName: res.lib!.componentName,
      title: res.source.componentTitle,
      libTitle: res.lib!.title,
      props: res.lib!.props,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    return bad(message, /없어요\.$/.test(message) ? 400 : 500);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json;
  } catch {
    return bad("본문이 JSON 이 아니에요.");
  }
  if (typeof body !== "object" || body === null) return bad("본문이 객체가 아니에요.");
  const b = body as Record<string, unknown>;

  const { slug, baseKey, component, format } = b;
  if (typeof slug !== "string") return bad("slug 가 없어요.");
  if (typeof component !== "string") return bad("component 가 없어요.");
  if (typeof baseKey !== "string" || !/^[a-z0-9-]+$/.test(baseKey)) {
    return bad("baseKey 가 없거나 모양이 아니에요.");
  }
  if (typeof format !== "string" || !(FORMATS as readonly string[]).includes(format)) {
    return bad(`format 은 ${FORMATS.join(" · ")} 중 하나여야 해요.`);
  }

  // 경로를 알려진 이름 목록으로 검사
  const slugs = await allowedSlugs;
  if (!slugs.includes(slug)) return bad(`'${slug}' 이라는 색이 없어요.`);

  // 라이브러리마다 다른 목록. antd, MUI의 component는 슬러그라 계약에 없음
  const lib = isLibBase(baseKey);
  const components = lib ? await allowedLibComponents(baseKey) : await allowedComponents(slug);
  if (!components.includes(component)) {
    return bad(
      lib
        ? `'${baseKey}' 공식 목록에 '${component}' 가 없어요.`
        : `'${slug}' 에 '${component}' 라는 컴포넌트가 없어요.`,
    );
  }

  if (lib && wantsHtml(format as Format)) {
    return bad(
      `'${baseKey}' 는 HTML 로 내보낼 수 없어요. 정적 HTML 에는 그쪽 런타임이 없어서 ` +
        `이 프로젝트 토큰이 안 실려요. 'next' 나 'theme' 로 골라 주세요.`,
    );
  }

  const parts = strings(b.parts);
  const states = strings(b.states);
  if (!parts) return bad("parts 가 글자 배열이 아니에요.");
  if (!states) return bad("states 가 글자 배열이 아니에요.");

  const rawValues = b.values;
  if (typeof rawValues !== "object" || rawValues === null || Array.isArray(rawValues)) {
    return bad("values 가 객체가 아니에요.");
  }
  const values: Record<string, string[]> = {};
  for (const [k, v] of Object.entries(rawValues as Record<string, unknown>)) {
    const list = strings(v);
    if (!list) return bad(`values.${k} 가 글자 배열이 아니에요.`);
    values[k] = list;
  }

  const req: ExportRequest = {
    slug, baseKey, component, format: format as Format, values, parts, states,
  };

  try {
    const res = lib
      ? await loadLibResources(slug, baseKey, component)
      : await loadResources(slug, baseKey, component);
    return Response.json(buildPayload(req, res));
  } catch (e) {
    // 없는 필드나 값 등 계약 위반 요청은 400, 파일 누락 등 서버 측 문제는 500 반환
    const message = e instanceof Error ? e.message : String(e);
    return bad(message, /없어요\.$/.test(message) ? 400 : 500);
  }
}
