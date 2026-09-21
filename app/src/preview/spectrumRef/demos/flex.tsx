// @ts-nocheck
import { Flex, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Flex direction="column" width="size-2000" gap="size-100">
      <View backgroundColor="celery-600" height="size-800" />
      <View backgroundColor="blue-600" height="size-800" />
      <View backgroundColor="magenta-600" height="size-800" />
    </Flex>
    </>
  );
}

function Example2() {
  return (
    <>
    <Flex direction="row" height="size-800" gap="size-100">
      <View backgroundColor="celery-600" width="size-800" />
      <View backgroundColor="blue-600" width="size-800" />
      <View backgroundColor="magenta-600" width="size-800" />
    </Flex>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex direction="column" gap="size-100">
      <View backgroundColor="celery-600" height="size-800" />
      <Flex direction="row" height="size-3000" gap="size-100">
        <View backgroundColor="indigo-600" width="size-2000" />
        <View backgroundColor="seafoam-600" flex />
      </Flex>
      <View backgroundColor="magenta-600" height="size-800" />
    </Flex>
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex direction="column" gap="size-100" alignItems="center">
      <View backgroundColor="celery-600" width="size-800" height="size-800" />
      <View backgroundColor="blue-600" width="size-2000" height="size-800" />
      <View backgroundColor="magenta-600" width="size-800" height="size-800" />
    </Flex>
    </>
  );
}

function Example5() {
  return (
    <>
    <View height="size-3000" borderWidth="thin" borderColor="dark">
      <Flex direction="column" gap="size-100" justifyContent="center" height="100%">
        <View backgroundColor="celery-600" width="size-800" height="size-800" />
        <View backgroundColor="blue-600" width="size-2000" height="size-800" />
        <View backgroundColor="magenta-600" width="size-800" height="size-800" />
      </Flex>
    </View>
    </>
  );
}

export const demos = {
  "vertical-stack": Example1,
  "horizontal-stack": Example2,
  "nesting": Example3,
  "alignment": Example4,
  "justification": Example5,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "wrapping": { code: "runtime-unavailable", detail: "공식 펜스가 문서 사이트가 미리 깔아 둔 `colors` 배열에 기대요 — 설치본에는 없는 값이에요." },
};
