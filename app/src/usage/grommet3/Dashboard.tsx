import * as React from "react";
import { Box, Button, Heading, Nav, Text } from "grommet";
import { Building2, Heart, MessageSquare } from "lucide-react";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

const SCREEN_ICON: Record<string, React.ComponentType<{ size?: number }>> = {
  listings: Building2,
  favorites: Heart,
  inquiries: MessageSquare,
};

export function GrommetUsage3({ system }: UsageDashboardProps) {
  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <Box
      direction="row"
      background="background-front"
      height="max(20rem, calc(100dvh - 9rem))"
      overflow="hidden"
      round="small"
      border={{ color: "border" }}
      elevation="medium"
    >
      <Nav
        background="background-back"
        border={{ side: "right", color: "border" }}
        width="8.25rem"
        flex={false}
        pad={{ vertical: "medium", horizontal: "small" }}
        gap="small"
      >
        <Box direction="row" align="center" gap="small" pad={{ horizontal: "small", bottom: "small" }}>
          <Box aria-hidden width="20px" height="20px" round="small" background="brand" flex={false} />
          <Text size="small" weight="bold" truncate>{system.name}</Text>
        </Box>
        {SCREENS.map((s) => {
          const Icon = SCREEN_ICON[s.key];
          const on = screenKey === s.key;
          return (
            <Button key={s.key} plain onClick={ => setScreenKey(s.key)} a11yTitle={s.label}>
              <Box
                direction="row"
                align="center"
                gap="small"
                height="40px"
                pad={{ horizontal: "small" }}
                round="small"
                background={on ? "active-background" : undefined}
              >
                {Icon ? (
                  <Box aria-hidden flex={false} justify="center">
                    <Icon size={16} />
                  </Box>
                ) : null}
                <Text size="small" weight={on ? "bold" : undefined} color={on ? "active-text" : "text-weak"} truncate>
                  {s.label}
                </Text>
              </Box>
            </Button>
          );
        })}
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
          <Text weight="bold">{system.name} 부동산</Text>
          <Box
            pad={{ horizontal: "small", vertical: "2px" }}
            round="small"
            background="background-contrast"
          >
            <Text size="small">{system.baseTitle}</Text>
          </Box>
        </Box>

        {/* flex={false} 지정. 없으면 본문이 눌려 패널이 4번째 카드 위로 겹칠 수 있음 */}
        <Box pad="medium" gap="medium" flex={false}>
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
