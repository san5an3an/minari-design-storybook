import * as React from "react";
import { Avatar, Box, Button, Card, CardBody, CheckBox, Stepper, Tag, Text, Tip } from "grommet";

interface Inquiry {
  title: string;
  date: string;
  status: "답변 완료" | "대기 중";
  agent: string;
  question: string;
  answer?: string;
}

const INQUIRIES: Inquiry[] = [
  { title: "역세권 신축 오피스텔", date: "09-30", status: "답변 완료", agent: "김중개", question: "반려동물 동반 입주 가능한가요?", answer: "네, 소형견 1마리까지 가능합니다. 관리비에 별도 반영돼요." },
  { title: "신촌 투룸 빌라", date: "09-28", status: "대기 중", agent: "박부동산", question: "주차 공간이 세대당 몇 대인가요?" },
  { title: "한강뷰 아파트", date: "09-20", status: "답변 완료", agent: "이공인", question: "전세자금대출 가능한 매물인가요?", answer: "네, 은행 몇 곳과 협약이 돼 있어 상담 가능합니다." },
  { title: "리모델링 단독주택", date: "09-15", status: "답변 완료", agent: "최중개", question: "방문 가능한 날짜를 알려주세요.", answer: "평일 오후 2~6시, 주말은 사전 예약 시 가능합니다." },
];

const STEP_IDS = ["접수", "검토 중", "답변 완료"] as const;
const stepsFor = (status: Inquiry["status"]) =>
  STEP_IDS.map((title, i) => ({
    id: title,
    title,
    status: (status === "답변 완료" || i === 0 ? "completed" : i === 1 ? "pending" : "disabled") as
      | "completed"
      | "pending"
      | "disabled",
  }));

export function InquiriesScreen {
  const [answeredOnly, setAnsweredOnly] = React.useState(false);
  const [selected, setSelected] = React.useState<Inquiry | null>(null);
  const shown = answeredOnly ? INQUIRIES.filter((q) => q.status === "답변 완료") : INQUIRIES;

  if (selected) {
    return (
      <Box gap="small">
        <Button size="small" plain label="← 목록으로" onClick={ => setSelected(null)} style={{ alignSelf: "flex-start" }} />
        <Card background="background-front">
          <CardBody pad="medium" gap="small">
            <Text weight="bold">{selected.title}</Text>
            <Text size="small" color="text-weak">9월 {selected.date.split("-")[1]}일 문의</Text>
            <Box background="background-contrast" round="small" pad="small" margin={{ top: "small" }}>
              <Text size="small">Q. {selected.question}</Text>
            </Box>
            {selected.answer ? (
              <Box background="status-ok" round="small" pad="small">
                <Text size="small" color="var(--semantic-fg-on-success-default)">A. {selected.answer}</Text>
              </Box>
            ) : (
              <Text size="small" color="text-weak">아직 답변 대기 중이에요.</Text>
            )}
          </CardBody>
        </Card>
      </Box>
    );
  }

  return (
    <Box gap="medium">
      <Card pad="medium" background="background-front" round="medium">
        <CardBody direction="row" align="center" justify="between" wrap gap="small">
          <CheckBox
            label="답변 완료만 보기"
            checked={answeredOnly}
            onChange={(e) => setAnsweredOnly(e.target.checked)}
          />
          <Text size="small" color="text-weak">{shown.length}건 표시 중 · 전체 {INQUIRIES.length}건</Text>
        </CardBody>
      </Card>

      {shown.map((q) => (
        <Card key={q.title} background="background-front" round="medium" onClick={ => setSelected(q)} style={{ cursor: "pointer" }}>
          <CardBody pad="medium" gap="small">
            <Box direction="row" align="center" justify="between">
              <Box>
                <Text weight="bold">{q.title}</Text>
                <Text size="small" color="text-weak">9월 {q.date.split("-")[1]}일 문의</Text>
              </Box>
              <Tag value={q.status} size="small" background={q.status === "답변 완료" ? "status-ok" : "status-warning"} />
            </Box>
            <Stepper
              steps={stepsFor(q.status)}
              currentStep={q.status === "답변 완료" ? "답변 완료" : "검토 중"}
              direction="horizontal"
            />
            <Box direction="row" align="center" gap="xsmall">
              <Tip content={`담당 중개사: ${q.agent}`}>
                <Avatar size="small" background="brand">{q.agent.slice(0, 1)}</Avatar>
              </Tip>
              <Text size="xsmall" color="text-weak">{q.agent} 중개사가 담당하고 있어요.</Text>
            </Box>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
