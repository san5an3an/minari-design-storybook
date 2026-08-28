import { Fragment, type ComponentType, type ReactNode } from "react";
import type { ActionItemSpec } from "../../../systems/props";

export interface MenuParts {
  Item: ComponentType<any>;
  CheckboxItem: ComponentType<any>;
  RadioGroup: ComponentType<any>;
  RadioItem: ComponentType<any>;
  Label: ComponentType<any>;
  Separator: ComponentType<any>;
  Shortcut: ComponentType<any>;
  Group: ComponentType<any>;
  Sub: ComponentType<any>;
  SubTrigger: ComponentType<any>;
  SubContent: ComponentType<any>;
}

// 항목에 적용할 스타일 외부 지정. 컴포넌트마다 토큰 이름이 달라 동일하게 쓸 수 없음
export interface MenuStyles {
  item?: React.CSSProperties;
  itemDanger?: React.CSSProperties;
  label?: React.CSSProperties;
  separator?: React.CSSProperties;
}

// 그룹 단위. 이름 유무와 무관하게 소속 항목 포함
interface Block {
  // raw는 자체 라디오 그룹 구성. Group 재사용시 role 중첩 문제 있음
  kind: "group" | "separator" | "raw";
  heading?: ReactNode;
  items: ActionItemSpec[];
}

function toBlocks(items: ReadonlyArray<ActionItemSpec>): Block[] {
  const out: Block[] = [];
  let open: Block | null = null;

  for (const it of items) {
    if (it.separator) {
      out.push({ kind: "separator", items: [] });
      open = null;
      continue;
    }
    if (it.heading !== undefined) {
      open = { kind: "group", heading: it.heading, items: [] };
      out.push(open);
      continue;
    }
    if (it.group) {
      out.push({ kind: "group", items: [...it.group] });
      open = null;
      continue;
    }
    if (it.radio) {
      // 라디오 그룹 자체가 단위이므로 별도 래퍼로 감싸지 않음
      out.push({ kind: "raw", items: [it] });
      open = null;
      continue;
    }
    if (!open) {
      open = { kind: "group", items: [] };
      out.push(open);
    }
    open.items.push(it);
  }
  return out;
}

// 항목 타입. 라벨, 구분선, 그룹 제외
function renderOne(
  it: ActionItemSpec,
  key: number,
  P: MenuParts,
  S: MenuStyles,
): ReactNode {
  if (it.radio) {
    return (
      <P.RadioGroup key={key} value={it.radio.value}>
        {it.radio.items.map((r) => (
          <P.RadioItem key={r.value} value={r.value} style={S.item}>
            {r.label}
          </P.RadioItem>
        ))}
      </P.RadioGroup>
    );
  }
  if (it.checked !== undefined) {
    // 값 있으면 참/거짓 무관 체크 위치 생성. 위치가 오락가락하면 목록이 흔들리는 문제가 있음
    return (
      <P.CheckboxItem key={key} checked={it.checked} style={S.item}>
        {it.label}
        {it.hint ? <P.Shortcut>{it.hint}</P.Shortcut> : null}
      </P.CheckboxItem>
    );
  }
  if (it.items) {
    // 하위 메뉴 항목은 클릭 시 열기만 수행. 동작 연결 시 되돌릴 수 없는 위험이 있음
    return (
      <P.Sub key={key}>
        <P.SubTrigger style={S.item}>{it.label}</P.SubTrigger>
        <P.SubContent>{renderMenuItems(it.items, P, S)}</P.SubContent>
      </P.Sub>
    );
  }
  return (
    <P.Item
      key={key}
      variant={it.danger ? "destructive" : "default"}
      // 클릭 시 실행할 동작. 없으면 메뉴가 보여주기만 하고 동작하지 않음
      onClick={it.onSelect}
      style={it.danger ? { ...S.item, ...S.itemDanger } : S.item}
    >
      {it.label}
      {it.hint ? <P.Shortcut>{it.hint}</P.Shortcut> : null}
    </P.Item>
  );
}

export function renderMenuItems(
  items: ReadonlyArray<ActionItemSpec>,
  P: MenuParts,
  S: MenuStyles = {},
): ReactNode {
  return toBlocks(items).map((b, i) => (
    <Fragment key={i}>
      {b.kind === "separator" ? (
        <P.Separator style={S.separator} />
      ) : b.kind === "raw" ? (
        b.items.map((it, j) => renderOne(it, j, P, S))
      ) : (
        <P.Group>
          {b.heading !== undefined ? (
            <P.Label style={S.label}>{b.heading}</P.Label>
          ) : null}
          {b.items.map((it, j) => renderOne(it, j, P, S))}
        </P.Group>
      )}
    </Fragment>
  ));
}
