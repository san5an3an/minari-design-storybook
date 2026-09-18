// @ts-nocheck
import * as React from "react";
import { ActionButton, Flex, Text, View } from "@adobe/react-spectrum";
import Edit from '@spectrum-icons/workflow/Edit';

function Example1() {
  return (
    <>
    <ActionButton>Edit</ActionButton>
    </>
  );
}

function Example2() {
  return (
    <>
    <ActionButton>
      <Edit />
      <Text>Icon + Label</Text>
    </ActionButton>
    </>
  );
}

function Example3() {
  return (
    <>
    <ActionButton aria-label="Icon only">
      <Edit />
    </ActionButton>
    </>
  );
}

function Example() {
  let [count, setCount] = React.useState(0);

  return (
   <ActionButton onPress={() => setCount(c => c + 1)}>{count} Edits</ActionButton>
  );
}

function Example5() {
  return (
    <>
    <ActionButton isQuiet>Action!</ActionButton>
    </>
  );
}

function Example6() {
  return (
    <>
    <ActionButton isDisabled>Action!</ActionButton>
    </>
  );
}

function Example7() {
  return (
    <>
    <Flex wrap gap="size-250">
      <View backgroundColor="static-blue-700" padding="size-500">
        <ActionButton staticColor="white">
          <Edit />
          <Text>Edit</Text>
        </ActionButton>
      </View>
      <View backgroundColor="static-yellow-400" padding="size-500">
        <ActionButton staticColor="black" isQuiet>
          <Edit />
          <Text>Edit</Text>
        </ActionButton>
      </View>
    </Flex>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "accessibility": Example3,
  "events": Example,
  "quiet": Example5,
  "disabled": Example6,
  "static-color": Example7,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
