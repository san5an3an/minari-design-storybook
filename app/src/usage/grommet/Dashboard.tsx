import * as React from "react";
import { Box, Button, Heading, Nav, Text } from "grommet";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function GrommetUsage({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Box
      direction="row"
      background="background-front"
      // 뷰포트에 가두고 내부만 스크롤 적용
      height="max(20rem, calc(100dvh - 9rem))"
      overflow="hidden"
      round="small"
      border={{ color: "border" }}
      elevation="medium"
    >
      <Nav
        background="background-back"
        border={{ side: "right", color: "border" }}
        width="64px"
        flex={false}
        align="center"
        pad={{ vertical: "medium" }}
        gap="medium"
      >
        <Box aria-hidden width="28px" height="28px" round="small" background="brand" />
        {SCREENS.map((s) => (
          <Button
            key={s.key}
            plain
            onClick={ => setScreenKey(s.key)}
            a11yTitle={s.label}
            title={s.label}
          >
            <Box
              width="40px"
              height="40px"
              round="small"
              align="center"
              justify="center"
              background={screenKey === s.key ? "active-background" : undefined}
            >
              <Text
                size="small"
                weight={screenKey === s.key ? "bold" : undefined}
                color={screenKey === s.key ? "active-text" : "text-weak"}
              >
                {s.label.slice(0, 1)}
              </Text>
            </Box>
          </Button>
        ))}
      </Nav>

      <Box flex overflow={{ vertical: "auto" }}>
        <Box
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "small" }}
          border={{ side: "bottom", color: "border" }}
          flex={false}
        >
          <Text weight="bold">{system.name} 운영 콘솔</Text>
          <Box
            pad={{ horizontal: "small", vertical: "2px" }}
            round="small"
            background="background-contrast"
          >
            <Text size="small">{system.baseTitle}</Text>
          </Box>
        </Box>

        <Box pad="medium" gap="medium">
          <Box gap="2px">
            <Heading level={3} margin="none">{screen.label}</Heading>
            <Text color="text-weak">{screen.lede}</Text>
          </Box>
          <Screen />
        </Box>
      </Box>
    </Box>
  );
}
