import * as m000 from "./basic";
import * as m001 from "./disabled";
import * as m002 from "./year-picker";
import * as m003 from "./default-value";
import * as m004 from "./controlled";
import * as m005 from "./min-max-dates";
import * as m006 from "./unavailable-dates";
import * as m007 from "./anchor-unavailable-dates";
import * as m008 from "./weeks-in-month";
import * as m009 from "./week-view";
import * as m010 from "./day-view";
import * as m011 from "./allows-non-contiguous-ranges";
import * as m012 from "./read-only";
import * as m013 from "./invalid";
import * as m014 from "./focused-value";
import * as m015 from "./with-indicators";
import * as m016 from "./booking-calendar";
import * as m017 from "./multiple-months";
import * as m018 from "./international-calendar";
import * as m019 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "disabled": m001.Disabled,
  "year-picker": m002.YearPicker,
  "default-value": m003.DefaultValue,
  "controlled": m004.Controlled,
  "min-max-dates": m005.MinMaxDates,
  "unavailable-dates": m006.UnavailableDates,
  "anchor-unavailable-dates": m007.AnchorUnavailableDates,
  "weeks-in-month": m008.WeeksInMonth,
  "week-view": m009.WeekView,
  "day-view": m010.DayView,
  "allows-non-contiguous-ranges": m011.AllowsNonContiguousRanges,
  "read-only": m012.ReadOnly,
  "invalid": m013.Invalid,
  "focused-value": m014.FocusedValue,
  "with-indicators": m015.WithIndicators,
  "booking-calendar": m016.BookingCalendar,
  "multiple-months": m017.MultipleMonths,
  "international-calendar": m018.InternationalCalendar,
  "custom-styles": m019.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
