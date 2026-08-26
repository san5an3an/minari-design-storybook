import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ScrollareaProps } from "../../systems/props";
import type { PageProps } from "./types";

const rows = (n: number) =>
  Array.from({ length: n }, (_, i) => (
    <div key={i} style={{ padding: ".4rem 0" }}>항목 {i + 1}</div>
  ));

export function Page({ system }: PageProps) {
  const SA = impl<ScrollareaProps>(system, "scrollarea");
  const box = { height: "9rem", width: "14rem" };
  return (
    <>
      <Master note="높이를 반드시 정해요. 안 정하면 굴릴 게 없어서 그냥 늘어나는 상자가 돼요.">
        <SA style={box}>{rows(12)}</SA>
      </Master>

      <Kids axis="orientation" title="Anatomy" note="굴리는 방향은 막대의 성질이에요. 가로로 굴리려면 막대를 하나 더 얹어요. 기본은 세로 하나예요.">
        <Kid label="horizontal">
          <SA orientation="horizontal" style={{ width: "14rem", whiteSpace: "nowrap" }}>
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} style={{ display: "inline-block", padding: ".4rem .8rem" }}>셀 {i}</span>
            ))}
          </SA>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "높이를 안 정했을 때", then: <>굴릴 게 없어요. 이 컴포넌트를 쓴 뜻이 사라져요.</> },
  { when: "막대를 숨기고 싶을 때", then: <>숨기지 않아요. 내용이 더 있는지 알 방법이 없어져요.</> },
];
