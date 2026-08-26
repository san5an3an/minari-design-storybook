import * as React from "react";
import { Kid, Kids, Master, compound, defaultOf, valuesOf } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SwitchImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Switch = compound<SwitchImpl>(system, "switch");
  const sizes = valuesOf(system, "switch", "size");
  const d = defaultOf(system, "switch", "size") ?? sizes[0];
  const [on, setOn] = React.useState(true);

  return (
    <>
      <Master note="눌러 보세요. 확인 버튼 없이 그 자리에서 먹어요. 그게 체크박스와 다른 점이에요.">
        <Switch checked={on} onCheckedChange={setOn}>
          알림 받기
        </Switch>
      </Master>

      <Kids
        axis="size"
        note="두 단뿐이에요. Checkbox · Radio 에는 크기 축 자체가 없어요. 같은 폼에 서지만 고를 수 있는 게 달라요."
      >
        {sizes.map((s) => (
          <Kid key={s} label={s} hint={s === d ? "기본" : undefined}>
            <Switch size={s} defaultChecked aria-label={`크기 ${s}`} />
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="aria-invalid"
        title="Invalid"
        note={
          <>
            오류는 <b>테두리 · 겉테 · 라벨 글자</b> 셋으로 알려요. 트랙 <b>안</b>은 붉게 칠하지
            않아요, 켜짐 배경도 색이라 겹치면 &lsquo;켜진 것&rsquo;과 &lsquo;잘못된 것&rsquo;이
            구별되지 않아요. 그런데 테두리 하나만으로는 <b>켜진 트랙 위에서 안 보여요</b> .
            켜지면 테두리도 켜짐 색으로 덮이니까요. 그래서 신호를 겉과 글자로 밀어요.
          </>
        }
      >
        <Kid label="보통">
          <Switch>약관 동의</Switch>
        </Kid>
        <Kid label="오류">
          <Switch aria-invalid="true">약관 동의</Switch>
        </Kid>
      </Kids>

      <Kids
        axis="parts"
        title="Choice Card"
        note="카드 어디를 눌러도 먹어요. 스위치만 정확히 노려 눌러야 하면 손이 큰 사람·떨림이 있는 사람에게 실패율이 그대로 올라가요."
      >
        <Kid label="Card">
          <div style={{ display: "grid", gap: "0.5rem", width: "22rem" }}>
            <Switch.Card
              title="기기 간 공유"
              description="다른 기기에서도 이어서 볼 수 있어요"
              defaultChecked
            />
            <Switch.Card title="알림 켜기" description="새 소식이 오면 알려 줘요" />
          </div>
        </Kid>
        <Kid label="오류">
          <div style={{ width: "22rem" }}>
            <Switch.Card
              title="약관 동의"
              description="계속하려면 약관에 동의해야 해요"
              aria-invalid="true"
            />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="description"
        title="Description"
        note={
          <>
            <b>켜면 무슨 일이 일어나는지</b>를 적는 위치예요. 라벨을 늘여 쓰는 위치가 아니에요.
            라벨은 <b>이름</b>이고 설명은 <b>결과</b>예요.
          </>
        }
      >
        <Kid label="없음" hint="기본">
          <Switch defaultChecked>기기 간 공유</Switch>
        </Kid>
        <Kid label="있음">
          <Switch defaultChecked description="다른 기기에서도 이어서 볼 수 있어요">
            기기 간 공유
          </Switch>
        </Kid>
      </Kids>

      <Kids
        axis="checked"
        title="State"
        note={
          <>
            핸들이 <b>오른쪽</b>이면 켜진 거예요. 이 자리에 &ldquo;닫힘&rdquo; 같은 말을 두면
            무엇이 참인지 읽을 수 없게 돼요.
          </>
        }
      >
        <Kid label="꺼짐">
          <Switch>안 받기</Switch>
        </Kid>
        <Kid label="켜짐">
          <Switch defaultChecked>받기</Switch>
        </Kid>
        <Kid label="disabled 꺼짐">
          <Switch disabled>바꿀 수 없음</Switch>
        </Kid>
        <Kid label="disabled 켜짐">
          <Switch disabled defaultChecked>
            바꿀 수 없음
          </Switch>
        </Kid>
      </Kids>

      <Kids axis="children" title="Label">
        <Kid label="글자 있음">
          <Switch defaultChecked>자동 저장</Switch>
        </Kid>
        <Kid label="글자 없음">
          <Switch defaultChecked aria-label="자동 저장" />
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
        <b>오른쪽이 켜짐</b>이에요. 부정형(&ldquo;닫힘&rdquo; &ldquo;끄기&rdquo;)을 켜짐 자리에
        두지 않아요.
      </>
    ),
  },
  {
    when: "제출해야 먹는 값일 때",
    then: (
      <>
        <b>Checkbox</b> 예요. 스위치는 <b>그 위치에서</b> 먹는다는 약속이에요.
      </>
    ),
  },
  {
    when: "글자 없이 둘 때",
    then: (
      <>
        <code>aria-label</code> 이 필수예요. 무엇을 켜는지 읽어 줄 것이 없어요.
      </>
    ),
  },
];
