import type { ExportFile, ExportRequest, ExportResources } from "../types";
import { emitHtml } from "./html";
import { emitLib } from "./lib";
import { emitNext } from "./next";

export type Emitter = (req: ExportRequest, res: ExportResources) => ExportFile[];

export const EMITTERS: Readonly<Record<string, Emitter>> = {
  html: emitHtml,
  next: emitNext,
  lib: emitLib,
};

// 이름으로 조회 후 없으면 예외 처리
export function emitterFor(name: string): Emitter {
  const e = EMITTERS[name];
  if (!e) {
    throw new Error(
      `내보내기 형식 '${name}' 이 레지스트리에 없어요. ` +
        `app/src/export/emit/registry.ts 의 EMITTERS 에 한 줄 더하세요. ` +
        `지금 있는 것: ${Object.keys(EMITTERS).join(" · ")}`,
    );
  }
  return e;
}
