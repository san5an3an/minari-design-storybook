import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { RadioImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Radio = compound<RadioImpl>(system, "radio");

  return (
    <>
      <Master note="라디오는 묶여야 뜻이 생겨요. 하나만 두면 끌 수 없는 스위치가 돼요.">
        <Radio.Group defaultValue="card">
          <Radio value="card">카드</Radio>
          <Radio value="bank">계좌이체</Radio>
          <Radio value="phone">휴대폰</Radio>
        </Radio.Group>
      </Master>

      <Kids axis="disabled" title="State">
        <Kid label="기본">
          <Radio.Group defaultValue="on">
            <Radio value="on">고름</Radio>
            <Radio value="off">안 고름</Radio>
          </Radio.Group>
        </Kid>
        <Kid label="disabled">
          <Radio.Group defaultValue="on">
            <Radio value="on" disabled>
              고름
            </Radio>
            <Radio value="off" disabled>
              안 고름
            </Radio>
          </Radio.Group>
        </Kid>
      </Kids>
      <Kids
        axis="aria-invalid"
        title="Invalid"
        note="오류는 테두리로만 알려요. 동그라미 안을 붉게 칠하면 '골랐다'와 '틀렸다'가 구별되지 않아요."
      >
        <Kid label="보통">
          <Radio.Group defaultValue="a"><Radio value="a">보통</Radio></Radio.Group>
        </Kid>
        <Kid label="오류">
          <Radio.Group defaultValue="a">
            <Radio value="a" aria-invalid="true">오류</Radio>
          </Radio.Group>
        </Kid>
      </Kids>

      <Kids
        axis="description"
        title="Description"
        note="고르면 무슨 일이 생기는지 적어요. 라벨을 늘여 쓰는 위치가 아니에요."
      >
        <Kid label="없음" hint="기본">
          <Radio.Group defaultValue="a"><Radio value="a">기본 배송</Radio></Radio.Group>
        </Kid>
        <Kid label="있음">
          <Radio.Group defaultValue="a">
            <Radio value="a" description="2~3일 걸려요. 추가 요금이 없어요.">기본 배송</Radio>
          </Radio.Group>
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
        <code>Radio.Group</code> 안에 둬요. 낱개 라디오는 한 번 켜면 끌 수 없어요.
      </>
    ),
  },
  {
    when: "여러 개를 고를 수 있을 때",
    then: (
      <>
        <b>Checkbox</b> 예요. 이것은 스타일 차이가 아니라 <b>의미 차이</b>예요.
      </>
    ),
  },
  {
    when: "고를 것이 대여섯을 넘을 때",
    then: (
      <>
        <b>Select</b> 를 봐요. 줄이 길어지면 한눈에 비교할 수 있다는 라디오의 장점이 사라져요.
      </>
    ),
  },
];
