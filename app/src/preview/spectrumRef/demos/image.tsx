// @ts-nocheck
import { Flex, Image } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Image src="https://i.imgur.com/Z7AzH2c.png" alt="Sky and roof" />
    </>
  );
}

function Example2() {
  return (
    <>
    <Flex width="200px">
      <Image src="https://i.imgur.com/c3gTKSJ.jpg" alt="" />
    </Flex>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex width="100%" height="200px">
      <Image
        src="https://i.imgur.com/c3gTKSJ.jpg"
        alt="Eiffel Tower at sunset"
        objectFit="cover" />
    </Flex>
    </>
  );
}

export const demos = {
  "examples": Example1,
  "decorative": Example2,
  "object-fit": Example3,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
