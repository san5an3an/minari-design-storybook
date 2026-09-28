// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/DateField.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, DateField, Flex, Form, Heading, Provider, useDateFormatter, useLocale } from "@adobe/react-spectrum";
import { CalendarDate, getLocalTimeZone, isWeekend, now, parseAbsoluteToLocal, parseDate, parseZonedDateTime, today } from '@internationalized/date';

function Example1() {
  return (
    <>
    <DateField label="Event date" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseDate('2020-02-03'));

  return (
    <Flex gap="size-150" wrap>
      <DateField
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')} />
      <DateField
        label="Date (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <DateField
      label="Event date"
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')} />
    </>
  );
}

function Example4() {
  return (
    <>
    <DateField
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
      <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate} />
      <DateField
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
      <DateField
        label="Event date"
        granularity="second" />
      <DateField
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
      <DateField label="Date" value={date} onChange={setDate} />
      <p>Selected date: {date?.toString()}</p>
    </Provider>
  );
}

function Example8() {
  return (
    <>
    <DateField label="Birth date" name="birthday" />
    </>
  );
}

function Example9() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <DateField label="Birth date" />
      <DateField label="Birth date" isRequired necessityIndicator="icon" />
      <DateField label="Birth date" isRequired necessityIndicator="label" />
      <DateField label="Birth date" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example_4() {
  let [date, setDate] = React.useState(parseDate('1985-07-03'));
  let formatter = useDateFormatter({dateStyle: 'full'});

  return (
    <>
      <DateField label="Birth date" value={date} onChange={setDate} />
      <p>Selected date: {date ? formatter.format(date.toDate(getLocalTimeZone())): '--'}</p>
    </>
  );
}

function Example11() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <DateField label="Appointment date" name="date" isRequired />
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
      <DateField
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
  let {locale} = useLocale();

  return (
    <Form validationBehavior="native" maxWidth="size-3000">
      <DateField
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

function Example14() {
  return (
    <>
    <DateField label="Birth date" isQuiet />
    </>
  );
}

function Example15() {
  return (
    <>
    <DateField label="Birth date" isDisabled />
    </>
  );
}

function Example16() {
  return (
    <>
    <DateField label="Birth date" value={today(getLocalTimeZone())} isReadOnly />
    </>
  );
}

function Example17() {
  return (
    <>
    <DateField label="Birth date" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example18() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <DateField label="Date" defaultValue={today(getLocalTimeZone())} validationState="valid" description="Select a meeting date." />
      <DateField label="Date" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example19() {
  return (
    <>
    <DateField label="Birth date" showFormatHelpText />
    </>
  );
}

function Example20() {
  return (
    <>
    <DateField
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

function Example21() {
  return (
    <>
    <DateField label="Birth date" placeholderValue={new CalendarDate(1980, 1, 1)} />
    </>
  );
}

function Example22() {
  return (
    <>
    <DateField
      label="Appointment time"
      defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
      hideTimeZone />
    </>
  );
}

function Example23() {
  return (
    <>
    <DateField
      label="Appointment time"
      granularity="minute"
      hourCycle={24} />
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
  "value-7": Example8,
  "labeling-1": Example9,
  "events-1": Example_4,
  "validation-1": Example11,
  "validation-2": Example12,
  "validation-3": Example_5,
  "visual-options-1": Example14,
  "visual-options-2": Example15,
  "visual-options-3": Example16,
  "visual-options-4": Example17,
  "visual-options-5": Example18,
  "visual-options-6": Example19,
  "visual-options-7": Example20,
  "visual-options-8": Example21,
  "visual-options-9": Example22,
  "visual-options-10": Example23,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
