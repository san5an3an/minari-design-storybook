// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/slider/Slider.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Content, ContextualHelp, Flex, Heading, Slider } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Slider label="Cookies to buy" defaultValue={12} />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <Flex gap="size-150" wrap>
      <Slider
        label="Cookies to buy (Uncontrolled)"
        defaultValue={25} />
      <Slider
        label="Cookies to buy (Controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <Slider
      label="Cookies to buy"
      minValue={50}
      maxValue={150}
      defaultValue={100} />
    </>
  );
}

function Example4() {
  return (
    <>
    <Slider
      label="Currency"
      formatOptions={{style: 'currency', currency: 'JPY'}}
      defaultValue={60} />
    </>
  );
}

function Example5() {
  return (
    <>
    <Slider
      label="Opacity"
      defaultValue={50}
      name="opacity" />
    </>
  );
}

function Example6() {
  return (
    <>
    <Flex direction="column" maxWidth="size-5000" gap="size-300">
      <Slider label="Cookies to buy" defaultValue={25} />
      <Slider label="Donuts to buy" labelPosition="side" defaultValue={25} />
      <Slider label="Pastries to buy" showValueLabel={false} defaultValue={25} />
    </Flex>
    </>
  );
}

function Example7() {
  return (
    <>
    <Flex direction="column" maxWidth="size-3000" gap="size-300">
      <Slider
        label="Cookies to buy"
        showValueLabel={false}
        defaultValue={90} />
      <Slider
        label="Percent donus eaten"
        maxValue={1}
        step={0.001}
        formatOptions={{style: 'percent', minimumFractionDigits: 1}}
        defaultValue={0.891} />
      <Slider
        label="Donuts to buy"
        maxValue={60}
        getValueLabel={donuts => `${donuts} of 60 Donuts`} />
    </Flex>
    </>
  );
}

function Example8() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <Slider label="Opacity" maxValue={1} formatOptions={{style: 'percent'}} defaultValue={0.9} step={0.01} isFilled />
      <Slider label="Exposure" minValue={-5} maxValue={5} defaultValue={1.83} formatOptions={{signDisplay: 'always'}} step={0.01} fillOffset={0} isFilled />
    </Flex>
    </>
  );
}

function Example9() {
  return (
    <>
    <Slider label="Filter density" trackGradient={['white', 'rgba(177,141,32,1)']} defaultValue={.3} maxValue={1} step={0.01} formatOptions={{style: 'percent'}} isFilled  />
    </>
  );
}

function Example10() {
  return (
    <>
    <Slider
      label="Exposure"
      minValue={-100}
      maxValue={100}
      defaultValue={0}
      formatOptions={{signDisplay: 'always'}}
      isFilled
      fillOffset={0}
      contextualHelp={
        <ContextualHelp>
          <Heading>What is exposure?</Heading>
          <Content>Exposure adjusts how bright the image is.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example11() {
  return (
    <>
    <Slider label="Cookies to share" defaultValue={25} isDisabled />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example,
  "value-2": Example3,
  "value-3": Example4,
  "value-4": Example5,
  "labeling-1": Example6,
  "labeling-2": Example7,
  "visual-options-1": Example8,
  "visual-options-2": Example9,
  "visual-options-3": Example10,
  "visual-options-4": Example11,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
