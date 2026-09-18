// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/checkbox/CheckboxGroup.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Checkbox, CheckboxGroup, Content, ContextualHelp, Flex, Form, Heading } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <CheckboxGroup label="Favorite sports">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example() {
  let [selected, setSelected] = React.useState(['soccer', 'baseball']);

  return (
    <Flex gap="size-300">
      <CheckboxGroup label="Favorite sports (uncontrolled)" defaultValue={['soccer', 'baseball']}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup label="Favorite sports (controlled)" value={selected} onChange={setSelected}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <CheckboxGroup label="Condiments" name="condiments">
      <Checkbox value="mayo">Mayo</Checkbox>
      <Checkbox value="mustart">Mustard</Checkbox>
      <Checkbox value="ketchup">Ketchup</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-300" wrap>
      <CheckboxGroup label="Favorite sports">
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup label="Favorite sports" isRequired necessityIndicator="icon">
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup label="Favorite sports" isRequired necessityIndicator="label">
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup label="Favorite sports" necessityIndicator="label">
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
    </Flex>
    </>
  );
}

function Example_2() {
  let [selected, setSelected] = React.useState([]);

  return (
    <>
      <CheckboxGroup label="Favorite sports" value={selected} onChange={setSelected}>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroup>
      <div>You have selected: {selected.join(', ')}</div>
    </>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native">
      {/*- begin highlight -*/}
      <CheckboxGroup label="Sandwich condiments" name="condiments" isRequired>
      {/*- end highlight -*/}
        <Checkbox value="lettuce">Lettuce</Checkbox>
        <Checkbox value="tomato">Tomato</Checkbox>
        <Checkbox value="onion">Onion</Checkbox>
        <Checkbox value="sprouts">Sprouts</Checkbox>
      </CheckboxGroup>
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
    <Form validationBehavior="native">
      <CheckboxGroup label="Agree to the following" isRequired>
        {/*- begin highlight -*/}
        <Checkbox value="terms" isRequired>Terms and conditions</Checkbox>
        <Checkbox value="privacy" isRequired>Privacy policy</Checkbox>
        <Checkbox value="cookies" isRequired>Cookie policy</Checkbox>
        {/*- end highlight -*/}
      </CheckboxGroup>
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
    <CheckboxGroup label="Favorite sports" orientation="horizontal">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example9() {
  return (
    <>
    <CheckboxGroup label="Favorite sports" labelPosition="side" labelAlign="end">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example_3() {
  let [checked, setChecked] = React.useState(['dogs', 'dragons']);
  let isValid = checked.length === 2 && checked.includes('dogs') && checked.includes('dragons');

  return (
    <CheckboxGroup
      label="Pets"
      onChange={setChecked}
      value={checked}
      isInvalid={!isValid}
      description="Select your pets."
      errorMessage={
        checked.includes('cats')
          ? 'No cats allowed.'
          : 'Select only dogs and dragons.'
      }>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
    </CheckboxGroup>
  );
}

function Example11() {
  return (
    <>
    <CheckboxGroup
      label="Favorite genres"
      contextualHelp={
        <ContextualHelp>
          <Heading>What does this do?</Heading>
          <Content>Your musical taste is used to train our machine learning recommendation algorithm.</Content>
        </ContextualHelp>
      }>
      <Checkbox value="rock">Rock</Checkbox>
      <Checkbox value="pop">Pop</Checkbox>
      <Checkbox value="classical">Classical</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example12() {
  return (
    <>
    <CheckboxGroup label="Favorite sports" isDisabled>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example13() {
  return (
    <>
    <CheckboxGroup label="Favorite sports">
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example14() {
  return (
    <>
    <CheckboxGroup label="Favorite sports" defaultValue={['baseball']} isReadOnly>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
    </>
  );
}

function Example15() {
  return (
    <>
    <CheckboxGroup label="Favorite sports" defaultValue={['soccer', 'baseball']} isEmphasized>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
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
  "validation-2": Example7,
  "visual-options-1": Example8,
  "visual-options-2": Example9,
  "visual-options-3": Example_3,
  "visual-options-4": Example11,
  "visual-options-5": Example12,
  "visual-options-6": Example13,
  "visual-options-7": Example14,
  "visual-options-8": Example15,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
