import * as React from "react";
import {
  Alert, App, Button, Card, DatePicker, Descriptions, Drawer, Dropdown, Empty, Flex, Form, Input, Modal,
  Progress, Radio, Segmented, Select, Space, Statistic, Steps, Table, Timeline, Typography, theme,
} from "antd";
import {
  HourglassOutlined, MoreOutlined, PlusOutlined, RocketOutlined, SearchOutlined, TeamOutlined, UserSwitchOutlined,
} from "@ant-design/icons";
import dayjs, { type Dayjs } from "dayjs";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  DEPARTMENTS, EMPLOYMENT_TYPES, LOCATIONS, ONBOARDING_STEPS,
  leaveDays, leaveLeft, leaveRangeLabel, onboardingPercent, tenureLabel, today,
  type Department, type Employee, type EmployeeStatus, type LeaveStatus,
} from "../data";
import { PersonCell, StatCard, StatusTag, type Tone } from "../parts";
import { nextId, useHr } from "../store";

const STATUS_TONE: Record<EmployeeStatus, Tone> = {
  재직: "success",
  온보딩: "brand",
  휴직: "neutral",
};

const LEAVE_STATUS_TONE: Record<LeaveStatus, Tone> = {
  대기: "warning",
  승인: "success",
  반려: "neutral",
};

type StatusFilter = "전체" | EmployeeStatus;
const STATUS_FILTERS: StatusFilter[] = ["전체", "재직", "온보딩", "휴직"];

const PAGE_SIZE = 8;

// 잔여 연차가 기준일수 이하인 재직자를 소진 임박으로 확인
const LOW_LEAVE_DAYS = 5;
const isLowLeave = (e: Employee): boolean => e.status === "재직" && leaveLeft(e) <= LOW_LEAVE_DAYS;

// 상세 드로어

function EmployeeDrawer({ employee, onClose }: { employee: Employee | null; onClose:  => void }) {
  const { state, navigate } = useHr;
  const { token } = theme.useToken;
  const leaves = employee ? state.leaves.filter((l) => l.employeeId === employee.id) : [];
  const onboarding = employee?.status === "온보딩";

  return (
    <Drawer
      open={employee !== null}
      onClose={onClose}
      size={460}
      title={employee ? `${employee.id} · 구성원 상세` : "구성원 상세"}
      footer={
        <Flex justify="flex-end" gap={8}>
          <Button onClick={onClose}>닫기</Button>
          <Button
            type="primary"
            onClick={ => {
              onClose;
              navigate("leave");
            }}
          >
            휴가 탭에서 보기
          </Button>
        </Flex>
      }
    >
      {employee ? (
        <Space orientation="vertical" size={20} style={{ display: "flex" }}>
          <Flex gap={12} align="center" justify="space-between">
            <PersonCell name={employee.name} sub={`${employee.role} · ${employee.department}`} size={48} />
            <StatusTag tone={STATUS_TONE[employee.status]}>{employee.status}</StatusTag>
          </Flex>

          {/* 3개라 3셀 고정, 드로어 폭 항상 동일. 셀 약 130px라 값 글자 크기 한 단계 조정 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
            <Card size="small">
              <Statistic title="근속" value={tenureLabel(employee.joined)} styles={{ content: { fontSize: token.fontSizeLG } }} />
            </Card>
            <Card size="small">
              <Statistic
                title="잔여 연차"
                value={leaveLeft(employee)}
                suffix={`/ ${employee.leaveTotal}일`}
                styles={{ content: { fontSize: token.fontSizeLG } }}
              />
            </Card>
            <Card size="small">
              <Statistic title="온보딩" value={onboardingPercent(employee)} suffix="%" styles={{ content: { fontSize: token.fontSizeLG } }} />
            </Card>
          </div>

          <Descriptions
            bordered
            size="small"
            column={1}
            items={[
              { key: "email", label: "이메일", children: <Typography.Text copyable>{employee.email}</Typography.Text> },
              { key: "location", label: "근무지", children: employee.location },
              { key: "employment", label: "고용 형태", children: employee.employment },
              { key: "joined", label: "입사일", children: dayjs(employee.joined).format("YYYY년 M월 D일") },
              { key: "manager", label: "매니저", children: employee.manager },
              ...(employee.returnOn
                ? [{ key: "return", label: "복귀 예정", children: dayjs(employee.returnOn).format("YYYY년 M월 D일") }]
                : []),
            ]}
          />

          {onboarding ? (
            <div>
              <Flex justify="space-between" align="baseline" style={{ marginBlockEnd: 12 }}>
                <Typography.Text strong>온보딩 진행</Typography.Text>
                <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                  {Math.min(employee.onboardingStep + 1, ONBOARDING_STEPS.length)} / {ONBOARDING_STEPS.length}단계
                </Typography.Text>
              </Flex>
              <Steps
                size="small"
                orientation="vertical"
                current={employee.onboardingStep}
                items={ONBOARDING_STEPS.map((label, i) => ({
                  title: label,
                  content: i < employee.onboardingStep ? "완료" : i === employee.onboardingStep ? "진행 중" : "예정",
                }))}
              />
            </div>
          ) : null}

          <div>
            <Typography.Text strong style={{ display: "block", marginBlockEnd: 12 }}>
              휴가 요청 {leaves.length}건
            </Typography.Text>
            {leaves.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="올해 신청한 휴가가 없어요." />
            ) : (
              <Timeline
                // color의 green, blue, gray는 antd 프리셋, 20색 축을 따르는 키임
                items={leaves.map((l) => ({
                  key: l.id,
                  color: l.status === "승인" ? "green" : l.status === "대기" ? "blue" : "gray",
                  content: (
                    <Flex justify="space-between" gap={8} align="flex-start">
                      <span>
                        <Typography.Text style={{ display: "block" }}>
                          {l.type} · {leaveRangeLabel(l)} ({leaveDays(l)}일)
                        </Typography.Text>
                        <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                          {l.id} · {l.reason}
                        </Typography.Text>
                      </span>
                      <StatusTag tone={LEAVE_STATUS_TONE[l.status]}>{l.status}</StatusTag>
                    </Flex>
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

// 구성원 추가

interface NewEmployeeValues {
  name: string;
  email: string;
  role: string;
  department: Department;
  location: Employee["location"];
  employment: Employee["employment"];
  joined: Dayjs;
  manager: string;
}

function AddEmployeeModal({ open, onClose }: { open: boolean; onClose:  => void }) {
  const { state, dispatch } = useHr;
  const { message } = App.useApp;
  const [form] = Form.useForm<NewEmployeeValues>;

  const submit = (values: NewEmployeeValues) => {
    const id = nextId(state.employees.map((e) => e.id), "E-");
    dispatch({
      type: "employee/add",
      employee: {
        id,
        name: values.name.trim,
        email: values.email.trim,
        role: values.role.trim,
        department: values.department,
        location: values.location,
        employment: values.employment,
        joined: values.joined.format("YYYY-MM-DD"),
        manager: values.manager,
        status: "온보딩",
        onboardingStep: 0,
        // 입사 첫해는 잔여 개월 수만큼 월 1일 연차 생성
        leaveTotal: Math.max(1, 12 - values.joined.month - 1),
        leaveUsed: 0,
      },
    });
    message.success(`${values.name.trim}님을 ${id} 로 등록했어요. 온보딩이 시작돼요.`);
    form.resetFields;
    onClose;
  };

  return (
    <Modal
      open={open}
      title="구성원 추가"
      okText="등록하기"
      cancelText="취소"
      onOk={ => form.submit}
      onCancel={ => {
        form.resetFields;
        onClose;
      }}
      destroyOnHidden
    >
      <Form<NewEmployeeValues>
        form={form}
        layout="vertical"
        requiredMark="optional"
        onFinish={submit}
        initialValues={{ employment: "정규직", location: "서울", joined: today, manager: "황보람" }}
      >
        <Flex gap={12}>
          <Form.Item name="name" label="이름" rules={[{ required: true, message: "이름을 적어 주세요." }]} style={{ flex: 1 }}>
            <Input placeholder="예: 홍지우" />
          </Form.Item>
          <Form.Item
            name="email"
            label="회사 이메일"
            rules={[{ required: true, type: "email", message: "이메일 주소를 확인해 주세요." }]}
            style={{ flex: 1 }}
          >
            <Input placeholder="jiwoo.hong@example.com" />
          </Form.Item>
        </Flex>
        <Flex gap={12}>
          <Form.Item name="role" label="직무" rules={[{ required: true, message: "직무를 적어 주세요." }]} style={{ flex: 1 }}>
            <Input placeholder="예: 백엔드 엔지니어" />
          </Form.Item>
          <Form.Item name="department" label="부서" rules={[{ required: true, message: "부서를 골라 주세요." }]} style={{ flex: 1 }}>
            <Select placeholder="부서 고르기" options={DEPARTMENTS.map((d) => ({ value: d, label: d }))} />
          </Form.Item>
        </Flex>
        <Flex gap={12}>
          <Form.Item name="joined" label="입사일" rules={[{ required: true, message: "입사일을 골라 주세요." }]} style={{ flex: 1 }}>
            <DatePicker style={{ inlineSize: "100%" }} />
          </Form.Item>
          <Form.Item name="manager" label="매니저" style={{ flex: 1 }}>
            <Select options={state.employees.filter((e) => e.status === "재직").map((e) => ({ value: e.name, label: `${e.name} · ${e.role}` }))} />
          </Form.Item>
        </Flex>
        <Flex gap={12}>
          <Form.Item name="location" label="근무지" style={{ flex: 1 }}>
            <Select options={LOCATIONS.map((l) => ({ value: l, label: l }))} />
          </Form.Item>
          <Form.Item name="employment" label="고용 형태" style={{ flex: 1 }}>
            <Radio.Group optionType="button" options={EMPLOYMENT_TYPES.map((t) => ({ value: t, label: t }))} />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
}


export function PeopleScreen {
  const { state, dispatch, navigate } = useHr;
  const { token } = theme.useToken;
  const { message } = App.useApp;
  const { employees } = state;

  const [status, setStatus] = React.useState<StatusFilter>("전체");
  const [department, setDepartment] = React.useState<Department | undefined>(undefined);
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [selectedKeys, setSelectedKeys] = React.useState<React.Key[]>([]);
  const [adding, setAdding] = React.useState(false);

  const opened = employees.find((e) => e.id === state.openEmployeeId) ?? null;
  const open = (id: string | null) => dispatch({ type: "employee/open", id });

  const q = query.trim.toLowerCase;
  const shown = employees.filter((e) =>
    (status === "전체" || e.status === status)
    && (!department || e.department === department)
    && (q === "" || `${e.name} ${e.email} ${e.role} ${e.id}`.toLowerCase.includes(q)));

  // 전체 상태 기준으로 요약 계산
  const onboarding = employees.filter((e) => e.status === "온보딩");
  const onLeave = employees.filter((e) => e.status === "휴직");
  const working = employees.filter((e) => e.status !== "휴직");
  const lowLeave = employees.filter(isLowLeave);
  const avgOnboarding = onboarding.length
    ? Math.round(onboarding.reduce((sum, e) => sum + onboardingPercent(e), 0) / onboarding.length)
    : 0;
  const nextReturn = onLeave
    .map((e) => e.returnOn)
    .filter((d): d is string => Boolean(d))
    .sort[0];

  const byDepartment = DEPARTMENTS
    .map((d) => ({ department: d, count: employees.filter((e) => e.department === d).length }))
    .sort((a, b) => b.count - a.count);
  const maxDepartment = Math.max(1, ...byDepartment.map((d) => d.count));

  const years = employees.map((e) => dayjs(e.joined).year);
  const firstYear = Math.min(...years, today.year);
  const byYear = Array.from({ length: today.year - firstYear + 1 }, (_, i) => {
    const year = firstYear + i;
    return { year: String(year), 입사: years.filter((y) => y === year).length };
  });

  const copyEmail = (e: Employee) => {
    void navigator.clipboard?.writeText(e.email);
    message.success(`${e.name}님의 이메일 주소를 복사했어요.`);
  };

  return (
    <Space orientation="vertical" size={16} style={{ display: "flex" }}>
      <div className="hr-toolbar">
        <Segmented<StatusFilter>
          value={status}
          onChange={(value) => {
            setStatus(value);
            setPage(1);
          }}
          options={STATUS_FILTERS.map((s) => ({
            value: s,
            label: (
              <span>
                {s}{" "}
                <Typography.Text type="secondary">
                  {s === "전체" ? employees.length : employees.filter((e) => e.status === s).length}
                </Typography.Text>
              </span>
            ),
          }))}
        />
        <div className="hr-toolbar-group">
          <Input
            allowClear
            prefix={<SearchOutlined />}
            placeholder="이름·이메일·사번 검색"
            value={query}
            onChange={(e) => {
              // 값은 핸들러 진입 즉시 추출. setState 안 e.target 늦게 읽으면 오류 있음
              const value = e.target.value;
              setQuery(value);
              setPage(1);
            }}
            style={{ inlineSize: "13rem" }}
          />
          <Select<Department>
            allowClear
            placeholder="전체 부서"
            value={department}
            onChange={(value) => {
              setDepartment(value);
              setPage(1);
            }}
            options={DEPARTMENTS.map((d) => ({ value: d, label: d }))}
            style={{ inlineSize: "8.5rem" }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={ => setAdding(true)}>구성원 추가</Button>
        </div>
      </div>

      <div className="hr-stats">
        <StatCard
          icon={<TeamOutlined />}
          tone="brand"
          label="전체 구성원"
          value={employees.length}
          suffix="명"
          note={`${byDepartment.filter((d) => d.count > 0).length}개 부서 · 근무 중 ${working.length}명`}
        />
        <StatCard
          icon={<RocketOutlined />}
          tone="success"
          label="온보딩 중"
          value={onboarding.length}
          suffix="명"
          note={onboarding.length ? `평균 진행률 ${avgOnboarding}%` : "진행 중인 온보딩이 없어요"}
        />
        <StatCard
          icon={<UserSwitchOutlined />}
          tone="neutral"
          label="휴직"
          value={onLeave.length}
          suffix="명"
          note={nextReturn ? `가장 빠른 복귀 ${dayjs(nextReturn).format("YYYY. M. D.")}` : "휴직 중인 구성원이 없어요"}
        />
        <StatCard
          icon={<HourglassOutlined />}
          tone="warning"
          label="연차 소진 임박"
          value={lowLeave.length}
          suffix="명"
          note={lowLeave.length
            ? `잔여 ${LOW_LEAVE_DAYS}일 이하 · ${lowLeave.map((e) => e.name).join(", ")}`
            : `잔여 ${LOW_LEAVE_DAYS}일 이하인 재직자가 없어요`}
        />
      </div>

      {selectedKeys.length > 0 ? (
        <Alert
          type="info"
          showIcon
          style={{ background: token.colorPrimaryBg, borderColor: token.colorPrimaryBorder }}
          title={`${selectedKeys.length}명을 골랐어요.`}
          action={
            <Space>
              <Button
                size="small"
                type="primary"
                onClick={ => {
                  message.success(`${selectedKeys.length}명에게 공지를 보냈어요.`);
                  setSelectedKeys([]);
                }}
              >
                공지 보내기
              </Button>
              <Button size="small" onClick={ => setSelectedKeys([])}>선택 해제</Button>
            </Space>
          }
        />
      ) : null}

      <Table<Employee>
        rowKey="id"
        dataSource={shown}
        scroll={{ x: 760 }}
        rowSelection={{ selectedRowKeys: selectedKeys, onChange: setSelectedKeys }}
        locale={{ emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="조건에 맞는 구성원이 없어요." /> }}
        pagination={{
          current: page,
          pageSize: PAGE_SIZE,
          onChange: setPage,
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}–${range[1]} / ${total}명`,
        }}
        onRow={(record) => ({
          onClick:  => open(record.id),
          style: { cursor: "pointer" },
        })}
        columns={[
          {
            title: "구성원",
            dataIndex: "name",
            width: 230,
            render: (_: string, e) => <PersonCell name={e.name} sub={e.email} />,
          },
          {
            title: "직무",
            dataIndex: "role",
            width: 190,
            render: (_: string, e) => (
              <span style={{ lineHeight: 1.35 }}>
                <Typography.Text style={{ display: "block" }}>{e.role}</Typography.Text>
                <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                  {e.department} · {e.location}
                </Typography.Text>
              </span>
            ),
          },
          {
            title: "입사일",
            dataIndex: "joined",
            width: 120,
            sorter: (a, b) => a.joined.localeCompare(b.joined),
            render: (joined: string) => (
              <span style={{ lineHeight: 1.35 }}>
                <Typography.Text style={{ display: "block" }}>{dayjs(joined).format("YYYY. M. D.")}</Typography.Text>
                <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                  {tenureLabel(joined)}
                </Typography.Text>
              </span>
            ),
          },
          {
            title: "잔여 연차",
            key: "leave",
            width: 130,
            sorter: (a, b) => leaveLeft(a) - leaveLeft(b),
            render: (_: unknown, e) => (
              <div>
                {/* status="normal" 사용. 소진 시 초록으로 바뀌면 의미 반대로 읽혀 문제 있음 */}
                <Progress
                  percent={Math.round((e.leaveUsed / e.leaveTotal) * 100)}
                  showInfo={false}
                  size="small"
                  status="normal"
                  strokeColor={isLowLeave(e) ? token.colorWarning : token.colorPrimary}
                />
                <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                  {leaveLeft(e)}일 남음 · {e.leaveTotal}일 중
                </Typography.Text>
              </div>
            ),
          },
          {
            title: "상태",
            dataIndex: "status",
            width: 80,
            render: (s: EmployeeStatus) => <StatusTag tone={STATUS_TONE[s]}>{s}</StatusTag>,
          },
          {
            key: "actions",
            width: 48,
            align: "center",
            render: (_: unknown, e) => (
              <Dropdown
                trigger={["click"]}
                menu={{
                  items: [
                    { key: "open", label: "상세 보기" },
                    { key: "copy", label: "이메일 복사" },
                    { key: "leave", label: "휴가 탭에서 보기" },
                  ],
                  // 이벤트 전파 차단. React 이벤트가 onClick까지 전달돼 상세도 열리는 문제 있음
                  onClick: ({ key, domEvent }) => {
                    domEvent.stopPropagation;
                    if (key === "open") open(e.id);
                    if (key === "copy") copyEmail(e);
                    if (key === "leave") navigate("leave");
                  },
                }}
              >
                <Button
                  type="text"
                  size="small"
                  aria-label={`${e.name} 더 보기`}
                  icon={<MoreOutlined />}
                  onClick={(event) => event.stopPropagation}
                />
              </Dropdown>
            ),
          },
        ]}
      />

      <div className="hr-pair">
        <Card
          size="small"
          title="부서별 인원"
          extra={<Typography.Text type="secondary">전체 {employees.length}명</Typography.Text>}
        >
          <Space orientation="vertical" size={10} style={{ display: "flex" }}>
            {byDepartment.map((d) => (
              <Flex key={d.department} align="center" gap={12}>
                <Button
                  type="link"
                  size="small"
                  style={{ inlineSize: "5.5rem", justifyContent: "flex-start", paddingInline: 0 }}
                  onClick={ => {
                    setDepartment(d.department);
                    setPage(1);
                  }}
                >
                  {d.department}
                </Button>
                <Progress
                  percent={Math.round((d.count / maxDepartment) * 100)}
                  showInfo={false}
                  status="normal"
                  style={{ flex: 1, margin: 0 }}
                />
                <Typography.Text style={{ display: "inline-block", inlineSize: "2.5rem", textAlign: "end" }}>
                  {d.count}명
                </Typography.Text>
              </Flex>
            ))}
          </Space>
        </Card>

        <Card
          size="small"
          title="연도별 입사"
          extra={<Typography.Text type="secondary">{firstYear}–{today.year}</Typography.Text>}
        >
          {/* 높이 고정. 부모가 auto 면 ResponsiveContainer 가 0이 되어 내용이 안 보임 */}
          <div style={{ inlineSize: "100%", blockSize: 212 }}>
            <ResponsiveContainer>
              <BarChart data={byYear} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                <CartesianGrid vertical={false} stroke={token.colorBorderSecondary} />
                {/* fontSize는 style에 지정, SVG 속성은 명시도 0이라 리셋에 밀릴 수 있음 */}
                <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: token.colorTextSecondary, style: { fontSize: 12 } }} />
                <YAxis allowDecimals={false} tickLine={false} axisLine={false} width={24} tick={{ fill: token.colorTextSecondary, style: { fontSize: 12 } }} />
                <Tooltip
                  cursor={{ fill: "var(--semantic-bg-neutral-subtle)" }}
                  formatter={(value) => [`${value}명`, "입사"]}
                  contentStyle={{
                    background: token.colorBgElevated,
                    border: `1px solid ${token.colorBorderSecondary}`,
                    borderRadius: token.borderRadius,
                    color: token.colorText,
                  }}
                />
                {/* isAnimationActive={false} 지정, 입력 때 막대 0부터 자랄 수 있음 */}
                <Bar dataKey="입사" fill="var(--component-chart-series-1)" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <EmployeeDrawer employee={opened} onClose={ => open(null)} />
      <AddEmployeeModal open={adding} onClose={ => setAdding(false)} />
    </Space>
  );
}
