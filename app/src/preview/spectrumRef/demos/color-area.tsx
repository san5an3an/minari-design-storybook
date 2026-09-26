// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/color/ColorArea.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ColorArea, ColorSlider, ColorWheel, Flex, Grid, View, parseColor } from "@adobe/react-spectrum";
import { Label } from '@react-spectrum/label';

function Example1() {
  return (
    <>
    <ColorArea defaultValue="#7f0000" />
    </>
  );
}

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <Flex gap="size-300" wrap>
      <div>
        <Label id="hsl-uncontrolled-id">x: Saturation, y: Lightness (uncontrolled)</Label>
        <ColorArea
          aria-labelledby="hsl-uncontrolled-id"
          defaultValue={value}
          xChannel="saturation"
          yChannel="lightness" />
      </div>
      <div>
        <Label id="hsl-controlled-id">x: Saturation, y: Lightness (controlled)</Label>
        <ColorArea
          aria-labelledby="hsl-controlled-id"
          value={value}
          onChange={setValue}
          xChannel="saturation"
          yChannel="lightness" />
      </div>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <ColorArea xName="red" yName="green" />
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-300" wrap alignItems="end">
      <ColorArea
        aria-label="Background color"
        defaultValue="hsl(0, 100%, 50%)"
        xChannel="saturation"
        yChannel="lightness" />
      <div>
        <Label
          id="hsl-aria-labelledby-id">Background color</Label>
        <ColorArea
          aria-labelledby="hsl-aria-labelledby-id"
          defaultValue="hsl(0, 100%, 50%)"
          xChannel="saturation"
          yChannel="lightness" />
      </div>
    </Flex>
    </>
  );
}

function Example_2() {
  let [currentValue, setCurrentValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));
  let [finalValue, setFinalValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <ColorArea
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue} />
      <pre>Current value: {currentValue.toString('hsl')}</pre>
      <pre>Final value: {finalValue.toString('hsl')}</pre>
    </div>
  );
}

function Example_3() {
  let [color, setColor] = React.useState(parseColor('#ff00ff'));
  let [redChannel, greenChannel, blueChannel] = color.getColorChannels();
  return (
    <fieldset style={{border: 0}}>
      <legend>{color.getColorSpace().toUpperCase()}A Example_3</legend>
      <Flex direction="column">
        <ColorArea xChannel={redChannel} yChannel={greenChannel} value={color} onChange={setColor} />
        <ColorSlider channel={blueChannel} value={color} onChange={setColor} />
        <ColorSlider channel="alpha" value={color} onChange={setColor} />
        <p>Current value: {color.toString('css')}</p>
      </Flex>
    </fieldset>
  );
}

function Example_4() {
  let [color, setColor] = React.useState(parseColor('hsla(0, 100%, 50%, 0.5)'));
  let [, saturationChannel, lightnessChannel] = color.getColorChannels();
  return (
    <fieldset style={{border: 0}}>
      <legend>HSLA Example_4</legend>
      <Flex
        direction="column">
        <View
          position="relative"
          width="size-2400">
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%">
            <ColorArea
              xChannel={saturationChannel}
              yChannel={lightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200" />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400" />
        </View>
        <ColorSlider channel="alpha" value={color} onChange={setColor} />
        <p>Current value: {color.toString('hsla')}</p>
      </Flex>
    </fieldset>
  );
}

function Example_5() {
  let [color, setColor] = React.useState(parseColor('hsba(0, 100%, 50%, 0.5)'));
  let [, saturationChannel, brightnessChannel] = color.getColorChannels();
  return (
    <fieldset style={{border: 0}}>
      <legend>HSBA Example_5</legend>
      <Flex
        direction="column">
        <View
          position="relative"
          width="size-2400">
          <Grid
            position="absolute"
            justifyContent="center"
            alignContent="center"
            width="100%"
            height="100%">
            <ColorArea
              xChannel={saturationChannel}
              yChannel={brightnessChannel}
              value={color}
              onChange={setColor}
              size="size-1200" />
          </Grid>
          <ColorWheel
            value={color}
            onChange={setColor}
            size="size-2400" />
        </View>
        <ColorSlider channel="alpha" value={color} onChange={setColor} />
        <p>Current value: {color.toString('hsba')}</p>
      </Flex>
    </fieldset>
  );
}

function Example9() {
  return (
    <>
    <ColorArea defaultValue="#7f0000" isDisabled />
    </>
  );
}

function Example10() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <ColorArea defaultValue="#7f0000" size="size-3600" maxWidth="100%" />
    </Flex>
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
  "custom-size": Example10,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
