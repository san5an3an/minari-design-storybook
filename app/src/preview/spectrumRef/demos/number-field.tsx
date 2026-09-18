// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/numberfield/NumberField.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, NumberField } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <NumberField label="Width" defaultValue={1024} minValue={0}  />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(15);

  return (
    <Flex gap="size-150" wrap>
      <NumberField
        label="Cookies (Uncontrolled)"
        defaultValue={15}
        minValue={0} />

      <NumberField
        label="Cookies (Controlled)"
        value={value}
        onChange={setValue}
        minValue={0} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <NumberField
      label="Transaction amount"
      name="amount"
      defaultValue={45}
      formatOptions={{
        style: 'currency',
        currency: 'USD'
      }} />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <NumberField label="Cookies" minValue={0} />
      <NumberField label="Cookies" isRequired necessityIndicator="icon" minValue={0}  />
      <NumberField label="Cookies" isRequired necessityIndicator="label" minValue={0}  />
      <NumberField label="Cookies" necessityIndicator="label" minValue={0}  />
    </Flex>
    </>
  );
}

function Example5() {
  return (
    <>
    <NumberField
      label="Adjust exposure"
      formatOptions={{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
      }}
      defaultValue={0} />
    </>
  );
}

function Example6() {
  return (
    <>
    <NumberField
      label="Sales tax"
      formatOptions={{style: 'percent'}}
      minValue={0}
      defaultValue={0.05} />
    </>
  );
}

function Example7() {
  return (
    <>
    <NumberField
      label="Transaction amount"
      defaultValue={45}
      formatOptions={{
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'code',
        currencySign: 'accounting'
      }} />
    </>
  );
}

function Example8() {
  return (
    <>
    <NumberField
      label="Package width"
      defaultValue={4}
      minValue={0}
      formatOptions={{
        style: 'unit',
        unit: 'inch',
        unitDisplay: 'long'
      }} />
    </>
  );
}

function Example9() {
  return (
    <>
    <NumberField
      label="Enter your age"
      minValue={0} />
    </>
  );
}

function Example10() {
  return (
    <>
    <Flex direction="column" gap="size-150">
      <NumberField
        label="Step"
        step={10} />
      <NumberField
        label="Step + minValue"
        minValue={2}
        step={3} />
      <NumberField
        label="Step + minValue + maxValue"
        minValue={2}
        maxValue={21}
        step={3} />
    </Flex>
    </>
  );
}

function Example_2() {
  let [value, setValue] = React.useState(null);

  return (
    <Flex direction="column" gap="size-150">
      <NumberField
        onChange={setValue}
        label="Number of cookies to buy"
        minValue={0} />
      <pre>How many cookies you are ordering: {isNaN(value) ? 0 : value}</pre>
    </Flex>
  );
}

function Example12() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <NumberField label="Width" name="width" isRequired />
      {/*- end highlight -*/}
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
    <NumberField label="Cookies" isQuiet minValue={0} />
    </>
  );
}

function Example14() {
  return (
    <>
    <NumberField label="Cookies" hideStepper minValue={0} />
    </>
  );
}

function Example15() {
  return (
    <>
    <NumberField label="Cookies" isDisabled minValue={0} />
    </>
  );
}

function Example16() {
  return (
    <>
    <NumberField label="Cookies" defaultValue={15} isReadOnly minValue={0} />
    </>
  );
}

function Example17() {
  return (
    <>
    <NumberField label="Cookies" labelPosition="side" labelAlign="end" minValue={0} />
    </>
  );
}

function Example_3() {
  let [value, setValue] = React.useState(1);
  let isValid = React.useMemo(() => value > 0 || Number.isNaN(value), [value]);

  return (
    <NumberField
      validationState={Number.isNaN(value) ? undefined : (isValid ? 'valid' : 'invalid')}
      value={value}
      onChange={setValue}
      label="Positive numbers only"
      description="Enter a positive number."
      errorMessage={value === 0 ? 'Is zero positive?' : 'Positive numbers are bigger than 0.'}
    />
  );
}

function Example19() {
  return (
    <>
    <NumberField
      label="Exposure"
      formatOptions={{
        signDisplay: 'exceptZero',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
      }}
      defaultValue={0}
      contextualHelp={
        <ContextualHelp>
          <Heading>What is exposure?</Heading>
          <Content>Exposure adjusts how bright the image is.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example20() {
  return (
    <>
    <NumberField label="Cookies" width="size-3600" maxWidth="100%" minValue={0} />
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "html-forms": Example3,
  "labeling": Example4,
  "decimals": Example5,
  "percentages": Example6,
  "currency-values": Example7,
  "units": Example8,
  "minimum-and-maximum-values": Example9,
  "step-values": Example10,
  "events": Example_2,
  "validation": Example12,
  "quiet": Example13,
  "hidden-steppers": Example14,
  "disabled": Example15,
  "read-only": Example16,
  "label-alignment-and-position": Example17,
  "help-text": Example_3,
  "contextual-help": Example19,
  "custom-width": Example20,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
