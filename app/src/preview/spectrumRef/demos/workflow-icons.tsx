// @ts-nocheck
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
