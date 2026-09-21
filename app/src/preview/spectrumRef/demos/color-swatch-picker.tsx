// @ts-nocheck
import * as React from "react";
import { ColorSwatch, ColorSwatchPicker, parseColor } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ColorSwatchPicker>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
      <ColorSwatch color="#088" />
      <ColorSwatch color="#008" />
    </ColorSwatchPicker>
    </>
  );
}

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 33.33%)'));

  return (
    <ColorSwatchPicker value={color} onChange={setColor}>
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
    </ColorSwatchPicker>
  );
}

function Example3() {
  return (
    <>
    <ColorSwatchPicker aria-label="Fill color">
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
    </ColorSwatchPicker>
    </>
  );
}

function Example_2() {
  let [value, setValue] = React.useState(parseColor('#A00'));

  return (
    <div>
      <ColorSwatchPicker value={value} onChange={setValue}>
        <ColorSwatch color="#A00" />
        <ColorSwatch color="#f80" />
        <ColorSwatch color="#080" />
        <ColorSwatch color="#08f" />
        <ColorSwatch color="#088" />
        <ColorSwatch color="#008" />
      </ColorSwatchPicker>
      <p>Selected color: {value.toString('rgb')}</p>
    </div>
  );
}

function Example5() {
  return (
    <>
    <ColorSwatchPicker size="XS">
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
    </ColorSwatchPicker>
    </>
  );
}

function Example6() {
  return (
    <>
    <ColorSwatchPicker density="compact">
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
    </ColorSwatchPicker>
    </>
  );
}

function Example7() {
  return (
    <>
    <ColorSwatchPicker rounding="full">
      <ColorSwatch color="#A00" />
      <ColorSwatch color="#f80" />
      <ColorSwatch color="#080" />
      <ColorSwatch color="#08f" />
    </ColorSwatchPicker>
    </>
  );
}

export const demos = {
  "example": Example1,
  "value": Example,
  "labeling": Example3,
  "events": Example_2,
  "size": Example5,
  "density": Example6,
  "rounding": Example7,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
