// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/slider/RangeSlider.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Content, ContextualHelp, Flex, Heading, RangeSlider } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <RangeSlider label="Range" defaultValue={{start: 12, end: 36}} />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState({start: 25, end: 75});
  return (
    <Flex gap="size-150" wrap>
      <RangeSlider
        label="Range (uncontrolled)"
        defaultValue={{start: 25, end: 75}} />
      <RangeSlider
        label="Range (controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <RangeSlider
      label="Range"
      minValue={50}
      maxValue={150}
      defaultValue={{start: 75, end: 100}} />
    </>
  );
}

function Example4() {
  return (
    <>
    <RangeSlider
      label="Price range"
      formatOptions={{style: 'currency', currency: 'JPY'}}
      defaultValue={{start: 75, end: 100}} />
    </>
  );
}

function Example5() {
  return (
    <>
    <RangeSlider
      label="Range"
      defaultValue={{start: 12, end: 36}}
      startName="start"
      endName="end" />
    </>
  );
}

function Example6() {
  return (
    <>
    <Flex direction="column" maxWidth="size-5000" gap="size-300">
      <RangeSlider label="Jeans price range" formatOptions={{style: 'currency', currency: 'USD'}} defaultValue={{start: 75, end: 100}} />
      <RangeSlider label="Shoes price range" formatOptions={{style: 'currency', currency: 'USD'}} labelPosition="side" defaultValue={{start: 50, end: 100}} />
      <RangeSlider label="Hats price range" formatOptions={{style: 'currency', currency: 'USD'}} showValueLabel={false} defaultValue={{start: 15, end: 30}} />
    </Flex>
    </>
  );
}

function Example7() {
  return (
    <>
    <Flex direction="column" maxWidth="size-3000" gap="size-300">
      <RangeSlider
        label="Level range"
        showValueLabel={false}
        defaultValue={{start: 75, end: 100}} />
    
      <RangeSlider
        label="Cacao percentage"
        maxValue={1}
        step={0.001}
        formatOptions={{style: 'percent', minimumFractionDigits: 1}}
        defaultValue={{start: .75, end: 1}} />
    
      <RangeSlider
        label="Search radius"
        maxValue={200}
        getValueLabel={meters => `${meters.start}m to ${meters.end}m away`}
        defaultValue={{start: 15, end: 60}} />
    </Flex>
    </>
  );
}

function Example8() {
  return (
    <>
    <RangeSlider
      label="Search radius"
      formatOptions={{style: 'unit', unit: 'mile'}}
      defaultValue={{start: 15, end: 60}}
      contextualHelp={
        <ContextualHelp variant="info">
          <Heading>Ranking</Heading>
          <Content>Search results are sorted by distance from city center.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example9() {
  return (
    <>
    <RangeSlider label="Price filter" defaultValue={{start: 25, end: 50}} isDisabled />
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
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
