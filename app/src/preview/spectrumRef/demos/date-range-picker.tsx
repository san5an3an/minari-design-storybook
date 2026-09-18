// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/DateRangePicker.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, DateRangePicker, Flex, Form, Heading, Provider } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <DateRangePicker label="Date range" />
    </>
  );
}

function Example() {
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

function Example_2() {
  let [range, setRange] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </Provider>
  );
}

function Example4() {
  return (
    <>
    <DateRangePicker label="Trip dates" startName="startDate" endName="endDate" />
    </>
  );
}

function Example5() {
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

function Example6() {
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

function Example7() {
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

function Example8() {
  return (
    <>
    <DateRangePicker label="Date range" isQuiet />
    </>
  );
}

function Example9() {
  return (
    <>
    <DateRangePicker label="Date range" isDisabled />
    </>
  );
}

function Example10() {
  return (
    <>
    <DateRangePicker label="Date range" value={{start: today(getLocalTimeZone()), end: today(getLocalTimeZone()).add({weeks: 1})}} isReadOnly />
    </>
  );
}

function Example11() {
  return (
    <>
    <DateRangePicker label="Date range" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example12() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <DateRangePicker label="Date range" defaultValue={{start: today(getLocalTimeZone()), end: today(getLocalTimeZone()).add({weeks: 1})}} validationState="valid" description="Select your trip dates." />
      <DateRangePicker label="Date range" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example13() {
  return (
    <>
    <DateRangePicker label="Date range" showFormatHelpText />
    </>
  );
}

function Example14() {
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

function Example15() {
  return (
    <>
    <DateRangePicker label="Date range" maxVisibleMonths={3} />
    </>
  );
}

function Example16() {
  return (
    <>
    <DateRangePicker label="Date range" maxVisibleMonths={3} pageBehavior="single" />
    </>
  );
}

function Example17() {
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

function Example18() {
  return (
    <>
    <DateRangePicker
      label="Date range"
      granularity="minute"
      hourCycle={24} />
    </>
  );
}

function Example19() {
  return (
    <>
    <DateRangePicker label="Date range" firstDayOfWeek="mon" />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-4": Example,
  "value-6": Example_2,
  "value-8": Example4,
  "labeling-1": Example5,
  "validation-1": Example6,
  "validation-3": Example7,
  "visual-options-1": Example8,
  "visual-options-2": Example9,
  "visual-options-3": Example10,
  "visual-options-4": Example11,
  "visual-options-5": Example12,
  "visual-options-6": Example13,
  "visual-options-7": Example14,
  "visual-options-9": Example15,
  "visual-options-10": Example16,
  "visual-options-11": Example17,
  "visual-options-12": Example18,
  "visual-options-13": Example19,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseDate(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-2": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseZonedDateTime(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-3": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseAbsoluteToLocal(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-5": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 now(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-7": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 GregorianCalendar(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "events-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 getLocalTimeZone(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation-2": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 today(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation-4": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 today(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation-5": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 isWeekend(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "visual-options-8": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 CalendarDate(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
