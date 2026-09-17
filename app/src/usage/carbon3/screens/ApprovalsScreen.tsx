import * as React from "react";
import {
  Button, Checkbox, StructuredListBody, StructuredListCell, StructuredListHead, StructuredListRow,
  StructuredListWrapper, Tag, Tile,
} from "@carbon/react";
import { PENDING_APPROVALS } from "../data";

// Tile 목록에 선택 Checkbox, 일괄승인 Button, 통계카드, 이력표 추가

interface ApprovalHistory {
  poNumber: string;
  approver: string;
  date: string;
  result: "승인" | "반려";
}

const APPROVAL_HISTORY: ApprovalHistory[] = [
  { poNumber: "PO-3297", approver: "이팀장", date: "9월 13일", result: "승인" },
  { poNumber: "PO-3290", approver: "이팀장", date: "9월 9일", result: "승인" },
  { poNumber: "PO-3284", approver: "최본부장", date: "9월 2일", result: "반려" },
];

const RESULT_TAG = { 승인: "green", 반려: "red" } as const;

export function ApprovalsScreen {
  const [selected, setSelected] = React.useState<Set<string>>(new Set);
  const totalAmount = PENDING_APPROVALS.reduce((sum, a) => sum + a.amount, 0);

  if (PENDING_APPROVALS.length === 0) {
    return <p style={{ opacity: 0.7 }}>승인 대기 중인 발주가 없습니다.</p>;
  }

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="flex flex-col gap-4">
      {/* 통계카드로 여백 채우기 */}
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))" }}>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>대기 건수</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{PENDING_APPROVALS.length}건</div></Tile>
        <Tile><div style={{ fontSize: "0.75rem", opacity: 0.7 }}>대기 총액</div><div style={{ fontSize: "1.25rem", fontWeight: 600 }}>{totalAmount.toLocaleString}원</div></Tile>
      </div>

      <div className="flex items-center justify-between">
        <Checkbox
          id="select-all" labelText={`전체 선택 (${selected.size}/${PENDING_APPROVALS.length})`}
          checked={selected.size === PENDING_APPROVALS.length}
          onChange={(e) =>
            setSelected(e.target.checked ? new Set(PENDING_APPROVALS.map((a) => a.id)) : new Set)}
        />
        <Button size="sm" disabled={selected.size === 0}>선택 {selected.size}건 일괄 승인</Button>
      </div>

      <div className="flex flex-col gap-2">
        {PENDING_APPROVALS.map((a) => (
          <Tile key={a.id}>
            <div className="flex items-start gap-3">
              <Checkbox
                id={`approve-${a.id}`} labelText="" hideLabel
                checked={selected.has(a.id)} onChange={ => toggle(a.id)}
              />
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span style={{ fontWeight: 600 }}>{a.poNumber}</span>
                  <span style={{ fontWeight: 600 }}>{a.amount.toLocaleString}원</span>
                </div>
                <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>요청자: {a.requester}</span>
                <span style={{ fontSize: "0.8125rem" }}>{a.reason}</span>
              </div>
            </div>
          </Tile>
        ))}
      </div>

      {/* 최근 승인 이력. 여백 채우기용 */}
      <Tile>
        <div style={{ fontSize: "0.8125rem", fontWeight: 600, marginBlockEnd: "0.75rem" }}>최근 승인 이력</div>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>발주번호</StructuredListCell>
              <StructuredListCell head>승인자</StructuredListCell>
              <StructuredListCell head>날짜</StructuredListCell>
              <StructuredListCell head>결과</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            {APPROVAL_HISTORY.map((h) => (
              <StructuredListRow key={h.poNumber}>
                <StructuredListCell noWrap>{h.poNumber}</StructuredListCell>
                <StructuredListCell>{h.approver}</StructuredListCell>
                <StructuredListCell>{h.date}</StructuredListCell>
                <StructuredListCell>
                  <Tag size="sm" type={RESULT_TAG[h.result]}>{h.result}</Tag>
                </StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      </Tile>
    </div>
  );
}
