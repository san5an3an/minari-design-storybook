import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { CommandProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Command = impl<CommandProps>(system, "command");
  return (
    <>
      <Master note="쳐서 좁히고 골라 실행해요. 이것만으로 기능을 제공하면, 있는 줄 모르는 사람은 영영 못 써요.">
        <div style={{ width: "22rem", maxWidth: "100%" }}>
          <Command
            className="rounded-lg border"
            groups={[
              { heading: "최근", items: [
                { label: "새 문서", hint: "⌘N" },
                { label: "설정 열기", hint: "⌘," },
              ] },
              { heading: "이동", items: [
                { label: "보관함으로" },
                { label: "휴지통으로" },
              ] },
            ]}
          />
        </div>
      </Master>

      <Kids axis="empty" title="Usage" note="쳐서 아무것도 안 걸리면 빈 상태가 아니라 다음 수를 알려 줘요.">
        <Kid label="빈 결과 문구">
          <div style={{ width: "20rem", maxWidth: "100%" }}>
            <Command
              className="rounded-lg border"
              placeholder="여기에 아무 말이나 쳐 보세요"
              empty="찾은 게 없어요. 다른 낱말로 찾아보세요."
              groups={[{ heading: "동작", items: [{ label: "문서 만들기" }] }]}
            />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "여기에만 있는 기능", then: <>두지 마세요. 이건 <b>빠른 길</b>이지 유일한 길이 아니에요.</> },
  { when: "값을 고를 때", then: <><b>Combobox</b> 예요. 여기선 고르면 실행돼요.</> },
  { when: "목록이 정해져 있을 때", then: <><b>Menu</b> 예요. 여긴 쳐서 좁혀요.</> },
];
