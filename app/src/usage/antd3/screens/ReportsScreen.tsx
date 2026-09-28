import * as React from "react";
import {
  Alert, App, Card, Dropdown, Empty, Flex, Progress, Segmented, Select, Table, Typography, theme,
} from "antd";
import type { MenuProps, TableColumnsType } from "antd";
import {
  ArrowDownOutlined, ArrowUpOutlined, CheckCircleOutlined, DownloadOutlined, FieldTimeOutlined,
  ThunderboltOutlined, WarningOutlined,
} from "@ant-design/icons";
import {
  Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip as ChartTooltip, XAxis, YAxis,
} from "recharts";
import {
  DUE_SOON_DAYS, PROJECTS, TASK_STATUSES, TEAMS, WEEKLY_FLOW, doneCount, dueBadge, progressOf, statusOf,
  type TaskStatus, type TeamName,
} from "../data";
import { CHART, LegendItem, MemberLine, PROJECT_TONE, SERIES, StatTile, ToneTag } from "../parts";

type Span = 4 | 8 | 12;
type TeamFilter = "all" | TeamName;

// 과업 상태를 도넛 세그먼트 색으로 매핑
const STATUS_FILL: Record<TaskStatus, string> = {
  "할 일": SERIES.idle,
  진행중: SERIES.first,
  검토: SERIES.fourth,
  완료: SERIES.third,
};

interface TeamRow {
  team: TeamName;
  projects: number;
  done: number;
  total: number;
  rate: number;
  delayed: number;
}

const avg = (xs: number[]) => (xs.length === 0 ? 0 : xs.reduce((s, x) => s + x, 0) / xs.length);

// 증감 문구 표시, 이전 구간 없으면 제외
function Delta({ now, before, unit, lowerIsBetter = false }: { now: number; before: number | null; unit: string; lowerIsBetter?: boolean }) {
  const { token } = theme.useToken;
  if (before === null) return <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>앞 구간 없음</Typography.Text>;
  const diff = now - before;
  if (Math.abs(diff) < 0.05) return <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>앞 구간과 같아요</Typography.Text>;
  const good = lowerIsBetter ? diff < 0 : diff > 0;
  return (
    <Typography.Text style={{ fontSize: token.fontSizeSM, color: good ? token.colorSuccessText : token.colorErrorText }}>
      {diff > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {Math.abs(diff).toFixed(1)}{unit}
      <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}> 앞 {`구간 대비`}</Typography.Text>
    </Typography.Text>
  );
}

export function ReportsScreen {
  const { token } = theme.useToken;
  const { message } = App.useApp;
  const [span, setSpan] = React.useState<Span>(8);
  const [team, setTeam] = React.useState<TeamFilter>("all");

  // 과업 측
  const scoped = PROJECTS.filter((p) => team === "all" || p.team === team);
  const withStatus = scoped.map((p) => ({ project: p, status: statusOf(p, p.tasks), progress: progressOf(p.tasks) }));
  const tasks = scoped.flatMap((p) => p.tasks);
  const completion = progressOf(tasks);
  const delayed = withStatus.filter((x) => x.status === "지연");
  const statusCounts = TASK_STATUSES.map((s) => ({ status: s, count: tasks.filter((t) => t.status === s).length }));

  const teamRows: TeamRow[] = TEAMS.map((t) => {
    const own = PROJECTS.filter((p) => p.team === t);
    const ownTasks = own.flatMap((p) => p.tasks);
    return {
      team: t,
      projects: own.length,
      done: doneCount(ownTasks),
      total: ownTasks.length,
      rate: progressOf(ownTasks),
      delayed: own.filter((p) => statusOf(p, p.tasks) === "지연").length,
    };
  });

  // 주간 흐름은 마지막 span셀과 이전 span셀 비교 확인
  const window = WEEKLY_FLOW.slice(-span);
  const before = WEEKLY_FLOW.length >= span * 2 ? WEEKLY_FLOW.slice(-span * 2, -span) : null;
  const doneAvg = avg(window.map((w) => w.done));
  const doneAvgBefore = before ? avg(before.map((w) => w.done)) : null;
  const leadAvg = avg(window.map((w) => w.leadDays));
  const leadAvgBefore = before ? avg(before.map((w) => w.leadDays)) : null;

  // 위험 신호 판별 기준, 지연 또는 마감 7일 이내 진행률 50% 미만
  const risks = withStatus
    .filter((x) => x.status === "지연" || (x.status === "진행중" && x.project.dueInDays <= DUE_SOON_DAYS && x.progress < 50))
    .sort((a, b) => a.project.dueInDays - b.project.dueInDays);

  const exportMenu: MenuProps = {
    items: [
      { key: "csv", label: "CSV로 내보내기" },
      { key: "pdf", label: "PDF 리포트 만들기" },
    ],
    onClick: ({ key }) => message.success(key === "csv" ? "CSV 파일을 준비했어요" : "PDF 리포트를 만들고 있어요"),
  };

  const teamColumns: TableColumnsType<TeamRow> = [
    {
      title: "팀",
      dataIndex: "team",
      key: "team",
      render: (v: TeamName) => (
        <Typography.Text strong={team === v}>{v}</Typography.Text>
      ),
    },
    { title: "프로젝트", dataIndex: "projects", key: "projects", width: 80, align: "end", sorter: (a, b) => a.projects - b.projects },
    {
      title: "과업",
      key: "tasks",
      width: 80,
      align: "end",
      render: (_, r) => <Typography.Text type="secondary">{r.done}/{r.total}</Typography.Text>,
    },
    {
      title: "완료율",
      dataIndex: "rate",
      key: "rate",
      width: 150,
      sorter: (a, b) => a.rate - b.rate,
      defaultSortOrder: "descend",
      render: (v: number) => <Progress percent={v} size="small" style={{ margin: 0 }} />,
    },
    {
      title: "지연",
      dataIndex: "delayed",
      key: "delayed",
      width: 64,
      align: "end",
      render: (v: number) => (v > 0 ? <ToneTag tone="danger">{v}</ToneTag> : <Typography.Text type="secondary">0</Typography.Text>),
    },
  ];

  const scopeLabel = team === "all" ? "전체" : team;

  return (
    <>
      <div className="ab3-toolbar">
        <div className="ab3-toolbar-group">
          <Segmented<Span>
            value={span}
            onChange={setSpan}
            options={[{ value: 4, label: "4주" }, { value: 8, label: "8주" }, { value: 12, label: "12주" }]}
          />
          <Select<TeamFilter>
            value={team}
            onChange={setTeam}
            style={{ inlineSize: 150 }}
            options={[{ value: "all", label: "모든 팀" }, ...TEAMS.map((t) => ({ value: t, label: t }))]}
          />
        </div>
        <Dropdown.Button menu={exportMenu} icon={<DownloadOutlined />} onClick={ => message.success("CSV 파일을 준비했어요")}>
          내보내기
        </Dropdown.Button>
      </div>

      <div className="ab3-tiles">
        <StatTile
          tone="brand"
          icon={<CheckCircleOutlined />}
          label={`과업 완료율 · ${scopeLabel}`}
          value={completion}
          suffix="%"
          note={`${doneCount(tasks)} / ${tasks.length}건 완료`}
          footer={<Progress percent={completion} size="small" showInfo={false} style={{ margin: 0 }} />}
        />
        <StatTile
          tone="success"
          icon={<ThunderboltOutlined />}
          label="주간 완료 과업"
          value={doneAvg.toFixed(1)}
          suffix="건"
          note={<Delta now={doneAvg} before={doneAvgBefore} unit="건" />}
        />
        <StatTile
          tone="warning"
          icon={<FieldTimeOutlined />}
          label="평균 리드타임"
          value={leadAvg.toFixed(1)}
          suffix="일"
          note={<Delta now={leadAvg} before={leadAvgBefore} unit="일" lowerIsBetter />}
        />
        <StatTile
          tone={delayed.length > 0 ? "danger" : "neutral"}
          icon={<WarningOutlined />}
          label={`지연 프로젝트 · ${scopeLabel}`}
          value={delayed.length}
          suffix="개"
          note={delayed[0] ? `${delayed[0].project.name} · ${dueBadge(delayed[0].project, "지연")}` : "지연 없음"}
        />
      </div>

      <div className="ab3-split-wide">
        <Card
          size="small"
          title={`주간 생성·완료 과업 · 최근 ${span}주`}
          extra={<Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>전체 기준</Typography.Text>}
        >
          <Flex gap={16} style={{ marginBlockEnd: 8 }}>
            <LegendItem color={SERIES.first} label="생성" />
            <LegendItem color={SERIES.third} label="완료" />
          </Flex>
          {/* 높이 고정. 부모가 auto 면 ResponsiveContainer 가 0이 되어 내용이 안 보임 */}
          <div style={{ inlineSize: "100%", blockSize: 220 }}>
            <ResponsiveContainer>
              <BarChart data={[...window]} margin={{ top: 8, right: 4, bottom: 0, left: 0 }} barGap={2}>
                <CartesianGrid vertical={false} stroke={CHART.grid} />
                <XAxis dataKey="week" tickLine={false} axisLine={false} tick={CHART.tick} interval={span === 12 ? 1 : 0}
                  tickFormatter={(v: string) => v.replace("월 ", "/").replace("주", "")} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={CHART.tick} width={24} />
                <ChartTooltip cursor={CHART.cursor} contentStyle={CHART.tooltip} itemStyle={CHART.tooltipItem} labelStyle={CHART.tooltipLabel} />
                <Bar dataKey="created" name="생성" fill={SERIES.first} radius={[4, 4, 0, 0]} isAnimationActive={false} />
                <Bar dataKey="done" name="완료" fill={SERIES.third} radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card size="small" title={`과업 상태 · ${scopeLabel}`}>
          {tasks.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="과업이 없어요" />
          ) : (
            <Flex vertical gap={12} align="center">
              <div style={{ position: "relative", inlineSize: 160, blockSize: 160 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={statusCounts}
                      dataKey="count"
                      nameKey="status"
                      innerRadius={52}
                      outerRadius={76}
                      paddingAngle={2}
                      stroke="none"
                      isAnimationActive={false}
                    >
                      {statusCounts.map((s) => (
                        <Cell key={s.status} fill={STATUS_FILL[s.status]} />
                      ))}
                    </Pie>
                    <ChartTooltip contentStyle={CHART.tooltip} itemStyle={CHART.tooltipItem} />
                  </PieChart>
                </ResponsiveContainer>
                {/* 도넛 가운데 총합. recharts에 라벨 기능이 없어 얹음. 마우스 이벤트는 유지 */}
                <Flex
                  vertical
                  align="center"
                  justify="center"
                  style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
                >
                  <Typography.Text strong style={{ fontSize: token.fontSizeHeading3, lineHeight: 1.1 }}>{tasks.length}</Typography.Text>
                  <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>과업</Typography.Text>
                </Flex>
              </div>
              <Flex vertical gap={6} style={{ inlineSize: "100%" }}>
                {statusCounts.map((s) => (
                  <LegendItem
                    key={s.status}
                    color={STATUS_FILL[s.status]}
                    label={s.status}
                    value={`${s.count}건 · ${Math.round((s.count / tasks.length) * 100)}%`}
                  />
                ))}
              </Flex>
            </Flex>
          )}
        </Card>
      </div>

      <div className="ab3-split">
        <Card size="small" title="팀별 완료율" styles={{ body: { padding: 0 } }}>
          <Table<TeamRow>
            size="small"
            rowKey="team"
            columns={teamColumns}
            dataSource={teamRows}
            pagination={false}
            scroll={{ x: "max-content" }}
            onRow={(r) => ({ onClick:  => setTeam(team === r.team ? "all" : r.team), style: { cursor: "pointer" } })}
            rowClassName={(r) => (r.team === team ? "ant-table-row-selected" : "")}
          />
        </Card>

        <Card size="small" title={`위험 신호 ${risks.length}건`}>
          {risks.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="지금은 위험 신호가 없어요" />
          ) : (
            <Flex vertical gap={8}>
              {risks.map(({ project, status, progress }) => (
                <Alert
                  key={project.id}
                  type={status === "지연" ? "error" : "warning"}
                  showIcon
                  title={`${project.name} · ${dueBadge(project, status)}`}
                  description={
                    status === "지연"
                      ? `마감 ${project.dueLabel}을 넘겼는데 과업 ${project.tasks.length - doneCount(project.tasks)}건이 남았어요`
                      : `마감 ${project.dueLabel}까지 진행률 ${progress}%. 손이 더 필요해요`
                  }
                />
              ))}
            </Flex>
          )}
        </Card>
      </div>

      <Card size="small" title={`프로젝트별 진행률 · ${scopeLabel} ${withStatus.length}개`}>
        <div className="ab3-cards">
          {withStatus
            .sort((a, b) => Number(a.status === "완료") - Number(b.status === "완료") || a.project.dueInDays - b.project.dueInDays)
            .map(({ project, status, progress }) => (
              <Flex key={project.id} vertical gap={6} style={{ minWidth: 0 }}>
                <Flex align="center" justify="space-between" gap={8}>
                  <Flex align="center" gap={8} style={{ minWidth: 0 }}>
                    <Typography.Text ellipsis>{project.name}</Typography.Text>
                    <ToneTag tone={PROJECT_TONE[status]}>{status}</ToneTag>
                  </Flex>
                  <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, flex: "0 0 auto" }}>
                    {project.dueLabel}
                  </Typography.Text>
                </Flex>
                <Progress
                  percent={progress}
                  size="small"
                  status={status === "지연" ? "exception" : status === "완료" ? "success" : "active"}
                  style={{ margin: 0 }}
                />
                <Flex align="center" justify="space-between" gap={8}>
                  <MemberLine id={project.ownerId} />
                  <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, flex: "0 0 auto" }}>
                    {project.team} · 과업 {doneCount(project.tasks)}/{project.tasks.length}
                  </Typography.Text>
                </Flex>
              </Flex>
            ))}
        </div>
      </Card>
    </>
  );
}
