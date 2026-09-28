// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorField.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Button, ButtonGroup, ColorField, Content, ContextualHelp, Flex, Form, Heading, parseColor } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ColorField label="Primary Color" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseColor('#e73623'));

  return (
    <Flex gap="size-150" wrap>
      <ColorField
        label="Primary Color (Uncontrolled)"
        defaultValue="#e21" />

      <ColorField
        label="Primary Color (Controlled)"
        value={value}
        onChange={setValue} />
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <ColorField label="Color" name="color" />
    </>
  );
}

function Example_2() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <div style={{display: 'flex', gap: 8}}>
        <ColorField label="Hue" value={color} onChange={setColor} colorSpace="hsl" channel="hue" />
        <ColorField label="Saturation" value={color} onChange={setColor} colorSpace="hsl" channel="saturation" />
        <ColorField label="Lightness" value={color} onChange={setColor} colorSpace="hsl" channel="lightness" />
      </div>
      <p>Current color value: {color?.toString('hex')}</p>
    </>
  );
}

function Example5() {
  return (
    <>
    <Flex gap="size-150" wrap>
      <ColorField label="Primary Color" />
      <ColorField label="Primary Color" isRequired />
      <ColorField label="Primary Color" isRequired necessityIndicator="label" />
      <ColorField label="Primary Color" necessityIndicator="label" />
    </Flex>
    </>
  );
}

function Example6() {
  return (
    <>
    <Form validationBehavior="native" maxWidth="size-3000">
      {/*- begin highlight -*/}
      <ColorField label="Color" name="color" isRequired />
      {/*- end highlight -*/}
      <ButtonGroup>
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </ButtonGroup>
    </Form>
    </>
  );
}

function Example7() {
  return (
    <>
    <ColorField label="Primary Color" isQuiet />
    </>
  );
}

function Example8() {
  return (
    <>
    <ColorField label="Primary Color" isDisabled defaultValue="#e73623" />
    </>
  );
}

function Example9() {
  return (
    <>
    <ColorField label="Primary Color" isReadOnly defaultValue="#e73623" />
    </>
  );
}

function Example10() {
  return (
    <>
    <ColorField label="Primary Color" labelPosition="side" labelAlign="end" />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex gap="size-100" wrap>
      <ColorField label="Color" defaultValue="#abc" validationState="valid" description="Enter your favorite color." />
      <ColorField label="Color" validationState="invalid" errorMessage="Empty input is not allowed." />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <ColorField
      label="Accent Color"
      defaultValue="#e73623"
      contextualHelp={
        <ContextualHelp>
          <Heading>What is an accent color?</Heading>
          <Content>An accent color is the primary foreground color for your theme, used across all components.</Content>
        </ContextualHelp>
      } />
    </>
  );
}

function Example13() {
  return (
    <>
    <ColorField label="Primary Color" width="size-3600" maxWidth="100%" />
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "html-forms": Example3,
  "color-channel": Example_2,
  "labeling": Example5,
  "validation": Example6,
  "quiet": Example7,
  "disabled": Example8,
  "read-only": Example9,
  "label-alignment-and-position": Example10,
  "help-text": Example11,
  "contextual-help": Example12,
  "custom-width": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
