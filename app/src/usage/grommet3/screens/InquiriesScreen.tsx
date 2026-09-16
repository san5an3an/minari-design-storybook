import * as React from "react";
import { Box, Card, CardBody, Text } from "grommet";

interface Inquiry {
  title: string;
  date: string;
  status: "답변 완료" | "대기 중";
}

const INQUIRIES: Inquiry[] = [
  { title: "역세권 신축 오피스텔", date: "09-30", status: "답변 완료" },
  { title: "신촌 투룸 빌라", date: "09-28", status: "대기 중" },
];

export function InquiriesScreen {
  return (
    <Box gap="small">
      {INQUIRIES.map((q, i) => (
        <Card key={i} background="background-front">
          <CardBody direction="row" align="center" justify="between" pad="small">
            <Box>
              <Text weight="bold">{q.title}</Text>
              <Text size="small" color="text-weak">9월 {q.date.split("-")[1]}일 문의</Text>
            </Box>
            <Text size="small" color={q.status === "답변 완료" ? "status-ok" : "status-warning"}>{q.status}</Text>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
