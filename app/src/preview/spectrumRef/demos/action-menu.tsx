// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/menu/ActionMenu.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionMenu, Flex, Item, Keyboard, Section, Text } from "@adobe/react-spectrum";
import Copy from '@spectrum-icons/workflow/Copy';
import Cut from '@spectrum-icons/workflow/Cut';
import Paste from '@spectrum-icons/workflow/Paste';

function Example1() {
  return (
    <>
    <ActionMenu>
      <Item>Cut</Item>
      <Item>Copy</Item>
      <Item>Paste</Item>
    </ActionMenu>
    </>
  );
}

function Example() {
  let actionMenuItems = [
    {name: 'Cut'},
    {name: 'Copy'},
    {name: 'Paste'},
    {name: 'Select All'}
  ];

  return (
    <ActionMenu items={actionMenuItems}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </ActionMenu>
  );
}

function Example_2() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <ActionMenu onAction={setAction}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
      <p>Action: {action}</p>
    </>
  );
}

function Example4() {
  return (
    <>
    <ActionMenu>
      <Item href="https://adobe.com/" target="_blank">Adobe</Item>
      <Item href="https://apple.com/" target="_blank">Apple</Item>
      <Item href="https://google.com/" target="_blank">Google</Item>
      <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
    </ActionMenu>
    </>
  );
}

function Example5() {
  return (
    <>
    <ActionMenu>
      <Section title="File">
        <Item key="new">New</Item>
        <Item key="open">Open...</Item>
      </Section>
      <Section title="Save">
        <Item key="save">Save</Item>
        <Item key="saveAs">Save As...</Item>
        <Item key="saveAll">Save All</Item>
      </Section>
    </ActionMenu>
    </>
  );
}

function Example_3() {
  let openWindows = [
    {
      name: 'Reversion',
      id: 'reversion',
      children: [
        {id: 'undo', name: 'Undo'},
        {id: 'redo', name: 'Redo'}
      ]
    },
    {
      name: 'Clipboard',
      id: 'clipboard',
      children: [
        {id: 'cut', name: 'Cut'},
        {id: 'copy', name: 'Copy'},
        {id: 'paste', name: 'Paste'}
      ]
    }
  ];

  return (
    <ActionMenu
      items={openWindows}>
      {item => (
        <Section items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ActionMenu>
  );
}

function Example7() {
  return (
    <>
    <ActionMenu>
      <Item key="cut" textValue="cut">
        <Cut />
        <Text>Cut</Text>
        <Keyboard>⌘X</Keyboard>
      </Item>
      <Item key="copy" textValue="copy">
        <Copy />
        <Text>Copy</Text>
        <Keyboard>⌘C</Keyboard>
      </Item>
      <Item key="paste" textValue="paste">
        <Paste />
        <Text>Paste</Text>
        <Keyboard>⌘V</Keyboard>
      </Item>
    </ActionMenu>
    </>
  );
}

function Example8() {
  return (
    <>
    <ActionMenu
      isQuiet
      items={[
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
      ]}>
      {item => <Item>{item.name}</Item>}
    </ActionMenu>
    </>
  );
}

function Example9() {
  return (
    <>
    <ActionMenu
      items={[
        {name: 'Undo', id: 'undo'},
        {name: 'Redo', id: 'redo'},
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
      ]}
      isDisabled>
      {item => <Item>{item.name}</Item>}
    </ActionMenu>
    </>
  );
}

function Example10() {
  return (
    <>
    <ActionMenu
      items={[
        {name: 'Undo', id: 'undo'},
        {name: 'Redo', id: 'redo'},
        {name: 'Cut', id: 'cut'},
        {name: 'Copy', id: 'copy'},
        {name: 'Paste', id: 'paste'}
      ]}
      disabledKeys={['redo', 'paste']}>
      {item => <Item>{item.name}</Item>}
    </ActionMenu>
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex gap="size-100">
      <ActionMenu align="start">
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
      <ActionMenu align="end" direction="top" shouldFlip={false}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
      <ActionMenu direction="start" align="start">
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
      <ActionMenu direction="end" align="end">
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <Flex gap="size-100">
      <ActionMenu shouldFlip>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
      <ActionMenu shouldFlip={false}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
      </ActionMenu>
    </Flex>
    </>
  );
}

function Example_4() {
  let [open, setOpen] = React.useState(false);

  return (
    <ActionMenu
      isOpen={open}
      onOpenChange={setOpen}>
      <Item key="cut">Cut</Item>
      <Item key="copy">Copy</Item>
      <Item key="paste">Paste</Item>
    </ActionMenu>
  );
}

export const demos = {
  "example": Example1,
  "content": Example,
  "events": Example_2,
  "links": Example4,
  "static-items": Example5,
  "dynamic-items": Example_3,
  "complex-menu-items": Example7,
  "quiet": Example8,
  "disabled": Example9,
  "disabled-items": Example10,
  "align-and-direction": Example11,
  "flipping": Example12,
  "open": Example_4,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
