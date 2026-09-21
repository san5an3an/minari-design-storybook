// @ts-nocheck
import * as React from "react";
import { Content, ContextualHelp, Flex, Footer, Heading, Link, Text } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ContextualHelp variant="info">
      <Heading>Need help?</Heading>
      <Content><Text>If you're having issues accessing your account, contact our customer support team for help.</Text></Content>
    </ContextualHelp>
    </>
  );
}

function Example2() {
  return (
    <>
    <ContextualHelp variant="help">
      <Heading>What is a segment?</Heading>
      <Content><Text>Segments identify who your visitors are, what devices and services they use, where they navigated from, and much more.</Text></Content>
      <Footer><Link>Learn more about segments</Link></Footer>
    </ContextualHelp>
    </>
  );
}

function Example3() {
  return (
    <>
    <ContextualHelp variant="info" placement="top start">
      <Heading>Placement</Heading>
      <Content><Text>The placement of this contextual help popover has been customized to use top start.</Text></Content>
    </ContextualHelp>
    </>
  );
}

function Example() {
  let [state, setState] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <ContextualHelp variant="info" onOpenChange={(isOpen) => setState(isOpen)}>
        <Heading>Permission required</Heading>
        <Content><Text>Your admin must grant you permission before you can create a segment.</Text></Content>
      </ContextualHelp>
      <Text>Current open state: {state.toString()}</Text>
    </Flex>
  );
}

function Example5() {
  return (
    <>
    <ContextualHelp variant="info">
      <Heading>Permission required</Heading>
      <Content><Text>Your admin must grant you permission before you can create a segment.</Text></Content>
    </ContextualHelp>
    </>
  );
}

function Example6() {
  return (
    <>
    <ContextualHelp variant="help">
      <Heading>What is a segment?</Heading>
      <Content><Text>Segments identify who your visitors are, what devices and services they use, where they navigated from, and much more.</Text></Content>
      <Footer><Link>Learn more about segments</Link></Footer>
    </ContextualHelp>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "placement": Example3,
  "events": Example,
  "info": Example5,
  "help": Example6,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
