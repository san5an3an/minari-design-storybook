// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/datepicker/TimeField.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, TimeField, useDateFormatter } from "@adobe/react-spectrum";
import { Time, parseAbsoluteToLocal, parseZonedDateTime } from '@internationalized/date';

function Example1() {
  return (
    <>
    <TimeField label="Event time" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(new Time(11, 45));

  return (
    <Flex gap="size-150" wrap>
      <TimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(11, 45)} />
      <TimeField
        label="Time (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <TimeField
      label="Event time"
      defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')} />
    </>
  );
}

function Example4() {
  return (
    <>
    <TimeField
      label="Event time"
      defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
    />
    </>
  );
}

function Example5() {
  return (
    <>
    <TimeField
      label="Event time"
      granularity="second"
      defaultValue={parseAbsoluteToLocal('2021-04-07T18:45:22Z')} />
    </>
  );
}

function Example6() {
  return (
    <>
    <TimeField label="Meeting time" name="meetingTime" />
    </>
  );
}

function Example7() {
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

function Example_2() {
  let [date, setDate] = React.useState(parseAbsoluteToLocal('2021-04-07T18:45:22Z'));
  let formatter = useDateFormatter({dateStyle: 'long', timeStyle: 'long'});

  return (
    <>
      <TimeField label="Time" value={date} onChange={setDate} />
      <p>Selected date and time: {(date?.toDate && formatter.format(date.toDate())) || (date && date.toString()) || '--'}</p>
    </>
  );
}

function Example9() {
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

function Example10() {
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

function Example11() {
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

function Example12() {
  return (
    <>
    <TimeField label="Event time" isQuiet />
    </>
  );
}

function Example13() {
  return (
    <>
    <TimeField label="Event time" isDisabled />
    </>
  );
}

function Example14() {
  return (
    <>
    <TimeField label="Event time" value={new Time(11)} isReadOnly />
    </>
  );
}

function Example15() {
  return (
    <>
    <TimeField label="Event time" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example16() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <TimeField label="Time" defaultValue={new Time(9)} validationState="valid" description="Select a meeting time." />
      <TimeField label="Time" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example17() {
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

function Example18() {
  return (
    <>
    <TimeField label="Appointment time" placeholderValue={new Time(9)} />
    </>
  );
}

function Example19() {
  return (
    <>
    <TimeField
      label="Appointment time"
      defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
      hideTimeZone />
    </>
  );
}

function Example20() {
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
  "value-1": Example,
  "value-2": Example3,
  "value-3": Example4,
  "value-4": Example5,
  "value-5": Example6,
  "labeling-1": Example7,
  "events-1": Example_2,
  "validation-1": Example9,
  "validation-2": Example10,
  "validation-3": Example11,
  "visual-options-1": Example12,
  "visual-options-2": Example13,
  "visual-options-3": Example14,
  "visual-options-4": Example15,
  "visual-options-5": Example16,
  "visual-options-6": Example17,
  "visual-options-7": Example18,
  "visual-options-8": Example19,
  "visual-options-9": Example20,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
