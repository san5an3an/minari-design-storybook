import * as React from "react";
import { Box, Card, CardBody, CheckBox, Tag, Text } from "grommet";

interface Inquiry {
  title: string;
  date: string;
  status: "답변 완료" | "대기 중";
}

const INQUIRIES: Inquiry[] = [
  { title: "역세권 신축 오피스텔", date: "09-30", status: "답변 완료" },
  { title: "신촌 투룸 빌라", date: "09-28", status: "대기 중" },
  { title: "한강뷰 아파트", date: "09-20", status: "답변 완료" },
  { title: "리모델링 단독주택", date: "09-15", status: "답변 완료" },
];

export function InquiriesScreen {
  const [answeredOnly, setAnsweredOnly] = React.useState(false);
  const shown = answeredOnly ? INQUIRIES.filter((q) => q.status === "답변 완료") : INQUIRIES;

  return (
    <Box gap="small">
      <CheckBox
        label="답변 완료만 보기"
        checked={answeredOnly}
        onChange={(e) => setAnsweredOnly(e.target.checked)}
      />
      {shown.map((q, i) => (
        <Card key={i} background="background-front">
          <CardBody direction="row" align="center" justify="between" pad="small">
            <Box>
              <Text weight="bold">{q.title}</Text>
              <Text size="small" color="text-weak">9월 {q.date.split("-")[1]}일 문의</Text>
            </Box>
            <Tag value={q.status} size="small" background={q.status === "답변 완료" ? "status-ok" : "status-warning"} />
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
