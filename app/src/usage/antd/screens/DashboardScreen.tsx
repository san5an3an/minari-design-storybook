import * as React from "react";
import {
  Avatar, Button, Card, Col, Flex, Progress, Rate, Row, Segmented, Statistic,
  Table, Tag, theme, Typography,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

const { Text, Title } = Typography;

const HEADLINE = [
  { label: "총 수익", value: "₩745,350", delta: 18.3, up: true },
  { label: "주문", value: "698,360", delta: -2.74, up: false },
  { label: "고객", value: "183,350", delta: 29.08, up: true },
] as const;

const REVENUE_STRIP = [
  { label: "주문", value: "7,585" },
  { label: "수익", value: "₩22.89M" },
  { label: "환불", value: "367" },
  { label: "전환율", value: "18.92%" },
] as const;

// 12개월 데이터 표시
const REVENUE_SERIES = [
  { month: "1월", 매출: 82 }, { month: "2월", 매출: 96 }, { month: "3월", 매출: 124 },
  { month: "4월", 매출: 152 }, { month: "5월", 매출: 118 }, { month: "6월", 매출: 97 },
  { month: "7월", 매출: 66 }, { month: "8월", 매출: 58 }, { month: "9월", 매출: 74 },
  { month: "10월", 매출: 44 }, { month: "11월", 매출: 61 }, { month: "12월", 매출: 39 },
] as const;

// 기간 선택기가 자르는 개수. 값이 끝에서 몇 개인지 표시
const SPANS: Record<string, number> = { 전체: 12, "1M": 1, "6M": 6, "1Y": 12 };

interface Order {
  key: string;
  id: string;
  customer: string;
  product: string;
  amount: string;
  date: string;
  vendor: string;
  status: "결제" | "미결제" | "보류";
}

const ORDERS: Order[] = [
  { key: "1", id: "#TB010338", customer: "백태리", product: "노트북 프로", amount: "₩658,000", date: "2026-08-14", vendor: "브라질", status: "결제" },
  { key: "2", id: "#TB010337", customer: "백태리", product: "노트북 프로", amount: "₩658,000", date: "2026-08-14", vendor: "브라질", status: "결제" },
  { key: "3", id: "#TB010336", customer: "히더 히메네스", product: "스마트워치", amount: "₩741,980", date: "2026-08-18", vendor: "스페인", status: "결제" },
  { key: "4", id: "#TB010335", customer: "스콧 윌슨", product: "애플 헤드폰", amount: "₩264,370", date: "2026-08-17", vendor: "저지", status: "미결제" },
  { key: "5", id: "#TB010334", customer: "애슐리 실바", product: "벤트우드 의자", amount: "₩349,990", date: "2026-08-16", vendor: "아르헨티나", status: "보류" },
  { key: "6", id: "#TB010333", customer: "스티븐 버드", product: "스틸버드 헬멧", amount: "₩80,000", date: "2026-08-15", vendor: "미국", status: "결제" },
];

const BEST_SELLING = [
  { name: "몬테카를로 스웨터", price: "₩154,780", rate: 4.9 },
  { name: "액티브그립 러닝화", price: "₩36,970", rate: 4.3 },
  { name: "유나이티드 컬러스", price: "₩71,340", rate: 4.8 },
] as const;

const DELIVERIES = [
  { name: "액티브그립 러닝화", by: "배아론", state: "배송 중" },
  { name: "스트라이프 야구모자", by: "장쉬 브라운", state: "도착" },
  { name: "350ml 유리 보관용기", by: "스콧 윌슨", state: "배송 출발" },
  { name: "몬테카를로 스웨터", by: "다니엘 곤잘레스", state: "도착" },
  { name: "세라믹 머그", by: "스티븐 개리슨", state: "배송 중" },
] as const;

interface Stock {
  key: string;
  id: string;
  name: string;
  date: string;
  amount: string;
  state: "재고 있음" | "재고 부족" | "품절";
  qty: string;
}

const STOCK: Stock[] = [
  { key: "1", id: "#00541", name: "로커즈 블루투스 헤드폰", date: "2026-08-16", amount: "₩658,000", state: "재고 있음", qty: "15개" },
  { key: "2", id: "#07484", name: "유나이티드 컬러스", date: "2026-08-05", amount: "₩145,000", state: "재고 부족", qty: "5개" },
  { key: "3", id: "#01641", name: "스트라이프 야구모자", date: "2026-08-28", amount: "₩215,000", state: "품절", qty: "0개" },
  { key: "4", id: "#00065", name: "350ml 유리 보관용기", date: "2026-08-02", amount: "₩79,990", state: "재고 있음", qty: "37개" },
  { key: "5", id: "#00156", name: "1인용 소파", date: "2026-08-11", amount: "₩264,990", state: "재고 있음", qty: "23개" },
];

const REGIONS = [
  { name: "서울", value: 180 }, { name: "경기", value: 205 }, { name: "부산", value: 150 },
  { name: "인천", value: 96 }, { name: "대구", value: 84 }, { name: "광주", value: 110 },
  { name: "대전", value: 132 }, { name: "울산", value: 100 },
] as const;

const ACTIVITY = [
  { name: "서울", pct: 25 }, { name: "경기", pct: 20 }, { name: "부산", pct: 14 },
  { name: "대전", pct: 14 }, { name: "광주", pct: 10 }, { name: "인천", pct: 8 },
  { name: "대구", pct: 7 }, { name: "울산", pct: 2 },
] as const;

export function DashboardScreen {
  const { token } = theme.useToken;
  const [span, setSpan] = React.useState("1Y");

  const stateColor = (s: string) =>
    s === "결제" || s === "도착" || s === "재고 있음"
      ? "var(--semantic-fg-success-default)"
      : s === "미결제" || s === "품절"
        ? "var(--semantic-fg-danger-default)"
        : "var(--semantic-fg-warning-default)";

  const series = REVENUE_SERIES.slice(-SPANS[span]);

  // 계열색만 시스템 토큰 사용. antd에는 대응 항목 없음
  const seriesColor = "var(--component-chart-series-1)";

  const orderColumns = [
    {
      title: "주문번호",
      dataIndex: "id",
      // 이동 대상 있을 때만 링크로 렌더링. 없으면 링크로 그리지 않음
      render: (v: string) => <Text strong>{v}</Text>,
    },
    { title: "상품", dataIndex: "product" },
    {
      title: "고객",
      dataIndex: "customer",
      render: (v: string) => (
        <Flex align="center" gap={8}>
          <Avatar size="small">{v.slice(0, 1)}</Avatar>
          {v}
        </Flex>
      ),
    },
    {
      title: "금액",
      dataIndex: "amount",
      align: "end" as const,
      sorter: (a: Order, b: Order) =>
        Number(a.amount.replace(/\D/g, "")) - Number(b.amount.replace(/\D/g, "")),
    },
    { title: "주문일", dataIndex: "date" },
    { title: "판매처", dataIndex: "vendor" },
    {
      title: "상태",
      dataIndex: "status",
      render: (v: string) => (
        <Tag style={{ color: stateColor(v), borderColor: stateColor(v), background: "transparent" }}>
          {v}
        </Tag>
      ),
    },
  ];

  const stockColumns = [
    { title: "상품번호", dataIndex: "id" },
    { title: "상품", dataIndex: "name" },
    { title: "갱신일", dataIndex: "date" },
    { title: "금액", dataIndex: "amount", align: "end" as const },
    {
      title: "재고",
      dataIndex: "state",
      render: (v: string) => <Text style={{ color: stateColor(v) }}>{v}</Text>,
    },
    { title: "수량", dataIndex: "qty", align: "end" as const },
  ];

  return (
    <Flex vertical gap={16}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Row gutter={[16, 16]}>
            {HEADLINE.map((h) => (
              <Col xs={24} sm={8} lg={24} key={h.label}>
                <Card size="small">
                  {/* valueStyle 대신 styles.content 사용. antd 6 폐기돼 에러 발생임 */}
                  <Statistic
                    title={h.label}
                    value={h.value}
                    styles={{ content: { fontSize: token.fontSizeHeading3 } }}
                  />
                  <Flex align="center" gap={6} style={{ marginBlockStart: 8 }}>
                    {/* 텍스트 색 지정 */}
                    <Text
                      style={{
                        color: h.up
                          ? "var(--semantic-fg-success-default)"
                          : "var(--semantic-fg-danger-default)",
                      }}
                    >
                      {h.up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {Math.abs(h.delta)}%
                    </Text>
                    <Text type="secondary">지난주 대비</Text>
                  </Flex>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} lg={16}>
          <Card
            size="small"
            title="매출"
            extra={
              <Segmented
                size="small"
                value={span}
                onChange={(v) => setSpan(String(v))}
                options={Object.keys(SPANS)}
              />
            }
          >
            {/* 4항목 요약 띠, 그래프보다 숫자를 먼저 표시 */}
            <Row
              gutter={[8, 8]}
              style={{
                border: `1px solid ${token.colorBorderSecondary}`,
                borderRadius: token.borderRadius,
                marginBlockEnd: 16,
                paddingBlock: 12,
              }}
            >
              {REVENUE_STRIP.map((s) => (
                <Col xs={12} sm={6} key={s.label} style={{ textAlign: "center" }}>
                  <Title level={5} style={{ margin: 0 }}>{s.value}</Title>
                  <Text type="secondary">{s.label}</Text>
                </Col>
              ))}
            </Row>

            {/* 높이 고정. 부모가 auto 면 ResponsiveContainer 가 0이 되어 그림이 안 보임 */}
            <div style={{ inlineSize: "100%", blockSize: 260 }}>
              <ResponsiveContainer>
                <BarChart data={series as unknown as Record<string, unknown>[]}>
                  <CartesianGrid vertical={false} stroke={token.colorBorderSecondary} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false}
                    tick={{ fill: token.colorTextSecondary, fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false}
                    tick={{ fill: token.colorTextSecondary, fontSize: 12 }} width={36} />
                  <Tooltip
                    cursor={{ fill: token.colorFillSecondary }}
                    contentStyle={{
                      background: token.colorBgElevated,
                      border: `1px solid ${token.colorBorderSecondary}`,
                      borderRadius: token.borderRadius,
                      color: token.colorText,
                    }}
                  />
                  <Bar dataKey="매출" radius={[4, 4, 0, 0]}>
                    {series.map((s) => (
                      <Cell key={s.month} fill={seriesColor} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      <Card size="small" style={{ background: token.colorPrimaryBg, borderColor: "transparent" }}>
        <Flex align="center" justify="space-between" gap={16} wrap>
          <Flex vertical gap={2}>
            <Text strong>더 팔고 싶으세요?</Text>
            {/* type="secondary" 금지. 브랜드 틴트 배경과 안 맞고 대비 AA 미달임 */}
            <Text>프로로 올리면 쓸 수 있는 것이 늘어납니다.</Text>
          </Flex>
          <Button type="primary">요금제 올리기</Button>
        </Flex>
      </Card>

      <Card size="small" title="최근 주문" extra={<Button>오늘 기준</Button>}>
        <Table<Order>
          size="small"
          rowSelection={{}}
          columns={orderColumns}
          dataSource={ORDERS}
          pagination={{ pageSize: 5, size: "small" }}
          scroll={{ x: "max-content" }}
        />
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card size="small" title="인기 상품">
            <Row gutter={[12, 12]}>
              {BEST_SELLING.map((p) => (
                <Col xs={24} sm={8} key={p.name}>
                  <Card size="small" hoverable>
                    {/* 사진 제외. Lizant 상품 사진은 해당 템플릿 자산이라 저장소에 넣을 이유가 없음 */}
                    <div
                      aria-hidden
                      style={{
                        background: token.colorFillTertiary,
                        borderRadius: token.borderRadius,
                        blockSize: 96,
                        marginBlockEnd: 12,
                      }}
                    />
                    <Flex justify="space-between" align="center" gap={8}>
                      <Text strong>{p.price}</Text>
                      <Flex align="center" gap={4}>
                        <Text type="secondary">{p.rate}</Text>
                        <Rate disabled count={1} value={1} style={{ fontSize: 12 }} />
                      </Flex>
                    </Flex>
                    <Text type="secondary" ellipsis>{p.name}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card size="small" title="배송 현황" extra={<Button type="link">전체 보기</Button>}>
            <Flex vertical gap={12}>
              {DELIVERIES.map((d) => (
                <Flex key={d.name} align="center" justify="space-between" gap={12}>
                  <Flex align="center" gap={10} style={{ minInlineSize: 0 }}>
                    <Avatar shape="square" size="small">{d.name.slice(0, 1)}</Avatar>
                    <Flex vertical style={{ minInlineSize: 0 }}>
                      <Text ellipsis>{d.name}</Text>
                      <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                        {d.by}
                      </Text>
                    </Flex>
                  </Flex>
                  <Tag
                    style={{
                      color: stateColor(d.state),
                      borderColor: stateColor(d.state),
                      background: "transparent",
                      marginInlineEnd: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {d.state}
                  </Tag>
                </Flex>
              ))}
            </Flex>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card size="small" title="분류별 매출">
            {/* Lizant 방사형 대신 막대 진행도 사용. 반지름 비례라 안쪽 고리 짧아 보임 */}
            <Flex vertical gap={12}>
              {ACTIVITY.slice(0, 6).map((a) => (
                <Flex key={a.name} vertical gap={2}>
                  <Flex justify="space-between">
                    <Text>{a.name}</Text>
                    <Text type="secondary">{a.pct}%</Text>
                  </Flex>
                  <Progress
                    percent={a.pct * 4}
                    showInfo={false}
                    size="small"
                    strokeColor={seriesColor}
                  />
                </Flex>
              ))}
            </Flex>
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card size="small" title="재고 현황" extra={<Button>보고서 만들기</Button>}>
            <Table<Stock>
              size="small"
              columns={stockColumns}
              dataSource={STOCK}
              pagination={false}
              scroll={{ x: "max-content" }}
            />
          </Card>
        </Col>
      </Row>

      <Card size="small" title="지역별 매출" extra={<Button>내려받기</Button>}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <div style={{ inlineSize: "100%", blockSize: 280 }}>
              <ResponsiveContainer>
                <BarChart
                  data={REGIONS as unknown as Record<string, unknown>[]}
                  layout="vertical"
                  margin={{ left: 8 }}
                >
                  <XAxis type="number" tickLine={false} axisLine={false}
                    tick={{ fill: token.colorTextSecondary, fontSize: 12 }} />
                  <YAxis type="category" dataKey="name" tickLine={false} axisLine={false}
                    width={48} tick={{ fill: token.colorTextSecondary, fontSize: 12 }} />
                  <Tooltip
                    cursor={{ fill: token.colorFillSecondary }}
                    contentStyle={{
                      background: token.colorBgElevated,
                      border: `1px solid ${token.colorBorderSecondary}`,
                      borderRadius: token.borderRadius,
                      color: token.colorText,
                    }}
                  />
                  <Bar dataKey="value" fill={seriesColor} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <Flex vertical gap={4}>
              <Text type="secondary">전체 이용자</Text>
              <Title level={4} style={{ margin: 0 }}>1,874,210명</Title>
              <Text type="secondary" style={{ marginBlockStart: 12 }}>지금 활동</Text>
              {ACTIVITY.map((a) => (
                <Flex key={a.name} justify="space-between" gap={8}>
                  <Text>{a.name}</Text>
                  <Text type="secondary">{a.pct}%</Text>
                </Flex>
              ))}
            </Flex>
          </Col>
        </Row>
      </Card>
    </Flex>
  );
}
