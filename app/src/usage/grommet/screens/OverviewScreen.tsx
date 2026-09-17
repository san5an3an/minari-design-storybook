import * as React from "react";
import { Anchor, Box, Card, CardBody, DataChart, Heading, Notification, Paragraph, Tabs, Tab, Text } from "grommet";
import { AlertTriangle, Bot, CalendarClock, CheckCircle2, Clock3 } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60";

const STATS = [
  { label: "진행 중 프로젝트", value: 12, delta: "+2", series: [4, 6, 5, 7, 8, 9, 12], icon: Clock3 },
  { label: "이번 주 완료", value: 8, delta: "+3", series: [1, 2, 3, 4, 5, 6, 8], icon: CheckCircle2 },
  { label: "지연", value: 1, delta: "-1", series: [3, 3, 2, 2, 1, 2, 1], icon: AlertTriangle },
] as const;

interface Deadline { name: string; owner: string; due: string; status: "진행 중" | "지연" | "완료" }
const DEADLINES: Deadline[] = [
  { name: "결제 리뉴얼", owner: "김서연", due: "09-20", status: "진행 중" },
  { name: "온보딩 개편", owner: "박도윤", due: "09-18", status: "지연" },
  { name: "알림 통합", owner: "이하은", due: "09-24", status: "진행 중" },
  { name: "리포트 대시보드", owner: "최지후", due: "09-12", status: "완료" },
  { name: "권한 체계 정리", owner: "정서준", due: "09-27", status: "진행 중" },
];
const STATUS_COLOR: Record<Deadline["status"], string> = {
  "진행 중": "status-ok",
  지연: "status-warning",
  완료: "text-weak",
};

function Hero {
  return (
    <div
      className="flex flex-col justify-end gap-1 overflow-hidden px-6 py-4"
      style={{
        minHeight: "9rem",
        borderRadius: "var(--semantic-radius-container)",
        backgroundImage:
          `linear-gradient(180deg, transparent 0%, transparent 40%, ` +
          `color-mix(in oklch, var(--semantic-bg-brand-default) 25%, black) 100%), url("${HERO_IMAGE}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.25 }}>
        이번 주도 좋은 흐름이에요
      </span>
      <span style={{ color: "white", opacity: 0.9 }}>아래 지표에서 최근 변화를 한눈에 확인해요.</span>
    </div>
  );
}

function SparkStat({ spec }: { spec: (typeof STATS)[number] }) {
  const Icon = spec.icon;
  return (
    <Card pad="medium" background="background-front">
      <CardBody gap="xsmall">
        <Box direction="row" align="center" justify="between">
          <Box direction="row" align="center" gap="xsmall">
            <Icon size={16} />
            <Text color="text-weak" size="small">{spec.label}</Text>
          </Box>
          <Text size="small" color={spec.delta.startsWith("+") ? "status-ok" : "status-critical"}>
            {spec.delta}
          </Text>
        </Box>
        <Heading level={3} margin="none">{spec.value}</Heading>
        <Box height="32px">
          <DataChart
            data={spec.series.map((v, i) => ({ i, v }))}
            series={[{ property: "i" }, { property: "v" }]}
            chart={[{ property: "v", type: "line", thickness: "xsmall", color: "brand" }]}
            size={{ height: "32px", width: "100%" }}
            axis={false}
            guide={false}
            pad="none"
          />
        </Box>
      </CardBody>
    </Card>
  );
}

export function OverviewScreen {
  return (
    <Box gap="medium">
      <Hero />

      {/* grid 사용, DataChart가 Box row에서 높이 밀려 겹치는 문제 있음 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((s) => <SparkStat key={s.label} spec={s} />)}
      </div>

      {/* Box row wrap 대신 CSS grid 사용. SVG 높이를 반영하지 못해 카드와 겹치는 문제 있음 */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Text weight="bold">전체 진행률</Text>
            <DataChart
              data={[
                { week: "1주", 완료: 20 }, { week: "2주", 완료: 35 }, { week: "3주", 완료: 48 },
                { week: "4주", 완료: 55 }, { week: "5주", 완료: 68 },
              ]}
              series={["week", "완료"]}
              chart={[{ property: "완료", type: "bar", color: "brand", thickness: "medium" }]}
              axis={{ x: { property: "week" }, y: true }}
              size={{ height: "small", width: "100%" }}
              pad={{ top: "small" }}
            />
          </CardBody>
        </Card>

        <Card pad="medium" background="background-front">
          <CardBody gap="small">
            <Box direction="row" align="center" gap="xsmall">
              <CalendarClock size={16} />
              <Text weight="bold">마감 현황</Text>
            </Box>
            {/* Tabs 로 진행 중과 완료 표시 */}
            {/* activeIndex 명시 지정. 안 주면 밑줄과 내용 탭이 어긋나는 문제임 */}
            <Tabs activeIndex={0}>
              <Tab title="진행 중">
                {DEADLINES.filter((d) => d.status !== "완료").map((d, i) => (
                  <Box
                    key={d.name}
                    direction="row"
                    justify="between"
                    align="center"
                    pad={{ vertical: "xsmall" }}
                    border={i > 0 ? { side: "top", color: "border" } : undefined}
                  >
                    <Box>
                      <Text size="small">{d.name}</Text>
                      <Text size="xsmall" color="text-weak">{d.owner} · {d.due}</Text>
                    </Box>
                    <Text size="xsmall" color={STATUS_COLOR[d.status]}>{d.status}</Text>
                  </Box>
                ))}
              </Tab>
              <Tab title="완료">
                {DEADLINES.filter((d) => d.status === "완료").map((d, i) => (
                  <Box
                    key={d.name}
                    direction="row"
                    justify="between"
                    align="center"
                    pad={{ vertical: "xsmall" }}
                    border={i > 0 ? { side: "top", color: "border" } : undefined}
                  >
                    <Box>
                      <Text size="small">{d.name}</Text>
                      <Text size="xsmall" color="text-weak">{d.owner} · {d.due}</Text>
                    </Box>
                    <Text size="xsmall" color={STATUS_COLOR[d.status]}>{d.status}</Text>
                  </Box>
                ))}
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>

      {/* Notification은 div로 감싸 Box 밖 배치. Card에 두면 형제와 겹치는 문제임 */}
      <div
        className="flex flex-col gap-3"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-default)",
          borderRadius: "var(--semantic-radius-container)",
          padding: "1rem",
        }}
      >
        <Notification
          icon={<Bot size={20} />}
          status="unknown"
          title="AI 요약"
          message="이번 주 지연 위험이 가장 큰 항목은 「온보딩 개편」이에요. 담당자 박도윤님이 이틀째 업무량 90%를 넘겼어요."
        />
        <Paragraph size="small" color="text-weak" margin="none">
          지난 4주 완료 추세를 보면 팀 처리 속도가 꾸준히 올라가고 있어요. 이 흐름이 이어지면
          다음 주 안에 지연 항목을 모두 해소할 수 있을 것으로 보여요.
        </Paragraph>
        <Anchor href="#" label="전체 위험 리포트 보기" size="small" />
      </div>
    </Box>
  );
}
