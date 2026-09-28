// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/searchfield/SearchField.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, SearchField } from "@adobe/react-spectrum";
import User from '@spectrum-icons/workflow/User';

function Example() {
  let [submittedText, setSubmittedText] = React.useState(null);

  return (
    <>
      <SearchField
        label="Search"
        onSubmit={setSubmittedText} />
      <p>Submitted text: {submittedText}</p>
    </>
  );
}

function Example_2() {
  let [searchValue, setSearchValue] = React.useState('puppies');
  return (
    <Flex gap="size-300">
      <SearchField
        defaultValue="puppies"
        label="Search (uncontrolled)" />

      <SearchField
        value={searchValue}
        onChange={setSearchValue}
        label="Search (controlled)" />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <SearchField label="Email" name="email" type="email" />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-300" wrap>
      <SearchField label="Search" />
      <SearchField label="Search" isRequired necessityIndicator="icon" />
      <SearchField label="Search" isRequired necessityIndicator="label" />
      <SearchField label="Search" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example_3() {
  let [currentText, setCurrentText] = React.useState('');
  let [submittedText, setSubmittedText] = React.useState('');

  return (
    <div>
      <SearchField
        onClear={() => setCurrentText('')}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
      />
      <pre>Mirrored text: {currentText}</pre>
      <pre>Submitted text: {submittedText}</pre>
    </div>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <SearchField label="Search" name="search" isRequired />
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
    <SearchField label="Search" isQuiet />
    </>
  );
}

function Example8() {
  return (
    <>
    <SearchField label="Search" isDisabled />
    </>
  );
}

function Example9() {
  return (
    <>
    <SearchField label="Search" defaultValue="abc@adobe.com" isReadOnly />
    </>
  );
}

function Example10() {
  return (
    <>
    <SearchField label="Search" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <SearchField label="Search" defaultValue="Burritos" validationState="valid" description="Enter a query." />
      <SearchField label="Search" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <SearchField
      label="Search"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Search tips</Heading>
          <Content>You can use modifiers like "date:" and "from:" to search by specific attributes.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example13() {
  return (
    <>
    <SearchField label="Search" width="size-3600" />
    </>
  );
}

function Example14() {
  return (
    <>
    <SearchField label="Search for users" icon={<User />} />
    </>
  );
}

export const demos = {
  "example": Example,
  "value": Example_2,
  "html-forms": Example3,
  "labeling": Example4,
  "events": Example_3,
  "validation": Example6,
  "quiet": Example7,
  "disabled": Example8,
  "read-only": Example9,
  "label-alignment-and-position": Example10,
  "help-text": Example11,
  "contextual-help": Example12,
  "custom-width": Example13,
  "custom-icon": Example14,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
