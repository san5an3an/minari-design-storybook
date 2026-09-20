import * as React from "react";
import {
  App, Button, Card, Dropdown, Empty, Flex, Input, List, Progress, Segmented, Select, Table, Timeline,
  Tooltip, Typography, theme,
} from "antd";
import type { MenuProps, TableColumnsType } from "antd";
import {
  AppstoreOutlined, AuditOutlined, BarsOutlined, CheckCircleOutlined, ClockCircleOutlined, FlagOutlined,
  LinkOutlined, MoreOutlined, PlusOutlined, RiseOutlined, SearchOutlined, SyncOutlined, WarningOutlined,
} from "@ant-design/icons";
import {
  DUE_SOON_DAYS, PROJECTS, PROJECT_STATUSES, TIMELINE_EVENTS, doneCount, dueBadge, memberOf, progressOf,
  statusOf, type Project, type ProjectStatus, type Task,
} from "../data";
import {
  EVENT_TONE, MemberLine, MemberStack, PRIORITY_TONE, PROJECT_TONE, StatTile, ToneTag, useTones,
} from "../parts";
import { NewProjectDrawer } from "./NewProjectDrawer";
import { ProjectDetail } from "./ProjectDetail";

type StatusFilter = "all" | ProjectStatus;
type SortKey = "due" | "progress" | "name";
type ViewMode = "cards" | "table";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "due", label: "마감 빠른 순" },
  { value: "progress", label: "진행률 낮은 순" },
  { value: "name", label: "이름순" },
];

// 화면 렌더링 단위, 프로젝트와 작업 상태 기반 계산값
interface Row {
  project: Project;
  tasks: readonly Task[];
  status: ProjectStatus;
  progress: number;
  done: number;
}

function toRow(project: Project, tasks: readonly Task[]): Row {
  return { project, tasks, status: statusOf(project, tasks), progress: progressOf(tasks), done: doneCount(tasks) };
}

// 완료 항목은 항상 뒤로 정렬
function sortRows(rows: Row[], key: SortKey): Row[] {
  const byDone = (a: Row, b: Row) => Number(a.status === "완료") - Number(b.status === "완료");
  const sorted = [...rows];
  if (key === "due") sorted.sort((a, b) => byDone(a, b) || a.project.dueInDays - b.project.dueInDays);
  if (key === "progress") sorted.sort((a, b) => byDone(a, b) || a.progress - b.progress);
  if (key === "name") sorted.sort((a, b) => a.project.name.localeCompare(b.project.name, "ko"));
  return sorted;
}

function nextProjectId(ids: readonly string[]): string {
  const max = Math.max(...ids.map((id) => Number(id.replace(/\D/g, "")) || 0));
  return `PRJ-${max + 1}`;
}

function ProjectCard({ row, onOpen, onCopyLink }: { row: Row; onOpen:  => void; onCopyLink:  => void }) {
  const { token } = theme.useToken;
  const tones = useTones;
  const { project, status, progress, done, tasks } = row;

  const menu: MenuProps = {
    items: [
      { key: "open", label: "상세 보기" },
      { key: "link", label: "링크 복사", icon: <LinkOutlined /> },
    ],
    onClick: ({ key, domEvent }) => {
      // 카드 클릭도 열림 동작이라 메뉴 클릭 이벤트 전파 차단
      domEvent.stopPropagation;
      if (key === "open") onOpen;
      if (key === "link") onCopyLink;
    },
  };

  return (
    <Card
      hoverable
      size="small"
      onClick={onOpen}
      style={{ cursor: "pointer", height: "100%" }}
      styles={{ body: { display: "flex", flexDirection: "column", gap: 10, height: "100%" } }}
    >
      <Flex align="center" justify="space-between" gap={8}>
        <Flex align="center" gap={6} style={{ minWidth: 0 }}>
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, fontFamily: token.fontFamilyCode }}>
            {project.id}
          </Typography.Text>
          {project.priority === "높음" && (
            <Tooltip title="우선순위 높음">
              <FlagOutlined style={{ color: tones[PRIORITY_TONE.높음].fg }} aria-label="우선순위 높음" />
            </Tooltip>
          )}
        </Flex>
        <Flex align="center" gap={4} style={{ flex: "0 0 auto" }}>
          <ToneTag tone={PROJECT_TONE[status]}>{status}</ToneTag>
          <Dropdown menu={menu} trigger={["click"]}>
            <Button
              type="text"
              size="small"
              icon={<MoreOutlined />}
              aria-label={`${project.name} 더 보기`}
              onClick={(e) => e.stopPropagation}
            />
          </Dropdown>
        </Flex>
      </Flex>

      <Flex vertical gap={2}>
        <Typography.Text strong ellipsis>{project.name}</Typography.Text>
        <Typography.Paragraph type="secondary" ellipsis={{ rows: 2 }} style={{ margin: 0, fontSize: token.fontSizeSM }}>
          {project.summary}
        </Typography.Paragraph>
      </Flex>

      <Flex align="center" gap={8} style={{ marginBlockStart: "auto" }}>
        <Progress
          percent={progress}
          size="small"
          showInfo={false}
          status={status === "지연" ? "exception" : undefined}
          style={{ flex: 1, margin: 0 }}
        />
        <Typography.Text strong style={{ fontSize: token.fontSizeSM, flex: "0 0 auto" }}>{progress}%</Typography.Text>
      </Flex>

      <Flex align="center" justify="space-between" gap={8}>
        <MemberStack ids={project.memberIds} />
        <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM, textAlign: "end" }}>
          과업 {done}/{tasks.length} · {dueBadge(project, status)}
        </Typography.Text>
      </Flex>
    </Card>
  );
}

export function ProjectsScreen {
  const { token } = theme.useToken;
  const tones = useTones;
  const { message } = App.useApp;

  const [extra, setExtra] = React.useState<Project[]>([]);
  const [tasksById, setTasksById] = React.useState<Record<string, Task[]>>( =>
    Object.fromEntries(PROJECTS.map((p) => [p.id, [...p.tasks]])),
  );
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<StatusFilter>("all");
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("due");
  const [view, setView] = React.useState<ViewMode>("cards");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const projects = React.useMemo( => [...extra, ...PROJECTS], [extra]);
  const rows = React.useMemo(
     => projects.map((p) => toRow(p, tasksById[p.id] ?? [])),
    [projects, tasksById],
  );

  // 툴바, 타일, 레일은 모두 rows 에서 계산
  const countBy = (s: ProjectStatus) => rows.filter((r) => r.status === s).length;
  const allTasks = rows.flatMap((r) => r.tasks);
  const overall = progressOf(allTasks);
  const dueSoon = rows.filter((r) => r.status === "진행중" && r.project.dueInDays <= DUE_SOON_DAYS);
  const overdue = rows.filter((r) => r.status === "지연").sort((a, b) => a.project.dueInDays - b.project.dueInDays);
  const inReview = allTasks.filter((t) => t.status === "검토");
  const reviewers = new Set(inReview.map((t) => t.assigneeId)).size;
  const upcoming = rows
    .filter((r) => r.status !== "완료")
    .sort((a, b) => a.project.dueInDays - b.project.dueInDays)
    .slice(0, 4);
  const reviewQueue = rows
    .flatMap((r) => r.tasks.filter((t) => t.status === "검토").map((t) => ({ task: t, project: r.project })))
    .slice(0, 4);

  const q = query.trim.toLowerCase;
  const shown = sortRows(
    rows.filter((r) => status === "all" || r.status === status)
      .filter((r) => {
        if (!q) return true;
        const owner = memberOf(r.project.ownerId).name;
        return [r.project.name, r.project.id, r.project.team, owner].some((s) => s.toLowerCase.includes(q));
      }),
    sort,
  );

  const toggleTask = (projectId: string, taskId: string, done: boolean) =>
    setTasksById((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] ?? []).map((t) =>
        t.id === taskId ? { ...t, status: done ? "완료" : "진행중" } : t,
      ),
    }));

  const createProject = (project: Project) => {
    setExtra((prev) => [project, ...prev]);
    setTasksById((prev) => ({ ...prev, [project.id]: [] }));
    setDrawerOpen(false);
    setStatus("all");
    message.success(`${project.name} 프로젝트를 만들었어요`);
  };

  const copyLink = (project: Project) => message.success(`${project.id} 링크를 복사했어요`);

  const selected = rows.find((r) => r.project.id === selectedId);
  if (selected) {
    return (
      <ProjectDetail
        project={selected.project}
        tasks={selected.tasks}
        events={TIMELINE_EVENTS.filter((e) => e.projectId === selected.project.id)}
        onToggleTask={(taskId, done) => toggleTask(selected.project.id, taskId, done)}
        onBack={ => setSelectedId(null)}
      />
    );
  }

  const tableColumns: TableColumnsType<Row> = [
    {
      title: "프로젝트",
      key: "name",
      render: (_, r) => (
        <Flex vertical style={{ minWidth: 0 }}>
          <Typography.Text strong>{r.project.name}</Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{r.project.id} · {r.project.team}</Typography.Text>
        </Flex>
      ),
    },
    { title: "상태", key: "status", width: 84, render: (_, r) => <ToneTag tone={PROJECT_TONE[r.status]}>{r.status}</ToneTag> },
    {
      title: "진행률",
      key: "progress",
      width: 150,
      sorter: (a, b) => a.progress - b.progress,
      render: (_, r) => (
        <Progress percent={r.progress} size="small" status={r.status === "지연" ? "exception" : undefined} style={{ margin: 0 }} />
      ),
    },
    {
      title: "마감",
      key: "due",
      width: 130,
      sorter: (a, b) => a.project.dueInDays - b.project.dueInDays,
      render: (_, r) => (
        <Flex vertical>
          <Typography.Text>{r.project.dueLabel}</Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{dueBadge(r.project, r.status)}</Typography.Text>
        </Flex>
      ),
    },
    { title: "담당", key: "owner", width: 120, render: (_, r) => <MemberLine id={r.project.ownerId} /> },
  ];

  return (
    <>
      <div className="ab3-toolbar">
        <div className="ab3-toolbar-group">
          <Segmented<StatusFilter>
            value={status}
            onChange={setStatus}
            options={[
              { value: "all", label: `전체 ${rows.length}` },
              ...PROJECT_STATUSES.map((s) => ({ value: s, label: `${s} ${countBy(s)}` })),
            ]}
          />
          <Input
            allowClear
            prefix={<SearchOutlined style={{ color: token.colorTextTertiary }} />}
            placeholder="프로젝트·팀·담당자 찾기"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ inlineSize: 200 }}
          />
        </div>
        <div className="ab3-toolbar-group">
          <Select<SortKey> value={sort} onChange={setSort} options={SORT_OPTIONS} style={{ inlineSize: 132 }} />
          <Segmented<ViewMode>
            value={view}
            onChange={setView}
            options={[
              { value: "cards", icon: <AppstoreOutlined />, title: "카드로 보기" },
              { value: "table", icon: <BarsOutlined />, title: "표로 보기" },
            ]}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={ => setDrawerOpen(true)}>새 프로젝트</Button>
        </div>
      </div>

      <div className="ab3-tiles">
        <StatTile
          tone="brand"
          icon={<RiseOutlined />}
          label="전체 진행률"
          value={overall}
          suffix="%"
          note={`과업 ${doneCount(allTasks)} / ${allTasks.length} 완료`}
          footer={<Progress percent={overall} size="small" showInfo={false} style={{ margin: 0 }} />}
        />
        <StatTile
          tone="success"
          icon={<SyncOutlined />}
          label="진행 중"
          value={countBy("진행중")}
          suffix="개"
          note={dueSoon.length > 0 ? `${DUE_SOON_DAYS}일 안 마감 ${dueSoon.length}개` : "이레 안 마감 없음"}
        />
        <StatTile
          tone="danger"
          icon={<WarningOutlined />}
          label="지연"
          value={countBy("지연")}
          suffix="개"
          note={overdue[0] ? `${overdue[0].project.name} · ${dueBadge(overdue[0].project, "지연")}` : "지연 없음"}
        />
        <StatTile
          tone="warning"
          icon={<AuditOutlined />}
          label="검토 대기 과업"
          value={inReview.length}
          suffix="건"
          note={reviewers > 0 ? `담당 ${reviewers}명` : "대기 중인 검토 없음"}
        />
      </div>

      <div className="ab3-split">
        <div className="ab3-stack">
          {shown.length === 0 ? (
            <Card size="small">
              <Empty description="조건에 맞는 프로젝트가 없어요">
                <Button onClick={ => { setStatus("all"); setQuery(""); }}>조건 지우기</Button>
              </Empty>
            </Card>
          ) : view === "cards" ? (
            <div className="ab3-cards">
              {shown.map((r) => (
                <ProjectCard
                  key={r.project.id}
                  row={r}
                  onOpen={ => setSelectedId(r.project.id)}
                  onCopyLink={ => copyLink(r.project)}
                />
              ))}
            </div>
          ) : (
            <Card size="small" styles={{ body: { padding: 0 } }}>
              <Table<Row>
                size="small"
                rowKey={(r) => r.project.id}
                columns={tableColumns}
                dataSource={shown}
                pagination={false}
                scroll={{ x: "max-content" }}
                onRow={(r) => ({ onClick:  => setSelectedId(r.project.id), style: { cursor: "pointer" } })}
              />
            </Card>
          )}
        </div>

        <div className="ab3-stack">
          <Card size="small" title="마감 임박" extra={<ClockCircleOutlined style={{ color: token.colorTextTertiary }} />}>
            <List
              size="small"
              dataSource={upcoming}
              renderItem={(r) => (
                <List.Item style={{ paddingInline: 0, cursor: "pointer" }} onClick={ => setSelectedId(r.project.id)}>
                  <Flex vertical gap={6} style={{ inlineSize: "100%" }}>
                    <Flex align="center" justify="space-between" gap={8}>
                      <Typography.Text ellipsis style={{ minWidth: 0 }}>{r.project.name}</Typography.Text>
                      <ToneTag tone={r.status === "지연" ? "danger" : r.project.dueInDays <= DUE_SOON_DAYS ? "warning" : "neutral"}>
                        {dueBadge(r.project, r.status)}
                      </ToneTag>
                    </Flex>
                    <Flex align="center" gap={8}>
                      <Progress percent={r.progress} size="small" showInfo={false} status={r.status === "지연" ? "exception" : undefined} style={{ flex: 1, margin: 0 }} />
                      <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, flex: "0 0 auto" }}>
                        {r.project.dueLabel}
                      </Typography.Text>
                    </Flex>
                  </Flex>
                </List.Item>
              )}
            />
          </Card>

          <Card size="small" title={`검토 대기 ${reviewQueue.length}건`} extra={<AuditOutlined style={{ color: token.colorTextTertiary }} />}>
            {reviewQueue.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="검토를 기다리는 과업이 없어요" />
            ) : (
              <List
                size="small"
                dataSource={reviewQueue}
                renderItem={({ task, project }) => (
                  <List.Item style={{ paddingInline: 0, cursor: "pointer" }} onClick={ => setSelectedId(project.id)}>
                    <Flex align="center" justify="space-between" gap={8} style={{ inlineSize: "100%" }}>
                      <Flex vertical style={{ minWidth: 0 }}>
                        <Typography.Text ellipsis>{task.title}</Typography.Text>
                        <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>
                          {project.name} · {memberOf(task.assigneeId).name} · 마감 {task.dueLabel}
                        </Typography.Text>
                      </Flex>
                      <MemberStack ids={[task.assigneeId]} />
                    </Flex>
                  </List.Item>
                )}
              />
            )}
          </Card>

          <Card size="small" title="최근 활동" extra={<CheckCircleOutlined style={{ color: token.colorTextTertiary }} />}>
            <Timeline
              style={{ marginBlockStart: 4 }}
              items={TIMELINE_EVENTS.slice(0, 5).map((e) => {
                const project = projects.find((p) => p.id === e.projectId);
                return {
                  color: tones[EVENT_TONE[e.kind]].solid,
                  content: (
                    <Flex vertical>
                      <Typography.Text style={{ fontSize: token.fontSizeSM }}>
                        <Typography.Text strong style={{ fontSize: token.fontSizeSM }}>{project?.name ?? e.projectId}</Typography.Text>, {e.text}
                      </Typography.Text>
                      <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                        {memberOf(e.actorId).name} · {e.timeLabel}
                      </Typography.Text>
                    </Flex>
                  ),
                };
              })}
            />
          </Card>
        </div>
      </div>

      <NewProjectDrawer
        open={drawerOpen}
        nextId={nextProjectId(projects.map((p) => p.id))}
        onClose={ => setDrawerOpen(false)}
        onCreate={createProject}
      />
    </>
  );
}
