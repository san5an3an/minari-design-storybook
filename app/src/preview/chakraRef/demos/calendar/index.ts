/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./date-picker-calendar-basic";
import * as m001 from "./date-picker-calendar-with-sizes";
import * as m002 from "./date-picker-calendar-hide-outside-days";
import * as m003 from "./date-picker-calendar-controlled";
import * as m004 from "./date-picker-calendar-default-value";
import * as m005 from "./date-picker-calendar-range-selection";
import * as m006 from "./date-picker-calendar-multi-selection";
import * as m007 from "./date-picker-calendar-min-max";
import * as m008 from "./date-picker-calendar-unavailable";
import * as m009 from "./date-picker-calendar-multiple-months";
import * as m010 from "./date-picker-calendar-locale";
import * as m011 from "./date-picker-calendar-max-selected";
import * as m012 from "./date-picker-calendar-week-numbers";
import * as m013 from "./date-picker-with-time-grid";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "date-picker-calendar-basic": m000.DatePickerCalendarBasic,
  "date-picker-calendar-with-sizes": m001.DatePickerCalendarWithSizes,
  "date-picker-calendar-hide-outside-days": m002.DatePickerCalendarHideOutsideDays,
  "date-picker-calendar-controlled": m003.DatePickerCalendarControlled,
  "date-picker-calendar-default-value": m004.DatePickerCalendarDefaultValue,
  "date-picker-calendar-range-selection": m005.DatePickerCalendarRangeSelection,
  "date-picker-calendar-multi-selection": m006.DatePickerCalendarMultiSelection,
  "date-picker-calendar-min-max": m007.DatePickerCalendarMinMax,
  "date-picker-calendar-unavailable": m008.DatePickerCalendarUnavailable,
  "date-picker-calendar-multiple-months": m009.DatePickerCalendarMultipleMonths,
  "date-picker-calendar-locale": m010.DatePickerCalendarLocale,
  "date-picker-calendar-max-selected": m011.DatePickerCalendarMaxSelected,
  "date-picker-calendar-week-numbers": m012.DatePickerCalendarWeekNumbers,
  "date-picker-with-time-grid": m013.DatePickerWithTimeGrid,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
