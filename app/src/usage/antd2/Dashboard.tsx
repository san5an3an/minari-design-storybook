import * as React from "react";
import { App, Avatar, Space, Tabs, Tag, theme, Typography } from "antd";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function Antd2Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  const { token } = theme.useToken;

  return (
    <App>
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
          background: token.colorBgLayout,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            paddingInline: 20,
            paddingBlock: 14,
            background: token.colorBgContainer,
            borderBlockEnd: `1px solid ${token.colorBorderSecondary}`,
          }}
        >
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
              {system.name} People
            </Typography.Text>
            <Tag
              style={{
                background: "var(--semantic-bg-brand-default)",
                color: "var(--semantic-fg-on-brand-default)",
                borderColor: "transparent",
              }}
            >
              {system.baseTitle}
            </Tag>
          </Space>
          <Avatar size="small" style={{ marginInlineStart: "auto" }}>SK</Avatar>
        </div>

        <div style={{ paddingInline: 20, paddingBlockStart: 8, background: token.colorBgContainer }}>
          <Tabs
            activeKey={screenKey}
            onChange={setScreenKey}
            items={SCREENS.map((s) => ({ key: s.key, label: s.label }))}
          />
        </div>

        <div style={{ padding: 20, overflowY: "auto", flex: 1, minBlockSize: 0 }}>
          <Space orientation="vertical" size={16} style={{ display: "flex" }}>
            <Space orientation="vertical" size={2} style={{ display: "flex" }}>
              <Typography.Title level={4} style={{ margin: 0 }}>{screen.label}</Typography.Title>
              <Typography.Text type="secondary">{screen.lede}</Typography.Text>
            </Space>
            <Screen />
          </Space>
        </div>

        <div
          style={{
            background: token.colorBgContainer,
            borderBlockStart: `1px solid ${token.colorBorderSecondary}`,
            paddingBlock: 10,
            paddingInline: 20,
          }}
        >
          <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
            같은 베이스, 다른 앱. antd Usage 2 · 글·숫자·색은 이 저장소의 것
          </Typography.Text>
        </div>
      </div>
    </App>
  );
}
