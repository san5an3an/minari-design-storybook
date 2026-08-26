import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { InputProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Input = impl<InputProps>(system, "input");

  return (
    <>
      <Master note="아무 값도 안 주면 필드 하나예요. label 이나 help 를 주면 Field 로 감싸요.">
        <div style={{ width: "18rem" }}>
          <Input placeholder="입력하세요" />
        </div>
      </Master>

      <Kids axis="aria-invalid" title="State">
        <Kid label="기본">
          <div style={{ width: "14rem" }}>
            <Input placeholder="비어 있음" />
          </div>
        </Kid>
        <Kid label="입력됨">
          <div style={{ width: "14rem" }}>
            <Input defaultValue="홍길동" />
          </div>
        </Kid>
        <Kid label="오류">
          <div style={{ width: "14rem" }}>
            <Input defaultValue="wrong@" aria-invalid="true" />
          </div>
        </Kid>
        <Kid label="disabled">
          <div style={{ width: "14rem" }}>
            <Input defaultValue="수정 불가" disabled />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="parts"
        title="Parts"
        note="Field 는 label + input + help 세 부분이에요. 간격은 토큰이 정해요."
      >
        <Kid label="Field">
          <div style={{ width: "18rem" }}>
            <Input label="이름" help="실명을 입력하세요" placeholder="홍길동" />
          </div>
        </Kid>
        <Kid label="multiline">
          <div style={{ width: "18rem" }}>
            <Input multiline placeholder="여러 줄 입력" />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "언제나",
    then: (
      <>
        <code>label</code> 이 있어야 해요. placeholder 로 대신하면 입력을 시작하는 순간 이름이
        사라져 무엇을 넣는 칸인지 알 수 없게 돼요.
      </>
    ),
  },
  {
    when: "오류를 보일 때",
    then: (
      <>
        <code>help</code> 위치를 그대로 써요. 오류 문구를 새 줄에 넣으면 화면이 흔들려요.
      </>
    ),
  },
  {
    when: "여러 줄을 받을 때",
    then: (
      <>
        <code>multiline</code> 이에요. 세로로만 늘어나요. 가로로 늘리면 레이아웃이 깨져요.
      </>
    ),
  },
];
