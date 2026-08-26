import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { InputotpProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const OTP = impl<InputotpProps>(system, "inputotp");
  const [v, setV] = React.useState("482");
  return (
    <>
      <Master note="필드가 나뉘어서 자릿수가 보이고, 틀린 위치를 바로 짚을 수 있어요. 눌러서 입력해 보세요.">
        <OTP value={v} onValueChange={setV} />
      </Master>

      <Kids axis="value" title="State" note="지금 채워질 셀을 표시해요. 어디를 보고 있어야 하는지가 안 보이면 셀을 나눈 뜻이 없어요.">
        <Kid label="비어 있음"><OTP defaultValue="" /></Kid>
        <Kid label="채워짐"><OTP defaultValue="482915" /></Kid>
        <Kid label="오류"><OTP defaultValue="482910" aria-invalid="true" /></Kid>
      </Kids>

      <Kids axis="groupSize" title="Parts" note="구분자는 aria-hidden 이에요. 읽히면 번호에 하이픈이 있는 것으로 들려요.">
        <Kid label="3+3" hint="기본"><OTP defaultValue="482915" /></Kid>
        <Kid label="끊지 않음"><OTP defaultValue="482915" groupSize={6} /></Kid>
        <Kid label="4자리"><OTP length={4} groupSize={4} defaultValue="4829" /></Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "칸마다 입력을 두고 싶을 때",
    then: <>두지 않아요. 붙여넣기가 첫 칸에만 들어가고 스크린리더가 &lsquo;편집 상자&rsquo;를 여섯 번 읽어요.</> },
  { when: "문자로 온 번호를 채우고 싶을 때",
    then: <><code>autocomplete=&quot;one-time-code&quot;</code> 예요. 키보드가 바로 채워 줘요.</> },
  { when: "일반 텍스트를 받을 때", then: <><b>Input</b> 이에요. 필드를 나누는 건 자릿수가 고정일 때만이에요.</> },
];
