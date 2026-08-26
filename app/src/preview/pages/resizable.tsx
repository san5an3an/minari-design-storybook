import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ResizableProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const R = impl<ResizableProps>(system, "resizable");
  return (
    <>
      <Master note="핸들을 끌어 보세요. 탭으로 잡은 뒤 화살표 키로도 옮겨져요. 끌기·키보드·최소 크기는 공식 컴포넌트가 들고 있어요.">
        <R style={{ width: "24rem", height: "8rem" }} start={<span>목록</span>} end={<span>상세</span>} />
      </Master>

      <Kids axis="orientation" title="Anatomy" note="핸들 굵기는 고정 px 이에요. 밀도 옵션을 태우면 어떤 시스템에서는 짚을 수 없게 얇아져요.">
        <Kid label="horizontal" hint="기본">
          <R style={{ width: "18rem", height: "6rem" }} start={<span>A</span>} end={<span>B</span>} />
        </Kid>
        <Kid label="vertical">
          <R orientation="vertical" style={{ width: "14rem", height: "9rem" }}
             start={<span>위</span>} end={<span>아래</span>} />
        </Kid>
      </Kids>

      <Kids axis="withHandle" title="Handle" note="눈금은 고르는 거예요. 선 자체는 눈금과 무관하게 언제나 보여요. 보이지 않는 띠는 마우스를 정확히 짚을 수 있는 사람만 쓸 수 있어요.">
        <Kid label="true" hint="기본">
          <R style={{ width: "18rem", height: "5rem" }} start={<span>A</span>} end={<span>B</span>} />
        </Kid>
        <Kid label="false">
          <R withHandle={false} style={{ width: "18rem", height: "5rem" }}
             start={<span>A</span>} end={<span>B</span>} />
        </Kid>
      </Kids>

      <Kids axis="defaultSize" title="Limit" note="한계를 정해요. 한쪽을 0까지 줄일 수 있으면 사라진 패널을 되돌릴 방법이 없어요.">
        <Kid label="25%">
          <R defaultSize={25} style={{ width: "20rem", height: "6rem" }}
             start={<span>좁게</span>} end={<span>넓게</span>} />
        </Kid>
        <Kid label="70%">
          <R defaultSize={70} style={{ width: "20rem", height: "6rem" }}
             start={<span>넓게</span>} end={<span>좁게</span>} />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "좁은 화면일 때", then: <>쓰지 않아요. 나란히 설 위치가 없으면 옮길 경계도 없어요.</> },
  { when: "핸들을 숨기고 싶을 때", then: <>숨기지 않아요. 보이지 않는 띠는 마우스로만 쓸 수 있어요.</> },
  { when: "한쪽을 완전히 접고 싶을 때", then: <>최소 크기를 두고, 접는 건 <b>Collapsible</b> 로 따로 둬요.</> },
];
