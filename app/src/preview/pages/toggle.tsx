import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ToggleProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Toggle = impl<ToggleProps>(system, "toggle");
  const [bold, setBold] = React.useState(true);
  return (
    <>
      <Master note="누르면 눌린 채로 남아요. 버튼은 손을 떼면 돌아오지만 이건 상태를 가져요.">
        <Toggle pressed={bold} onPressedChange={setBold}>
          굵게
        </Toggle>
      </Master>

      <Kids axis="variant" title="State">
        <Kid label="plain" hint="기본">
          <Toggle>B</Toggle>
          <Toggle defaultPressed>B</Toggle>
        </Kid>
        <Kid label="outline">
          <Toggle variant="outline">B</Toggle>
          <Toggle variant="outline" defaultPressed>B</Toggle>
        </Kid>
        <Kid label="disabled">
          <Toggle disabled>B</Toggle>
          <Toggle disabled defaultPressed>B</Toggle>
        </Kid>
      </Kids>

      <Kids axis="size" title="Anatomy" note="폼 컨트롤과 같은 계단을 써요. 툴바에서 옆 버튼과 높이가 어긋나면 줄이 들쭉날쭉해져요.">
        {["sm", "md", "lg"].map((s) => (
          <Kid key={s} label={s} hint={s === "md" ? "기본" : undefined}>
            <Toggle size={s} defaultPressed>{s}</Toggle>
          </Kid>
        ))}
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "여럿 중 하나를 고를 때", then: <><b>Segmented</b> 예요. 이건 하나를 켜고 꺼요.</> },
  { when: "켜짐을 위치로 알릴 수 있을 때", then: <><b>Switch</b> 예요. 공간을 못 낼 때 눌림으로 알려요.</> },
  { when: "제출해야 먹는 값일 때", then: <><b>Checkbox</b> 예요. 토글은 누르는 즉시 먹어요.</> },
];
