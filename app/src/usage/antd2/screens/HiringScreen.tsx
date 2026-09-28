import * as React from "react";
import {
  App, Button, Card, Checkbox, Descriptions, Drawer, Dropdown, Empty, Flex, Form, Input, InputNumber, Modal,
  Progress, Radio, Rate, Select, Space, Statistic, Steps, Table, Tag, Timeline, Typography, theme,
} from "antd";
import {
  CalendarOutlined, HourglassOutlined, MoreOutlined, PlusOutlined, SolutionOutlined, TeamOutlined, VideoCameraOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  HIRING_STAGES, POSITIONS, TODAY, daysUntil, ddayLabel, isActive, nextStage, positionOf, stageCount, today,
  weeklyApplicants, type Candidate, type CandidateSource, type HiringStage,
} from "../data";
import { PersonCell, StatCard, StatusTag, type Tone } from "../parts";
import { nextId, useHr } from "../store";

// 2차 면접 제외한 단계 톤. 2차 면접은 StageTag에서 solid로 별도 렌더링
const STAGE_TONE: Record<Exclude<HiringStage, "2차 면접">, Tone> = {
  "서류 심사": "neutral",
  "1차 면접": "brand",
  오퍼: "warning",
  입사: "success",
};

const SOURCES: CandidateSource[] = ["직접 지원", "사내 추천", "채용 사이트", "헤드헌터"];

function StageTag({ candidate }: { candidate: Candidate }) {
  if (candidate.rejected) return <StatusTag tone="danger">탈락</StatusTag>;
  if (candidate.stage === "2차 면접") {
    return (
      <Tag
        style={{
          background: "var(--semantic-bg-brand-default)",
          color: "var(--semantic-fg-on-brand-default)",
          border: "none",
          marginInlineEnd: 0,
        }}
      >
        2차 면접
      </Tag>
    );
  }
  return <StatusTag tone={STAGE_TONE[candidate.stage]}>{candidate.stage}</StatusTag>;
}

// 일정 요약 한 행, 날짜, 시간, 방식, 담당자 표시
function eventLabel(c: Candidate): string {
  if (!c.next) return "";
  const at = dayjs(c.next.at).locale("ko");
  const when = c.next.kind === "면접" ? at.format("M월 D일 (dd) HH:mm") : at.format("M월 D일 (dd)");
  return [when, c.next.mode, c.next.interviewer].filter(Boolean).join(" · ");
}

// 후보자 상세

function CandidateDrawer({
  candidate, onClose, onAdvance, onReject,
}: {
  candidate: Candidate | null;
  onClose:  => void;
  onAdvance: (c: Candidate) => void;
  onReject: (c: Candidate) => void;
}) {
  const { token } = theme.useToken;
  const position = candidate ? positionOf(candidate) : undefined;
  const stageIndex = candidate ? HIRING_STAGES.indexOf(candidate.stage) : 0;
  const advanceTo = candidate ? nextStage(candidate.stage) : null;

  return (
    <Drawer
      open={candidate !== null}
      onClose={onClose}
      size={460}
      title={candidate ? `${candidate.id} · 후보자 상세` : "후보자 상세"}
      footer={
        candidate && isActive(candidate) ? (
          <Flex justify="space-between" gap={8}>
            <Button danger onClick={ => onReject(candidate)}>탈락 처리</Button>
            <Space>
              <Button onClick={onClose}>닫기</Button>
              {advanceTo ? (
                <Button type="primary" onClick={ => onAdvance(candidate)}>{advanceTo}(으)로 옮기기</Button>
              ) : null}
            </Space>
          </Flex>
        ) : (
          <Flex justify="flex-end"><Button onClick={onClose}>닫기</Button></Flex>
        )
      }
    >
      {candidate ? (
        <Space orientation="vertical" size={20} style={{ display: "flex" }}>
          <Flex gap={12} align="center" justify="space-between">
            <PersonCell name={candidate.name} sub={position?.title ?? candidate.positionId} size={48} />
            <StageTag candidate={candidate} />
          </Flex>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
            <Card size="small">
              <Statistic title="경력" value={candidate.experienceYears} suffix="년" styles={{ content: { fontSize: token.fontSizeLG } }} />
            </Card>
            <Card size="small">
              <Statistic
                title="지원 후"
                value={Math.max(0, today.diff(dayjs(candidate.applied), "day"))}
                suffix="일"
                styles={{ content: { fontSize: token.fontSizeLG } }}
              />
            </Card>
            <Card size="small">
              <Statistic title="평가" value={candidate.rating || "—"} suffix={candidate.rating ? "/ 5" : undefined} styles={{ content: { fontSize: token.fontSizeLG } }} />
            </Card>
          </div>

          {candidate.next ? (
            <Card
              size="small"
              style={{ background: token.colorPrimaryBg, borderColor: token.colorPrimaryBorder }}
              styles={{ body: { padding: 12 } }}
            >
              <Flex align="center" gap={10}>
                {candidate.next.mode === "화상" ? <VideoCameraOutlined /> : <CalendarOutlined />}
                <span style={{ lineHeight: 1.35 }}>
                  <Typography.Text strong style={{ display: "block" }}>{candidate.next.label}</Typography.Text>
                  <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                    {eventLabel(candidate)}
                  </Typography.Text>
                </span>
              </Flex>
            </Card>
          ) : null}

          <Descriptions
            bordered
            size="small"
            column={1}
            items={[
              { key: "email", label: "이메일", children: <Typography.Text copyable>{candidate.email}</Typography.Text> },
              { key: "position", label: "지원 공고", children: position ? `${position.id} · ${position.title}` : candidate.positionId },
              { key: "company", label: "현 소속", children: candidate.currentCompany },
              { key: "source", label: "지원 경로", children: candidate.source },
              { key: "applied", label: "지원일", children: dayjs(candidate.applied).format("YYYY년 M월 D일") },
              { key: "owner", label: "채용 담당", children: position?.owner ?? "—" },
            ]}
          />

          <div>
            <Typography.Text strong style={{ display: "block", marginBlockEnd: 12 }}>전형 단계</Typography.Text>
            <Steps
              size="small"
              orientation="vertical"
              current={stageIndex}
              status={candidate.rejected ? "error" : candidate.stage === "입사" ? "finish" : "process"}
              items={HIRING_STAGES.map((s, i) => ({
                title: s,
                content: i < stageIndex ? "통과" : i === stageIndex ? (candidate.rejected ? "여기서 탈락" : "진행 중") : "예정",
              }))}
            />
          </div>

          <div>
            <Typography.Text strong style={{ display: "block", marginBlockEnd: 12 }}>
              면접관 메모 {candidate.notes.length}건
            </Typography.Text>
            {candidate.notes.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="아직 남긴 메모가 없어요. 서류 검토 뒤에 적혀요." />
            ) : (
              <Timeline
                items={candidate.notes.map((n, i) => ({
                  key: `${n.at}-${i}`,
                  content: (
                    <span style={{ lineHeight: 1.45 }}>
                      <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                        {n.by} · {dayjs(n.at).format("M월 D일")}
                      </Typography.Text>
                      <Typography.Text style={{ display: "block" }}>{n.text}</Typography.Text>
                    </span>
                  ),
                }))}
              />
            )}
          </div>
        </Space>
      ) : null}
    </Drawer>
  );
}

// 후보자 등록

interface NewCandidateValues {
  name: string;
  email: string;
  positionId: string;
  source: CandidateSource;
  experienceYears: number;
  currentCompany: string;
}

function AddCandidateModal({ open, onClose }: { open: boolean; onClose:  => void }) {
  const { state, dispatch } = useHr;
  const { message } = App.useApp;
  const [form] = Form.useForm<NewCandidateValues>;

  const submit = (values: NewCandidateValues) => {
    const id = nextId(state.candidates.map((c) => c.id), "CAND-");
    dispatch({
      type: "candidate/add",
      candidate: {
        id,
        name: values.name.trim,
        email: values.email.trim,
        positionId: values.positionId,
        source: values.source,
        experienceYears: values.experienceYears,
        currentCompany: values.currentCompany.trim,
        stage: "서류 심사",
        applied: TODAY,
        rating: 0,
        notes: [],
      },
    });
    message.success(`${values.name.trim}님을 ${id} 로 등록했어요. 서류 심사부터 시작해요.`);
    form.resetFields;
    onClose;
  };

  return (
    <Modal
      open={open}
      title="후보자 등록"
      okText="등록하기"
      cancelText="취소"
      onOk={ => form.submit}
      onCancel={ => {
        form.resetFields;
        onClose;
      }}
      destroyOnHidden
    >
      <Form<NewCandidateValues>
        form={form}
        layout="vertical"
        requiredMark="optional"
        onFinish={submit}
        initialValues={{ source: "직접 지원", experienceYears: 3 }}
      >
        <Flex gap={12}>
          <Form.Item name="name" label="이름" rules={[{ required: true, message: "이름을 적어 주세요." }]} style={{ flex: 1 }}>
            <Input placeholder="예: 홍지우" />
          </Form.Item>
          <Form.Item name="email" label="이메일" rules={[{ required: true, type: "email", message: "이메일 주소를 확인해 주세요." }]} style={{ flex: 1 }}>
            <Input placeholder="jiwoo.hong@example.com" />
          </Form.Item>
        </Flex>
        <Form.Item name="positionId" label="지원 공고" rules={[{ required: true, message: "공고를 골라 주세요." }]}>
          <Select placeholder="공고 고르기" options={POSITIONS.map((p) => ({ value: p.id, label: `${p.id} · ${p.title}` }))} />
        </Form.Item>
        <Flex gap={12}>
          <Form.Item name="experienceYears" label="경력(년)" style={{ flex: 1 }}>
            <InputNumber min={0} max={40} style={{ inlineSize: "100%" }} />
          </Form.Item>
          <Form.Item name="currentCompany" label="현 소속" rules={[{ required: true, message: "현 소속을 적어 주세요." }]} style={{ flex: 2 }}>
            <Input placeholder="예: 커머스 플랫폼" />
          </Form.Item>
        </Flex>
        <Form.Item name="source" label="지원 경로">
          <Radio.Group optionType="button" options={SOURCES.map((s) => ({ value: s, label: s }))} />
        </Form.Item>
      </Form>
    </Modal>
  );
}


export function HiringScreen {
  const { state, dispatch } = useHr;
  const { token } = theme.useToken;
  const { message, modal } = App.useApp;
  const { candidates } = state;

  const [positionId, setPositionId] = React.useState<string | undefined>(undefined);
  const [stage, setStage] = React.useState<HiringStage | null>(null);
  const [query, setQuery] = React.useState("");
  const [includeClosed, setIncludeClosed] = React.useState(false);
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [adding, setAdding] = React.useState(false);

  const opened = candidates.find((c) => c.id === openId) ?? null;

  const advance = (c: Candidate) => {
    const to = nextStage(c.stage);
    if (!to) return;
    dispatch({ type: "candidate/move", id: c.id, stage: to });
    message.success(`${c.name}님을 ${to} 단계로 옮겼어요.`);
  };
  const reject = (c: Candidate) => {
    // 되돌릴 수 없는 작업은 App.useApp의 Modal.confirm 사용. 테마 제약임
    modal.confirm({
      title: `${c.name}님을 탈락 처리할까요?`,
      content: "후보자에게 결과 안내 메일이 나가요. 되돌릴 수 없어요.",
      okText: "탈락 처리",
      okButtonProps: { danger: true },
      cancelText: "취소",
      onOk:  => {
        dispatch({ type: "candidate/reject", id: c.id });
        setOpenId(null);
        message.success(`${c.name}님을 탈락 처리했어요.`);
      },
    });
  };

  // 전체 상태 기준으로 요약 계산
  const active = candidates.filter(isActive);
  const upcomingInterviews = active
    .filter((c) => c.next?.kind === "면접" && daysUntil(c.next.at) >= 0 && daysUntil(c.next.at) < 7)
    .sort((a, b) => (a.next?.at ?? "").localeCompare(b.next?.at ?? ""));
  const offers = active.filter((c) => c.stage === "오퍼");
  const soonestOffer = offers
    .map((c) => c.next?.at)
    .filter((d): d is string => Boolean(d))
    .sort[0];
  const avgDays = active.length
    ? Math.round(active.reduce((sum, c) => sum + today.diff(dayjs(c.applied), "day"), 0) / active.length)
    : 0;

  const q = query.trim.toLowerCase;
  const shown = candidates
    .filter((c) => includeClosed || isActive(c))
    .filter((c) => !positionId || c.positionId === positionId)
    .filter((c) => !stage || c.stage === stage)
    .filter((c) => q === "" || `${c.name} ${c.email} ${c.id} ${positionOf(c)?.title ?? ""}`.toLowerCase.includes(q))
    .sort((a, b) => HIRING_STAGES.indexOf(b.stage) - HIRING_STAGES.indexOf(a.stage) || a.applied.localeCompare(b.applied));

  const weekly = weeklyApplicants(candidates);

  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <div className="hr-toolbar">
        <div className="hr-toolbar-group">
          <Select<string>
            allowClear
            placeholder="전체 공고"
            value={positionId}
            onChange={setPositionId}
            options={POSITIONS.map((p) => ({ value: p.id, label: `${p.id} · ${p.title}` }))}
            style={{ inlineSize: "15rem" }}
          />
          <Input
            allowClear
            placeholder="후보자 이름·이메일 검색"
            value={query}
            onChange={(e) => {
              const value = e.target.value;
              setQuery(value);
            }}
            style={{ inlineSize: "13rem" }}
          />
          <Checkbox
            checked={includeClosed}
            onChange={(e) => {
              const checked = e.target.checked;
              setIncludeClosed(checked);
            }}
          >
            탈락·입사 포함
          </Checkbox>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={ => setAdding(true)}>후보자 등록</Button>
      </div>

      {/* 단계 막대는 필터. 선택만 process, 나머지 wait 로 위치 전달 */}
      <Card size="small" styles={{ body: { padding: "12px 16px" } }}>
        <Steps
          type="navigation"
          size="small"
          current={stage ? HIRING_STAGES.indexOf(stage) : -1}
          onChange={(i) => setStage(HIRING_STAGES[i] === stage ? null : HIRING_STAGES[i])}
          items={HIRING_STAGES.map((s) => ({
            title: s,
            subTitle: `${stageCount(candidates, s)}명`,
            status: s === stage ? "process" : "wait",
          }))}
        />
      </Card>

      <div className="hr-stats">
        <StatCard
          icon={<TeamOutlined />}
          tone="brand"
          label="진행 중 후보자"
          value={active.length}
          suffix="명"
          note={`공고 ${POSITIONS.length}건 · 탈락 ${candidates.filter((c) => c.rejected).length} · 입사 확정 ${candidates.filter((c) => c.stage === "입사").length}`}
        />
        <StatCard
          icon={<CalendarOutlined />}
          tone="success"
          label="다가오는 7일 면접"
          value={upcomingInterviews.length}
          suffix="건"
          note={upcomingInterviews[0] ? `가장 이른 ${eventLabel(upcomingInterviews[0])}` : "잡힌 면접이 없어요"}
        />
        <StatCard
          icon={<SolutionOutlined />}
          tone="warning"
          label="오퍼 회신 대기"
          value={offers.length}
          suffix="명"
          note={soonestOffer ? `가장 빠른 기한 ${ddayLabel(soonestOffer)}` : "회신을 기다리는 오퍼가 없어요"}
        />
        <StatCard
          icon={<HourglassOutlined />}
          tone="neutral"
          label="평균 진행 기간"
          value={avgDays}
          suffix="일"
          note={`지원일부터 오늘(${dayjs(TODAY).format("M월 D일")})까지`}
        />
      </div>

      <Table<Candidate>
        rowKey="id"
        dataSource={shown}
        scroll={{ x: 800 }}
        pagination={{ pageSize: 8, showSizeChanger: false, showTotal: (total, range) => `${range[0]}–${range[1]} / ${total}명` }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="조건에 맞는 후보자가 없어요." /> }}
        onRow={(record) => ({ onClick:  => setOpenId(record.id), style: { cursor: "pointer" } })}
        columns={[
          {
            title: "후보자",
            dataIndex: "name",
            width: 210,
            render: (_: string, c) => <PersonCell name={c.name} sub={`${c.source} · ${dayjs(c.applied).format("M월 D일")} 지원`} />,
          },
          {
            title: "지원 공고",
            dataIndex: "positionId",
            width: 180,
            render: (_: string, c) => {
              const p = positionOf(c);
              return (
                <span style={{ lineHeight: 1.35 }}>
                  <Typography.Text style={{ display: "block" }}>{p?.title ?? c.positionId}</Typography.Text>
                  <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                    {p ? `${p.department} · ${p.owner}` : ""}
                  </Typography.Text>
                </span>
              );
            },
          },
          {
            title: "단계",
            dataIndex: "stage",
            width: 96,
            render: (_: HiringStage, c) => <StageTag candidate={c} />,
          },
          {
            title: "평가",
            dataIndex: "rating",
            width: 116,
            sorter: (a, b) => a.rating - b.rating,
            render: (rating: number) => rating
              ? <Rate disabled allowHalf value={rating} style={{ fontSize: token.fontSizeSM }} />
              : <Typography.Text type="secondary">미평가</Typography.Text>,
          },
          {
            title: "다음 일정",
            key: "next",
            width: 170,
            render: (_: unknown, c) => c.next ? (
              <span style={{ lineHeight: 1.35 }}>
                <Typography.Text style={{ display: "block" }}>{c.next.label}</Typography.Text>
                <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                  {eventLabel(c)}
                </Typography.Text>
              </span>
            ) : (
              <Typography.Text type="secondary">{c.rejected ? "종료" : "미정"}</Typography.Text>
            ),
          },
          {
            key: "actions",
            width: 44,
            align: "center",
            render: (_: unknown, c) => (
              <Dropdown
                trigger={["click"]}
                menu={{
                  items: [
                    { key: "open", label: "상세 보기" },
                    ...(isActive(c) && nextStage(c.stage) ? [{ key: "advance", label: `${nextStage(c.stage)}(으)로 옮기기` }] : []),
                    ...(isActive(c) ? [{ key: "reject", label: "탈락 처리", danger: true }] : []),
                  ],
                  onClick: ({ key, domEvent }) => {
                    // 이벤트 전파 차단. 행 onClick까지 전달되어 상세도 함께 열리는 문제 있음
                    domEvent.stopPropagation;
                    if (key === "open") setOpenId(c.id);
                    if (key === "advance") advance(c);
                    if (key === "reject") reject(c);
                  },
                }}
              >
                <Button type="text" size="small" aria-label={`${c.name} 더 보기`} icon={<MoreOutlined />} onClick={(e) => e.stopPropagation} />
              </Dropdown>
            ),
          },
        ]}
      />

      <div className="hr-pair">
        <Card
          size="small"
          title="다가오는 7일 면접"
          extra={<Typography.Text type="secondary">{upcomingInterviews.length}건</Typography.Text>}
          styles={{ body: { padding: upcomingInterviews.length ? 0 : 16 } }}
        >
          {upcomingInterviews.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="이번 주에 잡힌 면접이 없어요." />
          ) : (
            upcomingInterviews.map((c, i) => (
              <Flex
                key={c.id}
                align="center"
                gap={12}
                style={{ paddingBlock: 10, paddingInline: 14, borderBlockStart: i === 0 ? "none" : `1px solid ${token.colorBorderSecondary}`, cursor: "pointer" }}
                onClick={ => setOpenId(c.id)}
              >
                <span
                  style={{
                    flex: "0 0 auto",
                    inlineSize: "3.25rem",
                    textAlign: "center",
                    lineHeight: 1.2,
                    paddingBlock: 4,
                    borderRadius: token.borderRadius,
                    background: token.colorPrimaryBg,
                    color: token.colorPrimary,
                  }}
                >
                  <Typography.Text style={{ display: "block", color: "inherit", fontSize: token.fontSizeSM }}>
                    {dayjs(c.next?.at).locale("ko").format("M/D (dd)")}
                  </Typography.Text>
                  <Typography.Text strong style={{ display: "block", color: "inherit" }}>
                    {dayjs(c.next?.at).format("HH:mm")}
                  </Typography.Text>
                </span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <PersonCell name={c.name} sub={`${c.next?.label} · ${positionOf(c)?.title ?? ""}`} size={28} />
                </div>
                <Tag style={{ marginInlineEnd: 0 }} icon={c.next?.mode === "화상" ? <VideoCameraOutlined /> : undefined}>
                  {c.next?.mode ?? "—"}
                </Tag>
              </Flex>
            ))
          )}
        </Card>

        <Card size="small" title="주간 지원자 추이" extra={<Typography.Text type="secondary">최근 8주</Typography.Text>}>
          {/* 높이 고정. 부모가 auto 면 ResponsiveContainer 가 0이 되어 내용이 안 보임 */}
          <div style={{ inlineSize: "100%", blockSize: 200 }}>
            <ResponsiveContainer>
              <BarChart data={weekly} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                <CartesianGrid vertical={false} stroke={token.colorBorderSecondary} />
                {/* fontSize는 style에 지정, SVG 속성은 명시도 0이라 리셋에 밀릴 수 있음 */}
                <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fill: token.colorTextSecondary, style: { fontSize: 12 } }} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} width={24} tick={{ fill: token.colorTextSecondary, style: { fontSize: 12 } }} />
                <Tooltip
                  cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                  formatter={(value) => [`${value}명`, "지원"]}
                  labelFormatter={(label) => `${label} 주`}
                  contentStyle={{
                    background: token.colorBgElevated,
                    border: `1px solid ${token.colorBorderSecondary}`,
                    borderRadius: token.borderRadius,
                    color: token.colorText,
                  }}
                />
                {/* isAnimationActive={false} 지정, 재렌더 시 막대 0서 자랄 수 있음 */}
                <Bar dataKey="count" fill="var(--component-chart-series-1)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card size="small" title="공고별 현황" extra={<Typography.Text type="secondary">진행 중 {POSITIONS.length}건</Typography.Text>}>
        <Table<(typeof POSITIONS)[number]>
          rowKey="id"
          size="small"
          dataSource={POSITIONS}
          pagination={false}
          scroll={{ x: 640 }}
          onRow={(p) => ({ onClick:  => setPositionId(positionId === p.id ? undefined : p.id), style: { cursor: "pointer" } })}
          columns={[
            {
              title: "공고",
              dataIndex: "title",
              width: 220,
              render: (_: string, p) => (
                <span style={{ lineHeight: 1.35 }}>
                  <Typography.Text strong style={{ display: "block" }}>{p.title}</Typography.Text>
                  <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                    {p.id} · {p.department} · 담당 {p.owner}
                  </Typography.Text>
                </span>
              ),
            },
            {
              title: "지원",
              key: "applicants",
              width: 80,
              align: "right",
              render: (_: unknown, p) => `${candidates.filter((c) => c.positionId === p.id).length}명`,
            },
            {
              title: "면접 중",
              key: "interviewing",
              width: 80,
              align: "right",
              render: (_: unknown, p) => `${candidates.filter((c) => c.positionId === p.id && isActive(c) && (c.stage === "1차 면접" || c.stage === "2차 면접")).length}명`,
            },
            {
              title: "채용 진행률",
              key: "progress",
              width: 200,
              render: (_: unknown, p) => {
                const hired = candidates.filter((c) => c.positionId === p.id && c.stage === "입사").length;
                const offered = candidates.filter((c) => c.positionId === p.id && isActive(c) && c.stage === "오퍼").length;
                return (
                  <div>
                    {/* 두 겹 막대. 입사 확정은 진한 색, 오퍼는 성공 톤으로 정원 대비 표시 */}
                    <Progress
                      percent={Math.round(((hired + offered) / p.headcount) * 100)}
                      success={{ percent: Math.round((hired / p.headcount) * 100) }}
                      showInfo={false}
                      size="small"
                      status="normal"
                    />
                    <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                      정원 {p.headcount} · 입사 {hired} · 오퍼 {offered}
                    </Typography.Text>
                  </div>
                );
              },
            },
            {
              title: "마감",
              dataIndex: "closesOn",
              width: 110,
              sorter: (a, b) => a.closesOn.localeCompare(b.closesOn),
              render: (closesOn: string) => (
                daysUntil(closesOn) <= 7 ? (
                  <StatusTag tone="warning">{ddayLabel(closesOn)}</StatusTag>
                ) : (
                  <Tag style={{ marginInlineEnd: 0 }}>{ddayLabel(closesOn)}</Tag>
                )
              ),
            },
          ]}
        />
      </Card>

      <CandidateDrawer candidate={opened} onClose={ => setOpenId(null)} onAdvance={advance} onReject={reject} />
      <AddCandidateModal open={adding} onClose={ => setAdding(false)} />
    </Space>
  );
}
