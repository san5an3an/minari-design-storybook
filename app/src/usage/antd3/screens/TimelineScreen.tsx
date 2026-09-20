import * as React from "react";
import { Button, Card, Empty, Flex, List, Progress, Select, Tag, Timeline, Typography, theme } from "antd";
import {
  CheckCircleOutlined, CommentOutlined, DownOutlined, FlagOutlined, PlayCircleOutlined, RocketOutlined,
  TeamOutlined, UpOutlined, WarningOutlined,
} from "@ant-design/icons";
import {
  EVENT_GROUPS, EVENT_KINDS, MEMBERS, PROJECTS, TIMELINE_EVENTS, memberOf, milestoneDone, statusOf,
  type EventGroup, type EventKind, type TimelineEvent,
} from "../data";
import { EVENT_TONE, LegendItem, MemberAvatar, StatTile, ToneTag, useTones } from "../parts";

const KIND_ICON: Record<EventKind, React.ReactNode> = {
  완료: <CheckCircleOutlined />,
  배포: <RocketOutlined />,
  승인: <FlagOutlined />,
  착수: <PlayCircleOutlined />,
  지연: <WarningOutlined />,
  코멘트: <CommentOutlined />,
};

// 이번 주 집계 범위는 오늘, 어제, 이번 주
const THIS_WEEK: readonly EventGroup[] = ["오늘", "어제", "이번 주"];
// 초기 펼쳐진 구간. 나머지는 이전 활동 보기 뒤에 배치
const OPEN_BY_DEFAULT: readonly EventGroup[] = ["오늘", "어제", "이번 주"];

const PROJECT_NAME = new Map(PROJECTS.map((p) => [p.id, p.name]));

// 프로젝트별 미완료 첫 마일스톤을 날짜순 정렬한 목록
const UPCOMING = PROJECTS
  .filter((p) => statusOf(p, p.tasks) !== "완료")
  .map((p) => {
    const next = p.milestones.find((m) => !milestoneDone(p.tasks, m.key)) ?? p.milestones[p.milestones.length - 1];
    return { project: p, milestone: next, status: statusOf(p, p.tasks) };
  })
  .sort((a, b) => a.project.dueInDays - b.project.dueInDays);

export function TimelineScreen {
  const { token } = theme.useToken;
  const tones = useTones;
  const [projectId, setProjectId] = React.useState<string>("all");
  const [kinds, setKinds] = React.useState<Set<EventKind>>( => new Set(EVENT_KINDS));
  const [showOlder, setShowOlder] = React.useState(false);

  const toggleKind = (kind: EventKind, checked: boolean) =>
    setKinds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(kind); else next.delete(kind);
      return next;
    });

  const filtered = TIMELINE_EVENTS.filter((e) => (projectId === "all" || e.projectId === projectId) && kinds.has(e.kind));
  const thisWeek = filtered.filter((e) => THIS_WEEK.includes(e.group));
  const shipped = thisWeek.filter((e) => e.kind === "완료" || e.kind === "배포").length;
  const delays = thisWeek.filter((e) => e.kind === "지연").length;
  const people = new Set(thisWeek.map((e) => e.actorId)).size;

  const groups = EVENT_GROUPS
    .map((g) => ({ group: g, events: filtered.filter((e) => e.group === g) }))
    .filter((g) => g.events.length > 0);
  const visible = groups.filter((g) => showOlder || OPEN_BY_DEFAULT.includes(g.group));
  const hiddenCount = groups.filter((g) => !OPEN_BY_DEFAULT.includes(g.group)).reduce((n, g) => n + g.events.length, 0);

  // 사람별 활동 수 상위 5명 집계, 막대는 1위 대비 비율 표시
  const byActor = MEMBERS
    .map((m) => ({ member: m, count: filtered.filter((e) => e.actorId === m.id).length }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  const topCount = byActor[0]?.count ?? 1;

  const byKind = EVENT_KINDS.map((k) => ({ kind: k, count: filtered.filter((e) => e.kind === k).length }));

  const renderEvent = (e: TimelineEvent) => {
    const tone = tones[EVENT_TONE[e.kind]];
    return {
      color: tone.solid,
      icon: <span style={{ color: tone.solid, fontSize: 14 }}>{KIND_ICON[e.kind]}</span>,
      content: (
        <Flex vertical gap={2} style={{ paddingBlockEnd: 4 }}>
          <Flex align="center" gap={8} wrap>
            <Typography.Text strong style={{ fontSize: token.fontSizeSM }}>{PROJECT_NAME.get(e.projectId) ?? e.projectId}</Typography.Text>
            <ToneTag tone={EVENT_TONE[e.kind]}>{e.kind}</ToneTag>
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, marginInlineStart: "auto" }}>{e.timeLabel}</Typography.Text>
          </Flex>
          <Typography.Text style={{ fontSize: token.fontSizeSM }}>{e.text}</Typography.Text>
          <Flex align="center" gap={6}>
            <MemberAvatar id={e.actorId} />
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
              {memberOf(e.actorId).name} · {memberOf(e.actorId).role}
            </Typography.Text>
          </Flex>
        </Flex>
      ),
    };
  };

  return (
    <>
      <div className="ab3-toolbar">
        <div className="ab3-toolbar-group">
          <Select<string>
            value={projectId}
            onChange={setProjectId}
            style={{ inlineSize: 180 }}
            options={[
              { value: "all", label: "모든 프로젝트" },
              ...PROJECTS.map((p) => ({ value: p.id, label: `${p.name} · ${p.id}` })),
            ]}
          />
          <Flex align="center" gap={4} wrap>
            {EVENT_KINDS.map((k) => {
              const n = TIMELINE_EVENTS.filter((e) => e.kind === k && (projectId === "all" || e.projectId === projectId)).length;
              return (
                <Tag.CheckableTag key={k} checked={kinds.has(k)} onChange={(checked) => toggleKind(k, checked)}>
                  {k} {n}
                </Tag.CheckableTag>
              );
            })}
          </Flex>
        </div>
        <Button size="small" type="link" onClick={ => setKinds(new Set(EVENT_KINDS))} disabled={kinds.size === EVENT_KINDS.length}>
          전부 켜기
        </Button>
      </div>

      <div className="ab3-tiles">
        <StatTile tone="brand" icon={<PlayCircleOutlined />} label="이번 주 활동" value={thisWeek.length} suffix="건" note="오늘 · 어제 · 이번 주" />
        <StatTile tone="success" icon={<RocketOutlined />} label="완료·배포" value={shipped} suffix="건" note="이번 주에 끝낸 것" />
        <StatTile tone={delays > 0 ? "danger" : "neutral"} icon={<WarningOutlined />} label="지연 보고" value={delays} suffix="건" note={delays > 0 ? "확인이 필요해요" : "이번 주 지연 없음"} />
        <StatTile tone="neutral" icon={<TeamOutlined />} label="참여한 사람" value={people} suffix="명" note="이번 주 활동 기준" />
      </div>

      <div className="ab3-split">
        <div className="ab3-stack">
          {visible.length === 0 && (
            <Card size="small">
              <Empty description="조건에 맞는 활동이 없어요">
                <Button onClick={ => { setProjectId("all"); setKinds(new Set(EVENT_KINDS)); }}>조건 지우기</Button>
              </Empty>
            </Card>
          )}
          {visible.map(({ group, events }) => (
            <Card key={group} size="small" title={group} extra={<Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{events.length}건</Typography.Text>}>
              <Timeline style={{ marginBlockStart: 4 }} items={events.map(renderEvent)} />
            </Card>
          ))}
          {hiddenCount > 0 && (
            <Button
              block
              icon={showOlder ? <UpOutlined /> : <DownOutlined />}
              onClick={ => setShowOlder((v) => !v)}
            >
              {showOlder ? "이전 활동 접기" : `이전 활동 보기 (${hiddenCount}건)`}
            </Button>
          )}
        </div>

        <div className="ab3-stack">
          <Card size="small" title="다가오는 마일스톤">
            <List
              size="small"
              dataSource={UPCOMING}
              renderItem={({ project, milestone, status }) => (
                <List.Item style={{ paddingInline: 0 }}>
                  <Flex align="center" justify="space-between" gap={8} style={{ inlineSize: "100%" }}>
                    <Flex vertical style={{ minWidth: 0 }}>
                      <Typography.Text ellipsis>{milestone.label}</Typography.Text>
                      <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>{project.name}</Typography.Text>
                    </Flex>
                    <ToneTag tone={status === "지연" ? "danger" : "neutral"}>{milestone.dateLabel}</ToneTag>
                  </Flex>
                </List.Item>
              )}
            />
          </Card>

          <Card size="small" title="활동 많은 사람">
            {byActor.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="활동이 없어요" />
            ) : (
              <Flex vertical gap={10}>
                {byActor.map(({ member, count }) => (
                  <Flex key={member.id} align="center" gap={8}>
                    <MemberAvatar id={member.id} />
                    <Flex vertical style={{ flex: 1, minWidth: 0 }}>
                      <Flex align="center" justify="space-between" gap={8}>
                        <Typography.Text ellipsis style={{ fontSize: token.fontSizeSM }}>{member.name}</Typography.Text>
                        <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, flex: "0 0 auto" }}>{count}건</Typography.Text>
                      </Flex>
                      <Progress percent={Math.round((count / topCount) * 100)} size="small" showInfo={false} style={{ margin: 0 }} />
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            )}
          </Card>

          <Card size="small" title="유형별">
            <Flex vertical gap={8}>
              {byKind.map(({ kind, count }) => (
                <LegendItem key={kind} color={tones[EVENT_TONE[kind]].solid} label={kind} value={`${count}건`} />
              ))}
            </Flex>
          </Card>
        </div>
      </div>
    </>
  );
}
