import * as React from "react";
import {
  Accordion, AccordionPanel, Box, Button, Card, CardBody, Heading, Layer, Meter, Pagination, Table,
  TableBody, TableCell, TableHeader, TableRow, Tag, Text,
} from "grommet";

interface Ticket { event: string; date: string; seat: string; price: number; status: "확정" | "취소됨" }

// 최근 4개월 예매 이력으로 표 8~12행 채우기
const INITIAL_TICKETS: Ticket[] = [
  { event: "가을 재즈 나이트", date: "10-04", seat: "자유석 · 1매", price: 45000, status: "확정" },
  { event: "인디 록 페스티벌", date: "10-25", seat: "스탠딩 · 2매", price: 136000, status: "확정" },
  { event: "여름 클래식 콘서트", date: "08-30", seat: "R석 A12", price: 55000, status: "취소됨" },
  { event: "현대미술 특별전", date: "08-18", seat: "도슨트 투어권", price: 18000, status: "확정" },
  { event: "오픈소스 기여 밋업", date: "08-11", seat: "자유석 · 1매", price: 0, status: "확정" },
  { event: "봄 재즈 브런치", date: "07-20", seat: "자유석 · 2매", price: 78000, status: "확정" },
  { event: "타입스크립트 심화 워크숍", date: "07-05", seat: "자유석 · 1매", price: 55000, status: "취소됨" },
  { event: "신년 콘서트", date: "06-14", seat: "R석 B08", price: 62000, status: "확정" },
];

const MONTHLY_BUDGET = 250000;

// 스캔 불가 고정 9×9 QR 모양 패턴, 파인더 흉내만
const QR_PATTERN: readonly number[][] = [
  [1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 1, 0],
  [1, 1, 1, 0, 1, 0, 1, 0, 1],
];

// 630~890px 영역이 1200px 창보다 좁아 lg: 항상 적용되는 문제 있음
const LAYOUT_CSS = `
.g2tix { container-type: inline-size; container-name: g2tix; }
.g2tix-stats { display: grid; gap: 1rem; grid-template-columns: minmax(0, 1fr); }
@container g2tix (min-width: 26rem) {
  .g2tix-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
`;

export function TicketsScreen {
  const [tickets, setTickets] = React.useState<Ticket[]>(INITIAL_TICKETS);
  const [selected, setSelected] = React.useState<Ticket | null>(null);
  // '10-' 접두사로 필터링해 이번 달 데이터만 선별하기
  const spent = tickets.filter((t) => t.status === "확정" && t.date.startsWith("10-")).reduce((s, t) => s + t.price, 0);
  const [page, setPage] = React.useState(1);

  // React 19 규칙상 핸들러 진입 시 값 즉시 추출. 여기선 해당 없음
  const refund = (target: Ticket) => {
    setTickets((prev) =>
      prev.map((t) => (t.event === target.event && t.date === target.date ? { ...t, status: "취소됨" } : t)),
    );
    setSelected((prev) => (prev ? { ...prev, status: "취소됨" } : prev));
  };

  return (
    <>
    <style>{LAYOUT_CSS}</style>
    <Box gap="medium" className="g2tix">
      <div className="g2tix-stats">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Text weight="bold">이번 달 예매 지출</Text>
            <Heading level={3} margin="none">{spent.toLocaleString}원</Heading>
            <Meter type="bar" value={spent} max={MONTHLY_BUDGET} thickness="small" color={spent > MONTHLY_BUDGET ? "status-critical" : "brand"} aria-label="이번 달 지출" />
            <Text size="small" color="text-weak">월 예산 {MONTHLY_BUDGET.toLocaleString}원 중 {Math.round((spent / MONTHLY_BUDGET) * 100)}% 사용</Text>
          </CardBody>
        </Card>
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Text weight="bold">확정 티켓</Text>
            <Heading level={3} margin="none">{tickets.filter((t) => t.status === "확정").length}장</Heading>
            <Text size="small" color="text-weak">취소된 티켓 {tickets.filter((t) => t.status === "취소됨").length}장 · 환불 완료</Text>
          </CardBody>
        </Card>
      </div>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">티켓 내역. 행을 누르면 상세가 열려요.</Text>
          <Box overflow={{ horizontal: "auto" }}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell scope="col">이벤트</TableCell>
                  <TableCell scope="col">일시</TableCell>
                  <TableCell scope="col">좌석</TableCell>
                  <TableCell scope="col">금액</TableCell>
                  <TableCell scope="col">상태</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((t) => (
                  <TableRow
                    key={t.event}
                    onClick={ => setSelected(t)}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell><Text weight="bold" size="small">{t.event}</Text></TableCell>
                    <TableCell><Text size="small">10월 {t.date.split("-")[1]}일</Text></TableCell>
                    <TableCell><Text size="small">{t.seat}</Text></TableCell>
                    <TableCell><Text size="small">{t.price.toLocaleString}원</Text></TableCell>
                    <TableCell>
                      {/* 배경과 글자 대비 검증. 취소 상태만 대비 기준 미달 문제가 있음 */}
                      <Tag value={t.status} size="small" background={t.status === "확정" ? "status-ok" : "background-contrast"} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box direction="row" justify="end">
            {/* 이번 페이지 8건 모두 표시, 전체 24건 가정하고 페이지네이션 적용 */}
            <Pagination page={page} step={8} numberItems={24} onChange={({ page: p }) => setPage(p)} />
          </Box>
        </CardBody>
      </Card>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">환불·교환 안내</Text>
          <Accordion>
            <AccordionPanel label="공연 7일 전까지 전액 환불">
              <Text size="small" color="text-weak" margin={{ vertical: "small" }}>
                공연일 기준 7일 전까지는 수수료 없이 전액 환불돼요. 이후에는 티켓 금액의 10%가 차감돼요.
              </Text>
            </AccordionPanel>
            <AccordionPanel label="좌석 변경은 공연 1일 전까지">
              <Text size="small" color="text-weak" margin={{ vertical: "small" }}>
                동일 공연 내 좌석 등급 변경은 잔여 좌석이 있을 때만 가능해요.
              </Text>
            </AccordionPanel>
          </Accordion>
        </CardBody>
      </Card>

      {/* 행 클릭 시 상세 이동. position=center, onClickOutside/onEsc로 닫기 */}
      {selected ? (
        <Layer
          position="center"
          onClickOutside={ => setSelected(null)}
          onEsc={ => setSelected(null)}
          responsive={false}
        >
          <Box pad="medium" gap="medium" width={{ min: "18rem", max: "22rem" }}>
            <Box direction="row" justify="between" align="start" gap="small">
              <Box gap="2px">
                <Text weight="bold" size="large">{selected.event}</Text>
                <Text size="small" color="text-weak">10월 {selected.date.split("-")[1]}일 · {selected.seat}</Text>
              </Box>
              <Tag value={selected.status} size="small" background={selected.status === "확정" ? "status-ok" : "background-contrast"} />
            </Box>

            <Box align="center" gap="xsmall" pad="medium" round="small" background="background-back">
              {/* QR 표시 영역, 9×9 고정 패턴 */}
              {/* 셀 색 dark-6/light-1 지정, grommet.py 중립 12계단 중 장식용 스와치 사용 */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "2px", width: "7rem", height: "7rem" }}>
                {QR_PATTERN.flatMap((row, ri) =>
                  row.map((cell, ci) => (
                    <Box key={`${ri}-${ci}`} background={cell ? "dark-6" : "light-1"} />
                  )),
                )}
              </div>
              <Text size="xsmall" color="text-weak">입장할 때 이 QR을 보여주세요.</Text>
            </Box>

            <Box direction="row" justify="between" border={{ side: "top", color: "border" }} pad={{ top: "small" }}>
              <Box>
                <Text size="small" color="text-weak">결제 금액</Text>
                <Text weight="bold">{selected.price.toLocaleString}원</Text>
              </Box>
              <Box align="end">
                <Text size="small" color="text-weak">환불 정책</Text>
                <Text size="small">공연 7일 전까지 전액</Text>
              </Box>
            </Box>

            <Box direction="row" gap="small" justify="end" align="center">
              <Button label="닫기" onClick={ => setSelected(null)} />
              {selected.status === "확정" ? (
                <Button
                  primary
                  color="status-critical"
                  onClick={ => refund(selected)}
                  label={<Text size="small" weight="bold" color="var(--semantic-fg-on-danger-default)">환불 신청</Text>}
                />
              ) : (
                <Text size="small" color="text-weak">환불 완료된 티켓이에요.</Text>
              )}
            </Box>
          </Box>
        </Layer>
      ) : null}
    </Box>
    </>
  );
}
