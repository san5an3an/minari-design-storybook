import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { PaginationProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Pagination = impl<PaginationProps>(system, "pagination");
  const [page, setPage] = React.useState(4);

  return (
    <>
      <Master note="눌러서 옮겨 보세요. 지금 쪽은 누를 수 없어요. 눌러도 아무 일이 없으니까요.">
        <Pagination page={page} total={12} onPage={setPage} />
      </Master>

      <Kids
        axis="page"
        title="Current Page"
        note="첫 쪽에서 '이전', 마지막 쪽에서 '다음'은 막아요. 막지 않으면 끝에 닿았다는 것을 알 수 없어요."
      >
        <Kid label="첫 쪽">
          <Pagination page={1} total={12} />
        </Kid>
        <Kid label="가운데">
          <Pagination page={6} total={12} />
        </Kid>
        <Kid label="마지막 쪽">
          <Pagination page={12} total={12} />
        </Kid>
      </Kids>

      <Kids axis="total" title="Page Count" note="쪽이 많아지면 가운데를 접어요. 12쪽에 12개 숫자를 늘어놓지 않아요.">
        <Kid label="3쪽">
          <Pagination page={2} total={3} />
        </Kid>
        <Kid label="40쪽">
          <Pagination page={20} total={40} />
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
        지금 쪽은 <code>aria-current</code> 를 달고 누를 수 없어요.
      </>
    ),
  },
  {
    when: "쪽이 하나뿐일 때",
    then: <>아예 그리지 않아요. 옮길 곳이 없는 컨트롤은 없느니만 못해요.</>,
  },
  {
    when: "끝없이 이어지는 목록일 때",
    then: <>쪽 나눔이 아니라 더 불러오기예요. 전체 쪽 수를 모르면 마지막 쪽을 그릴 수 없어요.</>,
  },
];
