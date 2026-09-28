import * as React from "react";
import { App, Breadcrumb, ConfigProvider, Flex, Segmented, Select, Typography } from "antd";
import koKR from "antd/locale/ko_KR";
import type { UsageDashboardProps } from "../registry";
import { REPORT_LAYOUT_CSS } from "./parts";
import { SCREENS } from "./screens";

const PERIODS = [
  { value: "2026-Q3", label: "2026 3분기" },
  { value: "2026-Q2", label: "2026 2분기" },
  { value: "2026-Q1", label: "2026 1분기" },
];

export function Antd4Usage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [period, setPeriod] = React.useState(PERIODS[0].value);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;
  const periodLabel = PERIODS.find((p) => p.value === period)?.label ?? period;

  return (
    <ConfigProvider locale={koKR}>
      <App>
        <style>{REPORT_LAYOUT_CSS}</style>
        <div
          className="overflow-hidden"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "max(20rem, calc(100dvh - 9rem))",
            border: "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
            borderRadius: "var(--semantic-radius-container)",
            boxShadow: "var(--semantic-shadow-raised)",
            background: "var(--semantic-bg-neutral-surface)",
          }}
        >
          <Flex
            align="center"
            justify="space-between"
            gap={12}
            wrap
            style={{
              paddingInline: 20,
              paddingBlock: 10,
              borderBlockEnd: "1px solid var(--semantic-border-neutral-subtle)",
            }}
          >
            <Breadcrumb
              items={[{ title: "리포트" }, { title: system.name }, { title: screen.label }]}
            />
            <Select
              size="small"
              value={period}
              onChange={setPeriod}
              options={PERIODS}
              style={{ minInlineSize: 132 }}
              aria-label="기간"
            />
          </Flex>

          <div style={{ paddingInline: 20, paddingBlockStart: 18, paddingBlockEnd: 14 }}>
            <Typography.Text
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--semantic-fg-brand-default)",
              }}
            >
              분석 리포트
            </Typography.Text>
            <Typography.Title level={3} style={{ marginBlock: "6px 0" }}>
              {system.name} Insight
            </Typography.Title>
            <Typography.Paragraph
              type="secondary"
              style={{ marginBlockStart: 6, marginBlockEnd: 0, maxInlineSize: "46rem", fontSize: 13.5, lineHeight: 1.7 }}
            >
              {screen.lede} <strong>{periodLabel}</strong> 기준입니다.
            </Typography.Paragraph>

            <div style={{ marginBlockStart: 14 }}>
              <Segmented
                value={screenKey}
                onChange={(v) => setScreenKey(String(v))}
                options={SCREENS.map((s) => ({ value: s.key, label: s.label }))}
              />
            </div>
          </div>

          <div
            className="rp-scroll"
            style={{
              flex: 1,
              minBlockSize: 0,
              overflowY: "auto",
              paddingInline: 20,
              paddingBlockEnd: 20,
              background: "var(--semantic-bg-neutral-subtlest)",
            }}
          >
            <div style={{ paddingBlockStart: 16 }}>
              <Screen />
            </div>
          </div>

          <Flex
            align="center"
            justify="space-between"
            gap={8}
            wrap
            style={{
              paddingInline: 20,
              paddingBlock: 8,
              borderBlockStart: "1px solid var(--semantic-border-neutral-subtle)",
              fontSize: 11,
            }}
          >
            <Typography.Text type="secondary" style={{ fontSize: 11 }}>
              같은 베이스, 다른 앱. antd Usage 4 · 자료는 전부 가상입니다
            </Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: 11 }}>
              {periodLabel} 기준
            </Typography.Text>
          </Flex>
        </div>
      </App>
    </ConfigProvider>
  );
}
