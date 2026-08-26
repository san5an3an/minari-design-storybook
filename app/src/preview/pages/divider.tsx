import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { DividerProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Divider = impl<DividerProps>(system, "divider");

  return (
    <>
      <Master note="선 하나예요. 굵기·여백은 이 시스템의 축에서 나와요.">
        <div style={{ width: "100%" }}>
          <span>위</span>
          <Divider />
          <span>아래</span>
        </div>
      </Master>

      <Kids axis="strong" title="Weight & Indent">
        <Kid label="기본">
          <div style={{ flex: 1 }}>
            <Divider />
          </div>
        </Kid>
        <Kid label="strong">
          <div style={{ flex: 1 }}>
            <Divider strong />
          </div>
        </Kid>
        <Kid label="inset">
          <div style={{ flex: 1 }}>
            <Divider inset />
          </div>
        </Kid>
      </Kids>

      <Kids axis="vertical" title="Orientation">
        <Kid label="가로" hint="기본">
          <div style={{ flex: 1 }}>
            <Divider />
          </div>
        </Kid>
        <Kid label="vertical">
          <span
            style={{ display: "inline-flex", alignItems: "center", height: "2rem", gap: ".2rem" }}
          >
            왼쪽
            <Divider vertical />
            오른쪽
          </span>
        </Kid>
      </Kids>

      <Kids axis="label" title="Fallback">
        <Kid label="label">
          <div style={{ flex: 1 }}>
            <Divider label="또는" />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "여백만으로 충분히 갈릴 때",
    then: <>선을 긋지 않아요. 선이 많아질수록 하나하나의 뜻이 옅어져요.</>,
  },
  {
    when: "가운데 글자를 넣을 때",
    then: <>그건 장식이 아니라 구분 이름이에요. 짧게, 한 낱말로 둬요.</>,
  },
];
