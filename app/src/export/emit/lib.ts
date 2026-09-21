import { componentGroups, resolveTokenGroup } from "../../preview/tokenGroups";
import { collectTokens } from "../tokens";
import { sheetsFor } from "../rows";
import { wantsThemeOnly, type ExportFile, type ExportRequest, type ExportResources } from "../types";

// JSX 속성 하나로 변환, 참이면 이름만 문자열이면 따옴표 포함 반환
function attr(name: string, value: string | boolean): string {
  return value === true ? ` ${name}` : value === false ? "" : ` ${name}="${value}"`;
}

export function emitLib(req: ExportRequest, res: ExportResources): ExportFile[] {
  const lib = res.lib;
  // 자원 없으면 에러 처리, 빈 배열 반환 금지. 호출 자체가 배선 오류라는 뜻임
  if (!lib) {
    throw new Error(
      "라이브러리 자원(res.lib)이 없어요. resources.lib.node.ts 가 채우는 값이에요.",
    );
  }

  const files: ExportFile[] = [];
  const themeOnly = wantsThemeOnly(req.format);

  const consumer = [lib.themeSource, lib.providerSource, ...lib.extras.map((e) => e.text)].join("\n");

  const BASE_LAYER = (name: string): boolean =>
    name.startsWith("--semantic-") || name.startsWith("--base-font-");

  const group = resolveTokenGroup(
    req.component,
    res.source.componentTitle,
    componentGroups(res.vars),
  );
  const ownTokens = group
    ? [...res.vars.matchAll(new RegExp(`(--component-${group}-[A-Za-z0-9_-]+)\\s*:`, "g"))]
      .map((m) => m[1])
    : [];

  const tokens = collectTokens(consumer, res.vars, {
    alwaysInclude: BASE_LAYER,
    extraSeeds: ownTokens,
  });

  files.push({
    path: "vars.css",
    type: "text/css",
    text:
      `/* ${lib.componentName}, ${res.source.systemName} · ${lib.title}\n`
      + ` * minari-design-storybook 내보내기 산출물.\n`
      + ` * 토큰 ${tokens.used.length}개, 세 종류가 들어 있습니다:\n`
      + ` *   ① 시맨틱 층 전부 (--semantic-*) 와 글꼴 (--base-font-*), 색·글자 스타일의 바닥\n`
      + (group
        ? ` *   ② ${res.source.componentTitle} 전용 그룹 (--component-${group}-*)\n`
        : ` *   ② 이 컴포넌트 전용 묶음은 없습니다, 이 시스템의 계약에 같은 이름이 없어요\n`)
      + ` *   ③ theme.${lib.themeExt} 와 설정 파일이 실제로 부르는 이름 (사슬 끝까지)\n`
      + ` * 모드 블록(dark · high-contrast)은 원본 그대로입니다.\n`
      + (tokens.missing.length > 0
        ? ` *\n * 부른 이름 중 ${tokens.missing.length}개가 vars.css 에 없었습니다:\n`
          + tokens.missing.map((n) => ` *      ${n}\n`).join("")
          + ` *    그 위치는 값 없이 그려집니다.\n`
        : "")
      + ` */\n\n${tokens.css}\n`,
  });

  // 확장자를 내용에 맞추기. 다르면 import가 되지 않음
  files.push({
    path: `theme.${lib.themeExt}`,
    type: lib.themeExt === "css" ? "text/css" : "text/typescript",
    text: lib.themeSource,
  });

  if (themeOnly) {
    files.push({ path: "README.md", type: "text/markdown", text: readme(req, res, tokens.used.length, true) });
    return files;
  }

  files.push({
    path: "providers.tsx",
    type: "text/typescript-jsx",
    text: lib.providerSource,
  });
  for (const e of lib.extras) {
    files.push({ path: e.to, type: "text/typescript-jsx", text: e.text });
  }

  const sheets = sheetsFor(req, res.axes);
  const body = sheets
    .map((sheet) => {
      const rows = sheet.rows
        .map((row) => {
          const attrs = Object.entries(row.props).map(([k, v]) => attr(k, v)).join("");
          // children은 프롭 목록에서 제외해 따로 처리. 어트리뷰트로는 지정할 수 없음
          const need = lib.requiredProps.filter((r) => r.prop !== "children" && !(r.prop in row.props));
          const needsKids = !lib.acceptsChildren
            && lib.requiredProps.some((r) => r.prop === "children");
          const fill = need.map((r) =>
            r.placeholder === null ? "" : ` ${r.prop}={${r.placeholder}}`).join("");
          const todo = need.length
            ? `      {/* 필수: ${need.map((r) => r.prop + (r.placeholder === null ? "(직접)" : "")).join(" · ")}, 자리표예요, 실제 값으로 바꿔 주세요 */}\n`
            : "";
          if (!lib.acceptsChildren) {
            const kidNote = needsKids
              ? `      {/* 이 컴포넌트는 자식이 필수인데 글자는 안 받아요, 공식 예제를 보고\n`
                + `          알맞은 하위 컴포넌트를 넣어 주세요. 이 도구가 지어내면 컴파일은 되고 화면이 틀립니다. */}\n`
              : "";
            return `${todo}${kidNote}      {/* ${row.label} */}\n      <${lib.componentName}${attrs}${fill} />`;
          }
          return `${todo}      <${lib.componentName}${attrs}${fill}>${row.label}</${lib.componentName}>`;
        })
        .join("\n");
      return `      {/* ${sheet.title} */}\n${rows}`;
    })
    .join("\n\n");

  files.push({
    path: `${lib.componentName}.example.tsx`,
    type: "text/typescript-jsx",
    text: `"use client";

import { ${lib.componentName} } from "${lib.importFrom}";

import { Providers } from "./providers";

export function ${lib.componentName}Examples {
  return (
    <Providers mode="light">
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
${body}
      </div>
    </Providers>
  );
}
`,
  });

  files.push({ path: "README.md", type: "text/markdown", text: readme(req, res, tokens.used.length, false) });
  return files;
}

// 첫 5분 핵심 안내
function readme(
  req: ExportRequest,
  res: ExportResources,
  tokenCount: number,
  themeOnly: boolean,
): string {
  const lib = res.lib!;
  const install = lib.packages.map((p) => `  npm i ${p}`).join("\n");
  // 개수를 문장에 직접 기재 금지. 같은 사실을 두 곳에 적으면 드리프트가 생기는 문제가 있음
  const extras = lib.extras.length > 0
    ? `\n## 함께 실린 설정 파일\n\n`
      + `이 ${lib.extras.length}개는 테마로는 못 닿는 자리예요. 지우면 그 자리만 ${lib.title} 기본값으로\n`
      + `조용히 되돌아갑니다, 오류가 안 나므로 눈으로는 "색이 좀 다르네"로만 보여요.\n\n`
      + lib.extras.map((e) => `- \`${e.to}\`, ${e.why}`).join("\n") + "\n"
    : "";

  const dropped = lib.dropped.length > 0
    ? `\n## 값이 아니라서 뺀 것\n\n`
      + `공식 문서의 값 목록은 타입에서 뽑혀 있어 고를 수 없는 것이 섞여 있어요.\n`
      + `아래는 그래서 뺀 것이고, 빠뜨린 게 아닙니다.\n\n`
      + lib.dropped.map((d) => `- \`${d}\``).join("\n")
      + `\n\n찾으시는 값이 여기 있다면 이 시스템의 걸러내기가 틀린 것이니 알려 주세요.\n`
    : "";

  // import 실패 위치를 파일 표, 토큰보다 먼저 확인
  const nameNote = lib.nameInEntry
    ? ""
    : `\n## 먼저 읽어 주세요, \`${lib.componentName}\` import 를 고쳐야 해요\n\n`
      + `설치본 \`${lib.importFrom}\` 의 진입점에 \`${lib.componentName}\` 이라는 이름이 없어요\n`
      + `(설치본 타입 전수로 확인했습니다). 그 문서 칸이 컴포넌트가 아니거나(API 네임스페이스·가이드),\n`
      + `서브패스·다른 패키지에 있는 경우예요. 이 도구가 경로를 추측해서 바꾸지 않았습니다 , \n`
      + `공식 문서의 import 줄을 확인해 \`${lib.componentName}.example.tsx\` 의 첫 import 만 고쳐 주세요.\n`
      + `\`theme.${lib.themeExt}\` · \`vars.css\` · \`providers.tsx\` 는 그대로 쓰시면 됩니다.\n`;

  const exampleCaveat = themeOnly
    ? ""
    : `\n## 예시는 출발점이에요\n\n`
      + `\`${lib.componentName}.example.tsx\` 는 고르신 프롭 조합을 적어 둔 것이라,\n`
      + `그 컴포넌트가 따로 요구하는 값까지는 채우지 못해요, 예를 들어 \`QRCode\` 의\n`
      + `\`value\` 처럼요. 그런 부분은 한 번 손봐 주셔야 합니다.\n`
      + (lib.acceptsChildren
        ? ""
        : `\n이 컴포넌트는 안에 글자를 넣지 않습니다(설치본 타입에 \`children\` 이 없어요).\n`
          + `그래서 예시가 \`<${lib.componentName} … />\` 꼴이고, 각 판이 무엇인지는 바로 위\n`
          + `주석으로 적어 뒀습니다. 이 도구가 뺀 게 아니라 넣으면 타입 검사에서 막힙니다.\n`)
      + `\n\`theme.${lib.themeExt}\` 와 \`vars.css\` 는 영향 없어요.\n`;

  return `# ${res.source.componentTitle}, ${res.source.systemName} · ${lib.title}

minari-design-storybook 에서 내보낸 묶음입니다.
${nameNote}
## 설치

\`\`\`
${install}
\`\`\`

## 무엇이 들어 있나

| 파일 | 하는 일 |
|---|---|
| \`theme.${lib.themeExt}\` | ${lib.title} 테마. ${lib.themeExt === "css" ? "`:root` 아래 CSS 변수를 냅니다, `import \"./theme.css\"` 로 씁니다" : "`theme` · `darkTheme` · `highContrastTheme` · `byMode` 를 냅니다"} |
| \`vars.css\` | 그 테마가 실제로 읽는 CSS 토큰 ${tokenCount}개. 없으면 테마가 빈 셸이 됩니다 |
${themeOnly ? "" : `| \`providers.tsx\` | 테마와 설정을 세우는 감싸개 |\n| \`${lib.componentName}.example.tsx\` | 고른 조합을 적어 둔 예시 |\n`}
## \`vars.css\` 를 빼지 마세요

테마 산출물은 \`#0052cc\` 같은 값이 아니라 \`var(--component-button-radius)\` 를 들고 있어요.
그 파일이 없으면 이름이 전부 미해결이 되고, 오류는 안 나면서 색·모서리·글자만 죽습니다.

## 모드는 \`data-theme\` 로 정해집니다

\`vars.css\` 안에 라이트·다크·고대비가 다 들어 있고, \`:root\` 에 \`data-theme\` 속성이
* 값이 없으면 OS 설정(`prefers-color-scheme`)이 색을 결정함
\`Providers\` 가 \`mode\` 를 받아 그 속성을 적어 줍니다.
${extras}${dropped}${exampleCaveat}
---

색 \`${req.slug}\` · 베이스 \`${req.baseKey}\` · 컴포넌트 \`${req.component}\`
`;
}
