import * as React from "react";
import { Box, Card, CardBody, Text } from "grommet";

interface Ticket {
  event: string;
  date: string;
  seat: string;
  status: "확정" | "취소됨";
}

const TICKETS: Ticket[] = [
  { event: "가을 재즈 나이트", date: "10-04", seat: "자유석 · 1매", status: "확정" },
  { event: "인디 록 페스티벌", date: "10-25", seat: "스탠딩 · 2매", status: "확정" },
  { event: "여름 클래식 콘서트", date: "08-30", seat: "R석 A12", status: "취소됨" },
];

export function TicketsScreen {
  return (
    <Box gap="small">
      {TICKETS.map((t, i) => (
        <Card key={i} background="background-front">
          <CardBody direction="row" align="center" justify="between" pad="small">
            <Box>
              <Text weight="bold">{t.event}</Text>
              <Text size="small" color="text-weak">10월 {t.date.split("-")[1]}일 · {t.seat}</Text>
            </Box>
            <Text color={t.status === "확정" ? "status-ok" : "text-weak"} size="small">{t.status}</Text>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
