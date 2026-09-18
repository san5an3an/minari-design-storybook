// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/tooltip/Tooltip.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Content, ContextualHelp, Flex, Heading, Text, Tooltip, TooltipTrigger } from "@adobe/react-spectrum";
import Delete from '@spectrum-icons/workflow/Delete';
import Edit from '@spectrum-icons/workflow/Edit';
import Question from '@spectrum-icons/workflow/Question';
import Resize from '@spectrum-icons/workflow/Resize';
import Save from '@spectrum-icons/workflow/SaveTo';
import ThumbUp from '@spectrum-icons/workflow/ThumbUp';

function Example1() {
  return (
    <>
    <TooltipTrigger>
      <ActionButton aria-label="Edit Name"><Edit /></ActionButton>
      <Tooltip>Change Name</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example2() {
  return (
    <>
    <TooltipTrigger delay={0}>
      <ActionButton aria-label="Save"><Save /></ActionButton>
      <Tooltip>Saving applies your new settings right away.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example3() {
  return (
    <>
    <Flex gap="size-200">
      <TooltipTrigger>
        <ActionButton>Hover me</ActionButton>
        <Tooltip>I come up after a delay.</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <ActionButton>Then hover me</ActionButton>
        <Tooltip>If you did it quickly, I appear immediately.</Tooltip>
      </TooltipTrigger>
    </Flex>
    </>
  );
}

function Example4() {
  return (
    <>
    <TooltipTrigger placement="end">
      <ActionButton aria-label="Foo">Placement</ActionButton>
      <Tooltip>In left-to-right, this is on the right. In right-to-left, this is on the left.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example5() {
  return (
    <>
    <TooltipTrigger offset={50}>
      <ActionButton aria-label="Offset from trigger">Offset</ActionButton>
      <Tooltip>This will shift up.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example6() {
  return (
    <>
    <TooltipTrigger crossOffset={100} placement="bottom">
      <ActionButton aria-label="Cross Offset from trigger">Cross Offset</ActionButton>
      <Tooltip>This will shift over to the right.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <Flex alignItems="center" gap="size-100">
      <TooltipTrigger isOpen={isOpen} onOpenChange={setOpen}>
        <ActionButton aria-label="Resize"><Resize /></ActionButton>
        <Tooltip>Resize text.</Tooltip>
      </TooltipTrigger>
      <Text>Tooltip is {isOpen ? 'showing' : 'not showing'}</Text>
    </Flex>
  );
}

function Example8() {
  return (
    <>
    <TooltipTrigger>
      <ActionButton aria-label="Approve"><ThumbUp /></ActionButton>
      <Tooltip variant="positive" showIcon>Approve workflow.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example9() {
  return (
    <>
    <TooltipTrigger>
      <ActionButton aria-label="Information"><Question /></ActionButton>
      <Tooltip variant="info" showIcon>More information menu.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example10() {
  return (
    <>
    <TooltipTrigger>
      <ActionButton aria-label="Danger Will Robinson"><Delete /></ActionButton>
      <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example11() {
  return (
    <>
    <TooltipTrigger isDisabled>
      <ActionButton aria-label="Danger Will Robinson" onPress={() => alert('pressed trigger')}><Delete /></ActionButton>
      <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
    </TooltipTrigger>
    </>
  );
}

function Example12() {
  return (
    <>
    <Flex gap="size-100" alignItems="center">
      <TooltipTrigger>
        <ActionButton isDisabled>Delete resource</ActionButton>
        <Tooltip variant="negative" showIcon>Dangerous action.</Tooltip>
      </TooltipTrigger>
      <ContextualHelp variant="info">
          <Heading>Permission required</Heading>
          <Content>Your admin must grant you permission before you can delete resources.</Content>
      </ContextualHelp>
    </Flex>
    </>
  );
}

export const demos = {
  "examples-1": Example1,
  "tooltip-delay-1": Example2,
  "tooltip-delay-2": Example3,
  "tooltip-placement-1": Example4,
  "tooltip-placement-2": Example5,
  "tooltip-placement-3": Example6,
  "events-1": Example,
  "visual-options-1": Example8,
  "visual-options-2": Example9,
  "visual-options-3": Example10,
  "options-1": Example11,
  "usage-on-disabled-or-non-interactive-elements-1": Example12,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
