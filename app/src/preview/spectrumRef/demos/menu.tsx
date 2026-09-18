// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/menu/Menu.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, Content, ContextualHelpTrigger, Dialog, Heading, Item, Keyboard, Menu, MenuTrigger, Section, SubmenuTrigger, Text } from "@adobe/react-spectrum";
import Copy from '@spectrum-icons/workflow/Copy';
import Cut from '@spectrum-icons/workflow/Cut';
import Paste from '@spectrum-icons/workflow/Paste';
import type {Selection} from '@adobe/react-spectrum';

function Example1() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu onAction={(key) => alert(key)}>
        <Item key="cut">Cut</Item>
        <Item key="copy">Copy</Item>
        <Item key="paste">Paste</Item>
        <Item key="replace">Replace</Item>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example() {
  let menuItems = [
    {name: 'Cut'},
    {name: 'Copy'},
    {name: 'Paste'},
    {name: 'Replace'}
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu items={menuItems}>
        {item => <Item key={item.name}>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
  );
}

function Example_2() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Edit
        </ActionButton>
        <Menu onAction={setAction}>
          <Item key="cut">Cut</Item>
          <Item key="copy">Copy</Item>
          <Item key="paste">Paste</Item>
        </Menu>
      </MenuTrigger>
      <p>Action: {action}</p>
    </>
  );
}

function Example_3() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['middle']));

  return (
    <>
      <MenuTrigger>
        <ActionButton>
          Align
        </ActionButton>
        <Menu selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Menu>
      </MenuTrigger>
      <p>Current selection (controlled): {[...selected]}</p>
    </>
  );
}

function Example_4() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['Sidebar', 'Console']));

  return (
    <>
      <MenuTrigger closeOnSelect={false}>
        <ActionButton>
          Show
        </ActionButton>
        <Menu selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
          <Item key='Sidebar'>Sidebar</Item>
          <Item key='Searchbar'>Searchbar</Item>
          <Item key='Tools'>Tools</Item>
          <Item key='Console'>Console</Item>
        </Menu>
      </MenuTrigger>
      <p>Current selection (controlled): {selected === 'all' ? 'all' : [...selected].join(', ')}</p>
    </>
  );
}

function Example6() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>Links</ActionButton>
      <Menu>
        <Item href="https://adobe.com/" target="_blank">Adobe</Item>
        <Item href="https://apple.com/" target="_blank">Apple</Item>
        <Item href="https://google.com/" target="_blank">Google</Item>
        <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example_5() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['bold', 'left']));

  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        <Section title="Styles">
          <Item key="bold">Bold</Item>
          <Item key="underline">Underline</Item>
        </Section>
        <Section title="Align">
          <Item key="left">Left</Item>
          <Item key="middle">Middle</Item>
          <Item key="right">Right</Item>
        </Section>
      </Menu>
    </MenuTrigger>
  );
}

function Example_6() {
  let [selected, setSelected] = React.useState<Selection>(new Set([1,3]));
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        {id: 1, name: 'Final Copy (1)'}
      ]
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        {id: 2, name: 'index.ts'},
        {id: 3, name: 'package.json'},
        {id: 4, name: 'license.txt'}
      ]
    }
  ];

  return (
    <MenuTrigger>
      <ActionButton>
        Window
      </ActionButton>
      <Menu
        items={openWindows}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}>
        {item => (
          <Section items={item.children} title={item.name}>
            {item => <Item>{item.name}</Item>}
          </Section>
        )}
      </Menu>
    </MenuTrigger>
  );
}

function Example9() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu>
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
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example10() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>Edit</ActionButton>
      <Menu>
        <Item key="undo">Undo</Item>
        <Item key="redo">Redo</Item>
        <ContextualHelpTrigger isUnavailable>
          <Item key="cut">Cut</Item>
          <Dialog>
            <Heading>Cut</Heading>
            <Content>Please select text for 'Cut' to be enabled.</Content>
          </Dialog>
        </ContextualHelpTrigger>
        <ContextualHelpTrigger isUnavailable>
          <Item key="copy">Copy</Item>
          <Dialog>
            <Heading>Copy</Heading>
            <Content>Please select text for 'Copy' to be enabled.</Content>
          </Dialog>
        </ContextualHelpTrigger>
        <ContextualHelpTrigger>
          <Item key="paste">Paste</Item>
          <Dialog>
            <Heading>Paste</Heading>
            <Content>You have nothing to 'Paste'.</Content>
          </Dialog>
        </ContextualHelpTrigger>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example11() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>Actions</ActionButton>
      <Menu onAction={(key) => alert(`Root menu ${key} action`)}>
        <Item key="Copy">Copy</Item>
        <Item key="Cut">Cut</Item>
        <Item key="Paste">Paste</Item>
          <SubmenuTrigger>
            <Item key="Share">Share</Item>
            <Menu onAction={(key) => alert(`Share menu ${key} action`)}>
              <Item key="Copy Link">Copy Link</Item>
              <SubmenuTrigger>
                <Item key="Email">Email</Item>
                <Menu onAction={(key) => alert(`Email menu ${key} action`)}>
                  <Item key="Attachment">Email as Attachment</Item>
                  <Item key="Link">Email as Link</Item>
                </Menu>
              </SubmenuTrigger>
              <Item key="SMS">SMS</Item>
            </Menu>
          </SubmenuTrigger>
        <Item key="Delete">Delete</Item>
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example12() {
  let items = [
    {name: 'Copy'},
    {name: 'Cut'},
    {name: 'Paste'},
    {name: 'Share', children: [
      {name: 'Copy Link'},
      {name: 'Email', children: [
        {name: 'Email as Attachment'},
        {name: 'Email as Link'},
      ]},
      {name: 'SMS'},
    ]},
    {name: 'Delete'}
  ];
  
  return (
    <>
    <MenuTrigger>
      <ActionButton>Actions</ActionButton>
      <Menu items={items}>
        {function renderSubmenu(item) {
          if (item.children) {
            return (
              <SubmenuTrigger>
                <Item key={item.name}>{item.name}</Item>
                <Menu items={item.children}>
                  {(item) => renderSubmenu(item)}
                </Menu>
              </SubmenuTrigger>
            );
          } else {
            return <Item key={item.name}>{item.name}</Item>;
          }
        }}
      </Menu>
    </MenuTrigger>
    </>
  );
}

function Example13() {
  return (
    <>
    <MenuTrigger>
      <ActionButton>
        Filter
      </ActionButton>
      <Menu
        items={[
          {name: 'tiff', id: 'a1b2c3'},
          {name: 'png', id: 'g5h1j9'},
          {name: 'jpg', id: 'p8k3i4'},
          {name: 'PDF', id: 'j7i3a0'}
        ]}
        disabledKeys={['a1b2c3', 'p8k3i4']}>
        {item => <Item>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
    </>
  );
}

export const demos = {
  "example-1": Example1,
  "content-1": Example,
  "events-1": Example_2,
  "selection-1": Example_3,
  "selection-2": Example_4,
  "links-1": Example6,
  "sections-1": Example_5,
  "sections-2": Example_6,
  "complex-menu-items-1": Example9,
  "unavailable-items-1": Example10,
  "submenus-1": Example11,
  "submenus-2": Example12,
  "visual-options-1": Example13,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
