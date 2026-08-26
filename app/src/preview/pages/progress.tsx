import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ProgressProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Progress = impl<ProgressProps>(system, "progress");

  return (
    <>
      <Master note="값이 있으면 끝을 안다는 뜻이에요. 모르면 여기에 가짜 숫자를 넣지 않아요.">
        <div style={{ width: "20rem" }}>
          <Progress value={62} label="올리는 중" />
        </div>
      </Master>

      <Kids axis="value" title="Progress">
        {[0, 35, 100].map((v) => (
          <Kid key={v} label={`${v}%`}>
            <div style={{ flex: 1 }}>
              <Progress value={v} />
            </div>
          </Kid>
        ))}
      </Kids>

      <Kids axis="lg" title="Weight">
        <Kid label="false" hint="기본">
          <div style={{ flex: 1 }}>
            <Progress value={62} />
          </div>
        </Kid>
        <Kid label="true">
          <div style={{ flex: 1 }}>
            <Progress value={62} lg />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="indeterminate"
        note="끝을 모를 때만 써요. 그런데 그 경우 대개는 Spinner 가 맞아요."
      >
        <Kid label="true">
          <div style={{ flex: 1 }}>
            <Progress indeterminate label="기다리는 중" />
          </div>
        </Kid>
      </Kids>

      <Kids axis="label" title="Label">
        <Kid label="있음">
          <div style={{ flex: 1 }}>
            <Progress value={62} label="62% 올렸어요" />
          </div>
        </Kid>
        <Kid label="없음">
          <div style={{ flex: 1 }}>
            <Progress value={62} />
          </div>
        </Kid>
      </Kids>
      <Kids axis="showValue" title="Usage" note="막대 길이만으로는 70% 인지 75% 인지 알 수 없어요. 값은 이름과 한 줄에 마주 보게 둬요.">
        <Kid label="막대만" hint="기본">
          <Progress value={72} label="올리는 중" />
        </Kid>
        <Kid label="+ 값" hint="showValue">
          <Progress value={72} label="올리는 중" showValue />
        </Kid>
      </Kids>

    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "끝을 모를 때",
    then: (
      <>
        <b>Spinner</b> 예요. 90%에서 멈춰 있는 막대는 아무 말도 안 하는 것보다 나빠요.
      </>
    ),
  },
  {
    when: "값을 읽는 게 아니라 정하는 것일 때",
    then: (
      <>
        <b>Slider</b> 예요. 진행 막대는 <b>읽는</b> 것이에요.
      </>
    ),
  },
];
