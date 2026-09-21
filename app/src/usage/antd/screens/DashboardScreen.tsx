import * as React from "react";
import {
  App, Avatar, Button, Card, Collapse, Drawer, Flex, Image, Input, Modal, Progress, Radio, Rate,
  Segmented, Select, Statistic, Table, Tag, theme, Timeline, Typography,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined, DownloadOutlined, FileTextOutlined } from "@ant-design/icons";
import {
  Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import type { ScreenProps } from "../screens";

const { Text, Title } = Typography;

const LAYOUT_CSS = `
.a1d { container-type: inline-size; container-name: a1dash; display: flex; flex-direction: column; gap: 16px; }
.a1d-top, .a1d-pair, .a1d-region { display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); }
.a1d-kpis { display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); }
.a1d-products { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); }
@container a1dash (min-width: 30rem) {
  .a1d-kpis { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@container a1dash (min-width: 34rem) {
  .a1d-products { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@container a1dash (min-width: 40rem) {
  .a1d-top { grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); }
  // 넓은 화면에서는 지표 셋을 왼쪽 열에 세로 배치, 매출 카드와 높이 조정
  .a1d-kpis { grid-template-columns: minmax(0, 1fr); grid-auto-rows: 1fr; }
  .a1d-pair { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .a1d-region { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); }
}
`;

const TODAY = "2026-08-18";

// 세 값이 서로 맞도록 계산
const HEADLINE = [
  { label: "연 매출", value: "10.1억원", delta: 18.3, up: true, against: "지난해 대비" },
  { label: "주문", value: "7,585건", delta: -2.74, up: false, against: "지난주 대비" },
  { label: "고객", value: "18,335명", delta: 29.08, up: true, against: "지난주 대비" },
] as const;

// 12개월 데이터, 단위 백만원
const REVENUE_SERIES = [
  { month: "1월", 매출: 82 }, { month: "2월", 매출: 96 }, { month: "3월", 매출: 124 },
  { month: "4월", 매출: 152 }, { month: "5월", 매출: 118 }, { month: "6월", 매출: 97 },
  { month: "7월", 매출: 66 }, { month: "8월", 매출: 58 }, { month: "9월", 매출: 74 },
  { month: "10월", 매출: 44 }, { month: "11월", 매출: 61 }, { month: "12월", 매출: 39 },
] as const;

// 기간 선택기가 자르는 개수. 값이 끝에서 몇 개인지 표시
const SPANS: Record<string, number> = { "3M": 3, "6M": 6, "1Y": 12 };

type OrderStatus = "결제" | "미결제" | "보류";
interface Order {
  key: string;
  id: string;
  customer: string;
  product: string;
  amount: number;
  date: string;
  channel: string;
  status: OrderStatus;
}

const ORDERS: Order[] = [
  { key: "1", id: "#TB010338", customer: "한지우", product: "노트북 프로", amount: 658000, date: "2026-08-18", channel: "자사몰", status: "결제" },
  { key: "2", id: "#TB010337", customer: "서민재", product: "무선 키보드", amount: 129000, date: "2026-08-18", channel: "쿠팡", status: "결제" },
  { key: "3", id: "#TB010336", customer: "유하린", product: "스마트워치", amount: 741980, date: "2026-08-18", channel: "스마트스토어", status: "결제" },
  { key: "4", id: "#TB010335", customer: "문태호", product: "애플 헤드폰", amount: 264370, date: "2026-08-17", channel: "자사몰", status: "미결제" },
  { key: "5", id: "#TB010334", customer: "강다은", product: "벤트우드 의자", amount: 349990, date: "2026-08-17", channel: "11번가", status: "보류" },
  { key: "6", id: "#TB010333", customer: "임서준", product: "스틸버드 헬멧", amount: 80000, date: "2026-08-16", channel: "쿠팡", status: "결제" },
  { key: "7", id: "#TB010332", customer: "노은채", product: "350ml 유리 보관용기", amount: 79990, date: "2026-08-16", channel: "스마트스토어", status: "결제" },
  { key: "8", id: "#TB010331", customer: "배준영", product: "액티브그립 러닝화", amount: 36970, date: "2026-08-15", channel: "자사몰", status: "미결제" },
  { key: "9", id: "#TB010330", customer: "황보름", product: "몬테카를로 스웨터", amount: 154780, date: "2026-08-14", channel: "쿠팡", status: "결제" },
  { key: "10", id: "#TB010329", customer: "신유나", product: "1인용 소파", amount: 264990, date: "2026-08-13", channel: "11번가", status: "결제" },
  { key: "11", id: "#TB010328", customer: "표승우", product: "세라믹 머그", amount: 24000, date: "2026-08-09", channel: "스마트스토어", status: "보류" },
  { key: "12", id: "#TB010327", customer: "곽도연", product: "로커즈 블루투스 헤드폰", amount: 658000, date: "2026-08-05", channel: "자사몰", status: "결제" },
];

// 기간 선택 시 해당 날짜부터. TODAY 기준
const ORDER_SPANS: Record<string, string> = { 오늘: TODAY, "7일": "2026-08-12", 전체: "0000-00-00" };

const BEST_SELLING = [
  { name: "몬테카를로 스웨터", price: 154780, rate: 4.9, sold: 128, photo: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=480&h=320&q=70&auto=format&fit=crop" },
  { name: "액티브그립 러닝화", price: 36970, rate: 4.3, sold: 96, photo: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=480&h=320&q=70&auto=format&fit=crop" },
  { name: "유나이티드 컬러스", price: 71340, rate: 4.8, sold: 74, photo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=480&h=320&q=70&auto=format&fit=crop" },
] as const;

type DeliveryState = "배송 출발" | "배송 중" | "도착";
interface Delivery {
  id: string;
  name: string;
  by: string;
  state: DeliveryState;
  // 지나온 단계 시각화. 길이로 진행 상태 표시
  at: readonly string[];
}
const DELIVERY_STEPS = ["주문 접수", "출고", "배송 중", "도착"] as const;
const DELIVERIES: Delivery[] = [
  { id: "D-2291", name: "액티브그립 러닝화", by: "배준영", state: "배송 중", at: ["08-15 09:12", "08-16 14:30", "08-17 08:05"] },
  { id: "D-2290", name: "스트라이프 야구모자", by: "장수빈", state: "도착", at: ["08-13 11:40", "08-14 10:02", "08-15 07:51", "08-16 13:20"] },
  { id: "D-2289", name: "350ml 유리 보관용기", by: "노은채", state: "배송 출발", at: ["08-16 16:22", "08-18 09:00"] },
  { id: "D-2288", name: "몬테카를로 스웨터", by: "황보름", state: "도착", at: ["08-14 08:30", "08-15 09:10", "08-16 08:44", "08-17 15:02"] },
  { id: "D-2287", name: "세라믹 머그", by: "표승우", state: "배송 중", at: ["08-09 19:03", "08-16 11:15", "08-17 10:40"] },
  { id: "D-2286", name: "스틸버드 헬멧", by: "임서준", state: "배송 출발", at: ["08-16 12:48", "08-18 08:20"] },
  { id: "D-2285", name: "1인용 소파", by: "신유나", state: "배송 중", at: ["08-13 17:26", "08-15 13:00", "08-17 09:30"] },
  { id: "D-2284", name: "로커즈 블루투스 헤드폰", by: "곽도연", state: "도착", at: ["08-05 10:11", "08-06 09:40", "08-07 08:12", "08-08 14:36"] },
];

interface Stock { key: string; id: string; name: string; date: string; amount: number; qty: number }
const STOCK: Stock[] = [
  { key: "1", id: "#00541", name: "로커즈 블루투스 헤드폰", date: "2026-08-16", amount: 658000, qty: 15 },
  { key: "2", id: "#07484", name: "유나이티드 컬러스", date: "2026-08-05", amount: 71340, qty: 5 },
  { key: "3", id: "#01641", name: "스트라이프 야구모자", date: "2026-08-18", amount: 21500, qty: 0 },
  { key: "4", id: "#00065", name: "350ml 유리 보관용기", date: "2026-08-02", amount: 79990, qty: 37 },
  { key: "5", id: "#00156", name: "1인용 소파", date: "2026-08-11", amount: 264990, qty: 23 },
  { key: "6", id: "#00872", name: "액티브그립 러닝화", date: "2026-08-17", amount: 36970, qty: 8 },
  { key: "7", id: "#00311", name: "세라믹 머그", date: "2026-08-14", amount: 24000, qty: 64 },
  { key: "8", id: "#00490", name: "벤트우드 의자", date: "2026-08-12", amount: 349990, qty: 0 },
];
// 재고 상태는 수량 기준 계산, 10개 이하는 부족 판별
const stockState = (qty: number) => (qty === 0 ? "품절" : qty <= 10 ? "재고 부족" : "재고 있음");

// 분류별 매출은 분류 기준만 표시. 지역 데이터 포함 시 지역별 매출과 중복
const CATEGORIES = [
  { name: "전자기기", pct: 38 }, { name: "의류", pct: 24 }, { name: "가구", pct: 14 },
  { name: "생활용품", pct: 11 }, { name: "스포츠", pct: 8 }, { name: "뷰티", pct: 5 },
] as const;

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

const PLANS = [
  { key: "starter", name: "스타터", price: "무료", note: "월 주문 500건 · 판매처 1곳" },
  { key: "pro", name: "프로", price: "월 49,000원", note: "주문 무제한 · 판매처 4곳 · 재고 알림" },
  { key: "business", name: "비즈니스", price: "월 129,000원", note: "프로 전부 + 팀 계정 10명 · API 호출 10배" },
] as const;

const won = (n: number) => `₩${n.toLocaleString("ko-KR")}`;

// 화면에 보이는 표 그대로 CSV로 다운로드. BOM 있어야 엑셀에서 한글이 깨지지 않음
function downloadCsv(filename: string, rows: readonly (readonly (string | number)[])[]) {
  const csv = "﻿" + rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click;
  URL.revokeObjectURL(url);
}

export function DashboardScreen({ focusId }: ScreenProps) {
  const { token } = theme.useToken;
  const { message } = App.useApp;
  const [span, setSpan] = React.useState("1Y");
  const [orders, setOrders] = React.useState(ORDERS);
  const [orderSpan, setOrderSpan] = React.useState("7일");
  const [orderQuery, setOrderQuery] = React.useState("");
  const [orderStatus, setOrderStatus] = React.useState<OrderStatus | undefined>(undefined);
  const [picked, setPicked] = React.useState<React.Key[]>([]);
  const [plan, setPlan] = React.useState<string>("starter");
  const [planOpen, setPlanOpen] = React.useState(false);
  const [deliveriesOpen, setDeliveriesOpen] = React.useState(false);

  // 헤더 검색, 알림에서 주문 선택 시 해당 주문 노출 보장. 기간 필터에 걸리면 의미 없음
  React.useEffect( => {
    if (!focusId) return;
    setOrderQuery(focusId);
    setOrderSpan("전체");
    setOrderStatus(undefined);
  }, [focusId]);

  const stateColor = (s: string) =>
    s === "결제" || s === "도착" || s === "재고 있음"
      ? "var(--semantic-fg-success-default)"
      : s === "미결제" || s === "품절"
        ? "var(--semantic-fg-danger-default)"
        : "var(--semantic-fg-warning-default)";
  const stateTag = (s: string) => (
    <Tag
      style={{
        color: stateColor(s), borderColor: stateColor(s), background: "transparent",
        marginInlineEnd: 0, whiteSpace: "nowrap",
      }}
    >
      {s}
    </Tag>
  );

  const series = REVENUE_SERIES.slice(-SPANS[span]);
  // 요약 띠 값은 선택한 기간 기준으로 계산
  const strip = React.useMemo( => {
    const total = series.reduce((sum, s) => sum + s.매출, 0);
    const best = series.reduce((a, b) => (b.매출 > a.매출 ? b : a));
    const last = series[series.length - 1].매출;
    const prev = series.length > 1 ? series[series.length - 2].매출 : last;
    const change = Math.round(((last - prev) / prev) * 1000) / 10;
    return [
      { label: "합계", value: `${total.toLocaleString("ko-KR")}백만` },
      { label: "월평균", value: `${Math.round(total / series.length)}백만` },
      { label: "최고", value: `${best.month} ${best.매출}백만` },
      { label: "전월 대비", value: `${change > 0 ? "+" : ""}${change}%` },
    ];
  }, [series]);

  // 계열색만 시스템 토큰 사용. antd에는 대응 항목 없음
  const seriesColor = "var(--component-chart-series-1)";
  // 눈금 글자 크기는 인라인 style 로 지정. SVG 표현 속성은 명시도 0이라 CSS 리셋에 덮임
  const tick = { fill: token.colorTextSecondary, style: { fontSize: 12 } };
  const tooltipStyle = {
    background: token.colorBgElevated,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadius,
    color: token.colorText,
  };

  const shownOrders = React.useMemo( => {
    const q = orderQuery.trim.toLowerCase;
    return orders.filter(
      (o) =>
        o.date >= ORDER_SPANS[orderSpan] &&
        (!orderStatus || o.status === orderStatus) &&
        (!q || `${o.id} ${o.customer} ${o.product} ${o.channel}`.toLowerCase.includes(q)),
    );
  }, [orders, orderQuery, orderSpan, orderStatus]);
  const shownTotal = shownOrders.reduce((sum, o) => sum + o.amount, 0);
  const shownUnpaid = shownOrders.filter((o) => o.status !== "결제").length;
  // 결제 미완료 선택 행만 변경
  const payable = orders.filter((o) => picked.includes(o.key) && o.status !== "결제");

  const confirmPaid =  => {
    const keys = payable.map((o) => o.key);
    setOrders((prev) => prev.map((o) => (keys.includes(o.key) ? { ...o, status: "결제" } : o)));
    setPicked([]);
    message.success(`${keys.length}건을 결제 완료로 바꿨어요`);
  };

  // 두 줄 셀로 열 수 압축. 644px 폭엔 7열에 필요한 732px가 들어가지 않음
  const orderColumns = [
    {
      title: "주문",
      dataIndex: "id",
      // 이동 대상 있을 때만 링크로 렌더링. 없으면 링크로 그리지 않음
      render: (v: string, row: Order) => (
        <Flex vertical>
          <Text strong style={{ whiteSpace: "nowrap" }}>{v}</Text>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{row.date.slice(5)}</Text>
        </Flex>
      ),
    },
    {
      title: "상품",
      dataIndex: "product",
      render: (v: string, row: Order) => (
        <Flex vertical style={{ minInlineSize: 0 }}>
          <Text>{v}</Text>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{row.channel}</Text>
        </Flex>
      ),
    },
    {
      title: "고객",
      dataIndex: "customer",
      render: (v: string) => (
        <Flex align="center" gap={8} style={{ whiteSpace: "nowrap" }}>
          <Avatar size="small">{v.slice(0, 1)}</Avatar>
          {v}
        </Flex>
      ),
    },
    {
      title: "금액",
      dataIndex: "amount",
      align: "end" as const,
      sorter: (a: Order, b: Order) => a.amount - b.amount,
      render: (v: number) => <span style={{ whiteSpace: "nowrap" }}>{won(v)}</span>,
    },
    { title: "상태", dataIndex: "status", render: (v: string) => stateTag(v) },
  ];

  const stockColumns = [
    {
      title: "상품",
      dataIndex: "name",
      render: (v: string, row: Stock) => (
        <Flex vertical>
          <Text>{v}</Text>
          <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{row.id}</Text>
        </Flex>
      ),
    },
    { title: "갱신일", dataIndex: "date", render: (v: string) => <span style={{ whiteSpace: "nowrap" }}>{v}</span> },
    { title: "금액", dataIndex: "amount", align: "end" as const, render: (v: number) => won(v) },
    {
      title: "수량",
      dataIndex: "qty",
      align: "end" as const,
      sorter: (a: Stock, b: Stock) => a.qty - b.qty,
      render: (v: number) => `${v}개`,
    },
    { title: "재고", dataIndex: "qty", key: "state", render: (v: number) => stateTag(stockState(v)) },
  ];
  const lowStock = STOCK.filter((s) => stockState(s.qty) === "재고 부족").length;
  const soldOut = STOCK.filter((s) => s.qty === 0).length;
  const maxCategory = Math.max(...CATEGORIES.map((c) => c.pct));
  const currentPlan = PLANS.find((p) => p.key === plan) ?? PLANS[0];

  return (
    <div className="a1d">
      <style>{LAYOUT_CSS}</style>

      <div className="a1d-top">
        <div className="a1d-kpis">
          {HEADLINE.map((h) => (
            <Card size="small" key={h.label}>
              {/* valueStyle 대신 styles.content 사용. antd 6 폐기돼 에러 발생임 */}
              <Statistic
                title={h.label}
                value={h.value}
                styles={{ content: { fontSize: token.fontSizeHeading3 } }}
              />
              <Flex align="center" gap={6} wrap style={{ marginBlockStart: 8 }}>
                {/* 텍스트 색 지정 */}
                <Text
                  style={{
                    color: h.up
                      ? "var(--semantic-fg-success-default)"
                      : "var(--semantic-fg-danger-default)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {h.up ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {Math.abs(h.delta)}%
                </Text>
                <Text type="secondary" style={{ whiteSpace: "nowrap" }}>{h.against}</Text>
              </Flex>
            </Card>
          ))}
        </div>

        <Card
          size="small"
          title={
            <Flex align="baseline" gap={8}>
              <span>매출</span>
              <Text type="secondary" style={{ fontSize: token.fontSizeSM, fontWeight: "normal" }}>단위: 백만원</Text>
            </Flex>
          }
          extra={
            <Segmented
              size="small"
              value={span}
              onChange={(v) => setSpan(String(v))}
              options={Object.keys(SPANS)}
            />
          }
        >
          {/* 4항목 요약 띠, 그래프보다 숫자 먼저 표시. 4개라 2열 또는 4열로만 접히는 구조임 */}
          <div
            style={{
              border: `1px solid ${token.colorBorderSecondary}`,
              borderRadius: token.borderRadius,
              display: "grid",
              gap: 8,
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              marginBlockEnd: 16,
              paddingBlock: 12,
              paddingInline: 8,
              textAlign: "center",
            }}
          >
            {strip.map((s) => (
              <Flex vertical key={s.label} style={{ minInlineSize: 0 }}>
                <Title level={5} style={{ margin: 0, whiteSpace: "nowrap" }}>{s.value}</Title>
                <Text type="secondary">{s.label}</Text>
              </Flex>
            ))}
          </div>

          {/* 높이 고정. 부모가 auto 면 ResponsiveContainer 가 0이 되어 그림이 안 보임 */}
          <div style={{ inlineSize: "100%", blockSize: 260 }}>
            <ResponsiveContainer>
              <BarChart data={series as unknown as Record<string, unknown>[]}>
                <CartesianGrid vertical={false} stroke={token.colorBorderSecondary} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={tick} />
                <YAxis tickLine={false} axisLine={false} tick={tick} width={36} />
                <Tooltip
                  cursor={{ fill: token.colorFillSecondary }}
                  contentStyle={tooltipStyle}
                  formatter={(v) => [`${v}백만원`, "매출"]}
                />
                {/* isAnimationActive={false} 지정, 재렌더마다 다시 돌 수 있음 */}
                <Bar dataKey="매출" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                  {series.map((s) => (
                    <Cell key={s.month} fill={seriesColor} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card size="small" style={{ background: token.colorPrimaryBg, borderColor: "transparent" }}>
        <Flex align="center" justify="space-between" gap={16} wrap>
          <Flex vertical gap={2}>
            <Text strong>
              {plan === "starter" ? "더 팔고 싶으세요?" : `${currentPlan.name} 요금제를 쓰고 있어요`}
            </Text>
            {/* type="secondary" 금지. 브랜드 틴트 배경과 안 맞고 대비 AA 미달임 */}
            <Text>
              {plan === "starter" ? "프로로 올리면 판매처 4곳과 재고 알림을 쓸 수 있어요." : currentPlan.note}
            </Text>
          </Flex>
          <Button type="primary" onClick={ => setPlanOpen(true)}>
            {plan === "starter" ? "요금제 올리기" : "요금제 바꾸기"}
          </Button>
        </Flex>
      </Card>

      <Card
        size="small"
        title="최근 주문"
        extra={
          <Segmented
            size="small"
            value={orderSpan}
            onChange={(v) => setOrderSpan(String(v))}
            options={Object.keys(ORDER_SPANS)}
          />
        }
      >
        <Flex align="center" gap={8} wrap style={{ marginBlockEnd: 12 }}>
          <Input.Search
            allowClear
            placeholder="주문번호·고객·상품"
            aria-label="주문 찾기"
            value={orderQuery}
            onChange={(e) => setOrderQuery(e.target.value)}
            style={{ flex: "1 1 12rem", maxInlineSize: "18rem" }}
          />
          <Select<OrderStatus>
            allowClear
            placeholder="상태 전체"
            aria-label="상태로 거르기"
            value={orderStatus}
            onChange={(v) => setOrderStatus(v)}
            options={(["결제", "미결제", "보류"] as const).map((s) => ({ value: s, label: s }))}
            style={{ inlineSize: "7.5rem" }}
          />
          <Button
            disabled={payable.length === 0}
            onClick={confirmPaid}
            style={{ marginInlineStart: "auto" }}
          >
            결제 확인{payable.length ? ` ${payable.length}건` : ""}
          </Button>
        </Flex>
        <Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM, marginBlockEnd: 8 }}>
          {shownOrders.length}건 · 합계 {won(shownTotal)} · 결제 대기 {shownUnpaid}건
        </Text>
        <Table<Order>
          size="small"
          rowSelection={{ selectedRowKeys: picked, onChange: (keys) => setPicked(keys) }}
          columns={orderColumns}
          dataSource={shownOrders}
          pagination={{
            pageSize: 6,
            size: "small",
            hideOnSinglePage: true,
            showTotal: (total, range) => `${range[0]}–${range[1]} / ${total}건`,
          }}
          scroll={{ x: "max-content" }}
        />
      </Card>

      <Card size="small" title="인기 상품" extra={<Text type="secondary">이번 주 판매 기준</Text>}>
        <div className="a1d-products">
          {BEST_SELLING.map((p) => (
            <Card
              key={p.name}
              size="small"
              hoverable
              cover={
                <div style={{ overflow: "hidden", borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0` }}>
                  <Image
                    src={p.photo}
                    alt={p.name}
                    width="100%"
                    height={128}
                    style={{ objectFit: "cover", display: "block" }}
                  />
                </div>
              }
            >
              <Flex vertical gap={4} style={{ minInlineSize: 0 }}>
                <Text strong ellipsis>{p.name}</Text>
                <Flex justify="space-between" align="center" gap={8} wrap>
                  <Text style={{ whiteSpace: "nowrap" }}>{won(p.price)}</Text>
                  <Flex align="center" gap={4} style={{ whiteSpace: "nowrap" }}>
                    <Rate disabled count={1} value={1} style={{ fontSize: 12 }} />
                    <Text type="secondary">{p.rate}</Text>
                  </Flex>
                </Flex>
                <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{p.sold}개 판매</Text>
              </Flex>
            </Card>
          ))}
        </div>
      </Card>

      <div className="a1d-pair">
        <Card size="small" title="분류별 매출" extra={<Text type="secondary">이번 달</Text>}>
          {/* Lizant 방사형 대신 막대 진행도 사용. 반지름 비례라 안쪽 고리 짧아 보임 */}
          <Flex vertical gap={12}>
            {CATEGORIES.map((c) => (
              <Flex key={c.name} vertical gap={2}>
                <Flex justify="space-between">
                  <Text>{c.name}</Text>
                  <Text type="secondary">{c.pct}%</Text>
                </Flex>
                <Progress
                  percent={(c.pct / maxCategory) * 100}
                  showInfo={false}
                  size="small"
                  strokeColor={seriesColor}
                />
              </Flex>
            ))}
          </Flex>
        </Card>

        <Card
          size="small"
          title="배송 현황"
          extra={<Button type="link" onClick={ => setDeliveriesOpen(true)}>전체 보기</Button>}
        >
          <Flex vertical gap={12}>
            {DELIVERIES.slice(0, 6).map((d) => (
              <Flex key={d.id} align="center" justify="space-between" gap={12}>
                <Flex align="center" gap={10} style={{ minInlineSize: 0 }}>
                  <Avatar shape="square" size="small">{d.name.slice(0, 1)}</Avatar>
                  <Flex vertical style={{ minInlineSize: 0 }}>
                    <Text ellipsis>{d.name}</Text>
                    <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                      {d.by}
                    </Text>
                  </Flex>
                </Flex>
                {stateTag(d.state)}
              </Flex>
            ))}
          </Flex>
        </Card>
      </div>

      <Card
        size="small"
        title="재고 현황"
        extra={
          <Button
            icon={<FileTextOutlined />}
            onClick={ => {
              downloadCsv("재고-현황.csv", [
                ["상품번호", "상품", "갱신일", "금액", "수량", "재고"],
                ...STOCK.map((s) => [s.id, s.name, s.date, s.amount, s.qty, stockState(s.qty)]),
              ]);
              message.success("재고 보고서를 내려받았어요");
            }}
          >
            보고서 만들기
          </Button>
        }
      >
        <Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM, marginBlockEnd: 8 }}>
          {STOCK.length}개 품목 · 재고 부족 {lowStock}개 · 품절 {soldOut}개
        </Text>
        <Table<Stock>
          size="small"
          columns={stockColumns}
          dataSource={STOCK}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </Card>

      <Card
        size="small"
        title="지역별 매출"
        extra={
          <Button
            icon={<DownloadOutlined />}
            onClick={ => {
              downloadCsv("지역별-매출.csv", [["지역", "매출(백만원)"], ...REGIONS.map((r) => [r.name, r.value])]);
              message.success("지역별 매출을 내려받았어요");
            }}
          >
            내려받기
          </Button>
        }
      >
        <div className="a1d-region">
          <div style={{ inlineSize: "100%", blockSize: 280 }}>
            <ResponsiveContainer>
              <BarChart
                data={REGIONS as unknown as Record<string, unknown>[]}
                layout="vertical"
                margin={{ left: 8 }}
              >
                <XAxis type="number" tickLine={false} axisLine={false} tick={tick} />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={48} tick={tick} />
                <Tooltip
                  cursor={{ fill: token.colorFillSecondary }}
                  contentStyle={tooltipStyle}
                  formatter={(v) => [`${v}백만원`, "매출"]}
                />
                <Bar dataKey="value" fill={seriesColor} radius={[0, 4, 4, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
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
        </div>
      </Card>

      <PlanModal
        open={planOpen}
        current={plan}
        onClose={ => setPlanOpen(false)}
        onPick={(key) => {
          setPlan(key);
          setPlanOpen(false);
          message.success(`${PLANS.find((p) => p.key === key)?.name} 요금제로 바꿨어요`);
        }}
      />

      <DeliveryDrawer open={deliveriesOpen} onClose={ => setDeliveriesOpen(false)} stateTag={stateTag} />
    </div>
  );
}

function PlanModal({
  open, current, onClose, onPick,
}: { open: boolean; current: string; onClose:  => void; onPick: (key: string) => void }) {
  const { token } = theme.useToken;
  const [draft, setDraft] = React.useState(current);
  React.useEffect( => { if (open) setDraft(current); }, [open, current]);

  return (
    <Modal
      open={open}
      title="요금제 고르기"
      okText="이 요금제로 바꾸기"
      cancelText="그만두기"
      okButtonProps={{ disabled: draft === current }}
      onOk={ => onPick(draft)}
      onCancel={onClose}
    >
      <Radio.Group value={draft} onChange={(e) => setDraft(e.target.value)} style={{ display: "block" }}>
        <Flex vertical gap={8}>
          {PLANS.map((p) => (
            <Radio
              key={p.key}
              value={p.key}
              style={{
                border: `1px solid ${draft === p.key ? token.colorPrimary : token.colorBorderSecondary}`,
                borderRadius: token.borderRadiusLG,
                marginInlineEnd: 0,
                padding: 12,
              }}
            >
              <Flex vertical>
                <Flex align="baseline" gap={8} wrap>
                  <Text strong>{p.name}</Text>
                  <Text type="secondary">{p.price}</Text>
                  {p.key === current ? <Tag style={{ marginInlineEnd: 0 }}>지금 요금제</Tag> : null}
                </Flex>
                <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{p.note}</Text>
              </Flex>
            </Radio>
          ))}
        </Flex>
      </Radio.Group>
    </Modal>
  );
}

// 전체 배송 목록 서랍. 항목 펼치면 진행 상황 시각화 표시
function DeliveryDrawer({
  open, onClose, stateTag,
}: { open: boolean; onClose:  => void; stateTag: (s: string) => React.ReactNode }) {
  const { token } = theme.useToken;
  const [filter, setFilter] = React.useState("전체");
  const shown = DELIVERIES.filter((d) => filter === "전체" || d.state === filter);

  return (
    <Drawer open={open} onClose={onClose} title={`배송 현황 · ${DELIVERIES.length}건`} size={420}>
      <Flex vertical gap={16}>
        <Segmented
          block
          value={filter}
          onChange={(v) => setFilter(String(v))}
          options={["전체", "배송 출발", "배송 중", "도착"]}
        />
        <Collapse
          accordion
          items={shown.map((d) => ({
            key: d.id,
            label: (
              <Flex vertical style={{ minInlineSize: 0 }}>
                <Text ellipsis>{d.name}</Text>
                <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{d.id} · {d.by}</Text>
              </Flex>
            ),
            extra: stateTag(d.state),
            children: (
              <Timeline
                style={{ marginBlockStart: 8 }}
                items={DELIVERY_STEPS.map((step, i) => {
                  const done = i < d.at.length;
                  return {
                    color: done ? token.colorPrimary : token.colorTextQuaternary,
                    content: (
                      <Flex justify="space-between" gap={12}>
                        <Text type={done ? undefined : "secondary"}>{step}</Text>
                        <Text type="secondary" style={{ fontSize: token.fontSizeSM }}>{done ? d.at[i] : "예정"}</Text>
                      </Flex>
                    ),
                  };
                })}
              />
            ),
          }))}
        />
      </Flex>
    </Drawer>
  );
}
