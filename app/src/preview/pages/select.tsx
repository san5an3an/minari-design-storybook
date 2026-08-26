import * as React from "react";
import { Kid, Kids, Master, defaultOf, impl, valuesOf } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SelectGroupSpec, SelectProps } from "../../systems/props";
import type { PageProps } from "./types";

const ITEMS = { seoul: "서울", busan: "부산", jeju: "제주" };

// 그룹 예시. 성격이 다를 때만 그룹화 권장
const GROUPED = {
  metro: "서울", incheon: "인천",
  busan: "부산", daegu: "대구",
  gwangju: "광주",
} as const;
const GROUPS: SelectGroupSpec[] = [
  { label: "수도권", items: { metro: "서울", incheon: "인천" } },
  { label: "영남", items: { busan: "부산", daegu: "대구" } },
  { label: "호남", items: { gwangju: "광주" } },
];

// 긴 목록 예시 표시, 스크롤은 기반 컴포넌트가 처리
const HOURS = Object.fromEntries(
  Array.from({ length: 24 }, (_, h) => [String(h), `${String(h).padStart(2, "0")}:00`]),
);

export function Page({ system }: PageProps) {
  const Select = impl<SelectProps>(system, "select");
  const sizes = valuesOf(system, "select", "size");
  const d = defaultOf(system, "select", "size") ?? sizes[0];
  const [value, setValue] = React.useState("seoul");

  return (
    <>
      <Master note="고른 값은 그대로가 아니라 보이는 이름으로 나와요. 값만 넘기면 방아쇠에 코드가 뜹니다.">
        <Select items={ITEMS} value={value} onValueChange={setValue} aria-label="지역" />
      </Master>

      <Kids
        axis="parts"
        title="Label & Description"
        note="라벨은 생략하지 않아요. 접힌 상태의 첫 항목으로 대신하면 값을 고르는 순간 이름이 사라져요. 설명은 필드 아래에 붙어요. Input 과 같은 자리예요."
      >
        <Kid label="라벨 + 설명">
          <div style={{ width: "16rem" }}>
            <Select
              label="지역"
              description="배송지 기준이에요"
              items={{ seoul: "서울", busan: "부산", jeju: "제주" }}
              value="seoul"
            />
          </div>
        </Kid>
        <Kid label="오류">
          <div style={{ width: "16rem" }}>
            <Select
              label="지역"
              description="지역을 골라 주세요"
              items={{ seoul: "서울", busan: "부산", jeju: "제주" }}
              aria-invalid="true"
            />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="alignItemWithTrigger"
        title="Alignment"
        note="기본은 고른 항목이 방아쇠에 겹치도록 떠요. 눈이 값에서 값으로 바로 이어져요. false 면 방아쇠 아래로 붙어요."
      >
        <Kid label="true" hint="기본">
          <div style={{ width: "14rem" }}>
            <Select items={{ a: "바나나", b: "사과", c: "포도" }} value="b" />
          </div>
        </Kid>
        <Kid label="false">
          <div style={{ width: "14rem" }}>
            <Select
              alignItemWithTrigger={false}
              items={{ a: "바나나", b: "사과", c: "포도" }}
              value="b"
            />
          </div>
        </Kid>
      </Kids>

      <Kids axis="size">
        {sizes.map((s) => (
          <Kid key={s} label={s} hint={s === d ? "기본" : undefined}>
            <Select size={s} items={ITEMS} aria-label={`지역 ${s}`} />
          </Kid>
        ))}
      </Kids>

      <Kids axis="data-empty" title="State">
        <Kid label="비어 있음">
          <Select items={ITEMS} placeholder="고르세요" aria-label="비어 있음" />
        </Kid>
        <Kid label="고름">
          <Select items={ITEMS} value="jeju" aria-label="고름" />
        </Kid>
        <Kid label="오류">
          <Select items={ITEMS} aria-invalid="true" aria-label="오류" />
        </Kid>
        <Kid label="disabled">
          <Select items={ITEMS} value="seoul" disabled aria-label="비활성" />
        </Kid>
      </Kids>

      <Kids
        axis="groups"
        title="Group"
        note={
          <>
            성격이 갈릴 때만 묶어요. 그룹 이름은 <b>고를 수 없는 글자</b>라 항목보다 작은 색으로
            그려요. 같은 색이면 눌러 보게 되니까요. <b>구분선은 없어요</b>: 이름이 이미 경계를
            알리는데 선을 더 그으면 같은 말을 두 번 하는 거예요.
          </>
        }
      >
        <Kid label="없음" hint="기본">
          <Select items={GROUPED} aria-label="그룹 없음" />
        </Kid>
        <Kid label="있음">
          <Select items={GROUPED} groups={GROUPS} aria-label="그룹 있음" />
        </Kid>
      </Kids>

      <Kids
        axis="disabledItems"
        title="Disabled"
        note={
          <>
            지금은 못 고르지만 <b>있다는 건 알려야</b> 할 때만 잠가요. 영영 못 고르는 항목은 잠그지
            말고 빼요. 색만 흐리게 두면 스크린리더에겐 그냥 항목이라, <code>disabled</code> 속성이
            함께 가야 해요.
          </>
        }
      >
        <Kid label="전부 열림" hint="기본">
          <Select items={ITEMS} aria-label="전부 열림" />
        </Kid>
        <Kid label="제주 잠금">
          <Select items={ITEMS} disabledItems={["jeju"]} aria-label="제주 잠금" />
        </Kid>
      </Kids>

      <Kids
        axis="length"
        title="Scrollable"
        note={
          <>
            스크롤은 저절로 붙어요. 베이스가 하는 일이라 따로 짤 게 없어요. 다만{" "}
            <b>스무 개를 넘기면 다시 생각해요</b>. 스크롤해서 찾아야 하는 목록은 고르는 게 아니라{" "}
            <b>검색</b>하는 거예요.
          </>
        }
      >
        <Kid label="3개">
          <Select items={ITEMS} aria-label="짧은 목록" />
        </Kid>
        <Kid label="24개" hint="스무 개를 넘음">
          <Select items={HOURS} value="12" aria-label="긴 목록" />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "고를 것이 동작일 때",
    then: (
      <>
        Select 가 아니라 <b>Menu</b> 예요. Select 는 <b>값</b>을 고르고, 고른 값은 필드에 남아요.
        동작은 남지 않아요.
      </>
    ),
  },
  {
    when: "고를 것이 두세 개뿐일 때",
    then: (
      <>
        <b>Radio</b> 를 먼저 봐요. 목록을 여는 손짓 한 번이 통째로 사라져요.
      </>
    ),
  },
  {
    when: "라벨이 밖에 없을 때",
    then: (
      <>
        <code>aria-label</code> 이 필수예요. placeholder 는 읽어 주지 않아요.
      </>
    ),
  },
];
