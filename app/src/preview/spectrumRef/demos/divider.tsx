// @ts-nocheck
import { Divider, Flex, Text } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Flex direction="column" gap="size-125">
      <Text>Content above</Text>
      <Divider />
      <Text>Content below</Text>
    </Flex>
    </>
  );
}

function Example2() {
  return (
    <>
    <Flex gap="size-125">
      <Text>Content left</Text>
      <Divider orientation="vertical" />
      <Text>Content right</Text>
    </Flex>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex direction="column" gap="size-125">
      <Text>Content above large Divider</Text>
      <Divider size="L" />
      <Text>Content above medium Divider</Text>
      <Divider size="M" />
      <Text>Content above small Divider</Text>
      <Divider size="S" />
    </Flex>
    </>
  );
}

export const demos = {
  "horizontal": Example1,
  "vertical": Example2,
  "size": Example3,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
