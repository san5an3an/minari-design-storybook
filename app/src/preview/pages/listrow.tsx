import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ListRowImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const ListRow = compound<ListRowImpl>(system, "listrow");

  return (
    <>
      <Master note="줄 하나가 통째로 하나를 가리켜요. 낱개로 두면 그냥 카드예요.">
        <ListRow.List>
          <ListRow lead="김" title="김하늘" sub="hn.kim@example.com" trail="관리자" />
          <ListRow lead="이" title="이바다" sub="bd.lee@example.com" trail="편집자" />
          <ListRow lead="박" title="박구름" sub="gr.park@example.com" trail="보기 전용" />
        </ListRow.List>
      </Master>

      <Kids axis="parts" title="Parts">
        <Kid label="title 만">
          <ListRow.List>
            <ListRow title="김하늘" />
          </ListRow.List>
        </Kid>
        <Kid label="+ sub">
          <ListRow.List>
            <ListRow title="김하늘" sub="hn.kim@example.com" />
          </ListRow.List>
        </Kid>
        <Kid label="+ lead">
          <ListRow.List>
            <ListRow lead="김" title="김하늘" sub="hn.kim@example.com" />
          </ListRow.List>
        </Kid>
        <Kid label="+ trail">
          <ListRow.List>
            <ListRow lead="김" title="김하늘" sub="hn.kim@example.com" trail="관리자" />
          </ListRow.List>
        </Kid>
      </Kids>

      <Kids
        axis="interactive"
        note="누를 수 있는 줄은 포커스를 받을 수 있어야 해요. 커서만으로는 마우스에서만 보여요."
      >
        <Kid label="false" hint="기본">
          <ListRow.List>
            <ListRow title="읽는 줄" sub="눌러도 아무 일이 없어요" />
          </ListRow.List>
        </Kid>
        <Kid label="true">
          <ListRow.List>
            <ListRow interactive title="누르는 줄" sub="Tab 키로 포커스가 와요" trail="›" />
          </ListRow.List>
        </Kid>
      </Kids>
      <Kids axis="parts2" title="Parts" note="머리·바닥은 줄 밖으로 나가는 줄이에요. 날짜나 꼬리표처럼 줄 전체에 걸리는 걸 여기 둬요.">
        <Kid label="+ header">
          <ListRow.List>
            <ListRow header="오늘" title="김하늘" sub="hn.kim@example.com" />
          </ListRow.List>
        </Kid>
        <Kid label="+ footer">
          <ListRow.List>
            <ListRow title="김하늘" sub="hn.kim@example.com" footer="3일 전에 초대했어요" />
          </ListRow.List>
        </Kid>
      </Kids>

    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "같은 항목끼리 세로로 비교할 때",
    then: (
      <>
        <b>Table</b> 이에요. 표는 <b>열</b>이 뜻을 가져요.
      </>
    ),
  },
  {
    when: "하나만 있을 때",
    then: (
      <>
        <b>Card</b> 예요. 줄은 목록 안에서만 뜻을 가져요.
      </>
    ),
  },
  {
    when: "줄 전체가 눌릴 때",
    then: <>안에 또 다른 버튼을 넣지 않아요. 어느 쪽이 눌렸는지 알 수 없어져요.</>,
  },
];
