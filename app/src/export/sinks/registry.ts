import { download } from "./download";
import type { Sink } from "../types";

export const SINKS: Readonly<Record<string, Sink>> = {
  download,
};

export function sinkFor(name: string): Sink {
  const s = SINKS[name];
  if (!s) {
    throw new Error(
      `출구 '${name}' 이 레지스트리에 없어요. ` +
        `app/src/export/sinks/registry.ts 의 SINKS 에 한 줄 더하세요. ` +
        `지금 있는 것: ${Object.keys(SINKS).join(" · ")}`,
    );
  }
  return s;
}
