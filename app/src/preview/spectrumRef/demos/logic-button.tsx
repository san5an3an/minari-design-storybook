// @ts-nocheck
import * as React from "react";
import { LogicButton } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <LogicButton variant="and">And</LogicButton>
    </>
  );
}

function Example2() {
  return (
    <>
    <LogicButton variant="or">Or</LogicButton>
    </>
  );
}

function Example() {
  let [variant, setVariant] = React.useState<'and' | 'or'>('or');

  return (
    <LogicButton variant={variant} onPress={() => setVariant(variant === 'or' ? 'and' : 'or')}>{variant}</LogicButton>
  );
}

function Example4() {
  return (
    <>
    <LogicButton variant="or" marginEnd="20px">Or</LogicButton>
    <LogicButton variant="and">And</LogicButton>
    </>
  );
}

function Example5() {
  return (
    <>
    <LogicButton variant="or" isDisabled>Or</LogicButton>
    </>
  );
}

export const demos = {
  "example": Example1,
  "content": Example2,
  "events": Example,
  "variant": Example4,
  "disabled": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
