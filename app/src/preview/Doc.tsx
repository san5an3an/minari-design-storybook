import type { ComponentType, ReactNode } from "react";
import type { ApiProp, SystemDefinition } from "../systems/types";

export function impl<P>(system: SystemDefinition, name: string): ComponentType<P> {
  const found = system.impl[name];
  if (!found) {
    throw new Error(
      `${system.name}(${system.baseTitle})에 ${name} 구현이 없다, ` +
        `app/src/bases/${system.baseTitle}/ 에 파일을 만들고 ` +
        `gen_system_modules.py 를 다시 돌릴 것. ` +
        `현재: ${Object.keys(system.impl).join(", ")}`,
    );
  }
  return found as ComponentType<P>;
}

// 프래그먼트 포함 구현 추출. 컴포넌트 타입 전체를 좁혀야 하기 때문임
export function compound<T>(system: SystemDefinition, name: string): T {
  return impl<never>(system, name) as unknown as T;
}

export function Master({ note, lead, children }: {
  note?: ReactNode;
  // 제목 아래 본문 위 소개 문구. 여러 문단일 수 있어 p 대신 div로 감싸는 구조임
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="doc-section">
      <h2>Master</h2>
      {lead ? <div className="doc-note doc-prose" style={{ marginTop: 0 }}>{lead}</div> : null}
      <div className="doc-master">{children}</div>
      {note ? <p className="doc-note">{note}</p> : null}
    </section>
  );
}

export function Kids({
  axis, title, note, lead, children,
}: {
  // 구분 기준 이름, size, variant, tone 등 prop 이름 그대로 사용
  axis: string;
  // 축 이름 대신 표시할 문구
  title?: string;
  note?: ReactNode;
  // 제목 아래 본문 위 소개 문구
  lead?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="doc-section">
      <h2>
        Variants <span className="doc-axis">{title ?? axis}</span>
      </h2>
      {lead ? <div className="doc-note doc-prose" style={{ marginTop: 0 }}>{lead}</div> : null}
      <div className="doc-kids">{children}</div>
      {note ? <p className="doc-note">{note}</p> : null}
    </section>
  );
}

// 자식 아이템 한 행. 왼쪽 값 이름, 오른쪽 인스턴스 목록 표시
export function Kid({
  label, hint, children,
}: {
  label: string;
  // 이름 옆 기본값 표시 문구
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="doc-kid">
      <div className="doc-kid-label">
        <code>{label}</code>
        {hint ? <i>{hint}</i> : null}
      </div>
      <div className="doc-kid-body">{children}</div>
    </div>
  );
}

// 선언에서 컴포넌트 prop 값 조회, 없으면 undefined 반환
export function propOf(
  system: SystemDefinition, comp: string, prop: string,
): ApiProp | undefined {
  return system.api[comp]?.props.find((p) => p.prop === prop);
}

export function valuesOf(system: SystemDefinition, comp: string, prop: string): string[] {
  return propOf(system, comp, prop)?.values ?? [];
}

// prop 기본값. 화면의 기본값 뱃지 표시에 사용
export function defaultOf(
  system: SystemDefinition, comp: string, prop: string,
): string | null {
  return propOf(system, comp, prop)?.default ?? null;
}
