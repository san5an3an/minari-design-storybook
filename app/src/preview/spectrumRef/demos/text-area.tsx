// @ts-nocheck
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, TextArea } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <TextArea label="Description" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState('This is on a wait list');

  return (
    <Flex gap="size-150" wrap>
      <TextArea
        label="Notes (Uncontrolled)"
        defaultValue="This is on a wait list" />

      <TextArea
        label="Notes (Controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <TextArea label="Comment" name="comment" />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <TextArea label="Address" />
      <TextArea label="Address" isRequired necessityIndicator="icon" />
      <TextArea label="Address" isRequired necessityIndicator="label" />
      <TextArea label="Address" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example_2() {
  let [text, setText] = React.useState('');

  return (
    <Flex direction="column">
      <TextArea
        onChange={setText}
        label="Your text"
      />
      <pre>Mirrored text: {text}</pre>
    </Flex>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <TextArea label="Comment" name="comment" isRequired minLength={10} />
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
    <TextArea label="Email" isQuiet />
    </>
  );
}

function Example8() {
  return (
    <>
    <TextArea label="Email" isDisabled />
    </>
  );
}

function Example9() {
  return (
    <>
    <TextArea label="Email" defaultValue="abc@adobe.com" isReadOnly />
    </>
  );
}

function Example10() {
  return (
    <>
    <TextArea label="Search" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <TextArea label="Comment" defaultValue="Awesome!" validationState="valid" description="Enter a comment." />
      <TextArea label="Comment" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <TextArea
      label="Comment"
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Comment tips</Heading>
          <Content>Comments will be screened prior to being published. Please be nice!</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example13() {
  return (
    <>
    <TextArea label="Email" width="size-3600" maxWidth="100%" />
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "html-forms": Example3,
  "labeling": Example4,
  "events": Example_2,
  "validation": Example6,
  "quiet": Example7,
  "disabled": Example8,
  "read-only": Example9,
  "label-alignment-and-position": Example10,
  "help-text": Example11,
  "contextual-help": Example12,
  "custom-width": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
