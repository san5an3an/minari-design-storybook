// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorSwatch.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ColorSlider, ColorSwatch, Flex, parseColor } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ColorSwatch color="#f00" />
    </>
  );
}

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <Flex direction="column" gap="size-100">
      <ColorSlider value={color} onChange={setColor} channel="hue" />
      <ColorSwatch color={color} />
    </Flex>
  );
}

function Example_2() {
  let [color, setColor] = React.useState(parseColor('hsla(0, 100%, 50%, 0)'));
  return (
    <Flex direction="column" gap="size-100">
      <ColorSlider value={color} onChange={setColor} channel="alpha" />
      <ColorSwatch color={color} />
    </Flex>
  );
}

function Example4() {
  return (
    <>
    <ColorSwatch color="#f00" aria-label="Background color" colorName="Fire truck red" />
    </>
  );
}

function Example5() {
  return (
    <>
    <Flex gap="size-100">
      <ColorSwatch color="#ff0" size="XS" />
      <ColorSwatch color="#ff0" size="S" />
      <ColorSwatch color="#ff0" size="M" />
      <ColorSwatch color="#ff0" size="L" />
    </Flex>
    </>
  );
}

function Example6() {
  return (
    <>
    <Flex gap="size-100">
      <ColorSwatch color="#0ff" rounding="none" />
      <ColorSwatch color="#0ff" rounding="default" />
      <ColorSwatch color="#0ff" rounding="full" />
    </Flex>
    </>
  );
}

function Example7() {
  return (
    <>
    <ColorSwatch color="#00f" width="size-1000" />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example,
  "value-2": Example_2,
  "labeling-1": Example4,
  "visual-options-1": Example5,
  "visual-options-2": Example6,
  "visual-options-3": Example7,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
