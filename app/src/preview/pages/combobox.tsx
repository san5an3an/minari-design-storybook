import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ComboboxProps } from "../../systems/props";
import type { PageProps } from "./types";

const CITIES = ["서울", "성남", "수원", "인천", "고양", "용인", "부산", "대구", "광주", "대전"];

export function Page({ system }: PageProps) {
  const Combobox = impl<ComboboxProps>(system, "combobox");
  return (
    <>
      <Master note="쳐서 좁혀요. 항목이 열 개 남짓이면 Select 가 나아요. 치는 게 고르는 것보다 손이 더 가요.">
        <Combobox items={CITIES} placeholder="도시를 찾아보세요" />
      </Master>

      <Kids axis="state" title="State" note="여럿 고르면 고른 게 필드 안에 남아요. 필드 밖에 두면 지우려면 어디를 눌러야 할지 알 수 없어요.">
        <Kid label="하나" hint="기본">
          <Combobox items={CITIES} placeholder="도시" />
        </Kid>
        <Kid label="여럿" hint="multiple">
          <Combobox items={CITIES} placeholder="도시들" multiple />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "항목이 적을 때", then: <><b>Select</b> 예요. 치는 게 고르는 것보다 손이 더 가요.</> },
  { when: "고르면 실행될 때", then: <><b>Command</b> 예요. 여기선 <b>값이 정해져요.</b></> },
  { when: "고른 뒤", then: <>무엇을 골랐는지 <b>필드에 남아요.</b></> },
];
