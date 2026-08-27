import type { ExportAxis, ExportRequest } from "./types";

export interface Row {
  // 버전이 보여주는 solid, disabled 상태
  label: string;
  props: Record<string, string | boolean>;
}

// 파일 1개 분량
export interface Sheet {
  // 파일 이름에 들어가는 구성 요소: variant, states, default
  key: string;
  // 사람이 읽는 제목
  title: string;
  rows: Row[];
}

function coerce(axis: ExportAxis, value: string): string | boolean {
  return axis.kind === "flag" ? value === "true" : value;
}

// 나머지 구분 기준은 선언 기본값으로 고정, 기본값 없는 구분 기준은 생략
function defaults(axes: readonly ExportAxis[], exclude?: string): Record<string, string | boolean> {
  const out: Record<string, string | boolean> = {};
  for (const a of axes) {
    if (a.prop === exclude) continue;
    if (a.default) out[a.prop] = coerce(a, a.default);
  }
  return out;
}

export function sheetsFor(req: ExportRequest, axes: readonly ExportAxis[]): Sheet[] {
  const sheets: Sheet[] = [];

  for (const axis of axes) {
    // 화면 순서, 선언 순서가 문서 순서. 선택된 것만 유지
    const picked = axis.values.filter((v) => req.values[axis.prop]?.includes(v));
    if (picked.length === 0) continue;
    sheets.push({
      key: axis.prop,
      title: axis.prop,
      rows: picked.map((v) => ({
        // 라벨은 값을 그대로 표시. false도 표시 대상 값이라 숨기지 않음
        label: v,
        props: { ...defaults(axes, axis.prop), [axis.prop]: coerce(axis, v) },
      })),
    });
  }

  // 상태는 값 없는 prop이라 별도 컨트롤 사용. 켜면 해당 상태 버전이 한 줄 더 표시되는 방식임
  if (req.states.length > 0) {
    sheets.push({
      key: "states",
      title: "상태",
      rows: req.states.map((s) => ({
        label: s,
        props: { ...defaults(axes), [s]: true },
      })),
    });
  }

  // 값 축 없이 하위 컴포넌트만 선택 가능. 파일 0개면 내보내도 빈 상태임
  if (sheets.length === 0) {
    sheets.push({
      key: "default",
      title: "기본값",
      rows: [{ label: "default", props: defaults(axes) }],
    });
  }

  return sheets;
}

// AlertTitle을 Title로 사용. 하위 컴포넌트 이름 앞에 상위 이름 붙음
export function partLabel(part: string, exportName: string): string {
  return part.startsWith(exportName) ? part.slice(exportName.length) || part : part;
}
