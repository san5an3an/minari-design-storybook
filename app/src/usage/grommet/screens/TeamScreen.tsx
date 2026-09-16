import * as React from "react";
import { Avatar, Box, Card, CardBody, Meter, Text } from "grommet";

interface Member {
  name: string;
  role: string;
  load: number;
  status: "온라인" | "자리비움" | "오프라인";
}

const TEAM: Member[] = [
  { name: "김서연", role: "프론트엔드", load: 72, status: "온라인" },
  { name: "박도윤", role: "백엔드", load: 91, status: "온라인" },
  { name: "이하은", role: "디자이너", load: 44, status: "자리비움" },
  { name: "최지후", role: "PM", load: 58, status: "오프라인" },
  { name: "정서준", role: "QA", load: 65, status: "온라인" },
  { name: "한지우", role: "백엔드", load: 30, status: "온라인" },
];

const STATUS_COLOR: Record<Member["status"], string> = {
  온라인: "status-ok",
  자리비움: "status-warning",
  오프라인: "text-xweak",
};

export function TeamScreen {
  return (
    <Box direction="row" wrap gap="medium">
      {TEAM.map((m) => (
        <Card key={m.name} pad="medium" width="medium" background="background-front">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="small">
              <Avatar background="brand" size="medium">
                {m.name.slice(0, 1)}
              </Avatar>
              <Box>
                <Text weight="bold">{m.name}</Text>
                <Text size="small" color="text-weak">{m.role}</Text>
              </Box>
              <Box
                aria-hidden
                round="full"
                background={STATUS_COLOR[m.status]}
                width="10px"
                height="10px"
                margin={{ left: "auto" }}
              />
            </Box>
            <Box gap="xsmall">
              <Box direction="row" justify="between">
                <Text size="small" color="text-weak">업무량</Text>
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
    </Box>
  );
}
