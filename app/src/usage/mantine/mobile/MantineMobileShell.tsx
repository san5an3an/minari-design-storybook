"use client";

import * as React from "react";
import {
  ActionIcon, Avatar, Button, Checkbox, Chip, ColorInput, FileInput, Group, MantineThemeProvider, MultiSelect, NativeSelect,
  NumberInput, Radio, SegmentedControl, Select, Stack, Switch, Text, Textarea, TextInput, createTheme,
  type MantineThemeOverride,
} from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import { BottomTabs, type MobileTab } from "../../mobile/BottomTabs";
import { TAB_MIN_HEIGHT, TOUCH, TOUCH_EXEMPT, type PopupSafeBox } from "../../mobile/contract";
import { MobileFrame, usePopupSafeBox } from "../../mobile/MobileFrame";

export type { MobileTab };

// 중립 글자색 지정. Mantine 기본 gray 는 프로젝트 시맨틱 토큰을 따르지 않음
export const SUBTLE = "var(--semantic-fg-neutral-subtle)";
export const BORDER = "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)";

// 현재 탭, 뒤로 가기, 앱 바 아바타의 브랜드 색을 시맨틱 토큰으로 지정. 생성 테마 다크 팔레트에서 Mantine light, subtle 변형 글자색이 바탕과 같은 어둠이 되는 문제 있음
const BRAND_FG = "var(--semantic-fg-brand-default)";
const BRAND_SOFT = { color: BRAND_FG, background: "var(--semantic-bg-brand-subtlest)" } as const;

// 앱 바 오른쪽 계정 아바타의 글자, 바탕에 시맨틱 브랜드 토큰 적용
export function AppBarAvatar({ initial, mx }: { initial: string; mx?: string }) {
  return <Avatar radius="xl" size="2rem" mx={mx} styles={{ placeholder: BRAND_SOFT }}>{initial}</Avatar>;
}

// Mantine 입력 Component 의 터치 칸 44px 확보. 체크박스, 라디오는 몸통을 label 로 세우고, 숫자 입력은 증감 단추 칸만 면제하고, 칩은 크기 변수만 44px 로 지정함
const TOUCH_ROW = { minHeight: TOUCH, alignItems: "center", cursor: "pointer" } as const;
const INLINE_AS_LABEL = { bodyElement: "label", labelElement: "span" } as const;
const EXEMPT_SECTION = { [TOUCH_EXEMPT]: "" } as React.ComponentPropsWithoutRef<"div">;

function mobileTheme(box: PopupSafeBox | null): MantineThemeOverride {
  // Popover 기본 middlewares 의 shift, flip 에 네 변 Padding 지정. Select, Menu 등 뜨는 요소가 모두 Popover 를 거치고, flip 에도 같은 값을 줘야 아래가 모자랄 때 위로 넘어가기 때문임
  const padding = box ? { top: box.top, right: box.right, bottom: box.bottom, left: box.left } : undefined;
  const md = { defaultProps: { size: "md" } } as const;
  return createTheme({
    components: {
      ...(padding ? { Popover: { defaultProps: { middlewares: { shift: { padding }, flip: { padding } } } } } : {}),
      // 입력, 단추 크기를 md 로 지정. 글자 16px 라 iOS 의 입력 칸 확대를 막고, 남는 2px 은 공용 CSS 가 처리함
      TextInput: TextInput.extend(md),
      Select: Select.extend(md),
      MultiSelect: MultiSelect.extend(md),
      ColorInput: ColorInput.extend(md),
      FileInput: FileInput.extend(md),
      NativeSelect: NativeSelect.extend(md),
      Textarea: Textarea.extend(md),
      Button: Button.extend(md),
      // SegmentedControl 크기를 lg 로 지정. md 는 칸 높이가 39px 라 44px 에 못 미침
      SegmentedControl: SegmentedControl.extend({ defaultProps: { size: "lg" } }),
      NumberInput: NumberInput.extend({ defaultProps: { size: "md", rightSectionProps: EXEMPT_SECTION } }),
      Checkbox: Checkbox.extend({ defaultProps: { wrapperProps: INLINE_AS_LABEL }, styles: { body: { ...TOUCH_ROW, minWidth: TOUCH } } }),
      Radio: Radio.extend({ defaultProps: { wrapperProps: INLINE_AS_LABEL }, styles: { body: { ...TOUCH_ROW, minWidth: TOUCH } } }),
      Switch: Switch.extend({ styles: { body: TOUCH_ROW } }),
      Chip: Chip.extend({ defaultProps: { size: "md" }, vars: () => ({ root: { "--chip-size": TOUCH } }) }),
    },
  });
}

// 모바일 껍데기 안에서만 쓰는 Mantine 테마 한 겹 제공. 팝업 안전 상자와 모바일 크기 기본값을 담음
export function MantineMobileTheme({ children }: { children: React.ReactNode }) {
  const box = usePopupSafeBox();
  const theme = React.useMemo(() => mobileTheme(box), [box]);
  return <MantineThemeProvider theme={theme}>{children}</MantineThemeProvider>;
}

// portal 로 body 에 붙는 목록, 메뉴 항목에 껍데기가 떠 있는 동안만 최소 44px 적용. 껍데기 밖이라 공용 규칙이 안 닿고, 이 문자열 안에는 백틱 사용 금지
const PORTAL_CSS = `
html[data-ods-mobile] :is([data-combobox-option], .mantine-Menu-item) {
  min-height: 2.75rem;
}
html[data-ods-mobile] [data-combobox-option] {
  display: flex;
  align-items: center;
}
`;

// 탭바 칸의 Mantine Button 배치를 아이콘 위, 글자 아래의 세로 배치로 변환
const TAB_STYLES = {
  root: { height: "auto", minHeight: TAB_MIN_HEIGHT, paddingInline: "0.25rem", paddingBlock: "0.375rem", flex: "1 1 0", minWidth: 0 },
  inner: { flexDirection: "column", gap: "0.25rem" },
  section: { marginInlineEnd: 0 },
  label: { maxWidth: "100%" },
} as const;

export interface MantineMobileShellProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  // 값이 있으면 앱 바 왼쪽에 44px 뒤로 가기 버튼 표시. 목록에서 들어온 상세 화면용임
  onBack?: () => void;
  // 앱 바 오른쪽 알림, 계정 버튼 배치
  trailing?: React.ReactNode;
  tabs: readonly MobileTab[];
  activeKey: string;
  onSelect: (key: string) => void;
  // 값이 바뀌면 본문 스크롤을 맨 위로 이동. 탭 키와 고른 항목을 넣음
  scrollKeys: readonly unknown[];
  children: React.ReactNode;
}

export function MantineMobileShell({
  title, subtitle, onBack, trailing, tabs, activeKey, onSelect, scrollKeys, children,
}: MantineMobileShellProps) {
  const header = (
    <MantineMobileTheme>
      <Group wrap="nowrap" gap="0.25rem" px="0.5rem" py="0.25rem" style={{ borderBottom: BORDER }}>
        {onBack ? (
          <ActionIcon size="xl" variant="subtle" color="brand" aria-label="뒤로 가기" onClick={onBack} style={{ color: BRAND_FG }}>
            <ChevronLeft size={24} aria-hidden />
          </ActionIcon>
        ) : (
          <span
            aria-hidden
            style={{ width: "1.25rem", height: "1.25rem", marginInline: "0.5rem", borderRadius: "0.25rem", background: "var(--semantic-bg-brand-default)", flexShrink: 0 }}
          />
        )}
        <Stack gap={0} style={{ flex: 1, minWidth: 0 }}>
          <Text fw={600} size="md" truncate>{title}</Text>
          {subtitle ? <Text size="xs" truncate style={{ color: SUBTLE }}>{subtitle}</Text> : null}
        </Stack>
        {trailing ? <Group gap="0.25rem" wrap="nowrap">{trailing}</Group> : null}
      </Group>
    </MantineMobileTheme>
  );

  const footer = (
    <MantineMobileTheme>
      <BottomTabs
        tabs={tabs}
        activeKey={activeKey}
        onSelect={onSelect}
        renderTab={(tab, active, itemProps) => (
          <Button
            {...itemProps}
            variant="subtle"
            color="brand"
            radius="md"
            m="0.25rem"
            fz="xs"
            fw={active ? 700 : 500}
            leftSection={tab.icon}
            styles={TAB_STYLES}
            style={active ? BRAND_SOFT : { color: SUBTLE }}
          >
            {tab.label}
          </Button>
        )}
      />
    </MantineMobileTheme>
  );

  return (
    <MobileFrame header={header} footer={footer} scrollKeys={scrollKeys} extraCss={PORTAL_CSS}>
      <MantineMobileTheme>{children}</MantineMobileTheme>
    </MobileFrame>
  );
}
