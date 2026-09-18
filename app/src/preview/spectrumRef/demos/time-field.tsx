// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/TimeField.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, TimeField, useDateFormatter } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <TimeField label="Event time" />
    </>
  );
}

function Example2() {
  return (
    <>
    <TimeField
      label="Event time"
      granularity="second"
      defaultValue={parseAbsoluteToLocal('2021-04-07T18:45:22Z')} />
    </>
  );
}

function Example3() {
  return (
    <>
    <TimeField label="Meeting time" name="meetingTime" />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <TimeField label="Event time" />
      <TimeField label="Event time" isRequired necessityIndicator="icon" />
      <TimeField label="Event time" isRequired necessityIndicator="label" />
      <TimeField label="Event time" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example() {
  let [date, setDate] = React.useState(parseAbsoluteToLocal('2021-04-07T18:45:22Z'));
  let formatter = useDateFormatter({dateStyle: 'long', timeStyle: 'long'});

  return (
    <>
      <TimeField label="Time" value={date} onChange={setDate} />
      <p>Selected date and time: {(date?.toDate && formatter.format(date.toDate())) || (date && date.toString()) || '--'}</p>
    </>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <TimeField label="Meeting time" name="time" isRequired />
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
      <TimeField
        label="Meeting time"
        /*- begin highlight -*/
        minValue={new Time(9)}
        maxValue={new Time(17)}
        /*- end highlight -*/
        defaultValue={new Time(8)} />
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
    <Form validationBehavior="native" maxWidth="size-3000">
      <TimeField
        label="Meeting time"
        /*- begin highlight -*/
        validate={time => time?.minute % 15 !== 0 ? 'Meetings start every 15 minutes.' : null}
        /*- end highlight -*/
        defaultValue={new Time(9, 25)} />
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example9() {
  return (
    <>
    <TimeField label="Event time" isQuiet />
    </>
  );
}

function Example10() {
  return (
    <>
    <TimeField label="Event time" isDisabled />
    </>
  );
}

function Example11() {
  return (
    <>
    <TimeField label="Event time" value={new Time(11)} isReadOnly />
    </>
  );
}

function Example12() {
  return (
    <>
    <TimeField label="Event time" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example13() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <TimeField label="Time" defaultValue={new Time(9)} validationState="valid" description="Select a meeting time." />
      <TimeField label="Time" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example14() {
  return (
    <>
    <TimeField
      label="Appointment time"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Appointment changes</Heading>
          <Content>Your appointment time cannot be changed once it is scheduled.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example15() {
  return (
    <>
    <TimeField label="Appointment time" placeholderValue={new Time(9)} />
    </>
  );
}

function Example16() {
  return (
    <>
    <TimeField
      label="Appointment time"
      defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
      hideTimeZone />
    </>
  );
}

function Example17() {
  return (
    <>
    <TimeField
      label="Appointment time"
      hourCycle={24} />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-4": Example2,
  "value-5": Example3,
  "labeling-1": Example4,
  "events-1": Example,
  "validation-1": Example6,
  "validation-2": Example7,
  "validation-3": Example8,
  "visual-options-1": Example9,
  "visual-options-2": Example10,
  "visual-options-3": Example11,
  "visual-options-4": Example12,
  "visual-options-5": Example13,
  "visual-options-6": Example14,
  "visual-options-7": Example15,
  "visual-options-8": Example16,
  "visual-options-9": Example17,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "value-1": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 Time(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-2": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseZonedDateTime(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
  "value-3": { code: "other", detail: "\ubaa8\ub974\ub294 \uc774\ub984\uc744 \uac00\uc838\uc640\uc694 \u2014 parseAbsoluteToLocal(\uc9d1\ud569 \ud328\ud0a4\uc9c0 export \ud45c\uc5d0 \uc5c6\uc5b4\uc694)." },
};
