import * as React from "react";
import {
  App, Avatar, Button, Card, DatePicker, Dropdown, Flex, Form, Input, Modal, Segmented, Select, Tag,
  theme, Tooltip, Typography,
} from "antd";
import { CalendarOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import "dayjs/locale/ko";
// recharts Tooltip, antd와 이름 충돌해 ChartTooltip으로 받기
import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip as ChartTooltip, XAxis, YAxis } from "recharts";
import type { ScreenProps } from "../screens";

const { Text, Title } = Typography;

// 열 개수는 창이 아닌 화면이 놓인 영역 폭 기준. 4열은 1, 2, 4로만 고정
const LAYOUT_CSS = `
.a1k { container-type: inline-size; container-name: a1kan; display: flex; flex-direction: column; gap: 16px; }
.a1k-lanes { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); align-items: start; }
.a1k-pair { display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); }
@container a1kan (min-width: 26rem) { .a1k-lanes { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@container a1kan (min-width: 38rem) { .a1k-lanes { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@container a1kan (min-width: 40rem) { .a1k-pair { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
`;

type Lane = "backlog" | "todo" | "doing" | "done";

// 톤 info 없음. brand,danger,neutral,success,warning뿐임
const LANES: { key: Lane; label: string; tone: "neutral" | "brand" | "warning" | "success" }[] = [
  { key: "backlog", label: "대기", tone: "neutral" },
  { key: "todo", label: "할 일", tone: "brand" },
  { key: "doing", label: "진행 중", tone: "warning" },
  { key: "done", label: "완료", tone: "success" },
];

const TAGS = ["버그", "기획", "디자인", "기능"] as const;
const PEOPLE = ["김도현", "박서연", "이준호", "최민아"] as const;

interface CardItem {
  id: string;
  title: string;
  tag: (typeof TAGS)[number];
  who: (typeof PEOPLE)[number];
  // 날짜는 M/D로 표시, 정렬은 dueKey 기준 적용
  due: string;
  lane: Lane;
}

const INITIAL: CardItem[] = [
  { id: "K-101", title: "결제 실패 로그를 한곳에 모으기", tag: "버그", who: "김도현", due: "8/29", lane: "backlog" },
  { id: "K-102", title: "장바구니 이탈 알림 문구 다듬기", tag: "기획", who: "박서연", due: "9/2", lane: "backlog" },
  { id: "K-109", title: "환불 신청 화면에 사유 고르개 달기", tag: "기획", who: "박서연", due: "9/8", lane: "backlog" },
  { id: "K-103", title: "재고 부족 배지 색을 상태색으로", tag: "디자인", who: "이준호", due: "8/28", lane: "todo" },
  { id: "K-104", title: "주문 표에 가로 스크롤 상자 씌우기", tag: "버그", who: "김도현", due: "8/28", lane: "todo" },
  { id: "K-110", title: "쿠폰 적용 순서 정하기", tag: "기획", who: "김도현", due: "9/4", lane: "todo" },
  { id: "K-105", title: "배송 목록 무한 스크롤", tag: "기능", who: "최민아", due: "9/5", lane: "doing" },
  { id: "K-106", title: "지역별 매출 축 이름 한글화", tag: "디자인", who: "이준호", due: "8/27", lane: "doing" },
  { id: "K-111", title: "주문 검색에 판매처 조건 추가", tag: "기능", who: "김도현", due: "8/30", lane: "doing" },
  { id: "K-107", title: "환불 사유 코드 표 정리", tag: "기획", who: "박서연", due: "8/20", lane: "done" },
  { id: "K-108", title: "재고 API 응답 캐시", tag: "기능", who: "최민아", due: "8/19", lane: "done" },
];

const dueKey = (due: string) => {
  const [m, d] = due.split("/").map(Number);
  return m * 100 + d;
};

interface Draft { title: string; tag: CardItem["tag"]; who: CardItem["who"]; due: Dayjs; lane: Lane }

export function KanbanScreen({ focusId }: ScreenProps) {
  const { token } = theme.useToken;
  const { message } = App.useApp;
  const [items, setItems] = React.useState(INITIAL);
  const [who, setWho] = React.useState<CardItem["who"] | undefined>(undefined);
  const [tag, setTag] = React.useState("전체");
  const [adding, setAdding] = React.useState(false);
  const [form] = Form.useForm<Draft>;

  const laneColor = (tone: string) =>
    tone === "success" ? token.colorSuccess
      : tone === "warning" ? token.colorWarning
        : tone === "brand" ? token.colorPrimary
          : token.colorTextSecondary;

  const move = (id: string, lane: Lane) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, lane } : it)));

  const shown = items.filter((it) => (!who || it.who === who) && (tag === "전체" || it.tag === tag));

  // 머리줄 검색에서 선택한 카드 필터 해제 후 강조 표시
  React.useEffect( => {
    if (!focusId) return;
    setWho(undefined);
    setTag("전체");
    document.getElementById(`a1k-${focusId}`)?.scrollIntoView({ block: "center" });
  }, [focusId]);

  const byAssignee = React.useMemo( => {
    const counts = new Map<string, number>(PEOPLE.map((p) => [p, 0]));
    items.forEach((it) => counts.set(it.who, (counts.get(it.who) ?? 0) + 1));
    return [...counts.entries].map(([name, value]) => ({ name, value }));
  }, [items]);

  // 마감 임박 목록. 완료 제외 날짜순 5개 표시
  const dueSoon = React.useMemo(
     => items.filter((it) => it.lane !== "done").sort((a, b) => dueKey(a.due) - dueKey(b.due)).slice(0, 5),
    [items],
  );

  const add = async  => {
    // validateFields는 빈 필수 필드 있으면 예외 발생. 닫지 않으려고 예외 무시
    let draft: Draft;
    try { draft = await form.validateFields; } catch { return; }
    const next = Math.max(...items.map((it) => Number(it.id.slice(2)))) + 1;
    setItems((prev) => [
      ...prev,
      { id: `K-${next}`, title: draft.title.trim, tag: draft.tag, who: draft.who, due: draft.due.format("M/D"), lane: draft.lane },
    ]);
    setAdding(false);
    form.resetFields;
    message.success(`K-${next} 카드를 더했어요`);
  };

  return (
    <div className="a1k">
      <style>{LAYOUT_CSS}</style>

      <Flex align="center" gap={8} wrap>
        <Select<CardItem["who"]>
          allowClear
          placeholder="담당자 전체"
          aria-label="담당자로 거르기"
          value={who}
          onChange={(v) => setWho(v)}
          options={PEOPLE.map((p) => ({ value: p, label: p }))}
          style={{ inlineSize: "8.5rem" }}
        />
        <Segmented size="middle" value={tag} onChange={(v) => setTag(String(v))} options={["전체", ...TAGS]} />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={ => setAdding(true)}
          style={{ marginInlineStart: "auto" }}
        >
          카드 더하기
        </Button>
      </Flex>

      <div className="a1k-lanes">
        {LANES.map((lane) => {
          const all = items.filter((it) => it.lane === lane.key).length;
          const cards = shown.filter((it) => it.lane === lane.key);
          return (
            <Flex
              key={lane.key}
              vertical
              gap={12}
              style={{
                background: token.colorFillQuaternary,
                borderRadius: token.borderRadiusLG,
                padding: 12,
              }}
            >
              <Flex align="center" justify="space-between">
                <Flex align="center" gap={8}>
                  <span
                    aria-hidden
                    style={{
                      background: laneColor(lane.tone),
                      borderRadius: "50%",
                      blockSize: 8,
                      inlineSize: 8,
                    }}
                  />
                  <Text strong>{lane.label}</Text>
                </Flex>
                <Text type="secondary">{cards.length === all ? all : `${cards.length}/${all}`}</Text>
              </Flex>

              {cards.length === 0 ? (
                // 빈 행은 공백 대신 안내 문구로 표시
                <div
                  style={{
                    border: `1px dashed ${token.colorBorderSecondary}`,
                    borderRadius: token.borderRadius,
                    color: token.colorTextTertiary,
                    padding: "20px 12px",
                    textAlign: "center",
                  }}
                >
                  {all === 0 ? "비어 있어요" : "거른 조건에 맞는 카드가 없어요"}
                </div>
              ) : null}

              {cards.map((it) => (
                <Card
                  key={it.id}
                  id={`a1k-${it.id}`}
                  size="small"
                  style={focusId === it.id ? { borderColor: token.colorPrimary } : undefined}
                >
                  <Flex vertical gap={8}>
                    <Flex align="flex-start" justify="space-between" gap={8}>
                      <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                        {it.id}
                      </Text>
                      {/* 이동 메뉴 선택 시 실제 이동 처리 */}
                      <Dropdown
                        trigger={["click"]}
                        menu={{
                          items: LANES.filter((l) => l.key !== it.lane).map((l) => ({
                            key: l.key,
                            label: `${l.label}(으)로 옮기기`,
                          })),
                          onClick: ({ key }) => move(it.id, key as Lane),
                        }}
                      >
                        <Button
                          type="text"
                          size="small"
                          icon={<MoreOutlined />}
                          aria-label={`${it.id} 옮기기`}
                        />
                      </Dropdown>
                    </Flex>

                    <Title level={5} style={{ margin: 0, fontSize: token.fontSize }}>
                      {it.title}
                    </Title>

                    {/* 태그 행과 메타 행 분리. 한 행에 셋을 모두 두면 좁은 화면에서 날짜가 줄바꿈돼 보임 */}
                    <div>
                      <Tag style={{ marginInlineEnd: 0 }}>{it.tag}</Tag>
                    </div>
                    <Flex align="center" justify="space-between" gap={8}>
                      <Text type="secondary" style={{ fontSize: token.fontSizeSM, whiteSpace: "nowrap" }}>
                        <CalendarOutlined /> {it.due}
                      </Text>
                      {/* Avatar는 title 미지원. 담당자 이름은 Tooltip으로 표시 */}
                      <Tooltip title={it.who}>
                        <Avatar size="small">{it.who.slice(0, 1)}</Avatar>
                      </Tooltip>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Flex>
          );
        })}
      </div>

      {/* 담당자별 처리 현황, 마감 임박 항목 차트 */}
      <div className="a1k-pair">
        <Card size="small" title="담당자별 카드 수">
          <div style={{ inlineSize: "100%", blockSize: 150 }}>
            <ResponsiveContainer>
              <BarChart data={byAssignee} layout="vertical" margin={{ left: 4, right: 28 }}>
                {/* domain={[0, "dataMax"]} 지정, 축 숨김 처리 */}
                <XAxis type="number" hide allowDecimals={false} domain={[0, "dataMax"]} />
                <YAxis
                  type="category" dataKey="name" tickLine={false} axisLine={false} width={56}
                  tick={{ fill: token.colorTextSecondary, style: { fontSize: 11 } }}
                />
                <ChartTooltip
                  cursor={{ fill: token.colorFillSecondary }}
                  contentStyle={{
                    background: token.colorBgElevated,
                    border: `1px solid ${token.colorBorderSecondary}`,
                    borderRadius: token.borderRadius,
                    color: token.colorText,
                  }}
                  formatter={(v) => [`${v}장`, "카드"]}
                />
                {/* 계열색 토큰 사용, antd엔 차트 토큰 없음. recharts 버그로 애니메이션 비활성화 */}
                <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} isAnimationActive={false}>
                  <LabelList dataKey="value" position="right" fill={token.colorTextSecondary} fontSize={11} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card size="small" title="마감 임박" extra={<Text type="secondary">완료 제외</Text>}>
          <Flex vertical gap={10}>
            {dueSoon.map((it) => {
              const lane = LANES.find((l) => l.key === it.lane) ?? LANES[0];
              return (
                <Flex key={it.id} align="center" justify="space-between" gap={12}>
                  <Flex vertical style={{ minInlineSize: 0 }}>
                    <Text ellipsis>{it.title}</Text>
                    <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{it.id} · {it.who}</Text>
                  </Flex>
                  <Flex align="center" gap={8} style={{ whiteSpace: "nowrap" }}>
                    <Tag style={{ color: laneColor(lane.tone), borderColor: laneColor(lane.tone), background: "transparent", marginInlineEnd: 0 }}>
                      {lane.label}
                    </Tag>
                    <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{it.due}</Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Card>
      </div>

      <Modal
        open={adding}
        title="카드 더하기"
        okText="더하기"
        cancelText="그만두기"
        onOk={ => void add}
        onCancel={ => { setAdding(false); form.resetFields; }}
        destroyOnHidden
      >
        <Form<Draft>
          form={form}
          layout="vertical"
          initialValues={{ tag: "기능", who: PEOPLE[0], lane: "backlog" }}
          style={{ marginBlockStart: 16 }}
        >
          <Form.Item name="title" label="제목" rules={[{ required: true, message: "제목을 적어 주세요" }]}>
            <Input placeholder="무엇을 할지 한 줄로" maxLength={60} showCount />
          </Form.Item>
          <Flex gap={12} wrap>
            <Form.Item name="tag" label="분류" style={{ flex: "1 1 8rem", marginBlockEnd: 12 }}>
              <Select options={TAGS.map((t) => ({ value: t, label: t }))} />
            </Form.Item>
            <Form.Item name="who" label="담당자" style={{ flex: "1 1 8rem", marginBlockEnd: 12 }}>
              <Select options={PEOPLE.map((p) => ({ value: p, label: p }))} />
            </Form.Item>
          </Flex>
          <Flex gap={12} wrap>
            <Form.Item name="due" label="마감" rules={[{ required: true, message: "마감일을 골라 주세요" }]} style={{ flex: "1 1 8rem", marginBlockEnd: 12 }}>
              {/* 달력 텍스트는 ConfigProvider locale 로 한국어 지정 */}
              <DatePicker style={{ inlineSize: "100%" }} format="M/D" placeholder="날짜 고르기" />
            </Form.Item>
            <Form.Item name="lane" label="줄" style={{ flex: "1 1 8rem", marginBlockEnd: 12 }}>
              <Select options={LANES.map((l) => ({ value: l.key, label: l.label }))} />
            </Form.Item>
          </Flex>
        </Form>
      </Modal>
    </div>
  );
}
