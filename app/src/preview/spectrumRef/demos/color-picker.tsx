// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorPicker.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ColorArea, ColorEditor, ColorPicker, ColorSlider, ColorSwatch, ColorSwatchPicker, ColorWheel, Flex, Item, Picker, getColorChannels, parseColor } from "@adobe/react-spectrum";
import type {ColorSpace} from '@react-spectrum/color';

function Example1() {
  return (
    <>
    <ColorPicker label="Fill" defaultValue="#5100FF">
      <ColorEditor />
    </ColorPicker>
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(25, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <ColorPicker
        label="Color Picker (uncontrolled)"
        /*- begin highlight -*/
        defaultValue="hsl(25, 100%, 50%)">
        {/*- end highlight -*/}
        <ColorEditor />
      </ColorPicker>
      <ColorPicker
        label="Color Picker (controlled)"
        /*- begin highlight -*/
        value={value}
        onChange={setValue}>
        {/*- end highlight -*/}
        <ColorEditor />
      </ColorPicker>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <ColorPicker label="Stroke color" defaultValue="#345">
      <ColorEditor />
    </ColorPicker>
    </>
  );
}

function Example4() {
  return (
    <>
    <ColorPicker aria-label="Fill color" defaultValue="#184">
      <ColorEditor />
    </ColorPicker>
    </>
  );
}

function Example_2() {
  let [value, setValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <ColorPicker
        label="Color"
        value={value}
        onChange={setValue}>
        <ColorEditor />
      </ColorPicker>
      <p>Selected color: {value.toString('hsl')}</p>
    </div>
  );
}

function Example6() {
  return (
    <>
    <ColorPicker label="Fill" defaultValue="#08f">
      <ColorWheel />
      <ColorArea
        colorSpace="hsb"
        xChannel="saturation"
        yChannel="brightness"
        size="size-400"
        position="absolute"
        top="calc(50% - size-400)"
        left="calc(50% - size-400)" />
    </ColorPicker>
    </>
  );
}

function Example7() {
  return (
    <>
    <ColorPicker label="Color" defaultValue="#f80">
      <ColorEditor hideAlphaChannel />
    </ColorPicker>
    </>
  );
}

function Example8() {
  return (
    <>
    <ColorPicker label="Color" defaultValue="#A00">
      <Flex direction="column" gap="size-300">
        <ColorEditor />
        <ColorSwatchPicker>
          <ColorSwatch color="#A00" />
          <ColorSwatch color="#f80" />
          <ColorSwatch color="#080" />
          <ColorSwatch color="#08f" />
          <ColorSwatch color="#088" />
          <ColorSwatch color="#008" />
        </ColorSwatchPicker>
      </Flex>
    </ColorPicker>
    </>
  );
}

function Example_3() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <ColorPicker label="Color" defaultValue="#184">
      <Flex direction="column" gap="size-100">
        <Picker aria-label="Color space" isQuiet selectedKey={space} onSelectionChange={s => setSpace(s as ColorSpace)}>
          <Item key="rgb">RGB</Item>
          <Item key="hsl">HSL</Item>
          <Item key="hsb">HSB</Item>
        </Picker>
        {getColorChannels(space).map(channel => (
          <ColorSlider key={channel} colorSpace={space} channel={channel} />
        ))}
        <ColorSlider channel="alpha" />
      </Flex>
    </ColorPicker>
  );
}

function Example10() {
  return (
    <>
    <Flex direction="column" gap="size-100">
      <ColorPicker label="None" rounding="none" defaultValue="#A00">
        <ColorEditor />
      </ColorPicker>
      <ColorPicker label="Default" rounding="default" defaultValue="#080">
        <ColorEditor />
      </ColorPicker>
      <ColorPicker label="Full" rounding="full" defaultValue="#00F">
        <ColorEditor />
      </ColorPicker>
    </Flex>
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex direction="column" gap="size-100">
      <ColorPicker label="Extra small" size="XS" defaultValue="#A00">
        <ColorEditor />
      </ColorPicker>
      <ColorPicker label="Small" size="S" defaultValue="#080">
        <ColorEditor />
      </ColorPicker>
      <ColorPicker label="Medium" size="M" defaultValue="#FB0">
        <ColorEditor />
      </ColorPicker>
      <ColorPicker label="Large" size="L" defaultValue="#00F">
        <ColorEditor />
      </ColorPicker>
    </Flex>
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "labeling": Example3,
  "accessibility": Example4,
  "events": Example_2,
  "custom-color-editor": Example6,
  "hide-alpha-channel": Example7,
  "swatches": Example8,
  "channel-sliders": Example_3,
  "rounding": Example10,
  "size": Example11,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
