// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/actionbar/ActionBar.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionBar, ActionBarContainer, Cell, Column, Flex, Item, ListView, Row, TableBody, TableHeader, TableView, Text } from "@adobe/react-spectrum";
import Edit from '@spectrum-icons/workflow/Edit';
import Copy from '@spectrum-icons/workflow/Copy';
import Delete from '@spectrum-icons/workflow/Delete';
import type {Selection} from '@adobe/react-spectrum';

function Example() {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} maxWidth="size-6000">
      <ListView aria-label="ListView with action bar" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}>
        <Item key="edit">
          <Edit />
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
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example />

function Example_2() {
  let barItems = [
    {key: 'edit', label: 'Edit'},
    {key: 'copy', label: 'Copy'},
    {key: 'delete', label: 'Delete'}
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} maxWidth="size-6000">
      <ListView aria-label="ListView with action bar" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        items={barItems}
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}
        isEmphasized>
        {item => (
          <Item key={item.key}>
            {item.label}
          </Item>
        )}
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example_2 />

function ActionBarActions(props) {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([2]));
  let rows = [
    {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
    {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
    {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
    {id: 4, name: 'Pikachu', type: 'Electric', level: '100'}
  ];

  return (
    <ActionBarContainer height="size-5000">
      <TableView aria-label="Table with action bar and controlled selection" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
        <TableHeader>
          <Column key="name">Name</Column>
          <Column key="type">Type</Column>
          <Column key="level" align="end">Level</Column>
        </TableHeader>
        <TableBody items={rows}>
          {item => (
            <Row>
              {columnKey => <Cell>{item[columnKey]}</Cell>}
            </Row>
          )}
        </TableBody>
      </TableView>
      <ActionBar
        isEmphasized
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        /*- begin highlight -*/
        onClearSelection={() => {
          setSelectedKeys(new Set());
        }}
        onAction={key => alert(`Performing ${key} action...`)}
        /*- end highlight -*/>
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

function Example_3({isEmphasized}: {isEmphasized?: boolean}) {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} width="size-5000">
      <ListView aria-label="ListView with action bar" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        /*- begin highlight -*/
        isEmphasized={isEmphasized}
        /*- end highlight -*/
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}>
        <Item key="edit">
          <Edit />
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
      </ActionBar>
    </ActionBarContainer>
  );
}

<Flex direction="row" gap="size-200" wrap>
  <Example_3 />
  <Example_3 isEmphasized />
</Flex>

function Example_4() {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['photoshop']));

  return (
    <ActionBarContainer height={300} width="size-5000">
      <ListView aria-label="ListView with action bar" selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
        <Item key="photoshop">Adobe Photoshop</Item>
        <Item key="illustrator">Adobe Illustrator</Item>
        <Item key="xd">Adobe XD</Item>
      </ListView>
      <ActionBar
        /*- begin highlight -*/
        disabledKeys={['edit']}
        /*- end highlight -*/
        isEmphasized={true}
        selectedItemCount={selectedKeys === 'all' ? 'all' : selectedKeys.size}
        onAction={(key) => alert(`Performing ${key} action...`)}
        onClearSelection={() => setSelectedKeys(new Set())}>
        <Item key="edit">
          <Edit />
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
      </ActionBar>
    </ActionBarContainer>
  );
}

<Example_4 />

export const demos = {
  "example": Example,
  "content": Example_2,
  "events": ActionBarActions,
  "isemphasized": Example_3,
  "isdisabled": Example_4,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
