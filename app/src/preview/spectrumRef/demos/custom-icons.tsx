// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/icon/custom-icons.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Button, Flex, Icon, Text } from "@adobe/react-spectrum";

function CustomIcon(props) {
  return(
    <Icon {...props}>
      <svg viewBox="0 0 36 36">
        <path d="M18.477.593,22.8,12.029l12.212.578a.51.51,0,0,1,.3.908l-9.54,7.646,3.224,11.793a.51.51,0,0,1-.772.561L18,26.805,7.78,33.515a.51.51,0,0,1-.772-.561l3.224-11.793L.692,13.515a.51.51,0,0,1,.3-.908L13.2,12.029,17.523.593A.51.51,0,0,1,18.477.593Z" />
      </svg>
    </Icon>
  );
}

<CustomIcon aria-label="Star" />

function Example2() {
  return (
    <>
    <Button variant="primary">
      <CustomIcon />
      <Text>Favorite</Text>
    </Button>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex gap="size-100">
      <CustomIcon aria-label="XXS Star" size="XXS" />
      <CustomIcon aria-label="XS Star" size="XS" />
      <CustomIcon aria-label="S Star" size="S" />
      <CustomIcon aria-label="M Star" size="M" />
      <CustomIcon aria-label="L Star" size="L" />
      <CustomIcon aria-label="XL Star" size="XL" />
      <CustomIcon aria-label="XXL Star" size="XXL" />
    </Flex>
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-100">
      <CustomIcon aria-label="Default Star" />
      <CustomIcon aria-label="Negative Star" color="negative" />
      <CustomIcon aria-label="Notification Star" color="notice" />
      <CustomIcon aria-label="Positive Star" color="positive" />
      <CustomIcon aria-label="Informative Star" color="informative" />
    </Flex>
    </>
  );
}

export const demos = {
  "example-1": CustomIcon,
  "example-2": Example2,
  "sizing-1": Example3,
  "coloring-1": Example4,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
