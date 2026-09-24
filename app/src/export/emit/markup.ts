import { BASE_LAYER, collectTokens } from "../tokens";
import type { ExportFile, ExportRequest, ExportResources } from "../types";

// 예제를 section으로 감싸고 key 표시
function section(key: string, html: string): string {
  return `    <section class="example" data-example="${key.replace(/"/g, "&quot;")}">\n`
    + `      <h2>${key.replace(/[<&]/g, (c) => (c === "<" ? "&lt;" : "&amp;"))}</h2>\n`
    + `${html.split("\n").map((l) => `      ${l}`).join("\n")}\n`
    + `    </section>`;
}

// 마크업 전용은 선택 항목 없음, props 빈 배열로 하위 컴포넌트 없이 html 고정임
export function emitMarkup(_req: ExportRequest, res: ExportResources): ExportFile[] {
  const lib = res.lib;
  if (!lib?.markup) {
    // 빈 배열을 조용히 반환하지 않음. 받는 쪽에서 선택 없음으로 오해하는 문제가 있음
    throw new Error(
      `'${res.source.baseKey}' 는 마크업 전용 베이스가 아니에요. `
        + `이 방출기를 부른 위치(build.ts)의 분기가 잘못됐어요.`,
    );
  }
  const examples = lib.markup.examples;
  if (examples.length === 0) {
    throw new Error(
      `'${res.source.baseKey}' 의 '${res.source.component}' 에 실을 예제가 없어요. `
        + `demos 에 그 슬러그가 있는지 확인하세요.`,
    );
  }

  const tokens = collectTokens(
    [...examples.map((e) => e.html), lib.themeSource].join("\n"),
    res.vars,
    { alwaysInclude: BASE_LAYER },
  );

  const files: ExportFile[] = [];

  files.push({
    path: "vars.css",
    type: "text/css",
    // 호출된 이름 전체 포함 여부 기록. 누락돼도 에러 없어 검증 기준은 동작 여부 아닌 개수임
    text: `/* ${res.source.componentTitle}, ${res.source.systemName}\n`
      + ` * minari-design-storybook 내보내기 산출물.\n`
      + ` * 이 예제와 테마가 실제로 읽는 토큰만 추렸습니다 (${tokens.used.length}개).\n`
      + (tokens.missing.length > 0
        ? ` *\n * 아래 ${tokens.missing.length}개는 참조는 하는데 값을 찾지 못했습니다.\n`
          + ` *    그 부분은 색이나 크기가 적용되지 않은 채로 보입니다.\n`
          + tokens.missing.map((n) => ` *      ${n}\n`).join("")
        : "")
      + ` */\n\n${tokens.css}\n`,
  });

  files.push({
    path: `theme.${lib.themeExt}`,
    type: lib.themeExt === "css" ? "text/css" : "text/typescript",
    // 생성물 그대로 사용. 다시 만들면 두 벌이 되어 서로 어긋나는 문제가 있음
    text: lib.themeSource,
  });

  const links = [`<link rel="stylesheet" href="./vars.css" />`]
    .concat(lib.themeExt === "css" ? [`<link rel="stylesheet" href="./theme.css" />`] : [])
    .concat(lib.markup.vendorCss.map((h) => `<link rel="stylesheet" href="${h}" />`))
    .map((l) => `    ${l}`)
    .join("\n");

  files.push({
    path: "index.html",
    type: "text/html",
    text: `<!doctype html>\n<html lang="ko" data-theme="light">\n`
      + `  <head>\n    <meta charset="utf-8" />\n`
      + `    <title>${res.source.componentTitle}, ${res.source.systemName}</title>\n`
      + `${links}\n  </head>\n  <body>\n`
      + examples.map((e) => section(e.key, e.html)).join("\n\n")
      + `\n  </body>\n</html>\n`,
  });

  files.push({
    path: "README.md",
    type: "text/markdown",
    text: `# ${res.source.componentTitle}, ${res.source.systemName}\n\n`
      + `${lib.title} 의 공식 예제 마크업입니다. React 컴포넌트 파일이 없습니다. `
      + `이 계열은 컴포넌트를 CSS 클래스로 제공하고 공식 예제도 마크업이라, `
      + `없는 컴포넌트 이름을 지어내는 대신 마크업을 그대로 실었습니다.\n\n`
      + `## 담긴 것\n\n`
      + `| 파일 | 무엇 |\n|---|---|\n`
      + `| \`index.html\` | 예제 ${examples.length}개 |\n`
      + `| \`vars.css\` | 이 예제가 읽는 이 시스템의 토큰 ${tokens.used.length}개 |\n`
      + `| \`theme.${lib.themeExt}\` | ${lib.title} 를 이 시스템 위에 올리는 테마 |\n\n`
      + `## 설치\n\n\`\`\`\nnpm i ${lib.packages.join(" ")}\n\`\`\`\n\n`
      + `## 모드 바꾸기\n\n`
      + `\`index.html\` 의 \`<html data-theme="light">\` 를 \`dark\` 또는 \`high-contrast\` 로 `
      + `바꾸면 그 모드로 넘어갑니다. \`vars.css\` 에 세 모드 블록이 다 들어 있습니다.\n`
      + `\`data-theme\` 을 지우지 마세요. 지우면 \`vars.css\` 의 `
      + `\`@media (prefers-color-scheme: dark)\` 가 받는 사람 OS 설정을 따라갑니다.\n\n`
      + (lib.markup.note ? `## 알아둘 것\n\n${lib.markup.note}\n` : ""),
  });

  return files;
}
