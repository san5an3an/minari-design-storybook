import * as React from "react";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import type { TabsProps } from "../../systems/props";

export function Tabs({ items, defaultValue, orientation = "horizontal" }: TabsProps) {
  const base = React.useId;
  const first = items.find((i) => !i.disabled)?.value ?? items[0]?.value;
  const [value, setValue] = React.useState(defaultValue ?? first);
  const vertical = orientation === "vertical";
  // 공식 a11yProps로 탭과 패널 상호 연결
  const tabId = (v: string) => `${base}-tab-${v}`;
  const panelId = (v: string) => `${base}-panel-${v}`;

  const bar = (
    <MuiTabs
      value={value}
      onChange={(_, next: string) => setValue(next)}
      orientation={orientation}
      // 표시를 직접 그리므로 기본 색상 체계 미사용
      sx={{
        minHeight: 0,
        background: "var(--component-tabs-track-bg)",
        borderRadius: "var(--component-tabs-radius)",
        border: "var(--semantic-border-width-default) solid var(--component-tabs-track-border)",
        ...(vertical ? { minWidth: "var(--component-tabs-vertical-min-width)" } : null),
        "& .MuiTabs-indicator": { background: "var(--component-tabs-indicator)" },
        "& .MuiTabs-flexContainer": { gap: "var(--component-tabs-gap)" },
        "& .MuiTab-root": {
          minHeight: 0,
          minWidth: 0,
          textTransform: "none",
          alignItems: vertical ? "flex-start" : "center",
          color: "var(--component-tabs-fg)",
          fontSize: "var(--component-tabs-font-size)",
          letterSpacing: "var(--component-tabs-letter-spacing)",
          paddingInline: "var(--component-tabs-padding-inline)",
          paddingBlock: "var(--component-tabs-padding-block)",
          gap: "var(--component-tabs-icon-gap)",
          "&:hover": { color: "var(--component-tabs-fg-hover)" },
          // 클래스 두 개 사용. MUI가 &.Mui-selected로 지정해 우선순위 낮음
          "&.Mui-selected": {
            color: "var(--component-tabs-fg-active)",
            background: "var(--component-tabs-bg-active)",
          },
          "&.Mui-disabled": { color: "var(--component-tabs-fg-disabled)" },
          // 표시 크기는 토큰이 결정. 텍스트와 나란히 정렬
          "& svg": {
            width: "var(--component-tabs-icon-size)",
            height: "var(--component-tabs-icon-size)",
          },
        },
      }}
    >
      {items.map((it) => (
        <MuiTab
          key={it.value}
          value={it.value}
          label={it.label}
          icon={it.icon as React.ReactElement | undefined}
          // 표시는 텍스트 앞에 위치. 기본값 top은 텍스트 위로 올라가 줄 높이에 영향
          iconPosition="start"
          disabled={it.disabled}
          id={tabId(it.value)}
          aria-controls={panelId(it.value)}
        />
      ))}
    </MuiTabs>
  );

  const current = items.find((i) => i.value === value);
  return (
    <div style={{ display: "flex", flexDirection: vertical ? "row" : "column",
                  gap: "var(--component-tabs-gap)" }}>
      {bar}
      {current?.content === undefined ? null : (
        <div role="tabpanel" id={panelId(value!)} aria-labelledby={tabId(value!)}>
          {current.content}
        </div>
      )}
    </div>
  );
}
