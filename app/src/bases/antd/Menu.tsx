import { Dropdown } from "antd";
import type { MenuProps as AntMenuProps } from "antd";
import type { ActionItemSpec, MenuProps } from "../../systems/props";

// 계약 항목을 items로 매핑. 구분선, 그룹, 하위 목록도 각각 대응 어휘 있음
export function toItems(specs: ReadonlyArray<ActionItemSpec>): AntMenuProps["items"] {
  return specs.map((s, i) => {
    if (s.separator) return { type: "divider" as const, key: `d${i}` };
    if (s.group) return { type: "group" as const, key: `g${i}`, label: s.heading, children: toItems(s.group) };
    return {
      key: String(i),
      label: s.label,
      danger: s.danger,
      // 하위 목록. children이 하위 메뉴
      children: s.items ? toItems(s.items) : undefined,
      // 오른쪽에 붙는 보조 텍스트, 라이브러리 제공 위치
      extra: s.hint,
    };
  });
}

export function Menu({ trigger, items, side = "bottom", align = "center" }: MenuProps) {
  const lateral = side === "top" || side === "bottom";
  const tail = align === "center" ? "" : lateral
    ? (align === "start" ? "Left" : "Right")
    : (align === "start" ? "Top" : "Bottom");

  return (
    <Dropdown menu={{ items: toItems(items) }} placement={`${side}${tail}` as never}>
      {trigger as React.ReactElement}
    </Dropdown>
  );
}
