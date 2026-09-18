// @ts-nocheck
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
