import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { CheckboxImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Checkbox = compound<CheckboxImpl>(system, "checkbox");

  return (
    <>
      <Master note="글자를 주면 라벨까지 함께 눌려요. 표시만 정확히 노려 누르지 않아도 돼요.">
        <Checkbox defaultChecked>알림 받기</Checkbox>
      </Master>

      <Kids axis="checked" title="State">
        <Kid label="꺼짐">
          <Checkbox>안 고름</Checkbox>
        </Kid>
        <Kid label="켜짐">
          <Checkbox defaultChecked>고름</Checkbox>
        </Kid>
        <Kid label="일부">
          <Checkbox indeterminate>일부만 고름</Checkbox>
        </Kid>
        <Kid label="disabled">
          <Checkbox disabled defaultChecked>
            바꿀 수 없음
          </Checkbox>
        </Kid>
      </Kids>

      <Kids axis="parts" title="Parts">
        <Kid label="Group">
          <Checkbox.Group>
            <Checkbox defaultChecked>이메일</Checkbox>
            <Checkbox>문자</Checkbox>
            <Checkbox>앱 푸시</Checkbox>
          </Checkbox.Group>
        </Kid>
      </Kids>
      <Kids
        axis="aria-invalid"
        title="Invalid"
        note="오류는 테두리로만 알려요. 상자 안을 붉게 칠하면 '골랐다'와 '틀렸다'가 구별되지 않아요."
      >
        <Kid label="보통"><Checkbox>약관 동의</Checkbox></Kid>
        <Kid label="오류"><Checkbox aria-invalid="true">약관 동의</Checkbox></Kid>
      </Kids>

      <Kids
        axis="description"
        title="Description"
        note="고르면 무슨 일이 생기는지 적어요. 라벨을 늘여 쓰는 위치가 아니에요."
      >
        <Kid label="없음" hint="기본"><Checkbox>마케팅 수신</Checkbox></Kid>
        <Kid label="있음">
          <Checkbox description="한 달에 두 번쯤 보내요. 언제든 끌 수 있어요.">
            마케팅 수신
          </Checkbox>
        </Kid>
      </Kids>

    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "하나만 고를 수 있을 때",
    then: (
      <>
        <b>Radio</b> 예요. 몇 개를 고를 수 있는지는 누르기 전에 보여야 해요.
      </>
    ),
  },
  {
    when: "일부만 골랐을 때",
    then: (
      <>
        <code>indeterminate</code> 예요. 꺼짐으로 두면 하위가 하나도 안 골라진 것처럼 보여요.
      </>
    ),
  },
  {
    when: "켜자마자 먹는 설정일 때",
    then: (
      <>
        <b>Switch</b> 예요. 체크는 <b>제출해야</b> 먹는 값이에요.
      </>
    ),
  },
];
