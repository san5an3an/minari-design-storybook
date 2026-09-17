import * as React from "react";
import {
  Accordion, AccordionPanel, Box, Card, CardBody, Heading, Meter, Pagination, Table, TableBody,
  TableCell, TableHeader, TableRow, Tag, Text,
} from "grommet";

interface Ticket { event: string; date: string; seat: string; price: number; status: "확정" | "취소됨" }

const TICKETS: Ticket[] = [
  { event: "가을 재즈 나이트", date: "10-04", seat: "자유석 · 1매", price: 45000, status: "확정" },
  { event: "인디 록 페스티벌", date: "10-25", seat: "스탠딩 · 2매", price: 136000, status: "확정" },
  { event: "여름 클래식 콘서트", date: "08-30", seat: "R석 A12", price: 55000, status: "취소됨" },
];

const MONTHLY_BUDGET = 250000;

export function TicketsScreen {
  const spent = TICKETS.filter((t) => t.status === "확정").reduce((s, t) => s + t.price, 0);
  const [page, setPage] = React.useState(1);

  return (
    <Box gap="medium">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
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
            <Heading level={3} margin="none">{TICKETS.filter((t) => t.status === "확정").length}장</Heading>
            <Text size="small" color="text-weak">취소된 티켓 {TICKETS.filter((t) => t.status === "취소됨").length}장 · 환불 완료</Text>
          </CardBody>
        </Card>
      </div>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">티켓 내역</Text>
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
                {TICKETS.map((t) => (
                  <TableRow key={t.event}>
                    <TableCell><Text weight="bold" size="small">{t.event}</Text></TableCell>
                    <TableCell><Text size="small">10월 {t.date.split("-")[1]}일</Text></TableCell>
                    <TableCell><Text size="small">{t.seat}</Text></TableCell>
                    <TableCell><Text size="small">{t.price.toLocaleString}원</Text></TableCell>
                    <TableCell>
                      <Tag value={t.status} size="small" background={t.status === "확정" ? "status-ok" : "text-weak"} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          <Box direction="row" justify="end">
            {/* 이번 달 3건만 표시, 전체 24건 가정하고 페이지네이션 적용 */}
            <Pagination page={page} step={3} numberItems={24} onChange={({ page: p }) => setPage(p)} />
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
    </Box>
  );
}
