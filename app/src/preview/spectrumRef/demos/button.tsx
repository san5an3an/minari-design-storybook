// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/button/Button.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, Flex, Text, View } from "@adobe/react-spectrum";
import Bell from '@spectrum-icons/workflow/Bell';

function Example1() {
  return (
    <>
    <Button variant="accent">Save</Button>
    </>
  );
}

function Example2() {
  return (
    <>
    <Button variant="primary">
      <Bell />
      <Text>Icon + Label</Text>
    </Button>
    </>
  );
}

function Example() {
  let [count, setCount] = React.useState(0);

  return (
    <Button variant="primary" onPress={() => setCount(c => c + 1)}>{count} Dogs</Button>
  );
}

function Example_2() {
  let [isLoading, setIsLoading] = React.useState(false);

  let handlePress = () => {
    // Trigger button pending state
    setIsLoading(true);

    setTimeout(() => {
      // Cancel button pending state
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Button variant="primary" isPending={isLoading} onPress={handlePress}>Click me!</Button>
  );
}

function Example5() {
  return (
    <>
    <Flex wrap gap="size-250">
      <Button variant="accent" style="fill">Save</Button>
      <Button variant="accent" style="outline">Save</Button>
    </Flex>
    </>
  );
}

function Example6() {
  return (
    <>
    <Flex wrap gap="size-250">
      <Button variant="primary" style="fill">Save</Button>
      <Button variant="primary" style="outline">Save</Button>
    </Flex>
    </>
  );
}

function Example7() {
  return (
    <>
    <Flex wrap gap="size-250">
      <Button variant="secondary" style="fill">Save</Button>
      <Button variant="secondary" style="outline">Save</Button>
    </Flex>
    </>
  );
}

function Example8() {
  return (
    <>
    <Flex wrap gap="size-250">
      <Button variant="negative" style="fill">Save</Button>
      <Button variant="negative" style="outline">Save</Button>
    </Flex>
    </>
  );
}

function Example9() {
  return (
    <>
    <Flex wrap gap="size-250">
      <View backgroundColor="static-blue-700" padding="size-500">
        <Flex wrap gap="size-200">
          <Button variant="primary" staticColor="white" style="fill">Save</Button>
          <Button variant="primary" staticColor="white" style="outline">Save</Button>
        </Flex>
      </View>
      <View backgroundColor="static-yellow-400" padding="size-500">
        <Flex wrap gap="size-200">
          <Button variant="primary" staticColor="black" style="fill">Save</Button>
          <Button variant="primary" staticColor="black" style="outline">Save</Button>
        </Flex>
      </View>
    </Flex>
    </>
  );
}

function Example10() {
  return (
    <>
    <Button variant="accent" isDisabled>Save</Button>
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex direction="row" gap={8}>
      <Button variant="accent" aria-label="Ring for service"><Bell /></Button>
      <Button variant="primary" aria-label="Ring for service"><Bell /></Button>
      <Button variant="secondary" aria-label="Ring for service"><Bell /></Button>
    </Flex>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "events": Example,
  "pending": Example_2,
  "accent": Example5,
  "primary": Example6,
  "secondary": Example7,
  "negative": Example8,
  "static-color": Example9,
  "disabled": Example10,
  "icon-only": Example11,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
