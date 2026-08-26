import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { DatatableProps } from "../../systems/props";
import type { PageProps } from "./types";

const COLUMNS = [
  { key: "who", header: "이름" },
  { key: "state", header: "상태" },
  { key: "amount", header: "금액", numeric: true },
];

const ROWS = [
  { who: "김하늘", state: "결제 완료", amount: "120,000" },
  { who: "이바다", state: "대기", amount: "84,000" },
  { who: "박구름", state: "환불", amount: "12,500" },
  { who: "정노을", state: "결제 완료", amount: "56,000" },
  { who: "최달빛", state: "대기", amount: "203,000" },
];

export function Page({ system }: PageProps) {
  const Datatable = impl<DatatableProps>(system, "datatable");
  return (
    <>
      <Master note="같은 표에 기능이 붙은 거예요. 기능이 필요 없으면 그냥 Table 이에요. 안 쓰는 정렬 화살표는 소음이에요.">
        <Datatable columns={COLUMNS} rows={ROWS} filterKey="who" filterPlaceholder="이름으로 걸러요" />
      </Master>

      <Kids axis="feature" title="Usage" note="열 이름이 곧 정렬 버튼이에요. 이름 옆에 화살표 버튼을 따로 두면 누를 위치가 둘이 돼요.">
        <Kid label="정렬만">
          <Datatable columns={COLUMNS} rows={ROWS.slice(0, 3)} />
        </Kid>
        <Kid label="+ 쪽 넘김" hint="pageSize">
          <Datatable columns={COLUMNS} rows={ROWS} pageSize={2} />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "기능이 필요 없을 때", then: <><b>Table</b> 이에요. 안 쓰는 화살표는 소음이에요.</> },
  { when: "고르기가 쪽을 넘어갈 때", then: <>몇 개 골랐는지 <b>늘 보여 주세요.</b></> },
  { when: "걸렀을 때", then: <>건 조건이 화면에 남아요. 결과만 바뀌면 왜 줄었는지 몰라요.</> },
];
