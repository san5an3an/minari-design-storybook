import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ContextmenuProps } from "../../systems/props";
import type { PageProps } from "./types";

const BOX: React.CSSProperties = {
  display: "grid", placeItems: "center", width: "14rem", height: "6rem",
  border: "0.0625rem dashed var(--semantic-border-neutral-default)",
  borderRadius: "var(--semantic-radius-control)", fontSize: ".8125rem",
};

export function Page({ system }: PageProps) {
  const Contextmenu = impl<ContextmenuProps>(system, "contextmenu");
  return (
    <>
      <Master note="오른쪽 눌러서 열어요. 여는 법이 화면에 보이지 않으니 여기 있는 동작은 다른 데도 있어야 해요.">
        <Contextmenu
          trigger={<div style={BOX}>여기서 오른쪽 눌러 보세요</div>}
          items={[
            { label: "잘라내기", hint: "⌘X" },
            { label: "복사", hint: "⌘C" },
            { label: "붙여넣기", hint: "⌘V" },
            { separator: true },
            { label: "지우기", danger: true },
          ]}
        />
      </Master>

      <Kids axis="parts" title="Parts" note="단축키를 함께 적어요. 다음번엔 더 빠른 길이 있다고 알리는 위치예요.">
        <Kid label="+ heading">
          <Contextmenu
            trigger={<div style={BOX}>그룹 라벨</div>}
            items={[
              { heading: "이 파일" },
              { label: "이름 바꾸기" },
              { label: "복제", hint: "⌘D" },
            ]}
          />
        </Kid>
        <Kid label="+ danger">
          <Contextmenu
            trigger={<div style={BOX}>되돌릴 수 없는 것</div>}
            items={[{ label: "보관" }, { separator: true }, { label: "영구 삭제", danger: true }]}
          />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "여기에만 있는 동작", then: <>두지 마세요. <b>오른쪽 누르기는 발견되지 않아요.</b></> },
  { when: "손가락으로 쓸 때", then: <>오른쪽 버튼이 없어요. 길게 누르기도 잘 발견되지 않아요.</> },
  { when: "여는 위치가 보일 때", then: <><b>Menu</b> 예요. 이건 여는 법이 화면에 없어요.</> },
];
