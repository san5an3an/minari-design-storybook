import * as React from "react";
import {
  App, Avatar, Badge, Button, ConfigProvider, Empty, Flex, Layout, Menu, Popover, Typography, theme,
} from "antd";
import koKR from "antd/locale/ko_KR";
import "dayjs/locale/ko";
import { BarChartOutlined, BellOutlined, ClockCircleOutlined, ProjectOutlined } from "@ant-design/icons";
import type { UsageDashboardProps } from "../registry";
import {
  CURRENT_USER_ID, DUE_SOON_DAYS, PROJECTS, dueBadge, memberOf, statusOf,
} from "./data";
import { LAYOUT_CSS, OverlayHostContext, PAGE_CLASS } from "./frame";
import { ToneTag } from "./parts";
import { SCREENS, type ScreenDefinition } from "./screens";

const ICONS: Record<ScreenDefinition["icon"], React.ReactNode> = {
  project: <ProjectOutlined />,
  clock: <ClockCircleOutlined />,
  chart: <BarChartOutlined />,
};

// 지연 및 7일 이내 마감 프로젝트 수 계산
const ALERTS = PROJECTS
  .map((p) => ({ project: p, status: statusOf(p, p.tasks) }))
  .filter(({ project, status }) => status === "지연" || (status === "진행중" && project.dueInDays <= DUE_SOON_DAYS))
  .sort((a, b) => a.project.dueInDays - b.project.dueInDays);

function AlertBell {
  const { token } = theme.useToken;
  return (
    <Popover
      trigger="click"
      placement="bottomRight"
      title="챙겨야 할 프로젝트"
      content={
        ALERTS.length === 0 ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="지금은 없어요" />
        ) : (
          <Flex vertical gap={10} style={{ inlineSize: 260 }}>
            {ALERTS.map(({ project, status }) => (
              <Flex key={project.id} align="center" justify="space-between" gap={8}>
                <Flex vertical style={{ minWidth: 0 }}>
                  <Typography.Text ellipsis>{project.name}</Typography.Text>
                  <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
                    {project.id} · 마감 {project.dueLabel}
                  </Typography.Text>
                </Flex>
                <ToneTag tone={status === "지연" ? "danger" : "warning"}>{dueBadge(project, status)}</ToneTag>
              </Flex>
            ))}
          </Flex>
        )
      }
    >
      <Badge count={ALERTS.length} size="small" offset={[-4, 4]}>
        <Button type="text" shape="circle" icon={<BellOutlined />} aria-label={`알림 ${ALERTS.length}건`} />
      </Badge>
    </Popover>
  );
}

export function Antd3Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  const { token } = theme.useToken;
  // 오버레이 위치는 useState로 관리. 재렌더링돼야 createPortal이 대상을 찾음
  const [overlayHost, setOverlayHost] = React.useState<HTMLElement | null>(null);
  const me = memberOf(CURRENT_USER_ID);

  return (
    <ConfigProvider locale={koKR}>
      <App>
        <style>{LAYOUT_CSS}</style>
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

            {/* 본문 영역에 relative, hidden 지정. Drawer가 이 안에서만 열리는 제약임 */}
            <Layout.Content
              style={{
                display: "flex",
                flexDirection: "column",
                minInlineSize: 0,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  paddingInline: 20,
                  paddingBlock: 8,
                  background: token.colorBgContainer,
                  borderBlockEnd: `1px solid ${token.colorBorderSecondary}`,
                }}
              >
                <Flex align="baseline" gap={8} style={{ minWidth: 0 }}>
                  <Typography.Text strong ellipsis>{system.name} Board</Typography.Text>
                  <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, flex: "0 0 auto" }}>
                    Ant Design
                  </Typography.Text>
                </Flex>
                {/* 상단 바 알림 건수와 현재 사용자 표시 */}
                <Flex align="center" gap={8} style={{ flex: "0 0 auto" }}>
                  <AlertBell />
                  <Flex align="center" gap={8}>
                    <Avatar size="small">{me.name.slice(0, 1)}</Avatar>
                    <Typography.Text style={{ fontSize: token.fontSizeSM }}>
                      {me.name} <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>· {me.role}</Typography.Text>
                    </Typography.Text>
                  </Flex>
                </Flex>
              </div>
              <div style={{ padding: 20, overflowY: "auto", flex: 1, minBlockSize: 0, background: token.colorBgLayout }}>
                <div className={PAGE_CLASS}>
                  <div>
                    <Typography.Title level={4} style={{ margin: 0 }}>{screen.label}</Typography.Title>
                    <Typography.Text type="secondary">{screen.lede}</Typography.Text>
                  </div>
                  <OverlayHostContext.Provider value={overlayHost}>
                    <Screen />
                  </OverlayHostContext.Provider>
                </div>
              </div>
              <div ref={setOverlayHost} />
            </Layout.Content>
          </Layout>
        </div>
      </App>
    </ConfigProvider>
  );
}
