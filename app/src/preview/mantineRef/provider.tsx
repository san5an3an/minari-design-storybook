import { MantineProvider } from "@mantine/core";
import type { MantineThemeOverride } from "@mantine/core";
import type { BaseRefProviderProps } from "../refContract";
import { byMode as s01 } from "../../../../generated/01-cobalt/base/mantine/theme";
import { byMode as s02 } from "../../../../generated/02-graphite/base/mantine/theme";
import { byMode as s03 } from "../../../../generated/03-ember/base/mantine/theme";
import { byMode as s04 } from "../../../../generated/04-jade/base/mantine/theme";
import { byMode as s05 } from "../../../../generated/05-plum/base/mantine/theme";
import { byMode as s06 } from "../../../../generated/06-slate/base/mantine/theme";
import { byMode as s07 } from "../../../../generated/07-emerald/base/mantine/theme";
import { byMode as s08 } from "../../../../generated/08-indigo/base/mantine/theme";
import { byMode as s09 } from "../../../../generated/09-sand/base/mantine/theme";
import { byMode as s10 } from "../../../../generated/10-teal/base/mantine/theme";
import { byMode as s11 } from "../../../../generated/11-crimson/base/mantine/theme";
import { byMode as s12 } from "../../../../generated/12-moss/base/mantine/theme";
import { byMode as s13 } from "../../../../generated/13-azure/base/mantine/theme";
import { byMode as s14 } from "../../../../generated/14-violet/base/mantine/theme";
import { byMode as s15 } from "../../../../generated/15-rust/base/mantine/theme";
import { byMode as s16 } from "../../../../generated/16-mint/base/mantine/theme";
import { byMode as s17 } from "../../../../generated/17-navy/base/mantine/theme";
import { byMode as s18 } from "../../../../generated/18-saffron/base/mantine/theme";
import { byMode as s19 } from "../../../../generated/19-fog/base/mantine/theme";
import { byMode as s20 } from "../../../../generated/20-berry/base/mantine/theme";

const THEMES: Record<string, Record<string, MantineThemeOverride>> = {
  "01-cobalt": s01, "02-graphite": s02, "03-ember": s03, "04-jade": s04, "05-plum": s05,
  "06-slate": s06, "07-emerald": s07, "08-indigo": s08, "09-sand": s09, "10-teal": s10,
  "11-crimson": s11, "12-moss": s12, "13-azure": s13, "14-violet": s14, "15-rust": s15,
  "16-mint": s16, "17-navy": s17, "18-saffron": s18, "19-fog": s19, "20-berry": s20,
};

export default function MantineRefProvider({ system, mode, children }: BaseRefProviderProps) {
  const theme = THEMES[system.slug]?.[mode];
  if (!theme) {
    return (
      <p className="doc-note" style={{ marginTop: 0 }}>
        <code>{system.slug}</code> · <code>{mode}</code> 의 mantine theme 생성물이 없어요.
      </p>
    );
  }
  return (
    <MantineProvider theme={theme} forceColorScheme={mode === "light" ? "light" : "dark"}>
      {children}
    </MantineProvider>
  );
}
