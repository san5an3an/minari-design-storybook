// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/avatar/Avatar.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Avatar, Flex } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Avatar src="https://i.imgur.com/kJOwAdv.png" alt="default Adobe avatar" />
    </>
  );
}

function Example2() {
  return (
    <>
    <Avatar src="https://i.imgur.com/kJOwAdv.png" alt="default Adobe avatar" isDisabled />
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex gap="size-100" wrap>
      {[50, 75, 100, 200, 300, 400, 500, 600, 700].map(size => (
        <Avatar key={size} src="https://i.imgur.com/kJOwAdv.png" alt="default Adobe avatar" size={`avatar-size-${size}`} />
      ))}
      <Avatar src="https://i.imgur.com/kJOwAdv.png" alt="avatar with custom size" size={50} />
    </Flex>
    </>
  );
}

export const demos = {
  "example": Example1,
  "disabled": Example2,
  "size": Example3,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
