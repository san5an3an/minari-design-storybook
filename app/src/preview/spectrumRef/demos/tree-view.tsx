// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/tree/TreeView.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { Collection, Content, Heading, IllustratedMessage } from "@adobe/react-spectrum";
import type {Selection} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function Example1() {
  return (
    <>
    <TreeView aria-label="Example tree with static contents" defaultExpandedKeys={['documents', 'photos']} height="size-4600" maxWidth="size-6000">
      <TreeViewItem id="documents" textValue="Documents">
        <TreeViewItemContent>
          <Text>Documents</Text>
          <Folder />
        </TreeViewItemContent>
        <TreeViewItem id="project-a" textValue="Project A">
          <TreeViewItemContent>
            <Text>Project A</Text>
            <Folder />
          </TreeViewItemContent>
          <TreeViewItem id="weekly-report" textValue="Weekly-Report">
            <TreeViewItemContent>
              <Text>Weekly Report</Text>
              <FileTxt />
            </TreeViewItemContent>
          </TreeViewItem>
        </TreeViewItem>
        <TreeViewItem id="document-1" textValue="Document 1">
          <TreeViewItemContent>
            <Text>Document 1</Text>
            <FileTxt />
          </TreeViewItemContent>
        </TreeViewItem>
        <TreeViewItem id="document-2" textValue="Document 2">
          <TreeViewItemContent>
            <Text>Document 2</Text>
            <FileTxt />
          </TreeViewItemContent>
        </TreeViewItem>
      </TreeViewItem>
      <TreeViewItem id="photos" textValue="Photos">
        <TreeViewItemContent>
          <Text>Photos</Text>
          <Folder />
        </TreeViewItemContent>
        <TreeViewItem id="image-1" textValue="Image 1">
          <TreeViewItemContent>
            <Text>Image 1</Text>
            <Image />
          </TreeViewItemContent>
        </TreeViewItem>
        <TreeViewItem id="image-2" textValue="Image 2">
          <TreeViewItemContent>
            <Text>Image 2</Text>
            <Image />
          </TreeViewItemContent>
        </TreeViewItem>
        <TreeViewItem id="image-3" textValue="Image 3">
          <TreeViewItemContent>
            <Text>Image 3</Text>
            <Image />
          </TreeViewItemContent>
        </TreeViewItem>
      </TreeViewItem>
    </TreeView>
    </>
  );
}

type MyItem = {
  id: string,
  name: string,
  icon: JSX.Element,
  childItems?: MyItem[]
};

let items: MyItem[] = [
  {id: 'projects', name: 'Projects', icon: <Folder />, childItems: [
    {id: 'project-1', name: 'Project 1', icon: <FileTxt />},
    {id: 'project-2', name: 'Project 2', icon: <Folder />, childItems: [
      {id: 'document-a', name: 'Document A', icon: <FileTxt />},
      {id: 'document-b', name: 'Document B', icon: <FileTxt />},
    ]}
  ]},
  {id: 'reports', name: 'Reports', icon: <Folder />, childItems: [
    {id: 'report-1', name: 'Reports 1', icon: <FileTxt />}
  ]}
];

const DynamicTreeItem = (props) => {
  return (
    <>
      <TreeViewItem id={props.id} textValue={props.name}>
        <TreeViewItemContent>
          <Text>{props.name}</Text>
          {props.icon}
        </TreeViewItemContent>
        <Collection items={props.childItems}>
          {(item: any) => (
            <DynamicTreeItem
              id={item.id}
              icon={item.icon}
              childItems={item.childItems}
              textValue={item.name}
              name={item.name}>
              {item.name}
            </DynamicTreeItem>
          )}
        </Collection>
      </TreeViewItem>
    </>
  );
};

function ExampleTree(props) {
  return (
    <TreeView aria-label="Example tree with dynamic content" height="size-3000" maxWidth="size-6000" items={items} {...props}>
      {(item: MyItem) => (
        <DynamicTreeItem
          id={item.id}
          icon={item.icon}
          childItems={item.childItems}
          textValue={item.name}
          name={item.name} />
      )}
    </TreeView>
  );
}

function Example3() {
  return (
    <>
    <ExampleTree
      aria-label="Example tree with default expanded items"
      /*- begin highlight -*/
      defaultExpandedKeys={['projects', 'reports']}
      /*- end highlight -*/
    />
    </>
  );
}

function ControlledExpansion() {
  let [expandedKeys, setExpandedKeys] = React.useState<Set<Key>>(new Set(['projects', 'reports']));

  return (
    <ExampleTree
      aria-label="Example tree with controlled expanded items"
      /*- begin highlight -*/
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}
      /*- end highlight -*/
    />
  );
}

function Example5() {
  return (
    <>
    <ExampleTree
      aria-label="Example tree with selection"
      defaultExpandedKeys={['projects', 'project-2']}
      /*- begin highlight -*/
      selectionMode="multiple"
      defaultSelectedKeys={['document-a', 'document-b']}
      /*- end highlight -*/
    />
    </>
  );
}

function ControlledSelection() {
  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(['document-a', 'document-b']));

  return (
    <ExampleTree
      aria-label="Example tree with controlled selection"
      defaultExpandedKeys={['projects', 'project-2']}
      /*- begin highlight -*/
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      /*- end highlight -*/
    />
  );
}

function Example7() {
  return (
    <>
    <ExampleTree
      aria-label="Example tree with single selection"
      defaultExpandedKeys={['projects', 'project-2']}
      /*- begin highlight -*/
      selectionMode="single"
      /*- end highlight -*/
    />
    </>
  );
}

function Example8() {
  return (
    <>
    <ExampleTree
      aria-label="Example tree with disallowed empty selection"
      defaultExpandedKeys={['projects', 'project-2']}
      selectionMode="single"
      defaultSelectedKeys={['document-a']}
      /*- begin highlight -*/
      disallowEmptySelection
      /*- end highlight -*/
    />
    </>
  );
}

function Example9() {
  return (
    <>
    <ExampleTree
      aria-label="Example tree with disabled items"
      defaultExpandedKeys={['projects', 'project-2']}
      selectionMode="single"
      /*- begin highlight -*/
      disabledKeys={['document-a', 'document-b']}
      /*- end highlight -*/
    />
    </>
  );
}

function Example10() {
  return (
    <>
    <ExampleTree
      aria-label="Example tree with highlight selection"
      defaultExpandedKeys={['projects', 'project-2']}
      selectionMode="multiple"
      defaultSelectedKeys={['document-a', 'document-b']}
      /*- begin highlight -*/
      selectionStyle="highlight"
      /*- end highlight -*/
    />
    </>
  );
}

function Example11() {
  return (
    <>
    <Flex direction="column" gap="size-300">
      <ExampleTree
        aria-label="Example tree with item actions and checkbox selection"
        defaultExpandedKeys={['projects', 'project-2']}
        /*- begin highlight -*/
        selectionMode="multiple"
        onAction={key => alert(`Opening item ${key}...`)}
        /*- end highlight -*/
      />
      <ExampleTree
        aria-label="Example tree with item actions and highlight selection"
        defaultExpandedKeys={['projects', 'project-2']}
        /*- begin highlight -*/
        selectionMode="multiple"
        selectionStyle="highlight"
        onAction={key => alert(`Opening item ${key}...`)}
        /*- end highlight -*/
      />
    </Flex>
    </>
  );
}

function Example12() {
  return (
    <>
    <TreeView aria-label="Example tree with links" defaultExpandedKeys={new Set(['bookmarks'])} height="size-2000" maxWidth="size-6000">
      <TreeViewItem id="bookmarks" textValue="Bookmarks">
        <TreeViewItemContent>
          <Text>Bookmarks</Text>
          <Folder />
        </TreeViewItemContent>
        <TreeViewItem href="https://adobe.com/" target="_blank" id="adobe" textValue="Adobe">
          <TreeViewItemContent>
            <Text>Adobe</Text>
            <GlobeOutline />
          </TreeViewItemContent>
        </TreeViewItem>
        <TreeViewItem href="https://google.com/" target="_blank" id="google" textValue="Google">
          <TreeViewItemContent>
            <Text>Google</Text>
            <GlobeOutline />
          </TreeViewItemContent>
        </TreeViewItem>
        <TreeViewItem href="https://nytimes.com/" target="_blank" id="nytimes" textValue="New York Times">
          <TreeViewItemContent>
            <Text>New York Times</Text>
            <GlobeOutline />
          </TreeViewItemContent>
        </TreeViewItem>
      </TreeViewItem>
    </TreeView>
    </>
  );
}

function Example13() {
  return (
    <>
    <TreeView aria-label="Example tree with action groups" height="size-3000" maxWidth="size-6000" items={items}>
      {function renderItem(item: MyItem) {
        return (
          <TreeViewItem textValue={item.name}>
            <TreeViewItemContent>
              <Text>{item.name}</Text>
              {item.icon}
              <ActionGroup onAction={(key) => alert(`Item: ${item.id}, Action: ${key}`)}>
                <Item key="edit" textValue="Edit">
                  <Edit />
                  <Text>Edit</Text>
                </Item>
                <Item key="delete" textValue="Delete">
                  <Delete />
                  <Text>Delete</Text>
                </Item>
              </ActionGroup>
            </TreeViewItemContent>
            <Collection items={item.childItems}>
              {renderItem}
            </Collection>
          </TreeViewItem>
        )
      }}
    </TreeView>
    </>
  );
}

function Example14() {
  return (
    <>
    <TreeView aria-label="Example tree with action menus" height="size-3000" maxWidth="size-6000" items={items}>
      {function renderItem(item: MyItem) {
        return (
          <TreeViewItem textValue={item.name}>
            <TreeViewItemContent>
              <Text>{item.name}</Text>
              {item.icon}
              <ActionMenu onAction={(key) => alert(`Item: ${item.id}, Action: ${key}`)}>
                <Item key="edit" textValue="Edit">
                  <Edit />
                  <Text>Edit</Text>
                </Item>
                <Item key="delete" textValue="Delete">
                  <Delete />
                  <Text>Delete</Text>
                </Item>
              </ActionMenu>
            </TreeViewItemContent>
            <Collection items={item.childItems}>
              {renderItem}
            </Collection>
          </TreeViewItem>
        )
      }}
    </TreeView>
    </>
  );
}

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

<TreeView aria-label="Example tree for empty state" height="size-2400" maxWidth="size-6000" renderEmptyState={renderEmptyState}>
  {[]}
</TreeView>

export const demos = {
  "example": Example1,
  "content": ExampleTree,
  "expansion": Example3,
  "controlled-expansion": ControlledExpansion,
  "selection": Example5,
  "controlled-selection": ControlledSelection,
  "single-selection": Example7,
  "disallow-empty-selection": Example8,
  "disabled-items": Example9,
  "highlight-selection": Example10,
  "item-actions": Example11,
  "links": Example12,
  "with-action-groups": Example13,
  "with-action-menus": Example14,
  "empty-state": renderEmptyState,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
