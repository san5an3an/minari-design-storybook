import type { ExportFile, ExportRequest, ExportResources } from "../types";
import { partLabel, sheetsFor } from "../rows";

// JSX 속성 하나로 변환, 참이면 이름만 문자열이면 따옴표 포함 반환
function attr(name: string, value: string | boolean): string {
  return value === true ? ` ${name}` : value === false ? "" : ` ${name}="${value}"`;
}

export function emitNext(req: ExportRequest, res: ExportResources): ExportFile[] {
  const parts = res.partNames.filter((p) => req.parts.includes(p));
  const sheets = sheetsFor(req, res.axes);

  const body = sheets
    .map((sheet) => {
      const rows = sheet.rows
        .map((row) => {
          const attrs = Object.entries(row.props)
            .map(([k, v]) => attr(k, v))
            .join("");
          const inner =
            parts.length > 0
              ? parts
                  .map((p) => `        <${p}>${partLabel(p, res.exportName)}</${p}>`)
                  .join("\n")
              : `        ${row.label}`;
          return `      <${res.exportName}${attrs}>\n${inner}\n      </${res.exportName}>`;
        })
        .join("\n");
      return `      {/* ${sheet.title} */}\n${rows}`;
    })
    .join("\n\n");

  // import에는 선택 항목만 추가. noUnusedLocals 미사용 시 타입 오류 있음
  const names = [res.exportName, ...parts].join(", ");

  const text = `/* ${res.source.componentTitle}, ${res.source.systemName} 에서 고른 조합입니다.
 * minari-design-storybook에서 내보낸 파일. ${res.exportName}.tsx, styles.css와 함께 사용
 *
 * 고르신 것
 *${sheets.map((s) => `\n *   ${s.title.padEnd(10)} ${s.rows.map((r) => r.label).join(", ")}`).join("")}
 *${parts.length > 0 ? `\n *   부품       ${parts.join(", ")}` : ""}
 */
import { ${names} } from "./${res.exportName}";

export function ${res.exportName}Examples {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
${body}
    </div>
  );
}
`;

  return [
    { path: `${res.exportName}.example.tsx`, type: "text/typescript-jsx", text },
  ];
}
