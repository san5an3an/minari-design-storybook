import * as React from "react";
import {
  App, Avatar, Badge, Button, ConfigProvider, Empty, Flex, Popover, Select, Space, Tabs, Tag, theme, Typography,
} from "antd";
import koKR from "antd/locale/ko_KR";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import type { UsageDashboardProps } from "../registry";
import { ONBOARDING_STEPS, ddayLabel, isActive, leaveDays } from "./data";
import { HR_LAYOUT_CSS } from "./parts";
import { SCREENS } from "./screens";
import { HrProvider, useHr } from "./store";

interface Notice {
  key: string;
  title: string;
  meta: string;
  onOpen:  => void;
}

// 헤더 알림 구성: 승인 대기 휴가, 회신 기한 오퍼, 진행 중 온보딩
function useNotices: Notice[] {
  const { state, dispatch, navigate } = useHr;
  const nameOf = (id: string) => state.employees.find((e) => e.id === id)?.name ?? "구성원";
  return [
    ...state.leaves
      .filter((l) => l.status === "대기")
      .map((l) => ({
        key: l.id,
        title: `${nameOf(l.employeeId)}님이 ${l.type} ${leaveDays(l)}일을 신청했어요`,
        meta: `${l.id} · ${l.requestedLabel}`,
        onOpen:  => navigate("leave"),
      })),
    ...state.candidates
      .filter((c) => isActive(c) && c.next?.kind === "회신 기한")
      .map((c) => ({
        key: c.id,
        title: `${c.name}님 오퍼 회신을 기다리고 있어요`,
        meta: `${c.id} · ${ddayLabel(c.next?.at ?? "")}`,
        onOpen:  => navigate("hiring"),
      })),
    ...state.employees
      .filter((e) => e.status === "온보딩")
      .map((e) => ({
        key: e.id,
        title: `${e.name}님 온보딩 ${Math.min(e.onboardingStep + 1, ONBOARDING_STEPS.length)}/${ONBOARDING_STEPS.length}단계 진행 중`,
        meta: `${e.id} · ${ONBOARDING_STEPS[Math.min(e.onboardingStep, ONBOARDING_STEPS.length - 1)]}`,
        onOpen:  => {
          navigate("people");
          dispatch({ type: "employee/open", id: e.id });
        },
      })),
  ];
}

function NoticeBell {
  const { token } = theme.useToken;
  const notices = useNotices;
  const [open, setOpen] = React.useState(false);

  const content = notices.length === 0 ? (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="새 알림이 없어요." />
  ) : (
    <Flex vertical style={{ inlineSize: "20rem", maxBlockSize: "22rem", overflowY: "auto" }}>
      {notices.map((n, i) => (
        <Button
          key={n.key}
          type="text"
          block
          onClick={ => {
            setOpen(false);
            n.onOpen;
          }}
          style={{
            blockSize: "auto",
            paddingBlock: 10,
            justifyContent: "flex-start",
            textAlign: "start",
            whiteSpace: "normal",
            borderRadius: 0,
            borderBlockStart: i === 0 ? "none" : `1px solid ${token.colorBorderSecondary}`,
          }}
        >
          <span>
            <Typography.Text style={{ display: "block" }}>{n.title}</Typography.Text>
            <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
              {n.meta}
            </Typography.Text>
          </span>
        </Button>
      ))}
    </Flex>
  );

  return (
    <Popover
      trigger="click"
      placement="bottomRight"
      open={open}
      onOpenChange={setOpen}
      title={`알림 ${notices.length}건`}
      content={content}
    >
      <Badge count={notices.length} size="small">
        <Button type="text" shape="circle" aria-label={`알림 ${notices.length}건`} icon={<BellOutlined />} />
      </Badge>
    </Popover>
  );
}

// 헤더 검색. 사람 선택 시 구성원 탭으로 이동해 상세 표시
function PeopleSearch {
  const { state, dispatch, navigate } = useHr;
  const { token } = theme.useToken;
  return (
    <Select<string>
      value={null}
      placeholder="구성원 검색 · 이름, 부서, 직무"
      suffixIcon={<SearchOutlined />}
      style={{ inlineSize: "16rem", maxInlineSize: "100%" }}
      showSearch={{
        filterOption: (input, option) => String(option?.keywords ?? "").includes(input.trim.toLowerCase),
      }}
      notFoundContent="맞는 구성원이 없어요."
      options={state.employees.map((e) => ({
        value: e.id,
        label: e.name,
        sub: `${e.department} · ${e.role}`,
        keywords: `${e.name} ${e.department} ${e.role} ${e.id}`.toLowerCase,
      }))}
      optionRender={(option) => (
        <Flex justify="space-between" gap={8}>
          <span>{option.data.label}</span>
          <Typography.Text type="secondary" ellipsis style={{ fontSize: token.fontSizeSM }}>
            {option.data.sub}
          </Typography.Text>
        </Flex>
      )}
      onSelect={(id) => {
        navigate("people");
        dispatch({ type: "employee/open", id });
      }}
    />
  );
}

function Shell({ system, screenKey, onScreenChange }: UsageDashboardProps & {
  screenKey: string;
  onScreenChange: (key: string) => void;
}) {
  const { state } = useHr;
  const { token } = theme.useToken;
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  // 탭 건수는 처리 대상 수. 구성원은 전체 인원, 휴가는 승인 대기, 채용은 진행 중 후보자
  const counts: Record<string, number> = {
    people: state.employees.length,
    leave: state.leaves.filter((l) => l.status === "대기").length,
    hiring: state.candidates.filter(isActive).length,
  };

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
        background: token.colorBgLayout,
      }}
    >
      <style>{HR_LAYOUT_CSS}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          paddingInline: 20,
          paddingBlock: 12,
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
        <Flex align="center" gap={8} wrap style={{ marginInlineStart: "auto" }}>
          <PeopleSearch />
          <NoticeBell />
          <Flex align="center" gap={8}>
            <Avatar size="small">황</Avatar>
            <span style={{ lineHeight: 1.25 }}>
              <Typography.Text strong style={{ display: "block", fontSize: token.fontSizeSM }}>황보람</Typography.Text>
              <Typography.Text type="secondary" style={{ display: "block", fontSize: token.fontSizeSM }}>
                피플 파트너
              </Typography.Text>
            </span>
          </Flex>
        </Flex>
      </div>

      <div style={{ paddingInline: 20, paddingBlockStart: 8, background: token.colorBgContainer }}>
        <Tabs
          activeKey={screenKey}
          onChange={onScreenChange}
          items={SCREENS.map((s) => {
            const active = s.key === screenKey;
            return {
              key: s.key,
              label: (
                <Space size={6}>
                  {s.label}
                  <Badge
                    count={counts[s.key] ?? 0}
                    showZero
                    size="small"
                    styles={{
                      indicator: {
                        background: active ? token.colorPrimaryBg : "var(--semantic-bg-neutral-subtle)",
                        color: active ? token.colorPrimary : token.colorTextSecondary,
                        boxShadow: "none",
                      },
                    }}
                  />
                </Space>
              ),
            };
          })}
        />
      </div>

      <div className="hr-scroll" style={{ padding: 20, overflowY: "auto", flex: 1, minBlockSize: 0 }}>
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
  );
}

export function Antd2Usage(props: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  return (
    <ConfigProvider locale={koKR}>
      <App>
        <HrProvider navigate={setScreenKey}>
          <Shell {...props} screenKey={screenKey} onScreenChange={setScreenKey} />
        </HrProvider>
      </App>
    </ConfigProvider>
  );
}
