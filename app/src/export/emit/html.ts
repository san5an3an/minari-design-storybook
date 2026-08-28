import type { ExportFile, ExportRequest, ExportResources } from "../types";
import { sheetsFor, type Sheet } from "../rows";
import { collectTokens } from "../tokens";

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&quot;");
}

const SHEET_CSS = `
  .x-page { margin: 0; padding: 2rem; background: #ffffff; color: #171717;
            font: 400 0.875rem/1.6 ui-sans-serif, system-ui, sans-serif; }
  .x-h1 { margin: 0 0 0.25rem; font-size: 1.125rem; font-weight: 600; }
  .x-lead { margin: 0 0 1.75rem; color: #737373; }
  .x-row { display: flex; align-items: center; gap: 1rem; padding: 0.875rem 0;
           border-top: 0.0625rem solid #e5e5e5; }
  .x-key { flex: 0 0 10rem; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
           font-size: 0.75rem; color: #525252; }
  .x-specimen { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; }
  @media (prefers-color-scheme: dark) {
    .x-page { background: #0a0a0a; color: #fafafa; }
    .x-row { border-top-color: #ffffff1a; }
    .x-key { color: #a1a1a1; }
  }
`.trim;

function sheetBody(sheet: Sheet, req: ExportRequest, res: ExportResources): string {
  const parts = res.partNames.filter((p) => req.parts.includes(p));
  return sheet.rows
    .map((row) => {
      // 하위 컴포넌트 없을 때 root 안에 버전 이름 표기
      const markup = res.renderComponent({ props: row.props, parts, text: row.label });
      return [
        `  <div class="x-row">`,
        `    <div class="x-key">${escapeHtml(sheet.key)} = ${escapeHtml(row.label)}</div>`,
        `    <div class="x-specimen">${markup}</div>`,
        `  </div>`,
      ].join("\n");
    })
    .join("\n");
}

export function emitHtml(req: ExportRequest, res: ExportResources): ExportFile[] {
  // 토큰은 장마다 다시 추리지 않음. 같은 컴포넌트면 결과가 같아 다시 훑을 이유 없음
  const tokens = collectTokens(res.componentCss, res.vars);

  return sheetsFor(req, res.axes).map((sheet) => {
    const title = `${res.source.systemName} · ${res.source.componentTitle}, ${sheet.title}`;
    const text = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<!-- minari-design-storybook 에서 내보냄, ${escapeHtml(res.source.slug)} / ${escapeHtml(res.source.component)}

     토큰은 이 컴포넌트가 실제로 읽는 것만 추렸습니다 (${tokens.used.length}개).

     모드. 다크는 보는 사람의 OS 설정을 따라갑니다.
       고정하려면 <html> 에 속성을 주세요:
         <html data-theme="dark">           어두운 패널로 못 박기
         <html data-theme="high-contrast">  고대비 패널로 못 박기
       속성이 없으면 라이트이고, OS 가 어두우면 어두운 패널이 걸립니다. -->
<style>
${tokens.css}
</style>
<style>
${res.componentCss.trim}
</style>
<style>
${SHEET_CSS}
</style>
</head>
<body class="x-page">
<h1 class="x-h1">${escapeHtml(res.source.componentTitle)}</h1>
<p class="x-lead">${escapeHtml(res.source.systemName)} · ${escapeHtml(sheet.title)}. 이 장에서는 <code>${escapeHtml(sheet.key)}</code> 만 변합니다.</p>
${sheetBody(sheet, req, res)}
</body>
</html>
`;
    return {
      path: `${res.source.component}.${sheet.key}.html`,
      type: "text/html",
      text,
    };
  });
}
