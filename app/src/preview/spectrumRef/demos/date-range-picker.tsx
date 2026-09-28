// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/DateRangePicker.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, DateRangePicker, Flex, Form, Heading, Provider, useDateFormatter, useLocale } from "@adobe/react-spectrum";
import { CalendarDate, getLocalTimeZone, isWeekend, now, parseAbsoluteToLocal, parseDate, parseZonedDateTime, today } from '@internationalized/date';

function Example1() {
  return (
    <>
    <DateRangePicker label="Date range" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08')
  });

  return (
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-08')
        }} />
      <DateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <DateRangePicker
      label="Date range"
      defaultValue={{
        start: parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]'),
        end: parseZonedDateTime('2022-11-08T11:15[America/Los_Angeles]')
      }} />
    </>
  );
}

function Example4() {
  return (
    <>
    <DateRangePicker
      label="Date range"
      defaultValue={{
        start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
        end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
      }}
    />
    </>
  );
}

function Example_2() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
    end: parseAbsoluteToLocal('2021-04-08T20:00:00Z')
  });

  return (
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date and time range"
        granularity="second"
        value={date}
        onChange={setDate} />
      <DateRangePicker
        label="Date range"
        granularity="day"
        value={date}
        onChange={setDate} />
    </Flex>
  );
}

function Example6() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <DateRangePicker
        label="Date range"
        granularity="second" />
      <DateRangePicker
        label="Date range"
        placeholderValue={now('America/New_York')}
        granularity="second" />
    </Flex>
    </>
  );
}

function Example_3() {
  let [range, setRange] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </Provider>
  );
}

function Example8() {
  return (
    <>
    <DateRangePicker label="Trip dates" startName="startDate" endName="endDate" />
    </>
  );
}

function Example9() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <DateRangePicker label="Date range" />
      <DateRangePicker label="Date range" isRequired necessityIndicator="icon" />
      <DateRangePicker label="Date range" isRequired necessityIndicator="label" />
      <DateRangePicker label="Date range" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example_4() {
  let [range, setRange] = React.useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({dateStyle: 'long'});

  return (
    <>
      <DateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>Selected date: {range ? formatter.formatRange(range.start.toDate(getLocalTimeZone()), range.end.toDate(getLocalTimeZone())) : '--'}</p>
    </>
  );
}

function Example11() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <DateRangePicker label="Date range" startName="startDate" endName="endDate" isRequired />
      {/*- end highlight -*/}
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example12() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      <DateRangePicker
        label="Trip dates"
        /*- begin highlight -*/
        minValue={today(getLocalTimeZone())}
        /*- end highlight -*/
        defaultValue={{
          start: parseDate('2022-02-03'),
          end: parseDate('2022-05-03')
        }} />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example13() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      <DateRangePicker
        label="Trip dates"
        /*- begin highlight -*/
        validate={range => range?.end.compare(range.start) > 7 ? 'Maximum stay duration is 1 week.' : null}
        /*- end highlight -*/
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 })
        }} />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example_5() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({days: 5})],
    [now.add({days: 14}), now.add({days: 16})],
    [now.add({days: 23}), now.add({days: 24})],
  ];

  return (
    <DateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())}
      /*- begin highlight -*/
      isDateUnavailable={date => disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0)}
      validate={value => disabledRanges.some(interval => value && value.end.compare(interval[0]) >= 0 && value.start.compare(interval[1]) <= 0) ? 'Selected date range may not include unavailable dates.' : null}
      /*- end highlight -*/
      validationBehavior="native" />
  );
}

function Example_6() {
  let {locale} = useLocale();

  return <DateRangePicker label="Time off request" isDateUnavailable={date => isWeekend(date, locale)} allowsNonContiguousRanges />
}

function Example16() {
  return (
    <>
    <DateRangePicker label="Date range" isQuiet />
    </>
  );
}

function Example17() {
  return (
    <>
    <DateRangePicker label="Date range" isDisabled />
    </>
  );
}

function Example18() {
  return (
    <>
    <DateRangePicker label="Date range" value={{start: today(getLocalTimeZone()), end: today(getLocalTimeZone()).add({weeks: 1})}} isReadOnly />
    </>
  );
}

function Example19() {
  return (
    <>
    <DateRangePicker label="Date range" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example20() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <DateRangePicker label="Date range" defaultValue={{start: today(getLocalTimeZone()), end: today(getLocalTimeZone()).add({weeks: 1})}} validationState="valid" description="Select your trip dates." />
      <DateRangePicker label="Date range" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example21() {
  return (
    <>
    <DateRangePicker label="Date range" showFormatHelpText />
    </>
  );
}

function Example22() {
  return (
    <>
    <DateRangePicker
      label="Trip dates"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Date changes</Heading>
          <Content>Your trip dates cannot be changed once scheduled.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example23() {
  return (
    <>
    <DateRangePicker label="Date range" placeholderValue={new CalendarDate(1980, 1, 1)} />
    </>
  );
}

function Example24() {
  return (
    <>
    <DateRangePicker label="Date range" maxVisibleMonths={3} />
    </>
  );
}

function Example25() {
  return (
    <>
    <DateRangePicker label="Date range" maxVisibleMonths={3} pageBehavior="single" />
    </>
  );
}

function Example26() {
  return (
    <>
    <DateRangePicker
      label="Date range"
      defaultValue={{
        start: parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]'),
        end: parseZonedDateTime('2022-11-08T19:45[America/Los_Angeles]')
      }}
      hideTimeZone />
    </>
  );
}

function Example27() {
  return (
    <>
    <DateRangePicker
      label="Date range"
      granularity="minute"
      hourCycle={24} />
    </>
  );
}

function Example28() {
  return (
    <>
    <DateRangePicker label="Date range" firstDayOfWeek="mon" />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example,
  "value-2": Example3,
  "value-3": Example4,
  "value-4": Example_2,
  "value-5": Example6,
  "value-6": Example_3,
  "value-8": Example8,
  "labeling-1": Example9,
  "events-1": Example_4,
  "validation-1": Example11,
  "validation-2": Example12,
  "validation-3": Example13,
  "validation-4": Example_5,
  "validation-5": Example_6,
  "visual-options-1": Example16,
  "visual-options-2": Example17,
  "visual-options-3": Example18,
  "visual-options-4": Example19,
  "visual-options-5": Example20,
  "visual-options-6": Example21,
  "visual-options-7": Example22,
  "visual-options-8": Example23,
  "visual-options-9": Example24,
  "visual-options-10": Example25,
  "visual-options-11": Example26,
  "visual-options-12": Example27,
  "visual-options-13": Example28,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value-7": { code: "runtime-unavailable", detail: "공식 예제가 라이브러리 클래스를 상속한 **제 달력 체계**를 만드는데, 우리 번들에서는 `Class constructor … cannot be invoked without 'new'` 로 터져요(설치본에 `@internationalized/date` 사본이 5벌 있어 상속 사슬이 갈려요). 공식 코드는 그대로 두고 까닭만 적어요." },
};
