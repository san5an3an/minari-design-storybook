import { local } from "./local";
import type { Store } from "../types";

export const STORES: Readonly<Record<string, Store>> = {
  local,
};

// 기본 저장소. 서버 전환은 여기가 아닌 호출부에서 선택
export const DEFAULT_STORE = "local";

export function storeFor(name: string): Store {
  const s = STORES[name];
  if (!s) {
    throw new Error(
      `저장소 '${name}' 이 레지스트리에 없어요. ` +
        `app/src/ingest/stores/registry.ts 의 STORES 에 한 줄 더하세요. ` +
        `지금 있는 것: ${Object.keys(STORES).join(" · ")}`,
    );
  }
  return s;
}
