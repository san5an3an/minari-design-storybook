// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/menu/MenuTrigger.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Flex, Item, Menu, MenuTrigger, Text } from "@adobe/react-spectrum";
import CloneStamp from '@spectrum-icons/workflow/CloneStamp';
import Crop from '@spectrum-icons/workflow/Crop';
import CropRotate from '@spectrum-icons/workflow/CropRotate';
import Slice from '@spectrum-icons/workflow/Slice';

function Example1() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu>
        <Item>Cut</Item>
        <Item>Copy</Item>
        <Item>Paste</Item>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example() {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <Flex gap="size-100" alignItems="center">
      <MenuTrigger onOpenChange={setIsOpen}>
        <ActionButton>
            Edit
        </ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <div>Currently open: {isOpen.toString()}</div>
    </Flex>
  );
}

function Example3() {
  return (
    <>
    <MenuTrigger trigger="longPress">
      <ActionButton
        aria-label="Crop tool"
        onPress={() => alert('Cropping!')}>
        <Crop />
      </ActionButton>
      <Menu>
        <Item textValue="Crop Rotate">
          <CropRotate />
          <Text>Crop Rotate</Text>
        </Item>
        <Item textValue="Slice">
          <Slice />
          <Text>Slice</Text>
        </Item>
        <Item textValue="Clone stamp">
          <CloneStamp />
          <Text>Clone Stamp</Text>
        </Item>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example4() {
  return (
    <>
    <Flex gap="size-100">
      <MenuTrigger align="start">
        <ActionButton>Edit</ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <MenuTrigger align="end" direction="top" shouldFlip={false}>
        <ActionButton>View</ActionButton>
        <Menu>
          <Item key="side">Side bar</Item>
          <Item key="options">Page options</Item>
          <Item key="edit">Edit Panel</Item>
        </Menu>
      </MenuTrigger>
      <MenuTrigger direction="start" align="start">
        <ActionButton>Edit</ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <MenuTrigger direction="end" align="end">
        <ActionButton>View</ActionButton>
        <Menu>
          <Item key="side">Side bar</Item>
          <Item key="options">Page options</Item>
          <Item key="edit">Edit Panel</Item>
        </Menu>
      </MenuTrigger>
    </Flex>
    </>
  );
}

function Example5() {
  return (
    <>
    <MenuTrigger closeOnSelect={false}>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example6() {
  return (
    <>
    <Flex gap="size-100">
      <MenuTrigger shouldFlip>
        <ActionButton>
          View
        </ActionButton>
        <Menu>
          <Item key="side">Side bar</Item>
          <Item key="options">Page options</Item>
          <Item key="edit">Edit Panel</Item>
        </Menu>
      </MenuTrigger>
      <MenuTrigger shouldFlip={false}>
        <ActionButton>
          Edit
        </ActionButton>
        <Menu>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
    </Flex>
    </>
  );
}

function Example_2() {
  let [open, setOpen] = React.useState(false);

  return (
    <MenuTrigger
      isOpen={open}
      onOpenChange={setOpen}>
      <ActionButton>
        View
      </ActionButton>
      <Menu selectionMode="multiple">
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </Menu>
    </MenuTrigger>
  );
}

export const demos = {
  "example": Example1,
  "events": Example,
  "long-press": Example3,
  "align-and-direction": Example4,
  "close-on-selection": Example5,
  "flipping": Example6,
  "open": Example_2,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
