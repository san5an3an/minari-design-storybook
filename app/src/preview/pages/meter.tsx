import type { CSSProperties } from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { MeterProps } from "../../systems/props";
import type { PageProps } from "./types";

// 셀 안에서 폭 전체 사용. 구간 비율은 폭 좁으면 읽기 어렵기 때문임
const WIDE = { width: "100%", minWidth: "12rem" } as const;

export function Page({ system }: PageProps) {
  const Meter = impl<MeterProps & { style?: CSSProperties }>(system, "meter");

  return (
    <>
      <Master
        note={
          <>
            Progress 와 <b>묻는 것이 달라요.</b> Progress 는 «얼마나 왔는가» 이고, Meter 는
            «지금 값이 <b>어느 구간에</b> 있는가» 예요. 구간이 먼저 있고 값이 그 위에 렌더링돼요.
          </>
        }
      >
        <Meter label="저장 공간" value="72%" at={72} style={WIDE} />
      </Master>

      <Kids
        axis="at"
        note={
          <>
            표시의 자리예요. 진행률이 아니라 <b>구간 위의 위치</b> 라서, 100 에 가까울수록
            «좋다» 는 뜻이 아니에요. 무엇이 좋은 구간인지는 구간 색이 말해요.
          </>
        }
      >
        <Kid label="낮음">
          <Meter label="응답 시간" value="120ms" at={24} style={WIDE} />
        </Kid>
        <Kid label="중간">
          <Meter label="응답 시간" value="410ms" at={62} style={WIDE} />
        </Kid>
        <Kid label="높음">
          <Meter label="응답 시간" value="890ms" at={91} style={WIDE} />
        </Kid>
      </Kids>

      <Kids
        axis="bands"
        note={
          <>
            저·중·고 구간의 폭이에요. 합이 100 이어야 해요.
            <br />
            경계는 <b>뜻이 있어야</b> 해요. 균등하게 3등분한 구간은 정보가 아니에요. 어디부터
            문제인지를 말해 주지 않거든요.
          </>
        }
      >
        <Kid label="50 · 30 · 20" hint="기본">
          <Meter label="기본" value="68" at={68} style={WIDE} />
        </Kid>
        <Kid label="70 · 20 · 10" hint="문제 구간이 좁을 때">
          <Meter label="가용률" value="99.2%" at={82} bands={[70, 20, 10]} style={WIDE} />
        </Kid>
        <Kid label="20 · 30 · 50" hint="좋은 구간이 좁을 때">
          <Meter label="여유 메모리" value="1.2GB" at={35} bands={[20, 30, 50]} style={WIDE} />
        </Kid>
      </Kids>

      <Kids
        axis="label · value"
        title="이름과 값"
        note={
          <>
            둘 다 없으면 윗줄 자체를 안 그려요. 값만 있는 쓰임(필드 안에 여럿 늘어놓을 때)이
            있어서 둘을 함께 묻지 않아요.
            <br />
            값이 글자면 <code>aria-valuetext</code> 로도 나가요. '72점' 처럼 단위가 붙은
            값은 수만 읽혀서는 무엇의 수인지 알 수 없거든요.
          </>
        }
      >
        <Kid label="둘 다">
          <Meter label="점수" value="72점" at={72} style={WIDE} />
        </Kid>
        <Kid label="값만">
          <Meter value="72점" at={72} style={WIDE} />
        </Kid>
        <Kid label="없음" hint="띠만 남아요">
          <Meter at={72} style={WIDE} />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "끝나는 작업의 진행률일 때",
    then: (
      <>
        Meter 가 아니라 <b>Progress</b> 예요. 진행률은 0 에서 시작해 100 으로 <b>가는</b> 것이고,
        Meter 의 값은 구간 위를 <b>오가는</b> 것이에요.
      </>
    ),
  },
  {
    when: "구간을 균등하게 3등분할 때",
    then: (
      <>
        경계에 뜻을 넣어요. 균등 3등분은 «어디부터 문제인가» 를 말해 주지 않아서 정보가 아니에요.
      </>
    ),
  },
  {
    when: "구간 색을 직접 주고 싶을 때",
    then: (
      <>
        줄 수 없어요. 색은 이 시스템의 팔레트에서만 골라요. <code>success</code> 가 없는 시스템은{" "}
        <code>brand</code> 로 대체돼요. 밖에서 주면 팔레트에 없는 색이 한 시스템에만 섞여요.
      </>
    ),
  },
];
