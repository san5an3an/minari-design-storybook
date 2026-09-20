import * as React from "react";
import { Layout, Menu, Typography, theme } from "antd";
import { BarChartOutlined, ClockCircleOutlined, ProjectOutlined } from "@ant-design/icons";
import type { UsageDashboardProps } from "../registry";
import { SCREENS, type ScreenDefinition } from "./screens";

const ICONS: Record<ScreenDefinition["icon"], React.ReactNode> = {
  project: <ProjectOutlined />,
  clock: <ClockCircleOutlined />,
  chart: <BarChartOutlined />,
};

export function Antd3Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  const { token } = theme.useToken;

  return (
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
      <Layout style={{ flex: 1, minHeight: 0 }}>
        <Layout.Sider
          width={56}
          theme="light"
          style={{
            background: token.colorBgContainer,
            borderInlineEnd: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          <div
            aria-hidden
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBlock: 14,
            }}
          >
            <span
              style={{
                display: "inline-block",
                inlineSize: 20,
                blockSize: 20,
                background: "var(--semantic-bg-brand-default)",
                borderRadius: "var(--semantic-radius-selection)",
              }}
            />
          </div>
          {/* label 없이 icon만 주면 접근 가능한 이름이 사라져 스크린리더가 인식 못 할 수 있음 */}
          <Menu
            mode="inline"
            inlineCollapsed
            selectedKeys={[screenKey]}
            onSelect={(e) => setScreenKey(e.key)}
            style={{ borderInlineEnd: "none" }}
            items={SCREENS.map((s) => ({
              key: s.key,
              icon: ICONS[s.icon],
              label: s.label,
              title: s.label,
            }))}
          />
        </Layout.Sider>

        <Layout.Content style={{ display: "flex", flexDirection: "column", minInlineSize: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: 20,
              paddingBlock: 12,
              background: token.colorBgContainer,
              borderBlockEnd: `1px solid ${token.colorBorderSecondary}`,
            }}
          >
            <Typography.Text strong>{system.name} Board</Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>Ant Design</Typography.Text>
          </div>
          <div style={{ padding: 20, overflowY: "auto", flex: 1, minBlockSize: 0, background: token.colorBgLayout }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <Typography.Title level={4} style={{ margin: 0 }}>{screen.label}</Typography.Title>
                <Typography.Text type="secondary">{screen.lede}</Typography.Text>
              </div>
              <Screen />
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
}
