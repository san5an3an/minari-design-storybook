// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/calendar/RangeCalendar.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Flex, Provider, RangeCalendar, useDateFormatter, useLocale } from "@adobe/react-spectrum";
import { CalendarDate, getLocalTimeZone, isWeekend, parseDate, today } from '@internationalized/date';

function Example1() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-12')
  });

  return (
    <Flex gap="size-300" wrap>
      <RangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-12')
        }} />
      <RangeCalendar
        aria-label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example_2() {
  let [range, setRange] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <RangeCalendar aria-label="Date range" value={range} onChange={setRange} />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </Provider>
  );
}

function Example_3() {
  let [range, setRange] = React.useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({dateStyle: 'long'});

  return (
    <>
      <RangeCalendar aria-label="Date range" value={range} onChange={setRange} />
      <p>
        Selected date:{' '}
        {formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone())
        )}
      </p>
    </>
  );
}

function Example5() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" minValue={today(getLocalTimeZone())} />
    </>
  );
}

function Example_4() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({days: 5})],
    [now.add({days: 14}), now.add({days: 16})],
    [now.add({days: 23}), now.add({days: 24})],
  ];

  let isDateUnavailable = (date) => disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0);

  return <RangeCalendar aria-label="Trip dates" minValue={today(getLocalTimeZone())} isDateUnavailable={isDateUnavailable} />
}

function Example_5() {
  let {locale} = useLocale();

  return <RangeCalendar aria-label="Time off request" isDateUnavailable={date => isWeekend(date, locale)} allowsNonContiguousRanges />
}

function Example_6() {
  let defaultDate = new CalendarDate(2021, 7, 1);
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  return (
    <Flex direction="column" alignItems="start" gap="size-200">
      <ActionButton onPress={() => setFocusedDate(defaultDate)}>Reset focused date</ActionButton>
      <RangeCalendar focusedValue={focusedDate} onFocusChange={setFocusedDate} />
    </Flex>
  );
}

function Example9() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" isDisabled />
    </>
  );
}

function Example10() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" value={{start: today(getLocalTimeZone()), end: today(getLocalTimeZone()).add({ weeks: 1 })}} isReadOnly />
    </>
  );
}

function Example11() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <RangeCalendar aria-label="Trip dates" visibleMonths={3} />
    </div>
    </>
  );
}

function Example12() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <RangeCalendar aria-label="Trip dates" visibleMonths={3} pageBehavior="single" />
    </div>
    </>
  );
}

function Example13() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <RangeCalendar aria-label="Trip dates" firstDayOfWeek="mon" />
    </div>
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "international-calendars": Example_2,
  "events": Example_3,
  "validation": Example5,
  "unavailable-dates": Example_4,
  "non-contiguous-ranges": Example_5,
  "controlling-the-focused-date": Example_6,
  "disabled": Example9,
  "read-only": Example10,
  "visible-months": Example11,
  "page-behavior": Example12,
  "custom-first-day-of-week": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "custom-calendar-systems": { code: "runtime-unavailable", detail: "공식 예제가 라이브러리 클래스를 상속한 **제 달력 체계**를 만드는데, 우리 번들에서는 `Class constructor … cannot be invoked without 'new'` 로 터져요(설치본에 `@internationalized/date` 사본이 5벌 있어 상속 사슬이 갈려요). 공식 코드는 그대로 두고 까닭만 적어요." },
};
