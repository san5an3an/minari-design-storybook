// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/button/ToggleButton.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Flex, Text, ToggleButton, View } from "@adobe/react-spectrum";
import Pin from '@spectrum-icons/workflow/PinOff';

function Example1() {
  return (
    <>
    <ToggleButton>Pin</ToggleButton>
    </>
  );
}

function Example2() {
  return (
    <>
    <ToggleButton>
      <Pin />
      <Text>Icon + Label</Text>
    </ToggleButton>
    </>
  );
}

function Example3() {
  return (
    <>
    <ToggleButton aria-label="Icon only">
      <Pin />
    </ToggleButton>
    </>
  );
}

function Example() {
  let [isSelected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      isEmphasized
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Pin">
      <Pin />
    </ToggleButton>
  );
}

function Example5() {
  return (
    <>
    <ToggleButton isQuiet>Pin</ToggleButton>
    </>
  );
}

function Example6() {
  return (
    <>
    <ToggleButton isDisabled>Pin</ToggleButton>
    </>
  );
}

function Example7() {
  return (
    <>
    <ToggleButton isEmphasized defaultSelected>Pin</ToggleButton>
    </>
  );
}

function Example8() {
  return (
    <>
    <Flex wrap gap="size-250">
      <View backgroundColor="static-blue-700" padding="size-500">
        <ToggleButton staticColor="white">
          <Pin />
          <Text>Pin</Text>
        </ToggleButton>
      </View>
      <View backgroundColor="static-yellow-400" padding="size-500">
        <ToggleButton staticColor="black" isQuiet defaultSelected>
          <Pin />
          <Text>Pin</Text>
        </ToggleButton>
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
  "emphasized": Example7,
  "static-color": Example8,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
