import { FluentProvider } from "@fluentui/react-components";
import type { Theme } from "@fluentui/react-components";
import type { BaseRefProviderProps } from "../refContract";
import { byMode as s01 } from "../../../../generated/01-cobalt/base/fluent/theme";
import { byMode as s02 } from "../../../../generated/02-graphite/base/fluent/theme";
import { byMode as s03 } from "../../../../generated/03-ember/base/fluent/theme";
import { byMode as s04 } from "../../../../generated/04-jade/base/fluent/theme";
import { byMode as s05 } from "../../../../generated/05-plum/base/fluent/theme";
import { byMode as s06 } from "../../../../generated/06-slate/base/fluent/theme";
import { byMode as s07 } from "../../../../generated/07-emerald/base/fluent/theme";
import { byMode as s08 } from "../../../../generated/08-indigo/base/fluent/theme";
import { byMode as s09 } from "../../../../generated/09-sand/base/fluent/theme";
import { byMode as s10 } from "../../../../generated/10-teal/base/fluent/theme";
import { byMode as s11 } from "../../../../generated/11-crimson/base/fluent/theme";
import { byMode as s12 } from "../../../../generated/12-moss/base/fluent/theme";
import { byMode as s13 } from "../../../../generated/13-azure/base/fluent/theme";
import { byMode as s14 } from "../../../../generated/14-violet/base/fluent/theme";
import { byMode as s15 } from "../../../../generated/15-rust/base/fluent/theme";
import { byMode as s16 } from "../../../../generated/16-mint/base/fluent/theme";
import { byMode as s17 } from "../../../../generated/17-navy/base/fluent/theme";
import { byMode as s18 } from "../../../../generated/18-saffron/base/fluent/theme";
import { byMode as s19 } from "../../../../generated/19-fog/base/fluent/theme";
import { byMode as s20 } from "../../../../generated/20-berry/base/fluent/theme";

const THEMES: Record<string, Record<string, Theme>> = {
 "01-cobalt": s01, "02-graphite": s02, "03-ember": s03, "04-jade": s04, "05-plum": s05,
 "06-slate": s06, "07-emerald": s07, "08-indigo": s08, "09-sand": s09, "10-teal": s10,
 "11-crimson": s11, "12-moss": s12, "13-azure": s13, "14-violet": s14, "15-rust": s15,
 "16-mint": s16, "17-navy": s17, "18-saffron": s18, "19-fog": s19, "20-berry": s20,
};

export default function FluentRefProvider({ system, mode, children }: BaseRefProviderProps) {
 const theme = THEMES[system.slug]?.[mode];
 if (!theme) {
 return (
 <p className="doc-note" style={{ marginTop: 0 }}>
 <code>{system.slug}</code> · <code>{mode}</code> 의 fluent theme 생성물이 없어요.
 </p>
 );
 }
 return <FluentProvider theme={theme}>{children}</FluentProvider>;
}
