import { parseFragments as html } from "./html";
import type { Fragment } from "../types";

export type Parser = (source: string) => Fragment[];

export const PARSERS: Readonly<Record<string, Parser>> = {
  html,
};

export function parserFor(name: string): Parser {
  const p = PARSERS[name];
  if (!p) {
    throw new Error(
      `파서 '${name}' 이 레지스트리에 없어요. ` +
        `app/src/ingest/parse/registry.ts 의 PARSERS 에 한 줄 더하세요. ` +
        `지금 있는 것: ${Object.keys(PARSERS).join(" · ")}`,
    );
  }
  return p;
}
