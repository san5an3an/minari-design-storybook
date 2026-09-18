// @ts-nocheck
import { Badge, Flex, Text } from "@adobe/react-spectrum";
import CheckmarkCircle from '@spectrum-icons/workflow/CheckmarkCircle';

function Example1() {
  return (
    <>
    <Badge variant="positive">Licensed</Badge>
    </>
  );
}

function Example2() {
  return (
    <>
    <Badge variant="positive">
      <CheckmarkCircle aria-label="Done" />
      <Text>Icon + Label</Text>
    </Badge>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex direction="column" gap={8}>
      <Badge variant="positive">Green: Approved, Complete, Success, New, Purchased, Licensed</Badge>
      <Badge variant="info">Blue: Active, In Use, Live, Published</Badge>
      <Badge variant="negative">Red: Error, Alert, Rejected, Failed</Badge>
      <Badge variant="neutral">Gray: Archived, Deleted, Paused, Draft, Not Started, Ended</Badge>
    </Flex>
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex direction="column" gap={8}>
      <Badge variant="seafoam">Seafoam</Badge>
      <Badge variant="indigo">Indigo</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="fuchsia">Fuchsia</Badge>
      <Badge variant="magenta">Magenta</Badge>
      <Badge variant="yellow">Yellow</Badge>
    </Flex>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "visual-options-1": Example3,
  "visual-options-2": Example4,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
