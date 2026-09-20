import * as React from "react";
import { Avatar, Box, Card, CardBody, Distribution, Grid, Heading, Menu, Meter, Text, Tip } from "grommet";
import { MoreHorizontal } from "lucide-react";

interface Member {
  name: string;
  role: string;
  load: number;
  status: "온라인" | "자리비움" | "오프라인";
  photo: string;
}

const TEAM: Member[] = [
  { name: "김서연", role: "프론트엔드", load: 72, status: "온라인", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=60" },
  { name: "박도윤", role: "백엔드", load: 91, status: "온라인", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=60" },
  { name: "이하은", role: "디자이너", load: 44, status: "자리비움", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60" },
  { name: "최지후", role: "PM", load: 58, status: "오프라인", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=60" },
  { name: "정서준", role: "QA", load: 65, status: "온라인", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=60" },
  { name: "한지우", role: "백엔드", load: 30, status: "온라인", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60" },
];

const STATUS_COLOR: Record<Member["status"], string> = {
  온라인: "status-ok",
  자리비움: "status-warning",
  오프라인: "text-xweak",
};

const ROLE_COUNT = Object.entries(
  TEAM.reduce<Record<string, number>>((acc, m) => ({ ...acc, [m.role]: (acc[m.role] ?? 0) + 1 }), {}),
).map(([role, value]) => ({ role, value }));

export function TeamScreen {
  return (
    <Box gap="medium">
      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">역할별 인원 분포</Text>
          <Distribution
            values={ROLE_COUNT.map((r, i) => ({
              value: r.value,
              label: r.role,
              color: (["brand", "status-ok", "status-warning", "status-critical", "text-weak"] as const)[i % 5],
            }))}
          >
            {(v) => (
              <Box pad="xsmall">
                <Text size="small">{v.label} {v.value}명</Text>
              </Box>
            )}
          </Distribution>
        </CardBody>
      </Card>

      <Grid columns={{ count: "fit", size: "18rem" }} gap="medium">
        {TEAM.map((m) => (
          <Card key={m.name} pad="medium" background="background-front">
            <CardBody gap="small">
              <Box direction="row" align="center" gap="small">
                <Avatar src={m.photo} size="medium" />
                <Box flex>
                  <Text weight="bold">{m.name}</Text>
                  <Text size="small" color="text-weak">{m.role}</Text>
                </Box>
                <Box aria-hidden round="full" background={STATUS_COLOR[m.status]} width="10px" height="10px" />
                <Menu
                  icon={<MoreHorizontal size={16} />}
                  items={[
                    { label: "1:1 잡기", onClick:  => {} },
                    { label: "업무 재배정", onClick:  => {} },
                  ]}
                />
              </Box>
              <Box gap="xsmall">
                <Box direction="row" justify="between" align="center">
                  <Tip content="최근 7일 배정된 업무 시간 기준">
                    <Text size="small" color="text-weak">업무량</Text>
                  </Tip>
                  <Text size="small" color="text-weak">{m.load}%</Text>
                </Box>
                <Meter
                  type="bar"
                  value={m.load}
                  max={100}
                  thickness="small"
                  color={m.load > 85 ? "status-critical" : "brand"}
                  aria-label={`${m.name} 업무량 ${m.load}%`}
                />
              </Box>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Heading level={4} margin="none">팀 규모</Heading>
          <Text color="text-weak">{TEAM.length}명 · 평균 업무량 {Math.round(TEAM.reduce((s, m) => s + m.load, 0) / TEAM.length)}%</Text>
        </CardBody>
      </Card>
    </Box>
  );
}
