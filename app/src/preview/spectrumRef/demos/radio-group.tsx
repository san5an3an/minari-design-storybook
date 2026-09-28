// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/radio/RadioGroup.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, Radio, RadioGroup } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
    </>
  );
}

function Example() {
  let [selected, setSelected] = React.useState('yes');

  return (
    <Flex gap="size-300">
      <RadioGroup label="Are you a wizard? (uncontrolled)" defaultValue="yes">
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>

      <RadioGroup label="Are you a wizard? (controlled)" value={selected} onChange={setSelected}>
        <Radio value="yes">Yes</Radio>
        <Radio value="no">No</Radio>
      </RadioGroup>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <RadioGroup label="Favorite pet" name="pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-300" wrap>
      <RadioGroup label="Favorite avatar">
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
    
      <RadioGroup label="Favorite avatar" isRequired necessityIndicator="icon">
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
    
      <RadioGroup label="Favorite avatar" isRequired necessityIndicator="label">
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
    
      <RadioGroup label="Favorite avatar" necessityIndicator="label">
       <Radio value="wizard">Wizard</Radio>
       <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
    </Flex>
    </>
  );
}

function Example_2() {
  let [selected, setSelected] = React.useState(null);

  return (
    <>
      <RadioGroup label="Favorite avatar" value={selected} onChange={setSelected}>
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
      <div>You have selected: {selected}</div>
    </>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native">
      {/*- begin highlight -*/}
      <RadioGroup label="Favorite pet" name="pet" isRequired>
      {/*- end highlight -*/}
        <Radio value="dogs">Dog</Radio>
        <Radio value="cats">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
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
    <RadioGroup label="Favorite avatar" orientation="horizontal">
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
    </>
  );
}

function Example8() {
  return (
    <>
    <RadioGroup label="Favorite avatar" labelPosition="side" labelAlign="end">
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
    </>
  );
}

function Example_3() {
  let [selected, setSelected] = React.useState('dogs');
  let isValid = selected === 'dogs';

  return (
    <RadioGroup
      aria-label="Favorite pet"
      onChange={setSelected}
      isInvalid={!isValid}
      description="Please select a pet."
      errorMessage={
        selected === 'cats'
          ? 'No cats allowed.'
          : 'Please select dogs.'
      }>
      <Radio value="dogs">
        Dogs
      </Radio>
      <Radio value="cats">
        Cats
      </Radio>
      <Radio value="dragons">
        Dragons
      </Radio>
    </RadioGroup>
  );
}

function Example10() {
  return (
    <>
    <RadioGroup
      label="T-shirt size"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Size and fit</Heading>
          <Content>Our sizes run on the small side. Choose a size up from your usual.</Content>
        </ContextualHelp>
      }>
      <Radio value="S">Small</Radio>
      <Radio value="M">Medium</Radio>
      <Radio value="L">Large</Radio>
    </RadioGroup>
    </>
  );
}

function Example11() {
  return (
    <>
    <RadioGroup label="Favorite avatar" isDisabled>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
    </>
  );
}

function Example12() {
  return (
    <>
    <RadioGroup label="Favorite avatar">
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon" isDisabled>Dragon</Radio>
    </RadioGroup>
    </>
  );
}

function Example13() {
  return (
    <>
    <RadioGroup label="Favorite avatar" defaultValue="wizard" isReadOnly>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
    </>
  );
}

function Example14() {
  return (
    <>
    <RadioGroup label="Favorite avatar" defaultValue="dragon" isEmphasized>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example,
  "value-2": Example3,
  "labeling-1": Example4,
  "events-1": Example_2,
  "validation-1": Example6,
  "visual-options-1": Example7,
  "visual-options-2": Example8,
  "visual-options-3": Example_3,
  "visual-options-4": Example10,
  "visual-options-5": Example11,
  "visual-options-6": Example12,
  "visual-options-7": Example13,
  "visual-options-8": Example14,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
