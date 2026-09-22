import { collectTokens } from "./tokens";
import { emitterFor } from "./emit/registry";
import {
  EXPORT_KIND, EXPORT_VERSION, wantsHtml, wantsNext,
  type ExportFile, type ExportPayload, type ExportRequest, type ExportResources,
} from "./types";

// 선택값의 계약 포함 여부 확인
function assertSelection(req: ExportRequest, res: ExportResources): void {
  const known = new Map(res.axes.map((a) => [a.prop, new Set(a.values)]));
  for (const [prop, values] of Object.entries(req.values)) {
    const allowed = known.get(prop);
    if (!allowed) {
      throw new Error(`'${res.source.component}' 에는 '${prop}' 라는 항목이 없어요.`);
    }
    for (const v of values) {
      if (!allowed.has(v)) {
        throw new Error(`'${prop}' 에는 '${v}' 라는 값이 없어요.`);
      }
    }
  }
  for (const p of req.parts) {
    if (!res.partNames.includes(p)) {
      throw new Error(`'${res.source.component}' 에 '${p}' 부품이 없어요.`);
    }
  }
  for (const s of req.states) {
    if (!res.stateNames.includes(s)) {
      throw new Error(`'${res.source.component}' 에 '${s}' 상태가 없어요.`);
    }
  }
}

export function buildPayload(req: ExportRequest, res: ExportResources): ExportPayload {
  assertSelection(req, res);

  const files: ExportFile[] = [];

  if (res.lib) {
    return {
      kind: EXPORT_KIND,
      version: EXPORT_VERSION,
      source: res.source,
      selection: {
        format: req.format,
        values: req.values,
        parts: req.parts,
        states: req.states,
      },
      files: emitterFor("lib")(req, res),
    };
  }

  if (wantsHtml(req.format)) {
    files.push(...emitterFor("html")(req, res));
  }

  if (wantsNext(req.format)) {
    files.push(...emitterFor("next")(req, res));
    // 생성물 그대로 사용. 다시 생성하면 두 벌이 되어 서로 어긋나 있음
    files.push({
      path: `${res.exportName}.tsx`,
      type: "text/typescript-jsx",
      text: res.componentSource,
    });
    files.push({ path: "cx.ts", type: "text/typescript", text: res.cxSource });
    // react/{색}/styles.css 사용 금지. 상대경로라 밖에서 불러올 수 없음
    const tokens = collectTokens(res.componentCss, res.vars);
    files.push({
      path: "styles.css",
      type: "text/css",
      text: `/* ${res.source.componentTitle}, ${res.source.systemName}\n`
        + ` * minari-design-storybook 내보내기 산출물.\n`
        + ` * 이 컴포넌트가 실제로 읽는 토큰만 추렸습니다 (${tokens.used.length}개).\n`
        + ` * 모드 블록(dark · high-contrast)은 원본 그대로입니다.\n */\n\n`
        + `${tokens.css}\n\n${res.componentCss.trim}\n`,
    });
  }

  return {
    kind: EXPORT_KIND,
    version: EXPORT_VERSION,
    source: res.source,
    selection: {
      format: req.format,
      values: req.values,
      parts: req.parts,
      states: req.states,
    },
    files,
  };
}
