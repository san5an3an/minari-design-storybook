// @ts-nocheck
import * as React from "react";
import { Button, ButtonGroup, Content, ContextualHelp, Flex, Form, Heading, TextField } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <TextField label="Name" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState('me@email.com');

  return (
    <Flex gap="size-150" wrap>
      <TextField
        label="Email (Uncontrolled)"
        defaultValue="me@email.com" />

      <TextField
        label="Email (Controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <TextField label="Email" name="email" type="email" />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <TextField label="Street address" />
      <TextField label="Street address" isRequired necessityIndicator="icon" />
      <TextField label="Street address" isRequired necessityIndicator="label" />
      <TextField label="Street address" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example_2() {
  let [text, setText] = React.useState('');

  return (
    <Flex direction="column" gap="size-150">
      <TextField
        onChange={setText}
        label="Your text" />
      <pre>Mirrored text: {text}</pre>
    </Flex>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <TextField label="Email" name="email" type="email" isRequired />
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
    <TextField label="Email" isQuiet />
    </>
  );
}

function Example8() {
  return (
    <>
    <TextField label="Email" isDisabled />
    </>
  );
}

function Example9() {
  return (
    <>
    <TextField label="Email" defaultValue="abc@adobe.com" isReadOnly />
    </>
  );
}

function Example10() {
  return (
    <>
    <TextField label="Search" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <TextField label="Name" defaultValue="John" validationState="valid" description="Enter your name." />
      <TextField label="Name" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <TextField
      label="Password"
      type="password"
      contextualHelp={
        <ContextualHelp>
          <Heading>Need help?</Heading>
          <Content>If you're having trouble accessing your account, contact our customer support team for help.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example13() {
  return (
    <>
    <TextField label="Email" width="size-3600" maxWidth="100%" />
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
