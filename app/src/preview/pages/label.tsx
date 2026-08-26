import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { LabelProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Label = impl<LabelProps>(system, "label");
  return (
    <>
      <Master note="필드가 무엇을 받는지 적어요. 자리표시자로 대신하면 입력을 시작하는 순간 사라져요.">
        <Label>이메일</Label>
      </Master>

      <Kids axis="required" title="State">
        <Kid label="기본"><Label>이메일</Label></Kid>
        <Kid label="필수"><Label required>이메일</Label></Kid>
        <Kid label="오류"><Label aria-invalid="true">이메일</Label></Kid>
        <Kid label="잠김"><Label disabled>이메일</Label></Kid>
      </Kids>

      <Kids
        axis="hint"
        title="Parts"
        note="이름 옆 한 마디예요. 선택 입력임을 알릴 때 써요. 필수가 대부분인 폼에서는 예외를 표시하는 쪽이 짧아요."
      >
        <Kid label="없음" hint="기본"><Label>전화번호</Label></Kid>
        <Kid label="있음"><Label hint="선택">전화번호</Label></Kid>
      </Kids>

      <Kids axis="htmlFor" title="Usage" note="for 를 걸면 이름을 눌러도 필드가 잡혀요.">
        <Kid label="필드와 함께">
          <div style={{ display: "grid", gap: ".35rem", width: "16rem" }}>
            <Label htmlFor="pv-lb" required>이메일</Label>
            <input className="ods-input" id="pv-lb" placeholder="you@example.com" />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "이름을 안 보이게 하고 싶을 때",
    then: <>지우지 말고 <code>sr-only</code> 로 숨겨요. 지우면 스크린리더가 필드를 못 읽어요.</> },
  { when: "필수를 알릴 때",
    then: <>별표 <b>하나로 끝내지 않아요</b>. 작은 글자에서 안 보이고 스크린리더는 읽지 않아요.</> },
  { when: "필드를 누를 수 있게 하고 싶을 때",
    then: <><code>for</code> 를 걸어요. 안 걸면 눈으로만 짝지어진 거예요.</> },
];
