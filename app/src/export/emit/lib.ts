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
      "이 컴포넌트의 라이브러리 정보를 못 읽었어요. 다시 시도해 주세요.",
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
          // 필수 prop 미입력 시 tsc TS2741 오류. placeholder 채우기, children 별도 처리
          const need = lib.requiredProps.filter((r) => r.prop !== "children" && !(r.prop in row.props));
          const needsKids = !lib.acceptsChildren
            && lib.requiredProps.some((r) => r.prop === "children");
          const fill = need.map((r) =>
            r.placeholder === null ? "" : ` ${r.prop}={${r.placeholder}}`).join("");
          const todo = need.length
            ? `      {/* 아래 값은 임시로 넣어 둔 것입니다. 실제 값으로 바꿔 주세요: `
              + `${need.map((r) => r.prop + (r.placeholder === null ? "(직접 채우셔야 해요)" : "")).join(", ")} */}\n`
            : "";
          if (!lib.acceptsChildren) {
            // 자식 필수 컴포넌트는 span 대신 내용만 표기. span 삽입 시 화면 깨질 수 있음
            const kidNote = needsKids
              ? `      {/* 이 컴포넌트는 안에 내용이 반드시 있어야 하는데, 글자는 받지 않습니다.\n`
                + `          공식 문서의 예제를 보고 알맞은 하위 컴포넌트를 넣어 주세요.\n`
                + `          이 시스템이 임의로 넣으면 빌드는 되지만 화면이 잘못 나옵니다. */}\n`
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
    ? `\n## 함께 들어 있는 설정 파일 ${lib.extras.length}개\n\n`
      + `테마 파일만으로는 바꿀 수 없는 부분이 있어서 따로 넣었습니다.\n`
      + `지우셔도 에러는 안 나지만, 그 부분만 ${lib.title} 기본 모양으로 돌아갑니다.\n\n`
      + lib.extras.map((e) => `- \`${e.to}\`, ${e.why}`).join("\n") + "\n"
    : "";

  const dropped = lib.dropped.length > 0
    ? `\n## 목록에서 제외한 항목\n\n`
      + `공식 문서의 값 목록에는 실제로 고를 수 없는 것이 섞여 있어서 아래 항목은 뺐습니다.\n`
      + `실수로 빠뜨린 것이 아닙니다.\n\n`
      + lib.dropped.map((d) => `- \`${d}\``).join("\n")
      + `\n\n혹시 찾으시는 값이 여기 있다면 이 도구가 잘못 뺀 것이니 알려 주세요.\n`
    : "";

  // import 실패 위치를 파일 표, 토큰보다 먼저 확인
  const nameNote = lib.nameInEntry
    ? ""
    : `\n## 먼저 읽어 주세요, import 줄을 한 번 고쳐야 합니다\n\n`
      + `설치된 \`${lib.importFrom}\` 패키지가 \`${lib.componentName}\` 이라는 이름을 내보내지 않습니다.\n`
      + `보통 둘 중 하나입니다.\n\n`
      + `- 이 항목이 컴포넌트가 아니라 안내 문서인 경우 (아이콘 목록, 가이드, 분류 페이지 등)\n`
      + `- 컴포넌트는 맞지만 다른 경로에 있는 경우 (\`${lib.importFrom}/experimental\` 같은 하위 경로,\n`
      + `  또는 차트·달력처럼 아예 다른 패키지)\n\n`
      + `이 도구가 경로를 짐작해서 바꾸지는 않았습니다. 공식 문서에서 이 컴포넌트의 import 줄을\n`
      + `확인하신 뒤 \`${lib.componentName}.example.tsx\` 의 첫 줄만 바꿔 주세요.\n`
      + `나머지 파일(\`theme.${lib.themeExt}\` · \`vars.css\` · \`providers.tsx\`)은 그대로 쓰시면 됩니다.\n`;

  const exampleCaveat = themeOnly
    ? ""
    : `\n## 예시 파일은 시작점입니다\n\n`
      + `\`${lib.componentName}.example.tsx\` 에는 고르신 조합만 적어 두었습니다.\n`
      + `그래서 이 컴포넌트가 따로 요구하는 값은 비어 있을 수 있습니다.\n`
      + `(예를 들어 QR 코드 컴포넌트라면 표시할 내용을 직접 넣어 주셔야 합니다.)\n`
      + `그런 위치는 파일 안에 주석으로 표시해 두었으니 한 번 채워 주세요.\n`
      + (lib.acceptsChildren
        ? ""
        : `\n이 컴포넌트는 태그 사이에 글자를 넣을 수 없습니다.\n`
          + `그래서 예시가 \`<${lib.componentName} … />\` 형태이고, 각 줄이 어떤 조합인지는\n`
          + `바로 위에 주석으로 적어 두었습니다. 이 도구가 뺀 것이 아니라,\n`
          + `글자를 넣으면 타입 검사에서 에러가 납니다.\n`)
      + `\n\`theme.${lib.themeExt}\` 와 \`vars.css\` 는 이것과 관계없이 그대로 쓰시면 됩니다.\n`;

  return `# ${res.source.componentTitle}, ${res.source.systemName} · ${lib.title}

minari-design-storybook 에서 내보낸 파일들입니다.
${nameNote}
## 설치

\`\`\`
${install}
\`\`\`

## 들어 있는 파일

| 파일 | 하는 일 |
|---|---|
| \`theme.${lib.themeExt}\` | ${lib.title} 테마. ${lib.themeExt === "css" ? "`:root` 에 CSS 변수를 정의합니다. `import \"./theme.css\"` 로 불러 쓰세요" : "`theme` · `darkTheme` · `highContrastTheme` · `byMode` 를 내보냅니다"} |
| \`vars.css\` | 테마가 사용하는 색·크기 값 ${tokenCount}개. 이 파일이 없으면 테마가 동작하지 않습니다 |
${themeOnly ? "" : `| \`providers.tsx\` | 테마를 적용해 주는 감싸는 컴포넌트 |\n| \`${lib.componentName}.example.tsx\` | 고르신 조합으로 만든 예시 |\n`}
## \`vars.css\` 는 꼭 함께 써 주세요

테마 파일에는 \`#0052cc\` 같은 실제 색값이 아니라 \`var(--component-button-radius)\` 처럼
* 이름만 들어 있고 실제 값은 `vars.css`에 있음
이 파일을 빼면 에러는 안 나지만 색·모서리·글꼴이 적용되지 않습니다.

## 라이트 / 다크 / 고대비 전환

\`vars.css\` 에 세 가지가 모두 들어 있습니다. \`<html>\` 에 \`data-theme\` 속성이 없으면
보는 사람의 OS 설정을 따라갑니다. \`Providers\` 에 \`mode\` 를 넘기면 그 속성을 대신 넣어 줍니다.
${extras}${dropped}${exampleCaveat}
---

색 테마 \`${req.slug}\` · 베이스 \`${req.baseKey}\` · 컴포넌트 \`${req.component}\`
`;
}
