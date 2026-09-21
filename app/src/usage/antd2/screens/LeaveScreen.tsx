import * as React from "react";
import {
  App, Badge, Button, Calendar, Card, DatePicker, Empty, Flex, Form, Input, Modal, Popconfirm, Progress,
  Radio, Segmented, Select, Space, Tag, Tooltip, Typography, theme,
} from "antd";
import {
  CalendarOutlined, CheckCircleOutlined, ClockCircleOutlined, PlusOutlined, SmileOutlined,
} from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import {
  LEAVE_TYPES, TODAY, dayLabel, leaveDates, leaveDays, leaveLeft, leaveRangeLabel, leavesOn, shortDayLabel, today,
  type LeaveRequest, type LeaveStatus, type LeaveType,
} from "../data";
import { PersonCell, StatCard, StatusTag, type Tone } from "../parts";
import { nextId, useHr } from "../store";

const TYPE_COLOR: Record<LeaveRequest["type"], string> = {
  연차: "var(--semantic-bg-brand-subtle)",
  병가: "var(--semantic-bg-danger-subtle)",
  경조사: "var(--semantic-bg-neutral-subtle)",
};

// 옅은 배경 위 글자색, 배경별 짝 fg-on-*-subtle 존재
const TYPE_FG: Record<LeaveType, string> = {
  연차: "var(--semantic-fg-on-brand-subtle)",
  병가: "var(--semantic-fg-on-danger-subtle)",
  경조사: "var(--semantic-fg-on-neutral-subtle)",
};

// 달력 셀 점은 진한 톤 사용. subtle 은 밝은 셀에서 안 보임
const TYPE_DOT: Record<LeaveType, string> = {
  연차: "var(--semantic-bg-brand-default)",
  병가: "var(--semantic-bg-danger-default)",
  경조사: "var(--semantic-bg-neutral-default)",
};

// 프리셋 대신 톤 선택해 StatusTag로 렌더링. 프리셋은 WCAG AA 대비 기준 미달임
const STATUS_TONE: Record<LeaveStatus, Tone> = { 대기: "warning", 승인: "success", 반려: "neutral" };
const STATUSES: LeaveStatus[] = ["대기", "승인", "반려"];

function TypeTag({ type }: { type: LeaveType }) {
  return (
    <Tag style={{ background: TYPE_COLOR[type], color: TYPE_FG[type], border: "none", marginInlineEnd: 0 }}>
      {type}
    </Tag>
  );
}

// 휴가 신청

interface NewLeaveValues {
  employeeId: string;
  type: LeaveType;
  range: [Dayjs, Dayjs];
  reason: string;
}

function RequestLeaveModal({ open, onClose }: { open: boolean; onClose:  => void }) {
  const { state, dispatch } = useHr;
  const { message } = App.useApp;
  const [form] = Form.useForm<NewLeaveValues>;

  const submit = (values: NewLeaveValues) => {
    const leave = {
      start: values.range[0].format("YYYY-MM-DD"),
      end: values.range[1].format("YYYY-MM-DD"),
    };
    const id = nextId(state.leaves.map((l) => l.id), "LV-");
    dispatch({
      type: "leave/add",
      leave: { ...leave, id, employeeId: values.employeeId, type: values.type, reason: values.reason.trim, status: "대기", requestedLabel: "방금" },
    });
    message.success(`${id} 휴가 ${leaveDays(leave)}일을 신청했어요. 승인 대기 목록에 올라갔어요.`);
    form.resetFields;
    onClose;
  };

  return (
    <Modal
      open={open}
      title="휴가 신청"
      okText="신청하기"
      cancelText="취소"
      onOk={ => form.submit}
      onCancel={ => {
        form.resetFields;
        onClose;
      }}
      destroyOnHidden
    >
      <Form<NewLeaveValues>
        form={form}
        layout="vertical"
        requiredMark="optional"
        onFinish={submit}
        initialValues={{ type: "연차", reason: "" }}
      >
        <Form.Item name="employeeId" label="구성원" rules={[{ required: true, message: "누구의 휴가인지 골라 주세요." }]}>
          <Select
            placeholder="구성원 고르기"
            showSearch={{ optionFilterProp: "label" }}
            options={state.employees
              .filter((e) => e.status !== "휴직")
              .map((e) => ({ value: e.id, label: `${e.name} · ${e.department} · 잔여 ${leaveLeft(e)}일` }))}
          />
        </Form.Item>
        <Form.Item name="type" label="종류">
          <Radio.Group optionType="button" options={LEAVE_TYPES.map((t) => ({ value: t, label: t }))} />
        </Form.Item>
        <Form.Item
          name="range"
          label="기간"
          rules={[
            { required: true, message: "기간을 골라 주세요." },
            {
              // 주말만 선택 시 근무일 0일 확인
              validator: (_, range?: [Dayjs, Dayjs]) =>
                !range || leaveDays({ start: range[0].format("YYYY-MM-DD"), end: range[1].format("YYYY-MM-DD") }) > 0
                  ? Promise.resolve
                  : Promise.reject(new Error("근무일이 하루도 없어요. 평일을 넣어 골라 주세요.")),
            },
          ]}
        >
          <DatePicker.RangePicker style={{ inlineSize: "100%" }} defaultPickerValue={[today, today]} />
        </Form.Item>
        <Form.Item name="reason" label="사유" rules={[{ required: true, whitespace: true, message: "사유를 한 줄로 적어 주세요." }]}>
          <Input.TextArea rows={2} maxLength={60} showCount placeholder="예: 가족 여행" />
        </Form.Item>
      </Form>
    </Modal>
  );
}


export function LeaveScreen {
  // 정적 알림 App.useApp으로 생성. 컨텍스트 밖에서 생성하면 antd 기본색으로 표시되는 문제가 있음
  const { message } = App.useApp;
  const { token } = theme.useToken;
  const { state, dispatch } = useHr;
  const { leaves, employees } = state;

  const [selected, setSelected] = React.useState<Dayjs>( => today);
  const [tab, setTab] = React.useState<LeaveStatus>("대기");
  const [requesting, setRequesting] = React.useState(false);

  const employeeOf = (id: string) => employees.find((e) => e.id === id);
  const nameOf = (id: string) => employeeOf(id)?.name ?? "구성원";

  const resolve = (leave: LeaveRequest, status: "승인" | "반려") => {
    dispatch({ type: "leave/resolve", id: leave.id, status });
    message.success(`${nameOf(leave.employeeId)}님의 ${leave.type} ${leaveDays(leave)}일을 ${status}했어요.`);
  };

  // 전체 상태 기준으로 요약 계산
  const pending = leaves.filter((l) => l.status === "대기");
  const approved = leaves.filter((l) => l.status === "승인");
  const pendingDays = pending.reduce((sum, l) => sum + leaveDays(l), 0);
  const week = Array.from({ length: 7 }, (_, i) => today.add(i, "day").format("YYYY-MM-DD"));
  const upcoming = leaves.filter((l) => l.status !== "반려" && leaveDates(l).some((d) => week.includes(d)));
  const upcomingPeople = new Set(upcoming.map((l) => l.employeeId));
  const monthKey = today.format("YYYY-MM");
  const approvedDaysThisMonth = approved.reduce(
    (sum, l) => sum + leaveDates(l).filter((d) => d.startsWith(monthKey)).length, 0);
  const active = employees.filter((e) => e.status !== "휴직");
  const avgLeft = active.length ? active.reduce((sum, e) => sum + leaveLeft(e), 0) / active.length : 0;
  const usedRate = Math.round(
    (active.reduce((sum, e) => sum + e.leaveUsed, 0) / Math.max(1, active.reduce((sum, e) => sum + e.leaveTotal, 0))) * 100);

  const selectedIso = selected.format("YYYY-MM-DD");
  const selectedLeaves = leavesOn(leaves, selectedIso);
  const selectedIsWeekend = selected.day === 0 || selected.day === 6;

  const lowest = [...employees]
    .filter((e) => e.status === "재직")
    .sort((a, b) => leaveLeft(a) - leaveLeft(b))
    .slice(0, 5);

  const listed = leaves.filter((l) => l.status === tab);

  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <div className="hr-toolbar">
        <Space size={12} wrap>
          {LEAVE_TYPES.map((t) => (
            <Badge key={t} color={TYPE_DOT[t]} text={t} />
          ))}
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
            기준일 {dayLabel(TODAY)}
          </Typography.Text>
        </Space>
        <Button type="primary" icon={<PlusOutlined />} onClick={ => setRequesting(true)}>휴가 신청</Button>
      </div>

      <div className="hr-stats">
        <StatCard
          icon={<ClockCircleOutlined />}
          tone="warning"
          label="승인 대기"
          value={pending.length}
          suffix="건"
          note={pending.length ? `근무일 ${pendingDays}일분이 결정을 기다려요` : "밀린 요청이 없어요"}
        />
        <StatCard
          icon={<CalendarOutlined />}
          tone="brand"
          label="다가오는 7일 휴가자"
          value={upcomingPeople.size}
          suffix="명"
          note={`승인 ${upcoming.filter((l) => l.status === "승인").length}건 · 대기 ${upcoming.filter((l) => l.status === "대기").length}건`}
        />
        <StatCard
          icon={<CheckCircleOutlined />}
          tone="success"
          label={`${today.month + 1}월 승인 휴가`}
          value={approvedDaysThisMonth}
          suffix="일"
          note={`승인 ${approved.length}건 기준`}
        />
        <StatCard
          icon={<SmileOutlined />}
          tone="neutral"
          label="평균 잔여 연차"
          value={avgLeft.toFixed(1)}
          suffix="일"
          note={`올해 소진율 ${usedRate}% · ${active.length}명 기준`}
        />
      </div>

      <div className="hr-split">
        <Card size="small" title={selected.format("YYYY년 M월")} styles={{ body: { padding: 8 } }}>
          <Calendar
            fullscreen={false}
            value={selected}
            onSelect={setSelected}
            onPanelChange={setSelected}
            cellRender={(value, info) => {
              if (info.type !== "date") return info.originNode;
              const onDay = value.month === selected.month ? leavesOn(leaves, value.format("YYYY-MM-DD")) : [];
              // 점 없는 날도 같은 행 높이 유지. 없으면 달력이 들쭉날쭉해지는 문제 있음
              return (
                <Tooltip
                  title={onDay.length ? onDay.map((l) => `${nameOf(l.employeeId)} · ${l.type}${l.status === "대기" ? "(대기)" : ""}`).join(", ") : undefined}
                >
                  <Flex justify="center" align="center" gap={2} style={{ blockSize: 8 }}>
                    {onDay.slice(0, 3).map((l) => (
                      <span
                        key={l.id}
                        aria-hidden
                        style={{
                          display: "inline-block",
                          inlineSize: 6,
                          blockSize: 6,
                          borderRadius: "50%",
                          background: TYPE_DOT[l.type],
                          // 대기 중 휴가는 확정 건과 구분되게 빈 점으로 표시
                          ...(l.status === "대기"
                            ? { background: "transparent", boxShadow: `inset 0 0 0 1.5px ${TYPE_DOT[l.type]}` }
                            : {}),
                        }}
                      />
                    ))}
                  </Flex>
                </Tooltip>
              );
            }}
          />
        </Card>

        <Space orientation="vertical" size={16} style={{ display: "flex" }}>
          <Card
            size="small"
            title={dayLabel(selectedIso)}
            extra={<Typography.Text type="secondary">{selectedLeaves.length ? `${selectedLeaves.length}명 부재` : "전원 근무"}</Typography.Text>}
          >
            {selectedLeaves.length === 0 ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={selectedIsWeekend ? "주말이에요." : "이날 자리를 비우는 사람이 없어요."}
              />
            ) : (
              <Space orientation="vertical" size={12} style={{ display: "flex" }}>
                {selectedLeaves.map((l) => (
                  <Flex key={l.id} justify="space-between" align="center" gap={8}>
                    <PersonCell name={nameOf(l.employeeId)} sub={`${leaveRangeLabel(l)} · ${l.status}`} />
                    <TypeTag type={l.type} />
                  </Flex>
                ))}
              </Space>
            )}
          </Card>

          <Card size="small" title="잔여 연차가 적은 순" extra={<Typography.Text type="secondary">재직자 {lowest.length}명</Typography.Text>}>
            <Space orientation="vertical" size={10} style={{ display: "flex" }}>
              {lowest.map((e) => (
                <div key={e.id}>
                  <Flex justify="space-between" align="baseline">
                    <Typography.Text>{e.name}</Typography.Text>
                    <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                      {leaveLeft(e)}일 남음 · {e.leaveTotal}일 중
                    </Typography.Text>
                  </Flex>
                  <Progress
                    percent={Math.round((e.leaveUsed / e.leaveTotal) * 100)}
                    showInfo={false}
                    size="small"
                    status="normal"
                    strokeColor={leaveLeft(e) <= 5 ? token.colorWarning : token.colorPrimary}
                  />
                </div>
              ))}
            </Space>
          </Card>
        </Space>
      </div>

      {/* antd List가 v6에서 폐기돼 행을 직접 구현하는 방식임 */}
      <Card
        size="small"
        title="휴가 요청"
        styles={{ body: { padding: 0 } }}
        extra={
          <Segmented<LeaveStatus>
            size="small"
            value={tab}
            onChange={setTab}
            options={STATUSES.map((s) => ({ value: s, label: `${s} ${leaves.filter((l) => l.status === s).length}` }))}
          />
        }
      >
        {listed.length === 0 ? (
          <div style={{ padding: 24 }}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={`${tab} 상태인 요청이 없어요.`} />
          </div>
        ) : (
          listed.map((item, i) => {
            const employee = employeeOf(item.employeeId);
            return (
              <Flex
                key={item.id}
                align="center"
                justify="space-between"
                gap={12}
                wrap
                style={{
                  paddingBlock: 12,
                  paddingInline: 16,
                  borderBlockStart: i === 0 ? "none" : `1px solid ${token.colorBorderSecondary}`,
                }}
              >
                <Flex align="center" gap={12} style={{ minWidth: 0, flex: "1 1 18rem" }}>
                  <PersonCell
                    name={nameOf(item.employeeId)}
                    sub={employee ? `${employee.department} · 잔여 ${leaveLeft(employee)}일` : undefined}
                  />
                  <TypeTag type={item.type} />
                </Flex>
                <div style={{ flex: "1 1 14rem", minWidth: 0, lineHeight: 1.35 }}>
                  <Typography.Text style={{ display: "block" }}>
                    {leaveRangeLabel(item)} · {leaveDays(item)}일
                  </Typography.Text>
                  <Typography.Text type="secondary" ellipsis style={{ display: "block", fontSize: token.fontSizeSM }}>
                    {item.id} · {item.reason} · {item.requestedLabel} 신청
                  </Typography.Text>
                </div>
                {item.status === "대기" ? (
                  <Space size={8}>
                    <Popconfirm
                      title={`${shortDayLabel(item.start)}부터 ${leaveDays(item)}일, 승인할까요?`}
                      okText="승인"
                      cancelText="취소"
                      onConfirm={ => resolve(item, "승인")}
                    >
                      <Button size="small" type="primary">승인</Button>
                    </Popconfirm>
                    <Popconfirm
                      title="이 요청을 반려할까요?"
                      okText="반려"
                      cancelText="취소"
                      okButtonProps={{ danger: true }}
                      onConfirm={ => resolve(item, "반려")}
                    >
                      <Button size="small" danger>반려</Button>
                    </Popconfirm>
                  </Space>
                ) : (
                  <StatusTag tone={STATUS_TONE[item.status]}>{item.status}</StatusTag>
                )}
              </Flex>
            );
          })
        )}
      </Card>

      <RequestLeaveModal open={requesting} onClose={ => setRequesting(false)} />
    </Space>
  );
}
