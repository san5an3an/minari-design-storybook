import * as React from "react";
// Breadcrumb 제거. 없는 계층 표시 요소임. 버튼도 역할 없어 제거
import {
  App, AutoComplete, Avatar, Badge, Button, ConfigProvider, Flex, Input, Layout, Menu, Popover,
  Space, Tag, theme, Typography,
} from "antd";
import koKR from "antd/locale/ko_KR";
import { BellOutlined } from "@ant-design/icons";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";
import { useContainerWidth } from "./useContainerWidth";

interface Jump { value: string; label: string; hint: string; screen: string; focusId?: string }
const JUMPS: Jump[] = [
  ...SCREENS.map((s) => ({ value: `screen:${s.key}`, label: s.label, hint: "화면", screen: s.key })),
  { value: "order:TB010338", label: "#TB010338 노트북 프로", hint: "주문", screen: "dashboard", focusId: "#TB010338" },
  { value: "order:TB010335", label: "#TB010335 애플 헤드폰 · 미결제", hint: "주문", screen: "dashboard", focusId: "#TB010335" },
  { value: "card:K-105", label: "K-105 배송 목록 무한 스크롤", hint: "칸반 카드", screen: "kanban", focusId: "K-105" },
  { value: "card:K-101", label: "K-101 결제 실패 로그를 한곳에 모으기", hint: "칸반 카드", screen: "kanban", focusId: "K-101" },
  { value: "person:p1", label: "박서연", hint: "대화", screen: "chat", focusId: "p1" },
  { value: "person:p2", label: "김도현", hint: "대화", screen: "chat", focusId: "p2" },
  { value: "person:p4", label: "최민아", hint: "대화", screen: "chat", focusId: "p4" },
];

// 알림 목록, 이동 가능한 항목만 포함한 고정값
interface Notice { id: string; title: string; detail: string; at: string; screen: string; focusId?: string }
const NOTICES: Notice[] = [
  { id: "n1", title: "박서연 님이 메시지를 보냈어요", detail: "재고 배지 색 확인 부탁해요", at: "방금", screen: "chat", focusId: "p1" },
  { id: "n2", title: "재고가 바닥났어요", detail: "스트라이프 야구모자 · 품절", at: "12분 전", screen: "dashboard" },
  { id: "n3", title: "결제를 기다리는 주문이 있어요", detail: "#TB010335 애플 헤드폰 · 미결제", at: "1시간 전", screen: "dashboard", focusId: "#TB010335" },
];

export function AntdUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  // semantic 대신 antd 토큰 사용. 이중 경로로 값이 들어가면 어긋날 수 있음
  const { token } = theme.useToken;
  const [frameRef, frameWidth] = useContainerWidth<HTMLDivElement>;
  const isWide = frameWidth === null || frameWidth >= 640;

  // 검색, 알림 선택 항목을 focusId로 전달. rail 이동 시 초기화해 이전 선택 제거
  const [focus, setFocus] = React.useState<{ screen: string; id: string } | null>(null);
  const go = (target: string, focusId?: string) => {
    setScreenKey(target);
    setFocus(focusId ? { screen: target, id: focusId } : null);
  };

  const [query, setQuery] = React.useState("");
  const [unread, setUnread] = React.useState<readonly string[]>(NOTICES.map((n) => n.id));
  const [noticeOpen, setNoticeOpen] = React.useState(false);
  const found = React.useMemo( => {
    const q = query.trim.toLowerCase;
    const hits = q ? JUMPS.filter((j) => `${j.label} ${j.hint}`.toLowerCase.includes(q)) : JUMPS.slice(0, SCREENS.length);
    return hits.map((j) => ({
      value: j.value,
      label: (
        <Flex align="center" justify="space-between" gap={12}>
          <Typography.Text ellipsis>{j.label}</Typography.Text>
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, whiteSpace: "nowrap" }}>
            {j.hint}
          </Typography.Text>
        </Flex>
      ),
    }));
  }, [query, token.fontSizeSM]);

  return (
    <>
      {/* ConfigProvider는 로케일만 적용. 테마 적용은 UsagePage에서 처리 */}
      <ConfigProvider locale={koKR}>
      <App>
      {/* 바깥 테두리와 모서리는 저장소 자체 토큰 사용 */}
      <div
        ref={frameRef}
        className="overflow-hidden"
        style={{
          display: "flex",
          flexDirection: "column",
          // 머리줄 검색 필드의 cqi 값이 프레임 폭 참조
          containerType: "inline-size",
          height: "max(20rem, calc(100dvh - 9rem))",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
        }}
      >
        <Layout style={{ background: token.colorBgLayout, flex: 1, minHeight: 0 }}>
          {/* lineHeight, height 고정, antd 헤더 CSS와 맞춰 지정 */}
          {/* flexWrap 없으면 좁은 화면서 페이지가 가로로 밀릴 수 있음 */}
          <Layout.Header
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
              paddingInline: 16,
              height: "auto",
              lineHeight: "normal",
              paddingBlock: 12,
              background: token.colorBgContainer,
              borderBlockEnd: `1px solid ${token.colorBorderSecondary}`,
            }}
          >
            {/* 제목 영역은 Typography, Space로 구성. antd v5엔 PageHeader 없음 */}
            <Space size={10}>
              <span
                aria-hidden
                style={{
                  display: "inline-block",
                  inlineSize: 20,
                  blockSize: 20,
                  background: "var(--semantic-bg-brand-default)",
                  borderRadius: "var(--semantic-radius-selection)",
                }}
              />
              <Typography.Text strong style={{ whiteSpace: "nowrap" }}>
                {system.name} Console
              </Typography.Text>
            </Space>

            <Space size={10} wrap style={{ marginInlineStart: "auto" }}>
              {/* 고정폭 180px 대신 가변 폭 지정. 좁은 화면에서 안 접히고 밀어내는 문제 있음 */}
              <AutoComplete
                value={query}
                options={found}
                onChange={(v) => setQuery(String(v ?? ""))}
                onSelect={(v) => {
                  const hit = JUMPS.find((j) => j.value === v);
                  if (hit) go(hit.screen, hit.focusId);
                  setQuery("");
                }}
                popupMatchSelectWidth={280}
                notFoundContent="찾는 것이 없어요"
                style={{ inlineSize: "min(13rem, 42cqi)" }}
              >
                <Input.Search placeholder="주문·카드·사람 찾기" aria-label="검색" />
              </AutoComplete>
              {/* 알림 건수는 안 읽은 개수, 클릭 시 해당 화면으로 이동하기 */}
              <Popover
                trigger="click"
                placement="bottomRight"
                open={noticeOpen}
                onOpenChange={setNoticeOpen}
                title={
                  <Flex align="center" justify="space-between" gap={16}>
                    <span>알림</span>
                    <Button
                      type="link"
                      size="small"
                      disabled={unread.length === 0}
                      onClick={ => setUnread([])}
                    >
                      모두 읽음
                    </Button>
                  </Flex>
                }
                content={
                  <Flex vertical gap={4} style={{ inlineSize: 280 }}>
                    {NOTICES.map((n) => {
                      const isNew = unread.includes(n.id);
                      return (
                        <Button
                          key={n.id}
                          type="text"
                          block
                          onClick={ => {
                            setUnread((prev) => prev.filter((id) => id !== n.id));
                            go(n.screen, n.focusId);
                            setNoticeOpen(false);
                          }}
                          style={{ blockSize: "auto", paddingBlock: 8, textAlign: "start" }}
                        >
                          <Flex align="flex-start" gap={10} style={{ inlineSize: "100%", minInlineSize: 0 }}>
                            <Badge dot={isNew} color={token.colorPrimary} offset={[0, 8]}>
                              <span aria-hidden style={{ display: "inline-block", inlineSize: 4 }} />
                            </Badge>
                            <Flex vertical style={{ flex: 1, minInlineSize: 0 }}>
                              <Typography.Text strong={isNew} ellipsis>{n.title}</Typography.Text>
                              <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>
                                {n.detail}
                              </Typography.Text>
                            </Flex>
                            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, whiteSpace: "nowrap" }}>
                              {n.at}
                            </Typography.Text>
                          </Flex>
                        </Button>
                      );
                    })}
                  </Flex>
                }
              >
                <Badge count={unread.length} size="small">
                  <Button
                    type="text"
                    icon={<BellOutlined />}
                    aria-label={`알림 ${unread.length}건`}
                  />
                </Badge>
              </Popover>
              {/* Badge count 숫자 전용. 긴 문자열이면 배지 크기가 커지는 문제 있음 */}
              {/* -default까지 포함해 지정. 생략하면 없는 토큰이라 상속색으로 안 보임 */}
              <Tag
                style={{
                  background: "var(--semantic-bg-brand-default)",
                  color: "var(--semantic-fg-on-brand-default)",
                  borderColor: "transparent",
                  marginInlineEnd: 0,
                }}
              >
                {system.baseTitle}
              </Tag>
              <Avatar size="small">SK</Avatar>
            </Space>
          </Layout.Header>

          {/* 좁은 화면에서 세로 rail을 가로줄로 변경 */}
          {!isWide ? (
            <Menu
              mode="horizontal"
              selectedKeys={[screenKey]}
              onSelect={(e) => go(e.key)}
              items={SCREENS.map((s) => ({ key: s.key, label: s.label }))}
              style={{ borderBlockEnd: `1px solid ${token.colorBorderSecondary}` }}
            />
          ) : null}

          <Layout>
            {isWide ? (
              <Layout.Sider
                theme="light"
                width={176}
                style={{
                  background: token.colorBgContainer,
                  borderInlineEnd: `1px solid ${token.colorBorderSecondary}`,
                  overflowY: "auto",
                }}
              >
                {/* Menu selectedKeys를 상태와 연결. 안 하면 코드 변경이 화면에 반영되지 않음 */}
                <Menu
                  mode="inline"
                  selectedKeys={[screenKey]}
                  onSelect={(e) => go(e.key)}
                  items={SCREENS.map((s) => ({ key: s.key, label: s.label }))}
                />
              </Layout.Sider>
            ) : null}

            <Layout.Content style={{ padding: 20, minInlineSize: 0, overflowY: "auto" }}>
              <Space orientation="vertical" size={16} style={{ display: "flex" }}>
                {/* 빵부스러기 사용 금지 */}
                <Space orientation="vertical" size={2} style={{ display: "flex", minInlineSize: 0 }}>
                  <Typography.Title level={3} style={{ margin: 0 }}>
                    {screen.label}
                  </Typography.Title>
                  <Typography.Text type="secondary">{screen.lede}</Typography.Text>
                </Space>

                <Screen focusId={focus?.screen === screenKey ? focus.id : undefined} />
              </Space>
            </Layout.Content>
          </Layout>

          {/* Lizant 하단 바에 출처 표시 */}
          <Layout.Footer
            style={{
              background: token.colorBgContainer,
              borderBlockStart: `1px solid ${token.colorBorderSecondary}`,
              paddingBlock: 12,
              paddingInline: 20,
            }}
          >
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
              짜임새 참고: Lizant (Ant Design React Admin) · 글·숫자·색은 이 저장소의 것
            </Typography.Text>
          </Layout.Footer>
        </Layout>
      </div>
      </App>
      </ConfigProvider>
    </>
  );
}
