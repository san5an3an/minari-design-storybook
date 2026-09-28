// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/image/Image.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
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
