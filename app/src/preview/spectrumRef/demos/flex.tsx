// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/layout/Flex.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
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
    <Flex direction="row" gap="size-100" wrap>
      {colors.map(color =>
        <View key={color} backgroundColor={color} width="size-800" height="size-800" />
      )}
    </Flex>
    </>
  );
}

function Example5() {
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

function Example6() {
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
  "wrapping": Example4,
  "alignment": Example5,
  "justification": Example6,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
