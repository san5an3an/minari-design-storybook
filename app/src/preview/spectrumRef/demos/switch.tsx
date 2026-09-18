// @ts-nocheck
import * as React from "react";
import { Switch } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Switch>Low power mode</Switch>
    </>
  );
}

function Example2() {
  return (
    <>
    <Switch aria-label="Low power mode" />
    </>
  );
}

function Example() {
  let [selected, setSelection] = React.useState(false);

  return (
    <>
      <Switch
        defaultSelected>
        Low power mode (uncontrolled)
      </Switch>

      <Switch
        isSelected={selected}
        onChange={setSelection}>
        Low power mode (controlled)
      </Switch>
    </>
  )
}

function Example4() {
  return (
    <>
    <Switch name="power" value="low">Low power mode</Switch>
    </>
  );
}

function Example_2() {
  let [selected, setSelection] = React.useState(false);

  return (
    <>
      <Switch onChange={setSelection}>
        Switch Label
      </Switch>
      <div>The Switch is on: {selected.toString()}</div>
    </>
  );
}

function Example6() {
  return (
    <>
    <Switch isDisabled>Switch Label</Switch>
    </>
  );
}

function Example7() {
  return (
    <>
    <Switch isEmphasized defaultSelected>Switch Label</Switch>
    </>
  );
}

function Example8() {
  return (
    <>
    <Switch isReadOnly isSelected>Switch Label</Switch>
    </>
  );
}

export const demos = {
  "example": Example1,
  "accessibility": Example2,
  "value": Example,
  "html-forms": Example4,
  "events": Example_2,
  "disabled": Example6,
  "emphasized": Example7,
  "read-only": Example8,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
