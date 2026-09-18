// @ts-nocheck
import { Flex, ProgressBar, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <ProgressBar label="Loading…" value={50} />
    </>
  );
}

function Example2() {
  return (
    <>
    <ProgressBar label="Loading…" value={25} />
    </>
  );
}

function Example3() {
  return (
    <>
    <ProgressBar label="Loading…" minValue={50} maxValue={150} value={100} />
    </>
  );
}

function Example4() {
  return (
    <>
    <ProgressBar label="Loading…" formatOptions={{style: 'currency', currency: 'JPY'}} value={60} />
    </>
  );
}

function Example5() {
  return (
    <>
    <ProgressBar label="Loading…" value={50} />
    </>
  );
}

function Example6() {
  return (
    <>
    <ProgressBar label="Loading…" isIndeterminate />
    </>
  );
}

function Example7() {
  return (
    <>
    <Flex direction="column" maxWidth="size-3000" gap="size-300">
      <ProgressBar label="Loading…" value={30} />
      <ProgressBar label="Loading…" labelPosition="side" value={30} />
      <ProgressBar label="Loading…" showValueLabel={false} value={30} />
    </Flex>
    </>
  );
}

function Example8() {
  return (
    <>
    <Flex direction="column" maxWidth="size-3000" gap="size-300">
      <ProgressBar label="Loading…" showValueLabel={false} value={30} />
      <ProgressBar label="Loading…" valueLabel="30 of 60 dogs" value={30} />
      <ProgressBar label="Loading…" formatOptions={{style: 'percent', minimumFractionDigits: 2}} value={30.123} />
    </Flex>
    </>
  );
}

function Example9() {
  return (
    <>
    <View backgroundColor="static-blue-700" padding="size-300">
      <ProgressBar label="Loading…" staticColor="white" value={5} />
    </View>
    <View backgroundColor="static-yellow-400" padding="size-300">
      <ProgressBar label="Loading…" staticColor="black" value={5} />
    </View>
    </>
  );
}

function Example10() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <ProgressBar label="Small" size="S" value={70} />
      <ProgressBar label="Large" size="L" value={70} />
    </Flex>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "value-1": Example2,
  "value-2": Example3,
  "value-3": Example4,
  "value-4": Example5,
  "value-5": Example6,
  "labeling-1": Example7,
  "labeling-2": Example8,
  "visual-options-1": Example9,
  "visual-options-2": Example10,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
