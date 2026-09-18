// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/calendar/RangeCalendar.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Flex, Provider, RangeCalendar } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" />
    </>
  );
}

function Example() {
  let [range, setRange] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <RangeCalendar aria-label="Date range" value={range} onChange={setRange} />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </Provider>
  );
}

function Example3() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" isDisabled />
    </>
  );
}

function Example4() {
  return (
    <>
    <RangeCalendar aria-label="Trip dates" value={{start: today(getLocalTimeZone()), end: today(getLocalTimeZone()).add({ weeks: 1 })}} isReadOnly />
    </>
  );
}

function Example5() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <RangeCalendar aria-label="Trip dates" visibleMonths={3} />
    </div>
    </>
  );
}

function Example6() {
  return (
    <>
    <div style={{maxWidth: '100%', overflow: 'auto'}}>
      <RangeCalendar aria-label="Trip dates" visibleMonths={3} pageBehavior="single" />
    </div>
    </>
  );
}

function Example7() {
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
  "international-calendars": Example,
  "disabled": Example3,
  "read-only": Example4,
  "visible-months": Example5,
  "page-behavior": Example6,
  "custom-first-day-of-week": Example7,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseDate(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "custom-calendar-systems": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 GregorianCalendar(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "events": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 getLocalTimeZone(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 today(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "unavailable-dates": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 today(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "non-contiguous-ranges": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 isWeekend(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "controlling-the-focused-date": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 CalendarDate(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
