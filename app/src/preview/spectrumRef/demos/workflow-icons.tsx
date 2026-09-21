// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/icon/workflow-icons.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import { Flex } from "@adobe/react-spectrum";
import Airplane from '@spectrum-icons/workflow/Airplane';
import Beaker from '@spectrum-icons/workflow/Beaker';
import Alert from '@spectrum-icons/workflow/Alert';
import LockClosed from '@spectrum-icons/workflow/LockClosed';

function Example1() {
  return (
    <>
    <Airplane aria-label="Airplane" />
    </>
  );
}

function Example2() {
  return (
    <>
    <Flex gap="size-100">
      <Beaker aria-label="XXS Beaker" size="XXS" />
      <Beaker aria-label="XS Beaker" size="XS" />
      <Beaker aria-label="S Beaker" size="S" />
      <Beaker aria-label="M Beaker" size="M" />
      <Beaker aria-label="L Beaker" size="L" />
      <Beaker aria-label="XL Beaker" size="XL" />
      <Beaker aria-label="XXL Beaker" size="XXL" />
    </Flex>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex gap="size-100">
      <Alert aria-label="Default Alert" />
      <Alert aria-label="Negative Alert" color="negative" />
      <Alert aria-label="Notification Alert" color="notice" />
      <Alert aria-label="Positive Alert" color="positive" />
      <Alert aria-label="Informative Alert" color="informative" />
    </Flex>
    </>
  );
}

function Example4() {
  return (
    <>
    <LockClosed aria-label="Locked" />
    </>
  );
}

export const demos = {
  "example": Example1,
  "sizing": Example2,
  "coloring": Example3,
  "labeling": Example4,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
