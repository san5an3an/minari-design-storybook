// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/DatePicker.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, DatePicker, Flex, Form, Heading, Provider } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <DatePicker label="Event date" />
    </>
  );
}

function Example() {
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

function Example_2() {
  let [date, setDate] = React.useState(null);
  return (
    <Provider locale="hi-IN-u-ca-indian">
      <DatePicker label="Date" value={date} onChange={setDate} />
      <p>Selected date: {date?.toString()}</p>
    </Provider>
  );
}

function Example4() {
  return (
    <>
    <DatePicker label="Birth date" name="birthday" />
    </>
  );
}

function Example5() {
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

function Example6() {
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

function Example7() {
  return (
    <>
    <DatePicker label="Birth date" isQuiet />
    </>
  );
}

function Example8() {
  return (
    <>
    <DatePicker label="Birth date" isDisabled />
    </>
  );
}

function Example9() {
  return (
    <>
    <DatePicker label="Birth date" value={today(getLocalTimeZone())} isReadOnly />
    </>
  );
}

function Example10() {
  return (
    <>
    <DatePicker label="Birth date" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <DatePicker label="Date" defaultValue={today(getLocalTimeZone())} validationState="valid" description="Select a meeting date." />
      <DatePicker label="Date" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <DatePicker label="Birth date" showFormatHelpText />
    </>
  );
}

function Example13() {
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

function Example14() {
  return (
    <>
    <DatePicker label="Appointment date" maxVisibleMonths={3} />
    </>
  );
}

function Example15() {
  return (
    <>
    <DatePicker label="Appointment date" maxVisibleMonths={3} pageBehavior="single" />
    </>
  );
}

function Example16() {
  return (
    <>
    <DatePicker
      label="Appointment time"
      defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
      hideTimeZone />
    </>
  );
}

function Example17() {
  return (
    <>
    <DatePicker
      label="Appointment time"
      granularity="minute"
      hourCycle={24} />
    </>
  );
}

function Example18() {
  return (
    <>
    <DatePicker label="Appointment date" firstDayOfWeek="mon" />
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
  "visual-options-1": Example7,
  "visual-options-2": Example8,
  "visual-options-3": Example9,
  "visual-options-4": Example10,
  "visual-options-5": Example11,
  "visual-options-6": Example12,
  "visual-options-7": Example13,
  "visual-options-9": Example14,
  "visual-options-10": Example15,
  "visual-options-11": Example16,
  "visual-options-12": Example17,
  "visual-options-13": Example18,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseDate(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-2": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseZonedDateTime(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-3": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseAbsoluteToLocal(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-5": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 now(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-7": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 GregorianCalendar(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "events-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 getLocalTimeZone(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation-2": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 today(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation-3": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 today, isWeekend(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "validation-4": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 isWeekend(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "visual-options-8": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 CalendarDate(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
