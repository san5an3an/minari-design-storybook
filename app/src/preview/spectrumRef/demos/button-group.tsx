// @ts-nocheck
import { Button, ButtonGroup } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ButtonGroup>
      <Button variant="primary">Rate Now</Button>
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
    </ButtonGroup>
    </>
  );
}

function Example2() {
  return (
    <>
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

function Example3() {
  return (
    <>
    <ButtonGroup orientation="vertical" align="end">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

function Example4() {
  return (
    <>
    <ButtonGroup orientation="vertical" align="center">
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

function Example5() {
  return (
    <>
    <ButtonGroup isDisabled>
      <Button variant="secondary">No, thanks</Button>
      <Button variant="secondary">Remind me later</Button>
      <Button variant="primary">Rate Now</Button>
    </ButtonGroup>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "visual-options-1": Example2,
  "visual-options-2": Example3,
  "visual-options-3": Example4,
  "visual-options-4": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
