// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorSlider.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ColorSlider, Content, ContextualHelp, Flex, Heading, parseColor } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ColorSlider defaultValue="#7f0000" channel="red" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <ColorSlider
        label="Hue (uncontrolled)"
        defaultValue="hsl(0, 100%, 50%)"
        channel="hue" />
      <ColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue" />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <ColorSlider
      defaultValue="#7f0000"
      channel="red"
      name="red" />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-300" wrap alignItems="end">
      <ColorSlider channel="saturation" defaultValue="hsl(0, 100%, 50%)" label={null} />
      <ColorSlider channel="lightness" defaultValue="hsl(0, 100%, 50%)" showValueLabel={false} />
    </Flex>
    </>
  );
}

function Example_2() {
  let [currentValue, setCurrentValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));
  let [finalValue, setFinalValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <ColorSlider
        value={currentValue}
        channel="hue"
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue} />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}

function Example_3() {
  let [color, setColor] = React.useState(parseColor('#ff00ff'));

  return (
    <Flex direction="column">
      <ColorSlider channel="red" value={color} onChange={setColor} />
      <ColorSlider channel="green" value={color} onChange={setColor} />
      <ColorSlider channel="blue" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </Flex>
  );
}

function Example_4() {
  let [color, setColor] = React.useState(parseColor('hsla(0, 100%, 50%, 0.5)'));

  return (
    <Flex direction="column">
      <ColorSlider channel="hue" value={color} onChange={setColor} />
      <ColorSlider channel="saturation" value={color} onChange={setColor} />
      <ColorSlider channel="lightness" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </Flex>
  );
}

function Example_5() {
  let [color, setColor] = React.useState(parseColor('hsba(0, 100%, 50%, 0.5)'));
  return (
    <>
      <ColorSlider channel="hue" value={color} onChange={setColor} />
      <ColorSlider channel="saturation" value={color} onChange={setColor} />
      <ColorSlider channel="brightness" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}

function Example9() {
  return (
    <>
    <ColorSlider defaultValue="#7f0000"  channel="red" isDisabled />
    </>
  );
}

function Example10() {
  return (
    <>
    <ColorSlider defaultValue="#7f0000" channel="red" orientation="vertical" />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <ColorSlider defaultValue="#7f0000" channel="red" orientation="vertical" height="size-3600" />
      <ColorSlider defaultValue="#7f0000" channel="red" width="size-3600" maxWidth="100%" />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <ColorSlider
      label="Accent Color"
      channel="hue"
      defaultValue="hsl(120, 100%, 50%)"
      contextualHelp={
        <ContextualHelp>
          <Heading>What is an accent color?</Heading>
          <Content>An accent color is the primary foreground color for your theme, used across all components.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "html-forms": Example3,
  "labeling": Example4,
  "events": Example_2,
  "rgba": Example_3,
  "hsla": Example_4,
  "hsba": Example_5,
  "disabled": Example9,
  "vertical": Example10,
  "custom-size": Example11,
  "contextual-help": Example12,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
