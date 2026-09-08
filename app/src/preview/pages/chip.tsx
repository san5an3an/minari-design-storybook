import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ChipProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Chip = impl<ChipProps>(system, "chip");

  return (
    <>
      <Master
        note={
          <>
            Badge 와 생김새가 거의 같아요. 가르는 것은 <b>누를 수 있는가</b> 예요. 읽기만 하면
            Badge 를 써요.
          </>
        }
      >
        <Chip>전체</Chip>
      </Master>

      <Kids
        axis="pressed"
        note={
          <>
            고른 상태는 <code>aria-pressed</code> 로 말해요. 색이 바뀐 것을 스크린리더가 알
            방법은 이것뿐이에요. 색만 바꾸면 고른 칩과 안 고른 칩이 <b>같게 읽혀요</b>.
          </>
        }
      >
        <Kid label="false" hint="기본">
          <Chip pressed={false}>필터</Chip>
        </Kid>
        <Kid label="true">
          <Chip pressed>필터</Chip>
        </Kid>
      </Kids>

      <Kids
        axis="onRemove"
        title="지우기"
        note={
          <>
            이미 고른 것을 지울 때 써요. 지우기 버튼의 이름에는 <b>무엇을 지우는지</b> 가 들어가야
            해요. '제거' 만 여럿 있으면 목록으로 훑는 사람에게 전부 같은 이름으로 읽혀요.
            <br />
            지우기가 달린 칩은 <b>누르는 칩이 아니에요.</b> 바깥이 <code>&lt;span&gt;</code> 으로
            렌더링돼요. 버튼 안에 버튼을 넣지 않으려는 것이고, 무엇보다 바깥을 눌렀을 때 무슨 일이
            일어나는지를 약속할 수 없기 때문이에요.
          </>
        }
      >
        <Kid label="하나">
          <Chip onRemove={ => {}} removeLabel="태그 하나 제거">
            태그 하나
          </Chip>
        </Kid>
        <Kid label="여럿" hint="이름이 저마다 달라야 해요">
          <Chip onRemove={ => {}} removeLabel="서울 제거">
            서울
          </Chip>
          <Chip onRemove={ => {}} removeLabel="부산 제거">
            부산
          </Chip>
          <Chip onRemove={ => {}} removeLabel="대구 제거">
            대구
          </Chip>
        </Kid>
      </Kids>

      <Kids
        axis="disabled"
        note={<>고르는 칩과 지우는 칩 양쪽에 있어요. 지우는 칩에서는 지우기 버튼이 잠겨요.</>}
      >
        <Kid label="고르기">
          <Chip pressed disabled>
            잠김
          </Chip>
        </Kid>
        <Kid label="지우기">
          <Chip onRemove={ => {}} removeLabel="잠긴 태그 제거" disabled>
            잠김
          </Chip>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "읽기만 하는 표시일 때",
    then: (
      <>
        칩이 아니라 <b>Badge</b> 예요. 칩은 <b>조작 대상</b> 이고 배지는 <b>상태 표시</b> 예요.
      </>
    ),
  },
  {
    when: "고르기와 지우기를 한 칩에 넣고 싶을 때",
    then: (
      <>
        나눠요. 바깥을 눌렀을 때 <b>고르는 것인지 지우는 것인지</b> 약속할 수 없고, 버튼 안에
        버튼이 들어가요.
      </>
    ),
  },
  {
    when: "선택형 칩을 만들 때",
    then: (
      <>
        <code>aria-pressed</code> 를 반드시 넣어요. 없으면 고른 상태가 화면 밖으로 전해지지
        않아요.
      </>
    ),
  },
];
