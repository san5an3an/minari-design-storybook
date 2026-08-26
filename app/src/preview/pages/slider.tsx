import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SliderProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Slider = impl<SliderProps>(system, "slider");
  const [v, setV] = React.useState<number | readonly number[]>(40);
  const shown = Array.isArray(v) ? v.join(" ~ ") : v;
  return (
    <>
      <Master note="지금 값이 보여야 해요. 핸들 위치만으로는 40 인지 42 인지 알 수 없어요.">
        <div style={{ display: "grid", gap: ".5rem", width: "18rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".8125rem" }}>
            <span>밝기</span>
            <b>{shown}</b>
          </div>
          <Slider value={v} onValueChange={setV} />
        </div>
      </Master>

      <Kids axis="state" title="State">
        <Kid label="기본">
          <div style={{ width: "12rem" }}><Slider defaultValue={40} /></div>
        </Kid>
        <Kid label="구간" hint="값이 배열">
          <div style={{ width: "12rem" }}><Slider defaultValue={[25, 70]} /></div>
        </Kid>
        <Kid label="disabled">
          <div style={{ width: "12rem" }}><Slider defaultValue={40} disabled /></div>
        </Kid>
      </Kids>

      <Kids axis="step" title="Usage" note="눈금(step)을 주면 고를 수 있는 값이 정해져요. 값이 정밀해야 하면 숫자 필드를 같이 둬요.">
        <Kid label="step=10">
          <div style={{ width: "12rem" }}><Slider defaultValue={40} step={10} /></div>
        </Kid>
        <Kid label="vertical">
          <div style={{ height: "8rem" }}><Slider defaultValue={40} orientation="vertical" /></div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "값을 읽기만 할 때", then: <><b>Meter</b>·<b>Progress</b> 예요. 슬라이더는 <b>정하는</b> 것이에요.</> },
  { when: "정확한 값이 필요할 때", then: <>숫자 필드를 같이 두세요. 핸들만으로는 한 눈금 차이를 못 맞춰요.</> },
  { when: "구간을 고를 때", then: <>값을 <b>배열</b>로 주세요. 핸들이 그 개수만큼 나타나요.</> },
];
