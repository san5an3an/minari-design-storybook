// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/checkbox/Checkbox.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Checkbox, Flex, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Checkbox>Unsubscribe</Checkbox>
    </>
  );
}

function Example() {
  let [selected, setSelected] = React.useState(true);

  return (
    <Flex direction="row">
      <Checkbox defaultSelected>Subscribe (uncontrolled)</Checkbox>
      <Checkbox isSelected={selected} onChange={setSelected}>Subscribe (controlled)</Checkbox>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <Checkbox isIndeterminate>Subscribe</Checkbox>
    </>
  );
}

function Example4() {
  return (
    <>
    <Checkbox name="newsletter" value="subscribe">Subscribe</Checkbox>
    </>
  );
}

function Example_2() {
  let [selected, setSelection] = React.useState(false);

  return (
    <Flex direction="column">
      <Checkbox isSelected={selected} onChange={setSelection}>
        Subscribe
      </Checkbox>
      <View>{`You are ${selected ? 'subscribed' : 'unsubscribed'}`}</View>
    </Flex>
  );
 }

function Example6() {
  return (
    <>
    <Checkbox isInvalid>I accept the terms and conditions</Checkbox>
    </>
  );
}

function Example7() {
  return (
    <>
    <Checkbox isDisabled>Subscribe</Checkbox>
    </>
  );
}

function Example8() {
  return (
    <>
    <Checkbox isEmphasized defaultSelected>Subscribe</Checkbox>
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "indeterminate": Example3,
  "html-forms": Example4,
  "events": Example_2,
  "validation": Example6,
  "disabled": Example7,
  "emphasized": Example8,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
