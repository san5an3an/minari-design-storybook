import { BASES } from "../bases/registry";
import { systemBySlug } from "./registry";
import type { ProviderProps, SystemDefinition } from "./types";

export function baseOf(key: string) {
  const found = BASES[key];
  if (!found) {
    throw new Error(
      `등록되지 않은 베이스 ${key}. app/src/bases/ 에 폴더를 만들고 ` +
        `모듈을 다시 생성할 것. ` +
        `현재: ${Object.keys(BASES).join(", ")}`,
    );
  }
  return found;
}

function drawable(
  components: SystemDefinition["components"],
  impl: SystemDefinition["impl"],
): SystemDefinition["components"] {
  return components
    .filter((c) => c.name in impl)
    // ready 재계산. 없으면 목록이 바뀌어도 배지 상태가 그대로 있음
    .map((c) => (c.ready ? c : { ...c, ready: true }));
}

export function resolveSystem(colorSlug: string, baseKey: string): SystemDefinition {
  const color = systemBySlug(colorSlug);
  // 명세 매칭 항목은 목록에서 제외. 자체 구현 버전은 CSS가 이미 포함되어 있음
  if (color.baseKey === baseKey) {
    return { ...color, components: drawable(color.components, color.impl) };
  }

  const base = baseOf(baseKey);
  const extra = base.css(colorSlug);
  return {
    ...color,
    baseKey: base.key,
    baseTitle: base.title,
    impl: base.impl,
    // 모드 그대로 전달. 라이트로 고정하면 베이스 미리보기 화면도 라이트로 표시되는 문제 있음
    Provider: ({ mode, children }: ProviderProps) =>
      base.Provider({ slug: colorSlug, mode, children }),
    // color.vars에서 값 가져오기. color.css엔 불필요한 컴포넌트 CSS가 있음
    css: extra ? `${color.vars}\n${extra}` : color.vars,
    components: drawable(color.components, base.impl),
  };
}
