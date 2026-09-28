import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { StatProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Stat = impl<StatProps>(system, "stat");

  return (
    <>
      <Master
        note={
          <>
            증감 색은 이 시스템의 팔레트 구성에서 와요. <code>success</code> 가 없는 시스템은{" "}
            <code>brand</code> 로, <code>danger</code> 가 없으면 <code>neutral</code> 로 대체돼요.
          </>
        }
      >
        <Stat label="월간 활성 사용자" value="128,940" delta="12.4%" />
      </Master>

      <Kids
        axis="direction"
        note={
          <>
            증감을 <b>셋으로</b> 알려요. 색 · 화살표 · 들어오는 방향. 색만으로 알리면 색을
            구별하기 어려운 사람에게 아무 말도 안 하고, 화살표만 두면 글자만 읽는 흐름에서
            사라지거든요.
          </>
        }
      >
        <Kid label="up" hint="기본">
          <Stat label="가입" value="1,284" delta="12.4%" direction="up" />
        </Kid>
        <Kid label="down">
          <Stat label="응답 시간" value="248ms" delta="3.1%" direction="down" />
        </Kid>
      </Kids>

      <Kids
        axis="delta"
        title="증감 없는 지표"
        note={
          <>
            증감이 없으면 그 줄을 <b>안 그려요.</b> 빈 공간을 남기면 여럿을 나란히 놓았을 때 값의
            밑선이 어긋나거든요.
            <br />
            부호는 <b>쓰는 쪽이 넣어요.</b> 여기서 자동으로 붙이지 않는 것은
            '12.4%p' 처럼 부호가 뜻을 바꾸는 단위가 있기 때문이에요.
          </>
        }
      >
        <Kid label="있음">
          <Stat label="해지율" value="1.8%" delta="0.3%p" direction="down" />
        </Kid>
        <Kid label="없음">
          <Stat label="해지율" value="1.8%" />
        </Kid>
      </Kids>

      <Kids
        axis="value"
        title="자릿수"
        note={
          <>
            값은 mono 서체에 <code>tabular-nums</code> 예요. 여러 지표를 나란히 놓았을 때
            자릿수가 세로로 맞아야 크기를 눈으로 비교할 수 있어요.
          </>
        }
      >
        <Kid label="나란히">
          <Stat label="어제" value="1,024" delta="2.1%" />
          <Stat label="오늘" value="128,940" delta="12.4%" />
          <Stat label="이번 달" value="3,481,220" delta="8.7%" />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "색만으로 증감을 알릴 때",
    then: (
      <>
        화살표와 부호를 함께 넣어요. 색만으로는 색을 구별하기 어려운 사람에게 아무 말도 안 해요.
      </>
    ),
  },
  {
    when: "여러 지표를 나란히 놓을 때",
    then: (
      <>
        증감이 있는 것과 없는 것을 섞어도 밑선은 맞아요. 없는 줄은 그리지 않거든요. 다만 값의{" "}
        <b>자릿수</b> 는 직접 맞춰요.
      </>
    ),
  },
  {
    when: "부호를 자동으로 붙이고 싶을 때",
    then: (
      <>
        붙이지 않아요. '12.4%p' 처럼 부호가 뜻을 바꾸는 단위가 있어서, 무엇을 붙일지는 쓰는 쪽만
        알아요.
      </>
    ),
  },
];
