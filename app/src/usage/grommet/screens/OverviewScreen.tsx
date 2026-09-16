import * as React from "react";
import { Box, Card, CardBody, Heading, Meter, Text } from "grommet";
import { DataTable } from "grommet";

const STATS = [
  { label: "진행 중 프로젝트", value: "12", delta: "+2" },
  { label: "이번 주 완료", value: "8", delta: "+3" },
  { label: "지연", value: "1", delta: "-1" },
] as const;

interface ProjectRow {
  name: string;
  owner: string;
  status: "진행 중" | "지연" | "완료";
  due: string;
}

const PROJECTS: ProjectRow[] = [
  { name: "결제 리뉴얼", owner: "김서연", status: "진행 중", due: "09-20" },
  { name: "온보딩 개편", owner: "박도윤", status: "지연", due: "09-18" },
  { name: "알림 통합", owner: "이하은", status: "진행 중", due: "09-24" },
  { name: "리포트 대시보드", owner: "최지후", status: "완료", due: "09-12" },
  { name: "권한 체계 정리", owner: "정서준", status: "진행 중", due: "09-27" },
];

// 상태별 Grommet 색 이름 매핑. 테마가 값을 지정
const STATUS_COLOR: Record<ProjectRow["status"], string> = {
  "진행 중": "status-ok",
  지연: "status-warning",
  완료: "text-weak",
};

export function OverviewScreen {
  return (
    <Box gap="medium">
      <Box direction="row" wrap gap="medium">
        {STATS.map((s) => (
          <Card key={s.label} pad="medium" flex={{ grow: 1, shrink: 1 }} background="background-front">
            <CardBody gap="xsmall">
              <Text color="text-weak" size="small">{s.label}</Text>
              <Heading level={3} margin="none">{s.value}</Heading>
              <Text size="small" color={s.delta.startsWith("+") ? "status-ok" : "status-critical"}>
                {s.delta} 지난주 대비
              </Text>
            </CardBody>
          </Card>
        ))}
      </Box>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">전체 진행률</Text>
          <Meter
            type="bar"
            value={68}
            max={100}
            thickness="small"
            color="brand"
            aria-label="전체 진행률 68%"
          />
          <Text size="small" color="text-weak">68% 완료 · 목표 9월 30일</Text>
        </CardBody>
      </Card>

      <Card pad="medium" background="background-front">
        <CardBody gap="small">
          <Text weight="bold">최근 프로젝트</Text>
          {/* overflow auto로 표만 스크롤. 폭 안 고정 시 셀 뭉개지는 문제 있음 */}
          <Box overflow={{ horizontal: "auto" }}>
            <DataTable<ProjectRow>
              data={PROJECTS}
              columns={[
                { property: "name", header: "프로젝트" },
                { property: "owner", header: "담당자" },
                {
                  property: "status",
                  header: "상태",
                  render: (d) => <Text color={STATUS_COLOR[d.status]}>{d.status}</Text>,
                },
                { property: "due", header: "마감일" },
              ]}
              size="small"
            />
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
