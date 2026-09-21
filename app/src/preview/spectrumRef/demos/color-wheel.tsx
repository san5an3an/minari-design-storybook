// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorWheel.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ColorWheel, Flex, parseColor } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ColorWheel defaultValue="hsl(30, 100%, 50%)" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(30, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <Flex direction="column" alignItems="center">
        <label id="label-1">Hue (uncontrolled)</label>
        <ColorWheel
          defaultValue="hsl(30, 100%, 50%)"
          aria-labelledby="label-1" />
      </Flex>
      <Flex direction="column" alignItems="center">
        <label id="label-2">Hue (controlled)</label>
        <ColorWheel
          value={value}
          onChange={setValue}
          aria-labelledby="label-1" />
      </Flex>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <ColorWheel name="hue" />
    </>
  );
}

function Example_2() {
  let [currentValue, setCurrentValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));
  let [finalValue, setFinalValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <ColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}

function Example5() {
  return (
    <>
    <ColorWheel isDisabled />
    </>
  );
}

function Example6() {
  return (
    <>
    <ColorWheel size="size-1600" />
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "html-forms": Example3,
  "events": Example_2,
  "disabled": Example5,
  "size": Example6,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
