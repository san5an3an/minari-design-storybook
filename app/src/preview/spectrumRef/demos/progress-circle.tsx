// @ts-nocheck
import { ProgressCircle, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ProgressCircle aria-label="Loading…" value={50} />
    </>
  );
}

function Example2() {
  return (
    <>
    <ProgressCircle aria-label="Loading…" value={25} />
    </>
  );
}

function Example3() {
  return (
    <>
    <ProgressCircle aria-label="Loading…" minValue={50} maxValue={150} value={100} />
    </>
  );
}

function Example4() {
  return (
    <>
    <ProgressCircle aria-label="Loading…" value={50} />
    </>
  );
}

function Example5() {
  return (
    <>
    <ProgressCircle aria-label="Loading…" isIndeterminate />
    </>
  );
}

function Example6() {
  return (
    <>
    <View backgroundColor="static-blue-700" padding="size-300">
      <ProgressCircle aria-label="Loading…" staticColor="white" isIndeterminate />
    </View>
    <View backgroundColor="static-yellow-400" padding="size-300">
      <ProgressCircle aria-label="Loading…" staticColor="black" isIndeterminate />
    </View>
    </>
  );
}

function Example7() {
  return (
    <>
    <ProgressCircle aria-label="Loading…" marginEnd="size-300" size="S" value={15} />
    <ProgressCircle aria-label="Loading…" marginEnd="size-300" value={30} />
    <ProgressCircle aria-label="Loading…" size="L" value={60} />
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example2,
  "value-2": Example3,
  "value-3": Example4,
  "value-4": Example5,
  "visual-options-1": Example6,
  "visual-options-2": Example7,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
