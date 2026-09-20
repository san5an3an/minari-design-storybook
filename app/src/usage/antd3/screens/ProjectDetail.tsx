import * as React from "react";
import {
  Breadcrumb, Button, Card, Checkbox, Descriptions, Empty, Flex, Progress, Segmented, Steps, Table,
  Timeline, Typography, theme,
} from "antd";
import type { TableColumnsType } from "antd";
import {
  ArrowLeftOutlined, AuditOutlined, CheckCircleOutlined, FlagOutlined, InboxOutlined, SyncOutlined,
} from "@ant-design/icons";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip as ChartTooltip, XAxis, YAxis } from "recharts";
import {
  WEEKLY_FLOW, doneCount, dueBadge, memberOf, milestoneDone, progressOf, statusOf,
  type MilestoneKey, type Project, type Task, type TimelineEvent,
} from "../data";
import {
  CHART, EVENT_TONE, MemberAvatar, MemberLine, MemberStack, PRIORITY_TONE, PROJECT_TONE, SERIES, StatTile,
  TASK_TONE, ToneTag, useTones,
} from "../parts";

type StageFilter = "all" | MilestoneKey;

export function ProjectDetail({
  project, tasks, events, onToggleTask, onBack,
}: {
  project: Project;
  tasks: readonly Task[];
  events: readonly TimelineEvent[];
  onToggleTask: (taskId: string, done: boolean) => void;
  onBack:  => void;
}) {
  const { token } = theme.useToken;
  const tones = useTones;
  const [stage, setStage] = React.useState<StageFilter>("all");

  const status = statusOf(project, tasks);
  const progress = progressOf(tasks);
  const done = doneCount(tasks);
  const inProgress = tasks.filter((t) => t.status === "진행중").length;
  const inReview = tasks.filter((t) => t.status === "검토").length;
  // 이번 주 완료 수는 기존 값과 체크한 항목 합으로 계산. 해제하면 값도 줄어드는 구조임
  const thisWeekDone = Math.max(0, (project.weeklyDone.at(-1) ?? 0) + (done - doneCount(project.tasks)));

  // 현재 단계를 첫 미완료 마일스톤으로 계산. 전부 끝나면 마지막 다음 인덱스 반환
  const firstOpen = project.milestones.findIndex((m) => !milestoneDone(tasks, m.key));
  const current = firstOpen === -1 ? project.milestones.length : firstOpen;

  const shown = stage === "all" ? tasks : tasks.filter((t) => t.milestone === stage);

  const weekly = WEEKLY_FLOW.slice(-project.weeklyDone.length).map((w, i) => ({
    week: w.week,
    완료: i === project.weeklyDone.length - 1 ? thisWeekDone : project.weeklyDone[i],
  }));

  const columns: TableColumnsType<Task> = [
    {
      key: "done",
      width: 40,
      render: (_, t) => (
        <Checkbox
          checked={t.status === "완료"}
          aria-label={`${t.title} 완료 표시`}
          onChange={(e) => {
            // 값은 핸들러 진입 즉시 추출. React19 늦은 e.target은 null임
            const checked = e.target.checked;
            onToggleTask(t.id, checked);
          }}
        />
      ),
    },
    {
      title: "과업",
      key: "title",
      render: (_, t) => (
        <Flex vertical style={{ minWidth: 0 }}>
          <Typography.Text delete={t.status === "완료"} type={t.status === "완료" ? "secondary" : undefined}>
            {t.title}
          </Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{t.id}</Typography.Text>
        </Flex>
      ),
    },
    { title: "담당", key: "assignee", width: 120, render: (_, t) => <MemberLine id={t.assigneeId} /> },
    { title: "상태", key: "status", width: 84, render: (_, t) => <ToneTag tone={TASK_TONE[t.status]}>{t.status}</ToneTag> },
    { title: "마감", dataIndex: "dueLabel", key: "due", width: 84 },
  ];

  const openByMember = (id: string) => tasks.filter((t) => t.assigneeId === id && t.status !== "완료").length;

  return (
    <>
      <Flex align="center" justify="space-between" gap={12} wrap>
        <Breadcrumb
          items={[
            { title: <Typography.Link onClick={onBack}>프로젝트</Typography.Link> },
            { title: project.id },
          ]}
        />
        <Button icon={<ArrowLeftOutlined />} onClick={onBack}>목록으로</Button>
      </Flex>

      <Card size="small">
        <Flex vertical gap={12}>
          <Flex align="center" justify="space-between" gap={12} wrap>
            <Flex align="center" gap={8} wrap style={{ minWidth: 0 }}>
              <Typography.Title level={4} style={{ margin: 0 }}>{project.name}</Typography.Title>
              <ToneTag tone={PROJECT_TONE[status]}>{status}</ToneTag>
              <ToneTag tone={PRIORITY_TONE[project.priority]} icon={<FlagOutlined />}>우선순위 {project.priority}</ToneTag>
            </Flex>
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
              {project.id} · 갱신 {project.updatedLabel}
            </Typography.Text>
          </Flex>
          <Typography.Text type="secondary">{project.summary}</Typography.Text>
          <Flex align="center" gap={12}>
            <Progress
              percent={progress}
              status={status === "지연" ? "exception" : undefined}
              showInfo={false}
              style={{ flex: 1, margin: 0 }}
            />
            <Typography.Text strong style={{ flex: "0 0 auto" }}>
              {progress}% <Typography.Text type="secondary">· 과업 {done}/{tasks.length}</Typography.Text>
            </Typography.Text>
          </Flex>
          <Descriptions
            size="small"
            column={3}
            items={[
              { key: "owner", label: "담당 PM", children: <MemberLine id={project.ownerId} /> },
              { key: "team", label: "팀", children: project.team },
              { key: "due", label: "마감", children: `${project.dueLabel} (${dueBadge(project, status)})` },
              { key: "span", label: "기간", children: `${project.startLabel} ~ ${project.dueLabel}` },
              { key: "members", label: "구성원", children: <MemberStack ids={project.memberIds} max={5} /> },
              { key: "stage", label: "지금 단계", children: project.milestones[Math.min(current, project.milestones.length - 1)].label },
            ]}
          />
        </Flex>
      </Card>

      <div className="ab3-tiles">
        <StatTile tone="neutral" icon={<InboxOutlined />} label="남은 과업" value={tasks.length - done} suffix="건" note={`전체 ${tasks.length}건 중`} />
        <StatTile tone="brand" icon={<SyncOutlined />} label="진행 중" value={inProgress} suffix="건" note="지금 손대고 있는 과업" />
        <StatTile tone="warning" icon={<AuditOutlined />} label="검토 대기" value={inReview} suffix="건" note="리뷰어 확인을 기다려요" />
        <StatTile tone="success" icon={<CheckCircleOutlined />} label="이번 주 완료" value={thisWeekDone} suffix="건" note="9월 4주 기준" />
      </div>

      <div className="ab3-split">
        <div className="ab3-stack">
          <Card size="small" title="마일스톤">
            <Steps
              size="small"
              titlePlacement="vertical"
              current={current}
              status={status === "지연" ? "error" : "process"}
              items={project.milestones.map((m) => ({ title: m.label, content: m.dateLabel }))}
            />
          </Card>

          <Card
            size="small"
            title={`과업 ${shown.length}건`}
            extra={
              <Segmented<StageFilter>
                size="small"
                value={stage}
                onChange={setStage}
                options={[{ label: "전체", value: "all" }, ...project.milestones.map((m) => ({ label: m.label, value: m.key }))]}
              />
            }
            styles={{ body: { padding: 0 } }}
          >
            <Table<Task>
              size="small"
              rowKey="id"
              columns={columns}
              dataSource={[...shown]}
              pagination={false}
              scroll={{ x: "max-content" }}
              locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="이 단계에는 아직 과업이 없어요" /> }}
            />
          </Card>
        </div>

        <div className="ab3-stack">
          <Card size="small" title="주간 완료 추이" extra={<Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>최근 {weekly.length}주</Typography.Text>}>
            {/* 높이 고정. 부모가 auto 면 ResponsiveContainer 가 0이 되어 내용이 안 보임 */}
            <div style={{ inlineSize: "100%", blockSize: 150 }}>
              <ResponsiveContainer>
                <BarChart data={weekly} margin={{ top: 8, right: 4, bottom: 0, left: 0 }}>
                  <CartesianGrid vertical={false} stroke={CHART.grid} />
                  <XAxis dataKey="week" tickLine={false} axisLine={false} tick={CHART.tick} interval={0}
                    tickFormatter={(v: string) => v.replace("월 ", "/").replace("주", "")} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={CHART.tick} width={20} />
                  <ChartTooltip cursor={CHART.cursor} contentStyle={CHART.tooltip} itemStyle={CHART.tooltipItem} labelStyle={CHART.tooltipLabel} />
                  {/* isAnimationActive={false} 지정, 막대가 자라 깜빡여 보일 수 있음 */}
                  <Bar dataKey="완료" fill={SERIES.first} radius={[4, 4, 0, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card size="small" title={`구성원 ${project.memberIds.length}명`}>
            <Flex vertical gap={10}>
              {project.memberIds.map((id) => {
                const m = memberOf(id);
                const open = openByMember(id);
                return (
                  <Flex key={id} align="center" justify="space-between" gap={8}>
                    <Flex align="center" gap={8} style={{ minWidth: 0 }}>
                      <MemberAvatar id={id} />
                      <Flex vertical style={{ minWidth: 0 }}>
                        <Typography.Text ellipsis>{m.name}</Typography.Text>
                        <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>{m.role}</Typography.Text>
                      </Flex>
                    </Flex>
                    <Typography.Text type={open === 0 ? "secondary" : undefined} style={{ flex: "0 0 auto", fontSize: token.fontSizeSM }}>
                      {open === 0 ? "남은 과업 없음" : `남은 과업 ${open}건`}
                    </Typography.Text>
                  </Flex>
                );
              })}
            </Flex>
          </Card>

          <Card size="small" title="최근 활동">
            {events.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="아직 기록된 활동이 없어요" />
            ) : (
              <Timeline
                style={{ marginBlockStart: 4 }}
                items={events.slice(0, 5).map((e) => ({
                  color: tones[EVENT_TONE[e.kind]].solid,
                  content: (
                    <Flex vertical>
                      <Typography.Text style={{ fontSize: token.fontSizeSM }}>{e.text}</Typography.Text>
                      <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                        {memberOf(e.actorId).name} · {e.timeLabel}
                      </Typography.Text>
                    </Flex>
                  ),
                }))}
              />
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
