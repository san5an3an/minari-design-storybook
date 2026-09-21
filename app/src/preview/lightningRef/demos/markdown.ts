import type { DemoValue, SkipCode } from "../../refContract";

export const demos: Record<string, DemoValue> = {};
export const skipped: Record<string, { code: SkipCode; detail: string }> = {"base/default/0":{"code":"runtime-unavailable","detail":"렌더 가능한 React element/컴포넌트 형태가 아님(typeof=object)"}};
