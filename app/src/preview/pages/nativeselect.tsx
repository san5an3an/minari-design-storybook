import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { NativeselectImpl } from "../../systems/props";
import type { PageProps } from "./types";

const STATUS = [
  ["", "상태를 고르세요"],
  ["todo", "할 일"],
  ["doing", "진행 중"],
  ["done", "끝남"],
  ["hold", "보류"],
] as const;

export function Page({ system }: PageProps) {
  const NativeSelect = compound<NativeselectImpl>(system, "nativeselect");
  const options = STATUS.map(([v, label]) => (
    <NativeSelect.Option key={label} value={v}>{label}</NativeSelect.Option>
  ));
  return (
    <>
      <Master note="필드는 이 시스템을 따르지만 목록은 기기가 그려요. 좁은 화면에선 OS 굴림판이 떠요. 항목에 표시·설명·검색이 필요하면 Select 예요.">
        <NativeSelect aria-label="상태">{options}</NativeSelect>
      </Master>

      <Kids axis="state" note="잘못된 값은 aria-invalid 로 알려요. 붉은 테두리만으론 색을 못 보는 사람에게 아무 말도 안 한 거예요.">
        <Kid label="기본">
          <NativeSelect aria-label="상태">{options}</NativeSelect>
        </Kid>
        <Kid label="aria-invalid" hint="잘못됨">
          <NativeSelect aria-label="상태" aria-invalid>{options}</NativeSelect>
        </Kid>
        <Kid label="disabled" hint="고를 수 없음">
          <NativeSelect aria-label="상태" disabled>{options}</NativeSelect>
        </Kid>
      </Kids>

      <Kids
        axis="parts"
        title="OptGroup"
        note="구분선은 없어요. 이름 자체가 경계이고, 기기가 그리는 목록 안엔 항목과 그룹 말고 아무것도 못 넣어요."
      >
        <Kid label="OptGroup">
          <NativeSelect aria-label="재료">
            <NativeSelect.Option value="">골라 주세요</NativeSelect.Option>
            <NativeSelect.OptGroup label="과일">
              <NativeSelect.Option value="apple">사과</NativeSelect.Option>
              <NativeSelect.Option value="banana">바나나</NativeSelect.Option>
            </NativeSelect.OptGroup>
            <NativeSelect.OptGroup label="채소">
              <NativeSelect.Option value="carrot">당근</NativeSelect.Option>
              <NativeSelect.Option value="spinach">시금치</NativeSelect.Option>
            </NativeSelect.OptGroup>
          </NativeSelect>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "항목을 꾸며야 할 때", then: <>여기선 안 돼요. 목록은 기기가 그려요. <b>Select</b> 를 쓰세요.</> },
  { when: "안내 문구를 첫 항목에 둘 때", then: <>값을 비워 두세요. 값이 있으면 안 골랐는데 고른 게 돼요.</> },
  { when: "값이 잘못됐을 때", then: <><code>aria-invalid</code> 로 알려요. 색만으론 안 돼요.</> },
  { when: "좁은 화면·긴 목록", then: <>기기 굴림판이 더 나아요. 이쪽을 고르세요.</> },
];
