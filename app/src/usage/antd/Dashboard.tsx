import * as React from "react";
// Breadcrumb와 Button 제거. 없는 계층 표시와 화면별 역할 없어 삭제
import {
  App, Avatar, Grid, Input, Layout, Menu, Space, Tag, theme, Typography,
} from "antd";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function AntdUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  // semantic 대신 antd 토큰 사용. 이중 경로로 값이 들어가면 어긋날 수 있음
  const { token } = theme.useToken;
  // 폭 판별에 antd 브레이크포인트 사용. 렌더링 분기 필요해 CSS로 불가능한 제약임
  const screens = Grid.useBreakpoint;
  const isWide = screens.md ?? true;

  return (
    <>
      <App>
      {/* 바깥 테두리와 모서리는 저장소 자체 토큰 사용 */}
      <div
        className="overflow-hidden"
        style={{
          display: "flex",
          flexDirection: "column",
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
              <Input.Search
                placeholder="검색"
                aria-label="검색"
                style={{ inlineSize: "min(180px, 42vw)" }}
              />
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
              onSelect={(e) => setScreenKey(e.key)}
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
                  onSelect={(e) => setScreenKey(e.key)}
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

                <Screen />
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
    </>
  );
}
