import * as React from "react";
import {
  App, Button, Card, Checkbox, Flex, Form, Input, Modal, Popconfirm, Radio, Statistic, Switch, Table,
  Tag, theme, Tooltip, Typography,
} from "antd";
import {
  CopyOutlined, DeleteOutlined, EyeInvisibleOutlined, EyeOutlined, PlusOutlined,
} from "@ant-design/icons";

const { Text, Paragraph } = Typography;

const LAYOUT_CSS = `
.a1a { container-type: inline-size; container-name: a1api; display: flex; flex-direction: column; gap: 16px; }
.a1a-stats { display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); }
@container a1api (min-width: 30rem) { .a1a-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
`;

const SCOPES = ["주문 읽기", "주문 쓰기", "재고 읽기", "결제"] as const;

interface KeyRow {
  key: string;
  name: string;
  secret: string;
  made: string;
  used: string;
  live: boolean;
  scopes: readonly string[];
}

const INITIAL: KeyRow[] = [
  { key: "1", name: "운영 서버", secret: "sk_live_7Kq2mXd91BvR4t", made: "2026-05-02", used: "3분 전", live: true, scopes: ["주문 읽기", "주문 쓰기", "결제"] },
  { key: "2", name: "스테이징", secret: "sk_test_A8fLp03QzYw6nE", made: "2026-06-18", used: "2시간 전", live: true, scopes: ["주문 읽기", "주문 쓰기", "재고 읽기"] },
  { key: "3", name: "배치 작업", secret: "sk_live_Uj5RtN2xC7hMq0", made: "2026-07-01", used: "어제", live: true, scopes: ["재고 읽기"] },
  { key: "4", name: "옛 모바일", secret: "sk_live_Zb9WkO4vD1sPl3", made: "2025-11-24", used: "82일 전", live: false, scopes: ["주문 읽기"] },
];

interface ActivityRow {
  id: number;
  keyName: string;
  action: string;
  actor: string;
  at: string;
}

const ACTIVITY: ActivityRow[] = [
  { id: 1, keyName: "운영 서버", action: "결제 API 호출 1,204건", actor: "자동", at: "3분 전" },
  { id: 2, keyName: "스테이징", action: "키 값 드러내기", actor: "박서연", at: "2시간 전" },
  { id: 3, keyName: "배치 작업", action: "재고 동기화 배치 실행", actor: "자동", at: "어제" },
  { id: 4, keyName: "옛 모바일", action: "정지 처리", actor: "김도현", at: "82일 전" },
];

// 화면 작업자, 앱 셸 상단 SK 아바타와 동일인
const ME = "서강";

interface Draft { name: string; env: "live" | "test"; scopes: string[] }

// 새 키 값은 고정 규칙으로 생성. 무작위면 20개 테마를 나란히 비교할 수 없어, 서버가 만드는 비밀값을 흉내내는 수준임
const mint = (env: Draft["env"], n: number) =>
  `sk_${env}_${["Wm4pQz8Ht2Lk", "Ny7cVb3Xs9Rd", "Ke5jTf1Zu6Ha"][n % 3]}${String(n).padStart(2, "0")}`;

export function ApiKeyScreen {
  const { token } = theme.useToken;
  const { message } = App.useApp;
  const [rows, setRows] = React.useState(INITIAL);
  const [shown, setShown] = React.useState<readonly string[]>([]);
  const [activity, setActivity] = React.useState(ACTIVITY);
  const [creating, setCreating] = React.useState(false);
  const [minted, setMinted] = React.useState<KeyRow | null>(null);
  const [form] = Form.useForm<Draft>;

  // 가려진 표시. 앞뒤만 남겨 키는 식별되나 값은 사용 불가
  const mask = (s: string) => `${s.slice(0, 7)}${"•".repeat(10)}${s.slice(-4)}`;

  const log = (keyName: string, action: string, actor = ME) =>
    setActivity((prev) => [{ id: Date.now, keyName, action, actor, at: "방금" }, ...prev]);

  const copy = async (row: KeyRow) => {
    try {
      await navigator.clipboard.writeText(row.secret);
      message.success(`${row.name} 키를 복사했어요`);
      log(row.name, "키 값 복사");
    } catch {
      // 클립보드 접근 실패 시 예외 발생, 무시하면 클릭이 무반응처럼 보임
      message.error("복사가 막혔어요. 키를 드러낸 뒤 직접 골라 복사하세요");
    }
  };

  const reveal = (row: KeyRow, open: boolean) => {
    setShown((prev) => (open ? prev.filter((k) => k !== row.key) : [...prev, row.key]));
    if (!open) log(row.name, "키 값 드러내기");
  };

  const toggle = (row: KeyRow, live: boolean) => {
    setRows((prev) => prev.map((r) => (r.key === row.key ? { ...r, live } : r)));
    log(row.name, live ? "다시 켜기" : "정지 처리");
    message.info(live ? `${row.name} 키를 다시 켰어요` : `${row.name} 키를 정지했어요`);
  };

  const create = async  => {
    // validateFields는 빈 필수 필드 있으면 예외 발생. 닫지 않으려고 예외 무시
    let draft: Draft;
    try { draft = await form.validateFields; } catch { return; }
    const n = Math.max(...rows.map((r) => Number(r.key))) + 1;
    const row: KeyRow = {
      key: String(n),
      name: draft.name.trim,
      secret: mint(draft.env, n),
      made: "2026-08-18",
      used: "아직 없음",
      live: true,
      scopes: draft.scopes,
    };
    setRows((prev) => [row, ...prev]);
    log(row.name, "키 만들기");
    setCreating(false);
    form.resetFields;
    // 생성한 값은 이 상자에서 한 번만 표시. 닫으면 표에는 마스킹된 값만 유지
    setMinted(row);
  };

  const columns = [
    {
      title: "이름",
      dataIndex: "name",
      render: (v: string, row: KeyRow) => (
        <Flex vertical style={{ minInlineSize: 0 }}>
          <Flex align="center" gap={8}>
            <Text strong style={{ whiteSpace: "nowrap" }}>{v}</Text>
            {!row.live ? (
              <Tag style={{ color: token.colorTextTertiary, marginInlineEnd: 0 }}>정지</Tag>
            ) : null}
          </Flex>
          <Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>{row.scopes.join(" · ")}</Text>
        </Flex>
      ),
    },
    {
      title: "키",
      dataIndex: "secret",
      render: (v: string, row: KeyRow) => {
        const open = shown.includes(row.key);
        return (
          <Flex align="center" gap={4}>
            {/* 등폭 글꼴 사용 */}
            <Text code style={{ whiteSpace: "nowrap" }}>{open ? v : mask(v)}</Text>
            <Tooltip title={open ? "가리기" : "드러내기"}>
              <Button
                type="text"
                size="small"
                aria-label={`${row.name} 키 ${open ? "가리기" : "드러내기"}`}
                icon={open ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                onClick={ => reveal(row, open)}
              />
            </Tooltip>
            <Tooltip title="복사">
              <Button
                type="text"
                size="small"
                aria-label={`${row.name} 키 복사`}
                icon={<CopyOutlined />}
                onClick={ => void copy(row)}
              />
            </Tooltip>
          </Flex>
        );
      },
    },
    { title: "만든 날", dataIndex: "made", render: (v: string) => <span style={{ whiteSpace: "nowrap" }}>{v}</span> },
    { title: "마지막 사용", dataIndex: "used", render: (v: string) => <span style={{ whiteSpace: "nowrap" }}>{v}</span> },
    {
      title: "사용",
      dataIndex: "live",
      render: (v: boolean, row: KeyRow) => (
        <Switch size="small" checked={v} aria-label={`${row.name} 키 ${v ? "정지" : "켜기"}`} onChange={(next) => toggle(row, next)} />
      ),
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_: unknown, row: KeyRow) => (
        <Popconfirm
          title="이 키를 지울까요?"
          description="지우면 이 키를 쓰던 것이 곧바로 멈춰요. 되돌릴 수 없어요."
          okText="지우기"
          okButtonProps={{ danger: true }}
          cancelText="그만두기"
          onConfirm={ => {
            setRows((prev) => prev.filter((r) => r.key !== row.key));
            log(row.name, "키 지우기");
            message.success(`${row.name} 키를 지웠어요`);
          }}
        >
          <Button type="text" size="small" danger icon={<DeleteOutlined />}
            aria-label={`${row.name} 키 지우기`} />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="a1a">
      <style>{LAYOUT_CSS}</style>
      <Card size="small" style={{ background: token.colorFillQuaternary, borderColor: "transparent" }}>
        <Paragraph style={{ marginBottom: 0 }}>
          키는 <Text strong>만들 때 한 번만</Text> 온전히 보여요. 잃어버리면 다시 볼 수 없어서
          새로 만들어야 해요. 서버 밖(브라우저·앱)에는 두지 마세요.
        </Paragraph>
      </Card>

      {/* 통계카드로 여백 채우기. 셋은 1 또는 3열로만 표시 */}
      <div className="a1a-stats">
        <Card size="small"><Statistic title="쓰는 키" value={rows.filter((r) => r.live).length} suffix="개" /></Card>
        <Card size="small"><Statistic title="정지" value={rows.filter((r) => !r.live).length} suffix="개" /></Card>
        <Card size="small"><Statistic title="전체" value={rows.length} suffix="개" /></Card>
      </div>

      <Flex align="center" justify="flex-end" gap={12} wrap>
        <Button type="primary" icon={<PlusOutlined />} onClick={ => setCreating(true)}>키 만들기</Button>
      </Flex>

      {/* scroll={{x:"max-content"}} 지정. 긴 키값 탓에 없으면 페이지 밀림 문제임 */}
      <Table<KeyRow>
        size="small"
        columns={columns}
        dataSource={rows}
        pagination={false}
        scroll={{ x: "max-content" }}
      />

      {/* 최근 활동, 화면 내 작업 내역 최신순 누적 표시 */}
      <Card size="small" title="최근 활동" extra={<Text type="secondary">{activity.length}건</Text>}>
        <Table<ActivityRow>
          size="small"
          rowKey="id"
          pagination={{ pageSize: 6, size: "small", hideOnSinglePage: true }}
          dataSource={activity}
          columns={[
            { title: "키", dataIndex: "keyName", render: (v: string) => <span style={{ whiteSpace: "nowrap" }}>{v}</span> },
            { title: "내용", dataIndex: "action" },
            { title: "행위자", dataIndex: "actor", render: (v: string) => <span style={{ whiteSpace: "nowrap" }}>{v}</span> },
            { title: "시각", dataIndex: "at", render: (v: string) => <span style={{ whiteSpace: "nowrap" }}>{v}</span> },
          ]}
        />
      </Card>

      <Modal
        open={creating}
        title="키 만들기"
        okText="만들기"
        cancelText="그만두기"
        onOk={ => void create}
        onCancel={ => { setCreating(false); form.resetFields; }}
        destroyOnHidden
      >
        <Form<Draft>
          form={form}
          layout="vertical"
          initialValues={{ env: "live", scopes: ["주문 읽기"] }}
          style={{ marginBlockStart: 16 }}
        >
          <Form.Item name="name" label="이름" rules={[{ required: true, message: "어디서 쓸 키인지 적어 주세요" }]}>
            <Input placeholder="예: 정산 배치, 파트너 앱" maxLength={24} showCount />
          </Form.Item>
          <Form.Item name="env" label="환경">
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              options={[{ value: "live", label: "운영(live)" }, { value: "test", label: "테스트(test)" }]}
            />
          </Form.Item>
          <Form.Item
            name="scopes"
            label="권한"
            rules={[{ required: true, message: "권한을 하나 이상 골라 주세요" }]}
          >
            <Checkbox.Group options={SCOPES.map((s) => ({ value: s, label: s }))} />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={minted !== null}
        title={minted ? `${minted.name} 키를 만들었어요` : ""}
        okText="복사하고 닫기"
        cancelText="닫기"
        onOk={ => { if (minted) void copy(minted); setMinted(null); }}
        onCancel={ => setMinted(null)}
      >
        <Flex vertical gap={12} style={{ marginBlockStart: 8 }}>
          <Text>이 값은 <Text strong>지금 한 번만</Text> 보여요. 닫고 나면 표에는 가려진 값만 남아요.</Text>
          <Text code copyable style={{ fontSize: token.fontSize }}>{minted?.secret}</Text>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
            권한: {minted?.scopes.join(" · ")}
          </Text>
        </Flex>
      </Modal>
    </div>
  );
}
