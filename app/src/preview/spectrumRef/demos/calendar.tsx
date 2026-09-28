// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/calendar/Calendar.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Calendar, Flex, Provider, useDateFormatter, useLocale } from "@adobe/react-spectrum";
import { CalendarDate, getLocalTimeZone, isWeekend, parseDate, today } from '@internationalized/date';

function Example1() {
  return (
    <>
    <Calendar aria-label="Event date" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseDate('2020-02-03'));

  return (
    <Flex gap="size-300" wrap>
      <Calendar
        aria-label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')} />
      <Calendar
        aria-label="Date (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example_2() {
  let [date, setDate] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <Calendar aria-label="Date" value={date} onChange={setDate} />
      <p>Selected date: {date?.toString()}</p>
    </Provider>
  );
}

function Example_3() {
  let [date, setDate] = React.useState(parseDate('2022-07-04'));
  let formatter = useDateFormatter({dateStyle: 'full'});

  return (
    <>
      <Calendar aria-label="Event date" value={date} onChange={setDate} />
      <p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
    </>
  );
}

function Example5() {
  return (
    <>
    <Calendar aria-label="Appointment date" minValue={today(getLocalTimeZone())} />
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

  let {locale} = useLocale();
  let isDateUnavailable = (date) => isWeekend(date, locale) || disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0);

  return <Calendar aria-label="Appointment date" minValue={today(getLocalTimeZone())} isDateUnavailable={isDateUnavailable} />
}

function Example_5() {
  let defaultDate = new CalendarDate(2021, 7, 1);
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  return (
    <Flex direction="column" alignItems="start" gap="size-200">
      <ActionButton onPress={() => setFocusedDate(defaultDate)}>Reset focused date</ActionButton>
      <Calendar focusedValue={focusedDate} onFocusChange={setFocusedDate} />
    </Flex>
  );
}

function Example8() {
  return (
    <>
    <Calendar aria-label="Event date" isDisabled />
    </>
  );
}

function Example9() {
  return (
    <>
    <Calendar aria-label="Event date" value={today(getLocalTimeZone())} isReadOnly />
    </>
  );
}

function Example10() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <Calendar aria-label="Event date" visibleMonths={3} />
    </div>
    </>
  );
}

function Example11() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <Calendar aria-label="Event date" visibleMonths={3} pageBehavior="single" />
    </div>
    </>
  );
}

function Example12() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <Calendar aria-label="Event date" firstDayOfWeek="mon" />
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
  "controlling-the-focused-date": Example_5,
  "disabled": Example8,
  "read-only": Example9,
  "visible-months": Example10,
  "page-behavior": Example11,
  "custom-first-day-of-week": Example12,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "custom-calendar-systems": { code: "runtime-unavailable", detail: "공식 예제가 라이브러리 클래스를 상속한 **제 달력 체계**를 만드는데, 우리 번들에서는 `Class constructor … cannot be invoked without 'new'` 로 터져요(설치본에 `@internationalized/date` 사본이 5벌 있어 상속 사슬이 갈려요). 공식 코드는 그대로 두고 까닭만 적어요." },
};
