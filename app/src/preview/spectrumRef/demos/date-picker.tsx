// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/DatePicker.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, DatePicker, Flex, Form, Heading, Provider, useDateFormatter, useLocale } from "@adobe/react-spectrum";
import { CalendarDate, getLocalTimeZone, isWeekend, now, parseAbsoluteToLocal, parseDate, parseZonedDateTime, today } from '@internationalized/date';

function Example1() {
  return (
    <>
    <DatePicker label="Event date" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseDate('2020-02-03'));

  return (
    <Flex gap="size-150" wrap>
      <DatePicker
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')} />
      <DatePicker
        label="Date (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <DatePicker
      label="Event date"
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')} />
    </>
  );
}

function Example4() {
  return (
    <>
    <DatePicker
      label="Event date"
      defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
    />
    </>
  );
}

function Example_2() {
  let [date, setDate] = React.useState(parseAbsoluteToLocal('2021-04-07T18:45:22Z'));

  return (
    <Flex gap="size-150" wrap>
      <DatePicker
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate} />
      <DatePicker
        label="Date"
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
      <DatePicker
        label="Event date"
        granularity="second" />
      <DatePicker
        label="Event date"
        placeholderValue={now('America/New_York')}
        granularity="second" />
    </Flex>
    </>
  );
}

function Example_3() {
  let [date, setDate] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DatePicker label="Date" value={date} onChange={setDate} />
      <p>Selected date: {date?.toString()}</p>
    </Provider>
  );
}

function Example8() {
  return (
    <>
    <DatePicker label="Birth date" name="birthday" />
    </>
  );
}

function Example9() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <DatePicker label="Birth date" />
      <DatePicker label="Birth date" isRequired necessityIndicator="icon" />
      <DatePicker label="Birth date" isRequired necessityIndicator="label" />
      <DatePicker label="Birth date" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example_4() {
  let [date, setDate] = React.useState(parseDate('1985-07-03'));
  let formatter = useDateFormatter({dateStyle: 'full'});

  return (
    <>
      <DatePicker label="Birth date" value={date} onChange={setDate} />
      <p>Selected date: {date ? formatter.format(date.toDate(getLocalTimeZone())) : '--'}</p>
    </>
  );
}

function Example11() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <DatePicker label="Appointment date" name="date" isRequired />
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
      <DatePicker
        label="Appointment date"
        /*- begin highlight -*/
        minValue={today(getLocalTimeZone())}
        /*- end highlight -*/
        defaultValue={parseDate('2022-02-03')} />
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

  let {locale} = useLocale();
  return (
    <DatePicker
      label="Appointment date"
      minValue={today(getLocalTimeZone())}
      /*- begin highlight -*/
      isDateUnavailable={date => isWeekend(date, locale) || disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0)}
      /*- end highlight -*/
      validationBehavior="native" />
  );
}

function Example_6() {
  let {locale} = useLocale();

  return (
    <Form validationBehavior="native" maxWidth="size-3000">
      <DatePicker
        label="Appointment date"
        /*- begin highlight -*/
        validate={date => date && isWeekend(date, locale) ? 'We are closed on weekends.' : null}
        /*- end highlight -*/
        defaultValue={parseDate('2023-10-28')} />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
  );
}

function Example15() {
  return (
    <>
    <DatePicker label="Birth date" isQuiet />
    </>
  );
}

function Example16() {
  return (
    <>
    <DatePicker label="Birth date" isDisabled />
    </>
  );
}

function Example17() {
  return (
    <>
    <DatePicker label="Birth date" value={today(getLocalTimeZone())} isReadOnly />
    </>
  );
}

function Example18() {
  return (
    <>
    <DatePicker label="Birth date" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example19() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <DatePicker label="Date" defaultValue={today(getLocalTimeZone())} validationState="valid" description="Select a meeting date." />
      <DatePicker label="Date" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example20() {
  return (
    <>
    <DatePicker label="Birth date" showFormatHelpText />
    </>
  );
}

function Example21() {
  return (
    <>
    <DatePicker
      label="Appointment date"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Appointment changes</Heading>
          <Content>Your appointment date cannot be changed once it is scheduled.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example22() {
  return (
    <>
    <DatePicker label="Birth date" placeholderValue={new CalendarDate(1980, 1, 1)} />
    </>
  );
}

function Example23() {
  return (
    <>
    <DatePicker label="Appointment date" maxVisibleMonths={3} />
    </>
  );
}

function Example24() {
  return (
    <>
    <DatePicker label="Appointment date" maxVisibleMonths={3} pageBehavior="single" />
    </>
  );
}

function Example25() {
  return (
    <>
    <DatePicker
      label="Appointment time"
      defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
      hideTimeZone />
    </>
  );
}

function Example26() {
  return (
    <>
    <DatePicker
      label="Appointment time"
      granularity="minute"
      hourCycle={24} />
    </>
  );
}

function Example27() {
  return (
    <>
    <DatePicker label="Appointment date" firstDayOfWeek="mon" />
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
  "validation-3": Example_5,
  "validation-4": Example_6,
  "visual-options-1": Example15,
  "visual-options-2": Example16,
  "visual-options-3": Example17,
  "visual-options-4": Example18,
  "visual-options-5": Example19,
  "visual-options-6": Example20,
  "visual-options-7": Example21,
  "visual-options-8": Example22,
  "visual-options-9": Example23,
  "visual-options-10": Example24,
  "visual-options-11": Example25,
  "visual-options-12": Example26,
  "visual-options-13": Example27,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value-7": { code: "runtime-unavailable", detail: "공식 예제가 라이브러리 클래스를 상속한 **제 달력 체계**를 만드는데, 우리 번들에서는 `Class constructor … cannot be invoked without 'new'` 로 터져요(설치본에 `@internationalized/date` 사본이 5벌 있어 상속 사슬이 갈려요). 공식 코드는 그대로 두고 까닭만 적어요." },
};
