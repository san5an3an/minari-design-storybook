import * as html from "./html";
import type { Fragment } from "../types";

// 파서 모듈이 갖춰야 하는 조건
export interface Parser {
  parseFragments(source: string): Fragment[];
  // 원본과 동일하게 렌더링하는 데 필요한 스타일, CDN, body 클래스
  extractHead(source: string): { head: string; bodyClass: string };
}

export const PARSERS: Readonly<Record<string, Parser>> = {
  html,
};

// 기본 파서. ImportDialog가 .html만 받아 현재는 이것 하나뿐임
export const DEFAULT_PARSER = "html";

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
