import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { TableImpl } from "../../systems/props";
import type { PageProps } from "./types";

const ROWS = [
  { no: "INV-001", who: "김하늘", state: "결제 완료", amt: "120,000" },
  { no: "INV-002", who: "이바다", state: "대기", amt: "84,000" },
  { no: "INV-003", who: "박구름", state: "환불", amt: "12,500" },
];

export function Page({ system }: PageProps) {
  const Table = compound<TableImpl>(system, "table");
  return (
    <>
      <Master note="열마다 뜻이 있어요. 같은 열끼리 비교하려고 표를 써요. 비교할 게 없으면 목록이 나아요.">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>번호</Table.Head>
              <Table.Head>이름</Table.Head>
              <Table.Head>상태</Table.Head>
              <Table.Head className="text-right">금액</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {ROWS.map((r) => (
              <Table.Row key={r.no}>
                <Table.Cell>{r.no}</Table.Cell>
                <Table.Cell>{r.who}</Table.Cell>
                <Table.Cell>{r.state}</Table.Cell>
                <Table.Cell className="text-right tabular-nums">{r.amt}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Master>

      <Kids axis="parts" title="Parts" note="Caption 은 표 아래에 서요. 합계는 Footer 에 둬야 줄을 세어도 섞이지 않아요.">
        <Kid label="+ Caption">
          <Table>
            <Table.Body>
              <Table.Row><Table.Cell>INV-001</Table.Cell><Table.Cell>120,000</Table.Cell></Table.Row>
            </Table.Body>
            <Table.Caption>8월 결제 내역</Table.Caption>
          </Table>
        </Kid>
        <Kid label="+ Footer" hint="합계">
          <Table>
            <Table.Body>
              <Table.Row><Table.Cell>INV-001</Table.Cell><Table.Cell className="text-right tabular-nums">120,000</Table.Cell></Table.Row>
              <Table.Row><Table.Cell>INV-002</Table.Cell><Table.Cell className="text-right tabular-nums">84,000</Table.Cell></Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row><Table.Cell>합계</Table.Cell><Table.Cell className="text-right tabular-nums">204,000</Table.Cell></Table.Row>
            </Table.Footer>
          </Table>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "줄이 뜻을 가질 때", then: <><b>Listrow</b> 예요. 표는 <b>열</b>이 뜻을 가져요.</> },
  { when: "수를 담을 때", then: <>오른쪽으로 붙이고 자릿수를 맞춰요. 왼쪽 정렬이면 자릿수를 눈으로 못 세요.</> },
  { when: "좁은 화면", then: <>가로로 굴러가요. 그쪽이 겉을 한 겹 감싸 두었어요. 이 시스템이 또 감싸지 않아요.</> },
];
