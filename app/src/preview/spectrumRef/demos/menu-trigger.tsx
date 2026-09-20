// @ts-nocheck
import * as React from "react";
import { ActionButton, Flex, Item, Menu, MenuTrigger, Text, View } from "@adobe/react-spectrum";
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
