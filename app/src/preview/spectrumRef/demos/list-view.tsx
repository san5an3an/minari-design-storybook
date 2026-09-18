// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/list/ListView.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionMenu, Content, Flex, Heading, IllustratedMessage, Image, Item, ListView, Text, useAsyncList } from "@adobe/react-spectrum";
import Delete from '@spectrum-icons/workflow/Delete';
import Edit from '@spectrum-icons/workflow/Edit';
import File from '@spectrum-icons/illustrations/File';
import Folder from '@spectrum-icons/illustrations/Folder';
import type {SpectrumListViewProps} from '@react-spectrum/list';
import NotFound from '@spectrum-icons/illustrations/NotFound';

function Example1() {
  return (
    <>
    <ListView selectionMode="multiple" aria-label="Static ListView items example" maxWidth="size-6000">
      <Item>Adobe Photoshop</Item>
      <Item>Adobe InDesign</Item>
      <Item>Adobe AfterEffects</Item>
      <Item>Adobe Illustrator</Item>
      <Item>Adobe Lightroom</Item>
    </ListView>
    </>
  );
}

function Example2() {
  const items = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  
  return (
    <>
    <ListView items={items} selectionMode="multiple" maxWidth="size-6000" height="250px" aria-label="Dynamic ListView items example">
      {(item) => <Item>{item.name}</Item>}
    </ListView>
    </>
  );
}

interface Character {
  name: string
}

function AsyncList() {
  let list = useAsyncList<Character>({
    async load({signal, cursor}) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(cursor || `https://swapi.py4e.com/api/people/?search=`, {signal});
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <ListView
      selectionMode="multiple"
      aria-label="Async loading ListView example"
      maxWidth="size-6000"
      height="size-3000"
      items={list.items}
      loadingState={list.loadingState}
      onLoadMore={list.loadMore}>
      {(item) => (
        <Item key={item.name}>{item.name}</Item>
      )}
    </ListView>
  );
}

function Example4() {
  return (
    <>
    <ListView selectionMode="multiple" maxWidth="size-6000" aria-label="ListView example with complex items" onAction={key => alert(`Triggering action on item ${key}`)}>
      <Item key="1" textValue="Utilities" hasChildItems>
        <Folder />
        <Text>Utilities</Text>
        <Text slot="description">16 items</Text>
        <ActionMenu>
          <Item key="edit" textValue="Edit">
            <Edit />
            <Text>Edit</Text>
          </Item>
          <Item key="delete" textValue="Delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionMenu>
      </Item>
      <Item key="2" textValue="Glasses Dog">
        <Image
          src="https://random.dog/1a0535a6-ca89-4059-9b3a-04a554c0587b.jpg"
          alt="Shiba Inu with glasses" />
        <Text>Glasses Dog</Text>
        <Text slot="description">JPG</Text>
        <ActionMenu>
          <Item key="edit" textValue="Edit">
            <Edit />
            <Text>Edit</Text>
          </Item>
          <Item key="delete" textValue="Delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionMenu>
      </Item>
      <Item key="3" textValue="readme">
        <File />
        <Text>readme.txt</Text>
        <Text slot="description">TXT</Text>
        <ActionMenu>
          <Item key="edit" textValue="Edit">
            <Edit />
            <Text>Edit</Text>
          </Item>
          <Item key="delete" textValue="Delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionMenu>
      </Item>
      <Item key="4" textValue="Onboarding">
        <File />
        <Text>Onboarding</Text>
        <Text slot="description">PDF</Text>
        <ActionMenu>
          <Item key="edit" textValue="Edit">
            <Edit />
            <Text>Edit</Text>
          </Item>
          <Item key="delete" textValue="Delete">
            <Delete />
            <Text>Delete</Text>
          </Item>
        </ActionMenu>
      </Item>
    </ListView>
    </>
  );
}

function Example5() {
  return (
    <>
    <ListView maxWidth="size-6000" selectionMode="multiple" defaultSelectedKeys={["Charizard", "Venusaur"]} aria-label="ListView multiple selection example">
      <Item key="Charizard">
        Charizard
      </Item>
      <Item key="Blastoise">
        Blastoise
      </Item>
      <Item key="Venusaur">
        Venusaur
      </Item>
      <Item key="Pikachu">
        Pikachu
      </Item>
    </ListView>
    </>
  );
}

function PokemonList<T>(props: Omit<SpectrumListViewProps<T>, 'children'>) {
  let rows = [
    {id: 1, name: 'Charizard'},
    {id: 2, name: 'Blastoise'},
    {id: 3, name: 'Venusaur'},
    {id: 4, name: 'Pikachu'}
  ];

  let [selectedKeys, setSelectedKeys] = React.useState(props.defaultSelectedKeys || new Set([2]));

  return (
    <ListView maxWidth="size-6000" aria-label="ListView with controlled selection" selectionMode="multiple" {...props} items={rows} selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ListView>
  );
}

function Example7() {
  // Using the same list as above
  return (
    <>
    <PokemonList selectionMode="single" selectionStyle="highlight" aria-label="ListView with single selection" />
    </>
  );
}

function Example8() {
  // Using the same list as above
  return (
    <>
    <PokemonList disallowEmptySelection aria-label="ListView with empty selection disallowed" />
    </>
  );
}

function Example9() {
  // Using the same list as above
  return (
    <>
    <PokemonList disabledKeys={[3]} aria-label="ListView with disabled rows" />
    </>
  );
}

function Example10() {
  return (
    <>
    <Flex wrap gap="size-300">
      <PokemonList
        disabledKeys={[3]}
        defaultSelectedKeys={[]}
        disabledBehavior="all"
        aria-label="ListView with all interaction disabled for disabled rows"
        width="size-2400"
        onAction={key => alert(`Opening item ${key}...`)}
      />
      <PokemonList
        disabledKeys={[3]}
        defaultSelectedKeys={[]}
        disabledBehavior="selection"
        aria-label="ListView with selection disabled for disabled rows"
        width="size-2400"
        onAction={key => alert(`Opening item ${key}...`)}
      />
    </Flex>
    </>
  );
}

function Example11() {
  // Using the same list as above
  return (
    <>
    <PokemonList selectionStyle="highlight" aria-label="Highlight selection ListView" />
    </>
  );
}

function Example12() {
  // Checkbox selection with onAction
  return (
    <>
    <Flex wrap gap="size-300">
      <PokemonList onAction={key => alert(`Opening item ${key}...`)} aria-label="Checkbox selection ListView with row actions" width="size-2400" />
      <PokemonList selectionStyle="highlight" onAction={key => alert(`Opening item ${key}...`)} aria-label="Highlight selection ListView with row actions" width="size-2400" />
    </Flex>
    </>
  );
}

function Example13() {
  return (
    <>
    <ListView aria-label="Links" selectionMode="multiple">
      <Item href="https://adobe.com/" target="_blank">Adobe</Item>
      <Item href="https://apple.com/" target="_blank">Apple</Item>
      <Item href="https://google.com/" target="_blank">Google</Item>
      <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
    </ListView>
    </>
  );
}

function Example14() {
  return (
    <>
    <DragIntoList />
    </>
  );
}

function Example15() {
  return (
    <>
    <DragIntoListFolder />
    </>
  );
}

function Example16() {
  return (
    <>
    <ReorderableList />
    </>
  );
}

function Example17() {
  return (
    <>
    <DragBetweenListsExample />
    </>
  );
}

function Example18() {
  return (
    <>
    <DragIntoListDefaultCopy />
    </>
  );
}

function Example19() {
  return (
    <>
    <CustomDragPreviewExample />
    </>
  );
}

function ListExample(props) {
  return (
    <ListView selectionMode="multiple" aria-label="Quiet ListView example" width="size-3000" {...props}>
      <Item>Adobe AfterEffects</Item>
      <Item>Adobe Dreamweaver</Item>
      <Item>Adobe Acrobat</Item>
    </ListView>
  );
}

<ListExample isQuiet />

function Example21() {
  return (
    <>
    <Flex wrap gap="size-300">
      <ListExample density="compact" aria-label="Compact ListView example" />
      <ListExample density="spacious" aria-label="Spacious ListView example" />
    </Flex>
    </>
  );
}

function Example22() {
  return (
    <>
    <ListExample overflowMode="wrap" aria-label="Text wrapping ListView example" width="size-2000" />
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

<ListView
  selectionMode="multiple"
  aria-label="Example ListView for empty state"
  maxWidth="size-6000"
  height="size-3000"
  renderEmptyState={renderEmptyState}>
  {[]}
</ListView>

export const demos = {
  "example-1": Example1,
  "content-1": Example2,
  "asynchronous-loading-1": AsyncList,
  "complex-items-1": Example4,
  "selection-1": Example5,
  "selection-2": PokemonList,
  "selection-3": Example7,
  "selection-4": Example8,
  "selection-5": Example9,
  "selection-6": Example10,
  "selection-7": Example11,
  "row-actions-1": Example12,
  "row-actions-2": Example13,
  "drag-and-drop-2": Example14,
  "drag-and-drop-4": Example15,
  "drag-and-drop-6": Example16,
  "drag-and-drop-8": Example17,
  "drag-and-drop-10": Example18,
  "drag-and-drop-12": Example19,
  "visual-options-1": ListExample,
  "visual-options-2": Example21,
  "visual-options-3": Example22,
  "visual-options-4": renderEmptyState,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "drag-and-drop-1": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-3": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-5": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-7": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-9": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
  "drag-and-drop-11": { code: "not-an-example", detail: "공식 문서가 이 코드 조각을 그리지 않고 코드로만 보여 줘요(render=false)." },
};
