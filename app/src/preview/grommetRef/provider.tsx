import "grommet/es6/contexts/ThemeContext/ThemeContext";
import { Grommet } from "grommet";
import type { ThemeType } from "grommet";
import type { BaseRefProviderProps } from "../refContract";
import { byMode as s01 } from "../../../../generated/01-cobalt/base/grommet/theme";
import { byMode as s02 } from "../../../../generated/02-graphite/base/grommet/theme";
import { byMode as s03 } from "../../../../generated/03-ember/base/grommet/theme";
import { byMode as s04 } from "../../../../generated/04-jade/base/grommet/theme";
import { byMode as s05 } from "../../../../generated/05-plum/base/grommet/theme";
import { byMode as s06 } from "../../../../generated/06-slate/base/grommet/theme";
import { byMode as s07 } from "../../../../generated/07-emerald/base/grommet/theme";
import { byMode as s08 } from "../../../../generated/08-indigo/base/grommet/theme";
import { byMode as s09 } from "../../../../generated/09-sand/base/grommet/theme";
import { byMode as s10 } from "../../../../generated/10-teal/base/grommet/theme";
import { byMode as s11 } from "../../../../generated/11-crimson/base/grommet/theme";
import { byMode as s12 } from "../../../../generated/12-moss/base/grommet/theme";
import { byMode as s13 } from "../../../../generated/13-azure/base/grommet/theme";
import { byMode as s14 } from "../../../../generated/14-violet/base/grommet/theme";
import { byMode as s15 } from "../../../../generated/15-rust/base/grommet/theme";
import { byMode as s16 } from "../../../../generated/16-mint/base/grommet/theme";
import { byMode as s17 } from "../../../../generated/17-navy/base/grommet/theme";
import { byMode as s18 } from "../../../../generated/18-saffron/base/grommet/theme";
import { byMode as s19 } from "../../../../generated/19-fog/base/grommet/theme";
import { byMode as s20 } from "../../../../generated/20-berry/base/grommet/theme";

const THEMES: Record<string, Record<string, ThemeType>> = {
 "01-cobalt": s01, "02-graphite": s02, "03-ember": s03, "04-jade": s04, "05-plum": s05,
 "06-slate": s06, "07-emerald": s07, "08-indigo": s08, "09-sand": s09, "10-teal": s10,
 "11-crimson": s11, "12-moss": s12, "13-azure": s13, "14-violet": s14, "15-rust": s15,
 "16-mint": s16, "17-navy": s17, "18-saffron": s18, "19-fog": s19, "20-berry": s20,
};

const PROVIDER_ARG_KEYS = ["dir", "options"] as const;

export default function GrommetProvider({ system, mode, children, providerProps }: BaseRefProviderProps) {
 const theme = THEMES[system.slug]?.[mode];
 if (!theme) {
 return (
 <p className="doc-note" style={{ marginTop: 0 }}>
 <code>{system.slug}</code> · <code>{mode}</code> 의 grommet theme 생성물이 없어요.
 </p>
 );
 }
 const passed: Record<string, unknown> = {};
 for (const k of PROVIDER_ARG_KEYS) if (providerProps && k in providerProps) passed[k] = providerProps[k];
 return (
 <Grommet theme={theme} {...passed}>
 {children}
 </Grommet>
 );
}
