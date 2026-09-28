// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/actiongroup/ActionGroup.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionGroup, Flex, Item, Text, View } from "@adobe/react-spectrum";
import Brush from '@spectrum-icons/workflow/Brush';
import RegionSelect from '@spectrum-icons/workflow/RegionSelect';
import Select from '@spectrum-icons/workflow/Select';
import ViewList from '@spectrum-icons/workflow/ViewList';
import ViewGrid from '@spectrum-icons/workflow/ViewGrid';
import ViewCard from '@spectrum-icons/workflow/ViewCard';
import Move from '@spectrum-icons/workflow/Move';
import Duplicate from '@spectrum-icons/workflow/Duplicate';
import TagBold from '@spectrum-icons/workflow/TagBold';
import TagItalic from '@spectrum-icons/workflow/TagItalic';
import TagUnderline from '@spectrum-icons/workflow/TagUnderline';
import TextStrikethrough from '@spectrum-icons/workflow/TextStrikethrough';
import TextAlignCenter from '@spectrum-icons/workflow/TextAlignCenter';
import TextAlignJustify from '@spectrum-icons/workflow/TextAlignJustify';
import TextAlignLeft from '@spectrum-icons/workflow/TextAlignLeft';
import TextAlignRight from '@spectrum-icons/workflow/TextAlignRight';
import Draw from '@spectrum-icons/workflow/Draw';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';
import type {Selection} from '@adobe/react-spectrum';
import type {Key} from '@adobe/react-spectrum';
import TextStyle from '@spectrum-icons/workflow/TextStyle';

function Example() {
  let [action, setAction] = React.useState(null);

  return (
    <>
      <ActionGroup onAction={setAction}>
        <Item key="add">Add</Item>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </ActionGroup>
      <p>Action: {action}</p>
    </>
  );
}

function Example2() {
  const items = [
    {label: 'React', name: 'React'},
    {label: 'Add', name: 'Add'},
    {label: 'Delete', name: 'Delete'}
  ];
  
  return (
    <>
    <ActionGroup items={items}>
      {item => <Item key={item.name}>{item.label}</Item>}
    </ActionGroup>
    </>
  );
}

function Example3() {
  return (
    <>
    <ActionGroup>
      <Item key="edit">
        <Draw />
        <Text>Edit</Text>
      </Item>
      <Item key="copy">
        <Copy />
        <Text>Copy</Text>
      </Item>
      <Item key="delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example4() {
  return (
    <>
    <ActionGroup buttonLabelBehavior="hide">
      <Item key="edit">
        <Draw />
        <Text>Edit</Text>
      </Item>
      <Item key="copy">
        <Copy />
        <Text>Copy</Text>
      </Item>
      <Item key="delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example5() {
  return (
    <>
    <ActionGroup>
      <Item key="brush" aria-label="Brush"><Brush /></Item>
      <Item key="select" aria-label="Select"><Select /></Item>
      <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
    </ActionGroup>
    </>
  );
}

function Example6() {
  return (
    <>
    <ActionGroup selectionMode="single" defaultSelectedKeys={['list']}>
      <Item key="grid">Grid view</Item>
      <Item key="list">List view</Item>
      <Item key="gallery">Gallery view</Item>
    </ActionGroup>
    </>
  );
}

function Example_2() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['list']));

  return (
    <>
      <ActionGroup selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
        <Item key="grid">Grid view</Item>
        <Item key="list">List view</Item>
        <Item key="gallery">Gallery view</Item>
      </ActionGroup>
      <p>Current selection (controlled): {[...selected]}</p>
    </>
  );
}

function Example_3() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['list']));

  return (
    <>
      <ActionGroup selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        <Item key="grid">Grid view</Item>
        <Item key="list">List view</Item>
        <Item key="gallery">Gallery view</Item>
      </ActionGroup>
      <p>Current selections (controlled): {[...selected].join(', ')}</p>
    </>
  );
}

function Example_4() {
  let [actionKey, setActionKey] = React.useState<Key>('');
  return (
    <>
      <ActionGroup onAction={setActionKey}>
        <Item key="add">Add</Item>
        <Item key="delete">Delete</Item>
        <Item key="edit">Edit</Item>
      </ActionGroup>
      <p>Action: {actionKey}</p>
    </>
  );
}

function Example10() {
  return (
    <>
    <ActionGroup overflowMode="collapse" maxWidth={250}>
      <Item key="edit">
        <Draw />
        <Text>Edit</Text>
      </Item>
      <Item key="copy">
        <Copy />
        <Text>Copy</Text>
      </Item>
      <Item key="delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
      <Item key="move">
        <Move />
        <Text>Move</Text>
      </Item>
      <Item key="duplicate">
        <Duplicate />
        <Text>Duplicate</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example11() {
  return (
    <>
    <ActionGroup
      aria-label="Text style"
      overflowMode="collapse"
      selectionMode="multiple"
      isEmphasized
      summaryIcon={<TextStyle />}
      maxWidth={100}>
      <Item key="bold">
        <TagBold />
        <Text>Bold</Text>
      </Item>
      <Item key="italic">
        <TagItalic />
        <Text>Italic</Text>
      </Item>
      <Item key="underline">
        <TagUnderline />
        <Text>Underline</Text>
      </Item>
      <Item key="strike">
        <TextStrikethrough />
        <Text>Strikethrough</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example12() {
  return (
    <>
    <ActionGroup
      aria-label="Text alignment"
      overflowMode="collapse"
      selectionMode="single"
      defaultSelectedKeys={['left']}
      disallowEmptySelection
      buttonLabelBehavior="hide"
      isEmphasized
      maxWidth={100}>
      <Item key="left">
        <TextAlignLeft />
        <Text>Align Left</Text>
      </Item>
      <Item key="center">
        <TextAlignCenter />
        <Text>Align Center</Text>
      </Item>
      <Item key="right">
        <TextAlignRight />
        <Text>Align Right</Text>
      </Item>
      <Item key="justify">
        <TextAlignJustify />
        <Text>Justify</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example13() {
  return (
    <>
    <ActionGroup overflowMode="collapse" buttonLabelBehavior="collapse" maxWidth={180}>
      <Item key="edit">
        <Draw />
        <Text>Edit</Text>
      </Item>
      <Item key="copy">
        <Copy />
        <Text>Copy</Text>
      </Item>
      <Item key="delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
      <Item key="move">
        <Move />
        <Text>Move</Text>
      </Item>
      <Item key="duplicate">
        <Duplicate />
        <Text>Duplicate</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example14() {
  return (
    <>
    <ActionGroup overflowMode="collapse" orientation="vertical" buttonLabelBehavior="hide" maxHeight={150}>
      <Item key="edit">
        <Draw />
        <Text>Edit</Text>
      </Item>
      <Item key="copy">
        <Copy />
        <Text>Copy</Text>
      </Item>
      <Item key="delete">
        <Delete />
        <Text>Delete</Text>
      </Item>
      <Item key="move">
        <Move />
        <Text>Move</Text>
      </Item>
      <Item key="duplicate">
        <Duplicate />
        <Text>Duplicate</Text>
      </Item>
    </ActionGroup>
    </>
  );
}

function Example15() {
  return (
    <>
    <ActionGroup isQuiet>
      <Item key="add">Add</Item>
      <Item key="delete">Delete</Item>
      <Item key="edit">Edit</Item>
    </ActionGroup>
    </>
  );
}

function Example16() {
  return (
    <>
    <ActionGroup
      isEmphasized
      selectionMode="single"
      defaultSelectedKeys={['list']}>
      <Item key="grid">Grid view</Item>
      <Item key="list">List view</Item>
      <Item key="gallery">Gallery view</Item>
    </ActionGroup>
    </>
  );
}

function Example17() {
  return (
    <>
    <Flex wrap gap="size-250">
      <View backgroundColor="static-blue-700" padding="size-500">
        <ActionGroup staticColor="white">
          <Item key="edit">
            <Draw />
            <Text>Edit</Text>
          </Item>
          <Item key="copy">
            <Copy />
            <Text>Copy</Text>
          </Item>
          <Item key="delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionGroup>
      </View>
      <View backgroundColor="static-yellow-400" padding="size-500">
        <ActionGroup
          staticColor="black"
          isQuiet
          buttonLabelBehavior="hide"
          selectionMode="single"
          disallowEmptySelection
          defaultSelectedKeys={['list']}>
          <Item key="list">
            <ViewList />
            <Text>List view</Text>
          </Item>
          <Item key="grid">
            <ViewGrid />
            <Text>Grid view</Text>
          </Item>
          <Item key="gallery">
            <ViewCard />
            <Text>Gallery view</Text>
          </Item>
        </ActionGroup>
      </View>
    </Flex>
    </>
  );
}

function Example18() {
  return (
    <>
    <ActionGroup isDisabled>
      <Item key="add">Add</Item>
      <Item key="delete">Delete</Item>
      <Item key="edit">Edit</Item>
    </ActionGroup>
    </>
  );
}

function Example19() {
  return (
    <>
    <ActionGroup disabledKeys={['add', 'delete']}>
      <Item key="add">Add</Item>
      <Item key="delete">Delete</Item>
      <Item key="edit">Edit</Item>
    </ActionGroup>
    </>
  );
}

function Example20() {
  return (
    <>
    <ActionGroup orientation="vertical">
      <Item key="brush" aria-label="Brush"><Brush /></Item>
      <Item key="select" aria-label="Select"><Select /></Item>
      <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
    </ActionGroup>
    </>
  );
}

function Example21() {
  return (
    <>
    <ActionGroup density="compact">
      <Item key="brush" aria-label="Brush"><Brush /></Item>
      <Item key="select" aria-label="Select"><Select /></Item>
      <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
    </ActionGroup>
    </>
  );
}

function Example22() {
  return (
    <>
    <ActionGroup isQuiet density="compact">
      <Item key="brush" aria-label="Brush"><Brush /></Item>
      <Item key="select" aria-label="Select"><Select /></Item>
      <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
    </ActionGroup>
    </>
  );
}

function Example23() {
  return (
    <>
    <Flex width="size-2000" direction="column">
      <ActionGroup isJustified>
        <Item key="brush" aria-label="Brush"><Brush /></Item>
        <Item key="select" aria-label="Select"><Select /></Item>
        <Item key="regionSelect" aria-label="Select Region"><RegionSelect /></Item>
      </ActionGroup>
    </Flex>
    </>
  );
}

export const demos = {
  "example-1": Example,
  "content-1": Example2,
  "content-2": Example3,
  "content-3": Example4,
  "content-4": Example5,
  "selection-1": Example6,
  "selection-2": Example_2,
  "selection-3": Example_3,
  "events-1": Example_4,
  "collapsing-behavior-1": Example10,
  "collapsing-behavior-2": Example11,
  "collapsing-behavior-3": Example12,
  "collapsing-behavior-4": Example13,
  "collapsing-behavior-5": Example14,
  "visual-options-1": Example15,
  "visual-options-2": Example16,
  "visual-options-3": Example17,
  "visual-options-4": Example18,
  "visual-options-5": Example19,
  "visual-options-6": Example20,
  "visual-options-7": Example21,
  "visual-options-8": Example22,
  "visual-options-9": Example23,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
